/* Schematic figures. All colours come from CSS classes so both themes work. */
const FIG = {

planck: () => `<svg viewBox="0 0 420 172" class="dia" role="img" aria-label="Energy scale ladder from atomic to Planck">
<line class="ax" x1="30" y1="130" x2="400" y2="130"/>
${[['10⁻⁹',40],['10⁻³',110],['10³',180],['10⁹',250],['10¹⁵',320],['10¹⁹',392]].map(([l,x])=>
`<line class="ax" x1="${x}" y1="126" x2="${x}" y2="134"/><text class="tk" x="${x}" y="148" text-anchor="middle">${l}</text>`).join('')}
<text class="tk mut" x="216" y="163" text-anchor="middle">GeV</text>
<rect class="acf" x="40" y="96" width="70" height="20" rx="3"/><text class="lb" x="75" y="110" text-anchor="middle">atoms</text>
<rect class="acf" x="150" y="70" width="110" height="20" rx="3"/><text class="lb" x="205" y="84" text-anchor="middle">Standard Model</text>
<rect class="ocf" x="300" y="44" width="92" height="20" rx="3"/><text class="lb" x="346" y="58" text-anchor="middle">GUT?</text>
<line class="plst" x1="392" y1="30" x2="392" y2="130"/>
<text class="lb pl" x="386" y="24" text-anchor="end">Planck scale — EFT expansion fails</text>
<path class="ocst" d="M392 120 L 206 120" marker-end="url(#ar)"/>
<text class="tk mut" x="300" y="112" text-anchor="middle">tested: 16 decades below M_P</text>
</svg>`,

lightcone: () => `<svg viewBox="0 0 420 185" class="dia" role="img" aria-label="Light cone structure">
<line class="ax" x1="210" y1="14" x2="210" y2="176"/><line class="ax" x1="40" y1="95" x2="392" y2="95"/>
<text class="tk mut" x="216" y="22">t</text><text class="tk mut" x="394" y="110" text-anchor="end">x</text>
<path class="acf2" d="M210 95 L 130 15 L 290 15 Z"/><path class="acf2" d="M210 95 L 130 175 L 290 175 Z"/>
<line class="acst" x1="130" y1="15" x2="290" y2="175"/><line class="acst" x1="290" y1="15" x2="130" y2="175"/>
<text class="lb" x="210" y="40" text-anchor="middle">future</text>
<text class="lb" x="210" y="160" text-anchor="middle">past</text>
<text class="lb mut" x="72" y="90" text-anchor="middle">elsewhere</text>
<text class="lb mut" x="350" y="90" text-anchor="middle">elsewhere</text>
<circle class="ocd" cx="210" cy="95" r="3.5"/>
<path class="ocst" d="M210 95 C 196 70 200 46 186 26"/>
<text class="tk oc" x="180" y="22" text-anchor="end">worldline</text>
</svg>`,

rgflow: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Renormalization group flow with fixed points">
<line class="ax" x1="30" y1="100" x2="404" y2="100"/>
<line class="ax" x1="30" y1="100" x2="30" y2="20"/><text class="tk mut" x="36" y="28">β(g)</text>
<path class="acst2" d="M30 100 C 76 150, 140 150, 196 100 C 244 52, 320 56, 394 124"/>
<circle class="ocd" cx="30" cy="100" r="4.5"/><text class="lb oc" x="22" y="118">Gaussian</text>
<circle class="ocd" cx="196" cy="100" r="4.5"/><text class="lb oc" x="196" y="118" text-anchor="middle">Wilson–Fisher</text>
<circle class="ocd" cx="364" cy="100" r="4.5"/><text class="lb oc" x="404" y="140" text-anchor="end">UV fixed pt?</text>
${[[74,1],[118,1],[160,1],[248,-1],[292,-1],[332,-1]].map(([x,d])=>
`<path class="plst" d="M${x} 88 L ${x+d*18} 88" marker-end="url(#ar2)"/>`).join('')}
<text class="tk pl" x="118" y="78" text-anchor="middle">flow toward the infrared</text>
</svg>`,

higgs: () => `<svg viewBox="0 0 420 165" class="dia" role="img" aria-label="Higgs potential">
<line class="ax" x1="30" y1="140" x2="400" y2="140"/><text class="tk mut" x="394" y="156" text-anchor="end">|Φ|</text>
<line class="ax" x1="215" y1="140" x2="215" y2="20"/><text class="tk mut" x="222" y="28">V(Φ)</text>
<path class="acst2" d="M60 34 C 110 34, 130 128, 160 128 C 190 128, 200 66, 215 66 C 230 66, 240 128, 270 128 C 300 128, 320 34, 370 34"/>
<circle class="ocd" cx="160" cy="128" r="4"/><circle class="ocd" cx="270" cy="128" r="4"/>
<circle class="mud" cx="215" cy="66" r="4"/>
<text class="lb mut" x="215" y="58" text-anchor="middle">symmetric, unstable</text>
<text class="lb oc" x="272" y="152" text-anchor="middle">⟨Φ⟩ = v/√2 = 174 GeV</text>
</svg>`,

wkb: () => `<svg viewBox="0 0 420 161" class="dia" role="img" aria-label="Singular classical limit">
<text class="lb" x="30" y="24">ħ/S = 0.3</text><text class="lb" x="30" y="94">ħ/S = 0.02</text>
<path class="acst" d="${(()=>{let d='M60 52';for(let x=0;x<=320;x+=2){const y=52-22*Math.cos(x/9)*Math.exp(-Math.pow((x-160)/120,2));d+=` L${60+x} ${y.toFixed(1)}`}return d})()}"/>
<path class="acst" d="${(()=>{let d='M60 122';for(let x=0;x<=320;x+=1){const y=122-22*Math.cos(x/1.6)*Math.exp(-Math.pow((x-160)/120,2));d+=` L${60+x} ${y.toFixed(1)}`}return d})()}"/>
<path class="ocst" d="M60 148 C 140 148, 180 148, 220 148" marker-end="url(#ar)"/>
<text class="tk oc" x="228" y="152">classical trajectory</text>
</svg>`,

eikonal: () => `<svg viewBox="0 0 420 161" class="dia" role="img" aria-label="Rays focusing to a caustic">
${Array.from({length:11},(_,i)=>{const y=24+i*13;const b=(y-89)/65;const fx=300, fy=89+b*10;
return `<path class="acst" d="M40 ${y} C 160 ${y}, 230 ${(y+fy)/2}, ${fx} ${fy}"/>`}).join('')}
<line class="plst" x1="300" y1="26" x2="300" y2="152"/>
<text class="lb pl" x="308" y="34">caustic</text>
<text class="lb pl" x="308" y="48">I_ray → ∞</text>
</svg>`,

phase: () => `<svg viewBox="0 0 420 173" class="dia" role="img" aria-label="Phase space flow preserving volume">
<line class="ax" x1="40" y1="150" x2="390" y2="150"/><line class="ax" x1="40" y1="150" x2="40" y2="20"/>
<text class="tk mut" x="394" y="164" text-anchor="end">q</text><text class="tk mut" x="20" y="28">p</text>
${[24,40,56].map(r=>`<ellipse class="acst" cx="180" cy="84" rx="${r*1.45}" ry="${r}"/>`).join('')}
<rect class="ocf" x="150" y="28" width="34" height="22" rx="2"/>
<path class="ocst" d="M196 40 C 250 34, 280 60, 292 88" marker-end="url(#ar)"/>
<path class="ocf2" d="M286 96 C 300 84, 320 96, 330 112 C 316 122, 296 116, 286 96 Z"/>
<text class="tk oc" x="336" y="118">same area</text>
</svg>`,

coarse: () => `<svg viewBox="0 0 420 114" class="dia" role="img" aria-label="Kadanoff block spin coarse graining">
${(()=>{let o='';for(let i=0;i<8;i++)for(let j=0;j<6;j++){const up=(i*7+j*5)%3!==0;
o+=`<path class="${up?'acst':'mut2'}" d="M${34+i*13} ${30+j*13} l0 ${up?-7:7}" />`+
`<circle class="${up?'acd':'mud'}" cx="${34+i*13}" cy="${30+j*13}" r="1.8"/>`}return o})()}
<rect class="ocst nofill" x="27" y="17" width="26" height="26"/><rect class="ocst nofill" x="53" y="17" width="26" height="26"/>
<path class="ocst" d="M150 62 L 210 62" marker-end="url(#ar)"/>
<text class="tk oc" x="180" y="54" text-anchor="middle">block, rescale</text>
${(()=>{let o='';for(let i=0;i<4;i++)for(let j=0;j<3;j++){const up=(i+j)%2===0;
o+=`<path class="${up?'acst':'mut2'}" d="M${240+i*26} ${36+j*26} l0 ${up?-11:11}"/><circle class="${up?'acd':'mud'}" cx="${240+i*26}" cy="${36+j*26}" r="2.4"/>`}return o})()}
</svg>`,

carnot: () => `<svg viewBox="0 0 420 171" class="dia" role="img" aria-label="Carnot cycle on a temperature-entropy diagram">
<line class="ax" x1="60" y1="146" x2="380" y2="146"/><line class="ax" x1="60" y1="146" x2="60" y2="22"/>
<text class="tk mut" x="394" y="162" text-anchor="end">S</text><text class="tk mut" x="40" y="30">T</text>
<rect class="acf2" x="120" y="44" width="170" height="74"/>
<rect class="acst nofill" x="120" y="44" width="170" height="74"/>
<text class="lb" x="205" y="38" text-anchor="middle">T_H — isothermal, Q_H in</text>
<text class="lb" x="205" y="132" text-anchor="middle">T_C — isothermal, Q_C out</text>
<text class="lb mut" x="112" y="84" text-anchor="end">adiabat</text>
<text class="lb mut" x="298" y="84">adiabat</text>
<text class="tk oc" x="205" y="86" text-anchor="middle">W = (T_H − T_C)ΔS</text>
</svg>`,

band: () => `<svg viewBox="0 0 420 155" class="dia" role="img" aria-label="Band structure in a metal, semiconductor and insulator">
<line class="ax" x1="46" y1="134" x2="46" y2="10"/><text class="tk mut" x="28" y="18">E</text>
${['metal','semiconductor','insulator'].map((lab,i)=>{const x=80+i*112, w=74, gap=[0,22,54][i];
const ct=96-gap-30, ef=[81,85,69][i];
return `<rect class="acf" x="${x}" y="${ct}" width="${w}" height="30" rx="2"/>
<rect class="${i===0?'acf':'mut2f'}" x="${x}" y="96" width="${w}" height="30" rx="2"/>
${gap?`<text class="tk oc" x="${x+w+5}" y="${96-gap/2+4}">E_g</text>`:''}
<line class="plst" x1="${x-8}" y1="${ef}" x2="${x+w+2}" y2="${ef}"/>
${i===0?`<text class="lb pl" x="${x-12}" y="${ef+4}" text-anchor="end">E_F</text>`:''}
<text class="lb" x="${x+w/2}" y="146" text-anchor="middle">${lab}</text>`}).join('')}
</svg>`,

cascade: () => `<svg viewBox="0 0 420 165" class="dia" role="img" aria-label="Turbulent energy cascade">
<line class="ax" x1="46" y1="140" x2="392" y2="140"/><text class="tk mut" x="394" y="156" text-anchor="end">log k</text>
<line class="ax" x1="46" y1="140" x2="46" y2="22"/><text class="tk mut" x="26" y="30">log E</text>
<path class="acst2" d="M70 40 L 118 44 L 300 118 C 330 132, 344 150, 348 160"/>
<text class="tk oc" x="196" y="70" transform="rotate(20 196 70)">E(k) ∝ ε^(2/3) k^(−5/3)</text>
<line class="plst" x1="118" y1="30" x2="118" y2="140"/><line class="plst" x1="300" y1="30" x2="300" y2="140"/>
<text class="lb mut" x="82" y="28">injection</text><text class="lb pl" x="209" y="28" text-anchor="middle">inertial range</text>
<text class="lb mut" x="330" y="28" text-anchor="middle">dissipation</text>
${[150,190,230,270].map(x=>`<path class="ocst" d="M${x} 132 l 14 0" marker-end="url(#ar2)"/>`).join('')}
</svg>`,

shells: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="Nuclear shell model levels with spin orbit splitting">
<text class="lb mut" x="86" y="20" text-anchor="middle">oscillator</text>
<text class="lb mut" x="290" y="20" text-anchor="middle">+ spin–orbit ℓ·s</text>
${[['1s',132,'2'],['1p',108,'8'],['1d 2s',84,'20'],['1f 2p',58,'28 · 50'],['1g…',32,'82 · 126']].map(([l,y,m])=>
`<line class="acst" x1="50" y1="${y}" x2="124" y2="${y}"/><text class="tk mut" x="44" y="${y+4}" text-anchor="end">${l}</text>
<path class="mut2" d="M124 ${y} C 170 ${y}, 190 ${y-7}, 234 ${y-9}"/><line class="acst" x1="234" y1="${y-9}" x2="300" y2="${y-9}"/>
<path class="mut2" d="M124 ${y} C 170 ${y}, 190 ${y+6}, 234 ${y+8}"/><line class="acst" x1="234" y1="${y+8}" x2="300" y2="${y+8}"/>
<text class="tk oc" x="312" y="${y+2}">${m}</text>`).join('')}
</svg>`,

pes: () => `<svg viewBox="0 0 420 173" class="dia" role="img" aria-label="Potential energy surfaces and a conical intersection">
<line class="ax" x1="40" y1="150" x2="392" y2="150"/><text class="tk mut" x="394" y="164" text-anchor="end">nuclear coordinate R</text>
<line class="ax" x1="40" y1="150" x2="40" y2="20"/><text class="tk mut" x="20" y="28">E</text>
<path class="acst2" d="M60 74 C 110 132, 150 130, 196 96 C 240 64, 280 128, 340 126"/>
<path class="ocst2" d="M60 40 C 120 44, 170 66, 196 96 C 226 130, 290 44, 350 38"/>
<circle class="pld" cx="196" cy="96" r="4"/>
<text class="lb pl" x="204" y="90">conical intersection</text>
<circle class="acd" cx="128" cy="126" r="3"/><text class="lb" x="128" y="144" text-anchor="middle">molecule</text>
<circle class="acd" cx="243" cy="110" r="3"/><text class="lb mut" x="256" y="120">TS</text>
</svg>`,

mo: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="Molecular orbital diagram">
<line class="acst" x1="60" y1="84" x2="112" y2="84"/><text class="lb mut" x="86" y="100" text-anchor="middle">atom A</text>
<line class="acst" x1="308" y1="84" x2="360" y2="84"/><text class="lb mut" x="334" y="100" text-anchor="middle">atom B</text>
<line class="ocst" x1="174" y1="40" x2="246" y2="40"/><text class="lb oc" x="254" y="44">σ* antibonding</text>
<line class="ocst" x1="174" y1="128" x2="246" y2="128"/><text class="lb oc" x="254" y="132">σ bonding</text>
${[[112,84,174,40],[112,84,174,128],[308,84,246,40],[308,84,246,128]].map(([a,b,c,d])=>`<line class="mut2" x1="${a}" y1="${b}" x2="${c}" y2="${d}"/>`).join('')}
<path class="acst" d="M204 122 l0 -10 M204 122 l-4 5 M204 122 l4 5"/><path class="acst" d="M216 134 l0 10 M216 134 l-4 -5 M216 134 l4 -5"/>
</svg>`,

tst: () => `<svg viewBox="0 0 420 173" class="dia" role="img" aria-label="Reaction coordinate diagram with transition state">
<line class="ax" x1="40" y1="150" x2="392" y2="150"/><text class="tk mut" x="394" y="164" text-anchor="end">reaction coordinate</text>
<line class="ax" x1="40" y1="150" x2="40" y2="18"/><text class="tk mut" x="20" y="26">G</text>
<path class="acst2" d="M60 104 C 120 104, 140 34, 196 34 C 250 34, 268 122, 340 122"/>
<path class="plst2" d="M60 104 C 120 104, 148 72, 196 72 C 246 72, 268 122, 340 122"/>
<circle class="ocd" cx="196" cy="34" r="4"/><text class="lb oc" x="196" y="26" text-anchor="middle">‡ transition state</text>
<text class="lb pl" x="200" y="66" text-anchor="middle">catalysed</text>
<path class="ocst" d="M74 100 L 74 38" marker-end="url(#ar2)"/><text class="tk oc" x="82" y="70">ΔG‡</text>
<path class="mut2" d="M354 104 L 354 122"/><text class="tk mut" x="360" y="116">ΔG°</text>
</svg>`,

atp: () => `<svg viewBox="0 0 420 159" class="dia" role="img" aria-label="Chemiosmotic coupling across a membrane">
<rect class="mut2f" x="40" y="60" width="350" height="16"/><rect class="mut2f" x="40" y="104" width="350" height="16"/>
<text class="lb mut" x="46" y="40">intermembrane space — high H⁺</text>
<text class="lb mut" x="46" y="138">matrix — low H⁺</text>
${[196,222,248,274,340,366].map(x=>`<text class="tk oc" x="${x}" y="52">H⁺</text>`).join('')}
<rect class="acf" x="120" y="60" width="44" height="60" rx="4"/><text class="lb" x="142" y="96" text-anchor="middle">e⁻</text>
<path class="ocst" d="M142 116 L 142 56" marker-end="url(#ar2)"/>
<rect class="acf" x="286" y="52" width="40" height="76" rx="6"/>
<circle class="acf" cx="306" cy="44" r="14"/>
<path class="ocst" d="M306 56 L 306 122" marker-end="url(#ar2)"/>
<text class="lb" x="306" y="150" text-anchor="middle">ATP synthase</text>
<text class="tk oc" x="396" y="30" text-anchor="end">ADP + Pᵢ → ATP</text>
</svg>`,

dogma: () => `<svg viewBox="0 0 420 181" class="dia" role="img" aria-label="Central dogma information flow">
${[['DNA',60],['RNA',186],['protein',312]].map(([l,x])=>
`<rect class="acf" x="${x}" y="52" width="86" height="34" rx="4"/><text class="lb" x="${x+43}" y="74" text-anchor="middle">${l}</text>`).join('')}
<path class="ocst" d="M146 69 L 182 69" marker-end="url(#ar)"/><text class="tk oc" x="164" y="60" text-anchor="middle">transcription</text>
<path class="ocst" d="M272 69 L 308 69" marker-end="url(#ar)"/><text class="tk oc" x="290" y="60" text-anchor="middle">translation</text>
<path class="ocst" d="M60 46 C 76 22, 128 22, 144 46" marker-end="url(#ar)"/><text class="tk oc" x="102" y="18" text-anchor="middle">replication</text>
<path class="mut2" d="M268 96 C 244 110, 192 110, 166 98" marker-end="url(#ar2)"/>
<text class="tk mut" x="216" y="124" text-anchor="middle">reverse transcription — allowed by Crick</text>
<path class="plst" d="M394 102 C 356 142, 210 152, 104 106"/>
<text class="tk pl" x="248" y="172" text-anchor="middle">✕ sequence information never flows back out of protein</text>
</svg>`,

punnett: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Punnett square and the three to one ratio">
${[0,1].map(i=>[0,1].map(j=>{const g=['AA','Aa','Aa','aa'][i*2+j];const dom=g!=='aa';
return `<rect class="${dom?'acf':'mut2f'}" x="${86+j*56}" y="${40+i*56}" width="52" height="52" rx="3"/>
<text class="lb" x="${112+j*56}" y="${70+i*56}" text-anchor="middle">${g}</text>`}).join('')).join('')}
${['A','a'].map((l,j)=>`<text class="lb oc" x="${112+j*56}" y="32" text-anchor="middle">${l}</text>`).join('')}
${['A','a'].map((l,i)=>`<text class="lb oc" x="${76}" y="${70+i*56}" text-anchor="end">${l}</text>`).join('')}
<text class="tk" x="228" y="60">1 : 2 : 1 genotypic</text>
<text class="tk" x="228" y="80">3 : 1 phenotypic</text>
<text class="tk oc" x="228" y="108">mechanism found 30 years later:</text>
<text class="tk oc" x="228" y="124">homologue separation at anaphase I</text>
</svg>`,

ap: () => `<svg viewBox="0 0 420 171" class="dia" role="img" aria-label="Action potential trace">
<line class="ax" x1="46" y1="120" x2="392" y2="120"/><line class="ax" x1="46" y1="150" x2="46" y2="18"/>
<text class="tk mut" x="26" y="26">mV</text><text class="tk mut" x="394" y="160" text-anchor="end">ms</text>
<line class="mut2" x1="46" y1="120" x2="392" y2="120"/><text class="tk mut" x="396" y="124" text-anchor="end">−70</text>
<line class="mut2" x1="46" y1="34" x2="392" y2="34"/><text class="tk mut" x="396" y="38" text-anchor="end">+40</text>
<path class="acst2" d="M50 120 L 120 116 C 136 114, 142 100, 150 76 C 156 52, 162 34, 172 34 C 184 34, 190 60, 198 92 C 206 126, 212 146, 224 146 C 244 146, 256 128, 290 121 L 388 120"/>
<path class="ocst" d="M150 76 l -12 -6" marker-end="url(#ar2)"/><text class="tk oc" x="86" y="70">Na⁺ in (m³h)</text>
<path class="ocst" d="M204 108 l 22 -6" marker-end="url(#ar2)"/><text class="tk oc" x="232" y="100">K⁺ out (n⁴)</text>
<text class="lb pl" x="248" y="162">refractory</text>
</svg>`,

landscape: () => `<svg viewBox="0 0 420 164" class="dia" role="img" aria-label="Adaptive landscape with drift and selection">
<path class="acst2" d="M40 132 C 80 132, 92 66, 132 66 C 168 66, 176 118, 212 118 C 246 118, 258 40, 302 40 C 344 40, 356 112, 390 110"/>
<path class="acf2" d="M40 132 C 80 132, 92 66, 132 66 C 168 66, 176 118, 212 118 C 246 118, 258 40, 302 40 C 344 40, 356 112, 390 110 L 390 152 L 40 152 Z"/>
<circle class="ocd" cx="132" cy="66" r="4"/><text class="lb oc" x="132" y="56" text-anchor="middle">local peak</text>
<circle class="pld" cx="302" cy="40" r="4"/><text class="lb pl" x="302" y="30" text-anchor="middle">global peak</text>
<circle class="mud" cx="212" cy="118" r="4"/>
<path class="plst" d="M150 76 C 176 108, 192 118, 206 118" marker-end="url(#ar2)"/>
<text class="tk pl" x="176" y="136" text-anchor="middle">drift across a valley</text>
</svg>`,

lv: () => `<svg viewBox="0 0 420 173" class="dia" role="img" aria-label="Predator prey phase portrait">
<line class="ax" x1="50" y1="150" x2="380" y2="150"/><line class="ax" x1="50" y1="150" x2="50" y2="20"/>
<text class="tk mut" x="382" y="164" text-anchor="end">prey N</text><text class="tk mut" x="26" y="28">pred P</text>
${[26,46,66].map((r,i)=>`<ellipse class="${i===1?'acst2':'acst'}" cx="200" cy="86" rx="${r*1.7}" ry="${r}"/>`).join('')}
<circle class="ocd" cx="200" cy="86" r="4"/><text class="lb oc" x="208" y="82">d/b, a/b</text>
<path class="ocst" d="M200 20 l 16 0" marker-end="url(#ar2)"/>
</svg>`,
channel: () => `<svg viewBox="0 0 420 148" class="dia">
${[['source',40],['encoder',118],['channel',200],['decoder',282],['sink',358]].map(([l,x],i)=>
`<rect class="${i===2?'ocf':'acf'}" x="${x-32}" y="54" width="64" height="30" rx="3"/><text class="tk" x="${x}" y="73" text-anchor="middle">${l}</text>`).join('')}
${[72,152,232,314].map(x=>`<path class="ocst" d="M${x} 69 L ${x+12} 69" marker-end="url(#ar)"/>`).join('')}
${[188,200,212].map(x=>`<path class="plst" d="M${x} 36 L ${x} 52" marker-end="url(#ar2)"/>`).join('')}
<text class="tk pl" x="200" y="30" text-anchor="middle">noise</text>
<text class="tk ac" x="40" y="104" text-anchor="middle">H(X) bits</text>
<text class="tk oc" x="200" y="104" text-anchor="middle">capacity C</text>
<text class="tk ac" x="356" y="104" text-anchor="middle">error → 0 if R &lt; C</text>
<path class="mut2" d="M40 116 L 358 116"/><text class="tk mut" x="200" y="132" text-anchor="middle">I(X;Z) ≤ I(X;Y): no processing creates information</text></svg>`,

ebm: () => `<svg viewBox="0 0 420 152" class="dia">
<path class="mut2f" d="M20 122 H400 V144 H20 Z"/><text class="tk mut" x="210" y="138" text-anchor="middle">surface, 288 K</text>
<path class="plst" d="M40 104 H380"/><text class="tk pl" x="384" y="100" text-anchor="end">greenhouse layer</text>
<path class="ocst" d="M70 22 L 110 118" marker-end="url(#ar)"/><text class="tk oc" x="46" y="18">S₀(1−α)/4 = 239 W m⁻²</text>
<path class="mut2" d="M150 118 L 126 24" marker-end="url(#ar2)"/><text class="tk mut" x="132" y="18">reflected</text>
<path class="acst" d="M250 118 L 250 106"/><path class="acst" d="M250 102 L 250 26" marker-end="url(#ar)"/>
<text class="tk ac" x="258" y="46">σT⁴ out</text>
<path class="plst" d="M304 102 L 304 118" marker-end="url(#ar2)"/><text class="tk pl" x="312" y="114">back radiation</text>
<text class="tk mut" x="20" y="152">without the layer T_e = 255 K; the 33 K difference is the greenhouse effect</text></svg>`,

rct: () => `<svg viewBox="0 0 420 152" class="dia">
<rect class="mut2f" x="20" y="60" width="72" height="34" rx="3"/><text class="tk" x="56" y="81" text-anchor="middle">eligible</text>
<path class="ocst" d="M92 77 L 124 77" marker-end="url(#ar)"/><text class="tk oc" x="108" y="68" text-anchor="middle">randomise</text>
<rect class="acf" x="140" y="28" width="86" height="30" rx="3"/><text class="tk" x="183" y="47" text-anchor="middle">treatment</text>
<rect class="mut2f" x="140" y="96" width="86" height="30" rx="3"/><text class="tk" x="183" y="115" text-anchor="middle">control</text>
<path class="ocst" d="M124 72 L 140 46"/><path class="ocst" d="M124 82 L 140 108"/>
<path class="acst" d="M226 43 L 266 43" marker-end="url(#ar2)"/><path class="acst" d="M226 111 L 266 111" marker-end="url(#ar2)"/>
<text class="tk" x="272" y="47">E[Y|A=1]</text><text class="tk" x="272" y="115">E[Y|A=0]</text>
<path class="plst" d="M350 47 L 350 111"/><text class="tk pl" x="358" y="82">ATE</text>
<text class="tk mut" x="20" y="146">randomisation makes assignment independent of the potential outcomes — that is all it buys</text></svg>`,

manifold: () => `<svg viewBox="0 0 420 152" class="dia">
<line class="ax" x1="46" y1="120" x2="180" y2="120"/><line class="ax" x1="46" y1="120" x2="46" y2="24"/>
<text class="tk mut" x="30" y="32">n₂</text><text class="tk mut" x="176" y="136">n₁</text>
${Array.from({length:44},(_,i)=>{const t=i/43*6.3;const x=112+42*Math.cos(t)+((i*29)%9)-4;const y=74+32*Math.sin(t)+((i*17)%9)-4;
return `<circle class="mud" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8"/>`}).join('')}
<text class="tk mut" x="112" y="142" text-anchor="middle">200 recorded neurons</text>
<path class="ocst" d="M196 74 L 230 74" marker-end="url(#ar)"/><text class="tk oc" x="213" y="66" text-anchor="middle">project</text>
<line class="ax" x1="254" y1="120" x2="396" y2="120"/><line class="ax" x1="254" y1="120" x2="254" y2="24"/>
<text class="tk mut" x="238" y="32">PC2</text><text class="tk mut" x="392" y="136" text-anchor="end">PC1</text>
<path class="acst2" d="M274 108 C 298 34, 356 34, 380 104"/>
${[[278,102],[304,56],[327,42],[352,56],[378,98]].map(([x,y])=>`<circle class="acd" cx="${x}" cy="${y}" r="3"/>`).join('')}
<text class="tk mut" x="254" y="142">~10 dimensions carry the task</text></svg>`,

marr: () => `<svg viewBox="0 0 420 148" class="dia">
${[['computational','what problem, and why it is the right one',22,'acf'],
   ['algorithmic','what representation and process',62,'ocf'],
   ['implementational','how neurons do it',102,'mut2f']].map(([l,d,y,c])=>
`<rect class="${c}" x="44" y="${y}" width="146" height="30" rx="3"/><text class="lb" x="117" y="${y+19}" text-anchor="middle">${l}</text>
<text class="tk mut" x="200" y="${y+19}">${d}</text>`).join('')}
<path class="plst" d="M34 56 L 34 98" marker-end="url(#ar2)"/><path class="plst" d="M34 98 L 34 56" marker-end="url(#ar2)"/>
<text class="tk mut" x="30" y="142">no level has ever been derived from another — they are distinct by default, not by proof</text></svg>`,

ceiling: () => `<svg viewBox="0 0 420 150" class="dia">
<line class="ax" x1="70" y1="116" x2="380" y2="116"/><line class="ax" x1="70" y1="116" x2="70" y2="22"/>
<text class="tk mut" x="44" y="30">max r</text><text class="tk mut" x="374" y="132" text-anchor="end">reliability of each measure</text>
<path class="acst2" d="M116 102 L 380 22"/>
${[[132,97],[178,83],[240,64],[302,46]].map(([x,y])=>`<circle class="acd" cx="${x}" cy="${y}" r="3"/>`).join('')}
<line class="plst" x1="70" y1="82" x2="182" y2="82"/><line class="plst" x1="182" y1="82" x2="182" y2="116"/>
<text class="tk pl" x="190" y="78">α = .6 both ⟹ r ≤ .60</text>
<text class="tk oc" x="76" y="32">r_xy ≤ √(r_xx · r_yy)</text>
<text class="tk mut" x="70" y="146">typical published correlations here are .2–.3, so much of the "weak theory" is noise</text></svg>`,

tree: () => `<svg viewBox="0 0 420 152" class="dia">
<text class="lb ac" x="210" y="26" text-anchor="middle">S</text>
<path class="acst" d="M204 32 L 140 52 M216 32 L 268 52"/>
<text class="lb ac" x="134" y="62" text-anchor="middle">NP</text><text class="lb ac" x="274" y="62" text-anchor="middle">VP</text>
<path class="acst" d="M128 68 L 98 90 M140 68 L 168 90"/>
<path class="acst" d="M268 68 L 236 90 M280 68 L 316 90"/>
<text class="lb mut" x="94" y="100" text-anchor="middle">Det</text><text class="lb mut" x="172" y="100" text-anchor="middle">N</text>
<text class="lb mut" x="232" y="100" text-anchor="middle">V</text><text class="lb ac" x="320" y="100" text-anchor="middle">AP</text>
${[['the',94],['man',172],['is',232],['tall',320]].map(([w,x])=>`<text class="tk" x="${x}" y="118" text-anchor="middle">${w}</text>`).join('')}
<text class="tk pl" x="30" y="136">rules refer to structural position, never to linear order</text>
<text class="tk mut" x="30" y="150">no known language forms questions by reversing the word string</text></svg>`,

equilibrium: () => `<svg viewBox="0 0 420 150" class="dia">
<line class="ax" x1="70" y1="116" x2="380" y2="116"/><line class="ax" x1="70" y1="116" x2="70" y2="22"/>
<text class="tk mut" x="52" y="30">p</text><text class="tk mut" x="374" y="132" text-anchor="end">quantity</text>
<path class="acst2" d="M84 104 L 330 34"/><text class="tk ac" x="336" y="32">supply</text>
<path class="ocst2" d="M84 32 L 330 108"/><text class="tk oc" x="336" y="110">demand</text>
<circle class="pld" cx="207" cy="70" r="4.5"/>
<line class="plst" x1="70" y1="70" x2="207" y2="70"/><line class="plst" x1="207" y1="70" x2="207" y2="116"/>
<text class="tk pl" x="64" y="66" text-anchor="end">p*</text><text class="tk pl" x="207" y="130" text-anchor="middle">q*</text>
<text class="tk mut" x="30" y="146">existence is a theorem; uniqueness and stability are not (Sonnenschein–Mantel–Debreu)</text></svg>`,

schelling: () => `<svg viewBox="0 0 420 156" class="dia">
${(()=>{let o='';for(let i=0;i<10;i++)for(let j=0;j<8;j++){const v=(i*7+j*13+((i*j)%5))%3;
if(v===2)continue;o+=`<rect class="${v?'acf':'ocf'}" x="${26+i*15}" y="${24+j*13}" width="12" height="10" rx="1.5"/>`}return o})()}
<text class="tk" x="98" y="142" text-anchor="middle">random start</text>
<path class="plst" d="M196 80 L 230 80" marker-end="url(#ar2)"/><text class="tk pl" x="213" y="72" text-anchor="middle">τ ≈ 0.3</text>
${(()=>{let o='';for(let i=0;i<10;i++)for(let j=0;j<8;j++){const v=(i<5)?0:1;
if((i*3+j*5)%7===0)continue;o+=`<rect class="${v?'acf':'ocf'}" x="${254+i*15}" y="${24+j*13}" width="12" height="10" rx="1.5"/>`}return o})()}
<text class="tk" x="326" y="142" text-anchor="middle">near-total segregation</text>
<text class="tk oc" x="26" y="154">the aggregate outcome resembles no individual preference</text></svg>`
};

const FIGCAP = {
 "lightcone": "ds² = −c²dt² + dx²  invariant",
 "higgs": "V = μ²|Φ|² + λ|Φ|⁴ with μ² < 0 — the law is symmetric, the vacuum is not",
 "wkb": "ħ → 0: the phase exp(iS/ħ) oscillates faster, it does not converge. The limit is singular.",
 "eikonal": "λ → 0 fails exactly here — the rainbow lives in the boundary layer",
 "phase": "Liouville: Hamiltonian flow preserves phase-space volume — the measure statistical mechanics assumes",
 "coarse": "K → K′ = R(K). At T_c the picture is unchanged by magnification: a fixed point. Exponents are eigenvalues of R linearised there — hence universality.",
 "carnot": "η = 1 − T_C/T_H — derived in 1824 from the caloric theory, and still exact",
 "cascade": "Right equations since 1845; the successful prediction came from dimensional analysis",
 "shells": "Magic numbers 2, 8, 20, 28, 50, 82, 126 — the same idea as atomic shells, different potential",
 "pes": "Born–Oppenheimer creates this surface. Where the surfaces touch, it fails — and photochemistry happens.",
 "mo": "Bond order = ½(n_bonding − n_antibonding). Predicts O₂ paramagnetic — which Lewis structures do not.",
 "tst": "ΔG° decides whether; ΔG‡ decides how fast. Catalysts change only the second.",
 "atp": "Δp ≈ 200 mV. Energy stored as a gradient across a topology, not in a chemical intermediate.",
 "punnett": "The law was inferred from ratios alone, with no idea what the factors were made of.",
 "ap": "Computed by hand in 1952; conduction velocity predicted 18.8 m/s, measured 21.2 m/s.",
 "landscape": "Selection is effective only for |s| > 1/(2N_e); below that, drift is blind to fitness.",
 "lv": "Closed orbits — neutrally stable, so any perturbation of the model changes the behaviour.",
 "channel": "Shannon’s scheme. Below capacity, arbitrarily reliable transmission over a noisy channel is possible — and no downstream processing can recover what the channel discarded.",
 "ebm": "The planetary energy budget. Two satellite measurements, solar constant and albedo, give an effective temperature of 255 K against an observed 288 K, with no model involved.",
 "rct": "The randomised trial. Randomisation buys the independence of assignment from the potential outcomes; everything else about causal inference has to be argued for separately.",
 "manifold": "Population activity in a task occupies a low-dimensional subspace whose dynamics are lawful while every single-neuron trace looks like noise — the same structural situation as an order parameter.",
 "marr": "Marr’s three levels of analysis, and the relation between them that has never been established in either direction.",
 "ceiling": "Reliability bounds validity. Two measures of reliability 0.6 cannot correlate above 0.6 however tightly the underlying constructs are related.",
 "tree": "Hierarchical structure in syntax. That rules refer to structural rather than linear position is the central empirical commitment of generative grammar.",
 "equilibrium": "Market equilibrium. Existence is a theorem under convexity; uniqueness and stability are not, which is why the framework constrains less than its diagrams suggest.",
 "schelling": "Schelling’s segregation model. Mild individual preferences produce severe collective outcomes that resemble nobody’s intention."
};
