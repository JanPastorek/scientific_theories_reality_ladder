const REL_EXTRA_M5 = [

{a:'info',b:'control',kind:'constitutive',param:R`\text{channel}\to\text{loop}`,
 t:'Information → Control: feedback needs a measurement',
 f:'A controller can only reject what it can sense, and the sensing channel has finite capacity. The data-rate theorem makes this quantitative: to stabilise an unstable linear plant over a communication channel, the channel capacity must exceed the sum of the logarithms of the unstable eigenvalues — a hard information-theoretic floor on control, independent of the controller design.',
 tex:R`C > \sum_{|\lambda_i|>1}\log_2|\lambda_i|\ \ \text{bits per sample}`,
 p:'One of the few places where information theory yields a binding physical constraint rather than an analogy. It also gives content to a slogan that is otherwise empty — that regulation requires information — by saying exactly how much, in bits, and showing that below that rate no amount of cleverness helps.'},

{a:'control',b:'physio',kind:'instantiation',param:R`\text{loop gain }G`,
 t:'Control theory → Physiology: homeostasis as a measurable loop',
 f:'Physiological regulation is feedback with finite gain, and the internal model principle sharpens the analysis: to reject a persistent disturbance with zero steady-state error, the controller must contain a model of that disturbance — an integrator for a constant offset, an oscillator for a periodic one. Circadian anticipation of a daily load is exactly an internal model in this sense.',
 tex:R`e_{ss}=\frac{1}{1+G}\,d;\qquad \text{zero }e_{ss}\ \text{for a step}\iff \text{controller has a pole at }s=0`,
 p:'The internal model principle is the strongest available reconstruction of teleological talk in biology: "the system is *for* keeping X constant" cashes out as "the controller contains a model of the disturbances to X", which is a checkable structural claim. It is also the reason homeostasis language is not merely metaphorical — and the reason it is often misapplied, since most physiological loops have gains around 2–5 and therefore do not hold anything constant.'},

{a:'control',b:'sysbio',kind:'instantiation',param:R`\text{integral feedback}`,
 t:'Control theory → Systems biology: bacterial chemotaxis is an integral controller',
 f:'E. coli returns its tumbling rate exactly to baseline after a step change in attractant, over five orders of magnitude of background. Barkai and Leibler showed the adaptation is robust — insensitive to enzyme concentrations — and Yi, Huang, Simon and Doyle then proved the network implements integral feedback, and that integral feedback is *necessary* for robust perfect adaptation, not merely sufficient.',
 tex:R`\dot x_I=y-y_0,\quad u=-k x_I\ \Rightarrow\ y\to y_0\ \text{for any constant disturbance}`,
 p:'The best cross-level identification in the whole atlas: an engineering structure is shown to be necessary for an observed biological invariant, and the molecular implementation is then found. It has the form philosophers of science usually say is unavailable in biology — a design constraint that predicts mechanism — and it is worth asking why there are so few other examples.'},

{a:'control',b:'sysneuro',kind:'contested',param:R`\text{forward model}`,
 t:'Control theory → Motor control: internal models and predictive processing',
 f:'Sensorimotor adaptation data fit a forward-model account: the brain predicts the sensory consequences of its own commands, and the mismatch drives learning. Force-field adaptation, saccadic adaptation and the attenuation of self-generated touch all behave as the account predicts. Predictive processing extends the same formalism to perception and cognition generally, which is where it stops being constrained by the data that motivated it.',
 tex:R`\hat x_{t+1}=A\hat x_t+Bu_t+K(y_t-C\hat x_t)`,
 p:'A sharp case of a well-supported engineering model being extended into a universal theory of mind. The narrow claim — that motor control uses a state estimator — is well evidenced and quantitative. The wide claim, that everything the brain does is prediction-error minimisation, is close to unfalsifiable because any behaviour can be redescribed in its vocabulary. The interesting question is where between the two the evidence stops.'},

{a:'control',b:'neuro',kind:'analogy',param:R`\text{stability of spiking}`,
 t:'Control theory → Neurophysiology: homeostatic regulation of excitability',
 f:'Neurons regulate their own conductances to maintain a target activity level: blocking activity in culture leads, over days, to a compensating change in sodium and potassium channel densities. The regulation is a feedback loop whose sensed variable is intracellular calcium, and models with such a loop reproduce the observed parameter degeneracy — many conductance sets, one output.',
 tex:R`\dot{\bar g}_i=\frac{1}{\tau_i}\left([\mathrm{Ca}]_{\rm target}-[\mathrm{Ca}]\right)`,
 p:'This explains, mechanistically, why the multiple-realisability found in crustacean stomatogastric circuits exists: the controller regulates output, not parameters, so it actively produces degeneracy. Multiple realisability here is not a philosopher\'s possibility claim but the measured behaviour of a homeostatic loop, which is a much stronger position for the anti-reductionist argument than the usual one.'},

{a:'game',b:'econ',kind:'constitutive',param:R`\text{equilibrium}`,
 t:'Game theory → Economics: the method, not a model',
 f:'Since the 1980s microeconomics has largely been game theory: markets, auctions, contracts and industrial organisation are analysed by specifying a game and computing equilibrium. Auction theory is the field\'s best case, having designed spectrum auctions that raised predicted revenues; the folk theorem is its worst, showing that in repeated games almost any individually rational outcome is an equilibrium.',
 tex:R`\forall i:\ u_i(s_i^*,s_{-i}^*)\ge u_i(s_i,s_{-i}^*);\quad \text{folk thm: any } v\ge \underline v \text{ sustainable for } \delta\to1`,
 p:'A theory that can rationalise any outcome has stopped making predictions, and equilibrium refinements were an attempt to restore content that produced dozens of incompatible criteria instead. The defensible position is that game theory is a language for stating strategic hypotheses precisely, with real empirical bite in narrow, well-specified institutions like auctions — and the field\'s rhetoric consistently claims more.'},

{a:'game',b:'evo',kind:'instantiation',param:R`\text{ESS, no rationality}`,
 t:'Game theory → Evolution: equilibrium without rational agents',
 f:'Maynard Smith\'s evolutionarily stable strategy replaces rational deliberation with differential reproduction: a strategy is stable if a rare mutant cannot invade. Every ESS is a Nash equilibrium, and not conversely, so the evolutionary concept is strictly stronger. The replicator dynamics then supplies a process whose rest points are the equilibria, which ordinary game theory never had.',
 tex:R`\dot x_i = x_i\left[(Ax)_i-x^TAx\right];\qquad \text{ESS}\Rightarrow\text{Nash, not conversely}`,
 p:'The philosophically decisive point: the equilibrium concept that was invented to describe ideally rational agents works better where there is no agent at all. That suggests the rationality assumptions in economics were never doing the explanatory work they were credited with, and that what equilibrium analysis really needs is a selection process — which markets may or may not supply.'},

{a:'psych',b:'game',kind:'contested',param:R`\text{axiom violations}`,
 t:'Psychology → Decision theory: the axioms are false as description',
 f:'The independence axiom fails in the Allais problem, transitivity fails under preference reversal, and Ellsberg\'s two-urn problem shows systematic ambiguity aversion inconsistent with any single subjective probability. Ultimatum offers below about 20% are rejected roughly half the time, across dozens of societies, though the rate varies widely — Machiguenga participants accept far lower offers, Lamalera whalers make offers above 50%.',
 tex:R`A\succ B\ \text{and}\ B'\succ A'\ \text{with } A,B \text{ and } A',B' \text{ differing by a common consequence}`,
 p:'The standard defence — that the axioms are normative rather than descriptive — is coherent and expensive, because expected-utility theory is used descriptively throughout economics. Prospect theory fits the data with more parameters and no representation theorem; the cross-cultural variation shows the phenomenon is partly institutional rather than cognitive. There is no current theory that is both descriptively adequate and axiomatically motivated.'},

{a:'game',b:'socio',kind:'analogy',param:R`\text{collective action}`,
 t:'Game theory → Sociology: public goods and the commons',
 f:'The n-person prisoner\'s dilemma predicts zero contribution to a public good; laboratory experiments find initial contributions near 50% of the endowment decaying towards 10–20% over ten rounds, and restored by the option to punish. Ostrom\'s field work documented long-lived commons institutions that the bare model says should not exist, and identified the design principles they share.',
 tex:R`\pi_i=e_i-c_i+\frac{m}{n}\sum_j c_j,\quad \frac{m}{n}<1<m\ \Rightarrow\ c_i^*=0`,
 p:'The model\'s value lies in being wrong in a specific, measurable direction: it tells you exactly how much cooperation is unexplained and therefore what an institutional theory has to account for. Ostrom\'s work is the reply, and it is empirical rather than formal — which is a fair description of how much of social science actually advances.'},

{a:'prob',b:'ml',kind:'constitutive',param:R`\text{i.i.d. sampling}`,
 t:'Probability → Machine learning: the framework and its load-bearing assumption',
 f:'Statistical learning theory assumes training and test data are drawn independently from one fixed distribution, and bounds the gap between empirical and true risk in terms of a capacity measure. Everything the theory guarantees is conditional on that assumption, which is violated by distribution shift, by adaptive reuse of benchmarks, and by training data contaminated with test items.',
 tex:R`R(h)\le\hat R(h)+\sqrt{\frac{d(\ln(2n/d)+1)+\ln(4/\delta)}{n}}`,
 p:'The assumption, not the bound, is where the epistemology lives. It also explains the field\'s characteristic failure mode: a model that generalises within the benchmark distribution and fails outside it has not malfunctioned — it has satisfied exactly the guarantee it was given. Reading benchmark performance as a claim about capability is an inference the theory does not license.'},

{a:'comp',b:'ml',kind:'contested',param:R`\text{VC bounds vacuous}`,
 t:'Computability → Machine learning: the bounds do not cover the models that work',
 f:'Classical generalisation bounds scale with a capacity measure. Modern networks have enough parameters to fit random labels on the full training set — Zhang et al. showed this directly — so any capacity measure large enough to permit that gives a bound exceeding one, and is vacuous. The models generalise anyway, and double descent shows test error falling again beyond the interpolation threshold.',
 tex:R`\text{params}\gg n\ \text{and}\ \hat R=0\ \text{on random labels}\ \Rightarrow\ \text{bound}>1`,
 p:'A rare situation in which a mature mathematical theory is not false but inapplicable, and practice has advanced past it without a replacement. The explanatory weight has shifted onto implicit regularisation by the optimiser and onto architecture as inductive bias — neither of which is quantified. Anyone tempted to treat deep learning as a science with foundations should sit with the fact that its central empirical phenomenon has no accepted account.'},

{a:'ml',b:'cogsci',kind:'contested',param:R`\text{performance}\to\text{mechanism}`,
 t:'Machine learning → Cognitive science: what an artificial system shows about a natural one',
 f:'That a network trained on next-token prediction acquires syntactic structure is evidence that the structure is learnable from the data given that architecture — an existence proof against a particular poverty-of-the-stimulus argument. It is not evidence that children do it that way, given radically different data volume: a large model sees several orders of magnitude more text than a child hears in a lifetime.',
 tex:R`\sim10^{13}\ \text{tokens (model)}\ \text{vs}\ \sim10^{7\text{–}8}\ \text{words by age 10}`,
 p:'The sound inference is modal — this is learnable in principle — and the tempting inference is causal. The data-volume gap is the decisive disanalogy and is usually mentioned and then set aside. Where the argument does bite is against strong nativist claims that a structure is *unlearnable* from distributional evidence; those claims are now harder to make, which is a real result and a narrower one than is generally claimed.'},

{a:'ml',b:'sysneuro',kind:'contested',param:R`\text{RSA, encoding models}`,
 t:'Machine learning → Systems neuroscience: models as measuring instruments',
 f:'Trained networks predict neural responses in visual cortex better than any hand-designed model, and layer depth correlates with cortical hierarchy. But the comparison metrics — representational similarity, linear encoding fit — are permissive: untrained networks with random weights already score substantially above chance, and many architectures score similarly, so the measure does not discriminate between hypotheses well.',
 tex:R`\text{RSA: } \rho\big(\mathrm{RDM}_{\rm model},\mathrm{RDM}_{\rm brain}\big);\ \text{random nets already } \rho>0`,
 p:'The models are performing two jobs and the literature rarely separates them: as instruments for compressing and predicting neural data they work well, and as hypotheses about the computations the brain performs they are barely tested, because the fit statistic cannot tell competing hypotheses apart. Clarifying which job is being done would settle a surprising fraction of the disagreement in this area.'},

{a:'ml',b:'med',kind:'instantiation',param:R`\text{AUC}\ \text{vs}\ \text{deployment}`,
 t:'Machine learning → Medicine: internal validity, external collapse',
 f:'Diagnostic models routinely report high discrimination on held-out data from the same institution and degrade on external validation — scanner, population and labelling practice all shift. A widely deployed sepsis prediction model reported strong internal performance and, in an external evaluation across nearly 40,000 hospitalisations, achieved an AUC around 0.63 while generating alerts on a large fraction of patients.',
 tex:R`\mathrm{AUC}_{\rm internal}\gg \mathrm{AUC}_{\rm external};\ \text{PPV}\propto\text{prevalence}`,
 p:'The failure is the i.i.d. assumption cashing out in a hospital. It is also a base-rate problem: at low prevalence even a good classifier produces mostly false alarms, which clinicians then learn to ignore, which changes the population the model sees. The epistemically interesting part is that deployment alters the distribution the model was validated on — a feedback loop no static evaluation can capture.'},

{a:'ml',b:'astro',kind:'analogy',param:R`\text{classification at scale}`,
 t:'Machine learning → Astronomy: instruments for catalogues',
 f:'Modern surveys produce more objects than can be inspected: photometric redshift estimation, transient classification and strong-lens finding are now routinely done by trained models, and the alert stream from a survey like Rubin is millions of events per night. The models are used as measuring devices, with their own systematic errors that must be characterised against a labelled subset.',
 tex:R`\sigma_z/(1+z)\approx0.02\text{–}0.05\ \text{photometric};\ \sim10^7\ \text{alerts/night}`,
 p:'Uncontroversial and worth including precisely for that reason: here the model is openly an instrument, its errors are calibrated against a spectroscopic subsample, and nobody claims it explains anything. The contrast with the cognitive-science and neuroscience uses above is the point — the same technology is epistemically innocuous when its role is stated honestly.'}

];
