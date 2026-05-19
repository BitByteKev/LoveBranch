# /public/images — image slot reference

Replace each placeholder below with a real photo before launch. Filenames must match exactly — the React components reference these paths directly. All images should be high-quality landscape orientation unless noted; serve as JPG or WebP.

## Homepage

| File | Used in | Recommended size | Notes |
| --- | --- | --- | --- |
| `hero.jpg` | Homepage hero visual | 1080 × 1350 (4:5) | Hero shot — crew at work, finished yard, or signature truck. Will be cropped with `object-fit: cover`. |
| `og.jpg` | Open Graph / Twitter share card | 1200 × 630 | Branded card for social sharing. Include logo + tagline. |

## Service cards (homepage `/#services` grid) and service pages

Each photo appears both as a small thumbnail on the homepage card and as the large hero on its service page. Shoot/source the highest-res version you have; Next.js will resize.

| File | Service | Recommended | Notes |
| --- | --- | --- | --- |
| `tree-removal.jpg` | Tree Removal & Trimming | 1600 × 1000 | Crew removing a tree, climber on rope, or before/after. |
| `hedge-palm.jpg` | Hedge & Palm Care | 1600 × 1000 | Freshly trimmed hedge line or skinned palm trunk. |
| `hillside-clearing.jpg` | Hillside Fire Clearing | 1600 × 1000 | Cleared slope, defensible space example. |
| `weed-abatement.jpg` | Weed Abatement & Spraying | 1600 × 1000 | Cleared lot or driveway edge after treatment. |
| `lawn-care.jpg` | Lawn Care & Maintenance | 1600 × 1000 | Manicured front-yard lawn with crisp edge. |
| `hardscaping.jpg` | Hardscaping & Ground Cover | 1600 × 1000 | Paver patio, DG path, or rock ground cover. |
| `turf-sod.jpg` | Turf & Sod Installation | 1600 × 1000 | Finished turf install (artificial or real sod). |
| `fence.jpg` | Fence Installation | 1600 × 1000 | New wood/vinyl fence run, ideally with clean line. |
| `junk-hauling.jpg` | Junk Hauling & Debris | 1600 × 1000 | Loaded truck or before/after of a cleared yard. |

## Quick checklist before launch

- [ ] All filenames match exactly (kebab-case, `.jpg`)
- [ ] No people's faces without consent (use signed releases or shoot from behind)
- [ ] No competitor logos or vehicles in frame
- [ ] Images optimized — target < 300 KB each after compression
- [ ] Replace `og.jpg` with branded share card (most important for Slack/Twitter previews)

## Alt text

Alt text is hard-coded in the components — no need to edit anything. If you change the *subject* of a photo (e.g. replace a tree-removal shot with a stump-grinding shot), update the corresponding `alt=` prop in `app/page.tsx` or `app/services/<slug>/page.tsx` so the description still matches the image.

## Until photos are added

The site will render with broken-image icons in image slots. Once you drop real files in here matching the filenames above, they appear automatically on next dev/build — no code changes required.
