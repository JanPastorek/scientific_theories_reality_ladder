const AX_5 = {

sysneuro: {
 axioms:[
  {n:'There is no axiomatisation — what follows is a reconstruction',
   s:R`\text{Systems neuroscience has no axiom system; the entries below reconstruct the commitments its inferences actually use.}`,
   t:"No textbook derives anything from postulates. What the field has instead is a set of modelling choices so uniformly made that they function as axioms: which variable is the explanandum, how many dimensions it has, what a tuning curve means, and what counts as the signal. Each is defensible, none is forced by the biophysics below, and each can be — and recently has been — measured against."},

  {n:'The explanatory variable is the population, not the cell',
   s:R`\hat{\vec{\theta}}=\frac{\sum_i r_i\,\mathbf{c}_i}{\sum_i r_i}`,
   t:"The quantity that carries behavioural meaning is a function of many neurons and of none. Georgopoulos made this operational in 1986: broadly tuned motor cells, individually poor predictors, sum to a vector that points where the arm goes. This is the commitment Barlow's neuron doctrine denied. Dropping it returns you to single-unit chauvinism, which no longer reproduces the reach-decoding or grid-cell results."},

  {n:'Population activity is confined to a low-dimensional manifold',
   s:R`\mathbf{r}(t)\approx \bar{\mathbf{r}}+U\mathbf{z}(t),\qquad d=\dim\mathbf{z}\ll N`,
   t:"Of hundreds of simultaneously recorded neurons, behaviourally relevant structure typically occupies 5–20 dimensions. The commitment is that \\(\\mathbf{z}\\), not \\(\\mathbf{r}\\), is the state the circuit computes with. It is independent of the population-code axiom: one could hold that the population matters and that its dimensionality is high. Estimated dimensionality rises with task complexity and with the number of neurons recorded, so \\(d\\) is partly a property of the experiment."},

  {n:'A tuning curve is a description of what a neuron encodes',
   s:R`r_i(\theta)=b_i+m_i\cos(\theta-\theta_i)+\eta_i`,
   t:"The step from *this cell fires more for rightward motion* to *this cell encodes direction* is a semantic commitment, not a measurement. It presupposes that the correct stimulus variable has been guessed, that the curve is stable, and that something downstream reads it. Classical receptive fields are strongly modulated by context, arousal and locomotion, so the curve is an average over states the animal was in, not a fixed property."},

  {n:'The code is a rate code',
   s:R`r_i=\frac{1}{T}\!\int_{t}^{t+T}\!\sum_k \delta(\tau-t_k)\,d\tau,\qquad T\approx 50\text{–}200\ \mathrm{ms}`,
   t:"Almost every analysis in the field bins spikes and works with counts. This is an assumption, not a finding: temporal, synchrony and phase codes are all physically available, and hippocampal phase precession is a demonstrated case where spike timing relative to theta carries information that the rate discards. Nobody has shown that rate exhausts what downstream circuits use; it is chosen because it is tractable and because decoders built on it work well enough."},

  {n:'The code is stationary and linearly readable',
   s:R`\hat{s}=\mathbf{w}^{\top}\mathbf{r},\qquad \mathbf{w}\ \text{fixed across sessions}`,
   t:"A representation is standardly counted as explicit when a fixed linear decoder recovers it, and the same tuning is assumed to hold tomorrow. Both halves are load-bearing — the first defines what counts as *represented*, the second licenses pooling data across days and animals. The stationarity half is the one that has since failed outright, and the field's response has been to move the assumption up a level rather than abandon it."}
 ],
 hyps:[
  {h:'Low-dimensional latent dynamics carry the behaviourally relevant structure', k:'core',
   b:"Not merely that activity is compressible, but that the dynamics in the compressed space are the computation. Motor cortex during reaching follows rotational trajectories in a plane that make no sense at the single-neuron level; the same latent trajectory is recovered across animals and predicts muscle output better than any cell. If behaviourally relevant structure turned out to live in the discarded high-dimensional residual, the field's whole analytic apparatus would be measuring the wrong thing."},

  {h:'Firing rate is the bridge between circuit and encoded variable', k:'bridge',
   b:"The correspondence rule of the discipline: an external or internal variable is connected to measurable neural activity through a tuning function plus a noise model, usually Poisson with independence across cells. The independence clause is known to be false — noise correlations between similarly tuned cells limit how much averaging can help, and a correlated population can carry less information than an uncorrelated one of the same size. The bridge therefore has a measured, and often unmeasured, leak."},

  {h:'BOLD signal is a monotone proxy for local neural activity', k:'bridge',
   b:"Human systems neuroscience rests almost entirely on this. Logothetis's simultaneous recordings showed BOLD tracks local field potential — synaptic input and local processing — better than spiking output, which means an fMRI activation can reflect input a region receives rather than computation it performs. Delay is about five seconds, spatial smoothing a few millimetres, and the relation is nonlinear at short intervals. Every cognitive-neuroimaging claim inherits these limits."},

  {h:'The recorded sample is representative of the circuit', k:'auxiliary',
   b:"Extracellular electrodes are biased toward large, fast-spiking, highly active cells; two-photon imaging is biased toward superficial layers and toward cells expressing the indicator; spike sorting merges and splits units at rates nobody reports. Sparsely firing neurons are systematically under-sampled, and the fraction of cells that are silent in any given task is not known. Independently revisable — better probes change it — and it silently underwrites every population-geometry claim."},

  {h:'The head-fixed laboratory task engages the circuit that matters', k:'auxiliary',
   b:"Rodent work is done in virtual environments with restrained animals, primate work with overtrained subjects performing a task for thousands of trials. Both fix the behavioural repertoire so that the recorded variance can be attributed to the manipulated variable. Musall and Stringer independently showed that uninstructed movements — whisking, facial twitches, running — account for more of the population variance than the task does, which makes the attribution an assumption rather than a result."},

  {h:'Cortex is a prediction machine propagating error', k:'heuristic',
   b:"Predictive processing organises an enormous amount of work — mismatch negativity, repetition suppression, illusory contours, the layered anatomy of feedback — without being risky, because almost any response can be redescribed as prediction or as error. Treated here as heuristic rather than core: it is generating specific testable models (for example, layer-specific error units in mouse V1), but the framework as such does not stand or fall with any of them."},

  {h:'The single neuron is the unit of representation', k:'abandoned',
   b:"Barlow's 1972 neuron doctrine held that perception corresponds to the activity of a small number of highly selective cells, the limiting case being the grandmother cell. It was load-bearing for two decades and organised the search for ever more specific selectivity in inferotemporal cortex. Replaced by distributed population coding, which reproduces the selectivity results as a special case and additionally explains robustness to cell death, graded similarity structure and the success of linear decoders."}
 ],
 preds:[
  {p:'A continuous attractor for path integration implies a periodic, toroidal code for position',
   num:R`\text{hexagonal grid, }60^{\circ}\ \text{periodicity; module scale ratio}\approx1.42`,
   st:'confirmed',
   b:"Attractor models of the head-direction and place systems (Skaggs 1995, Zhang 1996, Samsonovich & McNaughton 1997) required a bump on a periodic sheet. Hafting and the Mosers found hexagonally periodic grid cells in 2005 — a discovery, not a test of the model, and the theory then accommodated it. The genuine advance prediction was the topology, and Gardner et al. (2022) confirmed it directly: persistent-cohomology analysis of simultaneously recorded grid cells showed activity lying on a torus, in darkness and in sleep. A non-toroidal manifold would have refuted the class."},

  {p:'Distinct environments produce orthogonal, coherent place-cell maps (remapping)',
   num:R`\text{map correlation}\approx0\ \text{between environments; }\sim30\text{–}50\%\ \text{of CA1 cells active in any one}`,
   st:'confirmed',
   b:"Muller & Kubie (1987) showed that changing the enclosure reassigns place fields with no residual correlation to the old map — the signature of a switch between attractor states rather than a continuous deformation. Attractor theory made the sharper prediction that remapping should be abrupt and all-or-none across the population. Wills et al. (2005) found exactly that in a square-to-circle morph; Leutgeb et al. (2005), in the same year, found gradual rate remapping in a comparable design. The prediction is confirmed in outline and contested in precisely the respect that discriminates attractor from non-attractor models."},

  {p:'Reach direction can be decoded in real time from a population vector, and used to drive a prosthesis',
   num:R`\text{speech BCI: }62\ \text{words/min},\ 23.8\%\ \text{word error on a }125\,000\text{-word vocabulary (Willett 2023)}`,
   st:'confirmed',
   b:"Georgopoulos, Schwartz & Kettner (1986) predicted that the vector sum over broadly tuned motor cells would point along the movement even though no single cell was directionally precise. The clinical confirmation is the strongest form available: BrainGate participants have controlled cursors and robotic arms from intracortical arrays, and Willett and colleagues decoded attempted speech from motor cortex at 62 words per minute. Failure would have looked like decoders that work offline and collapse in closed loop. The caveat the field states itself: decodability shows information is present, not that any downstream area uses it."},

  {p:'Microstimulating a direction-selective column biases perceptual judgement in that column preferred direction',
   num:R`\text{psychometric shift} \approx\ \text{adding order-}10\%\ \text{motion coherence}`,
   st:'confirmed',
   b:"Salzman, Britten & Newsome (1990) stimulated MT columns while monkeys judged motion direction, and the psychometric function shifted toward the stimulated preference by an amount equivalent to adding a substantial fraction of coherent motion. This is the field's model causal test, and the reason decoding results are held to require an independent intervention: a null shift, or a shift in the wrong direction, would have shown MT activity to be correlated with the judgement rather than used by it. It also fixed the standard that optogenetics later generalised."},

  {p:'A neuron tuning is stable, so the same decoder works weeks later',
   num:R`\text{CA1: only}\ \sim15\text{–}25\%\ \text{of place-coding cells retained across}\ \sim30\ \text{days (Ziv 2013)}`,
   st:'failed',
   b:"Chronic imaging refuted the stationarity assumption. Ziv et al. (2013) tracked CA1 ensembles over weeks in an unchanged environment and found the set of cells carrying place fields turning over steadily while the animal's behaviour and the decodability of position from the *current* ensemble were unchanged. Driscoll et al. (2017) found the same drift in posterior parietal cortex, Schoonover et al. (2021) in piriform cortex, where population responses to a fixed odour decorrelated to near baseline over a month. The response has been to move stability up a level — to the manifold, or to a subspace preserved under drift — which is a live and unfinished repair, not a restoration."},

  {p:'A complete wiring diagram predicts the circuit function and the animal behaviour',
   num:R`\textit{C. elegans}:\ 302\ \text{neurons (1986)};\ \textit{Drosophila}:\ \sim1.4\times10^{5}\ \text{neurons (2024)}`,
   st:'open',
   b:"The structural programme's core bet, and still unsettled forty years after the *C. elegans* connectome. Partial success exists: network models of the fly visual system constrained only by connectivity and neurotransmitter identity predict the response properties of dozens of cell types without being fitted to physiology, and the central-complex ring attractor for heading was read off the wiring and then confirmed. The decisive test is a whole-animal one — predict behaviour, not tuning, from structure plus known dynamics. Persistent failure would establish that the parts list, complete, is insufficient; the atlas records that as a live possibility rather than a verdict."}
 ]
},

cogsci: {
 axioms:[
  {n:'No axiom system — the physical symbol system hypothesis is the nearest thing',
   s:R`\text{A physical symbol system has the necessary and sufficient means for general intelligent action.}`,
   t:"Newell & Simon (1976) offered this as an empirical hypothesis about a class of machines, and it is as close to a foundational postulate as cognitive science ever got. It is not an axiomatisation: nothing is derived from it. What follows is a reconstruction of the commitments that make the field's inferences from reaction times and error patterns to internal architecture valid. Connectionism denies the necessity half; nobody has refuted the sufficiency half."},

  {n:'Mental processes are computations over representations',
   s:R`s_{t+1}=F(s_t,\,i_t),\qquad s\ \text{a structured representational state}`,
   t:"The framework's constitutive claim, and what distinguishes it from behaviourism below and from neuroscience beside it. It makes the states causally efficacious in virtue of their form and semantically evaluable in virtue of their content, which is the whole basis of psychological explanation here. Dropping it leaves either behaviourism or eliminativism; dynamicists and radical enactivists have tried, and have not produced accounts of memory or reasoning with comparable coverage."},

  {n:'Marr three levels, and their relative autonomy',
   s:R`\text{computational (what and why)}\ \succ\ \text{algorithmic (representation and process)}\ \succ\ \text{implementational}`,
   t:"An explanation must say what problem is being solved, by what representation and process, in what tissue — and a theory at one level is not settled by the level below. This is what licenses doing cognitive science without neuroscience. It is independent of the symbol hypothesis: one can accept the levels and reject symbols. The autonomy has never been demonstrated; it persists because nobody has managed to connect the levels, which is a different fact."},

  {n:'Competence and performance are separable',
   s:R`\text{observed behaviour}=\text{competence}\ \ \text{filtered through}\ \ \text{memory, time and attention limits}`,
   t:"Inherited from linguistics and used throughout: the idealised capacity is the object of theory, and awkward data may be assigned to the resource limits. Indispensable — without it every centre-embedded sentence refutes every grammar — and the standard ground of the unfalsifiability charge, since the distinction is drawn post hoc unless the performance model is specified independently. Where it has been specified, as in surprisal-based reading-time models, the charge loses its force."},

  {n:'Input systems are modular',
   s:R`\text{domain-specific},\ \text{informationally encapsulated},\ \text{mandatory},\ \text{fast},\ \text{shallow output}`,
   t:"Fodor (1983). The load-bearing clause is encapsulation: the Müller-Lyer illusion survives knowing the lines are equal, so the visual computation cannot consult belief. Evidence from double dissociations in neuropsychology. Massive-modularity extensions to central cognition are far weaker, and Fodor himself held that central processes are not modular and therefore not tractable by this method — an unusual case of a framework's author marking its limit."},

  {n:'Mental kinds are multiply realisable',
   s:R`M\ \text{is realised by}\ \{P_1,P_2,\dots\},\ \text{with no}\ P_i\ \text{identical to}\ M`,
   t:"Putnam and Fodor's argument that psychology cannot reduce to neuroscience, and the official justification for the autonomy the Marr axiom assumes. Attacked by Bechtel & Mundale on the ground that neural kinds are individuated functionally, so the multiplicity is an artefact of asymmetric grain, and by Polger & Shapiro on the ground that clean cases are scarce. The measured conductance degeneracy in crustacean circuits supplies a real one, within a species."}
 ],
 hyps:[
  {h:'Cognitive architecture is a fixed set of resources with measurable capacities', k:'core',
   b:"Working memory with a limit, long-term memory with retrieval dynamics, attention as a selection bottleneck, and a central executive. The whole inferential enterprise — deducing structure from dual-task interference, set-size effects and error patterns — presupposes that there is a stable architecture common to normal adults to be discovered. If cognitive capacities varied without a common structure, or were entirely task-constructed, the field would have no object."},

  {h:'Reaction time measures the number and duration of internal stages', k:'bridge',
   b:"The discipline's principal correspondence rule, from Donders (1868) through Sternberg's additive-factors method. A slope in milliseconds per item is read as a per-operation cost; an additive effect of two manipulations is read as evidence that they act on different stages. Everything from mental rotation to memory scanning rests on it, and it is what makes an unobservable process quantitative."},

  {h:'Pure insertion: adding a stage leaves the others unchanged', k:'auxiliary',
   b:"Donders' subtraction method requires that inserting a comparison stage into a task does not alter the stages already there. It is almost certainly false in general — adding a decision changes encoding strategy — and it is exactly the auxiliary that cognitive subtraction in neuroimaging inherited wholesale when it began subtracting one condition's activation map from another's. Sternberg's additive-factors logic was designed to avoid it and depends instead on stage independence, which is weaker and still an assumption."},

  {h:'The laboratory task engages the construct it is named for', k:'auxiliary',
   b:"That the Stroop task measures inhibition, the n-back measures working memory, the Iowa gambling task measures risky decision-making. Independently revisable and increasingly revised: the canonical executive-function tasks correlate with each other at r of roughly 0.1–0.2 despite sharing a name, a pattern that is as consistent with there being no common construct as with poor measurement. Task impurity is the standing threat to every dissociation claim."},

  {h:'Behaviour approximates the optimal solution to the problem the organism faces', k:'heuristic',
   b:"Rational analysis (Anderson) and its Bayesian descendants. Enormously productive — cue combination, word learning, causal induction — and not itself under test, because optimality is defined relative to a prior, a likelihood and a cost function that are usually fitted rather than measured. The discipline in the programme consists entirely in fixing those independently, as Ernst & Banks did and as most applications do not."},

  {h:'There are no internal states, only stimulus–response histories', k:'abandoned',
   b:"Behaviourism's methodological prohibition, dominant in American psychology from Watson (1913) to about 1960. It was abandoned within a few years on three fronts at once: Chomsky's 1959 review of *Verbal Behavior* argued that verbal productivity cannot come from reinforcement history; Miller's capacity work required an internal store; Newell & Simon's Logic Theorist showed that symbol manipulation could be mechanised. Replaced by the computational theory of mind, which reinstated internal states as causes while keeping the demand for behavioural evidence."},

  {h:'All mental representation is in a combinatorial symbolic code, and only that', k:'abandoned',
   b:"The strong language-of-thought claim: every representational state is a sentence in Mentalese, and nothing else does representational work. Fodor & Pylyshyn (1988) argued that only such a code explains systematicity. The strong version has been given up even by sympathisers, on three grounds: imagery and analogue magnitude representations resist sentential treatment; distributed vector codes show graded similarity structure that symbols lack; and transformers trained on prediction alone generalise systematically without built-in syntax. What survives is a weaker claim that *some* cognition is symbol-like — which no longer forbids anything."}
 ],
 preds:[
  {p:'Reaction time to judge whether two shapes are the same rises linearly with their angular difference',
   num:R`\text{slope}\approx17\ \mathrm{ms/deg},\ \text{i.e. a rate near}\ 60^{\circ}/\mathrm{s};\ \text{linear fit}\ r\approx0.99`,
   st:'confirmed',
   b:"Shepard & Metzler (1971) derived the prediction from the hypothesis that the comparison is performed by an analogue transformation passing through intermediate orientations. The linearity held for picture-plane and depth rotations alike, with essentially the same slope — which is the part that matters, since a depth rotation traverses more three-dimensional space than a picture-plane one and a propositional matching process has no reason to care about angle at all. A flat or step function would have refuted the analogue account outright."},

  {p:'Memory-scanning time is linear in set size, with equal slopes for present and absent items',
   num:R`\mathrm{RT}=a+bN,\ \ b\approx38\ \mathrm{ms/item},\ \ a\approx400\ \mathrm{ms}`,
   st:'confirmed',
   b:"Sternberg (1966) predicted that if the memory set is scanned serially and exhaustively, slope should be linear and identical for positive and negative probes; a self-terminating search predicts the negative slope to be twice the positive one. The measured slopes matched at about 38 ms per item. The measurement has replicated for sixty years; the *inference* has not survived, since Townsend showed that unlimited-capacity parallel models mimic linear set-size functions exactly. This is the atlas's clearest case of a confirmed quantitative prediction that fails to identify the mechanism it was designed to identify."},

  {p:'Immediate memory holds about seven chunks',
   num:R`7\pm2\ \text{(Miller 1956)}\ \longrightarrow\ 4\pm1\ \text{(Cowan 2001)}`,
   st:'failed',
   b:"Miller's span is the most cited number in psychology and it is wrong. Once rehearsal, chunking and long-term support are controlled — change detection, running span, visual arrays — the limit falls to about four items, and in some designs to three. What survived is the more important half of the claim: that the limit is in chunks rather than in raw items, so that recoding expands capacity without changing it. Miller himself framed the number as a suspicious coincidence rather than a law; the field quoted it as a law for forty years."},

  {p:'Naming the ink colour of an incongruent colour word is slower than naming a colour patch',
   num:R`\text{Stroop 1935: }+74.3\%\ \text{for a 100-item list; modern per-item cost}\approx100\text{–}200\ \mathrm{ms}`,
   st:'retrodiction',
   b:"Stated as a retrodiction because that is what it is: Stroop measured the interference in 1935, and the theories that explain it — automaticity, relative speed of processing, continuous competition in a connectionist network — were built afterwards to fit it. The effect itself is as robust as anything in the field, replicating in every language and with effect sizes an order of magnitude larger than the social-psychological findings that failed. What theory has added is the asymmetry: word reading interferes with colour naming far more than the reverse, which the relative-speed account predicts and a simple resource account does not."},

  {p:'Children overregularise the past tense in a U-shaped curve, and the shape discriminates rules from association',
   num:R`\text{median overregularisation rate}\approx2.5\%\ \text{of irregular past-tense uses (Marcus 1992, 83 children)}`,
   st:'open',
   b:"Rumelhart & McClelland (1986) showed that a single associative network trained on verb stems produced *goed* and *bringed* at the right stage without any rule, which was taken to remove the phenomenon's evidential force for a rule-plus-exceptions architecture. Pinker & Prince (1988) replied that the model's U-shape was an artefact of an abrupt change in its training regime. Marcus and colleagues then measured the rate and found it low and the curve shallow — too shallow to discriminate sharply. The test is still open and now runs through modelling: fit both architectures to realistic input and compare item-level predictions for novel irregulars, not aggregate curves."},

  {p:'Visual and haptic estimates are combined with weights inversely proportional to their variances',
   num:R`\sigma^{-2}_{VH}=\sigma^{-2}_{V}+\sigma^{-2}_{H};\ \ \text{weights predicted, not fitted}`,
   st:'confirmed',
   b:"Ernst & Banks (2002) measured visual and haptic reliability separately, then predicted both the weight given to each and the variance of the combined percept — no free parameters. Adding visual noise shifted the observed weights along the predicted trajectory. This is the strongest confirmed quantitative prediction the Bayesian programme has, and it is strong precisely because the prior and likelihood were fixed independently, which is the discipline the framework usually lacks. A constant weighting, or a combined variance no better than the best single cue, would have refuted it."},

  {p:'A learning signal proportional to reward prediction error should exist in the brain',
   num:R`\Delta V_i=\alpha\beta\!\left(\lambda-\sum_j V_j\right);\ \text{dopamine burst to unpredicted reward, dip to omitted reward}`,
   st:'confirmed',
   b:"Rescorla & Wagner (1972) derived the error term from behavioural blocking experiments, with no neural commitment whatever. Twenty-five years later Schultz, Dayan & Montague found midbrain dopamine neurons firing as the temporal-difference error: bursting to unpredicted reward, falling silent at the predicted time when reward is omitted, and transferring their response to the earliest predictor. A cross-level prediction of this kind is rare in the atlas. The strongest falsifier would have been a dopamine signal tracking reward magnitude rather than surprise; that is what was expected before 1997."}
 ]
},

psych: {
 axioms:[
  {n:'There is no axiomatisation — what follows is a reconstruction',
   s:R`\text{Psychology has no axiom system; the entries below reconstruct the commitments its measurements and inferences require.}`,
   t:"Classical test theory and item response theory are genuine formal systems, but they axiomatise *measurement error*, not psychology. The substantive commitments below are never stated in a textbook as postulates, and each is a condition on which published inference depends. The field's recent history is unusual and instructive: several of them were tested, more or less by accident, and did not hold."},

  {n:'Observed score is true score plus independent error',
   s:R`X=T+E,\qquad \mathbb{E}[E]=0,\qquad \mathrm{Cov}(T,E)=0`,
   t:"Spearman's decomposition and the foundation of reliability theory. Everything about attenuation, correction and precision follows from it. The independence clause is what does the work and it fails whenever error is systematic — acquiescence, social desirability, practice effects, experimenter expectancy. Item response theory replaces the linear form with a latent-trait model and, in the Rasch case, makes the assumption testable rather than definitional."},

  {n:'Construct validity is established by correlation with other instruments',
   s:R`\text{validity of }M\ \text{is fixed by }M\text{'s position in a network of correlations with other measures}`,
   t:"Cronbach & Meehl (1955): there is no criterion external to the network, so a measure is validated by behaving as the theory says a measure of that construct should. The commitment is circular by construction and the field knows it; the defence is that the circle is wide and empirically constrained. Its cost is that a construct can be validated into existence by a set of instruments that share a method rather than a referent."},

  {n:'The attribute is quantitative',
   s:R`\rho_{XY}\le\sqrt{\rho_{XX'}\rho_{YY'}}\quad\text{and, unexamined: that }X\text{ has additive (interval) structure}`,
   t:"Means, differences and effect sizes presuppose that the underlying attribute has additive structure. Michell's charge is that the field assumes this rather than testing it, when conjoint measurement theory supplies an actual test that is almost never run. The Rasch model is the honourable exception, since its fit statistics genuinely test additivity and are frequently failed. If Michell is right, much of the arithmetic performed on psychological scores is unlicensed."},

  {n:'Effects generalise across the population sampled',
   s:R`\hat\theta_{\text{sample}}\to\theta_{\text{population}};\qquad 96\%\ \text{of samples drawn from}\ 12\%\ \text{of humanity}`,
   t:"The inference from a convenience sample to people. Henrich, Heine & Norenzayan (2010) put numbers on the gap: about 96% of subjects in top psychology journals came from Western industrialised countries, which hold roughly 12% of the world's population, and about 68% came from the United States alone; a large majority of American subjects were undergraduates. Where cross-cultural data exist — visual illusions, fairness in economic games, analytic versus holistic reasoning, self-concept — WEIRD samples are frequently the outlier, not the centre."},

  {n:'The laboratory task engages the construct named',
   s:R`\text{task}\ \mapsto\ \text{construct},\ \text{treated as fixed rather than sampled}`,
   t:"Yarkoni's generalisability point in its sharpest form: stimuli, tasks, experimenters and contexts are sampled too, and treating them as fixed effects inflates confidence exactly as ignoring subject sampling does. A study with 500 subjects and four stimuli has an effective n of four for any claim about the stimulus class. The correction — crossed random effects — widens most published intervals enough to cross zero."},

  {n:'Between-person structure is within-person structure',
   s:R`\frac1T\sum_t x_{i,t}\ \overset{?}{=}\ \frac1N\sum_i x_{i,t}`,
   t:"Assumed almost universally and almost never true. Molenaar's demonstration: the factor structure of mood across 100 people on one occasion can differ entirely from the factor structure of the same measures for one person across 100 occasions. Typing speed correlates positively with accuracy across people and negatively within a person. The two quantities are simply different, and no amount of sample size converts one into the other."}
 ],
 hyps:[
  {h:'Latent variables cause the covariation among their indicators', k:'core',
   b:"That *g*, extraversion or depression is a common cause producing correlated responses, rather than a summary of them. The positive manifold has replicated without exception since Spearman (1904), but van der Maas's mutualism model reproduces it from reciprocal facilitation among independently developing abilities with no common cause at all, and network models of psychopathology treat symptoms as directly causing one another. The data have so far not separated the readings, which is a serious situation for a field whose objects are latent."},

  {h:'Item responses are monotone functions of trait level', k:'bridge',
   b:"The correspondence rule linking an unobservable trait to a tick on a questionnaire. In the Rasch model it takes a precise form and can be tested; elsewhere it is assumed. Its failure modes are ordinary and consequential: non-monotone items, differential item functioning across groups so that the same score means different things, and reverse-scored items that load on a method factor rather than the trait. Measurement invariance is testable and is tested in a small minority of studies that compare groups."},

  {h:'Monozygotic and dizygotic twins experience equally similar environments', k:'auxiliary',
   b:"The equal-environments assumption, without which \\(h^2\\approx2(r_{MZ}-r_{DZ})\\) estimates nothing. It is independently revisable and has been partly checked — misclassified twins who believe they are identical behave like their actual zygosity, which supports it — but identical twins are demonstrably treated more alike and share more friends, and for traits where that treatment matters the estimate is inflated. The resulting heritabilities are population-specific, silent about individuals and silent about group means."},

  {h:'The reported analysis is the analysis that was planned', k:'auxiliary',
   b:"The auxiliary that converts a p-value into evidence. Simmons, Nelson & Simonsohn showed by simulation that ordinary undeclared flexibility — two dependent variables, optional stopping, a covariate, dropping a condition — pushes the false-positive rate above 60% at a nominal 5%. It is independently checkable, and preregistration checks it. This is the rare case in the atlas of an auxiliary hypothesis being made explicit and then enforced institutionally."},

  {h:'A p-value below 0.05 constitutes a finding', k:'heuristic',
   b:"Not a hypothesis about the world but a convention about what gets published, and it functioned for eighty years as the field's criterion of existence. Fisher offered 0.05 as a convenience; Neyman and Pearson's decision framework answers a different question; the hybrid taught in textbooks is neither. Its effect is measurable rather than philosophical: it fixed what entered the literature, and changing it changed the literature."},

  {h:'Introspective report is the primary datum of psychology', k:'abandoned',
   b:"Structuralist introspectionism — Wundt's trained observers and Titchener's systematic analysis of conscious contents into elements — was the field's founding method. It collapsed around 1910–1920 when laboratories could not agree on basic results, most famously the Würzburg school's imageless thoughts, which Titchener's observers could not find and Külpe's could. Replaced by behavioural measurement, and later by the far more limited use of report as one response among others, calibrated by signal detection theory rather than trusted."}
 ],
 preds:[
  {p:'Retention of learned material declines as a decelerating function of time',
   num:R`\text{savings}\approx58\%\ \text{at 20 min},\ \approx34\%\ \text{at 1 day},\ \approx21\%\ \text{at 31 days}`,
   st:'confirmed',
   b:"Ebbinghaus (1885) measured the curve on himself using some 2 300 nonsense syllables and the savings method, which is a genuine quantitative measurement rather than a prediction. The confirmed prediction is that the function generalises: Murre & Dros (2015) repeated the procedure faithfully on a single modern subject and recovered a curve closely matching the 1885 values. Whether the decay is logarithmic or a power function is still argued, and the distinction matters because the two imply different underlying processes. Persistently linear forgetting would have refuted the whole family."},

  {p:'Performance is an inverted-U function of arousal, with the optimum lower for harder tasks',
   num:R`\text{Yerkes \& Dodson 1908: dancing mice, 3 discrimination difficulties, small }n`,
   st:'open',
   b:"The textbook law is not what the 1908 paper reported. Yerkes & Dodson trained mice on a black–white discrimination under electric shock and found that the shock intensity producing fastest learning fell as the discrimination got harder — a result about aversive stimulus intensity and habit formation in mice, with no measurement of arousal. The generalisation to human performance is a century of citation without a parametric test: arousal is rarely manipulated exogenously, rarely measured independently of performance, and rarely sampled at enough levels to distinguish an inverted U from a monotone function plus a ceiling. The test is specific and has not been run at adequate power."},

  {p:'Practice reduces response time as a power function of the number of trials',
   num:R`T_N=a+bN^{-c},\ \ c\approx0.2\text{–}0.6`,
   st:'retrodiction',
   b:"A retrodiction, and worth marking as one: the curve was observed first — Crossman's cigar-rollers improving over some ten million cigars across seven years — and Newell & Rosenbloom's chunking theory was constructed in 1981 to generate an already-known form. It then failed at the level it was meant to explain. Heathcote, Brown & Mewhort (2000) refitted dozens of published data sets at the level of the individual subject and found exponential functions fitting better than power functions in the great majority; the power law is largely an artefact of averaging exponential curves with different rates. The aggregate regularity is real and the mechanism it was taken to imply is not supported."},

  {p:'Exerting self-control depletes a limited resource, impairing subsequent self-control',
   num:R`\text{meta-analytic }d=0.62\ (2010)\ \longrightarrow\ d=0.04,\ 95\%\ \mathrm{CI}\ [-0.07,\,0.14]\ \text{(23 labs, }N=2141)`,
   st:'failed',
   b:"Ego depletion was supported by a 2010 meta-analysis of 198 experiments giving a medium-to-large effect, and by a glucose mechanism that made it physiologically concrete. Carter & McCullough (2014) showed the meta-analytic estimate was not distinguishable from publication bias. Hagger and colleagues then ran a Registered Replication Report across 23 laboratories with a protocol agreed by the original authors: the effect was indistinguishable from zero. A later multi-lab replication with over 3 500 participants found the same. What was done about it: the glucose account was withdrawn, and the surviving proposals are motivational rather than resource-based, with no comparable evidential base."},

  {p:'Incidental exposure to a concept changes unrelated downstream behaviour',
   num:R`\text{Many Labs: flag and currency priming, 36 samples, }N=6344,\ d\approx0.00`,
   st:'failed',
   b:"Bargh, Chen & Burrows (1996) reported that subjects primed with elderly-stereotype words walked more slowly down a corridor afterwards. Doyen et al. (2012) replicated the design with automated timing and found nothing — except when experimenters were told which condition subjects were in, in which case the effect reappeared. Klein and colleagues' Many Labs project tested flag priming and currency priming across 36 samples and found effects at zero while simultaneously recovering large, robust classical effects such as anchoring in the same samples. The domain-specific failure is the informative part: the method was not broken, these effects were."},

  {p:'The published literature is mostly true — the field implicit prediction about itself',
   num:R`36\%\ \text{of 100 replications significant against}\ 97\%\ \text{of originals; mean}\ r\ 0.403\to0.197`,
   st:'failed',
   b:"Nobody wrote this prediction down, which is why it is worth recording. The Open Science Collaboration (2015) replicated 100 studies from three leading journals with high power and original-author input; about a third reached significance and effect sizes halved. The Social Science Replication Project (2018) found 13 of 21 *Nature* and *Science* findings replicating, again at about half the original size. Prediction markets run on the same studies forecast the outcomes well, which shows the field knew, informally, which results were fragile. The measured institutional response is the striking number: under registered reports, where the analysis is fixed before results are seen, the rate of supported hypotheses falls from about 96% to about 44%."}
 ]
},

ling: {
 axioms:[
  {n:'No axiomatisation, but the nearest approach in the human sciences',
   s:R`\text{A grammar is an explicit formal system; the programme that posits it is not itself axiomatised.}`,
   t:"Individual grammars are formal objects in a way nothing in psychology or sociology is — a phrase-structure grammar is as explicit as a proof system. What has never been axiomatised is the theory *of* grammars: Universal Grammar is a research programme with changing content, not a postulate set, and Minimalism deliberately reduced its stated primitives rather than fixing them. The entries below reconstruct the commitments that make the programme's inferences from judgements to mental structure valid."},

  {n:'The object of the theory is I-language',
   s:R`\text{Explanandum}=S_S,\ \text{a computational state of an individual, not a corpus of utterances}`,
   t:"Chomsky's I-language/E-language distinction. Grammaticality judgements are primary data because they probe the state directly; corpus frequency is at best indirect, since the corpus is a product of the state plus everything else. Usage-based linguistics inverts this exactly, and the two schools then disagree about what their shared facts are evidence *for*, which is why the dispute resists settlement by measurement. Reject the axiom and syntax becomes a branch of the statistics of discourse."},

  {n:'Competence and performance are distinct',
   s:R`\text{Idealisation to an ideal speaker-listener in a completely homogeneous speech community (Chomsky 1965)}`,
   t:"Knowledge of language versus its deployment under memory and time limits. It is what allows a grammar to generate centre-embeddings that no one can parse, and to be unrefuted by slips, false starts and variation. The charge of unfalsifiability is fair wherever the performance model is left unspecified and unfair where it is not: surprisal theory supplies an independent performance model, and the combined system makes quantitative reading-time predictions that can fail."},

  {n:'Universal Grammar: an innate initial state constrains the attainable grammars',
   s:R`S_0 \;\xrightarrow{\ \ \text{primary linguistic data}\ \ }\; S_S`,
   t:"The acquisition device is not a general learner but a species-specific, domain-specific function from data to grammar, with a restricted range. Everything distinctive about the programme follows: the explanation of rapid uniform acquisition, of cross-linguistic limits, and of why no other species does this. Its content has shrunk drastically — from dozens of substantive principles and parameters to, in Minimalism, little beyond recursion — which is a retreat its critics and its proponents describe very differently."},

  {n:'Rules are structure-dependent',
   s:R`\text{Operations target hierarchical position; no grammatical rule counts words or reverses linear order.}`,
   t:"The flagship universal, and the sharpest empirical claim the programme makes, because linear rules are simpler and would be learned first by any unbiased learner. No known language forms questions by reversing word order or by fronting the linearly first auxiliary. It is now testable against systems that see only strings: whether a sequence model trained on child-sized input acquires the structural generalisation is a measurable question with a contested answer."},

  {n:'Merge, and discrete infinity',
   s:R`\mathrm{Merge}(\alpha,\beta)=\{\alpha,\beta\}`,
   t:"A single recursive set-formation operation, applied to its own output, generating an unbounded set of hierarchically structured expressions from a finite lexicon. Hauser, Chomsky & Fitch (2002) proposed recursion as the only component unique to language and to humans. The claim is strong enough to be attacked from two sides at once: from typology, if some language lacks embedding, and from comparative cognition, if recursion is found elsewhere."}
 ],
 hyps:[
  {h:'The primary linguistic data underdetermine the grammar the child attains', k:'core',
   b:"The poverty-of-stimulus argument, and the load-bearing empirical premise of the whole programme. Its classic form: to question *The man who is tall is happy*, the child must front the structurally higher auxiliary, and the disambiguating sentences are said to be vanishingly rare in input. That premise became testable once corpora existed. Legate & Yang find the relevant structures essentially absent; Pullum & Scholz find them present at low rates. The argument moved from a priori to empirical, which is a gain whatever the answer, and it now turns on corpus frequencies and on what a realistic learner needs."},

  {h:'Recursion is universal in the species', k:'core',
   b:"If some human language genuinely lacks embedding, then either recursion is not part of the faculty or the faculty is not expressed in every language, and both readings damage the programme. Everett (2005) claimed Pirahã has no clausal embedding, no numerals and no colour terms, attributing this to a cultural constraint on discussing what the speaker has not witnessed. Nevins, Pesetsky & Rodrigues replied that Everett's own earlier grammar analysed the relevant constructions as embedded. Futrell and colleagues' corpus analysis found no clear evidence of embedding in the available Pirahã material and noted that the data do not settle it. The dispute is as much about fieldwork access and analytic choice as about syntax."},

  {h:'Grammaticality judgements are evidence about the underlying grammar', k:'bridge',
   b:"The correspondence rule of syntax, and the standard target of sceptics who point to informal collection, small numbers of consultants and theoretically invested judges. Sprouse and Almeida tested it directly: every data point in a standard syntax textbook, and a random sample of published contrasts from *Linguistic Inquiry*, re-run with naive participants and formal methods. Convergence with the published judgements ran around 95% or better. The bridge is in far better repair than the sceptical literature assumed, though it says nothing about gradient or theoretically contested cases, where the disagreements actually live."},

  {h:'Corpora of child-directed speech approximate the child actual input', k:'auxiliary',
   b:"Everything quantitative in the poverty-of-stimulus debate depends on it. CHILDES recordings sample a few hours a week from mostly Western, mostly middle-class homes; the child hears on the order of 10⁷ words, of which a corpus captures a small and non-random slice. Rare constructions are exactly the ones the argument turns on, and they are exactly the ones a sparse sample estimates worst. Independently revisable, and dense home-recording projects are revising it."},

  {h:'Language is an optimal solution to interface conditions', k:'heuristic',
   b:"The Minimalist guiding idea: narrow syntax is as simple as it can be given that it must interface with sound and with meaning, so apparent complexity should be relocated to the interfaces or to general computational efficiency. It is a research heuristic and not under test — optimality is assessed against conditions that the programme itself specifies — and it has been productive in forcing the elimination of stipulated machinery. Critics take the productivity to be internal to the programme rather than empirical."},

  {h:'Each construction has its own transformation', k:'abandoned',
   b:"The Standard Theory had a passive transformation, a question transformation, a there-insertion rule, each stated separately with its own structural description. It was load-bearing through the 1960s and was abandoned because it made the acquisition problem worse — a child would have to learn dozens of construction-specific rules — and because the rules shared obvious generalisations. Replaced by Move-α in Government and Binding, and by Merge alone in Minimalism, with construction-specific behaviour pushed into the lexicon. Construction Grammar took the discarded option seriously and rebuilt the field's rival programme on it."},

  {h:'The grammatical categories of a language determine its speakers thought', k:'abandoned',
   b:"Linguistic determinism in the strong Whorfian form, taken seriously into the 1950s and supported by material now known to be unreliable, notably the Eskimo snow-vocabulary claim that Boas never made in the form it was quoted. Refuted by demonstrations that speakers discriminate distinctions their language does not lexicalise. What replaced it is a weak and well-evidenced version: language influences categorisation, colour discrimination near lexical boundaries, and spatial frame of reference, with effects that are real, measurable and modest — and that mostly disappear under verbal interference, which places them in the use of language rather than in its structure."}
 ],
 preds:[
  {p:'Children forming yes/no questions never front the linearly first auxiliary',
   num:R`\text{Crain \& Nakayama 1987: 30 children aged 3;2–5;11; zero structure-independent errors}`,
   st:'confirmed',
   b:"The prediction is risky because the linear rule is simpler: an unbiased learner exposed to the overwhelmingly simple sentences of ordinary input should hypothesise *front the first auxiliary* and produce *Is the boy who watching Mickey Mouse is happy?* Crain & Nakayama elicited such questions and found children producing other errors in abundance — copying auxiliaries, restarting — and not that one. Ambridge, Rowland & Pine later found a small number of such errors under prompting, which weakens the absolute claim without touching the asymmetry. A child population producing linear errors at the rate the simplicity of the rule predicts would have refuted the axiom."},

  {p:'Extraction out of certain configurations is impossible in every language',
   num:R`\text{Ross 1967: complex NP, wh-island, subject, adjunct, coordinate structure}`,
   st:'confirmed',
   b:"Island constraints are the programme's most durable substantive result: *What did you hear the claim that John bought?* is degraded wherever the configuration exists. Sprouse, Wagers & Phillips tested the rival account — that islands are working-memory overload rather than grammar — using a factorial design that isolates the superadditive interaction, and found island effects that did not covary with individually measured memory capacity. Confirmed as a pattern; contested as to source, and complicated by the Scandinavian languages, which permit extractions that the English-based statement forbids."},

  {p:'The word-order correlations of a 30-language sample are cognitive universals',
   num:R`\text{Greenberg 1963: 45 universals from 30 languages}\ \longrightarrow\ \text{Dryer 1992: 625 languages}`,
   st:'failed',
   b:"Greenberg's implicational universals — verb-final languages have postpositions, and so on — were offered as near-exceptionless and taken as evidence of a common cognitive parser. Dryer tested them on 625 languages grouped into genera to control for genetic and areal inheritance. The verb-patterner correlations for adpositions, genitives, relative clauses and complementisers survived as strong statistical tendencies; the adjective–noun correlation, one of Greenberg's own, did not. Dunn and colleagues then modelled word-order evolution across four families and found the correlation structure differing by lineage, which relocates the regularities from cognition to history. What failed is the universality and the exceptionlessness, not the existence of the tendencies."},

  {p:'Native-like attainment requires exposure before a critical period closes',
   num:R`\text{Johnson \& Newport 1989: }n=46;\ \text{Hartshorne 2018: }N=669\,498,\ \text{inflection at}\ 17.4\ \text{years}`,
   st:'confirmed',
   b:"Lenneberg (1967) placed the closure at puberty and tied it to lateralisation. Johnson & Newport found grammaticality-judgement scores in Chinese and Korean immigrants declining linearly with age of arrival up to the mid-teens and then flat and highly variable. Hartshorne, Tenenbaum & Pinker ran the same question at a scale no laboratory could reach — over 600 000 respondents to an online grammar quiz — and located the drop in learning *rate* at about 17.4 years, later than Lenneberg predicted and sharper than a gradual-decline account allows. Confirmed in form, revised in its parameter, and still without an agreed mechanism."},

  {p:'A survey of the world languages will reveal substantive universals of the faculty',
   num:R`\text{Evans \& Levinson 2009: no non-trivial absolute universal survives; }\sim7\,000\ \text{languages, a few dozen deeply described}`,
   st:'failed',
   b:"Evans & Levinson assembled the counterexamples: languages without adjectives as a distinct class, without a clear noun–verb distinction on the standard criteria, with non-configurational word order that resists constituency tests, and — contentiously — without clausal embedding. Their conclusion is that every proposed substantive universal either has exceptions or has been weakened into a statistical tendency or a definitional truth. The generative reply is that the universals were never meant to be surface generalisations and live at the level of the computational system, which is a real distinction and also an unfalsifiable-looking retreat. The evidential situation is worsening rather than improving: the typological sample is small, biased toward large written state languages, and roughly half of it will have no native speakers by 2100."},

  {p:'Unattested consonants must be reconstructed to regularise Indo-European vowel alternations',
   num:R`\text{Saussure 1879; Hittite deciphered 1917; }\textit{h}_2\ \text{identified as written}\ \d{h}\ \text{by Kuryłowicz 1927}`,
   st:'confirmed',
   b:"The cleanest novel prediction in the human sciences. Saussure posited *coefficients sonantiques*, entities with no attested reflex in any known language, purely to make the ablaut patterns of Proto-Indo-European systematic. Nearly fifty years later Hittite was deciphered and one of the posited segments turned out to be written. This is the comparative method's Neptune: an unobservable posited on structural grounds alone and then observed. Its force depends on the Neogrammarian commitment that sound change is exceptionless within a phonetic environment — the closest thing to a law this atlas records outside the physical sheets, and itself qualified by lexical diffusion, where change spreads word by word."}
 ]
},

econ: {
 axioms:[
  {n:'Completeness',
   s:R`\forall x,y\in X:\ \ x\succsim y\ \ \text{or}\ \ y\succsim x`,
   t:"The first axiom of the genuine axiomatisation this field possesses: Debreu's *Theory of Value* (1959), in explicit Bourbaki style, with von Neumann & Morgenstern (1944) for choice under risk. Completeness says the agent can rank any two bundles. It is the least defensible psychologically — incomparability and indecision are ordinary — and weakening it to a partial order leaves demand correspondences rather than functions, which breaks most comparative statics. Bewley's incomplete-preference models are the serious attempt."},

  {n:'Transitivity',
   s:R`x\succsim y\ \wedge\ y\succsim z\ \Rightarrow\ x\succsim z`,
   t:"Independent of completeness and harder to give up. It is defended by a money-pump argument rather than by evidence: an intransitive agent can be made to pay indefinitely to cycle. Tversky (1969) demonstrated systematic intransitivity in multi-attribute choice, and preference reversals between choice and pricing tasks are robust. The field's response was not to drop the axiom but to reclassify the violations as failures of the elicitation procedure or of framing — which is the standard move and worth naming as such."},

  {n:'Continuity',
   s:R`\{y:\ y\succsim x\}\ \ \text{and}\ \ \{y:\ x\succsim y\}\ \ \text{are closed in}\ X`,
   t:"Purely technical and entirely load-bearing: with completeness and transitivity it gives Debreu's representation theorem, so that a continuous utility function exists. It carries no psychological content and it is what excludes lexicographic preferences, which are perfectly coherent and have no utility representation. Nobody defends continuity as realistic; it is defended as the price of having calculus."},

  {n:'Local non-satiation',
   s:R`\forall x\in X,\ \forall\varepsilon>0,\ \exists y\in B_\varepsilon(x)\ \text{with}\ y\succ x`,
   t:"Weaker than monotonicity and sufficient for what is needed: it forces the budget constraint to bind, which gives Walras's law, and it is the precise assumption under which the First Welfare Theorem holds. Drop it and an equilibrium can be Pareto-improvable by moving consumers off their indifference plateaus. This is the axiom that quietly does the work in the field's most-cited normative result."},

  {n:'Independence (von Neumann–Morgenstern)',
   s:R`L\succsim L'\ \Longleftrightarrow\ \alpha L+(1-\alpha)L''\succsim \alpha L'+(1-\alpha)L''`,
   t:"The axiom that turns an ordinal ranking of lotteries into an expectation, and the one the evidence actually attacks. Allais's paradox is a direct violation, reproduced for seventy years across stakes and cultures; Ellsberg's is a violation of the analogous condition for subjective probability. Rank-dependent utility and cumulative prospect theory weaken independence specifically and retain the rest. Note what refutation refutes: expected utility is a representation theorem, so violations kill the descriptive reading and leave the normative one intact."},

  {n:'Convexity of preferences',
   s:R`x\succsim z,\ y\succsim z\ \Rightarrow\ \alpha x+(1-\alpha)y\succsim z`,
   t:"Diminishing marginal rate of substitution, and the condition Arrow & Debreu (1954) need for the fixed-point argument. Their existence theorem requires convexity of preferences and production sets, continuity, local non-satiation, complete markets for all dated contingent commodities, and universal price-taking; under these a price vector clearing all markets simultaneously exists, by Kakutani. Existence is not uniqueness and not stability: Sonnenschein–Mantel–Debreu shows aggregate excess demand can be almost any continuous function satisfying Walras's law, so the model constrains far less than its formal strength suggests."},

  {n:'Preferences are exogenous and stable',
   s:R`\succsim\ \text{does not depend on prices, income, history or the choice set}`,
   t:"Almost never stated and required for everything normative: if preferences shift with the allocation, welfare comparisons across allocations have no fixed standard. Stigler & Becker (1977) made it a methodological rule. It is contradicted by endowment effects, reference dependence, adaptive preferences and advertising, and the contradiction is not a detail — it is why behavioural welfare economics has no agreed foundation, since there is no privileged preference ordering to defer to."}
 ],
 hyps:[
  {h:'Observed choices are consistent enough to reveal a preference ordering', k:'core',
   b:"Samuelson's revealed-preference programme makes the axioms empirically meaningful: choice data satisfying the generalised axiom of revealed preference are rationalisable by some utility function, and Afriat's theorem makes this checkable on finite data. Tested directly on consumer panel and experimental budget data, most subjects violate GARP but by small amounts, which is why Afriat efficiency indices exist. If violations were large and systematic, the framework would have no way to say what an agent wants — which is exactly the situation behavioural economics documents for particular domains."},

  {h:'Agents subjective distributions coincide with the model objective ones', k:'core',
   b:"Rational expectations, and a hypothesis rather than an axiom — Muth (1961) proposed it and Lucas built macroeconomics on it. It is not a claim that people are clever; it is a consistency requirement that the agents inside the model are not systematically fooled by the model. It buys the Lucas critique, policy ineffectiveness results and the entire DSGE apparatus. Survey expectations data contradict it: forecasts are predictably biased and disagreement is persistent, which has produced the learning and sticky-information literatures that weaken it without abandoning it."},

  {h:'Willingness to pay measures welfare', k:'bridge',
   b:"The correspondence rule connecting utility, which is ordinal and not measurable, to money, which is. Everything in cost–benefit analysis, environmental valuation and the statistical value of a life runs through it. Its defect is structural rather than technical: willingness to pay is bounded by ability to pay, so the criterion weights a rich person's preference more than a poor person's by construction. Contingent valuation adds a second problem — hypothetical answers show scope insensitivity, valuing 2 000 and 200 000 birds nearly alike."},

  {h:'Aggregate behaviour can be modelled as one representative agent', k:'auxiliary',
   b:"Needed to derive nearly every quantitative macroeconomic prediction and known to be unjustified in general. Sonnenschein–Mantel–Debreu says aggregate excess demand inherits almost none of the structure of individual demand, so there is no theorem licensing the reduction. The microfoundations programme demanded derivation from individual optimisation and then, for tractability, assumed the one thing the theorem forbids. Independently revisable, and heterogeneous-agent models are revising it — at the cost of the analytic results that made the framework attractive."},

  {h:'Markets clear and agents take prices as given', k:'auxiliary',
   b:"No agent's action moves the price, and quantities adjust until supply equals demand. It is a limiting approximation with a known domain: good for wheat and Treasury bills, poor for labour, housing and anything with search frictions or long-term contracts. Its failure is not a curiosity but the subject matter of whole subfields — search and matching theory exists because the labour market does not clear in this sense, and the unemployment it generates is not a disequilibrium phenomenon inside those models."},

  {h:'Assumptions need not be realistic, only predictions accurate', k:'heuristic',
   b:"Friedman's 1953 *as if* doctrine, offered as methodology and functioning as a shield. It is not itself under test and it is not neutral: it forbids the mechanistic and policy uses economists actually make, since evaluating an intervention that changes the mechanism requires the mechanism to be right. Its measurable effect was to deflect the psychological evidence for fifty years — a case where an explicit methodological doctrine demonstrably delayed a research programme."},

  {h:'Value is determined by socially necessary labour time', k:'abandoned',
   b:"The classical theory, in Smith and Ricardo and then in Marx, where it carries the whole account of exploitation. It fails on its own terms: it cannot price goods with no labour input, cannot handle differing capital intensities without the transformation problem, and cannot explain why an unwanted object embodying great labour is worth nothing. Replaced in 1871–74 by marginalism — Jevons, Menger and Walras independently — which locates value at the margin of subjective valuation and dissolved the diamond–water paradox that the labour theory could not."},

  {h:'Prices fully reflect all available information, including private information', k:'abandoned',
   b:"The strong form of the efficient-markets hypothesis, and the one that is straightforwardly rejected: corporate insiders earn abnormal returns on their own trades, which is the point of prohibiting the practice. Grossman & Stiglitz (1980) showed the stronger claim is internally incoherent — if prices revealed everything, nobody would pay to gather information and prices could not come to reflect it. The semi-strong form survives, but only jointly with a model of expected returns, which is Fama's joint-hypothesis problem and makes any anomaly reinterpretable as a missing risk factor. Listed as arguably abandoned because that reinterpretation is always available, which is itself the objection."}
 ],
 preds:[
  {p:'Competitive exchange reaches a Pareto-efficient allocation at the equilibrium price',
   num:R`\text{Smith 1962 double auction: allocative efficiency}\ \gtrsim95\%\ \text{within a few periods, with 6–12 traders}`,
   st:'confirmed',
   b:"The welfare theorems are theorems, not predictions: given the axioms, competitive equilibria are Pareto efficient and any efficient allocation is an equilibrium for some endowment. What is empirically at stake is whether real institutions approximate the conditions. Vernon Smith tested it directly with induced-value double auctions in which each trader knows only their own reservation price: prices converge to the competitive prediction within a few trading periods and nearly all available surplus is realised, with far fewer traders and far less information than the theory was thought to require. Persistent failure to converge, or convergence to the wrong price, would have refuted the institutional claim while leaving the theorem untouched."},

  {p:'Compensated demand slopes downward, and the Slutsky matrix is symmetric and negative semidefinite',
   num:R`\frac{\partial h_i}{\partial p_i}\le0;\qquad \frac{\partial h_i}{\partial p_j}=\frac{\partial h_j}{\partial p_i}`,
   st:'confirmed',
   b:"The core testable content of consumer theory, and it holds: demand systems estimated on household data overwhelmingly satisfy the negativity condition, and symmetry is rejected less often than the noise in the data would suggest. The Giffen good, in which a price rise raises demand, is the theory's one permitted exception and was for a century an unobserved textbook curiosity. Jensen & Miller (2008) produced it experimentally by subsidising rice for very poor households in Hunan, where the income effect of the staple dominates — a confirmation of the exception, and one of the few cases in the atlas of a theoretical possibility being deliberately hunted and caught."},

  {p:'The equity premium follows from consumption risk at plausible risk aversion',
   num:R`\text{observed }6.18\%\ \text{p.a. (US 1889–1978)};\ \text{model with}\ \gamma\le10\ \text{generates at most}\ 0.35\%`,
   st:'failed',
   b:"Mehra & Prescott (1985) took the consumption-based asset pricing model seriously and computed what premium it implies given measured consumption volatility. Equities returned about 7% real and Treasury bills about 0.8%; the model could not produce more than about a third of a percentage point without a coefficient of relative risk aversion around 30 to 50, which would imply absurd behaviour toward ordinary gambles. A quantitative failure by a factor of roughly twenty, in the field's central intertemporal framework, and unresolved after forty years — habit formation, rare disasters, long-run risk and Epstein–Zin preferences each fit by adding structure that other evidence does not independently support. The companion puzzle is the risk-free rate, which the same calibration makes too high."},

  {p:'The inflation–unemployment trade-off is stable and can be exploited by policy',
   num:R`\text{US 1975: unemployment}\ 8.5\%\ \text{with CPI inflation}\ 9.1\%;\ \text{1980: inflation}\ 13.5\%`,
   st:'failed',
   b:"Phillips (1958) fitted UK wage inflation against unemployment over 1861–1957, and Samuelson & Solow (1960) presented the relation as a policy menu. Friedman (1968) and Phelps predicted the failure *in advance* and gave the mechanism: the trade-off exists only while inflation is unanticipated, so exploiting it shifts the curve, and there is no long-run trade-off at the natural rate. The 1970s delivered simultaneous high inflation and high unemployment. Lucas (1976) generalised the lesson: a relation estimated under one policy regime is not invariant to changing the regime, because the agents' decision rules were optimal against the old one. The best-documented case in the atlas of a fitted empirical relation failing exactly as a theorist said it would, on the timetable he gave."},

  {p:'A minimum wage above the market-clearing level reduces employment',
   num:R`\text{Card \& Krueger 1994: }+2.76\ \text{FTE per store, NJ vs PA};\ \text{modern elasticities clustered near}\ 0\ \text{to}\ -0.1`,
   st:'open',
   b:"The competitive model's clearest policy prediction, and after thirty years of increasingly good identification it is unresolved. Card & Krueger compared New Jersey fast-food restaurants with Pennsylvania ones after the 1992 increase and found employment slightly up; Neumark & Wascher, using payroll records rather than telephone surveys, found it down. Cengiz and colleagues pooled 138 state-level changes with a bunching estimator and found the jobs missing below the new minimum almost exactly matched by jobs appearing above it, implying an employment elasticity near zero. Monopsony in low-wage labour markets predicts exactly this, which is why the dispute is theoretical as well as empirical. The decisive test is a large increase relative to the local median wage, which the recent US experiments are beginning to supply."},

  {p:'Macroeconomic models forecast recessions',
   num:R`\text{of 153 recessions in 63 countries, 1992–2014, consensus forecasts anticipated a handful by the April before}`,
   st:'failed',
   b:"The field's most conspicuous public failure, and it is systematic rather than episodic. Loungani's summary — that the record of failure to predict recessions is virtually unblemished — was confirmed on a larger sample by An, Jalles & Loungani: across 153 recessions in 63 countries, consensus forecasts made in the April preceding the recession year anticipated almost none, and even forecasts made *during* the recession year were revised toward contraction only slowly. No mainstream model predicted 2008, and the dominant DSGE models contained no banking sector at all. The standard defence is that the system adapts to the models used to describe it, so genuine forecastability would be self-defeating — a real argument that also conveniently immunises the failure."}
 ]
},

socio: {
 axioms:[
  {n:'There is no axiomatisation — what follows is a reconstruction',
   s:R`\text{Sociology has no axiom system, and its schools disagree about the ontology rather than the theorems.}`,
   t:"There is not even an agreed object: Durkheimians posit social facts, methodological individualists admit only individuals and their relations, network theorists take structure as primary, Bourdieusians add fields and habitus. The entries below reconstruct the commitments that organise the field's empirical work, including two that are direct rivals, because no reconstruction that suppressed the conflict would be honest about what the discipline is."},

  {n:'Social facts are not reducible to individual psychology',
   s:R`\text{The determining cause of a social fact must be sought among antecedent social facts, not among states of individual consciousness.}`,
   t:"Durkheim's *Rules* (1895), and the constitutive commitment of the discipline — he wrote it to establish that there was a subject matter at all, distinct from psychology's. It is a claim about explanation, not about composition: nobody denies societies are made of people. Suicide rates, divorce rates and crime rates are stable in aggregate while wholly unpredictable individually, and that stability is the phenomenon Durkheim took to require social causes. Drop it and sociology becomes applied social psychology, which is precisely what its critics propose."},

  {n:'Explanations must bottom out in individuals and their interactions',
   s:R`\text{Macro}_t\ \to\ \text{individual situation}\ \to\ \text{action}\ \to\ \text{Macro}_{t+1}\qquad(\text{Coleman's boat})`,
   t:"The rival commitment, and listed alongside its opposite because the field holds both. Weber, Elster and analytical sociology require that any macro-to-macro relation be cashed out as a mechanism running through individuals. It is compatible with holism about description — the dispute is entirely about explanation — and it maps closely onto the reduction debates in the physical sheets, with the difference that here the micro-level mechanism can usually be told and rarely be measured."},

  {n:'Structure constrains and enables action',
   s:R`\text{Position in a structure has causal powers independent of the attributes of its occupant.}`,
   t:"The proposition that makes network analysis and stratification research into causal enterprises rather than descriptive ones. A person's betweenness in a network, or their position in an occupational structure, is a relational property and therefore absent by construction from any complete list of individual attributes — structurally the same point as vorticity not being a property of a molecule. Its weakness is that structure is easier to measure than to intervene on, so most evidence is observational."},

  {n:'The measurement categories are constructed, and do causal work',
   s:R`\text{class, race, occupation: historically constituted classifications that nonetheless enter causal explanations}`,
   t:"Race has no biological definition that tracks the census categories, and occupational class schemes are analysts' constructions; both robustly predict mortality, income and mobility. The commitment is that construction and causal efficacy are compatible — a constructed category can have effects through the practices that sustain it. Hacking adds the loop: classifying people changes them and the changed people alter the classification, which makes the categories moving targets in a way no natural kind below this sheet is."},

  {n:'Supervenience without reducibility',
   s:R`S\ \text{supervenes on}\ I,\ \text{and is not thereby reducible to}\ I`,
   t:"The metaphysical position almost everyone in the field actually occupies: no social difference without an individual difference, and no prospect of translating social explanations into individual ones. The arguments for the second half are multiple realisability of social kinds, the relational character of structural properties, and the constitution of the entities by rules that are themselves social. The structure of the dispute is identical to Anderson against Weinberg in condensed matter; the resources for settling it are far weaker here."}
 ],
 hyps:[
  {h:'Aggregate social conditions cause individual behaviour', k:'core',
   b:"The Durkheimian core: integration and regulation, measured at the level of a group, change the rate at which its members act in ways that look entirely individual. If every apparent social effect dissolved into composition — the group's rate differing only because of who is in it — the discipline would have no distinctive causal claim. Contextual and multilevel models exist to separate the two, and the separation is genuinely hard, because selection into contexts is rarely random and the two mechanisms make similar aggregate predictions."},

  {h:'Administrative and survey categories index social position', k:'bridge',
   b:"Occupation codes map onto class schemas such as Erikson–Goldthorpe; census race categories, educational attainment and income bands stand in for structural location. This is the field's correspondence rule and it is unusually visible: the categories are periodically redrawn by states for administrative reasons, which changes the measured trends. National comparisons inherit the incommensurability, and the coding decision — what counts as an act of the kind being studied — is interpretive before it is statistical, which is Weber's point stated as a measurement problem."},

  {h:'Assignment to the treatment is independent of the outcome given the covariates', k:'auxiliary',
   b:"The auxiliary that turns a regression coefficient into a causal estimate, and the field's weakest link, since the treatments of interest — neighbourhood, school, marriage, incarceration — are precisely the ones people sort into on unobservables. The credibility revolution's instruments, discontinuities and natural experiments exist to replace it with something checkable. Where a genuine randomisation has been run, as in Moving to Opportunity, the observational literature's estimates have not always survived."},

  {h:'One unit outcome does not depend on another unit treatment', k:'auxiliary',
   b:"SUTVA, imported from statistics and false by construction in a field whose subject is interdependence. Peer effects, diffusion, congestion and norm change are all violations, and they are what sociology studies. Manski's reflection problem shows that with linear-in-means specifications, endogenous peer effects cannot be separated from contextual effects and correlated selection at all. The methodological response — randomising at the cluster level, exploiting partial-population designs — buys identification by sacrificing exactly the spillovers that motivated the question."},

  {h:'Explain by specifying mechanisms of middle range', k:'heuristic',
   b:"Merton's injunction against grand theory, and the analytical-sociology programme's operating rule: give the cogs and wheels connecting a macro condition to an individual's situation, their action, and the aggregation back up. Not itself under test — it is a standard for what counts as an explanation — and it has been productive in forcing threshold models, diffusion accounts and matching mechanisms to be stated explicitly enough to simulate. The same mechanistic turn reshaped philosophy of biology in the same decades."},

  {h:'Institutions persist because they serve a function for the social system', k:'abandoned',
   b:"Parsonian structural functionalism organised American sociology from the 1940s through the early 1960s: institutions exist because they meet system needs — pattern maintenance, integration, goal attainment, adaptation. It was abandoned on three grounds. It explained persistence by consequence without a selection mechanism that would make the consequence a cause, which is the same defect as unreconstructed adaptationism in biology. It could not account for conflict, domination or change. And it was unfalsifiable in practice, since any arrangement could be assigned a function after the fact. Replaced by conflict theory, by historical-institutionalist accounts with explicit feedback mechanisms, and by the mechanism-based programme above."}
 ],
 preds:[
  {p:'Suicide rates are stable across years and vary systematically with religious and marital integration',
   num:R`\text{Durkheim's Prussian data: Protestant regions}\ \sim3\times\ \text{the Catholic rate per million}`,
   st:'retrodiction',
   b:"A retrodiction, and the founding one: Durkheim assembled official moral statistics that were already published and constructed a theory to explain them. The regularities are real and have largely held — unmarried above married, men above women, and rates falling during wars. Two corrections matter. Van Poppel & Day showed that part of the Protestant–Catholic gap is registration practice, Catholic jurisdictions recording more deaths as of unknown or accidental cause. And the inference from rates to individuals is the ecological fallacy, which Durkheim committed in the founding text and Robinson named in 1950: the correlation between the proportion foreign-born and illiteracy across US states was +0.53 while the individual-level correlation was −0.11, opposite in sign."},

  {p:'Job information travels through weak ties rather than strong ones',
   num:R`\text{Granovetter 1974: of contacts used, }16.7\%\ \text{seen often},\ 55.6\%\ \text{occasionally},\ 27.8\%\ \text{rarely}`,
   st:'confirmed',
   b:"The prediction is structural and counterintuitive: close friends move in the same circles and hold redundant information, so the non-redundant tip comes from an acquaintance who bridges to another cluster. Granovetter's survey of professional and managerial workers in Newton, Massachusetts found most contact-mediated jobs coming through people seen rarely or occasionally. The causal test arrived fifty years later: Rajkumar and colleagues analysed multi-year randomised variation in LinkedIn's recommendation algorithm across roughly 20 million users and found weaker ties causally more effective for job transmission — but with an inverted U, the strongest effect at moderately weak ties rather than the weakest. Confirmed in direction and refined in shape by an experiment of a scale sociology has never had before."},

  {p:'Mild individual preferences for like neighbours produce near-total segregation',
   num:R`\tau\approx0.3\ \text{tolerance};\ \text{measured tipping points at}\ 5\text{–}20\%\ \text{minority share (Card, Mas \& Rothstein 2008)}`,
   st:'confirmed',
   b:"Schelling's 1971 demonstration used coins on graph paper and is a mathematical result about a model, not an empirical prediction: it shows only that segregation *can* arise without any agent preferring segregation, which severs the inference from outcome to motive. Its empirical content is the tipping dynamic, and that has been tested. Card, Mas & Rothstein identified city-specific tipping points in US census tracts from 1970 to 2000 at minority shares between about 5 and 20 per cent, above which white population growth fell sharply and discontinuously. A smooth response to minority share would have refuted the tipping mechanism while leaving the model's logical point intact."},

  {p:'Equalising school resources will equalise achievement',
   num:R`\text{Coleman 1966: }\sim600\,000\ \text{students, }\sim3\,000\ \text{schools; resource differences explain little of the achievement gap}`,
   st:'failed',
   b:"Congress commissioned the survey under the 1964 Civil Rights Act expecting it to document unequal facilities and thereby explain unequal outcomes. It found that measured school resources — expenditure, library books, laboratories, class size — accounted for very little of the variance in achievement once family background was taken into account, and that the strongest school-level correlate was the social composition of the student body. The finding was so contrary to expectation that it was reanalysed for a decade. Its own weakness is the auxiliary above: this was a cross-sectional survey, so resources were not randomly assigned, and later quasi-experimental work on school finance reforms does find effects of spending. What failed was the prediction as the field made it, on the evidence the field itself collected."},

  {p:'Moving families from high-poverty to low-poverty neighbourhoods improves adult economic outcomes',
   num:R`N=4\,604\ \text{families, 5 cities, 1994–98: no significant effect on adult earnings or employment}`,
   st:'failed',
   b:"Moving to Opportunity is the discipline's cleanest randomised test of a central causal claim — that neighbourhood effects on life chances are large — and on the primary adult outcomes it returned a null. Final impacts a decade on showed no detectable gains in earnings, employment or welfare receipt for adults, alongside real improvements in mental health and in physical health, where the low-poverty voucher group showed prevalence of severe obesity and of elevated glycated haemoglobin lower by roughly four to five percentage points. The later result changed the reading rather than overturning it: Chetty, Hendren & Katz linked the participants to tax records and found that children who moved before about age 13 earned roughly 31% more as adults — on the order of $3 400 a year — and attended college at higher rates, while those who moved as teenagers did slightly worse. Exposure time, not the move, is the operative variable, and the same experiment supports opposite headlines depending on the outcome and the window."},

  {p:'Intergenerational persistence of status can be read off single-generation correlations',
   num:R`\text{income elasticity}\approx0.15\ \text{(Denmark)}\ \text{to}\ \approx0.5\ \text{(US)};\ \text{surname methods give}\approx0.7\text{–}0.8\ \text{everywhere}`,
   st:'open',
   b:"Conventional parent–child estimates show a threefold spread across rich democracies, and within the United States Chetty and colleagues found the probability of reaching the top income quintile from the bottom varying from about 4% to about 13% by commuting zone — structural variation no individual-level theory predicts. Against this, Clark's surname-based estimates of status persistence over many generations imply an underlying correlation near 0.75 that is remarkably constant across societies and centuries, which would mean the single-generation measures are dominated by transitory noise and that mobility policy has far less purchase than the comparative numbers suggest. The methods disagree by a factor of three or more and the test is specific: whether persistence across three and four generations exceeds the iterated single-generation elasticity, and whether surname groups are a representative sample of anything. It is open, and it matters."}
 ]
}

};
