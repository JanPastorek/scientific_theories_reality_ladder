const REL_EXTRA_M3 = [

{a:'logic',b:'prob',kind:'constitutive',param:R`(\Omega,\mathcal{F},P)`,
 t:'Logic → Probability: a measure on an algebra of events',
 f:'Kolmogorov\'s 1933 construction makes probability a normalised measure on a σ-algebra, which settles the mathematics completely and the interpretation not at all. Cox\'s theorem is often cited as deriving the same calculus from qualitative desiderata about degrees of belief; the derivation needs a differentiability assumption that Halpern showed to be doing real work, and without it there are finite counterexamples.',
 tex:R`P(\Omega)=1,\ P(A)\ge0,\ P\!\left(\bigcup_i A_i\right)=\sum_i P(A_i)\ \text{(disjoint)}`,
 p:'The gap between the formalism and its interpretation is the widest in any mature part of mathematics, and it is not a philosopher\'s invention: frequentists, Bayesians and propensity theorists all use the same axioms and disagree about what a probability statement asserts, which shows that the axioms fix the syntax and leave the semantics open. Every downstream dispute in this atlas about statistical inference traces to this point.'},

{a:'prob',b:'statmech',kind:'contested',param:R`\text{measure on }\Gamma`,
 t:'Probability → Statistical mechanics: whose probabilities, over what?',
 f:'Equilibrium statistical mechanics assigns the microcanonical measure to the energy shell and computes averages. Nothing in the mechanics justifies that choice: ergodicity is false for realistic systems, was never proved for any, and would anyway license only infinite-time averages rather than the ensemble averages actually used. The measure is instead defended by typicality arguments, by indifference, or by Jaynes\' maximum-entropy inference — three incompatible defences.',
 tex:R`\langle A\rangle=\int_\Gamma A(x)\rho(x)dx,\qquad \rho_{\rm mc}\propto\delta(H(x)-E)`,
 p:'The most successful quantitative theory in science rests on a probability assignment with no agreed justification. On the Boltzmannian reading the probabilities are objective facts about phase-space volume and the Past Hypothesis; on the Jaynesian reading they are credences and the second law is a fact about inference, which makes it awkward that engines actually run. This is not a technicality awaiting cleanup — it is where the foundations of thermodynamics are still being argued.'},

{a:'prob',b:'qm',kind:'constitutive',param:R`P(a)=\langle\psi|\hat P_a|\psi\rangle`,
 t:'Probability → Quantum mechanics: a measure whose interpretation is the interpretation',
 f:'Gleason\'s theorem shows that for Hilbert spaces of dimension three or more, the Born rule is the unique probability measure on the lattice of projections. So the *form* of the quantum probabilities is forced by the structure, given that there are probabilities at all. What they are probabilities *of* varies by interpretation: frequencies of outcomes, branch weights, credences, or propensities.',
 tex:R`\mu(\hat P)=\mathrm{Tr}(\rho\hat P)\ \text{is the unique frame function for}\ \dim\mathcal H\ge3`,
 p:'A rare case where a mathematical theorem constrains a metaphysical dispute without settling it. Everettians need probability where every outcome occurs, and the Deutsch–Wallace decision-theoretic derivation is an attempt to supply it; QBists take the rule as a normative constraint on an agent\'s gambling; Bohmians get it from equilibrium in the initial distribution. Each pays a different price, and Gleason charges none of them.'},

{a:'prob',b:'med',kind:'constitutive',param:R`\text{randomisation}\Rightarrow \text{exchangeability}`,
 t:'Probability → Medicine: what randomisation actually buys',
 f:'Randomisation does not guarantee balanced groups in any particular trial — imbalance on some covariate is certain across enough covariates. What it buys is a known distribution for the test statistic under the null, and the elimination of allocation bias by the person enrolling patients. Fisher\'s justification is the permutation distribution; the guarantee is about the long-run behaviour of the procedure, not about the trial in front of you.',
 tex:R`P(\text{allocation}) \text{ known} \Rightarrow \text{exact null distribution by permutation}`,
 p:'Worth stating carefully because the clinical literature routinely overclaims. Deaton and Cartwright\'s critique is not that trials are bad but that a valid internal estimate of an average effect in one population does not transfer without a further argument about the causal structure of the target population — and that argument is never supplied by the randomisation.'},

{a:'prob',b:'psych',kind:'contested',param:R`p<0.05`,
 t:'Probability → Psychology: an inference procedure and its failure rate',
 f:'Null-hypothesis significance testing is a hybrid of Fisher\'s evidential p-value and Neyman–Pearson\'s error-rate discipline, and the hybrid is incoherent: the p-value is treated as evidence, while the 0.05 threshold is justified by long-run error control that only holds if the test was specified in advance. With flexible stopping, covariate choice and outcome selection, the actual false-positive rate under standard practice exceeds 60%.',
 tex:R`\text{Pr(replication)}\ \text{observed}=36\%\ (97\ \text{studies});\ \text{median power}\approx0.35`,
 p:'The replication crisis is best read as a fact about an inference procedure rather than about the honesty of researchers — which is why preregistration, a change to the procedure, moved the numbers. It also shows a discipline\'s statistical practice functioning as a load-bearing auxiliary hypothesis in the Duhemian sense: for decades, failures were charged to the experiment rather than to the method of evaluating experiments.'},

{a:'prob',b:'econ',kind:'contested',param:R`\text{identification}`,
 t:'Probability → Economics: identification instead of experiment',
 f:'Most economic questions cannot be randomised, so the field infers causal quantities from observational data using instruments, discontinuities and differences-in-differences. Each design buys identification with an assumption that cannot itself be tested — exclusion restrictions, parallel trends, continuity of potential outcomes at the cutoff — and the assumption is usually defended by narrative rather than by data.',
 tex:R`\beta_{IV}=\frac{\mathrm{Cov}(Y,Z)}{\mathrm{Cov}(X,Z)}\ \text{valid iff}\ Z\perp\!\!\!\perp \varepsilon`,
 p:'The credibility revolution genuinely improved the field, and it relocated rather than removed the philosophical problem: the untestable premise now sits in a clearly labelled place instead of being spread through a structural model. That is real progress in transparency, and it is not progress in warrant, which is a distinction the discipline\'s rhetoric tends to blur.'},

{a:'prob',b:'evo',kind:'contested',param:R`w=\text{propensity?}`,
 t:'Probability → Evolutionary theory: what kind of quantity is fitness?',
 f:'If fitness is defined as actual reproductive success, "the fitter tend to survive" is a tautology. The standard repair is the propensity interpretation: fitness is a probabilistic disposition, and realised success is a sample from it. That works for simple cases and runs into trouble when variance in offspring number matters — geometric-mean fitness, not arithmetic, governs long-run success, so no single expected value captures the disposition.',
 tex:R`\bar w_{\rm geo}=\left(\prod_{t=1}^{T} w_t\right)^{1/T}<\langle w\rangle\ \text{whenever } \mathrm{Var}(w)>0`,
 p:'The tautology charge is answered, but the answer costs the simple picture: fitness turns out not to be a single number attaching to a genotype but a functional of the whole distribution of outcomes across environments and generations. Sober, Beatty and the Bouchard–Rosenberg exchange are arguing over how much of the explanatory practice survives that concession.'},

{a:'logic',b:'comp',kind:'constitutive',param:R`\text{diagonalisation}`,
 t:'Logic → Computability: the same argument twice',
 f:'Gödel\'s first incompleteness theorem and Turing\'s halting result are two applications of one construction: build a sentence or a machine that refers to itself, and derive a contradiction from the assumption that a total decision procedure exists. Turing\'s version came second and is the more transparent, which is why it is now the standard route to the incompleteness theorems rather than the reverse.',
 tex:R`\nexists\, H:\ H(M,x)=\text{halts}(M,x);\qquad \mathrm{Con}(T)\nvdash_T \mathrm{Con}(T)`,
 p:'The unity is real and the popular gloss on it is not: neither theorem shows that there are truths humans can grasp and machines cannot, since the Gödel sentence for a formal system is provable in a stronger system and humans have no privileged access to the consistency of the system they are using. Lucas and Penrose both need that extra premise, and neither supplies it.'},

{a:'comp',b:'info',kind:'constitutive',param:R`K(x)\ \text{vs}\ H(X)`,
 t:'Computability → Information: two notions of information, one asymptotic identity',
 f:'Shannon entropy is a property of a distribution; Kolmogorov complexity is a property of an individual string, defined as the length of the shortest program that outputs it. For a computable source the expected Kolmogorov complexity equals the Shannon entropy to within a constant. Kolmogorov complexity is uncomputable, which is not a defect but the content of the halting problem in another guise.',
 tex:R`\left|\ \mathbb{E}_{x\sim P}[K(x)] - H(P)\ \right| \le c_P;\qquad K \text{ uncomputable}`,
 p:'The identity is the strongest available answer to the objection that Shannon information is merely about ensembles and says nothing about individual objects. It is also an object lesson in what "up to a constant" costs: for any particular finite string the constant can swamp the quantity, so the theory is sharp asymptotically and nearly vacuous for the cases people actually care about.'},

{a:'comp',b:'qm',kind:'contested',param:R`\mathrm{BQP}\ \text{vs}\ \mathrm{BPP}`,
 t:'Computability → Quantum mechanics: what a quantum computer would show',
 f:'Shor\'s algorithm factors in polynomial time, which no classical algorithm is known to do; but factoring is not believed NP-complete, and BQP is not known to contain NP. Quantum computation is expected to give a superpolynomial advantage on a narrow class of structured problems, and provably no more than a quadratic advantage on unstructured search (Grover, with a matching lower bound).',
 tex:R`\mathrm{BPP}\subseteq\mathrm{BQP}\subseteq\mathrm{PSPACE};\qquad \text{Grover: }\Theta(\sqrt N)\ \text{is optimal}`,
 p:'The philosophically loaded claim is the *physical* Church–Turing thesis — that anything physically computable is computable by a Turing machine, efficiently. Quantum computing bears on the efficiency clause and not on the computability clause. Deutsch\'s stronger reading, that a working quantum computer would evidence the multiverse, does not follow: every interpretation predicts the same output, which is exactly the situation in which an inference to the best explanation has nothing to grip.'},

{a:'prob',b:'cosmo',kind:'contested',param:R`\text{measure problem}`,
 t:'Probability → Cosmology: probability over what sample space?',
 f:'Claims that the observed universe is fine-tuned, or that inflation makes flatness likely, require a probability measure over initial conditions or over pocket universes. In eternal inflation the candidate sets are infinite and the answers depend entirely on the regularisation scheme chosen, with different cutoffs giving different — and sometimes opposite — predictions for what a typical observer sees.',
 tex:R`P(\text{obs})=\lim_{t\to\infty}\frac{N_{\rm obs}(t)}{N_{\rm tot}(t)}\ \text{— cutoff-dependent}`,
 p:'The measure problem is where cosmology runs into the foundations of probability and gets no help. Without a principled measure, "inflation predicts flatness" is not a prediction but a conditional statement about a class whose weighting is unspecified, and anthropic selection arguments have nothing determinate to select from. It is the clearest current example of a physical theory whose testability depends on an unsolved problem in the philosophy of probability.'},

{a:'prob',b:'genetics',kind:'instantiation',param:R`\chi^2,\ \text{linkage}`,
 t:'Probability → Genetics: the first statistical science',
 f:'Mendel\'s ratios are probabilistic predictions, and the field invented much of modern statistics to test them — Pearson\'s chi-squared, Fisher\'s analysis of variance, the very concept of a significance test. Fisher then turned the machinery on Mendel\'s own data and found the fit too good, with a chi-squared p-value near 0.99993 across the reported experiments.',
 tex:R`\chi^2=\sum_i\frac{(O_i-E_i)^2}{E_i};\qquad \text{Mendel's aggregate: } P(\chi^2\ \text{this small})\approx7\times10^{-5}`,
 p:'A discipline and its method of evaluation grew up together, which makes genetics a natural laboratory for asking whether statistical practice is theory-neutral. It is not: the tests were designed with these hypotheses in view. The Mendel episode is also the cleanest available case of a result that is right and evidence that is too good, and the reasonable readings — selective reporting by assistants, unconscious stopping rules — are exactly the ones that reappeared in the replication crisis a century later.'}

];
