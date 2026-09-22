/* Schematic apparatus diagrams. Colours come from CSS classes, so both themes work. */
const APP = {

scaleprobe: () => `<svg viewBox="0 0 420 140" class="dia"><line class="ax" x1="40" y1="100" x2="396" y2="100"/>
${[['atom',60,'10⁻¹⁰ m'],['nucleus',140,'10⁻¹⁵'],['LHC',240,'10⁻¹⁹'],['Planck',370,'10⁻³⁵']].map(([l,x,u])=>
`<line class="ax" x1="${x}" y1="96" x2="${x}" y2="104"/><text class="tk" x="${x}" y="116" text-anchor="middle">${l}</text><text class="tk mut" x="${x}" y="128" text-anchor="middle">${u}</text>`).join('')}
<path class="acst2" d="M60 84 L 240 84"/><text class="tk ac" x="150" y="76" text-anchor="middle">probed</text>
<path class="plst" d="M244 84 L 366 84"/><text class="tk pl" x="306" y="76" text-anchor="middle">10¹⁵ × out of reach</text>
<text class="tk oc" x="40" y="46">to see length ℓ you need energy E ≳ ħc/ℓ</text></svg>`,

ligo: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="34" y="72" width="26" height="14" rx="2"/><text class="tk mut" x="34" y="66">laser</text>
<line class="ocst" x1="60" y1="79" x2="180" y2="79"/><path class="acst2" d="M172 71 L 188 87"/><text class="tk" x="178" y="100" text-anchor="middle">beamsplitter</text>
<line class="ocst" x1="180" y1="79" x2="370" y2="79"/><line class="acst2" x1="366" y1="64" x2="366" y2="94"/><text class="tk mut" x="362" y="58" text-anchor="end">test mass 40 kg</text>
<line class="ocst" x1="180" y1="79" x2="180" y2="18"/><line class="acst2" x1="165" y1="22" x2="195" y2="22"/>
<text class="tk mut" x="200" y="46">4 km arm, ultra-high vacuum</text>
<line class="ocst" x1="180" y1="86" x2="180" y2="122"/><rect class="acf" x="168" y="122" width="24" height="12" rx="2"/><text class="tk" x="200" y="132">photodiode</text>
<text class="tk oc" x="34" y="146">ΔL = hL ≈ 4×10⁻¹⁸ m — 1/200 of a proton radius</text></svg>`,

eclipse: () => `<svg viewBox="0 0 420 150" class="dia"><circle class="ocf" cx="150" cy="70" r="30"/><circle class="mud" cx="150" cy="70" r="24"/>
<text class="tk mut" x="150" y="112" text-anchor="middle">Sun, eclipsed by Moon</text>
<circle class="acd" cx="40" cy="30" r="3"/><text class="tk" x="30" y="24" text-anchor="end">true</text>
<path class="acst" d="M40 30 C 110 44, 150 44, 200 62 L 380 78"/>
<path class="plst" d="M40 30 L 380 92"/>
<circle class="pld" cx="382" cy="92" r="2.5"/><text class="tk pl" x="390" y="96">apparent</text>
<rect class="acf" x="368" y="64" width="24" height="16" rx="2"/><text class="tk mut" x="364" y="74" text-anchor="end">plate</text>
<text class="tk oc" x="30" y="140">δ = 4GM/bc² = 1.75″ at the limb — twice the Newtonian value</text></svg>`,

pound: () => `<svg viewBox="0 0 420 155" class="dia"><rect class="mut2f" x="150" y="18" width="120" height="110"/>
<rect class="acf" x="176" y="22" width="68" height="16" rx="2"/><text class="tk" x="210" y="34" text-anchor="middle">⁵⁷Co source</text>
<rect class="acf" x="176" y="108" width="68" height="16" rx="2"/><text class="tk" x="210" y="120" text-anchor="middle">⁵⁷Fe absorber</text>
<path class="ocst" d="M210 42 L 210 104" marker-end="url(#ar)"/>
<text class="tk oc" x="218" y="76">14.4 keV γ</text>
<path class="plst" d="M150 22 L 120 22 M150 124 L 120 124"/><path class="plst" d="M126 22 L 126 124"/>
<text class="tk pl" x="116" y="76" text-anchor="end">h = 22.5 m</text>
<text class="tk mut" x="286" y="34">loudspeaker Doppler-tunes</text>
<text class="tk mut" x="286" y="48">the source velocity</text>
<text class="tk oc" x="30" y="148">Δν/ν = gh/c² = 2.46×10⁻¹⁵ — Mössbauer line width ~10⁻¹²</text></svg>`,

pulsar: () => `<svg viewBox="0 0 420 145" class="dia"><ellipse class="acst" cx="190" cy="66" rx="86" ry="34"/>
<circle class="acd" cx="120" cy="52" r="5"/><circle class="ocd" cx="258" cy="80" r="5"/>
<path class="ocst" d="M120 52 l -22 -14 M120 52 l 22 14" /><text class="tk oc" x="92" y="34">beam</text>
<text class="tk mut" x="190" y="112" text-anchor="middle">7.75 h orbit, two neutron stars</text>
<path class="plst" d="M300 40 C 330 50, 340 70, 344 96"/><text class="tk pl" x="310" y="34">orbit shrinks</text>
<text class="tk oc" x="30" y="132">period decays 76.5 μs/yr — matches the quadrupole formula to 0.2%</text></svg>`,

lamb: () => `<svg viewBox="0 0 420 140" class="dia"><rect class="acf" x="30" y="58" width="18" height="24" rx="2"/><text class="tk mut" x="30" y="52">oven</text>
<path class="ocst" d="M48 70 L 340 70" marker-end="url(#ar)"/><text class="tk oc" x="100" y="62">H beam, 2s½ metastable</text>
<rect class="mut2f" x="160" y="46" width="90" height="48"/><text class="tk" x="205" y="106" text-anchor="middle">microwave cavity + B field</text>
<path class="plst" d="M205 46 L 205 30"/><text class="tk pl" x="212" y="34">tunable ν</text>
<rect class="acf" x="340" y="56" width="16" height="28" rx="2"/><text class="tk mut" x="362" y="72">W detector</text>
<text class="tk oc" x="30" y="130">dip in current at 1057.8 MHz — Dirac theory predicts exactly zero</text></svg>`,

penning: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acst2" d="M150 40 C 190 28, 230 28, 270 40"/><path class="acst2" d="M150 108 C 190 120, 230 120, 270 108"/>
<path class="ocst2" d="M138 62 C 150 70, 150 78, 138 86"/><path class="ocst2" d="M282 62 C 270 70, 270 78, 282 86"/>
<text class="tk mut" x="210" y="24" text-anchor="middle">endcap electrode</text><text class="tk mut" x="210" y="136" text-anchor="middle">endcap</text>
<text class="tk mut" x="300" y="76">ring</text>
<circle class="pld" cx="210" cy="74" r="4"/><text class="tk pl" x="218" y="70">one electron</text>
<path class="plst" d="M196 74 a14 5 0 1 0 28 0 a14 5 0 1 0 -28 0"/>
<text class="tk oc" x="30" y="146">B = 5 T, T = 100 mK. a = ν_a/ν_c to 1 part in 10¹²</text></svg>`,

dis: () => `<svg viewBox="0 0 420 145" class="dia"><path class="ocst" d="M30 76 L 160 76" marker-end="url(#ar)"/><text class="tk oc" x="34" y="68">20 GeV e⁻</text>
<circle class="acf" cx="176" cy="76" r="16"/><text class="tk" x="176" y="106" text-anchor="middle">liquid H₂</text>
${[[18,'6°'],[38,'10°'],[62,'18°']].map(([d,l])=>`<path class="acst" d="M190 76 L ${176+190*Math.cos(d*Math.PI/180)} ${76-190*Math.sin(d*Math.PI/180)}"/>`).join('')}
<path class="plst" d="M190 76 L 366 76"/>
<rect class="acf" x="330" y="14" width="46" height="16" rx="2"/><text class="tk mut" x="326" y="26" text-anchor="end">spectrometer</text>
<text class="tk oc" x="30" y="136">σ depends only on x = Q²/2Mν — scaling ⟹ point-like constituents</text></svg>`,

opal: () => `<svg viewBox="0 0 420 140" class="dia">
${[['T &lt; T_c',70],['T ≈ T_c',195],['T &gt; T_c',320]].map(([l,x],i)=>
`<rect class="mut2f" x="${x-32}" y="26" width="64" height="76" rx="4"/><text class="tk" x="${x}" y="118" text-anchor="middle">${l}</text>`).join('')}
<rect class="acf" x="38" y="66" width="64" height="36"/><text class="tk mut" x="70" y="46" text-anchor="middle">gas</text><text class="tk mut" x="70" y="88" text-anchor="middle">liquid</text>
${Array.from({length:60},(_,i)=>`<circle class="acd" cx="${165+((i*37)%62)}" cy="${30+((i*53)%70)}" r="${1.2+((i*7)%3)}"/>`).join('')}
<text class="tk oc" x="195" y="118" text-anchor="middle">milky — ξ ~ 500 nm</text>
<text class="tk mut" x="320" y="66" text-anchor="middle">clear</text>
<text class="tk oc" x="30" y="134">the correlation length diverges: scale invariance, visible by eye</text></svg>`,

wu: () => `<svg viewBox="0 0 420 155" class="dia"><rect class="mut2f" x="140" y="16" width="130" height="112" rx="4"/>
<text class="tk mut" x="205" y="140" text-anchor="middle">cryostat, 0.003 K</text>
<path class="acst2" d="M150 40 h110 M150 52 h110 M150 92 h110 M150 104 h110"/><text class="tk mut" x="276" y="46">solenoid</text>
<circle class="ocf" cx="205" cy="72" r="14"/><text class="tk" x="205" y="76" text-anchor="middle">⁶⁰Co</text>
<path class="plst" d="M205 58 L 205 40" marker-end="url(#ar2)"/><text class="tk pl" x="212" y="38">nuclear spin</text>
<path class="ocst" d="M205 86 L 205 116" marker-end="url(#ar)"/><text class="tk oc" x="212" y="112">e⁻ (40% more)</text>
<text class="tk oc" x="30" y="150">emission is asymmetric about the spin axis — parity is violated</text></svg>`,

bubble: () => `<svg viewBox="0 0 420 145" class="dia"><rect class="mut2f" x="70" y="20" width="280" height="90" rx="6"/>
<text class="tk mut" x="210" y="126" text-anchor="middle">Gargamelle: 12 m³ liquid freon</text>
<path class="plst" d="M70 66 L 176 66"/><text class="tk pl" x="86" y="58">ν_μ (invisible)</text>
<circle class="ocd" cx="176" cy="66" r="3"/>
${[[-30,60],[-8,80],[16,70],[34,54]].map(([a,L])=>`<path class="acst" d="M176 66 q ${L*0.6} ${a*0.5} ${L} ${a}"/>`).join('')}
<text class="tk ac" x="270" y="34">hadrons</text>
<path class="plst" d="M176 66 L 300 96"/><text class="tk pl" x="306" y="100">no muon</text>
<text class="tk oc" x="30" y="140">muonless events ⟹ a neutral current ⟹ the Z⁰ exists</text></svg>`,

lhc: () => `<svg viewBox="0 0 420 150" class="dia">
${[[86,'muon chambers','mut2f'],[66,'hadron cal.','mut2f'],[46,'EM calorimeter','ocf'],[26,'tracker','acf']].map(([r,l,c])=>
`<circle class="${c}" cx="150" cy="74" r="${r}"/>`).join('')}
<circle class="pld" cx="150" cy="74" r="3"/>
${[20,70,130,200,250,300,340].map(a=>`<path class="acst" d="M150 74 L ${150+84*Math.cos(a*Math.PI/180)} ${74+84*Math.sin(a*Math.PI/180)}"/>`).join('')}
<text class="tk mut" x="246" y="30">muon chambers</text><text class="tk mut" x="246" y="46">hadronic calorimeter</text>
<text class="tk oc" x="246" y="62">EM calorimeter</text><text class="tk ac" x="246" y="78">silicon tracker</text>
<text class="tk mut" x="246" y="100">40 MHz collisions</text><text class="tk mut" x="246" y="114">trigger keeps ~400/s</text>
<text class="tk oc" x="30" y="144">H → γγ: a narrow peak at 125 GeV on a smooth falling background</text></svg>`,

kamioka: () => `<svg viewBox="0 0 420 150" class="dia"><path class="mut2f" d="M20 24 H400 V50 H20 Z"/><text class="tk mut" x="210" y="42" text-anchor="middle">1 km of rock</text>
<rect class="acf" x="110" y="58" width="200" height="66" rx="4"/><text class="tk" x="210" y="98" text-anchor="middle">50 000 t ultrapure water</text>
${Array.from({length:22},(_,i)=>`<circle class="ocd" cx="${116+i*8.9}" cy="${i%2?62:120}" r="2"/>`).join('')}
<text class="tk oc" x="316" y="66">11 146 PMTs</text>
<path class="plst" d="M60 20 L 180 88" marker-end="url(#ar2)"/><text class="tk pl" x="52" y="18">ν from above, 15 km</text>
<path class="plst" d="M380 140 L 250 96" marker-end="url(#ar2)"/><text class="tk pl" x="384" y="146" text-anchor="end">ν from below, 13 000 km</text>
<path class="acst" d="M200 88 L 236 74 M200 88 L 232 104"/>
<text class="tk oc" x="30" y="146">upward ν_μ deficit depends on path length ⟹ oscillation ⟹ mass</text></svg>`,

sterngerlach: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="26" y="64" width="20" height="24" rx="2"/><text class="tk mut" x="26" y="58">Ag oven</text>
<path class="plst" d="M46 76 L 120 76"/><rect class="mut2f" x="82" y="60" width="6" height="14"/><rect class="mut2f" x="82" y="80" width="6" height="14"/>
<text class="tk mut" x="86" y="108" text-anchor="middle">slits</text>
<path class="ocf" d="M150 42 L 250 42 L 250 66 L 200 74 L 150 66 Z"/><text class="tk" x="200" y="58" text-anchor="middle">N (knife edge)</text>
<path class="ocf" d="M150 110 L 250 110 L 250 88 L 200 80 L 150 88 Z"/><text class="tk" x="200" y="102" text-anchor="middle">S (grooved)</text>
<path class="acst" d="M120 76 L 150 76 C 200 76, 230 66, 300 54"/><path class="acst" d="M120 76 L 150 76 C 200 76, 230 86, 300 98"/>
<rect class="mut2f" x="300" y="36" width="8" height="82"/><circle class="acd" cx="304" cy="54" r="4"/><circle class="acd" cx="304" cy="98" r="4"/>
<text class="tk oc" x="314" y="58">two spots</text><text class="tk mut" x="314" y="102">not a smear</text>
<text class="tk oc" x="26" y="142">F_z = μ_z ∂B_z/∂z ≈ 10 T/m over 3.5 cm</text></svg>`,

doubleslit: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="26" y="66" width="18" height="20" rx="2"/><text class="tk mut" x="26" y="60">e⁻ source</text>
<path class="plst" d="M44 76 L 140 76"/>
<rect class="mut2f" x="140" y="34" width="6" height="34"/><rect class="mut2f" x="140" y="84" width="6" height="34"/>
<circle class="ocd" cx="143" cy="76" r="3"/><text class="tk oc" x="143" y="130" text-anchor="middle">biprism wire</text>
<path class="acst" d="M146 76 C 200 66, 240 50, 300 40"/><path class="acst" d="M146 76 C 200 86, 240 102, 300 112"/>
<rect class="mut2f" x="300" y="26" width="8" height="100"/>
${Array.from({length:9},(_,i)=>`<rect class="acf" x="312" y="${30+i*11}" width="${i%2?24:6}" height="6"/>`).join('')}
<text class="tk oc" x="344" y="24">fringes</text>
<text class="tk mut" x="26" y="142">~1000 e⁻/s, mean separation 150 km — one at a time, yet fringes build up</text></svg>`,

bell: () => `<svg viewBox="0 0 420 150" class="dia">
<circle class="ocf" cx="210" cy="72" r="14"/><text class="tk" x="210" y="100" text-anchor="middle">entangled pair source</text>
<path class="plst" d="M196 72 L 80 72"/><path class="plst" d="M224 72 L 340 72"/>
<rect class="acf" x="44" y="54" width="34" height="36" rx="3"/><text class="tk" x="61" y="76" text-anchor="middle">A</text>
<rect class="acf" x="342" y="54" width="34" height="36" rx="3"/><text class="tk" x="359" y="76" text-anchor="middle">B</text>
<path class="ocst" d="M61 50 L 61 30" marker-end="url(#ar)"/><text class="tk oc" x="61" y="24" text-anchor="middle">QRNG setting a</text>
<path class="ocst" d="M359 50 L 359 30" marker-end="url(#ar)"/><text class="tk oc" x="359" y="24" text-anchor="middle">setting b</text>
<path class="plst" d="M80 118 L 340 118"/><text class="tk pl" x="210" y="134" text-anchor="middle">1.3 km — 4.27 μs light travel; choice + readout take less</text>
<text class="tk oc" x="26" y="146">S = 2.42 ± 0.20 against the local bound S ≤ 2</text></svg>`,

michelson: () => `<svg viewBox="0 0 420 155" class="dia"><rect class="acf" x="26" y="82" width="20" height="16" rx="2"/><text class="tk mut" x="26" y="76">Na lamp</text>
<line class="ocst" x1="46" y1="90" x2="190" y2="90"/><path class="acst2" d="M182 82 L 198 98"/>
<line class="ocst" x1="190" y1="90" x2="350" y2="90"/><line class="acst2" x1="346" y1="76" x2="346" y2="104"/>
<line class="ocst" x1="190" y1="90" x2="190" y2="26"/><line class="acst2" x1="176" y1="30" x2="204" y2="30"/>
<text class="tk mut" x="212" y="30">mirror (effective path 11 m by multiple reflection)</text>
<line class="ocst" x1="190" y1="98" x2="190" y2="128"/><circle class="ocd" cx="190" cy="132" r="5"/><text class="tk" x="200" y="138">telescope</text>
<rect class="mut2f" x="100" y="110" width="200" height="8" rx="4"/><text class="tk mut" x="200" y="150" text-anchor="middle">sandstone slab floating on mercury — rotate 90°</text>
<text class="tk oc" x="26" y="20">expected shift 0.4 fringe; observed &lt; 0.01</text></svg>`,

muon: () => `<svg viewBox="0 0 420 150" class="dia"><path class="mut2f" d="M20 116 H400 V132 H20 Z"/>
<path class="acst" d="M40 20 C 60 18, 80 22, 96 26"/><text class="tk mut" x="30" y="18">1907 m: Mt Washington</text>
<rect class="acf" x="96" y="18" width="40" height="14" rx="2"/><text class="tk" x="116" y="46" text-anchor="middle">563/hr</text>
<rect class="acf" x="300" y="100" width="40" height="14" rx="2"/><text class="tk" x="320" y="96" text-anchor="middle">408/hr</text>
<text class="tk mut" x="360" y="126" text-anchor="end">sea level, 3 m</text>
${[[150,30],[180,34],[210,28]].map(([x,y])=>`<path class="plst" d="M${x} ${y} L ${x+60} 100" marker-end="url(#ar2)"/>`).join('')}
<text class="tk pl" x="196" y="76">μ, γ ≈ 8.4</text>
<text class="tk oc" x="26" y="146">classical prediction 27/hr; relativistic 400/hr</text></svg>`,

faraday: () => `<svg viewBox="0 0 420 150" class="dia"><circle class="mut2f" cx="180" cy="72" r="46"/><circle class="mut2f" cx="180" cy="72" r="30"/>
<text class="tk mut" x="180" y="126" text-anchor="middle">soft iron ring</text>
${[0,1,2,3].map(i=>`<path class="acst2" d="M${142-i*0} ${48+i*13} a24 8 0 0 0 0 10" transform="rotate(${-40+i*12} 180 72)"/>`).join('')}
${[0,1,2,3].map(i=>`<path class="ocst2" d="M${218} ${48+i*13} a24 8 0 0 1 0 10"/>`).join('')}
<text class="tk ac" x="118" y="40" text-anchor="end">coil A</text><text class="tk oc" x="242" y="40">coil B</text>
<path class="acst" d="M112 72 L 62 72"/><rect class="acf" x="34" y="60" width="26" height="24" rx="2"/><text class="tk" x="47" y="98" text-anchor="middle">battery + switch</text>
<path class="ocst" d="M248 72 L 320 72"/><circle class="ocst nofill" cx="340" cy="72" r="16"/><path class="plst" d="M340 72 L 330 60"/>
<text class="tk oc" x="340" y="102" text-anchor="middle">needle</text>
<text class="tk mut" x="26" y="144">the needle kicks only at make and break — it is dΦ/dt, not Φ</text></svg>`,

hertz: () => `<svg viewBox="0 0 420 150" class="dia"><circle class="acf" cx="52" cy="70" r="12"/><circle class="acf" cx="52" cy="110" r="12"/>
<line class="acst2" x1="52" y1="82" x2="52" y2="86"/><line class="acst2" x1="52" y1="94" x2="52" y2="98"/>
<path class="ocst" d="M50 88 L 54 92"/><text class="tk mut" x="52" y="134" text-anchor="middle">spark gap transmitter</text>
${[0,1,2].map(i=>`<path class="acst" d="M${74+i*26} 90 q 13 -18 26 0" opacity="${1-i*0.22}"/>`).join('')}
<circle class="ocst nofill" cx="240" cy="90" r="20"/><path class="plst" d="M236 72 L 244 72"/><text class="tk pl" x="240" y="56" text-anchor="middle">micrometre gap</text>
<text class="tk mut" x="240" y="128" text-anchor="middle">loop detector, watched in the dark</text>
<rect class="mut2f" x="366" y="30" width="10" height="110"/><text class="tk mut" x="362" y="26" text-anchor="end">zinc reflector</text>
${[300,330,360].map(x=>`<path class="plst" d="M${x} 40 L ${x} 130"/>`).join('')}
<text class="tk oc" x="26" y="26">nodes 2.4 m apart ⟹ λ ≈ 4.8 m ⟹ speed ≈ c</text></svg>`,

millikan: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="120" y="44" width="170" height="8"/><rect class="acf" x="120" y="100" width="170" height="8"/>
<text class="tk mut" x="205" y="36" text-anchor="middle">brass plate, up to 10 kV</text><text class="tk mut" x="205" y="124" text-anchor="middle">1.6 cm gap</text>
<circle class="ocd" cx="200" cy="76" r="4"/>
<path class="ocst" d="M200 66 L 200 58" marker-end="url(#ar)"/><path class="plst" d="M212 86 L 212 96" marker-end="url(#ar2)"/>
<text class="tk oc" x="208" y="60">qE</text><text class="tk pl" x="218" y="96">mg</text>
<path class="acst" d="M60 58 C 90 58, 100 66, 118 70"/><text class="tk mut" x="34" y="56">atomiser</text>
<path class="plst" d="M300 76 L 350 76"/><circle class="acst nofill" cx="360" cy="76" r="10"/><text class="tk" x="360" y="100" text-anchor="middle">telescope</text>
<path class="ocst" d="M120 130 L 160 108" marker-end="url(#ar)"/><text class="tk oc" x="116" y="136" text-anchor="end">X-rays change q</text>
<text class="tk mut" x="26" y="20">q always an integer multiple of 1.59×10⁻¹⁹ C</text></svg>`,

ab: () => `<svg viewBox="0 0 420 145" class="dia"><ellipse class="ocf" cx="210" cy="70" rx="34" ry="24"/><ellipse class="mut2f" cx="210" cy="70" rx="14" ry="9"/>
<text class="tk mut" x="210" y="112" text-anchor="middle">toroidal magnet, Nb-coated, superconducting</text>
<text class="tk oc" x="256" y="60">B inside only</text>
<rect class="acf" x="26" y="62" width="16" height="16" rx="2"/><text class="tk mut" x="26" y="56">e⁻</text>
<path class="acst" d="M42 70 C 110 70, 150 50, 210 52 C 270 54, 300 66, 360 70"/>
<path class="acst" d="M42 70 C 110 70, 150 92, 210 90 C 270 88, 300 76, 360 70"/>
<text class="tk mut" x="150" y="44">through the hole</text><text class="tk mut" x="150" y="106">around the outside</text>
<circle class="pld" cx="364" cy="70" r="3"/><text class="tk pl" x="372" y="66">Δφ = qΦ/ħ</text>
<text class="tk oc" x="26" y="136">a phase shift where E = B = 0 — the holonomy ∮A·dl is physical</text></svg>`,

incline: () => `<svg viewBox="0 0 420 150" class="dia"><path class="mut2f" d="M40 110 L 320 50 L 320 110 Z"/>
<circle class="acd" cx="302" cy="58" r="6"/>
${[110,180,250].map((x,i)=>`<path class="plst" d="M${x} ${110-(320-x)*0.214} l 0 -12"/>`).join('')}
<text class="tk pl" x="180" y="46" text-anchor="middle">gut frets — clicks evenly spaced</text>
<text class="tk oc" x="70" y="96">1 : 3 : 5 : 7 …  ⟹ s ∝ t²</text>
<rect class="acf" x="350" y="40" width="26" height="30" rx="3"/><path class="ocst" d="M363 70 L 363 96" marker-end="url(#ar)"/>
<rect class="acf" x="350" y="96" width="26" height="22" rx="2"/><text class="tk mut" x="363" y="134" text-anchor="middle">water clock: weigh the outflow</text>
<text class="tk mut" x="26" y="26">7 m plank, parchment-lined groove, "a full hundred" repeats</text></svg>`,

cavendish: () => `<svg viewBox="0 0 420 150" class="dia"><line class="plst" x1="210" y1="14" x2="210" y2="60"/><text class="tk pl" x="216" y="24">torsion wire, 1 m</text>
<line class="acst2" x1="120" y1="70" x2="300" y2="70"/><circle class="acf" cx="120" cy="70" r="9"/><circle class="acf" cx="300" cy="70" r="9"/>
<text class="tk mut" x="210" y="88" text-anchor="middle">1.8 m rod, two 0.73 kg spheres</text>
<circle class="ocf" cx="120" cy="104" r="17"/><circle class="ocf" cx="300" cy="36" r="17"/>
<text class="tk oc" x="120" y="132" text-anchor="middle">158 kg lead</text>
<path class="ocst" d="M120 84 L 120 92" marker-end="url(#ar)"/><path class="ocst" d="M300 58 L 300 50" marker-end="url(#ar)"/>
<rect class="mut2f" x="20" y="8" width="380" height="134" fill="none" stroke-dasharray="4 4"/>
<text class="tk mut" x="30" y="24">sealed shed; read by telescope from outside, to avoid convection</text>
<text class="tk oc" x="30" y="144">force ~1.7×10⁻⁷ N ⟹ mean density of Earth 5.448 g/cm³</text></svg>`,

perrin: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="mut2f" x="40" y="22" width="90" height="100" rx="3"/>
${Array.from({length:34},(_,i)=>`<circle class="acd" cx="${46+((i*29)%78)}" cy="${28+Math.floor(i*i/12)%90}" r="2"/>`).join('')}
<text class="tk mut" x="85" y="136" text-anchor="middle">sedimentation equilibrium</text>
<path class="ocst" d="M136 30 L 136 116"/><text class="tk oc" x="142" y="40">n(h) = n₀e^{−mgh/k_BT}</text>
<text class="tk oc" x="142" y="56">count grains at each focal depth</text>
<path class="acst2" d="M240 100 l 14 -22 l -10 -16 l 22 -6 l 8 20 l 18 -10 l -6 24 l 16 8 l -20 12 l 4 18 l -22 -10 l -12 14 l -6 -20 z"/>
<circle class="ocd" cx="240" cy="100" r="3"/>
<text class="tk mut" x="286" y="124" text-anchor="middle">position marked every 30 s</text>
<text class="tk oc" x="330" y="60">⟨x²⟩ = 2Dt</text><text class="tk oc" x="330" y="76">D = k_BT/6πηa</text>
<text class="tk mut" x="26" y="18">thirteen independent routes to N_A, all ≈ 6.5–7.2×10²³</text></svg>`,

joule: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="mut2f" x="120" y="34" width="120" height="90" rx="4"/>
<text class="tk mut" x="180" y="138" text-anchor="middle">calorimeter of water</text>
<line class="acst2" x1="180" y1="30" x2="180" y2="112"/>
${[52,72,92].map(y=>`<line class="acst2" x1="152" y1="${y}" x2="208" y2="${y}"/>`).join('')}
${[44,64,84,104].map(y=>`<line class="ocst" x1="128" y1="${y}" x2="146" y2="${y}"/><line class="ocst" x1="214" y1="${y}" x2="232" y2="${y}"/>`).join('')}
<text class="tk oc" x="248" y="50">fixed vanes stop bulk rotation</text>
<circle class="acst nofill" cx="290" cy="30" r="9"/><path class="ocst" d="M299 30 L 330 30 L 330 86" marker-end="url(#ar)"/>
<rect class="acf" x="320" y="88" width="20" height="20"/><text class="tk mut" x="330" y="124" text-anchor="middle">lead weight falls</text>
<path class="plst" d="M180 30 L 180 14"/><text class="tk pl" x="188" y="18">thermometer, 1/200 °F</text>
<text class="tk oc" x="26" y="20">772.7 ft·lb per BTU — within 1% of 778</text></svg>`,

landauer: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acst2" d="M40 40 C 70 40, 74 92, 102 92 C 130 92, 134 40, 164 40"/>
<circle class="ocd" cx="102" cy="92" r="5"/><text class="tk" x="102" y="112" text-anchor="middle">bit = 0 or 1</text>
<path class="ocst" d="M176 66 L 212 66" marker-end="url(#ar)"/><text class="tk oc" x="194" y="58" text-anchor="middle">erase</text>
<path class="acst2" d="M228 40 C 258 40, 262 92, 290 92 C 318 92, 326 56, 356 44"/>
<circle class="ocd" cx="290" cy="92" r="5"/><text class="tk" x="290" y="112" text-anchor="middle">always 0</text>
<text class="tk mut" x="40" y="24">2 μm silica bead in a double-well optical trap</text>
<text class="tk oc" x="40" y="140">dissipated heat → k_BT ln 2 = 3×10⁻²¹ J as the erasure is slowed</text></svg>`,

freeexp: () => `<svg viewBox="0 0 420 145" class="dia"><rect class="mut2f" x="60" y="30" width="300" height="76" rx="4"/>
<text class="tk mut" x="210" y="122" text-anchor="middle">water bath</text>
<circle class="acf" cx="130" cy="68" r="26"/><text class="tk" x="130" y="72" text-anchor="middle">22 atm</text>
<circle class="mut2f" cx="286" cy="68" r="26"/><text class="tk" x="286" y="72" text-anchor="middle">vacuum</text>
<line class="acst2" x1="156" y1="68" x2="260" y2="68"/><circle class="ocd" cx="208" cy="68" r="6"/><text class="tk oc" x="208" y="52" text-anchor="middle">stopcock</text>
<path class="plst" d="M210 30 L 210 16"/><text class="tk pl" x="218" y="20">thermometer</text>
<text class="tk oc" x="26" y="24">gas expands doing no work: for an ideal gas, ΔT = 0</text>
<text class="tk mut" x="26" y="140">first version failed — the copper absorbed the effect</text></svg>`,

gaslaw: () => `<svg viewBox="0 0 420 150" class="dia"><line class="ax" x1="60" y1="112" x2="396" y2="112"/><line class="ax" x1="146" y1="112" x2="146" y2="20"/>
<text class="tk mut" x="152" y="28">P</text><text class="tk mut" x="390" y="128" text-anchor="end">T (°C)</text>
<text class="tk mut" x="146" y="128" text-anchor="middle">0</text>
<path class="acst2" d="M146 74 L 380 30"/><path class="plst" d="M62 112 L 146 74"/>
<circle class="pld" cx="62" cy="112" r="4"/><text class="tk pl" x="62" y="134" text-anchor="middle">−273.15</text>
${[200,260,320].map((x,i)=>`<circle class="ocd" cx="${x}" cy="${74-(x-146)*0.188}" r="3"/>`).join('')}
<text class="tk oc" x="240" y="58">measured points</text>
<text class="tk pl" x="70" y="96">extrapolation</text>
<text class="tk mut" x="26" y="20">absolute zero is fixed by extrapolating past where every gas liquefies</text></svg>`,

onnes: () => `<svg viewBox="0 0 420 150" class="dia"><line class="ax" x1="60" y1="112" x2="380" y2="112"/><line class="ax" x1="60" y1="112" x2="60" y2="22"/>
<text class="tk mut" x="40" y="30">R (Ω)</text><text class="tk mut" x="374" y="128" text-anchor="end">T (K)</text>
<path class="acst2" d="M370 42 L 200 62 L 150 70 L 128 74 L 126 110 L 62 110"/>
<circle class="ocd" cx="127" cy="92" r="4"/><text class="tk oc" x="136" y="86">4.2 K</text>
<text class="tk mut" x="200" y="128" text-anchor="middle">"Kwik nagenoeg nul"</text>
<path class="mut2" d="M370 42 C 300 56, 240 74, 190 104" stroke-dasharray="3 3"/><text class="tk mut" x="286" y="82">Kelvin’s prediction</text>
<rect class="mut2f" x="300" y="14" width="80" height="18" rx="3"/><text class="tk" x="340" y="27" text-anchor="middle">Hg in a capillary</text>
<text class="tk oc" x="26" y="144">four-terminal measurement: 0.11 Ω → &lt; 3×10⁻⁶ Ω within 0.1 K</text></svg>`,

meissner: () => `<svg viewBox="0 0 420 150" class="dia">
<rect class="mut2f" x="52" y="46" width="44" height="64" rx="6"/><text class="tk" x="74" y="128" text-anchor="middle">T &gt; T_c</text>
${[56,74,92].map(y=>`<path class="acst" d="M30 ${y} L 122 ${y}" marker-end="url(#ar2)"/>`).join('')}
<path class="ocst" d="M140 78 L 176 78" marker-end="url(#ar)"/><text class="tk oc" x="158" y="70" text-anchor="middle">cool</text>
<rect class="acf" x="196" y="46" width="44" height="64" rx="6"/><text class="tk" x="218" y="128" text-anchor="middle">T &lt; T_c</text>
${[56,74,92].map((y,i)=>`<path class="acst" d="M180 ${y} C 196 ${y}, 198 ${y<78?y-16:y+16}, 218 ${y<78?y-18:y+18} C 240 ${y<78?y-18:y+18}, 240 ${y}, 258 ${y}" />`).join('')}
<text class="tk oc" x="276" y="52">flux expelled, not trapped</text>
<text class="tk oc" x="276" y="68">λ_L = 20–100 nm surface layer</text>
<text class="tk mut" x="276" y="92">a perfect conductor would</text><text class="tk mut" x="276" y="106">lock the flux in place</text>
<text class="tk mut" x="26" y="142">order matters: field first, then cool — that is what makes it a phase</text></svg>`,

hallbar: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="90" y="52" width="200" height="40" rx="2"/>
<text class="tk mut" x="190" y="110" text-anchor="middle">2D electron gas in a Si MOSFET, 1.5 K</text>
${[0,1,2,3].map(i=>`<rect class="mut2f" x="${112+i*48}" y="40" width="12" height="12"/><rect class="mut2f" x="${112+i*48}" y="92" width="12" height="12"/>`).join('')}
<path class="ocst" d="M60 72 L 90 72" marker-end="url(#ar)"/><text class="tk oc" x="56" y="68" text-anchor="end">I</text>
<path class="plst" d="M166 36 L 214 36"/><text class="tk pl" x="190" y="30" text-anchor="middle">V_xx</text>
<path class="plst" d="M300 46 L 300 98"/><text class="tk pl" x="308" y="76">V_xy</text>
${[0,1,2,3,4].map(i=>`<circle class="acd" cx="${120+i*42}" cy="20" r="2"/>`).join('')}
<text class="tk mut" x="330" y="24">B = 15 T, out of page</text>
<text class="tk oc" x="26" y="142">R_H = h/νe² to 1 part in 10⁹ — in a dirty, imperfect device</text></svg>`,

reynolds: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="mut2f" x="20" y="24" width="72" height="92" rx="3"/><text class="tk mut" x="56" y="132" text-anchor="middle">still tank</text>
<path class="acst2" d="M92 60 C 104 60, 106 66, 116 68 L 396 68"/><path class="acst2" d="M92 88 C 104 88, 106 82, 116 80 L 396 80"/>
<text class="tk mut" x="150" y="100">bell-mouth intake</text>
<circle class="ocf" cx="62" cy="40" r="10"/><text class="tk oc" x="62" y="20" text-anchor="middle">dye</text>
<path class="ocst" d="M72 44 C 100 56, 110 72, 130 74 L 226 74"/>
<path class="ocst" d="M226 74 c 8 -7 16 8 24 0 c 10 -10 14 12 24 2 c 12 -12 18 14 30 2 c 14 -14 22 16 36 2 c 12 -12 20 10 32 4"/>
<path class="plst" d="M226 44 L 226 104"/><text class="tk pl" x="232" y="40">transition</text>
<text class="tk oc" x="26" y="146">Re = ρUD/μ ≈ 2000 — one dimensionless number, not three quantities</text></svg>`,

prandtl: () => `<svg viewBox="0 0 420 150" class="dia"><path class="acf" d="M60 74 C 120 44, 240 44, 300 74 C 240 92, 120 92, 60 74 Z"/>
${[0,1,2,3,4].map(i=>`<path class="ocst" d="M20 ${34+i*18} C 80 ${34+i*18}, 140 ${40+i*16}, 200 ${44+i*15}"/>`).join('')}
<path class="plst" d="M62 70 C 130 40, 240 40, 296 70"/><text class="tk pl" x="180" y="34" text-anchor="middle">boundary layer δ ~ L/√Re</text>
<path class="acst2" d="M300 74 c 14 -6 24 6 30 16 c -16 8 -28 -2 -30 -16"/>
<path class="acst2" d="M300 74 c 16 8 26 -4 34 -14 c -14 -10 -28 -2 -34 14"/>
<text class="tk oc" x="344" y="60">separation ⟹ wake ⟹ drag</text>
<text class="tk mut" x="26" y="140">viscosity acts only in a few mm — and decides everything</text></svg>`,

goldfoil: () => `<svg viewBox="0 0 420 155" class="dia"><rect class="acf" x="24" y="66" width="22" height="18" rx="2"/><text class="tk mut" x="24" y="60">Rn source</text>
<rect class="mut2f" x="70" y="60" width="6" height="12"/><rect class="mut2f" x="70" y="78" width="6" height="12"/>
<path class="ocst" d="M76 75 L 200 75" marker-end="url(#ar)"/><text class="tk oc" x="120" y="68">α</text>
<line class="acst2" x1="206" y1="34" x2="206" y2="116"/><text class="tk" x="206" y="132" text-anchor="middle">gold foil, 400 nm</text>
${[6,14,30,60,110,150].map(a=>`<path class="plst" d="M206 75 L ${206+120*Math.cos(-a*Math.PI/180)} ${75+120*Math.sin(-a*Math.PI/180)}" opacity="${Math.max(0.25,1-a/170)}"/>`).join('')}
<path class="plst" d="M206 75 L 100 135"/><text class="tk pl" x="96" y="146" text-anchor="end">1 in 8000 back &gt; 90°</text>
<path class="acst" d="M300 30 A 120 120 0 0 1 300 122" /><text class="tk ac" x="320" y="40">ZnS screen, rotatable</text>
<text class="tk mut" x="320" y="76">flashes counted by eye,</text><text class="tk mut" x="320" y="90">2-minute shifts</text>
<text class="tk oc" x="24" y="150">N(θ) ∝ 1/sin⁴(θ/2), verified over 250 000× in rate</text></svg>`,

chadwick: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="acf" x="24" y="62" width="20" height="20" rx="2"/><text class="tk mut" x="24" y="56">Po (α)</text>
<rect class="ocf" x="66" y="58" width="24" height="28" rx="2"/><text class="tk" x="78" y="106" text-anchor="middle">Be</text>
<path class="plst" d="M92 72 L 190 72"/><text class="tk pl" x="140" y="64" text-anchor="middle">neutral, penetrating</text>
<rect class="mut2f" x="190" y="46" width="14" height="52"/><text class="tk mut" x="197" y="116" text-anchor="middle">paraffin</text>
<path class="ocst" d="M204 72 L 300 72" marker-end="url(#ar)"/><text class="tk oc" x="252" y="64" text-anchor="middle">protons, up to 5.7 MeV</text>
<rect class="acf" x="300" y="56" width="40" height="32" rx="2"/><text class="tk" x="320" y="106" text-anchor="middle">ionisation chamber</text>
<text class="tk mut" x="26" y="26">γ hypothesis needs 55 MeV — and then fails for the N recoils</text>
<text class="tk oc" x="26" y="142">one neutral particle of ~proton mass fits both targets at once</text></svg>`,

franckhertz: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="mut2f" x="70" y="30" width="240" height="76" rx="6"/><text class="tk mut" x="190" y="122" text-anchor="middle">Hg vapour</text>
<line class="acst2" x1="90" y1="38" x2="90" y2="98"/><text class="tk" x="90" y="24" text-anchor="middle">cathode</text>
${[0,1,2,3,4,5,6].map(i=>`<line class="ocst" x1="${224}" y1="${38+i*10}" x2="230" y2="${38+i*10}"/>`).join('')}
<text class="tk oc" x="227" y="24" text-anchor="middle">grid</text>
<line class="acst2" x1="292" y1="38" x2="292" y2="98"/><text class="tk" x="292" y="24" text-anchor="middle">plate</text>
${[0,1,2,3].map(i=>`<circle class="acd" cx="${110+i*28}" cy="${52+i*9}" r="2.5"/>`).join('')}
<path class="plst" d="M90 112 L 227 112"/><text class="tk pl" x="158" y="126" text-anchor="middle">accelerating V</text>
<path class="acst2" d="M330 100 l 8 -22 l 6 22 l 10 -30 l 6 30 l 12 -38"/><text class="tk ac" x="340" y="44">dips every 4.9 V</text>
<text class="tk oc" x="26" y="20">and the vapour glows at 254 nm — a photon of exactly 4.9 eV</text></svg>`,

bragg: () => `<svg viewBox="0 0 420 150" class="dia">
${[0,1,2].map(j=>`<line class="mut2" x1="120" y1="${58+j*22}" x2="290" y2="${58+j*22}"/>`).join('')}
${[0,1,2].map(j=>[0,1,2,3,4,5].map(i=>`<circle class="acd" cx="${130+i*30}" cy="${58+j*22}" r="3"/>`).join('')).join('')}
<text class="tk mut" x="205" y="124" text-anchor="middle">crystal lattice, spacing d</text>
<path class="ocst" d="M50 26 L 160 58"/><path class="ocst" d="M160 58 L 270 26" marker-end="url(#ar)"/>
<path class="ocst" d="M56 34 L 190 80"/><path class="ocst" d="M190 80 L 300 40" marker-end="url(#ar)"/>
<text class="tk oc" x="46" y="22">X-rays, λ ≈ 0.1 nm</text>
<path class="plst" d="M140 58 a 24 24 0 0 1 20 -12"/><text class="tk pl" x="150" y="48">θ</text>
<text class="tk oc" x="26" y="142">nλ = 2d sin θ — but the phases are lost, so a model must be assumed</text></svg>`,

mendeleev: () => `<svg viewBox="0 0 420 145" class="dia">
${[['Si',110,'28.1'],['?',176,'~72'],['Sn',242,'118.7'],['Pb',308,'207.2']].map(([l,x,w],i)=>
`<rect class="${l==='?'?'ocf':'acf'}" x="${x-26}" y="34" width="52" height="46" rx="3"/>
<text class="lb" x="${x}" y="58" text-anchor="middle">${l}</text><text class="tk mut" x="${x}" y="72" text-anchor="middle">${w}</text>`).join('')}
<text class="tk mut" x="60" y="58" text-anchor="end">group IV</text>
<text class="tk oc" x="176" y="26" text-anchor="middle">gap: eka-silicon</text>
<text class="tk oc" x="30" y="100">predicted 1871: weight 72, density 5.5, GeCl₄ b.p. &lt; 100 °C, d = 1.9</text>
<text class="tk ac" x="30" y="118">found 1886: weight 72.6, density 5.35, b.p. 86 °C, d = 1.88</text>
<text class="tk mut" x="30" y="136">— and he reversed Te and I against their weights, and was right</text></svg>`,

pasteur: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acf" d="M70 40 L 104 40 L 116 62 L 104 88 L 70 88 L 58 62 Z"/><path class="ocf" d="M104 40 L 116 44 L 116 62 L 104 58 Z"/>
<path class="acf" d="M170 40 L 136 40 L 124 62 L 136 88 L 170 88 L 182 62 Z"/><path class="ocf" d="M136 40 L 124 44 L 124 62 L 136 58 Z"/>
<text class="tk mut" x="120" y="106" text-anchor="middle">hemihedral faces, two mirror forms</text>
<path class="ocst" d="M196 62 L 232 62" marker-end="url(#ar)"/><text class="tk oc" x="214" y="54" text-anchor="middle">sorted by hand</text>
<rect class="mut2f" x="252" y="42" width="120" height="40" rx="4"/><text class="tk" x="312" y="100" text-anchor="middle">polarimeter</text>
<path class="plst" d="M252 62 L 372 62"/><path class="plst" d="M300 50 L 300 74"/><path class="plst" d="M340 56 a 14 14 0 0 1 10 12"/>
<text class="tk pl" x="356" y="40">+ / − rotation</text>
<text class="tk oc" x="26" y="142">optical activity survives dissolution ⟹ it is molecular, not crystalline</text></svg>`,

arrhenius: () => `<svg viewBox="0 0 420 150" class="dia"><line class="ax" x1="70" y1="110" x2="380" y2="110"/><line class="ax" x1="70" y1="110" x2="70" y2="22"/>
<text class="tk mut" x="46" y="30">ln k</text><text class="tk mut" x="374" y="128" text-anchor="end">1/T (K⁻¹)</text>
<path class="acst2" d="M86 34 L 356 100"/>
${[110,170,230,290].map(x=>`<circle class="ocd" cx="${x}" cy="${34+(x-86)*0.2444}" r="3.2"/>`).join('')}
<path class="plst" d="M200 62 L 280 62 M280 62 L 280 82"/><text class="tk pl" x="288" y="76">slope = −E_a/R</text>
<text class="tk oc" x="86" y="26">intercept ln A</text>
<text class="tk mut" x="26" y="142">TST says the line is slightly curved: E_a is a fitted parameter, not a barrier</text></svg>`,

stoppedflow: () => `<svg viewBox="0 0 420 150" class="dia">
<rect class="acf" x="26" y="34" width="44" height="22" rx="3"/><text class="tk" x="48" y="28" text-anchor="middle">enzyme</text>
<rect class="acf" x="26" y="86" width="44" height="22" rx="3"/><text class="tk" x="48" y="122" text-anchor="middle">substrate</text>
<path class="ocst" d="M70 45 C 100 45, 110 62, 130 68"/><path class="ocst" d="M70 97 C 100 97, 110 80, 130 74"/>
<circle class="ocf" cx="142" cy="71" r="12"/><text class="tk oc" x="142" y="96" text-anchor="middle">mixer &lt; 1 ms</text>
<rect class="mut2f" x="164" y="58" width="52" height="26" rx="2"/><text class="tk mut" x="190" y="100" text-anchor="middle">observation cell</text>
<path class="plst" d="M150 40 L 230 40"/><text class="tk pl" x="238" y="44">light</text>
<rect class="acf" x="240" y="60" width="18" height="22" rx="2"/><text class="tk mut" x="249" y="100" text-anchor="middle">stop</text>
<path class="acst2" d="M286 106 C 306 66, 330 50, 380 46"/><line class="plst" x1="286" y1="46" x2="380" y2="46"/>
<text class="tk ac" x="306" y="38">V_max</text><text class="tk oc" x="292" y="124">v = V_max[S]/(K_M+[S])</text></svg>`,

bz: () => `<svg viewBox="0 0 420 150" class="dia"><circle class="mut2f" cx="96" cy="72" r="54"/>
${[14,26,38,50].map((r,i)=>`<circle class="${i%2?'ocst':'acst'}" cx="96" cy="72" r="${r}" fill="none"/>`).join('')}
<text class="tk mut" x="96" y="140" text-anchor="middle">unstirred: target waves, mm/min</text>
<path class="acst2" d="M186 72 q 12 -34 24 0 q 12 34 24 0 q 12 -34 24 0 q 12 34 24 0 q 12 -34 24 0 q 12 34 24 0"/>
<text class="tk ac" x="188" y="34">stirred: red ⇌ blue, period ~30 s</text>
<text class="tk mut" x="188" y="112">malonic acid + bromate + ferroin in H₂SO₄</text>
<text class="tk oc" x="26" y="26">ΔG still falls monotonically — the oscillation is in the intermediates</text></svg>`,

buchner: () => `<svg viewBox="0 0 420 150" class="dia">
<circle class="ocf" cx="60" cy="48" r="18"/><text class="tk" x="60" y="24" text-anchor="middle">yeast</text>
<path class="ocst" d="M82 52 L 112 60" marker-end="url(#ar)"/><text class="tk oc" x="96" y="44" text-anchor="middle">+ sand</text>
<rect class="mut2f" x="118" y="40" width="54" height="44" rx="3"/><text class="tk mut" x="145" y="98" text-anchor="middle">hydraulic press</text>
<path class="plst" d="M145 32 L 145 40" marker-end="url(#ar2)"/><text class="tk pl" x="152" y="30">several hundred atm</text>
<path class="ocst" d="M176 62 L 206 62" marker-end="url(#ar)"/>
<path class="acf" d="M216 40 h 52 v 46 a 26 12 0 0 1 -52 0 Z"/><text class="tk" x="242" y="100" text-anchor="middle">cell-free juice</text>
${[0,1,2,3,4,5].map(i=>`<circle class="ocd" cx="${224+((i*13)%42)}" cy="52" r="2"/>`).join('')}
<text class="tk oc" x="292" y="50">+ sucrose ⟹ CO₂, ethanol</text>
<text class="tk mut" x="292" y="66">no intact cells (checked)</text>
<text class="tk mut" x="292" y="82">boiling abolishes it</text>
<text class="tk oc" x="26" y="142">fermentation is chemistry — no vital force, no living cell required</text></svg>`,

jagendorf: () => `<svg viewBox="0 0 420 150" class="dia">
<circle class="mut2f" cx="90" cy="64" r="34"/><circle class="ocf" cx="90" cy="64" r="22"/>
<text class="tk oc" x="90" y="68" text-anchor="middle">pH 4</text><text class="tk mut" x="90" y="116" text-anchor="middle">thylakoid, in the dark</text>
<path class="ocst" d="M136 64 L 172 64" marker-end="url(#ar)"/><text class="tk oc" x="154" y="56" text-anchor="middle">inject</text>
<circle class="acf" cx="240" cy="64" r="34"/><circle class="ocf" cx="240" cy="64" r="22"/>
<text class="tk oc" x="240" y="68" text-anchor="middle">pH 4</text><text class="tk ac" x="240" y="26" text-anchor="middle">outside pH 8</text>
<text class="tk mut" x="240" y="116" text-anchor="middle">ΔpH = 4 ⟹ Δp ≈ 240 mV</text>
${[0,1,2,3].map(i=>`<path class="plst" d="M${226+i*10} 90 L ${226+i*10} 102" marker-end="url(#ar2)"/>`).join('')}
<text class="tk pl" x="300" y="62">ADP + Pᵢ → ATP</text><text class="tk mut" x="300" y="78">in the dark, no light,</text>
<text class="tk mut" x="300" y="92">no electron transport</text>
<text class="tk oc" x="26" y="142">a gradient alone suffices — no chemical intermediate is needed</text></svg>`,

atpsynthase: () => `<svg viewBox="0 0 420 150" class="dia"><rect class="mut2f" x="40" y="88" width="340" height="16"/>
<text class="tk mut" x="40" y="126">membrane</text>
<rect class="acf" x="176" y="84" width="40" height="26" rx="4"/><text class="tk" x="196" y="128" text-anchor="middle">c-ring rotor</text>
<line class="acst2" x1="196" y1="84" x2="196" y2="52"/><circle class="acf" cx="196" cy="42" r="22"/>
<text class="tk" x="196" y="46" text-anchor="middle">F₁</text>
<path class="ocst" d="M224 42 a 30 30 0 1 0 -8 20" marker-end="url(#ar)"/><text class="tk oc" x="242" y="30">120° steps</text>
<path class="plst" d="M196 110 L 196 96" marker-end="url(#ar2)"/><text class="tk pl" x="150" y="112" text-anchor="end">H⁺ in</text>
<line class="acst2" x1="196" y1="20" x2="330" y2="20"/><circle class="ocd" cx="334" cy="20" r="4"/>
<text class="tk oc" x="256" y="14">actin filament, 1–3 μm, watched by fluorescence</text>
<text class="tk mut" x="26" y="144">torque ≈ 40 pN·nm; work per step ≈ 50 kJ/mol — near 100% efficient</text></svg>`,

meselson: () => `<svg viewBox="0 0 420 150" class="dia">
${[['gen 0',66],['gen 1',150],['gen 2',234],['gen 3',318]].map(([l,x])=>
`<rect class="mut2f" x="${x-24}" y="22" width="48" height="90" rx="4"/><text class="tk" x="${x}" y="128" text-anchor="middle">${l}</text>`).join('')}
<rect class="acf" x="42" y="92" width="48" height="8"/>
<rect class="ocf" x="126" y="70" width="48" height="8"/>
<rect class="ocf" x="210" y="70" width="48" height="8"/><rect class="acf" x="210" y="46" width="48" height="8" opacity=".55"/>
<rect class="ocf" x="294" y="70" width="48" height="8" opacity=".5"/><rect class="acf" x="294" y="46" width="48" height="8"/>
<text class="tk mut" x="386" y="98" text-anchor="end">heavy ¹⁵N</text><text class="tk mut" x="386" y="76" text-anchor="end">hybrid</text><text class="tk mut" x="386" y="52" text-anchor="end">light ¹⁴N</text>
<text class="tk oc" x="26" y="18">CsCl density gradient, 140 000 g for 20 h; UV absorption photography</text>
<text class="tk oc" x="26" y="144">one hybrid band at gen 1 kills conservative; splitting at gen 2 kills dispersive</text></svg>`,

hershey: () => `<svg viewBox="0 0 420 150" class="dia">
<circle class="mut2f" cx="80" cy="66" r="24"/><text class="tk" x="80" y="70" text-anchor="middle">E. coli</text>
${[0,1,2].map(i=>`<path class="acst2" d="M${62+i*18} ${40-i*2} l 0 -14 l -5 0 l 5 -8 l 5 8 l -5 0"/>`).join('')}
<text class="tk ac" x="104" y="22">phage: ³⁵S coat, ³²P DNA</text>
<path class="ocst" d="M116 66 L 152 66" marker-end="url(#ar)"/><text class="tk oc" x="134" y="58" text-anchor="middle">blender, 2 min</text>
<circle class="mut2f" cx="196" cy="66" r="24"/><circle class="pld" cx="196" cy="66" r="8"/>
<text class="tk pl" x="196" y="104" text-anchor="middle">³²P inside</text>
${[0,1,2].map(i=>`<path class="acst" d="M${232+i*16} ${44+i*8} l 0 -12"/>`).join('')}
<text class="tk ac" x="248" y="26">³⁵S coats sheared off</text>
<path class="ocst" d="M276 66 L 310 66" marker-end="url(#ar)"/><text class="tk oc" x="293" y="58" text-anchor="middle">spin</text>
<rect class="mut2f" x="330" y="34" width="34" height="64" rx="3"/><rect class="acf" x="330" y="34" width="34" height="34"/><rect class="plst" x="330" y="86" width="34" height="12"/>
<text class="tk mut" x="374" y="46">³⁵S (80%)</text><text class="tk pl" x="374" y="96">³²P pellet</text>
<text class="tk mut" x="26" y="142">80/20, not 100/0 — Avery’s chemistry was the stronger evidence</text></svg>`,

mendel: () => `<svg viewBox="0 0 420 155" class="dia">
<circle class="acf" cx="60" cy="28" r="13"/><circle class="mut2f" cx="130" cy="28" r="13"/>
<text class="tk mut" x="60" y="18" text-anchor="middle">RR</text><text class="tk mut" x="130" y="18" text-anchor="middle">rr</text>
<path class="ocst" d="M74 32 C 88 44, 102 44, 116 32"/><text class="tk oc" x="95" y="56" text-anchor="middle">×</text>
<circle class="acf" cx="95" cy="72" r="13"/><text class="tk" x="95" y="96" text-anchor="middle">F₁ all Rr, all round</text>
<path class="ocst" d="M95 86 L 95 104" marker-end="url(#ar)"/><text class="tk oc" x="102" y="100">self</text>
${[0,1,2].map(i=>`<circle class="acf" cx="${64+i*26}" cy="124" r="10"/>`).join('')}
<circle class="mut2f" cx="142" cy="124" r="10"/>
<text class="tk" x="103" y="148" text-anchor="middle">F₂ — 3 : 1</text>
<text class="tk oc" x="206" y="34">5474 round : 1850 wrinkled = 2.96 : 1</text>
<text class="tk oc" x="206" y="52">6022 yellow : 2001 green = 3.01 : 1</text>
<text class="tk mut" x="206" y="74">selfing the F₂ dominants gives 1 : 2</text>
<text class="tk mut" x="206" y="88">— the 1 : 2 : 1 genotype beneath</text>
<text class="tk pl" x="206" y="112">Fisher 1936: the fit is too good</text>
<text class="tk mut" x="206" y="128">and all seven genes happen to be unlinked</text></svg>`,

flyroom: () => `<svg viewBox="0 0 420 150" class="dia">
${[0,1,2,3,4].map(i=>`<path class="mut2f" d="M${34+i*26} 30 h 18 v 30 a 9 14 0 0 1 -18 0 Z"/>`).join('')}
<text class="tk mut" x="76" y="82" text-anchor="middle">half-pint milk bottles, mashed banana</text>
<circle class="ocd" cx="200" cy="40" r="6"/><text class="tk oc" x="212" y="36">white-eyed male, 1910</text>
<text class="tk mut" x="200" y="62">F₂ = 3 red : 1 white — and every white one is male</text>
<line class="ax" x1="60" y1="118" x2="360" y2="118"/>
${[[60,'y'],[110,'w'],[190,'v'],[250,'m'],[340,'r']].map(([x,l])=>`<line class="acst2" x1="${x}" y1="112" x2="${x}" y2="124"/><text class="tk ac" x="${x}" y="136" text-anchor="middle">${l}</text>`).join('')}
<text class="tk oc" x="60" y="106">recombination frequencies are additive ⟹ the factors lie on a line</text></svg>`,

voltageclamp: () => `<svg viewBox="0 0 420 155" class="dia">
<path class="acf" d="M60 60 h 240 a 14 16 0 0 1 0 32 h -240 a 14 16 0 0 1 0 -32 Z"/>
<text class="tk mut" x="180" y="112" text-anchor="middle">squid giant axon, 0.5–1 mm across</text>
<line class="ocst2" x1="80" y1="70" x2="290" y2="70"/><line class="plst2" x1="80" y1="82" x2="290" y2="82"/>
<text class="tk oc" x="300" y="70">current wire</text><text class="tk pl" x="300" y="86">voltage wire</text>
<rect class="mut2f" x="140" y="16" width="86" height="26" rx="4"/><text class="tk" x="183" y="33" text-anchor="middle">feedback amp</text>
<path class="plst" d="M170 42 L 170 76" /><path class="ocst" d="M200 42 L 200 68" marker-end="url(#ar)"/>
<text class="tk mut" x="234" y="28">holds V at the commanded value</text>
<path class="acst2" d="M40 150 l 26 0 l 0 -18 l 60 0 l 0 18 l 40 0"/>
<text class="tk ac" x="196" y="148">step command</text>
<path class="ocst2" d="M250 132 c 10 22 20 14 26 -2 c 8 -20 16 -6 24 8 c 10 16 20 14 34 12"/>
<text class="tk oc" x="316" y="128">I_Na in, then I_K out</text></svg>`,

patchclamp: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acf" d="M40 86 C 120 86, 150 66, 190 66 C 230 66, 260 86, 340 86 L 340 116 L 40 116 Z"/>
<text class="tk mut" x="100" y="110" text-anchor="middle">cell membrane</text>
<path class="mut2f" d="M160 22 L 176 58 L 204 58 L 220 22 Z"/><text class="tk mut" x="190" y="18" text-anchor="middle">fire-polished pipette, ~1 μm</text>
<path class="plst" d="M176 58 C 180 64, 200 64, 204 58"/><text class="tk pl" x="240" y="56">gigaohm seal</text>
<circle class="ocd" cx="190" cy="66" r="4"/><text class="tk oc" x="240" y="72">one channel</text>
<path class="acst2" d="M40 142 l 30 0 l 0 -14 l 22 0 l 0 14 l 40 0 l 0 -14 l 12 0 l 0 14 l 34 0 l 0 -14 l 40 0 l 0 14 l 40 0"/>
<text class="tk ac" x="270" y="140">rectangular pA steps ≈ 10⁷ ions/s</text>
<text class="tk mut" x="270" y="118">averaging many records reproduces</text>
<text class="tk mut" x="270" y="104">the smooth HH macroscopic current</text></svg>`,

finch: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acf" d="M60 70 c 16 -22 44 -22 58 0 c -14 20 -44 20 -58 0 Z"/><path class="ocf" d="M118 70 l 26 -7 l -26 -7 Z"/>
<text class="tk mut" x="96" y="98" text-anchor="middle">1976: mean depth 9.4 mm</text>
<path class="acf" d="M226 70 c 16 -22 44 -22 58 0 c -14 20 -44 20 -58 0 Z"/><path class="ocf" d="M284 70 l 30 -11 l -30 -11 Z"/>
<text class="tk oc" x="268" y="98" text-anchor="middle">1978: mean depth 9.9 mm</text>
<path class="plst" d="M160 62 L 200 62" marker-end="url(#ar2)"/><text class="tk pl" x="180" y="52" text-anchor="middle">drought</text>
<text class="tk mut" x="26" y="24">rainfall 130 mm → 24 mm; population 1200 → 180</text>
<text class="tk oc" x="26" y="128">soft seeds gone; only deep beaks crack Tribulus</text>
<text class="tk mut" x="26" y="144">h² = 0.74 measured independently ⟹ R = h²S predicts the response</text></svg>`,

ltee: () => `<svg viewBox="0 0 420 150" class="dia">
${[0,1,2,3,4,5].map(i=>`<path class="mut2f" d="M${34+i*26} 24 h 16 v 22 a 8 12 0 0 1 -16 0 Z"/>`).join('')}
<text class="tk mut" x="82" y="64" text-anchor="middle">12 populations, daily 1:100 transfer</text>
<line class="ax" x1="40" y1="128" x2="390" y2="128"/><line class="ax" x1="40" y1="128" x2="40" y2="78"/>
<text class="tk mut" x="26" y="86">fitness</text><text class="tk mut" x="384" y="144" text-anchor="end">generations (×10³)</text>
<path class="acst2" d="M40 128 C 90 96, 160 88, 250 84 C 320 81, 360 79, 386 78"/>
<circle class="pld" cx="256" cy="84" r="4"/><text class="tk pl" x="264" y="80">Cit⁺ at ~31 500</text>
<text class="tk oc" x="46" y="98">+70% at 50 000 generations, still rising</text>
<text class="tk mut" x="46" y="114">frozen every 500 gen — the tape can be replayed</text></svg>`,

paine: () => `<svg viewBox="0 0 420 150" class="dia">
<rect class="mut2f" x="34" y="36" width="150" height="80" rx="3"/><text class="tk" x="109" y="130" text-anchor="middle">control</text>
${[['Pisaster',52,'pld'],['mussel',72,'acd'],['barnacle',88,'ocd'],['algae',104,'mud']].map(([l,y,c],i)=>
`<circle class="${c}" cx="52" cy="${y}" r="4"/><text class="tk mut" x="64" y="${y+4}">${l}</text>`).join('')}
<text class="tk oc" x="109" y="28" text-anchor="middle">15 species</text>
<rect class="acf" x="236" y="36" width="150" height="80" rx="3"/><text class="tk" x="311" y="130" text-anchor="middle">Pisaster removed by hand</text>
${Array.from({length:30},(_,i)=>`<ellipse class="acd" cx="${248+((i*31)%128)}" cy="${44+Math.floor(i/6)*15}" rx="7" ry="4"/>`).join('')}
<text class="tk oc" x="311" y="28" text-anchor="middle">mussel monoculture — 8 species, then fewer</text>
<path class="plst" d="M196 76 L 226 76" marker-end="url(#ar2)"/>
<text class="tk mut" x="26" y="146">one predator, not abundant, controls the diversity of the whole assemblage</text></svg>`,

island: () => `<svg viewBox="0 0 420 150" class="dia">
<path class="acf" d="M20 96 C 60 88, 90 92, 110 96 L 110 130 L 20 130 Z"/><text class="tk mut" x="60" y="118" text-anchor="middle">mainland source</text>
${[[176,58,16],[248,86,13],[330,66,11]].map(([x,y,r],i)=>`<circle class="ocf" cx="${x}" cy="${y}" r="${r}"/><text class="tk" x="${x}" y="${y+r+16}" text-anchor="middle">islet ${i+1}</text>`).join('')}
<path class="plst" d="M112 92 C 140 76, 156 64, 160 60" marker-end="url(#ar2)"/>
<path class="plst" d="M112 96 C 160 96, 200 90, 234 87" marker-end="url(#ar2)"/>
<text class="tk pl" x="150" y="112">immigration falls with distance</text>
<text class="tk oc" x="26" y="24">tent each islet, fumigate with methyl bromide, then census recolonisation</text>
<text class="tk mut" x="26" y="146">richness returns in ~250 days; composition does not — S depends on area and distance</text></svg>`,

guessing: () => `<svg viewBox="0 0 420 140" class="dia">
<text class="lb" x="26" y="34">T H E R E _ I S _ N O _ R E</text>
${[['1',44],['1',62],['1',80],['5',98],['1',116],['1',134],['2',152],['1',170],['1',188],['15',206],['1',226],['1',244],['1',262],['17',280],['1',300]].map(([n,x],i)=>
`<text class="tk oc" x="${x}" y="54" text-anchor="middle">${n}</text>`).join('')}
<text class="tk mut" x="26" y="72">guesses needed per letter</text>
<path class="plst" d="M26 84 L 330 84"/>
<text class="tk pl" x="26" y="102">a second subject, given only the numbers, reconstructs the text exactly</text>
<text class="tk ac" x="26" y="124">⟹ H(English) ≈ 0.6–1.3 bits/letter, against log₂27 = 4.76 — 75% redundant</text></svg>`,

voyager: () => `<svg viewBox="0 0 420 140" class="dia">
<circle class="acf" cx="46" cy="70" r="16"/><text class="tk mut" x="46" y="100" text-anchor="middle">Voyager</text>
<path class="plst" d="M64 70 L 300 70"/>
${[110,160,210,260].map(x=>`<path class="plst" d="M${x} 56 q 6 14 0 28"/>`).join('')}
<text class="tk pl" x="180" y="46" text-anchor="middle">24 billion km, ~10⁻¹⁸ W received</text>
<path class="acst2" d="M310 40 A 34 34 0 0 1 310 100"/><line class="acst2" x1="310" y1="70" x2="352" y2="70"/>
<text class="tk mut" x="330" y="118" text-anchor="middle">70 m dish</text>
<text class="tk oc" x="26" y="26">Reed–Solomon outer + convolutional inner, Viterbi-decoded</text>
<text class="tk ac" x="26" y="136">reliable at 160 bit/s, far below the receiver noise floor</text></svg>`,

diagonal: () => `<svg viewBox="0 0 420 142" class="dia">
<rect class="acf" x="40" y="40" width="80" height="34" rx="3"/><text class="tk" x="80" y="61" text-anchor="middle">H(p,x)</text>
<text class="tk mut" x="80" y="92" text-anchor="middle">"does p halt on x?"</text>
<path class="ocst" d="M124 57 L 168 57" marker-end="url(#ar)"/>
<rect class="ocf" x="172" y="40" width="80" height="34" rx="3"/><text class="tk" x="212" y="61" text-anchor="middle">D(p)</text>
<text class="tk mut" x="212" y="92" text-anchor="middle">loop if H says halt</text>
<text class="tk mut" x="212" y="106" text-anchor="middle">halt if H says loop</text>
<path class="plst" d="M252 57 C 300 57, 300 24, 212 24 L 212 36" marker-end="url(#ar2)"/>
<text class="tk pl" x="300" y="22">feed D to itself</text>
<text class="tk pl" x="300" y="62">D(D) halts ⟺ D(D) does not halt</text>
<text class="tk ac" x="26" y="136">so H does not exist — and the same diagonal gives Gödel and Cantor</text></svg>`,

tyndall: () => `<svg viewBox="0 0 420 145" class="dia">
<rect class="mut2f" x="120" y="54" width="170" height="26" rx="3"/><text class="tk" x="205" y="98" text-anchor="middle">1.2 m brass tube, rock-salt windows</text>
<line class="acst2" x1="120" y1="50" x2="120" y2="84"/><line class="acst2" x1="290" y1="50" x2="290" y2="84"/>
<rect class="ocf" x="76" y="56" width="24" height="22" rx="2"/><text class="tk mut" x="88" y="46" text-anchor="middle">heat</text>
<path class="ocst" d="M100 67 L 118 67" marker-end="url(#ar)"/>
<path class="ocst" d="M292 67 L 314 67" marker-end="url(#ar)"/>
<rect class="acf" x="316" y="52" width="18" height="30" rx="2"/><text class="tk" x="325" y="98" text-anchor="middle">thermopile</text>
<rect class="ocf" x="360" y="56" width="20" height="22" rx="2"/><path class="ocst" d="M358 67 L 338 67" marker-end="url(#ar)"/>
<text class="tk mut" x="370" y="98" text-anchor="middle">compensating source</text>
<circle class="acst nofill" cx="325" cy="118" r="10"/><path class="plst" d="M325 118 L 318 110"/>
<text class="tk oc" x="26" y="26">N₂, O₂: nothing. H₂O, CO₂, CH₄, O₃: strong absorption</text>
<text class="tk mut" x="26" y="140">the null result for the bulk atmosphere is the control that makes the rest meaningful</text></svg>`,

keeling: () => `<svg viewBox="0 0 420 142" class="dia">
<line class="ax" x1="60" y1="112" x2="392" y2="112"/><line class="ax" x1="60" y1="112" x2="60" y2="20"/>
<text class="tk mut" x="40" y="28">ppm</text>
<text class="tk mut" x="62" y="128">1958</text><text class="tk mut" x="386" y="128" text-anchor="end">2025</text>
<path class="acst2" d="${(()=>{let d='M60 104';for(let i=1;i<=134;i++){const x=60+i*2.48;const t=i/134;const y=104-(t*t*0.45+t*0.55)*80 + 3.5*Math.sin(i*1.05);d+=` L${x.toFixed(1)} ${y.toFixed(1)}`}return d})()}"/>
<text class="tk ac" x="76" y="98">315</text><text class="tk ac" x="378" y="30" text-anchor="end">420+</text>
<path class="plst" d="M300 66 L 268 52"/><text class="tk pl" x="304" y="70">seasonal sawtooth ≈ 6 ppm</text>
<text class="tk mut" x="26" y="138">¹³C falls and O₂ falls stoichiometrically — the source is fossil carbon</text></svg>`,

icecore: () => `<svg viewBox="0 0 420 148" class="dia">
<rect class="mut2f" x="30" y="22" width="34" height="106" rx="3"/>
${[0,1,2,3,4,5,6,7].map(i=>`<line class="mut2" x1="30" y1="${30+i*13}" x2="64" y2="${30+i*13}"/>`).join('')}
${[0,1,2,3].map(i=>`<circle class="acd" cx="${40+((i*11)%22)}" cy="${40+i*24}" r="2.5"/>`).join('')}
<text class="tk mut" x="47" y="142" text-anchor="middle">3.2 km core</text>
<text class="tk oc" x="70" y="34">trapped air</text>
<line class="ax" x1="130" y1="112" x2="392" y2="112"/><line class="ax" x1="130" y1="112" x2="130" y2="24"/>
<text class="tk mut" x="126" y="32" text-anchor="end">CO₂</text><text class="tk mut" x="386" y="128" text-anchor="end">0 kyr</text><text class="tk mut" x="132" y="128">800 kyr ago</text>
<path class="acst2" d="${(()=>{let d='M130 96';for(let i=1;i<=64;i++){const x=130+i*3.9;const y=96-22*Math.pow(Math.sin(i*0.39),2)-2;d+=` L${x.toFixed(1)} ${y.toFixed(1)}`}return d})()}"/>
<path class="plst" d="M382 96 L 382 30" marker-end="url(#ar2)"/><text class="tk pl" x="376" y="36" text-anchor="end">today: 420+</text>
<text class="tk mut" x="130" y="142">never above 300 ppm in eight glacial cycles</text></svg>`,

lind: () => `<svg viewBox="0 0 420 146" class="dia">
${[['cider',40],['vitriol',102],['vinegar',164],['seawater',226],['garlic paste',288],['citrus',358]].map(([l,x],i)=>
`<rect class="${i===5?'acf':'mut2f'}" x="${x-28}" y="40" width="56" height="34" rx="3"/>
<text class="tk" x="${x}" y="88" text-anchor="middle">${l}</text>
<circle class="${i===5?'acd':'mud'}" cx="${x-9}" cy="57" r="4"/><circle class="${i===5?'acd':'mud'}" cx="${x+9}" cy="57" r="4"/>`).join('')}
<text class="tk mut" x="26" y="26">12 scurvy patients, same ship, same diet, six treatments, two men each</text>
<path class="ocst" d="M358 96 L 358 112" marker-end="url(#ar)"/>
<text class="tk oc" x="358" y="126" text-anchor="middle">fit for duty in 6 days</text>
<text class="tk mut" x="26" y="142">no randomisation, no blinding, n = 2 per arm — and a big enough effect to see anyway</text></svg>`,

snow: () => `<svg viewBox="0 0 420 148" class="dia">
<rect class="mut2f" x="30" y="30" width="170" height="86" rx="3"/>
${[0,1,2,3,4].map(i=>`<line class="mut2" x1="30" y1="${44+i*17}" x2="200" y2="${44+i*17}"/>`).join('')}
${[0,1,2,3].map(i=>`<line class="mut2" x1="${64+i*34}" y1="30" x2="${64+i*34}" y2="116"/>`).join('')}
${Array.from({length:26},(_,i)=>`<rect class="pld" x="${38+((i*23)%150)}" y="${36+((i*31)%74)}" width="3" height="6"/>`).join('')}
<circle class="ocd" cx="112" cy="70" r="5"/><text class="tk oc" x="120" y="66">Broad St pump</text>
<text class="tk mut" x="115" y="132" text-anchor="middle">deaths cluster around one pump</text>
<text class="tk ac" x="224" y="44">the grand experiment:</text>
<rect class="acf" x="224" y="56" width="80" height="22" rx="2"/><text class="tk" x="264" y="71" text-anchor="middle">Lambeth: 37</text>
<rect class="ocf" x="224" y="84" width="80" height="22" rx="2"/><text class="tk" x="264" y="99" text-anchor="middle">S&amp;V: 315</text>
<text class="tk mut" x="312" y="71">deaths per</text><text class="tk mut" x="312" y="99">10 000 houses</text>
<text class="tk mut" x="224" y="128">intermingled on the same streets —</text><text class="tk mut" x="224" y="140">assignment made years earlier</text></svg>`,

streptomycin: () => `<svg viewBox="0 0 420 142" class="dia">
<rect class="mut2f" x="24" y="52" width="70" height="30" rx="3"/><text class="tk" x="59" y="71" text-anchor="middle">107 patients</text>
<rect class="ocf" x="110" y="52" width="52" height="30" rx="3"/><text class="tk" x="136" y="71" text-anchor="middle">sealed</text>
<text class="tk oc" x="136" y="96" text-anchor="middle">envelopes</text>
<path class="ocst" d="M94 67 L 108 67" marker-end="url(#ar)"/>
<path class="ocst" d="M164 62 L 190 40"/><path class="ocst" d="M164 74 L 190 96"/>
<rect class="acf" x="192" y="24" width="88" height="30" rx="3"/><text class="tk" x="236" y="43" text-anchor="middle">streptomycin</text>
<rect class="mut2f" x="192" y="84" width="88" height="30" rx="3"/><text class="tk" x="236" y="103" text-anchor="middle">bed rest only</text>
<text class="tk ac" x="292" y="43">7% died</text><text class="tk mut" x="292" y="103">27% died</text>
<path class="plst" d="M292 58 L 360 58"/><text class="tk pl" x="360" y="76" text-anchor="end">radiologists blinded</text>
<text class="tk mut" x="24" y="136">concealment is the assumption that matters: foreknowledge of the next arm breaks the design</text></svg>`,

hubel: () => `<svg viewBox="0 0 420 148" class="dia">
<ellipse class="mut2f" cx="70" cy="70" rx="26" ry="30"/><circle class="acd" cx="88" cy="70" r="5"/>
<text class="tk mut" x="70" y="116" text-anchor="middle">anaesthetised cat</text>
<rect class="mut2f" x="300" y="30" width="86" height="76" rx="3"/>
<line class="acst2" x1="316" y1="42" x2="370" y2="94"/><text class="tk mut" x="343" y="120" text-anchor="middle">bar on a screen</text>
<path class="plst" d="M96 68 L 296 60"/><text class="tk pl" x="180" y="52">1.5 m</text>
<line class="acst2" x1="62" y1="40" x2="62" y2="16"/><circle class="ocd" cx="62" cy="14" r="3"/>
<text class="tk oc" x="70" y="16">tungsten electrode</text>
${[0,1,2,3,4,5,6,7,8].map(i=>`<line class="acst" x1="${118+i*7}" y1="${96+(i>2&&i<6?-10:0)}" x2="${118+i*7}" y2="${106+(i>2&&i<6?10:0)}"/>`).join('')}
<text class="tk ac" x="150" y="130" text-anchor="middle">fires at one orientation, not another</text></svg>`,

gridcell: () => `<svg viewBox="0 0 420 152" class="dia">
<rect class="mut2f" x="30" y="24" width="150" height="110" rx="3"/>
${(()=>{let o='';for(let r=0;r<5;r++)for(let c=0;c<5;c++){const x=44+c*30+(r%2?15:0);const y=36+r*24;if(x>172)continue;
o+=`<circle class="ocf" cx="${x}" cy="${y}" r="7"/>`}return o})()}
<path class="plst" d="M40 128 C 80 60, 120 118, 166 40"/><text class="tk pl" x="36" y="144">rat path</text>
<text class="tk mut" x="105" y="20" text-anchor="middle">firing fields tile the arena</text>
<line class="acst2" x1="230" y1="84" x2="250" y2="50"/><line class="acst2" x1="250" y1="50" x2="290" y2="50"/><line class="acst2" x1="290" y1="50" x2="310" y2="84"/>
<line class="acst2" x1="310" y1="84" x2="290" y2="118"/><line class="acst2" x1="290" y1="118" x2="250" y2="118"/><line class="acst2" x1="250" y1="118" x2="230" y2="84"/>
<circle class="ocd" cx="270" cy="84" r="4"/>
${[[250,50],[290,50],[310,84],[290,118],[250,118],[230,84]].map(([x,y])=>`<circle class="ocd" cx="${x}" cy="${y}" r="4"/>`).join('')}
<text class="tk oc" x="270" y="140" text-anchor="middle">autocorrelogram: six peaks at 60°</text>
<text class="tk mut" x="326" y="84">spacing grows</text><text class="tk mut" x="326" y="98">dorsal → ventral</text></svg>`,

microstim: () => `<svg viewBox="0 0 420 144" class="dia">
<circle class="mut2f" cx="70" cy="60" r="30"/>
${Array.from({length:16},(_,i)=>{const a=i*22.5*Math.PI/180;const c=i%3===0;
return `<path class="${c?'acst':'mut2'}" d="M${(70+16*Math.cos(a)).toFixed(1)} ${(60+16*Math.sin(a)).toFixed(1)} l ${c?8:4} 0"/>`}).join('')}
<text class="tk mut" x="70" y="108" text-anchor="middle">random dots, variable coherence</text>
<rect class="acf" x="150" y="44" width="70" height="32" rx="3"/><text class="tk" x="185" y="64" text-anchor="middle">area MT</text>
<text class="tk ac" x="185" y="94" text-anchor="middle">column preference measured first</text>
<path class="ocst" d="M185 34 L 185 42" marker-end="url(#ar)"/><text class="tk oc" x="192" y="30">10 μA</text>
<line class="ax" x1="250" y1="112" x2="392" y2="112"/><line class="ax" x1="250" y1="112" x2="250" y2="30"/>
<path class="mut2" d="M254 108 C 290 100, 320 48, 388 36"/>
<path class="acst2" d="M254 96 C 286 84, 316 40, 388 32"/>
<text class="tk ac" x="300" y="28">shifted toward the stimulated direction</text>
<text class="tk mut" x="250" y="128">≈ adding 7–20% coherence</text></svg>`,

rotation: () => `<svg viewBox="0 0 420 148" class="dia">
${[[60,0],[160,60],[270,140]].map(([x,a],i)=>
`<g transform="rotate(${a} ${x} 44)"><rect class="acf" x="${x-24}" y="36" width="16" height="16"/><rect class="acf" x="${x-8}" y="36" width="16" height="16"/>
<rect class="acf" x="${x+8}" y="36" width="16" height="16"/><rect class="acf" x="${x+8}" y="20" width="16" height="16"/></g>
<text class="tk mut" x="${x}" y="76" text-anchor="middle">${a}°</text>`).join('')}
<line class="ax" x1="60" y1="130" x2="380" y2="130"/><line class="ax" x1="60" y1="130" x2="60" y2="88"/>
<text class="tk mut" x="44" y="96">RT</text><text class="tk mut" x="374" y="144" text-anchor="end">angular difference</text>
<path class="acst2" d="M66 126 L 372 94"/>
${[100,170,240,310].map(x=>`<circle class="ocd" cx="${x}" cy="${(126-(x-66)*0.1046).toFixed(0)}" r="3"/>`).join('')}
<text class="tk oc" x="150" y="104">slope ≈ 60°/s, r &gt; 0.99</text></svg>`,

cuecomb: () => `<svg viewBox="0 0 420 148" class="dia">
<rect class="mut2f" x="30" y="30" width="80" height="50" rx="3"/><text class="tk" x="70" y="60" text-anchor="middle">stereoscope</text>
<text class="tk ac" x="70" y="96" text-anchor="middle">σ_V measured alone</text>
<rect class="mut2f" x="30" y="94" width="80" height="0" rx="3"/>
<rect class="mut2f" x="30" y="104" width="80" height="34" rx="3"/><text class="tk" x="70" y="126" text-anchor="middle">force feedback</text>
<text class="tk oc" x="126" y="124">σ_H measured alone</text>
<path class="ocst" d="M114 55 C 150 55, 160 66, 180 70" marker-end="url(#ar)"/>
<path class="ocst" d="M114 120 C 150 120, 160 82, 180 76" marker-end="url(#ar)"/>
<rect class="acf" x="184" y="56" width="86" height="34" rx="3"/><text class="tk" x="227" y="77" text-anchor="middle">percept</text>
<text class="tk ac" x="286" y="62">ŝ = w_V s_V + w_H s_H</text>
<text class="tk ac" x="286" y="78">w ∝ 1/σ²</text>
<text class="tk mut" x="286" y="96">no fitted parameter in</text><text class="tk mut" x="286" y="110">the combination step</text>
<text class="tk mut" x="26" y="26">reliabilities are measured first, then the combination is predicted</text></svg>`,

blocking: () => `<svg viewBox="0 0 420 150" class="dia">
<text class="tk mut" x="26" y="24">phase 1</text>
<rect class="acf" x="70" y="16" width="34" height="18" rx="2"/><text class="tk" x="87" y="29" text-anchor="middle">light</text>
<path class="ocst" d="M108 25 L 132 25" marker-end="url(#ar)"/><text class="tk oc" x="146" y="29">shock</text>
<text class="tk mut" x="26" y="58">phase 2</text>
<rect class="acf" x="70" y="46" width="34" height="18" rx="2"/><text class="tk" x="87" y="59" text-anchor="middle">light</text>
<rect class="mut2f" x="70" y="68" width="34" height="18" rx="2"/><text class="tk" x="87" y="81" text-anchor="middle">tone</text>
<path class="ocst" d="M108 58 L 132 58" marker-end="url(#ar)"/><text class="tk oc" x="146" y="62">shock</text>
<text class="tk pl" x="200" y="62">tone learns nothing — it was already predicted</text>
<line class="ax" x1="240" y1="134" x2="392" y2="134"/>
<path class="acst2" d="M244 108 l 10 -26 l 6 26 l 40 0"/><text class="tk ac" x="268" y="98">unpredicted reward</text>
<path class="acst2" d="M300 108 l 8 -26 l 6 26 l 26 0 l 6 20 l 6 -20 l 30 0"/>
<text class="tk ac" x="330" y="98">cue fires</text><text class="tk pl" x="368" y="148" text-anchor="end">omission: a pause</text>
<text class="tk mut" x="26" y="112">Kamin 1968 → Rescorla–Wagner 1972 → Schultz 1997</text></svg>`,

ebbinghaus: () => `<svg viewBox="0 0 420 142" class="dia">
<line class="ax" x1="66" y1="112" x2="384" y2="112"/><line class="ax" x1="66" y1="112" x2="66" y2="22"/>
<text class="tk mut" x="40" y="30">% saved</text><text class="tk mut" x="378" y="128" text-anchor="end">time since learning</text>
<path class="acst2" d="M66 26 C 96 66, 130 84, 190 94 C 250 102, 320 106, 382 108"/>
${[['20 min',72,34],['1 h',96,50],['1 day',150,82],['1 month',300,104]].map(([l,x,y])=>
`<circle class="ocd" cx="${x}" cy="${y}" r="3"/><text class="tk oc" x="${+x+8}" y="${+y-4}">${l}</text>`).join('')}
<text class="tk mut" x="66" y="138">2 300 nonsense syllables, one subject, metronome-paced — and it still replicates</text></svg>`,

replication: () => `<svg viewBox="0 0 420 146" class="dia">
<text class="tk mut" x="26" y="24">100 studies from three journals, one year</text>
${Array.from({length:100},(_,i)=>`<rect class="${i<36?'acf':'mut2f'}" x="${26+(i%25)*14}" y="${38+Math.floor(i/25)*16}" width="10" height="11" rx="1.5"/>`).join('')}
<text class="tk ac" x="26" y="122">36 replicated</text><text class="tk mut" x="150" y="122">64 did not</text>
<path class="plst" d="M250 46 L 250 100"/><text class="tk pl" x="258" y="58">original mean r = 0.40</text>
<text class="tk pl" x="258" y="74">replication mean r = 0.20</text>
<text class="tk mut" x="258" y="98">cognitive ~50%, social ~25%</text>
<text class="tk mut" x="26" y="140">powered at 80% against the published effect — so low power is not the explanation</text></svg>`,

garden: () => `<svg viewBox="0 0 420 150" class="dia">
<line class="ax" x1="60" y1="118" x2="392" y2="118"/><line class="ax" x1="60" y1="118" x2="60" y2="24"/>
<text class="tk mut" x="36" y="32">false +</text>
${[['none',0.05,90],['+1',0.09,150],['+2',0.21,212],['+3',0.41,274],['all 4',0.61,340]].map(([l,p,x])=>
`<rect class="${p>0.3?'ocf':'acf'}" x="${+x-20}" y="${(118-p*140).toFixed(0)}" width="40" height="${(p*140).toFixed(0)}" rx="2"/>
<text class="tk" x="${x}" y="134" text-anchor="middle">${l}</text>
<text class="tk oc" x="${x}" y="${(112-p*140).toFixed(0)}" text-anchor="middle">${Math.round(p*100)}%</text>`).join('')}
<line class="plst" x1="60" y1="111" x2="392" y2="111"/><text class="tk pl" x="392" y="108" text-anchor="end">nominal 5%</text>
<text class="tk mut" x="26" y="20">two measures · add subjects · a covariate · drop a condition</text>
<text class="tk mut" x="26" y="146">each defensible alone; together, a literature of false positives with nobody breaking a rule</text></svg>`,

crain: () => `<svg viewBox="0 0 420 144" class="dia">
<text class="tk mut" x="26" y="24">prompt: "Ask Jabba if the boy who is watching Mickey is happy"</text>
<rect class="plst nofill" x="26" y="38" width="368" height="30" rx="3"/>
<text class="tk pl" x="36" y="58">linear rule → "Is the boy who watching Mickey is happy?"</text>
<text class="tk pl" x="360" y="58" text-anchor="end">✕ never produced</text>
<rect class="acst nofill" x="26" y="76" width="368" height="30" rx="3"/>
<text class="tk ac" x="36" y="96">structural rule → "Is the boy who is watching Mickey happy?"</text>
<text class="tk ac" x="360" y="96" text-anchor="end">✓ produced</text>
<text class="tk mut" x="26" y="126">3–5 year olds. Other errors occur; this one does not.</text>
<text class="tk mut" x="26" y="140">the contested premise is how rare the disambiguating input actually is</text></svg>`,

labov: () => `<svg viewBox="0 0 420 148" class="dia">
${[['Saks',70,0.62],['Macy’s',190,0.51],['S. Klein',310,0.21]].map(([l,x,v])=>
`<rect class="mut2f" x="${+x-44}" y="30" width="88" height="${(v*90).toFixed(0)}" rx="2" transform="translate(0 ${(90-v*90).toFixed(0)})"/>
<rect class="acf" x="${+x-44}" y="${(120-v*90).toFixed(0)}" width="88" height="${(v*90).toFixed(0)}" rx="2"/>
<text class="tk" x="${x}" y="136" text-anchor="middle">${l}</text>
<text class="tk ac" x="${x}" y="${(114-v*90).toFixed(0)}" text-anchor="middle">${Math.round(v*100)}%</text>`).join('')}
<text class="tk mut" x="26" y="22">/r/ in "fourth floor" — asked for directions, then "Excuse me?"</text>
<path class="plst" d="M190 32 L 190 22"/><text class="tk pl" x="198" y="20">Macy’s shifts most on repetition</text>
<text class="tk mut" x="26" y="146">six and a half hours of fieldwork; variation is socially structured, not noise</text></svg>`,

grimm: () => `<svg viewBox="0 0 420 150" class="dia">
${[['Sanskrit','pitár',36],['Greek','patḗr',36],['Latin','pater',36],['Gothic','fadar',36]].map(([l,w],i)=>
`<text class="tk mut" x="${40+i*92}" y="30">${l}</text><text class="lb" x="${40+i*92}" y="48">${w}</text>`).join('')}
${[0,1,2,3].map(i=>`<path class="acst" d="M${62+i*92} 56 C ${62+i*92} 76, 190 76, 200 88"/>`).join('')}
<rect class="ocf" x="150" y="90" width="110" height="26" rx="3"/><text class="lb" x="205" y="108" text-anchor="middle">*ph₂tḗr (PIE)</text>
<text class="tk oc" x="276" y="100">reconstructed, unattested</text>
<text class="tk ac" x="26" y="136">*p → f, *t → θ, *k → h (Grimm); the residue explained by accent position (Verner)</text>
<text class="tk mut" x="26" y="148">Saussure posited laryngeals in 1879; Hittite supplied one in the 1920s</text></svg>`,

allais: () => `<svg viewBox="0 0 420 152" class="dia">
<text class="tk mut" x="26" y="22">Problem 1</text>
<rect class="acf" x="26" y="30" width="150" height="30" rx="3"/><text class="tk" x="101" y="49" text-anchor="middle">A: 100M certain</text>
<rect class="mut2f" x="186" y="30" width="200" height="30" rx="3"/><text class="tk" x="286" y="49" text-anchor="middle">B: .89×100M  .10×500M  .01×0</text>
<text class="tk ac" x="392" y="49" text-anchor="end"></text>
<text class="tk mut" x="26" y="82">Problem 2</text>
<rect class="mut2f" x="26" y="90" width="150" height="30" rx="3"/><text class="tk" x="101" y="109" text-anchor="middle">C: .11×100M</text>
<rect class="acf" x="186" y="90" width="200" height="30" rx="3"/><text class="tk" x="286" y="109" text-anchor="middle">D: .10×500M</text>
<path class="plst" d="M101 62 L 101 88"/><path class="plst" d="M286 62 L 286 88"/>
<text class="tk pl" x="196" y="76" text-anchor="middle">subtract a common .89 × 100M from both</text>
<text class="tk ac" x="26" y="142">A ≻ B and D ≻ C contradict each other for every utility function whatever</text></svg>`,

cardkrueger: () => `<svg viewBox="0 0 420 146" class="dia">
<line class="ax" x1="80" y1="112" x2="380" y2="112"/><line class="ax" x1="80" y1="112" x2="80" y2="26"/>
<text class="tk mut" x="52" y="34">FTE staff</text>
<line class="plst" x1="230" y1="30" x2="230" y2="112"/><text class="tk pl" x="230" y="128" text-anchor="middle">wage rises in NJ</text>
<path class="acst2" d="M100 70 L 230 70 L 350 64"/><text class="tk ac" x="356" y="62">New Jersey</text>
<path class="ocst2" d="M100 52 L 230 52 L 350 58"/><text class="tk oc" x="356" y="58">Pennsylvania</text>
<text class="tk mut" x="100" y="40">410 fast-food restaurants, before and after</text>
<text class="tk mut" x="26" y="140">the whole design rests on parallel trends — untestable in the period that matters</text></svg>`,

ultimatum: () => `<svg viewBox="0 0 420 150" class="dia">
<circle class="acf" cx="60" cy="50" r="18"/><text class="tk" x="60" y="82" text-anchor="middle">proposer</text>
<path class="ocst" d="M82 50 L 140 50" marker-end="url(#ar)"/><text class="tk oc" x="111" y="42" text-anchor="middle">offer</text>
<circle class="acf" cx="164" cy="50" r="18"/><text class="tk" x="164" y="82" text-anchor="middle">responder</text>
<path class="plst" d="M186 42 L 236 28"/><text class="tk pl" x="242" y="28">accept → split stands</text>
<path class="plst" d="M186 58 L 236 74"/><text class="tk pl" x="242" y="78">reject → both get nothing</text>
<text class="tk mut" x="26" y="110">game-theoretic prediction: offer the minimum, accept anything</text>
<line class="ax" x1="26" y1="140" x2="392" y2="140"/>
${[['Machiguenga',26,'26%'],['US students',150,'44%'],['Lamalera',300,'58%']].map(([l,x,v])=>
`<line class="acst2" x1="${x}" y1="136" x2="${x}" y2="144"/><text class="tk ac" x="${x}" y="132">${v}</text><text class="tk mut" x="${x}" y="152">${l}</text>`).join('')}
</svg>`,

weakties: () => `<svg viewBox="0 0 420 150" class="dia">
${(()=>{const A=[[60,50],[96,32],[110,72],[70,92]],B=[[300,44],[336,70],[300,100],[266,66]];let o='';
A.forEach((p,i)=>A.forEach((q,j)=>{if(i<j)o+=`<line class="acst2" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`}));
B.forEach((p,i)=>B.forEach((q,j)=>{if(i<j)o+=`<line class="acst2" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`}));
o+=`<line class="plst" x1="110" y1="72" x2="266" y2="66"/>`;
A.concat(B).forEach(p=>o+=`<circle class="acd" cx="${p[0]}" cy="${p[1]}" r="6"/>`);return o})()}
<text class="tk ac" x="88" y="122" text-anchor="middle">strong ties, closed triangles</text>
<text class="tk ac" x="302" y="122" text-anchor="middle">another cluster</text>
<text class="tk pl" x="188" y="56" text-anchor="middle">the bridge is weak by necessity</text>
<text class="tk mut" x="26" y="142">of those who found a job through a contact, 28% saw them rarely and only 17% often</text></svg>`,

schellingexp: () => `<svg viewBox="0 0 420 148" class="dia">
${(()=>{let o='';for(let i=0;i<8;i++)for(let j=0;j<6;j++){const v=(i*5+j*7)%3;if(v===2)continue;
o+=`<circle class="${v?'acd':'ocd'}" cx="${40+i*17}" cy="${34+j*15}" r="6"/>`}return o})()}
<text class="tk" x="100" y="138" text-anchor="middle">pennies and dimes on a chessboard</text>
<path class="plst" d="M204 76 L 238 76" marker-end="url(#ar2)"/><text class="tk pl" x="221" y="68" text-anchor="middle">move if unhappy</text>
${(()=>{let o='';for(let i=0;i<8;i++)for(let j=0;j<6;j++){if((i*3+j*5)%8===0)continue;
o+=`<circle class="${i<4?'ocd':'acd'}" cx="${258+i*17}" cy="${34+j*15}" r="6"/>`}return o})()}
<text class="tk" x="318" y="138" text-anchor="middle">after a few rounds</text>
<text class="tk oc" x="26" y="22">τ = 1/3: content in a two-thirds minority</text></svg>`,

mto: () => `<svg viewBox="0 0 420 150" class="dia">
<rect class="mut2f" x="24" y="56" width="76" height="32" rx="3"/><text class="tk" x="62" y="76" text-anchor="middle">4 604 families</text>
<path class="ocst" d="M100 72 L 124 72" marker-end="url(#ar)"/><text class="tk oc" x="112" y="64" text-anchor="middle">randomise</text>
${[['low-poverty voucher',26],['unrestricted voucher',66],['no voucher',106]].map(([l,y])=>
`<rect class="acf" x="130" y="${y}" width="120" height="26" rx="3"/><text class="tk" x="190" y="${+y+17}" text-anchor="middle">${l}</text>`).join('')}
<path class="plst" d="M254 39 L 286 39"/><path class="plst" d="M254 79 L 286 79"/><path class="plst" d="M254 119 L 286 119"/>
<text class="tk mut" x="292" y="32">adults: no earnings effect</text>
<text class="tk ac" x="292" y="60">children who moved before 13:</text>
<text class="tk ac" x="292" y="74">earnings +31%, college +16%</text>
<text class="tk pl" x="292" y="100">teenagers: slightly negative</text>
<text class="tk mut" x="24" y="144">the same randomised experiment supported opposite headlines, twenty years apart</text></svg>`
};
