# Reduction Ladder Atlas — contributor spec

You are writing one JavaScript data file for an existing atlas of scientific theories,
aimed at a **philosopher of science**. The atlas already contains 32 theory sheets
(quantum gravity → sociology) written at a high standard. Your file must match that
standard exactly. It is plain ES5/ES2015 JavaScript loaded by `<script>` tags in order;
no modules, no imports, no bundler.

## 0. Non-negotiable conventions

- The global `const R = String.raw` is already defined before your file loads.
  **Every TeX string must be written as `R\`...\`` with single backslashes.**
  Never use `"\\frac"`. Never nest a backtick inside a template literal.
- Apostrophes: prefer double-quoted JS strings when the text contains `'`
  (e.g. `who: "'t Hooft and Veltman"`). Do not write `\'` inside a template literal.
- **Never use `\boldsymbol`** — MathJax's bold extension is not bundled. Use `\vec{}`
  or `\mathbf{}` instead. Also avoid `\cancel`, `\bbox`, `\require`, `\text{...}` is fine,
  `\begin{pmatrix}`/`\begin{aligned}`/`\begin{cases}` are fine.
- Inline maths inside prose fields uses `\(...\)`. Do **not** use `$`.
- A tiny markdown subset is rendered in prose fields: `**bold**` and `*italic*`. Nothing else.
  No lists, no links, no headings inside prose fields.
- Unicode is fine and encouraged in prose (×, →, ≈, μ, Å, ⁻¹, ≪, ⟨⟩, °C).
- No trailing commas after the last property of an object is fine either way, but the file
  must parse under `node --check`.

## 1. Voice and standard

This is not an encyclopedia and not a textbook summary. The existing sheets:

- state what the theory **actually claims**, including where the standard story is wrong;
- give **real numbers with units and precision** ("S = 2.42 ± 0.20", "0.5%", "10 T/m",
  "~10⁻²⁰ s", "36 μg/l"), never "very small" or "extremely accurate";
- name **who did what, when, and what they got wrong**;
- are candid about what is **contested, idealised, or unproven**, and say who disputes it;
- never inflate a coarse-graining into a derivation, and flag it when a discipline
  routinely does.

Fabricating a number is worse than omitting one. If you are not confident of a figure,
either give it with a hedge in the prose ("of order", "reported values range 2–8") or
leave it out. Do not invent citations, dates or author attributions.

Target length per theory object: roughly 1300–1900 words across all fields.
Target length per history object: roughly 1600–2200 words.

## 2. The theory object

Each theory is one object in an exported array:

```js
const YOUR_ARRAY_NAME = [
{
 id:'shortid',                       // lowercase, no spaces; must match what you were told
 n:'Display Name',                   // title case, no subtitle
 aka:'Alternative names · founding figures',   // one line, may use ' · ' separators
 dom:'physics',                      // one of: physics chemistry biology mind social integrative meta
 tier:3,                             // integer; you will be told which
 years:'1915 – 1919',                // formulation period
 status:'confirmed',                 // confirmed | well-confirmed | effective | contested | speculative | framework
 scale:{len:'10⁻⁹ – 10⁻³ m', en:'10⁻⁹ GeV', lg:6},   // lg = rough log10 span, integer, only used for sorting
 one:'One sentence, 30–60 words, saying what the theory is and what makes it distinctive. No hype.',
 onto:'What there is according to this theory. 60–120 words. Be explicit where the ontology is contested.',
 state:'The state space: what mathematical object represents a state, and what structure it carries. 50–110 words.',

 axioms:[ /* see §3 */ ],
 hyps:[   /* see §4 */ ],
 preds:[  /* see §5 */ ],

 eqs:[
  {tex:R`E=mc^2`, name:'Short name of the equation',
   gloss:'40–90 words. What the equation says, what each side does, the non-obvious point, the common misreading.'}
  // 4–7 equations. Include the defining equation, the key derived one, a limit/expansion,
  // and where relevant a quantity that is measured rather than derived.
 ],
 concepts:[
  {t:'Concept name', d:'50–100 words. Definition, then the thing textbooks get wrong about it.'}
  // 5–7 concepts.
 ],
 results:[
  {n:'Result name (year if apt)', s:'One or two sentences with the actual number and its precision.'}
  // 5–7 results.
 ],
 valid:{
  holds:'The regime where it works, with numbers. 30–70 words.',
  breaks:'Where and why it fails, with numbers. 30–70 words.'
 },
 detail:{
  deriv:[
   {h:'Heading of a derivation or structural point', b:'160–320 words. Do the actual reasoning; show the step where an assumption enters.'}
   // 2–4 entries.
  ],
  deeper:[
   {h:'Heading', b:'160–320 words. Foundational or interpretive depth: competing formulations, what a theorem actually rules out, an unresolved structural issue.'}
   // 1–3 entries.
  ]
 },
 phil:{
  stance:'60–120 words. The considered position on what this theory is, epistemically. Take a view; do not survey.',
  disputes:['One live dispute, 20–50 words, naming the parties.', /* 3–5 of them */],
  read:['Author, *Title*', /* 4–6 items; real works only */]
 },
 fig:'figkey'    // key into the FIG map; you supply the SVG (see §7)
}
];
```

## 3. `axioms` — axioms & postulates (NEW, required)

The explicit foundational commitments, in the order a formal presentation would give them.
Not "assumptions in general" (that is the separate assumption ledger) — these are the
statements from which the theory's content is supposed to follow.

```js
axioms:[
 {n:'Postulate name',
  s:R`Formal statement. TeX allowed and encouraged: \hat H|\psi\rangle = i\hbar\partial_t|\psi\rangle`,
  t:'30–80 words. What work this postulate does, whether it is independent of the others, who has tried to drop or derive it, and what happens if you do.'}
]
```

- 4–8 entries.
- For a theory with a genuine axiomatisation (QM, thermodynamics, probability, GR,
  set theory, game theory), give the real axioms and name the axiomatisation
  (Dirac–von Neumann, Kolmogorov, ZFC, von Neumann–Morgenstern, Wightman).
- For a theory with no axiomatisation (most of biology, psychology, geology), say so in
  the first entry's `t` and give the **constitutive commitments** a practitioner would
  defend — clearly labelled as reconstruction, not as the field's own axioms.
  This distinction is exactly what the reader cares about.
- `s` may be a plain sentence where no formalism exists. Keep it a single statement.

## 4. `hyps` — theoretical hypotheses (NEW, required)

Substantive empirical claims the theory makes over and above its axioms, each with an
epistemic kind. These are what a philosopher would call the theory's *hypotheses* as
distinct from its *framework*.

```js
hyps:[
 {h:'The hypothesis, stated as a claim that could be false.',
  k:'core',      // core | bridge | auxiliary | heuristic | abandoned
  b:'40–100 words. When and why it was introduced, what evidence bears on it, and — for auxiliary and heuristic ones — what would happen to the theory if it went.'}
]
```

Kind meanings, use them strictly:
- `core` — the theory does not survive its falsity.
- `bridge` — connects theoretical terms to measurable ones (a correspondence rule).
- `auxiliary` — needed to derive predictions but independently revisable (Duhem's point).
- `heuristic` — guides research, not itself under test.
- `abandoned` — historically load-bearing, now rejected; say what replaced it.

4–8 entries. Include at least one `auxiliary` and, wherever the history supports it,
one `abandoned` — the abandoned ones are the most philosophically useful.

## 5. `preds` — predictions and their tests (NEW, required)

```js
preds:[
 {p:'The prediction, stated before the test where that is historically true.',
  num:R`\Delta\theta = 1.75''`,    // the number, with units; TeX; '—' if genuinely non-quantitative
  st:'confirmed',                  // confirmed | open | failed | retrodiction | untestable
  b:'40–100 words. Who tested it, when, to what precision, and what result would have falsified it. For retrodictions say plainly that the phenomenon was known first.'}
]
```

Status meanings:
- `confirmed` — predicted in advance (or independently), then measured to agree.
- `retrodiction` — the phenomenon was already known; the theory accounts for it.
  Say so. Do not disguise retrodictions as predictions; this is the single most common
  distortion in popular accounts and the atlas exists partly to correct it.
- `open` — a definite prediction not yet tested, with the experiment that would test it.
- `failed` — predicted and refuted; say what was done about it.
- `untestable` — a consequence with no feasible test; give the reason (energy scale, etc.).

5–8 entries. At least one must be `retrodiction`, `open` or `failed` unless the theory
genuinely has none.

## 6. The history object

Keyed by theory id, in a separate `HIST_n` object:

```js
const HIST_16 = {
 shortid: {
  origin:[
   {y:'1905', who:'Einstein', t:'Short vivid title of the episode',
    b:'70–160 words. What was actually done and thought, including false starts and the thing that was believed for the wrong reason.'}
   // 5–8 entries in chronological order. This is a narrative of discovery, not a timeline.
  ],
  exps:[
   {n:'Experiment name', who:'Who, where', y:'1922', fig:'appkey',   // fig may be null
    setup:'90–200 words. The actual apparatus: dimensions, materials, temperatures, field strengths, how the thing was built and run. A reader should be able to picture it.',
    meas:'50–130 words. The raw observable and the number obtained, with its uncertainty.',
    infer:'50–120 words. The inference from that number to the theoretical claim, and the step in it that is not deductive.',
    assume:'60–160 words. The auxiliary assumptions and the controls that were run to protect them. Name the assumption that could not be controlled.'}
   // 3–5 experiments per theory. At least 2 must have a `fig` key with an apparatus drawing.
  ],
  assume:[
   {a:'The assumption, stated flatly.', k:'idealisation',   // definition | empirical | idealisation | auxiliary | contested
    n:'30–80 words. Its status, how far it is from true, and what breaks if it fails.'}
   // 6–10 entries.
  ],
  notation:[
   {s:R`\hat H`, r:'H-hat', m:'40–90 words. What the symbol denotes and the distinction it is doing work to mark.', d:'J  (energy)'}
   // 7–12 entries. `r` is how to READ the symbol aloud. `d` is dimensions or units.
   // Include any symbol used anywhere in the theory object's TeX.
  ],
  worked:{
   t:'Title of a concrete calculation',
   steps:['Step 1, with the numbers. Inline TeX allowed via \\(...\\).', /* 4–7 steps */],
   a:'The answer, with units, plus one sentence on what it shows and how it compares with measurement.'
  }
 }
};
```

## 7. Figures — `FIG` entries

Each theory needs one conceptual diagram. You write it as an inline SVG-returning function
appended to a separate file that will be merged into the global `FIG` map.

```js
const FIG_EXTRA_YOURNAME = {
 figkey: () => `<svg viewBox="0 0 420 175" class="dia" role="img" aria-label="Plain description">
   ...
 </svg>`
};
const FIGCAP_EXTRA_YOURNAME = {
 figkey: 'One sentence caption, plain text, no markup, under 200 characters.'
};
```

**Colours must come only from these CSS classes** (they are theme-aware; hard-coded colours
will be invisible in dark mode):

| class | meaning |
|---|---|
| `ax` | axis / frame lines |
| `acst` `ocst` `plst` `mut2f` | stroked paths: accent-teal, ochre, plum, muted |
| `acf` `ocf` `plf` `acf2` | filled boxes: teal, ochre, plum, translucent teal |
| `acd` `ocd` `pld` `mud` | filled dots |
| `tk` | small tick labels |
| `lb` | box / node labels |
| `mut` `oc` `pl` `ac` | text colour modifiers (use as a second class: `class="lb mut"`) |
| `nofill` | stroked-only path |

Markers `url(#ar)`, `url(#ar2)`, `url(#arm)` are available for arrowheads.
Keep the viewBox height ≤ 185 and put **no text below y = 150** — captions go in `FIGCAP`.
Diagrams must show a *mechanism or structure*, not decoration: a phase diagram, a
hierarchy of scales, a feedback loop, a derivation chain, an experimental geometry.

## 8. Apparatus drawings — `APP` entries

Same rules, for the `fig` keys used in `exps`. These depict the actual instrument.

```js
const APP_EXTRA_YOURNAME = {
 appkey: () => `<svg viewBox="0 0 420 190" class="dia" role="img" aria-label="...">...</svg>`
};
```

Label the parts with `<text class="lb">` and give at least one real dimension or value
in a `tk` label. 2–4 per theory.

## 9. Relations

```js
const REL_EXTRA_YOURNAME = [
 {a:'sourceid', b:'targetid',
  kind:'limit',                 // limit | singular | eft | coarse | instantiation | constitutive | contested | analogy | upward
  param:R`v/c \to 0`,           // the controlling parameter, short, TeX
  t:'Source → Target: what the relation is, in a phrase',
  f:'70–150 words. The actual content of the relation: what is held fixed, what limit is taken, what is thrown away.',
  tex:R`\text{the governing formula}`,
  p:'70–150 words beginning with the philosophical point. Is it a Nagelian reduction? A singular limit? A coarse-graining dressed up as a derivation? Say which and why.'}
];
```

Kind meanings:
- `limit` — a smooth, well-defined limit of a parameter.
- `singular` — the limit does not exist uniformly; new structure appears at the limit point.
- `eft` — decoupling of high-energy degrees of freedom; a genuine effective theory.
- `coarse` — averaging over microstates; the upper level is defined, not derived.
- `instantiation` — the upper theory is a special case, with contingent extra structure.
- `constitutive` — upper-level entities are made of lower-level ones with no derivation of the dynamics.
- `contested` — a reduction is standardly claimed and does not survive inspection. Say who claims it.
- `analogy` — formal isomorphism without a physical dependence relation.
- `upward` — the lower level is constrained by the upper one.

Be honest about the kind. A `contested` or `coarse` where the field says `limit` is exactly
what this atlas is for.

## 10. Delivery

Write the files, then run `node --check <file>` on each and fix any error before finishing.
Report: the file paths, the ids you created, the FIG/APP/REL keys you defined, and anything
you deliberately left out.
