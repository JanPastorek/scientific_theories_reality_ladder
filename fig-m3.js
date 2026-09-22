/* Concept figures: probability, logic, computability. Colours from CSS classes only. */
const FIG_EXTRA_M3 = {

infersplit: () => `<svg viewBox="0 0 420 148" class="dia" role="img" aria-label="Three schools of statistical inference shown as three different questions asked of the same data: a tail-area probability, a likelihood ratio between two hypotheses, and a posterior distribution over the parameter">
<text class="lb" x="10" y="16">one dataset, three questions</text>
<line class="ax" x1="10" y1="106" x2="130" y2="106"/>
<path class="acst nofill" d="M10 104 C 40 104, 52 46, 70 46 C 88 46, 100 104, 130 104"/>
<path class="acf" d="M104 104 C 114 104, 122 84, 130 104 Z"/>
<text class="tk ac" x="10" y="124">P(data or worse | H₀)</text>
<text class="tk mut" x="10" y="138">Fisher: a tail area</text>
<line class="ax" x1="150" y1="106" x2="270" y2="106"/>
<path class="acst nofill" d="M150 104 C 172 104, 178 56, 194 56 C 210 56, 216 104, 238 104"/>
<path class="ocst nofill" d="M182 104 C 204 104, 210 40, 226 40 C 242 40, 248 104, 270 104"/>
<line class="plst" x1="210" y1="26" x2="210" y2="106"/>
<text class="tk pl" x="214" y="34">obs</text>
<text class="tk oc" x="150" y="124">L(H₁)/L(H₀)</text>
<text class="tk mut" x="150" y="138">likelihoodist: a ratio</text>
<line class="ax" x1="290" y1="106" x2="410" y2="106"/>
<path class="mut2" d="M290 96 L 410 96"/>
<path class="ocst nofill" d="M290 100 C 318 100, 326 62, 342 62 C 358 62, 372 100, 410 100"/>
<path class="acst2 nofill" d="M300 102 C 330 102, 336 34, 352 34 C 368 34, 378 102, 400 102"/>
<text class="tk mut" x="292" y="92">prior</text>
<text class="tk ac" x="290" y="124">P(θ | data)</text>
<text class="tk mut" x="290" y="138">Bayes: a distribution</text>
</svg>`,

godelloop: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Gödel numbering and the diagonal construction: syntax is coded as arithmetic, provability becomes an arithmetical predicate, and the fixed-point lemma produces a sentence asserting its own unprovability">
<rect class="acf" x="14" y="26" width="112" height="26" rx="3"/>
<text class="lb" x="70" y="43" text-anchor="middle">syntax: formulas</text>
<rect class="ocf" x="14" y="86" width="112" height="26" rx="3"/>
<text class="lb" x="70" y="103" text-anchor="middle">numbers: ⌜φ⌝</text>
<path class="ocst" d="M70 54 L 70 82" marker-end="url(#ar)"/>
<text class="tk oc" x="76" y="72">coding</text>
<rect class="acf" x="164" y="56" width="120" height="26" rx="3"/>
<text class="lb" x="224" y="73" text-anchor="middle">Prov(x) arithmetical</text>
<path class="acst" d="M128 96 C 146 96, 150 74, 162 70" marker-end="url(#ar)"/>
<rect class="plst2 nofill" x="306" y="42" width="102" height="54" rx="3"/>
<text class="lb pl" x="357" y="62" text-anchor="middle">G ⟷ ¬Prov(⌜G⌝)</text>
<text class="tk pl" x="357" y="80" text-anchor="middle">fixed point</text>
<path class="plst" d="M286 70 L 304 70" marker-end="url(#ar)"/>
<path class="plst nofill" d="M408 88 C 420 112, 340 120, 336 100" marker-end="url(#ar)"/>
<text class="tk mut" x="14" y="132">If T is consistent and can represent recursive functions, T proves neither G nor ¬G.</text>
</svg>`,

classmap: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="Nested complexity classes from P up to PSPACE, with NP and coNP overlapping, NP-complete problems on the boundary, and the containments that are known versus conjectured">
<rect class="mut2 nofill" x="14" y="18" width="392" height="112" rx="4"/>
<text class="tk mut" x="20" y="32">PSPACE</text>
<rect class="ocf" x="34" y="40" width="180" height="76" rx="4"/>
<text class="tk oc" x="42" y="54">NP</text>
<rect class="ocf" x="150" y="40" width="180" height="76" rx="4"/>
<text class="tk oc" x="322" y="54" text-anchor="end">coNP</text>
<rect class="acf" x="140" y="62" width="90" height="34" rx="3"/>
<text class="lb" x="185" y="83" text-anchor="middle">P</text>
<circle class="pld" cx="70" cy="96" r="4"/>
<text class="tk pl" x="78" y="100">SAT, NP-complete</text>
<circle class="acd" cx="185" cy="104" r="3.5"/>
<text class="tk ac" x="192" y="112">primes (2002)</text>
<line class="plst" x1="230" y1="62" x2="230" y2="96"/>
<text class="tk mut" x="352" y="90">BQP ⊄ known</text>
<text class="tk mut" x="14" y="146">Known: P ⊆ NP ∩ coNP ⊆ PSPACE. Every separation in that chain is open.</text>
</svg>`

};
const FIGCAP_EXTRA_M3 = {
 infersplit: 'The three schools do not disagree about the data or the arithmetic: they compute different quantities, answering different questions, and the disagreement is about which question inference should ask.',
 godelloop: 'Gödel’s construction in one picture: code syntax as arithmetic, express provability as an arithmetical predicate, then build a sentence that says of itself that it is not provable.',
 classmap: 'The complexity landscape, drawn as it is known rather than as it is believed: every containment shown is proved, and every one of the corresponding separations remains open.'
};
