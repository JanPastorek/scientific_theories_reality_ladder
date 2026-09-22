/* Concept figures for the second biology batch. Colours come from CSS classes only. */
const FIG_EXTRA_B2 = {

lowre: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Reynolds number axis from a swimming bacterium to a swimming human, with the force balance on each side and the scallop theorem marked in the viscous regime">
<line class="ax" x1="26" y1="96" x2="398" y2="96"/>
${[['10⁻⁵',40],['10⁻³',104],['10⁻¹',168],['10¹',232],['10³',296],['10⁵',384]].map(([l,x])=>
`<line class="ax" x1="${x}" y1="92" x2="${x}" y2="100"/><text class="tk" x="${x}" y="114" text-anchor="middle">${l}</text>`).join('')}
<text class="tk mut" x="212" y="130" text-anchor="middle">Re = ρ v L / μ</text>
<rect class="acf" x="26" y="60" width="150" height="20" rx="3"/>
<text class="lb" x="101" y="74" text-anchor="middle">E. coli · Re ≈ 10⁻⁴</text>
<rect class="ocf" x="246" y="60" width="152" height="20" rx="3"/>
<text class="lb" x="322" y="74" text-anchor="middle">human swimmer · Re ≈ 10⁴</text>
<line class="plst" x1="206" y1="34" x2="206" y2="96"/>
<text class="lb pl" x="200" y="30" text-anchor="end">inertia and viscosity comparable</text>
<text class="tk ac" x="26" y="48">μ∇²v = ∇p · time drops out</text>
<text class="tk oc" x="398" y="48" text-anchor="end">ρ(∂ₜv + v·∇v) retained</text>
<path class="acst" d="M101 88 L 101 82"/><path class="ocst" d="M322 88 L 322 82"/>
<text class="tk ac" x="26" y="146">scallop theorem: a reciprocal stroke gives zero net displacement here</text>
</svg>`,

fluxcone: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Flux balance analysis: the steady-state null space intersected with capacity bounds gives a convex cone, and a chosen objective picks a face of it">
<line class="ax" x1="40" y1="122" x2="300" y2="122"/><line class="ax" x1="40" y1="122" x2="40" y2="18"/>
<text class="tk mut" x="302" y="126">v₁</text><text class="tk mut" x="34" y="16" text-anchor="end">v₂</text>
<path class="acf" d="M40 122 L 232 30 L 268 96 Z"/>
<text class="lb ac" x="150" y="86" text-anchor="middle">feasible cone</text>
<text class="tk mut" x="150" y="100" text-anchor="middle">S·v = 0, vₘᵢₙ ≤ v ≤ vₘₐₓ</text>
<line class="plst" x1="150" y1="14" x2="300" y2="86"/>
<line class="plst" x1="176" y1="14" x2="326" y2="86"/>
<text class="tk pl" x="330" y="82">c·v = const</text>
<circle class="ocd" cx="232" cy="30" r="4"/>
<text class="lb oc" x="238" y="26">optimum: a vertex</text>
<text class="tk mut" x="40" y="140">the objective c is chosen, not measured — that is the load-bearing step</text>
</svg>`,

frenchflag: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="Positional information: an exponential morphogen gradient read by two thresholds partitions a field of cells into three fates, with the readout error set by the local gradient slope">
<line class="ax" x1="40" y1="76" x2="398" y2="76"/><line class="ax" x1="40" y1="76" x2="40" y2="14"/>
<text class="tk mut" x="34" y="16" text-anchor="end">C(x)</text><text class="tk mut" x="398" y="92" text-anchor="end">x  (μm)</text>
<path class="acst2 nofill" d="M40 18 C 110 52, 180 66, 398 73"/>
<line class="plst" x1="40" y1="34" x2="398" y2="34"/><text class="tk pl" x="398" y="30" text-anchor="end">θ₁</text>
<line class="plst" x1="40" y1="56" x2="398" y2="56"/><text class="tk pl" x="398" y="52" text-anchor="end">θ₂</text>
<line class="mut2" x1="97" y1="34" x2="97" y2="112"/><line class="mut2" x1="176" y1="56" x2="176" y2="112"/>
<rect class="acf" x="40" y="96" width="57" height="18"/>
<rect class="mut2f" x="97" y="96" width="79" height="18"/>
<rect class="ocf" x="176" y="96" width="222" height="18"/>
<text class="lb" x="68" y="110" text-anchor="middle">A</text><text class="lb" x="136" y="110" text-anchor="middle">B</text><text class="lb" x="286" y="110" text-anchor="middle">C</text>
<text class="tk mut" x="40" y="136">λ ≈ 100 μm over a 500 μm embryo · σₓ = σ_C / |dC/dx|</text>
<text class="tk oc" x="398" y="136" text-anchor="end">shallow gradient ⇒ sloppy boundary</text>
</svg>`

};
const FIGCAP_EXTRA_B2 = {
 lowre: 'Life at low Reynolds number: for a bacterium inertia is smaller than viscosity by four orders of magnitude, the time derivative drops out of the equation of motion, and reciprocal strokes get you nowhere.',
 fluxcone: 'Flux balance analysis: steady-state mass balance plus capacity bounds define a convex cone of feasible flux vectors; an assumed objective, not a measurement, selects the point in it that is called the prediction.',
 frenchflag: 'Positional information: a decaying morphogen profile read against fixed thresholds assigns cell fates, and the precision of each boundary is set by the local slope of the gradient against the noise in the readout.'
};
