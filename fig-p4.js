/* Conceptual figures for the physics-D sheets. Colours come from CSS classes only. */
const FIG_EXTRA_P4 = {

lcdmeras: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="Densities of radiation, matter and the cosmological constant against scale factor, showing the three cosmic eras">
<rect class="acf" x="48" y="6" width="211" height="16" rx="2"/><text class="lb" x="153" y="18" text-anchor="middle">radiation era</text>
<rect class="ocf" x="259" y="6" width="132" height="16" rx="2"/><text class="lb" x="325" y="18" text-anchor="middle">matter era</text>
<line class="ax" x1="44" y1="138" x2="400" y2="138"/><line class="ax" x1="44" y1="24" x2="44" y2="138"/>
<text class="tk mut" x="6" y="30">log ρ</text>
${[[48,'10⁹'],[164,'10⁶'],[280,'10³'],[396,'0']].map(([x,l])=>
`<line class="ax" x1="${x}" y1="134" x2="${x}" y2="142"/><text class="tk" x="${x}" y="149" text-anchor="middle">${l}</text>`).join('')}
<text class="tk mut" x="26" y="149" text-anchor="end">z</text>
<line class="mut2" x1="278" y1="24" x2="278" y2="138"/>
<text class="tk mut" x="274" y="126" text-anchor="end">recombination, z = 1100</text>
<path class="plst" d="M392 6 L392 138"/>
<path class="acst2 nofill" d="M48 36 L396 132"/>
<path class="ocst2 nofill" d="M48 51 L396 123"/>
<path class="plst2 nofill" d="M48 122 L396 122"/>
<circle class="ocd" cx="259" cy="94" r="4"/>
<path class="mut2" d="M252 109 L257 98"/>
<text class="tk oc" x="250" y="112" text-anchor="end">equality, z ≈ 3400</text>
<text class="tk pl" x="330" y="132" text-anchor="end">Λ takes over</text>
<line class="acst2" x1="250" y1="32" x2="268" y2="32"/><text class="tk" x="274" y="36">radiation, ρ ∝ a⁻⁴</text>
<line class="ocst2" x1="250" y1="48" x2="268" y2="48"/><text class="tk" x="274" y="52">matter, ρ ∝ a⁻³</text>
<line class="plst2" x1="250" y1="64" x2="268" y2="64"/><text class="tk" x="274" y="68">Λ, constant</text>
</svg>`,

hrdiag: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="Hertzsprung-Russell diagram with the main sequence, the giant branch and the white dwarf region">
<line class="ax" x1="50" y1="130" x2="400" y2="130"/><line class="ax" x1="50" y1="22" x2="50" y2="130"/>
${[[106,'30 000'],[239,'10 000'],[371,'3 200']].map(([x,l])=>
`<line class="ax" x1="${x}" y1="130" x2="${x}" y2="136"/><text class="tk" x="${x}" y="144" text-anchor="middle">${l}</text>`).join('')}
<text class="tk mut" x="226" y="155" text-anchor="middle">effective temperature (K) — hot at left</text>
${[[43,'4'],[64,'2'],[84,'0'],[105,'−2']].map(([y,l])=>
`<line class="ax" x1="46" y1="${y}" x2="50" y2="${y}"/><text class="tk" x="42" y="${+y+3}" text-anchor="end">${l}</text>`).join('')}
<text class="tk mut" x="6" y="30">log L/L⊙</text>
<ellipse class="ocf" cx="332" cy="60" rx="44" ry="17"/><text class="lb oc" x="332" y="63" text-anchor="middle">giants</text>
<ellipse class="mut2f" cx="200" cy="114" rx="40" ry="11"/><text class="lb mut" x="200" y="117" text-anchor="middle">white dwarfs</text>
<path class="acst2 nofill" d="M80 29 Q 150 46 186 53 Q 250 71 303 84 Q 345 96 372 105"/>
<text class="lb ac" x="196" y="44" text-anchor="middle">main sequence</text>
<circle class="ocd" cx="303" cy="84" r="3.8"/><text class="tk" x="297" y="80" text-anchor="end">Sun</text>
<text class="tk mut" x="92" y="26">40 M⊙</text>
<text class="tk mut" x="396" y="112" text-anchor="end">0.2 M⊙</text>
<path class="ocst" d="M307 81 L 326 68" marker-end="url(#ar)"/>
<text class="tk mut" x="250" y="124">no white dwarf above 1.44 M⊙</text>
</svg>`,

plasmahier: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="The ladder of plasma closures from the exact Klimontovich description down to ideal magnetohydrodynamics">
${[[8,'acf','Klimontovich'],[38,'acf','Vlasov (mean field)'],[68,'ocf','Two-fluid: electrons, ions'],[98,'ocf','Resistive MHD'],[128,'mut2f','Ideal MHD']].map(([y,c,l])=>
`<rect class="${c}" x="20" y="${y}" width="150" height="20" rx="3"/><text class="lb" x="95" y="${+y+14}" text-anchor="middle">${l}</text>`).join('')}
${[28,58,88,118].map(y=>`<path class="mut2" d="M95 ${y} L95 ${y+10}" marker-end="url(#arm)"/>`).join('')}
${[[36,'tk oc','ensemble-average; drop O(1/Λ)'],[66,'tk oc','take velocity moments, close at n = 2'],[96,'tk oc','ω ≪ Ω_ci, L ≫ ρ_i, u ≪ c, λ_mfp ≪ L'],[126,'tk pl','η → 0 — a singular limit']].map(([y,c,l])=>
`<text class="${c}" x="104" y="${y}">${l}</text>`).join('')}
${[[22,'exact, reversible, useless'],[52,'reversible; keeps all of f(v)'],[82,'keeps only n, u, p'],[112,'drops electron inertia and Hall term'],[142,'flux frozen; no reconnection']].map(([y,l])=>
`<text class="tk mut" x="180" y="${y}">${l}</text>`).join('')}
</svg>`,

strengthgap: () => `<svg viewBox="0 0 420 148" class="dia" role="img" aria-label="Rigid slip of a whole atomic plane compared with glide of a single dislocation, and the resulting strength gap">
<line class="mut2" x1="210" y1="18" x2="210" y2="100"/>
${[40,56,72,88,104,120,136,152].map(x=>`<circle class="mud" cx="${x}" cy="52" r="6"/>`).join('')}
${[46,62,78,94,110,126,142,158].map(x=>`<circle class="acd" cx="${x}" cy="34" r="6"/>`).join('')}
<line class="ax" x1="32" y1="61" x2="166" y2="61"/>
<path class="acst2" d="M44 20 L 150 20" marker-end="url(#arm)"/>
<text class="lb" x="100" y="78" text-anchor="middle">rigid slip: every bond at once</text>
<text class="tk ac" x="100" y="94" text-anchor="middle">τ ≈ G/2π ≈ 7.6 GPa for copper</text>
<line class="ax" x1="232" y1="61" x2="396" y2="61"/>
${[238,254,270,286,322,338,354,370,386].map(x=>`<line class="mut2" x1="${x}" y1="30" x2="${x}" y2="61"/>`).join('')}
<line class="ocst2" x1="304" y1="30" x2="304" y2="45"/>
<text class="lb oc" x="304" y="54" text-anchor="middle">⊥</text>
<path class="ocst" d="M312 22 L 352 22" marker-end="url(#ar)"/>
<text class="tk oc" x="356" y="25">glide</text>
<text class="lb" x="312" y="78" text-anchor="middle">dislocation glide: one row at a time</text>
<text class="tk oc" x="312" y="94" text-anchor="middle">τ_y ≈ G/10⁴ ≈ 1 MPa, annealed</text>
<text class="lb pl" x="210" y="106" text-anchor="middle">a factor of 10³–10⁴</text>
<path class="plst2" d="M92 114 L328 114" marker-start="url(#ar2)" marker-end="url(#ar2)"/>
<text class="tk mut" x="210" y="134" text-anchor="middle">whiskers, grown free of dislocations, reach ≈ G/30 — the control experiment</text>
</svg>`

};

const FIGCAP_EXTRA_P4 = {
 lcdmeras: 'Component densities against scale factor: radiation falls as a⁻⁴, matter as a⁻³, Λ not at all, so each dominates in turn — and Λ has done so for only the last fraction of a decade in a.',
 hrdiag: 'The theoretical HR diagram. The main sequence is a mass sequence, not an evolutionary track: stars move along it hardly at all, then leave it rightward to the giant branch and end as white dwarfs.',
 plasmahier: 'The five rungs of plasma theory, each reached by an explicit ordering. Information discarded at a rung is not recoverable from what remains, and the last step is a singular limit.',
 strengthgap: 'Why real metals are weak: sliding a whole plane costs G/2π, but a dislocation breaks one row of bonds at a time, so yield occurs three to four orders of magnitude lower.'
};
