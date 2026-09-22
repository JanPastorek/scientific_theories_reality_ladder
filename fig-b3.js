/* Conceptual figures for the third biology batch. Colours come from CSS classes only, so both themes work. */
const FIG_EXTRA_B3 = {

clonal: () => `<svg viewBox="0 0 420 180" class="dia" role="img" aria-label="Clonal selection as a derivation chain: germline gene segments are joined at random to build a diverse naive repertoire, antigen selects one clone, the clone expands, and a feedback loop returns mutated descendants for re-selection">
<text class="lb" x="62" y="32" text-anchor="middle">germline DNA</text>
<rect class="mut2f" x="16" y="42" width="94" height="18"/>
<rect class="acf" x="20" y="45" width="11" height="12"/><rect class="acf" x="34" y="45" width="11" height="12"/><rect class="acf" x="48" y="45" width="11" height="12"/>
<rect class="ocf" x="64" y="45" width="9" height="12"/><rect class="ocf" x="76" y="45" width="9" height="12"/>
<rect class="acf2" x="90" y="45" width="16" height="12"/>
<text class="tk mut" x="62" y="74" text-anchor="middle">40 V · 23 D · 6 J</text>
<path class="ocst" d="M114 51 L 133 51" marker-end="url(#ar)"/>
<text class="tk oc" x="123" y="42" text-anchor="middle">RAG</text>
<text class="lb" x="160" y="32" text-anchor="middle">naive repertoire</text>
<line class="ax" x1="138" y1="100" x2="256" y2="100"/>
${[[146,78],[162,72],[178,80],[210,76],[226,73],[242,82]].map(([x,y])=>
`<line class="acst" x1="${x}" y1="100" x2="${x}" y2="${y}"/><circle class="mud" cx="${x}" cy="${y}" r="3.4"/>`).join('')}
<line class="ocst" x1="194" y1="100" x2="194" y2="70"/><circle class="ocd" cx="194" cy="70" r="4.6"/>
<text class="tk mut" x="188" y="116" text-anchor="middle">~10² cells each</text>
<path class="ocf" d="M252 26 l 8 8 l -8 8 l -8 -8 z"/>
<text class="lb oc" x="266" y="38">antigen</text>
<path class="ocst" d="M246 40 L 203 62" marker-end="url(#ar)"/>
<path class="ocst" d="M262 88 L 284 88" marker-end="url(#ar)"/>
<text class="tk oc" x="273" y="80" text-anchor="middle">select</text>
<text class="lb" x="346" y="56" text-anchor="middle">expanded clone</text>
<line class="ax" x1="288" y1="100" x2="408" y2="100"/>
${[292,301,310,319,328,337,346,355,364,373,382,391,400].map(x=>
`<line class="ocst" x1="${x}" y1="100" x2="${x}" y2="70"/><circle class="ocd" cx="${x}" cy="70" r="3"/>`).join('')}
<text class="tk oc" x="348" y="116" text-anchor="middle">~5×10⁷ cells in 7 days</text>
<path class="plst" d="M346 108 C 334 130, 250 132, 203 110" marker-end="url(#ar2)"/>
<text class="tk pl" x="272" y="146" text-anchor="middle">mutate at 10⁻³/base, re-select on relative affinity</text>
</svg>`,

homeostat: () => `<svg viewBox="0 0 420 180" class="dia" role="img" aria-label="A homeostatic control loop: a set point feeds a comparator, whose error signal drives an effector acting on a regulated variable; a sensor returns the measured value, a disturbance enters the variable directly, and a dashed path shows the set point itself being reset in anticipation">
<path class="plst" d="M118 4 L 118 21" marker-end="url(#ar2)"/>
<text class="lb pl" x="128" y="14">allostasis: the set point is itself reset</text>
<rect class="ocf" x="80" y="24" width="76" height="22" rx="3"/>
<text class="lb" x="118" y="39" text-anchor="middle">set point x₀</text>
<path class="ocst" d="M118 48 L 118 64" marker-end="url(#ar)"/>
<circle class="acst nofill" cx="118" cy="80" r="14"/>
<text class="lb" x="118" y="85" text-anchor="middle">−</text>
<path class="ocst" d="M133 80 L 153 80" marker-end="url(#ar)"/>
<text class="tk oc" x="143" y="72" text-anchor="middle">e</text>
<rect class="acf" x="157" y="66" width="76" height="28" rx="3"/>
<text class="lb" x="195" y="84" text-anchor="middle">effector</text>
<path class="ocst" d="M235 80 L 265 80" marker-end="url(#ar)"/>
<rect class="acf" x="268" y="66" width="100" height="28" rx="3"/>
<text class="lb" x="318" y="84" text-anchor="middle">variable x</text>
<text class="tk mut" x="305" y="112" text-anchor="middle">pH, P_aCO₂, T_core</text>
<path class="plst" d="M300 32 L 300 62" marker-end="url(#ar2)"/>
<text class="lb pl" x="308" y="34">disturbance</text>
<path class="ocst" d="M356 96 L 356 130 L 274 130" marker-end="url(#ar)"/>
<rect class="acf" x="198" y="118" width="74" height="24" rx="3"/>
<text class="lb" x="235" y="134" text-anchor="middle">sensor</text>
<path class="ocst" d="M196 130 L 118 130 L 118 96" marker-end="url(#ar)"/>
<text class="tk oc" x="210" y="150" text-anchor="middle">Δx_closed = Δx_open /(1 + G) · baroreflex G ≈ 2–4 acutely, ≈ 0 sustained</text>
</svg>`,

tinb4: () => `<svg viewBox="0 0 420 178" class="dia" role="img" aria-label="Tinbergen's four questions as a two-by-two: proximate and ultimate levels crossed with current state and historical sequence, giving causation, ontogeny, survival value and evolution">
<text class="lb" x="190" y="22" text-anchor="middle">current state</text>
<text class="lb" x="342" y="22" text-anchor="middle">historical sequence</text>
<text class="lb" x="108" y="52" text-anchor="end">proximate</text>
<text class="tk mut" x="108" y="66" text-anchor="end">(this animal)</text>
<text class="lb" x="108" y="112" text-anchor="end">ultimate</text>
<text class="tk mut" x="108" y="126" text-anchor="end">(this lineage)</text>
<rect class="acf" x="118" y="34" width="144" height="42" rx="3"/>
<text class="lb" x="190" y="54" text-anchor="middle">1 · causation</text>
<text class="tk mut" x="190" y="69" text-anchor="middle">stimulus, hormone, circuit</text>
<rect class="acf" x="270" y="34" width="144" height="42" rx="3"/>
<text class="lb" x="342" y="54" text-anchor="middle">2 · ontogeny</text>
<text class="tk mut" x="342" y="69" text-anchor="middle">how it develops</text>
<rect class="ocf" x="118" y="94" width="144" height="42" rx="3"/>
<text class="lb" x="190" y="114" text-anchor="middle">3 · survival value</text>
<text class="tk mut" x="190" y="129" text-anchor="middle">fitness vs alternatives</text>
<rect class="ocf" x="270" y="94" width="144" height="42" rx="3"/>
<text class="lb" x="342" y="114" text-anchor="middle">4 · evolution</text>
<text class="tk mut" x="342" y="129" text-anchor="middle">phylogeny of the pattern</text>
<path class="acst" d="M140 78 L 140 91" marker-end="url(#arm)"/>
<text class="tk ac" x="148" y="89">mechanism fixes what is feasible</text>
<text class="tk pl" x="210" y="150" text-anchor="middle">an answer to one question is not a rival to another</text>
</svg>`

};

const FIGCAP_EXTRA_B3 = {
 clonal: 'Clonal selection as a chain: random joining of germline segments gives a sparse naive repertoire of ~100 cells per specificity; antigen selects one clone, which expands, mutates and is re-selected.',
 homeostat: 'A regulated variable with sensor, comparator, effector and disturbance. The content of homeostasis is the loop gain G, measured by cutting the feedback path; allostasis moves the set point itself.',
 tinb4: 'Tinbergen\'s four questions: proximate and ultimate crossed with current state and historical sequence. The cells are not levels of composition, and no arrow of reduction runs between them.'
};
