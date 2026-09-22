/* Apparatus figures for logic, computability, control theory, game theory and
   statistical learning. Colours come from CSS classes only; no hard-coded fills. */
const APP_EXTRA_M5 = {

/* ---------------------------------------------------------------- logic --- */

godelcode: () => `<svg viewBox="0 0 420 186" class="dia" role="img" aria-label="Godel's 1931 apparatus: a symbol table assigning odd numbers to primitive signs, a prime-power product coding a formula as one integer, the primitive recursive provability relation built from that coding, and the substitution function that manufactures a self-referential sentence">
<text class="lb" x="12" y="16">the coding, in four stages</text>
<rect class="mut2f" x="12" y="24" width="192" height="62" rx="3"/>
<text class="lb ac" x="20" y="38">1 · primitive signs → odd numbers</text>
<text class="tk mut" x="20" y="54">0 ↦ 1   f ↦ 3   ¬ ↦ 5   ∨ ↦ 7   ∀ ↦ 9</text>
<text class="tk mut" x="20" y="68">( ↦ 11   ) ↦ 13   variables ↦ primes &gt; 13</text>
<text class="tk pl" x="20" y="80">the assignment is arbitrary; only injectivity matters</text>
<path class="ocst" d="M208 55 L 232 55" marker-end="url(#ar)"/>
<rect class="mut2f" x="236" y="24" width="172" height="62" rx="3"/>
<text class="lb ac" x="244" y="38">2 · a string → one integer</text>
<text class="tk mut" x="244" y="54">⟨n₁,n₂,…,n_k⟩ ↦ 2^n₁ · 3^n₂ · 5^n₃ ⋯</text>
<text class="tk mut" x="244" y="68">unique factorisation makes it invertible;</text>
<text class="tk pl" x="244" y="80">the numbers are astronomically large and unused</text>
<path class="ocst" d="M108 90 L 108 108" marker-end="url(#ar)"/>
<rect class="mut2f" x="12" y="112" width="192" height="60" rx="3"/>
<text class="lb ac" x="20" y="126">3 · Bew(x): x codes a proof</text>
<text class="tk mut" x="20" y="142">45 relations, each primitive recursive,</text>
<text class="tk mut" x="20" y="156">each therefore representable in P — this is</text>
<text class="tk pl" x="20" y="168">where "interprets arithmetic" is used, and only here</text>
<path class="ocst" d="M208 142 L 232 142" marker-end="url(#ar)"/>
<rect class="mut2f" x="236" y="112" width="172" height="60" rx="3"/>
<text class="lb ac" x="244" y="126">4 · substitution, then diagonal</text>
<text class="tk mut" x="244" y="142">sub(m,m) is p.r.; take θ(x) := ¬Prov(sub(x,x)),</text>
<text class="tk mut" x="244" y="156">let k = ⌜θ⌝, set G := θ(k̄)</text>
<text class="tk oc" x="244" y="168">P ⊢ G ↔ ¬Prov(⌜G⌝) — a Π⁰₁ sentence</text>
</svg>`,

fourcolour: () => `<svg viewBox="0 0 420 184" class="dia" role="img" aria-label="The Appel-Haken four-colour apparatus: a planar triangulation, a ring configuration tested for reducibility by exhaustive colouring of its boundary ring, an unavoidable set produced by discharging rules, and the later replacement of the FORTRAN and assembler programs by a machine-checked Coq proof">
<text class="lb" x="12" y="16">a ring configuration under test</text>
<circle class="acst nofill" cx="80" cy="86" r="46"/>
${(()=>{let o='';for(let i=0;i<12;i++){const a=i*Math.PI/6,x=80+46*Math.cos(a),y=86+46*Math.sin(a);o+=`<circle class="ocd" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2"/>`}return o})()}
<circle class="acd" cx="80" cy="86" r="3.4"/>
<circle class="acd" cx="62" cy="74" r="3.4"/>
<circle class="acd" cx="98" cy="74" r="3.4"/>
<circle class="acd" cx="80" cy="104" r="3.4"/>
<path class="acst nofill" d="M62 74 L 98 74 L 80 104 Z M80 86 L 62 74 M80 86 L 98 74 M80 86 L 80 104"/>
<text class="tk ac" x="80" y="140" text-anchor="middle">ring of 12 · interior configuration</text>
<text class="tk mut" x="80" y="154" text-anchor="middle">4¹² boundary colourings enumerated</text>
<text class="tk pl" x="80" y="168" text-anchor="middle">reducible if every one extends</text>
<path class="ocst" d="M132 86 L 160 86" marker-end="url(#ar)"/>
<rect class="mut2f" x="164" y="30" width="118" height="112" rx="3"/>
<text class="lb ac" x="172" y="46">discharging</text>
<text class="tk mut" x="172" y="62">487 rules moving charge</text>
<text class="tk mut" x="172" y="76">between vertices; total</text>
<text class="tk mut" x="172" y="90">charge fixed at 12 by Euler</text>
<text class="tk oc" x="172" y="110">1 482 configurations</text>
<text class="tk oc" x="172" y="124">in the published set</text>
<text class="tk pl" x="172" y="138">1 200 h on IBM 370</text>
<path class="ocst" d="M286 86 L 312 86" marker-end="url(#ar)"/>
<rect class="acf" x="316" y="44" width="92" height="84" rx="3"/>
<text class="lb" x="362" y="62" text-anchor="middle">1976: proof</text>
<text class="tk mut" x="362" y="78" text-anchor="middle">no human checked</text>
<text class="tk mut" x="362" y="92" text-anchor="middle">the computation</text>
<text class="tk ac" x="362" y="112" text-anchor="middle">2005: Coq</text>
<text class="tk ac" x="362" y="124" text-anchor="middle">kernel audit</text>
<text class="tk mut" x="12" y="180">Appel, Haken &amp; Koch 1976 · Gonthier 2005</text>
</svg>`,

flyspeck: () => `<svg viewBox="0 0 420 182" class="dia" role="img" aria-label="The Flyspeck verification pipeline: the Kepler statement, a text part formalised in HOL Light, linear-programming bounds and thousands of nonlinear inequalities checked on a compute cluster, and a final proof object accepted by a small logical kernel, contrasted with the referee panel that reported only 99 per cent certainty">
<rect class="plf" x="12" y="20" width="126" height="54" rx="3"/>
<text class="lb" x="75" y="38" text-anchor="middle">Annals referees</text>
<text class="tk mut" x="75" y="54" text-anchor="middle">12 referees, 4 years</text>
<text class="tk pl" x="75" y="68" text-anchor="middle">"99% certain", not checked</text>
<path class="plst" d="M75 78 L 75 100" marker-end="url(#ar2)"/>
<rect class="acf" x="12" y="104" width="126" height="46" rx="3"/>
<text class="lb" x="75" y="122" text-anchor="middle">Kepler statement</text>
<text class="tk mut" x="75" y="138" text-anchor="middle">π/√18 ≈ 0.74048 is optimal</text>
<path class="ocst" d="M142 127 L 166 127" marker-end="url(#ar)"/>
<rect class="mut2f" x="170" y="20" width="118" height="60" rx="3"/>
<text class="lb ac" x="178" y="36">text part</text>
<text class="tk mut" x="178" y="52">HOL Light, hand-written</text>
<text class="tk mut" x="178" y="66">definitions and lemmas</text>
<rect class="mut2f" x="170" y="96" width="118" height="62" rx="3"/>
<text class="lb ac" x="178" y="112">machine part</text>
<text class="tk mut" x="178" y="128">≈23 000 nonlinear</text>
<text class="tk mut" x="178" y="142">inequalities · LP bounds</text>
<text class="tk pl" x="178" y="154">in Isabelle · cloud CPU-years</text>
<path class="ocst" d="M232 84 L 232 92" marker-end="url(#ar)"/>
<path class="ocst" d="M292 50 L 314 74" marker-end="url(#ar)"/>
<path class="ocst" d="M292 126 L 314 102" marker-end="url(#ar)"/>
<rect class="acf" x="318" y="62" width="90" height="52" rx="3"/>
<text class="lb" x="363" y="82" text-anchor="middle">kernel</text>
<text class="tk mut" x="363" y="98" text-anchor="middle">a few hundred lines</text>
<text class="tk ac" x="363" y="110" text-anchor="middle">of OCaml, auditable</text>
<text class="tk mut" x="12" y="172">Hales et al., announced 10 August 2014 — sixteen years after the 1998 proof.</text>
</svg>`,

/* ----------------------------------------------------------------- comp --- */

satphase: () => `<svg viewBox="0 0 420 186" class="dia" role="img" aria-label="The random 3-SAT measurement: a uniform clause generator, a complete DPLL solver, and the measured fraction of satisfiable instances falling sharply through one half near a clause-to-variable ratio of 4.27, with median solving cost peaking at the same point">
<rect class="mut2f" x="12" y="22" width="150" height="96" rx="3"/>
<text class="lb ac" x="20" y="38">generator</text>
<text class="tk mut" x="20" y="54">n variables, m clauses</text>
<text class="tk mut" x="20" y="68">each clause: 3 distinct vars</text>
<text class="tk mut" x="20" y="82">each literal negated w.p. ½</text>
<text class="tk oc" x="20" y="100">α = m ⁄ n is the control knob</text>
<text class="tk pl" x="20" y="112">1 000 instances per point</text>
<text class="tk mut" x="12" y="136">solver: complete DPLL, so</text>
<text class="tk mut" x="12" y="150">"unsatisfiable" is certified,</text>
<text class="tk mut" x="12" y="164">not merely a timeout</text>
<line class="ax" x1="184" y1="146" x2="410" y2="146"/>
<line class="ax" x1="184" y1="146" x2="184" y2="30"/>
<path class="plst" d="M300 32 L 300 146"/>
<path class="acst2 nofill" d="M186 42 C 244 46, 272 54, 300 88 C 328 122, 356 130, 408 134"/>
<path class="acst nofill" d="M186 46 C 236 56, 262 72, 300 90 C 338 108, 364 124, 408 136"/>
<path class="ocst2 nofill" d="M186 142 C 244 140, 280 134, 300 58 C 320 134, 356 140, 408 143"/>
<text class="tk ac" x="190" y="40">P(satisfiable)</text>
<text class="tk oc" x="408" y="60" text-anchor="end">median DPLL cost</text>
<text class="tk mut" x="184" y="160">3.5</text>
<text class="tk mut" x="300" y="160" text-anchor="middle">4.27</text>
<text class="tk mut" x="410" y="160" text-anchor="end">5.0</text>
<text class="tk pl" x="300" y="176" text-anchor="middle">the window narrows as n grows: 4.17 at n = 50, ≈4.26 by n = 400</text>
</svg>`,

adlemantube: () => `<svg viewBox="0 0 420 186" class="dia" role="img" aria-label="Adleman's 1994 DNA computation: a seven-vertex directed graph encoded as twenty-base oligonucleotides, ligated in a hundred-microlitre tube so that random paths self-assemble, then filtered by PCR, by gel selection at 140 base pairs, and by seven successive magnetic-bead affinity steps">
<text class="lb" x="12" y="16">7 vertices, 14 directed edges</text>
${(()=>{const p=[[36,44],[86,34],[118,68],[92,106],[44,112],[20,78],[70,72]];let o='';
p.forEach((c,i)=>{o+=`<circle class="acd" cx="${c[0]}" cy="${c[1]}" r="4"/><text class="tk mut" x="${c[0]+6}" y="${c[1]-5}">${i}</text>`});
const e=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,2],[6,3],[1,6]];
e.forEach(k=>{o+=`<path class="acst nofill" d="M${p[k[0]][0]} ${p[k[0]][1]} L ${p[k[1]][0]} ${p[k[1]][1]}"/>`});
return o})()}
<text class="tk ac" x="12" y="134">vertex i ↦ a random 20-mer</text>
<text class="tk mut" x="12" y="148">edge i→j ↦ 3′ half of i + 5′ half of j</text>
<text class="tk pl" x="12" y="162">complements act as splints</text>
<path class="ocst" d="M132 76 L 156 76" marker-end="url(#ar)"/>
<rect class="mut2f" x="160" y="42" width="104" height="70" rx="6"/>
<text class="lb" x="212" y="60" text-anchor="middle">100 μl tube</text>
<text class="tk mut" x="212" y="76" text-anchor="middle">≈50 pmol each</text>
<text class="tk mut" x="212" y="90" text-anchor="middle">≈3×10¹³ copies</text>
<text class="tk oc" x="212" y="106" text-anchor="middle">ligation: seconds</text>
<text class="tk pl" x="212" y="132" text-anchor="middle">all paths form at once —</text>
<text class="tk pl" x="212" y="146" text-anchor="middle">this is the only parallel step</text>
<path class="ocst" d="M268 76 L 292 76" marker-end="url(#ar)"/>
<rect class="mut2f" x="296" y="24" width="112" height="108" rx="3"/>
<text class="lb ac" x="304" y="40">filtration, 7 days</text>
<text class="tk mut" x="304" y="56">PCR with primers 0 and 6</text>
<text class="tk mut" x="304" y="70">gel: keep the 140 bp band</text>
<text class="tk mut" x="304" y="84">(7 vertices × 20 bases)</text>
<text class="tk mut" x="304" y="100">7 magnetic-bead affinity</text>
<text class="tk mut" x="304" y="114">steps, one per vertex</text>
<text class="tk oc" x="304" y="128">final gel read by eye</text>
<text class="tk mut" x="12" y="178">Wet-lab time grows linearly with n; the mass of DNA required grows like n!.</text>
</svg>`,

satcomp: () => `<svg viewBox="0 0 420 180" class="dia" role="img" aria-label="A SAT solver competition as a measuring protocol: a fixed benchmark suite, identical cluster hardware and a wall-clock timeout, solvers submitted as source, unsatisfiability answers required to ship a DRAT proof that an independent checker verifies, and a score that is simply the number of instances solved">
<rect class="acf" x="12" y="24" width="112" height="60" rx="3"/>
<text class="lb" x="68" y="42" text-anchor="middle">benchmark suite</text>
<text class="tk mut" x="68" y="58" text-anchor="middle">hardware verification,</text>
<text class="tk mut" x="68" y="70" text-anchor="middle">planning, cryptanalysis,</text>
<text class="tk mut" x="68" y="82" text-anchor="middle">combinatorics</text>
<path class="ocst" d="M128 54 L 152 54" marker-end="url(#ar)"/>
<rect class="mut2f" x="156" y="18" width="114" height="72" rx="3"/>
<text class="lb ac" x="164" y="34">fixed conditions</text>
<text class="tk mut" x="164" y="50">one cluster, one core</text>
<text class="tk mut" x="164" y="64">5 000 s wall clock cap</text>
<text class="tk mut" x="164" y="78">solvers shipped as source</text>
<path class="ocst" d="M274 54 L 298 54" marker-end="url(#ar)"/>
<rect class="acf" x="302" y="24" width="106" height="60" rx="3"/>
<text class="lb" x="355" y="42" text-anchor="middle">score</text>
<text class="tk mut" x="355" y="58" text-anchor="middle">instances solved</text>
<text class="tk mut" x="355" y="72" text-anchor="middle">within the cap</text>
<path class="plst" d="M213 94 L 213 112" marker-end="url(#ar2)"/>
<rect class="plf" x="96" y="116" width="234" height="40" rx="3"/>
<text class="lb" x="213" y="132" text-anchor="middle">UNSAT must ship a DRAT proof</text>
<text class="tk mut" x="213" y="148" text-anchor="middle">checked by an independent verifier — the only guard against a wrong "no"</text>
<text class="tk mut" x="12" y="172">Industrial instances with 10⁶–10⁷ variables are routinely decided; random instances at α ≈ 4.27 are not.</text>
</svg>`,

/* -------------------------------------------------------------- control --- */

wattgov: () => `<svg viewBox="0 0 420 188" class="dia" role="img" aria-label="Watt's centrifugal governor: a spindle belt-driven from the engine, two weighted arms that fly outward as speed rises, a sliding collar, a bell crank and the steam throttle valve, with the proportional-only action that leaves a steady droop and the reduced friction that produced hunting">
<line class="ax" x1="150" y1="22" x2="150" y2="150"/>
<text class="tk mut" x="156" y="20">spindle, belt-driven from the engine</text>
<path class="acst2 nofill" d="M150 34 L 96 78"/>
<path class="acst2 nofill" d="M150 34 L 204 78"/>
<circle class="acd" cx="92" cy="82" r="9"/>
<circle class="acd" cx="208" cy="82" r="9"/>
<text class="tk ac" x="56" y="86">≈1.4 kg</text>
<text class="tk ac" x="222" y="86">≈1.4 kg</text>
<path class="acst nofill" d="M92 82 L 150 108"/>
<path class="acst nofill" d="M208 82 L 150 108"/>
<rect class="ocf" x="134" y="106" width="32" height="12" rx="2"/>
<text class="tk oc" x="172" y="116">sliding collar rises with speed</text>
<path class="ocst" d="M166 112 L 232 112"/>
<circle class="mud" cx="236" cy="112" r="3"/>
<path class="ocst" d="M236 112 L 268 96"/>
<rect class="mut2f" x="270" y="78" width="60" height="34" rx="3"/>
<text class="lb" x="300" y="99" text-anchor="middle">throttle</text>
<path class="plst" d="M330 95 L 372 95" marker-end="url(#ar2)"/>
<text class="tk pl" x="336" y="86">steam to engine</text>
<path class="plst" d="M372 108 C 372 152, 200 162, 150 152" marker-end="url(#ar2)"/>
<text class="tk pl" x="238" y="176" text-anchor="middle">engine speed closes the loop back to the spindle</text>
<text class="tk mut" x="12" y="142">restoring action ∝ speed error,</text>
<text class="tk mut" x="12" y="156">so a load change leaves a</text>
<text class="tk mut" x="12" y="170">permanent droop: no integrator</text>
<text class="tk oc" x="12" y="36">arm friction was the damping;</text>
<text class="tk oc" x="12" y="50">better bearings removed it and</text>
<text class="tk oc" x="12" y="64">engines began to hunt</text>
</svg>`,

blackamp: () => `<svg viewBox="0 0 420 176" class="dia" role="img" aria-label="Black's negative-feedback amplifier: a summing node subtracting a fraction beta of the output from the input, a high-gain vacuum-tube amplifier, and the beta network of passive components, with the closed-loop gain reduced to one over beta and distortion divided by one plus A beta">
<path class="ax" d="M20 70 L 52 70" marker-end="url(#arm)"/>
<text class="tk mut" x="20" y="62">input</text>
<circle class="acst nofill" cx="62" cy="70" r="10"/>
<text class="tk ac" x="62" y="74" text-anchor="middle">Σ</text>
<text class="tk oc" x="50" y="94">−</text>
<path class="ax" d="M72 70 L 110 70" marker-end="url(#arm)"/>
<path class="acf" d="M112 42 L 112 98 L 176 70 Z"/>
<text class="lb" x="132" y="74">A</text>
<text class="tk mut" x="112" y="34">tube amplifier, gain A ≈ 60 dB</text>
<path class="ax" d="M176 70 L 300 70" marker-end="url(#arm)"/>
<text class="tk mut" x="304" y="66">output</text>
<text class="tk ac" x="304" y="82">gain → 1⁄β</text>
<circle class="mud" cx="248" cy="70" r="3"/>
<path class="ocst" d="M248 74 L 248 116"/>
<rect class="ocf" x="150" y="104" width="98" height="26" rx="3"/>
<text class="lb" x="199" y="121" text-anchor="middle">β network</text>
<path class="ocst" d="M150 117 L 62 117 L 62 80" marker-end="url(#ar)"/>
<text class="tk oc" x="70" y="140">passive: resistors and</text>
<text class="tk oc" x="70" y="154">transformers, stable to 0.01%</text>
<text class="tk pl" x="256" y="121">Aβ ≈ 40–50 dB</text>
<text class="tk pl" x="256" y="136">distortion ÷ (1+Aβ)</text>
<text class="tk pl" x="256" y="151">gain variation ÷ (1+Aβ)</text>
<text class="tk mut" x="20" y="170">Sketched on a New York Times page, Lackawanna ferry, 2 August 1927; filed 1928, granted 1937.</text>
</svg>`,

homeostat: () => `<svg viewBox="0 0 420 184" class="dia" role="img" aria-label="Ashby's homeostat: four identical units, each a pivoted magnet carrying a needle that dips into a trough of water between electrodes so that its position sets a potential divider, with every unit's output feeding the coils of all four through potentiometers reset at random by a twenty-five-position uniselector">
<text class="lb" x="12" y="16">one unit of four</text>
<rect class="mut2f" x="12" y="24" width="150" height="86" rx="3"/>
<circle class="acd" cx="60" cy="46" r="5"/>
<path class="acst2 nofill" d="M60 46 L 96 78"/>
<text class="tk ac" x="16" y="42">pivoted magnet</text>
<rect class="acf" x="40" y="80" width="112" height="16" rx="2"/>
<line class="ocst" x1="42" y1="80" x2="42" y2="96"/>
<line class="ocst" x1="150" y1="80" x2="150" y2="96"/>
<text class="tk oc" x="40" y="108">water trough, electrode at each end</text>
<text class="tk mut" x="100" y="44">needle position</text>
<text class="tk mut" x="100" y="58">= output current</text>
${(()=>{let o='';for(let i=0;i<4;i++){const x=196+i*54;o+=`<rect class="mut2f" x="${x}" y="30" width="42" height="34" rx="3"/><text class="lb" x="${x+21}" y="52" text-anchor="middle">U${i+1}</text>`}return o})()}
${(()=>{let o='';const c=[217,271,325,379];for(let a=0;a<4;a++)for(let b=0;b<4;b++){if(a===b)continue;const y=74+((a*4+b)%6)*3;o+=`<path class="acst nofill" d="M${c[a]} 64 C ${c[a]} ${y+18}, ${c[b]} ${y+18}, ${c[b]} 64"/>`}return o})()}
<text class="tk ac" x="196" y="20">every unit feeds every unit, itself included</text>
<rect class="ocf" x="196" y="104" width="212" height="34" rx="3"/>
<text class="lb" x="302" y="120" text-anchor="middle">uniselector: 25 positions per unit</text>
<text class="tk mut" x="302" y="133" text-anchor="middle">contacts wired from a table of random numbers</text>
<text class="tk pl" x="196" y="154">a needle past its limit trips the stepping switch and</text>
<text class="tk pl" x="196" y="168">redraws the coefficients — search, not learning</text>
<text class="tk mut" x="12" y="130">built from RAF surplus</text>
<text class="tk mut" x="12" y="144">bomb-control gear, 1948;</text>
<text class="tk mut" x="12" y="158">25⁴ ≈ 3.9×10⁵ settings,</text>
<text class="tk mut" x="12" y="172">and 25ⁿ for n units</text>
</svg>`,

/* ----------------------------------------------------------------- game --- */

randpd: () => `<svg viewBox="0 0 420 184" class="dia" role="img" aria-label="The payoff table Flood and Dresher put in front of Alchian and Williams at RAND in January 1950, in pennies and asymmetric between the two players, together with the tally of the hundred plays and the totals actually paid out">
<text class="lb" x="12" y="16">the table as shown, in pennies (AA, JW)</text>
<line class="ax" x1="96" y1="24" x2="96" y2="122"/>
<line class="ax" x1="12" y1="46" x2="240" y2="46"/>
<line class="ax" x1="168" y1="24" x2="168" y2="122"/>
<line class="ax" x1="12" y1="84" x2="240" y2="84"/>
<text class="tk mut" x="132" y="40" text-anchor="middle">JW: 1 (defect)</text>
<text class="tk mut" x="204" y="40" text-anchor="middle">JW: 2 (cooperate)</text>
<text class="tk mut" x="54" y="70" text-anchor="middle">AA: 1 (defect)</text>
<text class="tk mut" x="54" y="108" text-anchor="middle">AA: 2 (cooperate)</text>
<text class="lb oc" x="132" y="70" text-anchor="middle">0 , ½</text>
<text class="lb" x="204" y="70" text-anchor="middle">1 , −1</text>
<text class="lb" x="132" y="108" text-anchor="middle">−1 , 2</text>
<text class="lb ac" x="204" y="108" text-anchor="middle">½ , 1</text>
<text class="tk oc" x="12" y="138">defection strictly dominates for both</text>
<text class="tk ac" x="12" y="152">and (½,1) beats (0,½) for both</text>
<text class="tk pl" x="12" y="170">— a genuine dilemma, and not symmetric</text>
<line class="ax" x1="266" y1="120" x2="410" y2="120"/>
<rect class="acf" x="268" y="48" width="26" height="72"/>
<rect class="mut2f" x="300" y="103" width="26" height="17"/>
<rect class="ocf" x="332" y="98" width="26" height="22"/>
<rect class="ocf" x="364" y="111" width="26" height="9"/>
<text class="tk ac" x="281" y="42" text-anchor="middle">60</text>
<text class="tk mut" x="313" y="97" text-anchor="middle">14</text>
<text class="tk oc" x="345" y="92" text-anchor="middle">18</text>
<text class="tk oc" x="377" y="105" text-anchor="middle">8</text>
<text class="tk mut" x="281" y="134" text-anchor="middle">CC</text>
<text class="tk mut" x="313" y="134" text-anchor="middle">DD</text>
<text class="tk mut" x="345" y="134" text-anchor="middle">AA-D</text>
<text class="tk mut" x="377" y="134" text-anchor="middle">JW-D</text>
<text class="tk mut" x="266" y="152">100 plays, 25 January 1950</text>
<text class="tk pl" x="266" y="170">paid out: AA 40¢, JW 65¢ (theory: 0¢, 50¢)</text>
</svg>`,

ultimatumbooth: () => `<svg viewBox="0 0 420 180" class="dia" role="img" aria-label="The Cologne ultimatum protocol: proposer and responder seated apart in a classroom, a written demand carried between them by the experimenter, a single accept-or-reject mark, cash settlement, and the observed distribution of offers with its mode at an even split">
<rect class="mut2f" x="12" y="26" width="92" height="64" rx="3"/>
<text class="lb" x="58" y="44" text-anchor="middle">proposer</text>
<text class="tk mut" x="58" y="60" text-anchor="middle">writes a demand</text>
<text class="tk mut" x="58" y="74" text-anchor="middle">on a paper form</text>
<text class="tk pl" x="58" y="86" text-anchor="middle">pie c = 4–10 DM</text>
<path class="ocst" d="M108 58 L 146 58" marker-end="url(#ar)"/>
<text class="tk oc" x="127" y="50" text-anchor="middle">carried by hand</text>
<rect class="mut2f" x="150" y="26" width="92" height="64" rx="3"/>
<text class="lb" x="196" y="44" text-anchor="middle">responder</text>
<text class="tk mut" x="196" y="60" text-anchor="middle">marks accept</text>
<text class="tk mut" x="196" y="74" text-anchor="middle">or reject — once</text>
<text class="tk pl" x="196" y="86" text-anchor="middle">reject ⇒ both get 0</text>
<text class="tk mut" x="12" y="108">42 economics students, two sessions a week apart,</text>
<text class="tk mut" x="12" y="122">roles assigned at random, pairs anonymous, cash settled</text>
<text class="tk ac" x="12" y="142">the assumption that cannot be controlled: whether the</text>
<text class="tk ac" x="12" y="156">subjects believe the anonymity they are promised</text>
<text class="tk pl" x="12" y="172">double-blind designs later lowered offers, so some did not</text>
<line class="ax" x1="266" y1="120" x2="410" y2="120"/>
<line class="ax" x1="266" y1="120" x2="266" y2="24"/>
${(()=>{const h=[1,1,2,3,3,9,2,0,0,0];let o='';for(let i=0;i<10;i++){const x=268+i*14,ht=h[i]*10;o+=`<rect class="${h[i]===9?'acf':'ocf'}" x="${x}" y="${120-ht}" width="12" height="${ht}"/>`}return o})()}
<text class="tk mut" x="266" y="134">0</text>
<text class="tk ac" x="338" y="134" text-anchor="middle">50%</text>
<text class="tk mut" x="410" y="134" text-anchor="end">100%</text>
<text class="tk mut" x="266" y="20">offers, naive session</text>
<text class="tk pl" x="266" y="156">mode = exact split;</text>
<text class="tk pl" x="266" y="170">mean offer ≈ 35%</text>
</svg>`,

/* ------------------------------------------------------------------- ml --- */

marki: () => `<svg viewBox="0 0 420 182" class="dia" role="img" aria-label="The Mark I Perceptron as hardware: a twenty by twenty array of cadmium sulphide photocells, a patch panel of randomly chosen sensory-to-association connections, association units, and adjustable weights realised as potentiometers whose shafts are turned by electric motors under error control">
<text class="lb" x="12" y="16">S-units</text>
${(()=>{let o='';for(let r=0;r<7;r++)for(let c=0;c<7;c++){o+=`<rect class="mut2f" x="${12+c*12}" y="${24+r*12}" width="10" height="10"/>`}return o})()}
<text class="tk mut" x="12" y="124">20 × 20 = 400</text>
<text class="tk mut" x="12" y="138">CdS photocells</text>
<text class="tk pl" x="12" y="152">viewing a lit</text>
<text class="tk pl" x="12" y="166">20×20 card</text>
<path class="ocst" d="M100 66 L 124 66" marker-end="url(#ar)"/>
<rect class="mut2f" x="128" y="30" width="70" height="72" rx="3"/>
<text class="lb ac" x="163" y="48" text-anchor="middle">patch</text>
<text class="lb ac" x="163" y="62" text-anchor="middle">panel</text>
<text class="tk mut" x="163" y="80" text-anchor="middle">S→A wiring</text>
<text class="tk mut" x="163" y="94" text-anchor="middle">chosen at random</text>
<text class="tk pl" x="163" y="120" text-anchor="middle">fixed: never</text>
<text class="tk pl" x="163" y="134" text-anchor="middle">adjusted by training</text>
<path class="ocst" d="M202 66 L 224 66" marker-end="url(#ar)"/>
${(()=>{let o='';for(let i=0;i<5;i++){o+=`<circle class="acd" cx="236" cy="${36+i*16}" r="5"/>`}return o})()}
<text class="tk ac" x="228" y="26">≈512 A-units</text>
<text class="tk mut" x="212" y="128">threshold</text>
<text class="tk mut" x="212" y="142">summers</text>
<path class="ocst" d="M246 66 L 268 66" marker-end="url(#ar)"/>
<circle class="ocst2 nofill" cx="290" cy="66" r="14"/>
<text class="tk oc" x="290" y="70" text-anchor="middle">M</text>
<line class="ax" x1="304" y1="66" x2="330" y2="66"/>
<circle class="acst nofill" cx="338" cy="66" r="9"/>
<text class="tk ac" x="338" y="70" text-anchor="middle">Ω</text>
<text class="tk oc" x="268" y="98">motor turns the shaft;</text>
<text class="tk oc" x="268" y="112">the weight is an angle</text>
<text class="tk mut" x="268" y="132">one motor-driven pot</text>
<text class="tk mut" x="268" y="146">per adjustable weight</text>
<path class="ocst" d="M348 66 L 372 66" marker-end="url(#ar)"/>
${(()=>{let o='';for(let i=0;i<3;i++){o+=`<circle class="pld" cx="386" cy="${50+i*16}" r="5"/>`}return o})()}
<text class="tk pl" x="368" y="34">8 R-units</text>
<text class="tk mut" x="12" y="178">Cornell Aeronautical Laboratory, 1960. Error drives the motors; nothing else changes.</text>
</svg>`,

imagenetpipe: () => `<svg viewBox="0 0 420 184" class="dia" role="img" aria-label="The ImageNet evaluation pipeline: a hand-labelled training set, a validation split, a test split whose labels the organisers withhold, submission of five ranked guesses per image, server-side top-five scoring, and the audits that later measured the instrument's own error">
<rect class="acf" x="12" y="22" width="92" height="40" rx="3"/>
<text class="lb" x="58" y="40" text-anchor="middle">train</text>
<text class="tk mut" x="58" y="54" text-anchor="middle">1.28 M images</text>
<rect class="mut2f" x="12" y="68" width="92" height="34" rx="3"/>
<text class="lb" x="58" y="84" text-anchor="middle">validation</text>
<text class="tk mut" x="58" y="97" text-anchor="middle">50 000</text>
<rect class="plf" x="12" y="108" width="92" height="40" rx="3"/>
<text class="lb" x="58" y="124" text-anchor="middle">test</text>
<text class="tk pl" x="58" y="138" text-anchor="middle">100 000, labels held</text>
<path class="ocst" d="M108 42 L 136 42" marker-end="url(#ar)"/>
<path class="ocst" d="M108 128 L 136 128" marker-end="url(#ar)"/>
<rect class="mut2f" x="140" y="56" width="98" height="58" rx="3"/>
<text class="lb ac" x="189" y="76" text-anchor="middle">entrant model</text>
<text class="tk mut" x="189" y="92" text-anchor="middle">1 000 classes in,</text>
<text class="tk mut" x="189" y="106" text-anchor="middle">5 ranked guesses out</text>
<path class="ocst" d="M242 85 L 268 85" marker-end="url(#ar)"/>
<rect class="acf" x="272" y="56" width="136" height="58" rx="3"/>
<text class="lb" x="340" y="76" text-anchor="middle">organisers' scoring server</text>
<text class="tk mut" x="340" y="92" text-anchor="middle">top-5 error; one or two</text>
<text class="tk mut" x="340" y="106" text-anchor="middle">submissions permitted</text>
<text class="tk ac" x="140" y="34">2012: 15.3% vs 26.2% for second place</text>
<text class="tk mut" x="140" y="46">prior years had moved 1–2 points</text>
<text class="tk pl" x="12" y="164">Instrument checks run later: ≈5.8% of validation labels wrong; 120 of the 1 000 classes are dog</text>
<text class="tk pl" x="12" y="178">breeds; a freshly collected test set cost every model 11–14 points with the ranking preserved.</text>
</svg>`

};
