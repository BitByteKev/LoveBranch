import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import { after, before, test } from "node:test";

let server;
let origin;
let output = "";

before(async () => {
  const reservation = createServer();
  reservation.listen(0, "127.0.0.1");
  await once(reservation, "listening");
  const port = reservation.address().port;
  await new Promise((resolve) => reservation.close(resolve));
  origin = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (data) => { output += data; });
  server.stderr.on("data", (data) => { output += data; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(`Server exited: ${output}`);
    try {
      const response = await fetch(`${origin}/robots.txt`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Server did not become ready: ${output}`);
});

after(async () => {
  if (server && server.exitCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    await exited;
  }
});

const services = ["tree-removal", "hedge-palm-care", "hillside-fire-clearing", "weed-abatement", "lawn-care", "hardscaping", "turf-sod-installation", "fence-installation", "junk-hauling"];
for (const path of ["/", "/areas-we-serve", "/quote", "/work", ...services.map((slug) => `/services/${slug}`)]) {
  test(`production page ${path} preserves rendered content and metadata`, async () => {
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /Love Branch/);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /application\/ld\+json/);
    if (path.startsWith("/services/")) {
      assert.ok(html.includes(`href="https://lovebranchsd.com${path}"`));
      assert.match(html, /"@type":"Service"/);
    }
  });
}

test("search metadata, public assets and missing routes are served correctly", async () => {
  const sitemap = await fetch(`${origin}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const slug of services) assert.ok(xml.includes(`https://lovebranchsd.com/services/${slug}`));
  const robots = await fetch(`${origin}/robots.txt`);
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/lovebranchsd\.com\/sitemap.xml/);
  const logo = await fetch(`${origin}/images/logo.avif`);
  assert.equal(logo.status, 200);
  assert.match(logo.headers.get("content-type"), /image\/avif/);
  assert.equal((await fetch(`${origin}/__missing_smoke_test_page__`)).status, 404);
});
