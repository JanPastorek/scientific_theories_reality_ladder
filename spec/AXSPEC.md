# Adding axioms, hypotheses and predictions to an existing sheet

You are extending an existing atlas of scientific theories written for a philosopher of science.
The theory sheets already exist. Your job is to add three new sections to the ones you are assigned.

## Output shape

One file, e.g. `/home/claude/atlas/ax-1.js`:

```js
const AX_1 = {

qm: {
 axioms:[ {n:'...', s:R`...`, t:'...'}, ... ],
 hyps:[   {h:'...', k:'core', b:'...'}, ... ],
 preds:[  {p:'...', num:R`...`, st:'confirmed', b:'...'}, ... ]
},

sr: { ... }

};
```

## Hard rules

- `const R = String.raw` is already defined globally. **All TeX is written as `R\`...\`` with single backslashes.** Never `"\\frac"`.
- Prose fields are ordinary JS strings. If the text contains an apostrophe, use a double-quoted string. Never put a backtick inside a template literal.
- **Never use `\boldsymbol`** (not bundled) — use `\vec{}` or `\mathbf{}`. `\text{}`, `\begin{cases}`, `\begin{aligned}`, `\begin{pmatrix}` are all fine.
- Inline maths inside prose uses `\(...\)`, escaped for the JS string as `\\(...\\)`.
- `**bold**` and `*italic*` render; nothing else does.
- The file must pass `node --check`.

## `axioms` — 4 to 8 entries

The explicit foundational commitments, in the order a formal presentation gives them. These are the
statements the theory's content is supposed to follow *from* — not the general assumptions behind an
experiment, which the sheets already list separately.

- `n` — the postulate's name, e.g. 'Equivalence principle', 'Second law (Kelvin form)'.
- `s` — a single formal statement, TeX, e.g. R`\nabla_\mu T^{\mu\nu}=0`. Where no formalism exists,
  a single flat sentence in plain words is correct.
- `t` — 30 to 80 words: what work it does, whether it is independent of the others, who has tried to
  drop or derive it, and what happens if you do.

Where the theory has a genuine axiomatisation, give the real one and name it (Dirac–von Neumann,
Wightman, Kolmogorov, the Hodgkin–Huxley formulation, Caratheodory's thermodynamics, the Hardy–Weinberg
idealisation, the Price equation as an identity). Where it has none — most of biology, psychology,
the social sciences — say so plainly in the first entry's `t` and present what follows as a
*reconstruction* of the field's constitutive commitments, not as its own axioms. That distinction is
exactly what the reader wants.

## `hyps` — 4 to 8 entries

The substantive empirical claims made over and above the framework, each with its epistemic kind:

- `core` — the theory does not survive its falsity.
- `bridge` — connects a theoretical term to something measurable (a correspondence rule).
- `auxiliary` — needed to derive predictions but independently revisable. This is Duhem's category
  and it is the one philosophers most want made explicit.
- `heuristic` — guides research, not itself under test.
- `abandoned` — historically load-bearing, now rejected. Say what replaced it.

Include at least one `auxiliary` for every theory, and an `abandoned` wherever the history supports
one (caloric, the ether, the aether drag, blending inheritance, protoplasm, instruction theories of
antibody formation, the fixed continents, phlogiston, vital force, the gene as a bead on a string).
`b` is 40 to 100 words.

## `preds` — 5 to 8 entries

- `p` — the prediction, stated as it was made where that is historically true.
- `num` — the number with units, as TeX. `'—'` if genuinely non-quantitative.
- `st` — one of:
  - `confirmed` — predicted in advance (or independently), then measured to agree.
  - `retrodiction` — the phenomenon was already known and the theory accounts for it. **Say so.**
    Mercury's perihelion is a retrodiction; light bending is a prediction. The Lamb shift was
    measured first. The atlas exists partly to keep this distinction visible, so do not let a
    retrodiction pass as a prediction.
  - `open` — a definite untested prediction, with the experiment that would test it.
  - `failed` — predicted and refuted; say what was done about it.
  - `untestable` — a consequence with no feasible test; give the reason.
- `b` — 40 to 100 words: who tested it, when, to what precision, and what result would have falsified it.

At least one entry per theory must be `retrodiction`, `open` or `failed` unless the theory genuinely
has none.

## Standard

Real numbers with real precision, real names, real dates. Never "very accurately". If you are not
confident of a figure, hedge in the prose or leave it out; do not invent one. Read the existing
theory object before writing so that your equations, symbols and claims match what the sheet
already says.
