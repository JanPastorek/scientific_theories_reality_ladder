const REL_EXTRA_M4 = [

{a:'rg',b:'complexity',kind:'limit',param:R`\xi\to\infty`,
 t:'Renormalization group → Universality: the one part of complexity science that is derived',
 f:'At a critical point the correlation length diverges, microscopic detail is irrelevant in the technical sense — its couplings shrink under coarse-graining — and only dimensionality and symmetry survive. That is why a uniaxial ferromagnet and a liquid–gas critical point share the exponent β = 0.3265 ± 0.0003. This is a derivation, with computable corrections to scaling.',
 tex:R`\mathcal{L}\to\mathcal{L}',\ \ g_i'=b^{y_i}g_i;\quad y_i<0 \Rightarrow \text{irrelevant}`,
 p:'The single most important relation on this sheet, because it marks a boundary. Universality is real, derived and quantitative — and it holds at critical points, where a parameter has been tuned. Most of what is called complexity science borrows the word without the tuning and without the derivation, and the borrowing is where the trouble starts.'},

{a:'statmech',b:'complexity',kind:'coarse',param:R`\text{order without tuning}`,
 t:'Statistical mechanics → Self-organised criticality: the claim that tuning is unnecessary',
 f:'Bak, Tang and Wiesenfeld proposed that dissipative driven systems find critical points by themselves, with no parameter set by an experimenter, and produce power-law avalanche statistics as a result. The sandpile model does this. Real sandpiles largely do not: Frette\'s rice-pile experiment found scaling behaviour for elongated grains and not for round ones, which is a result about grain shape, not about a universal principle.',
 tex:R`P(s)\sim s^{-\tau},\ \tau\approx1.1\text{–}1.5;\ \text{but }\langle s\rangle\ \text{cutoff set by system size}`,
 p:'SOC is the case where complexity science made a bold, falsifiable claim and the experimental record came back mixed — which is more credit than the field usually gets, and less confirmation than its textbooks report. The honest summary is that a handful of systems (rice piles of the right grain, vortex avalanches, some earthquake statistics) show it, that many claimed instances fail the statistical tests, and that a mechanism-free explanation of why some systems self-tune is still missing.'},

{a:'cmt',b:'complexity',kind:'instantiation',param:R`\beta,\gamma,\nu\ \text{measured}`,
 t:'Condensed matter → Complexity: where the exponents were actually measured',
 f:'The critical exponents that universality predicts were measured in real materials before the renormalisation group explained them: the coexistence curve of CO₂ and of a uniaxial antiferromagnet, the superfluid transition in helium-4 measured in microgravity to avoid gravitational rounding, giving ν = 0.6709 ± 0.0001 against a theoretical 0.6717 ± 0.0004.',
 tex:R`C\sim|t|^{-\alpha},\ \xi\sim|t|^{-\nu},\ M\sim|t|^{\beta};\quad \alpha+2\beta+\gamma=2`,
 p:'The lambda-point experiment is the most precise confirmation of a universality prediction anywhere, and the small residual discrepancy with theory has never been fully resolved. Worth holding onto as the standard against which looser scaling claims elsewhere in complexity science should be judged: this is what a measured critical exponent looks like.'},

{a:'complexity',b:'ecol',kind:'analogy',param:R`\text{stability}\ \text{vs}\ \text{diversity}`,
 t:'Complexity → Ecology: May\'s theorem and what followed',
 f:'May showed that a randomly assembled community with n species, connectance C and interaction strength σ is almost surely unstable once σ√(nC) > 1 — so complexity destabilises, contradicting the prevailing ecological wisdom. The result is exact for random matrices, and real food webs are not random: structure (weak links, hierarchy, adaptive foraging) is what rescues them.',
 tex:R`\sigma\sqrt{nC}>1\ \Rightarrow\ \text{local instability (random community)}`,
 p:'A mathematical result that reframed an empirical debate by showing that the intuitive claim needed an argument it did not have. It is also a warning about null models: May\'s randomness assumption was never meant as a description, and half a century of literature has been spent measuring how real networks depart from it. The theorem is secure; every ecological conclusion drawn from it depends on the structure it omits.'},

{a:'complexity',b:'earth',kind:'analogy',param:R`\text{tipping points}`,
 t:'Complexity → Earth system: critical slowing down as an early-warning signal',
 f:'A system approaching a fold bifurcation recovers more slowly from perturbation, so lag-1 autocorrelation and variance in a time series should rise beforehand. The indicators have been demonstrated in laboratory populations driven to collapse, and retrospectively in palaeoclimate records of the last deglaciation; prospective detection in the modern climate record remains contested because the series are short and the null models weak.',
 tex:R`\lambda\to0^-\ \Rightarrow\ \mathrm{AR}(1)\to1,\ \mathrm{Var}\to\infty`,
 p:'A genuinely useful transfer of dynamical-systems reasoning to a domain where the mechanism is not known — the signal depends only on the local geometry of the attractor, not on the physics. The risk is the mirror image: because the indicator is mechanism-free, a rise in autocorrelation is weak evidence of an approaching tipping point and strong evidence only of increased memory, which many things produce.'},

{a:'complexity',b:'socio',kind:'contested',param:R`\text{ABM validation}`,
 t:'Complexity → Sociology: agent-based models and the validation problem',
 f:'An agent-based model generates macro patterns from specified micro rules. Schelling\'s segregation model is the canonical success: mild individual preferences produce near-total segregation, showing that the macro pattern does not license inference to the corresponding macro preference. The difficulty is that many rule sets generate the same pattern, and matching an output distribution does not identify the rules.',
 tex:R`\text{micro rules }R \Rightarrow \text{macro pattern }M;\quad \text{but } R'\neq R \text{ also} \Rightarrow M`,
 p:'Epstein\'s "if you didn\'t grow it you didn\'t explain it" gets the sufficiency claim right and the necessity claim wrong: generative sufficiency is cheap, and underdetermination of rules by patterns is the standing problem. Schelling remains the model that earns its keep precisely because its conclusion is negative — it refutes an inference rather than establishing a mechanism, and negative results are robust to the multiplicity of generators.'},

{a:'netsci',b:'complexity',kind:'constitutive',param:R`\text{structure}\to\text{dynamics}`,
 t:'Network science → Complexity: topology as the substrate',
 f:'Much of what complexity science studies happens on a network, and the network\'s statistics change the dynamics quantitatively and sometimes qualitatively: synchronisation thresholds depend on the spectral gap, cascade sizes on degree heterogeneity, and epidemic thresholds vanish in the infinite-variance case. Network science supplies the structural half of the story.',
 tex:R`\lambda_2/\lambda_N\ \text{(synchronisability)};\quad \beta_c=\frac{\langle k\rangle}{\langle k^2\rangle}`,
 p:'A clean division of labour rather than a reduction: the structure is measured, the dynamics is modelled, and the coupling between them is where the content lies. It also exposes a habit worth naming — reporting a structural statistic (this network is small-world) as though it were a dynamical finding, when the dynamical consequence needs its own derivation and usually its own measurement.'},

{a:'prob',b:'netsci',kind:'contested',param:R`\hat\gamma,\ \text{LR test}`,
 t:'Probability → Network science: fitting a power law is harder than it looks',
 f:'Least-squares fitting on log-log axes is biased and gives no goodness of fit. Clauset, Shalizi and Newman\'s procedure — maximum likelihood for the exponent, a Kolmogorov–Smirnov estimate of the lower cutoff, and a likelihood-ratio test against lognormal and stretched-exponential alternatives — found that of 24 published power laws, most were not clearly better described by a power law than by an alternative.',
 tex:R`\hat\gamma=1+n\left[\sum_i\ln\frac{x_i}{x_{\min}}\right]^{-1};\quad \text{LR test vs lognormal}`,
 p:'The clearest case in the atlas of a statistical method changing a field\'s empirical claims. Broido and Clauset later applied the same machinery to nearly a thousand networks and found strong scale-free structure in a small minority; Barabási\'s group disputed the criteria. What is not in dispute is that the original evidence was weaker than the textbooks presented, which is a fact about inferential standards rather than about networks.'},

{a:'netsci',b:'ecol',kind:'instantiation',param:R`\text{food webs}`,
 t:'Network science → Ecology: food webs as graphs',
 f:'Representing a community as a directed graph of who eats whom yields measurable structure — nestedness in mutualistic networks, short mean path lengths, a small number of trophic levels — and predicts which removals fragment the web. It also discards interaction strength, which is what May\'s stability analysis says actually matters.',
 tex:R`\text{robustness } R_{50}=\frac{\text{species removed to lose half}}{S}`,
 p:'The graph abstraction is doing the classic job of making a problem tractable by throwing away a quantity, and here the discarded quantity is the one the relevant theorem depends on. Weighted-network methods exist and are harder; the unweighted results keep being published because they are easy to compute. A good instance of the methodological pull of available data over relevant data.'},

{a:'netsci',b:'sysbio',kind:'constitutive',param:R`\text{motifs, modules}`,
 t:'Network science → Systems biology: the graph is the model\'s skeleton',
 f:'Regulatory, metabolic and protein-interaction networks are analysed with the same statistics: degree distribution, motif enrichment, modularity, betweenness. The claim that hubs are essential — the centrality–lethality rule — was reported from yeast interaction data and has survived partially, with the correlation weakening substantially once assay bias and study bias in the interaction data are controlled for.',
 tex:R`P(\text{essential}\mid k)\ \text{rises with }k,\ \text{but } \mathrm{AUC}\approx0.6\ \text{after debiasing}`,
 p:'Interactome data are collected non-uniformly — well-studied proteins have more recorded partners — so degree is partly a measure of scientific attention. Any structural inference from such a network inherits that sampling process, and few papers model it. This is the sampling problem in network science at its sharpest, and it generalises: a network is data, and data have a provenance.'},

{a:'netsci',b:'sysneuro',kind:'contested',param:R`\text{connectome}\to\text{function}`,
 t:'Network science → Systems neuroscience: connectomics and the gap to function',
 f:'The C. elegans connectome has been complete since 1986 — 302 neurons, about 7000 connections — and did not yield a predictive model of behaviour, because the wiring diagram omits neuromodulation, gap-junction conductances, extrasynaptic signalling and the sign of each synapse. Human diffusion-MRI connectomes add a further problem: the tractography is an inference, with known false positives at crossing fibres.',
 tex:R`\text{graph statistics of } W \ \nRightarrow\ \tau\dot{\mathbf x}=-\mathbf x+W\phi(\mathbf x)`,
 p:'The completed worm connectome is the strongest available evidence that a structural description is not a functional one, and it is forty years old. That the same inference is still being made from far noisier human data is a fact about incentives and instrument availability rather than about evidence. Graph statistics of a brain network are a summary, and summaries do not compose into mechanisms.'},

{a:'netsci',b:'med',kind:'instantiation',param:R`R_0=\beta\langle k^2\rangle/(\gamma\langle k\rangle)`,
 t:'Network science → Epidemiology: the threshold that disappears',
 f:'Homogeneous-mixing models give an epidemic threshold below which an outbreak dies out. On a network with a heavy-tailed degree distribution the threshold scales with ⟨k⟩/⟨k²⟩, which tends to zero as the variance diverges — so in the idealised infinite scale-free network no threshold exists. Finite size restores one, and the quantity that actually matters is the measured second moment of the contact distribution.',
 tex:R`\beta_c=\frac{\langle k\rangle}{\langle k^2\rangle}\to0\ \text{as}\ \gamma\le3`,
 p:'A structural property of a population changing a clinically relevant threshold is as strong as network science\'s claims get, and its practical content depends on measuring the contact network — which proximity-sensor studies now do directly, finding heterogeneity high but not divergent. The theoretical result is exact and the vanishing threshold is an artefact of taking a limit no population occupies, which is a useful reminder about idealisation.'},

{a:'netsci',b:'socio',kind:'coarse',param:R`\text{ties}\to\text{graph}`,
 t:'Network science → Sociology: what the edge list leaves out',
 f:'Granovetter\'s strength-of-weak-ties result is the field\'s founding empirical claim: of those who found a job through a contact, most had seen that contact occasionally rather than often. Formalising it as a graph requires deciding what counts as a tie, and the same population supports many non-equivalent graphs — co-membership, communication frequency, self-reported closeness — which give different community structure and different conclusions.',
 tex:R`\text{overlap}(i,j)\ \propto\ \text{tie strength (Onnela et al., }4.6\times10^6\ \text{users)}`,
 p:'The representational choice is prior to every result and is almost never argued for. Sociology had this problem before networks — it is the operationalisation problem — but the graph formalism hides it, because once the adjacency matrix exists the analysis proceeds as if the object were given. Worth treating as a case study in how a formalism can launder a contested measurement decision into an apparent datum.'},

{a:'complexity',b:'econ',kind:'contested',param:R`\text{scaling of cities}`,
 t:'Complexity → Economics: urban scaling laws',
 f:'Bettencourt and West report that socioeconomic outputs scale superlinearly with city population (exponent about 1.15) while infrastructure scales sublinearly (about 0.85), across several countries. The exponents are stable enough to be striking and depend on how a city\'s boundary is drawn; using metropolitan areas rather than administrative units moves them, and several reanalyses find the superlinear exponent not robustly distinguishable from 1.',
 tex:R`Y=Y_0N^{\beta},\qquad \beta_{\rm socio}\approx1.15,\ \beta_{\rm infra}\approx0.85`,
 p:'A live dispute in which the data are public, the methods are simple, and the disagreement is about the definition of the unit of analysis. That makes it an unusually clean case of theory-ladenness of measurement: what counts as one city is settled by an administrative convention, and the scientific claim is hostage to it.'}

];
