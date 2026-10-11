# The Reduction Ladder

An atlas of fifty scientific theories, from candidate quantum gravity to sociology, built for
philosophy of science rather than for revision. It is a static site: open `index.html` and it runs.
No build step, no framework, no server.

## What is on each sheet

| Section | What it holds |
|---|---|
| Ontology & state space | what the theory says there is, and what represents a state |
| **Axioms & postulates** | the foundational commitments, numbered; for unaxiomatised fields, an explicit reconstruction labelled as such |
| Core equations | with a gloss on what each one says and the common misreading |
| Notation | every symbol, how to read it aloud, what it denotes, its dimensions |
| Figure | a schematic of the mechanism or structure |
| Key concepts | definitions, plus what textbooks get wrong about them |
| **Hypotheses** | the empirical claims, each tagged `core` · `bridge` · `auxiliary` · `heuristic` · `abandoned` |
| How it was found | the discovery narrative, including the false starts |
| The experiments | apparatus drawings, procedure, the number obtained, the inference, and the assumptions that were controlled — and the one that could not be |
| What is assumed | an assumption ledger tagged `definition` · `empirical` · `idealisation` · `auxiliary` · `contested` |
| Main results | with real numbers and real precision |
| **Predictions & their tests** | each tagged `confirmed` · `retrodiction` · `open` · `failed` · `untestable`. Retrodictions are labelled as retrodictions |
| Worked example | a calculation you can follow with a pencil |
| Relations in / out | typed links to the theories above and below |
| Derivations & deeper structure | the reasoning, with the step where an assumption enters |
| Philosophical position | a stated view, the live disputes, and further reading |

## The relation map

The map is the landing view, because the typed arrows between theories are the point and a sheet
is what you open from one. It draws every theory as a node and every inter-theory relation as an
edge, typed by what kind of relation it actually is:

- **limit** — a regular expansion in a small dimensionless parameter
- **singular** — the limit does not exist pointwise, and the interesting physics lives where it fails
- **eft** — heavy degrees of freedom integrated out, with a computable error
- **coarse-grain** — degrees of freedom averaged over; the upper level is defined, not derived
- **instantiation** — a special case, with contingent extra structure
- **constitutive** — composition without a derivation of the dynamics
- **contested** — a standard textbook reduction claim that the literature does not support
- **analogy** — shared mathematics with no dependence relation
- **upward** — the lower level constrained by the upper one

The point of the typing is that these are not the same animal, and calling them all "reduction"
hides most of what is interesting.

## Search

Press `/` anywhere, or use the box in the header. The index covers theory names, concepts,
equations, axioms, hypotheses, predictions, experiments, people, assumptions, notation, worked
examples, disputes, further reading and every relation. Arrow keys navigate, Enter opens, Escape closes.

## Layout

```
index.html        the atlas — opens on the relation map; the Sheets tab, or a #theory-id in
                  the URL, opens an individual sheet
print.html        A4 print build — open and print to PDF
map.html          A3 wall chart of the relation map
app.js            rendering, the relation map, and the search index
print.js map.js   the two print builds
data-*.js         theory objects
ax-*.js           axioms, hypotheses and predictions for the earlier sheets
hist-*.js         discovery histories, experiments, assumption ledgers, notation, worked examples
rel-*.js          typed inter-theory relations
figures.js        concept diagrams          fig-*.js   more of them
apparatus.js      instrument drawings       app-*.js   more of them
lib/tex-svg.js    MathJax 3, bundled so the page needs no CDN
spec/             the schema every contributor file follows
```

Every diagram is inline SVG whose colours come from CSS custom properties, so light and dark
themes both work and nothing is a raster image. Maths renders through a local MathJax bundle;
the only external request the page makes is for its two webfonts, and it degrades to system
fonts without them.

## Publishing this on GitHub Pages

1. Create a repository and push these files to `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push. The included workflow (`.github/workflows/pages.yml`) publishes the repository root as-is.

There is no build step — the workflow uploads the directory unchanged. `.nojekyll` is present so
that GitHub serves every file, including any beginning with an underscore.

To host it anywhere else, copy the directory to any static host, or open `index.html` from disk.

## Adding a theory

Read `spec/SPEC.md`. It defines the theory object, the history object, the figure and apparatus
conventions, and the relation schema, and it states the standard: real numbers with real
precision, named people and dates, honesty about what is contested, and no coarse-graining
described as a derivation.

## Caveats

Written with care and not peer-reviewed. Numbers are given with the precision claimed by their
sources; where a value is disputed the sheet says so rather than picking a side. Corrections are
the most useful thing anyone can contribute.
