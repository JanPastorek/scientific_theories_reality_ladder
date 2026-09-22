/* Apparatus drawings for the physics-D histories. Colours come from CSS classes only. */
const APP_EXTRA_P4 = {

hubble100: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="The 100-inch Hooker reflector and Hubble's velocity-distance plot of 1929">
<path class="mut2f" d="M34 120 L58 122 L150 48 L126 42 Z"/>
<line class="acst2" x1="36" y1="121" x2="57" y2="123"/><text class="tk mut" x="28" y="136">2.5 m mirror</text>
<rect class="acf" x="126" y="30" width="28" height="14" rx="2"/><text class="lb" x="140" y="24" text-anchor="middle">plate</text>
<path class="ocst" d="M190 58 L 162 42" marker-end="url(#ar)"/>
<text class="lb" x="92" y="150" text-anchor="middle">100-inch Hooker, Mount Wilson</text>
<line class="ax" x1="236" y1="120" x2="404" y2="120"/><line class="ax" x1="236" y1="120" x2="236" y2="34"/>
<text class="tk mut" x="232" y="40" text-anchor="end">v</text><text class="tk mut" x="404" y="134" text-anchor="end">distance</text>
${[[252,104],[262,112],[272,92],[284,110],[292,84],[300,100],[312,74],[318,96],[330,68],[338,88],[350,60],[358,82],[368,52],[380,72],[392,46]].map(([x,y])=>
`<circle class="ocd" cx="${x}" cy="${y}" r="2.6"/>`).join('')}
<path class="acst2" d="M244 112 L 396 54"/>
<text class="tk ac" x="404" y="44" text-anchor="end">K = 500 km s⁻¹ Mpc⁻¹</text>
<text class="tk mut" x="240" y="132">24 nebulae</text>
<text class="tk pl" x="404" y="150" text-anchor="end">distances 7× too small</text>
</svg>`,

hornant: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="The Holmdel 20-foot horn-reflector antenna switched against a liquid-helium reference load">
<path class="mut2f" d="M40 30 L40 116 L150 96 L150 58 Z"/>
<path class="acst2 nofill" d="M40 30 L150 58"/><path class="acst2 nofill" d="M40 116 L150 96"/>
<text class="lb" x="94" y="150" text-anchor="middle">20-foot horn reflector, beam ≈ 2°</text>
<path class="ocst" d="M16 44 L 42 56" marker-end="url(#ar)"/><text class="tk oc" x="12" y="40">sky</text>
<rect class="acf" x="150" y="68" width="16" height="18" rx="2"/>
<line class="mut2" x1="166" y1="77" x2="206" y2="77"/>
<rect class="acf" x="206" y="62" width="58" height="30" rx="3"/><text class="lb" x="235" y="82" text-anchor="middle">maser</text>
<text class="tk mut" x="235" y="106" text-anchor="middle">4080 MHz (7.35 cm)</text>
<path class="ocst" d="M235 62 L 235 46" marker-end="url(#ar)"/>
<rect class="ocf" x="200" y="26" width="70" height="20" rx="3"/><text class="lb" x="235" y="40" text-anchor="middle">Dicke switch</text>
<line class="mut2" x1="270" y1="36" x2="316" y2="36"/>
<rect class="mut2f" x="316" y="20" width="72" height="64" rx="4"/>
<rect class="acf" x="328" y="46" width="48" height="26" rx="2"/>
<text class="lb" x="352" y="62" text-anchor="middle">cold load</text>
<text class="tk ac" x="352" y="98" text-anchor="middle">liquid He, 4.2 K</text>
<text class="tk pl" x="412" y="126" text-anchor="end">residual 3.5 ± 1.0 K</text>
<text class="tk mut" x="412" y="140" text-anchor="end">after sky, walls, Galaxy and pigeons</text>
</svg>`,

firas: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="The FIRAS polarising interferometer and the external blackbody calibrator that could be swung into its aperture">
<rect class="mut2f" x="70" y="22" width="300" height="106" rx="5"/>
<text class="tk mut" x="220" y="140" text-anchor="middle">entire optics assembly held at 1.5 K by superfluid helium</text>
<path class="ocst" d="M20 52 L 66 52" marker-end="url(#ar)"/><text class="tk oc" x="18" y="46">sky</text>
<rect class="acf" x="82" y="40" width="26" height="24" rx="2"/><text class="lb" x="95" y="80" text-anchor="middle">horn</text>
<line class="ocst2" x1="108" y1="52" x2="196" y2="52"/>
<path class="acst2" d="M188 40 L 208 64"/><text class="tk" x="198" y="112" text-anchor="middle">beamsplitter</text>
<line class="ocst2" x1="198" y1="52" x2="300" y2="52"/><line class="acst2" x1="300" y1="38" x2="300" y2="66"/>
<text class="tk mut" x="306" y="44">fixed mirror</text>
<line class="ocst2" x1="198" y1="60" x2="198" y2="96"/><line class="acst2" x1="182" y1="96" x2="214" y2="96"/>
<path class="ocst" d="M222 96 L 248 96" marker-end="url(#ar)"/><text class="tk oc" x="252" y="99">scanned</text>
<line class="ocst2" x1="206" y1="46" x2="206" y2="36"/>
<rect class="acf" x="192" y="24" width="30" height="12" rx="2"/><text class="lb" x="228" y="34">bolometer</text>
<path class="plst2" d="M60 96 L 82 64" marker-end="url(#ar2)"/>
<path class="ocf" d="M18 84 L 58 84 L 58 116 L 18 116 Z"/>
<text class="lb" x="38" y="104" text-anchor="middle">Xcal</text>
<text class="tk pl" x="38" y="130" text-anchor="middle">ε &gt; 0.9999</text>
<text class="tk ac" x="400" y="150" text-anchor="end">T₀ = 2.72548 ± 0.00057 K; residuals &lt; 50 ppm</text>
</svg>`,

objprism: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="An objective prism in front of a telescope aperture records one small spectrum for every star in the field">
${[36,58,80,102].map(y=>`<circle class="acd" cx="24" cy="${y}" r="3"/>`).join('')}
<text class="tk mut" x="24" y="126" text-anchor="middle">stars</text>
${[36,58,80,102].map(y=>`<line class="mut2" x1="30" y1="${y}" x2="82" y2="${y}"/>`).join('')}
<path class="ocf" d="M86 22 L120 70 L86 118 Z"/><text class="lb" x="100" y="140" text-anchor="middle">objective prism</text>
<path class="mut2f" d="M146 20 L146 120 L166 108 L166 32 Z"/><text class="lb" x="156" y="14" text-anchor="middle">telescope</text>
${[[28,'acst2'],[50,'ocst2'],[72,'acst2'],[94,'ocst2']].map(([y,c])=>
`<path class="${c} nofill" d="M120 ${y} L146 ${+y+12}"/>`).join('')}
<rect class="mut2f" x="256" y="18" width="130" height="104" rx="3"/>
<text class="lb" x="321" y="140" text-anchor="middle">photographic plate</text>
${[34,56,78,100].map(y=>`<rect class="acf" x="274" y="${y}" width="94" height="9" rx="1"/>`).join('')}
${[34,56,78,100].map(y=>[292,308,330,346].map(x=>`<line class="ax" x1="${x}" y1="${y}" x2="${x}" y2="${+y+9}"/>`).join('')).join('')}
${[[178,40],[178,62],[196,84],[196,106]].map(([x,y])=>`<path class="mut2" d="M${x} ${y} L${+x+62} ${y}" marker-end="url(#arm)"/>`).join('')}
<text class="tk oc" x="410" y="152" text-anchor="end">one spectrum per star; strengths read by eye, then Saha</text>
</svg>`,

homestake: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Davis's chlorine tank on the 4850-foot level of the Homestake mine with its argon extraction and counting line">
<rect class="mut2f" x="10" y="6" width="400" height="26"/>
<text class="tk mut" x="210" y="24" text-anchor="middle">1478 m of rock — 4200 m water equivalent</text>
<rect class="acf" x="26" y="60" width="180" height="60" rx="22"/>
<text class="lb" x="116" y="86" text-anchor="middle">615 t C₂Cl₄</text>
<text class="tk ac" x="116" y="102" text-anchor="middle">380 000 litres</text>
<text class="tk mut" x="116" y="148" text-anchor="middle">dry-cleaning fluid</text>
<path class="ocst" d="M16 50 L 58 64" marker-end="url(#ar)"/><text class="tk oc" x="12" y="48">ν_e</text>
<path class="mut2" d="M116 60 L116 48 L250 48 L250 62" marker-end="url(#arm)"/>
<text class="tk mut" x="184" y="44" text-anchor="middle">He purge every ~60 days</text>
<rect class="ocf" x="222" y="62" width="58" height="26" rx="3"/><text class="lb" x="251" y="79" text-anchor="middle">charcoal</text>
<text class="tk mut" x="251" y="102" text-anchor="middle">77 K trap</text>
<path class="mut2" d="M280 75 L 318 75" marker-end="url(#arm)"/>
<rect class="acf" x="320" y="58" width="76" height="34" rx="3"/><text class="lb" x="358" y="79" text-anchor="middle">counter</text>
<text class="tk mut" x="358" y="106" text-anchor="middle">0.5 cm³ proportional</text>
<text class="tk pl" x="300" y="132" text-anchor="middle">≈ 0.48 ³⁷Ar atoms per day</text>
<text class="tk pl" x="300" y="148" text-anchor="middle">2.56 SNU against ≈ 8 predicted</text>
</svg>`,

snodet: () => `<svg viewBox="0 0 420 164" class="dia" role="img" aria-label="The Sudbury Neutrino Observatory: heavy water in an acrylic vessel viewed by thousands of photomultipliers, with its three reaction channels">
<rect class="mut2f" x="10" y="4" width="400" height="20"/>
<text class="tk mut" x="210" y="18" text-anchor="middle">2092 m underground, Creighton Mine</text>
<circle class="acf2" cx="140" cy="94" r="66"/>
<circle class="acst2 nofill" cx="140" cy="94" r="66"/>
${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>{const r=a*Math.PI/180;return `<circle class="ocd" cx="${(140+66*Math.cos(r)).toFixed(1)}" cy="${(94+66*Math.sin(r)).toFixed(1)}" r="3"/>`}).join('')}
<circle class="acf" cx="140" cy="94" r="44"/>
<text class="lb" x="140" y="90" text-anchor="middle">1000 t D₂O</text>
<text class="tk" x="140" y="106" text-anchor="middle">12 m acrylic sphere</text>
<text class="tk oc" x="230" y="34">9456 photomultipliers</text>
<path class="ocst" d="M232 38 L 208 58" marker-end="url(#ar)"/>
<text class="lb" x="234" y="76">CC: ν_e + d → p + p + e⁻</text>
<text class="tk mut" x="234" y="90">electron flavour only</text>
<text class="lb" x="234" y="112">NC: ν_x + d → p + n + ν_x</text>
<text class="tk mut" x="234" y="126">all three flavours</text>
<text class="tk ac" x="410" y="148" text-anchor="end">Φ_NC = 5.09 ×10⁶ cm⁻² s⁻¹</text>
</svg>`,

langprobe: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="A Langmuir probe in a mercury-vapour discharge and the current-voltage characteristic it produces">
<rect class="mut2f" x="16" y="34" width="176" height="76" rx="8"/>
<rect class="acf2" x="24" y="42" width="160" height="60" rx="6"/>
<rect class="acf" x="16" y="56" width="10" height="32"/><text class="tk mut" x="22" y="122" text-anchor="middle">cathode</text>
<rect class="acf" x="182" y="56" width="10" height="32"/><text class="tk mut" x="186" y="122" text-anchor="middle">anode</text>
<text class="lb" x="104" y="58" text-anchor="middle">Hg vapour discharge</text>
<line class="ocst2" x1="104" y1="110" x2="104" y2="80"/><circle class="ocd" cx="104" cy="78" r="3"/>
<text class="tk oc" x="112" y="94">probe</text>
<text class="tk mut" x="104" y="142" text-anchor="middle">0.1 mm tungsten wire</text>
<line class="ax" x1="238" y1="96" x2="404" y2="96"/><line class="ax" x1="272" y1="24" x2="272" y2="128"/>
<text class="tk mut" x="404" y="110" text-anchor="end">probe bias V</text><text class="tk mut" x="266" y="30" text-anchor="end">I</text>
<path class="acst2 nofill" d="M240 106 L 286 105 C 310 104, 330 76, 348 44 C 360 30, 380 28, 400 28"/>
<text class="tk ac" x="330" y="66" text-anchor="end">slope = e/k_BT_e</text>
<text class="tk mut" x="240" y="122">ion saturation</text>
<text class="tk oc" x="404" y="150" text-anchor="end">T_e = 1–10 eV; n_e to 10–20%</text>
</svg>`,

malmberg: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="A collisionless plasma column with a fixed exciter probe and a movable receiver, and the exponentially damped wave trace">
<rect class="mut2f" x="30" y="30" width="360" height="42" rx="6"/>
<rect class="acf2" x="36" y="36" width="348" height="30" rx="4"/>
<text class="lb" x="210" y="24" text-anchor="middle">quiescent plasma column, ≈ 1 m</text>
<line class="ocst2" x1="66" y1="30" x2="66" y2="52"/><circle class="ocd" cx="66" cy="52" r="3"/>
<text class="tk oc" x="66" y="88" text-anchor="middle">exciter</text>
<line class="acst2" x1="250" y1="30" x2="250" y2="52"/><circle class="acd" cx="250" cy="52" r="3"/>
<text class="tk ac" x="250" y="88" text-anchor="middle">movable receiver</text>
<path class="acst" d="M300 84 L 356 84" marker-end="url(#arm)"/>
<text class="tk mut" x="210" y="104" text-anchor="middle">n_e ≈ 10¹⁵ m⁻³, T_e ≈ 10 eV, λ_D ≈ 0.7 mm, f ≈ 100 MHz</text>
<line class="ax" x1="40" y1="130" x2="390" y2="130"/>
<path class="ocst2 nofill" d="M46 130 C 54 100, 70 100, 78 130 C 86 156, 102 156, 110 130 C 118 106, 134 106, 142 130 C 150 150, 166 150, 174 130 C 182 114, 198 114, 206 130 C 214 144, 230 144, 238 130 C 246 120, 262 120, 270 130 C 278 138, 294 138, 302 130 C 310 124, 326 124, 334 130 C 342 134, 358 134, 366 130"/>
<path class="plst" d="M46 100 C 140 108, 240 122, 380 129"/>
<text class="tk pl" x="390" y="118" text-anchor="end">exponential decay in space</text>
</svg>`,

t3tok: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="The T-3 tokamak cross-section with the ruby-laser Thomson scattering system brought from Culham">
<circle class="mut2f" cx="140" cy="76" r="56"/>
<circle class="acf2" cx="140" cy="76" r="42"/>
<circle class="ocd" cx="140" cy="76" r="4"/>
${[[140,20],[196,76],[140,132],[84,76],[180,36],[180,116],[100,116],[100,36]].map(([x,y])=>
`<rect class="acf" x="${x-8}" y="${y-6}" width="16" height="12" rx="2"/>`).join('')}
<text class="tk mut" x="140" y="150" text-anchor="middle">R = 1.0 m, B = 2.5 T, I_p ≈ 100 kA</text>
<text class="tk ac" x="240" y="26">field coils</text>
<path class="acst" d="M238 30 L 192 38" marker-end="url(#arm)"/>
<rect class="ocf" x="10" y="66" width="40" height="20" rx="3"/><text class="lb" x="30" y="60" text-anchor="middle">laser</text>
<text class="tk oc" x="30" y="102" text-anchor="middle">ruby, 20 ns</text>
<path class="ocst2" d="M50 76 L 134 76" marker-end="url(#ar)"/>
<path class="acst2" d="M146 72 L 262 62" marker-end="url(#arm)"/>
<rect class="acf" x="266" y="50" width="62" height="26" rx="3"/><text class="lb" x="297" y="67" text-anchor="middle">spectro-</text>
<text class="tk ac" x="297" y="92" text-anchor="middle">scattered at 90°</text>
<text class="tk pl" x="412" y="114" text-anchor="end">width of the line → T_e ≈ 1 keV</text>
<text class="tk mut" x="412" y="130" text-anchor="end">one scattered photon in 10¹⁴</text>
</svg>`,

griffith: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Griffith's drawn glass fibres tested in tension and his cracked glass bulb burst by internal pressure">
<text class="lb" x="96" y="20" text-anchor="middle">drawn fibres in tension</text>
<rect class="mut2f" x="30" y="30" width="132" height="10" rx="2"/>
${[[52,3.5,'1 mm'],[96,1.6,'100 μm'],[140,0.7,'3 μm']].map(([x,w,l])=>
`<rect class="acf" x="${x-w}" y="40" width="${2*w}" height="56"/><text class="tk mut" x="${x}" y="126" text-anchor="middle">${l}</text>`).join('')}
${[52,96,140].map(x=>`<circle class="ocd" cx="${x}" cy="100" r="5"/><path class="ocst" d="M${x} 106 L${x} 118" marker-end="url(#ar)"/>`).join('')}
<text class="tk ac" x="96" y="144" text-anchor="middle">170 MPa at 1 mm → 3.4 GPa at 3 μm</text>
<line class="mut2" x1="196" y1="18" x2="196" y2="136"/>
<text class="lb" x="306" y="20" text-anchor="middle">cracked bulb, burst by pressure</text>
<circle class="acf" cx="300" cy="76" r="44"/>
<circle class="mut2f" cx="300" cy="76" r="33"/>
<path class="ocst2" d="M280 46 L 306 36"/>
<text class="tk oc" x="330" y="36">crack, length a</text>
<path class="plst2" d="M300 76 L 300 50" marker-end="url(#ar2)"/>
<path class="plst2" d="M300 76 L 326 90" marker-end="url(#ar2)"/>
<path class="plst2" d="M300 76 L 274 90" marker-end="url(#ar2)"/>
<text class="tk pl" x="300" y="134" text-anchor="middle">σ√a constant to ≈ 10%</text>
<text class="tk mut" x="410" y="150" text-anchor="end">γ_s ≈ 0.5 J m⁻², measured on hot fibres</text>
</svg>`,

tem56: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Transmission electron microscope in two-beam diffraction contrast, imaging dislocations in a thin aluminium foil">
<rect class="acf" x="52" y="10" width="44" height="16" rx="2"/><text class="lb" x="74" y="22" text-anchor="middle">gun</text>
<text class="tk mut" x="102" y="22">100 kV</text>
<line class="ocst2" x1="74" y1="26" x2="74" y2="56"/>
<path class="acst2" d="M56 56 L 92 56"/><text class="tk mut" x="98" y="58">condenser</text>
<line class="ocst2" x1="74" y1="56" x2="74" y2="80"/>
<rect class="mut2f" x="34" y="80" width="80" height="6"/><text class="lb" x="74" y="100" text-anchor="middle">Al foil</text>
<text class="tk ac" x="74" y="116" text-anchor="middle">≈ 150 nm thick</text>
<line class="ocst2" x1="74" y1="86" x2="74" y2="126"/>
<line class="plst2" x1="74" y1="86" x2="104" y2="126"/>
<path class="acst2" d="M48 126 L 120 126"/>
<circle class="mud" cx="74" cy="126" r="3"/><circle class="mud" cx="104" cy="126" r="3"/>
<text class="tk mut" x="126" y="124">objective aperture</text>
<text class="tk pl" x="126" y="138">selects one beam</text>
<rect class="mut2f" x="244" y="24" width="160" height="104" rx="4"/>
<text class="lb" x="320" y="18" text-anchor="middle">dislocations as dark lines</text>
<path class="ocst2 nofill" d="M258 44 C 292 62, 300 92, 276 116"/>
<path class="ocst2 nofill" d="M288 34 C 322 58, 330 88, 312 120"/>
<path class="ocst2 nofill" d="M330 40 C 352 66, 348 96, 334 118"/>
<path class="acst2 nofill" d="M372 30 C 366 60, 378 90, 366 122"/>
<line class="ax" x1="386" y1="30" x2="386" y2="122"/>
<text class="tk ac" x="382" y="76" text-anchor="end">grain boundary</text>
<text class="tk mut" x="412" y="150" text-anchor="end">g·b = 0 makes a line vanish — that is how b is measured</text>
</svg>`,

tensile: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="A standard tensile test with load cell and clip-on extensometer, and the engineering stress-strain curve it produces">
<rect class="acf" x="52" y="10" width="60" height="16" rx="2"/><text class="lb" x="82" y="22" text-anchor="middle">load cell</text>
<rect class="mut2f" x="64" y="26" width="36" height="16"/>
<path class="mut2f" d="M64 42 L100 42 L88 58 L76 58 Z"/>
<rect class="acf2" x="76" y="58" width="12" height="54"/>
<path class="mut2f" d="M76 112 L88 112 L100 128 L64 128 Z"/>
<rect class="mut2f" x="64" y="128" width="36" height="14"/>
<line class="ocst2" x1="104" y1="70" x2="122" y2="70"/><line class="ocst2" x1="104" y1="100" x2="122" y2="100"/>
<line class="ocst2" x1="122" y1="70" x2="122" y2="100"/>
<text class="tk oc" x="128" y="78">extensometer</text>
<text class="tk oc" x="128" y="94">50 mm gauge</text>
<text class="tk mut" x="128" y="110">resolves 4×10⁻⁵ strain</text>
<line class="ax" x1="246" y1="122" x2="404" y2="122"/><line class="ax" x1="246" y1="122" x2="246" y2="20"/>
<text class="tk mut" x="404" y="136" text-anchor="end">engineering strain</text>
<text class="tk mut" x="242" y="26" text-anchor="end">σ</text>
<path class="acst2 nofill" d="M246 122 L 276 50 C 300 34, 340 30, 358 44 C 372 56, 382 72, 390 86"/>
<circle class="ocd" cx="252" cy="108" r="3"/>
<path class="plst" d="M252 122 L 286 42"/>
<text class="tk pl" x="290" y="40">0.2% offset proof stress</text>
<circle class="acd" cx="348" cy="32" r="3.5"/>
<text class="tk ac" x="404" y="60" text-anchor="end">UTS: necking begins</text>
<text class="tk mut" x="412" y="150" text-anchor="end">true stress rises to fracture; the turnover is a convention</text>
</svg>`

};
