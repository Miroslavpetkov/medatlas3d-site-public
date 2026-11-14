# Servier Medical Art pictures

Pictures from [Servier Medical Art](https://smart.servier.com/) for the Viruses, Bacteria and
Diseases sections. Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Commercial
use, including a paid app, is allowed **with credit**. The app shows the credit line by itself
under any picture whose file is in this folder, so keep Servier files here and nowhere else.

## Adding one
1. On smart.servier.com, open the picture (Medical Specialties → Infectiology → Virology / Bacteriology)
   and press **Download the image** (PNG).
2. Save it here with a short lower-case name, e.g. `hiv.png`, `influenza.png`, `bacterium-gram-neg.png`.
3. In `src/concepts/content/<section>.ts`, add `image: 'servier/hiv.png'` to the virus (library entry)
   or to a list item (a stage, a part…).

If you change a picture (colours, labels, crop), it is still fine; the licence allows it, but the
credit should then say "adapted from". Tell whoever edits `src/concepts/screen.ts` (the `credit` line).

## Useful to start with (Infectiology → Virology has 23 pictures)
Adenovirus, bacteriophage, hepatitis virus, herpes virus, HIV, influenza virus, SARS-CoV-2,
tobacco mosaic virus; under Infectiology also generic bacterium drawings and a Petri dish.
