/* Concept figures for the fourth meta batch. Colours come from CSS classes only. */
const FIG_EXTRA_M4 = {

univbasin: () => `<svg viewBox="0 0 420 172" class="dia" role="img" aria-label="Renormalisation-group flow near a critical fixed point: two microscopically unrelated systems flow along irrelevant directions in coupling space to the same fixed point and therefore share critical exponents, while one relevant direction flows away, and systems outside the basin belong to a different class or none">
<line class="ax" x1="36" y1="86" x2="386" y2="86"/>
<text class="tk mut" x="36" y="78">critical surface: ξ = ∞, irrelevant directions</text>
<path class="acst" d="M74 86 L 150 86" marker-end="url(#ar)"/>
<path class="ocst" d="M348 86 L 272 86" marker-end="url(#ar)"/>
<circle class="pld" cx="211" cy="86" r="5"/>
<text class="lb pl" x="221" y="82">fixed point g*</text>
<text class="tk pl" x="221" y="96">ν = 0.62997, η = 0.03630</text>
<rect class="acf" x="30" y="98" width="92" height="19" rx="3"/>
<text class="lb" x="76" y="112" text-anchor="middle">3D Ising magnet</text>
<rect class="ocf" x="300" y="98" width="92" height="19" rx="3"/>
<text class="lb" x="346" y="112" text-anchor="middle">liquid–gas point</text>
<line class="acst" x1="76" y1="98" x2="76" y2="88"/>
<line class="ocst" x1="346" y1="98" x2="346" y2="88"/>
<path class="plst" d="M211 80 L 211 40" marker-end="url(#ar)"/>
<path class="plst" d="M211 92 L 211 130" marker-end="url(#ar)"/>
<text class="tk pl" x="203" y="38" text-anchor="end">relevant direction: t = (T − T_c)/T_c</text>
<text class="tk pl" x="203" y="132" text-anchor="end">y &gt; 0 grows; y &lt; 0 dies</text>
<path class="mut2 nofill" d="M22 24 L 398 24 L 398 148 L 22 148 Z"/>
<text class="tk mut" x="30" y="20">outside this basin — long-range coupling, quenched disorder, non-equilibrium drive — a different class, or none</text>
</svg>`,

graphreps: () => `<svg viewBox="0 0 420 168" class="dia" role="img" aria-label="One system yields three non-equivalent graph representations: a binding assay giving a hub, a co-complex assay giving cliques, and a correlation measure giving threshold-dependent modules, each supporting a different conclusion about the same nodes">
<rect class="acf2" x="12" y="58" width="70" height="36" rx="4"/>
<text class="lb" x="47" y="74" text-anchor="middle">one system</text>
<text class="tk mut" x="47" y="86" text-anchor="middle">same 5 nodes</text>
<path class="mut2" d="M84 70 L 118 34" marker-end="url(#arm)"/>
<path class="mut2" d="M84 76 L 118 80" marker-end="url(#arm)"/>
<path class="mut2" d="M84 84 L 118 126" marker-end="url(#arm)"/>
<path class="acst" d="M160 22 L 136 42 M160 22 L 184 44 M160 22 L 208 24 M160 22 L 230 40"/>
${[[136,42],[160,22],[184,44],[208,24],[230,40]].map(([x,y])=>`<circle class="acd" cx="${x}" cy="${y}" r="4.5"/>`).join('')}
<text class="tk ac" x="250" y="26">two-hybrid: binary contacts</text>
<text class="tk mut" x="250" y="40">one hub, γ̂ ≈ 2.3</text>
<path class="ocst" d="M136 92 L 160 72 L 184 94 Z M184 94 L 208 74 L 230 90 L 184 94"/>
${[[136,92],[160,72],[184,94],[208,74],[230,90]].map(([x,y])=>`<circle class="ocd" cx="${x}" cy="${y}" r="4.5"/>`).join('')}
<text class="tk oc" x="250" y="76">co-complex: cliques</text>
<text class="tk mut" x="250" y="90">C ≈ 0.9, no hub at all</text>
<path class="plst" d="M136 140 L 160 120 L 184 142 L 208 122 L 230 138"/>
${[[136,140],[160,120],[184,142],[208,122],[230,138]].map(([x,y])=>`<circle class="pld" cx="${x}" cy="${y}" r="4.5"/>`).join('')}
<text class="tk pl" x="250" y="124">co-expression: correlation</text>
<text class="tk mut" x="250" y="138">edges and modules set by threshold</text>
<text class="tk mut" x="12" y="112">no canonical</text>
<text class="tk mut" x="12" y="126">choice exists</text>
</svg>`

};
const FIGCAP_EXTRA_M4 = {
 univbasin: 'Universality as an eigenvalue statement: systems differing only along irrelevant directions flow to the same renormalisation-group fixed point, so they share exponents — a derivation that holds inside one basin and nowhere else.',
 graphreps: 'The representation problem: three defensible assays on the same five entities give three graphs with different hubs, different clustering and different modules, and nothing in network science says which is the network.'
};
