/* Concept figures: control, game theory, machine learning. Colours from CSS classes only. */
const FIG_EXTRA_M5 = {

waterbed: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Bode's sensitivity integral: pushing the sensitivity magnitude below one over some band of frequencies forces it above one elsewhere, so the area of log sensitivity is conserved">
<line class="ax" x1="40" y1="82" x2="404" y2="82"/><line class="ax" x1="40" y1="122" x2="40" y2="20"/>
<text class="tk mut" x="404" y="138" text-anchor="end">log ω</text>
<text class="tk mut" x="36" y="24" text-anchor="end">log |S|</text>
<text class="tk mut" x="36" y="86" text-anchor="end">0</text>
<path class="acst2 nofill" d="M40 106 C 90 106, 120 104, 150 96 C 180 88, 196 46, 240 40 C 284 34, 320 74, 360 80 L 404 82"/>
<path class="acf2" d="M40 82 L 40 106 C 90 106, 120 104, 150 96 C 170 90, 180 86, 190 82 Z"/>
<path class="ocf2" d="M190 82 C 200 70, 210 46, 240 40 C 284 34, 320 74, 360 80 L 404 82 Z"/>
<text class="tk ac" x="88" y="118">disturbance rejected</text>
<text class="tk oc" x="272" y="30" text-anchor="middle">amplified here — necessarily</text>
<text class="tk mut" x="40" y="146">∫₀^∞ ln|S(jω)| dω = π Σ Re(pₖ) over unstable poles — zero for a stable plant.</text>
</svg>`,

folkset: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="The folk theorem: in the repeated game, every payoff pair that is feasible and gives each player at least the minmax value can be sustained as an equilibrium, which is almost the whole feasible set">
<line class="ax" x1="48" y1="122" x2="300" y2="122"/><line class="ax" x1="48" y1="122" x2="48" y2="16"/>
<text class="tk mut" x="302" y="126">u₁</text><text class="tk mut" x="44" y="16" text-anchor="end">u₂</text>
<path class="mut2f" d="M60 114 L 244 108 L 210 30 L 74 42 Z"/>
<line class="plst" x1="128" y1="122" x2="128" y2="16"/>
<line class="plst" x1="48" y1="88" x2="300" y2="88"/>
<text class="tk pl" x="132" y="26">minmax u₁</text>
<text class="tk pl" x="296" y="84" text-anchor="end">minmax u₂</text>
<path class="acf" d="M128 88 L 224 84 L 208 36 L 128 44 Z"/>
<text class="lb ac" x="176" y="66" text-anchor="middle">all of this</text>
<text class="tk ac" x="176" y="78" text-anchor="middle">is an equilibrium</text>
<circle class="ocd" cx="90" cy="104" r="4"/>
<text class="tk oc" x="96" y="108">one-shot Nash</text>
<text class="tk mut" x="318" y="60">as δ → 1</text>
<text class="tk mut" x="318" y="76">a theory that</text>
<text class="tk mut" x="318" y="90">permits everything</text>
<text class="tk mut" x="318" y="104">forbids nothing</text>
</svg>`,

dbldesc: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Double descent: test error first follows the classical U-shaped bias-variance curve, peaks at the interpolation threshold where the model just fits the training data, and then falls again as capacity grows further">
<line class="ax" x1="40" y1="118" x2="406" y2="118"/><line class="ax" x1="40" y1="118" x2="40" y2="18"/>
<text class="tk mut" x="406" y="136" text-anchor="end">model capacity</text>
<text class="tk mut" x="36" y="20" text-anchor="end">error</text>
<path class="mut2" d="M40 112 C 90 112, 140 110, 200 110 C 260 110, 330 110, 406 110"/>
<text class="tk mut" x="70" y="106">training error</text>
<path class="acst2 nofill" d="M40 42 C 70 76, 92 88, 118 86 C 144 84, 160 56, 178 30"/>
<path class="ocst2 nofill" d="M178 30 C 196 58, 214 82, 246 88 C 300 96, 350 86, 406 84"/>
<line class="plst" x1="178" y1="18" x2="178" y2="118"/>
<text class="tk pl" x="182" y="26">interpolation threshold</text>
<text class="tk ac" x="66" y="60">classical U</text>
<text class="tk oc" x="330" y="74" text-anchor="middle">second descent</text>
<text class="tk mut" x="40" y="146">Where the classical theory says the curve should keep rising, it comes back down.</text>
</svg>`

};
const FIGCAP_EXTRA_M5 = {
 waterbed: 'Bode’s integral makes feedback design a zero-sum problem in frequency: sensitivity suppressed in one band must reappear in another, and for an unstable plant the total is strictly positive.',
 folkset: 'The folk theorem in one picture. Almost every individually rational payoff is a subgame-perfect equilibrium of the repeated game, which is why the result is a warning rather than a prediction.',
 dbldesc: 'Double descent: test error peaks where the model has just enough capacity to interpolate the training set, then falls again — behaviour the classical bias–variance account does not predict.'
};
