# OutageBond submission logo

- Final artifact: `outagebond-logo.png`
- Created with the built-in image generation tool; no CLI/API fallback.
- Intended use: GenLayer Portal project logo. Existing application icon was not replaced.
- Palette follows the app: dark navy, amber and teal.
- First export had alpha-edge artifacts; a targeted image-generation edit produced the final opaque-background export.

## Original generation prompt

```text
Use case: logo-brand
Asset type: final square application logo for the OutageBond project submission, not a mockup or concept sheet.
Primary request: create one original, polished, memorable logo for OutageBond, a GenLayer-native app where validators verify outage reports to unlock service-bond payouts.
Scene/backdrop: uniform solid very dark navy #111b22, full bleed.
Subject: a bold, compact amber protective loop suggesting both an O and a softly angular shield. Integrate a crisp service-status pulse through its open center; one short teal segment bridges the interruption in the pulse, suggesting verified recovery and a fulfilled bond. Make the outline and pulse read as a unified, carefully designed emblem, not separate clip-art symbols. Favor an elegant distinctive silhouette and balanced negative space.
Style/medium: minimal flat vector-style brand design rendered as a clean PNG, precise smooth edges, consistent substantial strokes, geometric with gently softened corners.
Composition/framing: exactly one centered emblem, generous even margins of about 18 percent, optimized for a small square project avatar and circular cropping. Square 1024 by 1024 pixels.
Color palette: existing OutageBond amber #f5b65f with a restrained teal #62d6c2 accent on dark navy #111b22. Flat solid colors only.
Text: no words, no letters, no tagline, no surrounding labels.
Constraints: professional finished logo, visually strong at 64 pixels; no gradients, lighting effects, glow, texture, shadows, 3D, metallic materials, device mockups, presentation boards, watermark, currency symbols, or GenLayer's own logo. PNG under 2 MB if possible.
```

## Final cleanup prompt

```text
Use case: precise-object-edit
Input image: edit target, the OutageBond amber protective loop with its pulse and short teal accent.
Primary request: clean up this logo into a finished upload-ready application icon.
Preserve exactly the central emblem design, its proportions, placement, amber color and small teal accent.
Change only the background, transparency and rendering finish: replace ALL transparent and semi-transparent areas with one completely uniform solid dark navy #111b22 across the entire square, including the spaces inside the emblem and the gaps between strokes. The final image must be FULLY OPAQUE, with no transparency or alpha cutout. Remove every rainbow, yellow, red, green and gray fringe/speckle artifact around the artwork. Render the emblem as clean flat amber #f5b65f and teal #62d6c2 shapes with smooth antialiased edges, no bevels, shadows, gradients or texture. The only colors should be dark navy, amber, teal, and their antialiased edge blends.
Output: single square PNG, 1024 x 1024 if possible, under 2 MB, finished logo only, no text or mockup.
```
