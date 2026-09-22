/* Apparatus figures for complexity and network science. Colours from CSS classes only. */
const APP_EXTRA_M4 = {

btwgrid: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="The Bak-Tang-Wiesenfeld sandpile automaton: a square lattice of integer heights, a grain added at a random site, toppling when a site exceeds three, and grains lost at the open boundary">
<text class="lb" x="14" y="18">lattice, z(i,j) ∈ {0,1,2,3}</text>
${(()=>{let o='';const v=[[1,2,0,3,1,2],[3,1,2,1,0,3],[0,3,1,2,3,1],[2,0,3,1,2,0],[1,2,1,3,1,2],[3,1,0,2,0,3]];
for(let r=0;r<6;r++)for(let c=0;c<6;c++){const x=18+c*22,y=28+r*18;
o+=`<rect class="${v[r][c]===3?'ocf':'mut2f'}" x="${x}" y="${y}" width="20" height="16"/><text class="tk" x="${x+10}" y="${y+12}" text-anchor="middle">${v[r][c]}</text>`;}
return o})()}
<path class="acst" d="M74 20 L 74 26" marker-end="url(#ar)"/>
<text class="tk ac" x="80" y="18">one grain</text>
<text class="tk oc" x="160" y="42">z ≥ 4 topples:</text>
<text class="tk mut" x="160" y="58">z(i,j) −= 4</text>
<text class="tk mut" x="160" y="74">each neighbour += 1</text>
<text class="tk pl" x="160" y="96">grains leave at the edge —</text>
<text class="tk pl" x="160" y="110">the only dissipation</text>
<text class="tk mut" x="160" y="132">50×50, open boundary,</text>
<text class="tk mut" x="160" y="146">avalanche size s = topplings</text>
</svg>`,

ricepile: () => `<svg viewBox="0 0 420 154" class="dia" role="img" aria-label="The Oslo rice pile: grains dropped between two vertical glass plates a few millimetres apart, the pile photographed each frame, and avalanche sizes measured as the change in potential energy, with elongated grains scaling and round ones not">
<line class="ax" x1="30" y1="120" x2="200" y2="120"/>
<line class="acst2" x1="30" y1="24" x2="30" y2="120"/>
<line class="acst2" x1="200" y1="24" x2="200" y2="120"/>
<text class="tk ac" x="30" y="18">glass plates, 5 mm gap</text>
<path class="ocf" d="M30 120 L 30 70 L 200 118 L 200 120 Z"/>
<path class="ocst nofill" d="M30 70 L 200 118"/>
<circle class="acd" cx="44" cy="30" r="3"/>
<path class="acst" d="M44 36 L 44 62" marker-end="url(#ar)"/>
<text class="tk mut" x="52" y="46">one grain at a time</text>
<text class="tk oc" x="96" y="108">pile builds to its own angle</text>
<line class="ax" x1="248" y1="118" x2="404" y2="118"/><line class="ax" x1="248" y1="118" x2="248" y2="26"/>
<text class="tk mut" x="404" y="134" text-anchor="end">log s</text>
<text class="tk mut" x="244" y="28" text-anchor="end">log P</text>
<path class="acst2 nofill" d="M252 34 L 388 104"/>
<text class="tk ac" x="392" y="100">elongated: scales</text>
<path class="plst2 nofill" d="M252 40 C 300 52, 330 74, 344 114"/>
<text class="tk pl" x="348" y="122" text-anchor="end">round: does not</text>
<text class="tk mut" x="248" y="148">Frette et al. 1996 — the shape of the grain decided the result.</text>
</svg>`,

vortexav: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Vortex avalanches in a type-II superconductor: flux driven into a tube by a slowly ramped field, with vortices escaping in bursts detected by a pickup coil, giving avalanche sizes over several decades">
<rect class="mut2f" x="40" y="34" width="150" height="76" rx="6"/>
<text class="tk mut" x="40" y="28">superconducting tube, 4.2 K</text>
${[0,1,2,3,4,5,6,7].map(i=>`<circle class="ocd" cx="${56+i*16}" cy="${56+((i%3)*16)}" r="3"/>`).join('')}
<path class="acst2 nofill" d="M190 72 a 26 26 0 1 1 0 0.1"/>
<text class="tk ac" x="222" y="52">pickup coil</text>
<path class="plst" d="M14 72 L 36 72" marker-end="url(#ar)"/>
<text class="tk pl" x="14" y="64">B ramped slowly</text>
<line class="ax" x1="256" y1="112" x2="404" y2="112"/>
<text class="tk mut" x="256" y="130">time</text>
<path class="ocst nofill" d="M256 108 L 282 108 L 282 78 L 286 108 L 318 108 L 318 46 L 322 108 L 344 108 L 344 92 L 348 108 L 376 108 L 376 62 L 380 108 L 404 108"/>
<text class="tk oc" x="404" y="42" text-anchor="end">bursts, not a smooth flow</text>
<text class="tk mut" x="256" y="146">Field et al. 1995 — avalanche sizes distributed over about three decades.</text>
</svg>`,

lambdapoint: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="The lambda-point heat capacity experiment flown in microgravity: a helium sample cell with a high-resolution thermometer, gravity-free so that the transition is not rounded by the pressure gradient, giving the critical exponent to four decimal places">
<rect class="acst2 nofill" x="26" y="42" width="120" height="62" rx="6"/>
<text class="tk ac" x="26" y="36">He-4 cell, 1.7 cm</text>
${(()=>{let o='';for(let i=0;i<26;i++){const x=34+(i%7)*16,y=52+Math.floor(i/7)*16;o+=`<circle class="acd" cx="${x}" cy="${y}" r="2.4"/>`}return o})()}
<rect class="ocf" x="58" y="108" width="56" height="12" rx="2"/>
<text class="tk oc" x="86" y="132" text-anchor="middle">paramagnetic thermometer, 0.3 nK</text>
<path class="plst" d="M150 56 L 168 56"/>
<text class="tk pl" x="172" y="48">microgravity:</text>
<text class="tk pl" x="172" y="62">no hydrostatic</text>
<text class="tk pl" x="172" y="76">rounding of T_λ</text>
<line class="ax" x1="278" y1="112" x2="404" y2="112"/><line class="ax" x1="278" y1="112" x2="278" y2="26"/>
<text class="tk mut" x="404" y="128" text-anchor="end">log|t|</text>
<text class="tk mut" x="274" y="28" text-anchor="end">C</text>
<path class="acst2 nofill" d="M282 104 C 310 96, 330 80, 344 34"/>
<path class="acst2 nofill" d="M404 104 C 378 96, 358 80, 346 34"/>
<text class="tk mut" x="278" y="146">ν = 0.6709 ± 0.0001 measured; 0.6717 ± 0.0004 from theory.</text>
</svg>`,

milgram: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="Milgram's small-world letter study: folders sent to volunteers in Nebraska and Kansas to be forwarded by hand to a target in Boston, with a tracer card returned at each hop, and most chains never arriving">
<rect class="acf" x="16" y="30" width="96" height="24" rx="3"/>
<text class="tk" x="64" y="46" text-anchor="middle">296 starters</text>
<text class="tk mut" x="16" y="68">Omaha &amp; Wichita</text>
${[0,1,2,3].map(i=>`<circle class="mud" cx="${140+i*44}" cy="42" r="6"/><path class="ocst" d="M${148+i*44} 42 L ${176+i*44} 42" marker-end="url(#ar)"/>`).join('')}
<rect class="ocf" x="320" y="30" width="86" height="24" rx="3"/>
<text class="tk" x="363" y="46" text-anchor="middle">target, Boston</text>
<text class="tk mut" x="140" y="68">pass only to someone you know on a first-name basis</text>
<rect class="plst2 nofill" x="16" y="88" width="120" height="22" rx="3"/>
<text class="tk pl" x="76" y="103" text-anchor="middle">tracer card per hop</text>
<text class="tk oc" x="156" y="103">64 of 296 chains completed</text>
<text class="tk mut" x="16" y="132">Median length among completed chains: 5.5 intermediaries.</text>
<text class="tk pl" x="16" y="146">The 78% that never arrived are the part the folklore leaves out.</text>
</svg>`,

webcrawl: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="The web-crawl measurement behind the scale-free claim: a robot following hyperlinks from a seed set within one domain, the recorded out-degree histogram plotted on log axes, and the sampling bias that a truncated crawl introduces">
<circle class="acd" cx="40" cy="60" r="5"/>
<text class="tk ac" x="30" y="46">seed</text>
${[[80,36],[80,60],[80,84],[124,28],[124,52],[124,76],[124,100],[168,44],[168,92]].map(([x,y])=>`<circle class="mud" cx="${x}" cy="${y}" r="3.6"/>`).join('')}
${[[40,60,80,36],[40,60,80,60],[40,60,80,84],[80,36,124,28],[80,60,124,52],[80,60,124,76],[80,84,124,100],[124,52,168,44],[124,76,168,92]].map(([a,b,c,d])=>`<path class="mut2" d="M${a} ${b} L ${c} ${d}"/>`).join('')}
<path class="plst" d="M186 24 L 186 112"/>
<text class="tk pl" x="190" y="22">crawl stops here</text>
<text class="tk mut" x="20" y="132">nd.edu, 1999: 325 729 pages, 1 469 680 links</text>
<line class="ax" x1="254" y1="112" x2="404" y2="112"/><line class="ax" x1="254" y1="112" x2="254" y2="24"/>
<text class="tk mut" x="404" y="128" text-anchor="end">log k</text>
<text class="tk mut" x="250" y="26" text-anchor="end">log P(k)</text>
${[[258,34],[272,46],[290,58],[312,70],[338,82],[366,96],[392,106]].map(([x,y])=>`<circle class="ocd" cx="${x}" cy="${y}" r="3"/>`).join('')}
<path class="ocst nofill" d="M256 32 L 398 108"/>
<text class="tk oc" x="404" y="46" text-anchor="end">slope ≈ −2.1</text>
</svg>`,

motes: () => `<svg viewBox="0 0 420 154" class="dia" role="img" aria-label="A proximity-sensor contact study: students and teachers wearing radio motes that log any face-to-face encounter within about three metres every twenty seconds, producing a measured contact network rather than a reported one">
<circle class="acf" cx="60" cy="52" r="16"/>
<text class="tk" x="60" y="56" text-anchor="middle">mote</text>
<path class="acst nofill" d="M60 52 m -34 0 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0"/>
<text class="tk ac" x="60" y="100" text-anchor="middle">≈3 m range</text>
${[[150,34],[196,56],[150,84],[240,36],[240,80],[286,58]].map(([x,y])=>`<circle class="mud" cx="${x}" cy="${y}" r="5"/>`).join('')}
${[[150,34,196,56],[150,84,196,56],[196,56,240,36],[196,56,240,80],[240,36,286,58],[240,80,286,58]].map(([a,b,c,d])=>`<path class="ocst" d="M${a} ${b} L ${c} ${d}"/>`).join('')}
<text class="tk oc" x="216" y="106" text-anchor="middle">edge = a logged encounter</text>
<text class="tk mut" x="14" y="128">789 participants, one school day, 20-second sampling, 762 868 contact records.</text>
<text class="tk pl" x="14" y="144">The degree distribution is heterogeneous but has a finite second moment.</text>
</svg>`

};
