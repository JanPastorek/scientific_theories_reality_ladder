/* Apparatus drawings for the third biology batch. Colours come from CSS classes only, so both themes work. */
const APP_EXTRA_B3 = {

plaque: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Jerne plaque assay: spleen cells suspended with sheep red cells in an agar overlay, shown in cross-section and in plan, each antibody-secreting cell clearing a round hole in the red lawn">
<text class="lb" x="16" y="24">agar overlay, cross-section</text>
<rect class="mut2f" x="16" y="80" width="180" height="16"/>
<rect class="acf2" x="16" y="56" width="180" height="24"/>
${[22,31,40,49,58,67,76,132,141,150,159,168,177,186].map(x=>`<circle class="ocd" cx="${x}" cy="68" r="2"/>`).join('')}
<circle class="acst nofill" cx="104" cy="68" r="17"/>
<circle class="acd" cx="104" cy="68" r="3.6"/>
<path class="ocst" d="M104 34 L 104 48" marker-end="url(#ar)"/>
<text class="lb ac" x="104" y="30" text-anchor="middle">one secreting cell</text>
<text class="tk mut" x="16" y="110">base agar below, sheep red cells above</text>
<text class="lb" x="312" y="20" text-anchor="middle">dish, plan view</text>
<circle class="ax nofill" cx="312" cy="78" r="48"/>
${(()=>{let o='';for(let i=0;i<64;i++){const a=i*2.399,rr=46*Math.sqrt((i+0.5)/64);const x=312+rr*Math.cos(a),y=78+rr*Math.sin(a);o+=`<circle class="ocd" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.7"/>`}return o})()}
${[[292,58],[332,90],[300,104]].map(([x,y])=>`<circle class="acst nofill" cx="${x}" cy="${y}" r="9"/><circle class="mud" cx="${x}" cy="${y}" r="2.4"/>`).join('')}
<text class="tk oc" x="312" y="140" text-anchor="middle">plaques 0.1–1 mm across</text>
<text class="tk oc" x="16" y="150">≈50 plaque-forming cells per 10⁶ spleen cells before immunisation; 10³–10⁴ by day 4</text>
</svg>`,

nossal: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Nossal and Lederberg single-cell assay: individual lymph node cells pipetted into microdroplets under paraffin oil on a coverslip, each droplet then tested with motile Salmonella of one flagellar serotype">
<text class="lb" x="18" y="24">one cell per droplet, under oil</text>
<rect class="acf2" x="18" y="62" width="384" height="42"/>
<rect class="mut2f" x="18" y="104" width="384" height="10"/>
<text class="tk mut" x="400" y="80" text-anchor="end">paraffin oil</text>
<text class="tk mut" x="400" y="128" text-anchor="end">coverslip</text>
<path class="acst2" d="M40 30 L 158 86"/>
<text class="tk ac" x="44" y="46">micropipette</text>
${[110,180,250,320].map(x=>`<circle class="acf" cx="${x}" cy="92" r="12"/>`).join('')}
<circle class="mud" cx="110" cy="92" r="3"/><circle class="mud" cx="180" cy="92" r="3"/>
<circle class="acd" cx="250" cy="92" r="3"/><circle class="acd" cx="320" cy="92" r="3"/>
<path class="ocst" d="M242 84 q 4 -4 8 0 q 4 4 8 0"/><path class="ocst" d="M242 100 q 4 4 8 0 q 4 -4 8 0"/>
<path class="ocst" d="M312 84 q 4 -4 8 0 q 4 4 8 0"/><path class="ocst" d="M314 100 q 4 4 8 0 q 4 -4 8 0"/>
<circle class="ocst nofill" cx="320" cy="92" r="11"/>
<text class="tk mut" x="250" y="132" text-anchor="middle">type d: still swimming</text>
<text class="tk oc" x="330" y="132" text-anchor="start">type i: immobilised</text>
<text class="tk oc" x="18" y="150">droplet ≈1 nL · every positive cell scored one serotype, never both</text>
</svg>`,

tonegawa: () => `<svg viewBox="0 0 420 162" class="dia" role="img" aria-label="Hozumi and Tonegawa restriction digest: embryonic and myeloma DNA cut with BamHI and sized, the embryo giving two hybridising fragments and the myeloma a single smaller one carrying both variable and constant sequences">
<text class="lb" x="118" y="28" text-anchor="middle">embryo DNA</text>
<text class="lb" x="250" y="28" text-anchor="middle">myeloma DNA</text>
<line class="ax" x1="62" y1="40" x2="62" y2="140"/>
${[['6 kb',58],['4 kb',90],['2.4 kb',118]].map(([l,y])=>
`<line class="ax" x1="58" y1="${y}" x2="66" y2="${y}"/><text class="tk" x="54" y="${+y+4}" text-anchor="end">${l}</text>`).join('')}
<rect class="mut2f" x="90" y="40" width="56" height="100"/>
<rect class="acf" x="92" y="54" width="52" height="9"/>
<rect class="ocf" x="92" y="86" width="52" height="9"/>
<rect class="mut2f" x="222" y="40" width="56" height="100"/>
<rect class="ocf" x="224" y="114" width="52" height="9"/>
<rect class="acf" x="224" y="114" width="26" height="9"/>
<path class="ocst" d="M152 96 L 216 112" marker-end="url(#ar)"/>
<text class="tk oc" x="184" y="94" text-anchor="middle">joined</text>
<rect class="acf" x="298" y="48" width="14" height="9"/><text class="tk ac" x="318" y="56">whole-mRNA probe only (V)</text>
<rect class="ocf" x="298" y="72" width="14" height="9"/><text class="tk oc" x="318" y="80">C-region half-probe</text>
<text class="tk mut" x="298" y="110">myeloma band binds both</text>
<text class="tk oc" x="62" y="152">V–C separation falls from ~10⁵ bp in germline to ~10³ bp in the plasma cell</text>
</svg>`,

curare: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Bernard's curare preparation: two limbs of one frog, one with its blood supply ligated so the poison cannot reach it, each with its nerve and muscle stimulated in turn">
<text class="lb" x="18" y="24">ligated limb — no poison delivered</text>
<line class="acst2" x1="24" y1="52" x2="128" y2="52"/>
<rect class="acf" x="130" y="40" width="42" height="24" rx="2"/>
<text class="tk" x="151" y="56" text-anchor="middle">muscle</text>
<path class="plst" d="M24 32 L 24 46" marker-end="url(#ar2)"/>
<text class="tk pl" x="30" y="38">stimulate nerve</text>
<line class="ocst" x1="68" y1="40" x2="68" y2="64"/><line class="ocst" x1="74" y1="40" x2="74" y2="64"/>
<text class="tk oc" x="71" y="76" text-anchor="middle">ligature</text>
<text class="tk ac" x="180" y="56">contracts</text>
<text class="lb" x="18" y="98">perfused limb — curare in the blood</text>
<line class="acst2" x1="24" y1="124" x2="124" y2="124"/>
<circle class="pld" cx="128" cy="124" r="5"/>
<rect class="acf" x="134" y="112" width="42" height="24" rx="2"/>
<text class="tk" x="155" y="128" text-anchor="middle">muscle</text>
<path class="plst" d="M24 104 L 24 118" marker-end="url(#ar2)"/>
<text class="tk pl" x="30" y="110">stimulate nerve</text>
<text class="tk mut" x="184" y="120">no contraction</text>
<path class="plst" d="M196 136 L 178 130" marker-end="url(#ar2)"/>
<text class="tk pl" x="202" y="140">direct stimulus: contracts</text>
<text class="tk oc" x="18" y="150">the junction is defined by exclusion · a mammal dies in minutes unless ventilated</text>
</svg>`,

heartlung: () => `<svg viewBox="0 0 420 165" class="dia" role="img" aria-label="Starling's heart-lung preparation: the heart perfuses its own coronaries and the ventilated lungs, venous return set by the height of a reservoir, aortic outflow passing through an adjustable screw clamp, ventricular volume written on a drum by a cardiometer">
<rect class="mut2f" x="20" y="36" width="46" height="62"/>
<text class="tk" x="43" y="30" text-anchor="middle">reservoir</text>
<line class="plst" x1="12" y1="36" x2="12" y2="98"/>
<path class="plst" d="M7 36 L 17 36 M7 98 L 17 98"/>
<text class="tk pl" x="12" y="112" text-anchor="middle">h</text>
<path class="ocst" d="M43 100 L 43 122 L 142 122" marker-end="url(#ar)"/>
<rect class="acf" x="146" y="82" width="66" height="50" rx="8"/>
<text class="lb" x="179" y="112" text-anchor="middle">heart</text>
<ellipse class="acf2" cx="156" cy="56" rx="21" ry="15"/><ellipse class="acf2" cx="204" cy="56" rx="21" ry="15"/>
<text class="tk" x="180" y="34" text-anchor="middle">lungs, ventilated</text>
<path class="acst" d="M166 80 C 160 72, 152 72, 150 68"/><path class="acst" d="M196 80 C 202 72, 208 72, 210 68"/>
<path class="ocst" d="M212 100 L 262 100" marker-end="url(#ar)"/>
<rect class="mut2f" x="264" y="88" width="34" height="24"/>
<line class="ocst" x1="268" y1="88" x2="294" y2="112"/><line class="ocst" x1="268" y1="112" x2="294" y2="88"/>
<text class="tk" x="281" y="82" text-anchor="middle">screw clamp</text>
<path class="ocst" d="M298 100 L 330 100 L 330 20 L 43 20 L 43 32" marker-end="url(#ar)"/>
<rect class="plst nofill" x="140" y="76" width="78" height="62"/>
<path class="plst" d="M220 130 L 334 130" marker-end="url(#ar2)"/>
<circle class="ax nofill" cx="358" cy="130" r="15"/>
<text class="tk pl" x="358" y="108" text-anchor="middle">cardiometer → drum</text>
<text class="tk oc" x="20" y="150">reservoir height sets filling pressure · output tracks venous return over a 3–4× range</text>
</svg>`,

micropunc: () => `<svg viewBox="0 0 420 162" class="dia" role="img" aria-label="Micropuncture of the nephron: a hairpin loop of Henle set against a cortex-to-papilla osmolality scale, with water leaving the descending limb, salt pumped out of the ascending limb, and a glass micropipette sampling the early distal tubule">
<text class="tk mut" x="52" y="26" text-anchor="end">mOsm/kg</text>
<line class="ax" x1="56" y1="36" x2="56" y2="138"/>
${[['290',40],['600',88],['1200',132]].map(([l,y])=>
`<line class="ax" x1="52" y1="${y}" x2="60" y2="${y}"/><text class="tk" x="48" y="${+y+4}" text-anchor="end">${l}</text>`).join('')}
<path class="acst2" d="M112 36 L 112 118 Q 112 134 127 134 Q 142 134 142 118 L 142 36"/>
${[62,84,106].map(y=>`<path class="ocst" d="M146 ${y} L 176 ${y}" marker-end="url(#ar)"/>`).join('')}
<text class="tk oc" x="180" y="88">NaCl out, no water</text>
${[60,84,108].map(y=>`<path class="plst" d="M92 ${y} L 108 ${y}" marker-end="url(#ar2)"/>`).join('')}
<text class="tk pl" x="88" y="88" text-anchor="end">H₂O</text>
<path class="acst2" d="M142 36 L 214 36"/>
<path class="acst2" d="M262 20 L 220 34"/>
<text class="tk ac" x="266" y="22">pipette, 6–10 μm tip</text>
<circle class="acd" cx="216" cy="36" r="4"/>
<text class="tk ac" x="214" y="56">early distal: 100–150 mOsm/kg</text>
<path class="ocst2" d="M300 36 L 300 138"/>
<text class="tk" x="306" y="100">collecting duct</text>
<text class="tk mut" x="112" y="26" text-anchor="middle">loop of Henle</text>
<text class="tk oc" x="56" y="152">papillary tip 1200–1400 mOsm/kg in man; several thousand in a hamster</text>
</svg>`,

gullmodel: () => `<svg viewBox="0 0 420 160" class="dia" role="img" aria-label="Tinbergen and Perdeck's gull head models: a complete cardboard head with a red spot on the bill, the same head with the spot removed, and a thin red rod with white bars, each scored by pecks from a newly hatched chick">
<text class="tk mut" x="70" y="18" text-anchor="middle">complete model</text>
<ellipse class="acf" cx="52" cy="44" rx="22" ry="16"/>
<path class="acf" d="M72 38 L 112 48 L 72 52 Z"/>
<circle class="ocd" cx="102" cy="47" r="3.6"/>
<text class="tk mut" x="180" y="18" text-anchor="middle">spot removed</text>
<ellipse class="acf" cx="162" cy="44" rx="22" ry="16"/>
<path class="acf" d="M182 38 L 222 48 L 182 52 Z"/>
<text class="tk mut" x="290" y="18" text-anchor="middle">red rod, white bars</text>
<rect class="ocf" x="256" y="40" width="64" height="10" rx="2"/>
<rect class="mut2f" x="266" y="40" width="4" height="10"/><rect class="mut2f" x="282" y="40" width="4" height="10"/><rect class="mut2f" x="298" y="40" width="4" height="10"/>
<line class="ax" x1="40" y1="136" x2="352" y2="136"/>
<rect class="acf" x="52" y="96" width="38" height="40"/>
<rect class="acf" x="162" y="116" width="38" height="20"/>
<rect class="ocf" x="272" y="86" width="38" height="50"/>
<text class="tk" x="71" y="92" text-anchor="middle">100</text>
<text class="tk mut" x="181" y="112" text-anchor="middle">≈50</text>
<text class="tk oc" x="291" y="82" text-anchor="middle">highest</text>
<text class="tk mut" x="360" y="140">pecks per standard</text>
<text class="tk mut" x="360" y="126">presentation, relative</text>
<text class="tk oc" x="40" y="150">the chick responds to a spotted elongated object, not to a gull</text>
</svg>`,

imprint: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="Hess's imprinting runway: a decoy mallard on a rotating arm circling a duckling, beside a curve of imprinting success against age after hatching peaking at thirteen to sixteen hours">
<text class="lb" x="100" y="16" text-anchor="middle">rotating decoy</text>
<circle class="ax nofill" cx="100" cy="80" r="52"/>
<circle class="ax nofill" cx="100" cy="80" r="22"/>
<line class="acst" x1="100" y1="80" x2="100" y2="30"/>
<ellipse class="ocf" cx="100" cy="28" rx="13" ry="7"/>
<circle class="acd" cx="128" cy="42" r="5"/>
<path class="ocst" d="M146 66 A 50 50 0 0 1 128 116" marker-end="url(#ar)"/>
<text class="tk mut" x="100" y="146" text-anchor="middle">runway ≈1.5 m across</text>
<line class="ax" x1="212" y1="126" x2="404" y2="126"/>
<line class="ax" x1="212" y1="126" x2="212" y2="34"/>
<text class="tk mut" x="216" y="32">% imprinted</text>
<path class="acst2" d="M218 120 C 250 118, 266 60, 288 56 C 312 52, 336 104, 400 118"/>
<line class="ax" x1="288" y1="122" x2="288" y2="130"/>
<text class="tk oc" x="288" y="140" text-anchor="middle">13–16 h</text>
<text class="tk mut" x="402" y="140" text-anchor="end">age after hatching</text>
</svg>`,

patchav: () => `<svg viewBox="0 0 420 160" class="dia" role="img" aria-label="Cowie's aviary test of the marginal value theorem: artificial trees carrying sawdust-filled cups with lids that set travel time, beside the graphical construction in which a tangent from minus tau to the gain curve gives the optimal residence time">
<text class="lb" x="76" y="22" text-anchor="middle">artificial tree</text>
<line class="ax" x1="70" y1="132" x2="70" y2="34"/>
<line class="ax" x1="70" y1="54" x2="112" y2="54"/><line class="ax" x1="70" y1="86" x2="34" y2="86"/><line class="ax" x1="70" y1="114" x2="112" y2="114"/>
<rect class="acf" x="112" y="46" width="24" height="15" rx="2"/>
<rect class="acf" x="14" y="78" width="24" height="15" rx="2"/>
<rect class="acf" x="112" y="106" width="24" height="15" rx="2"/>
<ellipse class="ocf" cx="98" cy="38" rx="12" ry="8"/>
<text class="tk mut" x="76" y="146" text-anchor="middle">lids set travel: ≈2 s vs ≈20 s</text>
<text class="lb" x="304" y="22" text-anchor="middle">marginal value theorem</text>
<line class="ax" x1="250" y1="120" x2="406" y2="120"/>
<line class="ax" x1="250" y1="120" x2="250" y2="38"/>
<line class="plst" x1="200" y1="120" x2="250" y2="120"/>
<text class="tk pl" x="224" y="134" text-anchor="middle">τ</text>
<path class="acst2" d="M250 120 C 286 82, 330 62, 402 54"/>
<text class="tk ac" x="256" y="46">g(t)</text>
<line class="ocst" x1="200" y1="120" x2="402" y2="36"/>
<circle class="ocd" cx="330" cy="66" r="4"/>
<line class="plst" x1="330" y1="66" x2="330" y2="120"/>
<text class="tk oc" x="330" y="134" text-anchor="middle">t*</text>
<text class="tk mut" x="404" y="134" text-anchor="end">time in patch</text>
<text class="tk oc" x="304" y="150" text-anchor="middle">leave when the rate falls to the habitat average</text>
</svg>`

};
