const REL_EXTRA_B2 = [

{a:'statmech',b:'biophys',kind:'constitutive',param:R`k_BT=4.1\ \mathrm{pN\,nm}`,
 t:'Statistical mechanics → Biophysics: one energy scale sets the whole design space',
 f:'At 300 K the thermal energy is 4.1 pN·nm. Every quantity a cell cares about is measured against it: a bond that must survive is built at 10–20 k_BT, a motor step releases about 20 k_BT of ATP hydrolysis and does 8 pN·nm of work, a protein folds with a net stability of only 5–15 k_BT. Fluctuation–dissipation fixes the noise from the friction, leaving no freedom to postulate a quiet machine in a warm bath.',
 tex:R`\langle x^2\rangle=\frac{k_BT}{\kappa},\qquad p(E)\propto e^{-E/k_BT},\qquad D=\frac{k_BT}{\gamma}`,
 p:'Not a reduction of biology to physics but a constraint on what biology can contain — the sort of relation Elliott Sober calls a source law rather than a consequence law. It has real eliminative force: proposals for molecular machines that would beat the fluctuation bound are ruled out before any biology is examined, and several published ratchet schemes died exactly this way.'},

{a:'hydro',b:'biophys',kind:'singular',param:R`\mathrm{Re}=\rho vL/\mu\to0`,
 t:'Fluid mechanics → Life at low Reynolds number: losing the time derivative',
 f:'For a swimming bacterium Re ≈ 10⁻⁴. Dropping inertia turns Navier–Stokes into the Stokes equation, which contains no time derivative at all: the flow at each instant is fixed entirely by the instantaneous boundary motion. Sequence still matters, but the *rate* does not, and a stroke that retraces its own configuration path produces zero net displacement however fast it is performed.',
 tex:R`\mu\nabla^2\vec v=\nabla p,\quad \nabla\cdot\vec v=0;\qquad \text{stop distance}\ \sim\rho a^2v/\mu\approx0.1\ \text{Å}`,
 p:'A limit that changes the *type* of the equation rather than merely the size of a term, and therefore singular in Berry\'s sense: the symmetry group of the low-Re problem is larger than that of the finite-Re problem, and the scallop theorem is a consequence of the extra symmetry. Purcell\'s point is that the constraint is not quantitative but structural, and it explains a fact of biological form — why flagella rotate or undulate and nothing in the microbial world rows.'},

{a:'thermo',b:'biophys',kind:'constitutive',param:R`\Delta G_{\rm ATP}\approx-50\ \mathrm{kJ/mol}`,
 t:'Thermodynamics → Molecular machines: efficiency bounds without equilibrium',
 f:'Molecular motors run far from equilibrium, so Carnot is the wrong bound. What replaces it is the set of fluctuation theorems and, more recently, thermodynamic uncertainty relations, which trade precision against dissipation: a motor that steps regularly must dissipate at least a certain amount per step, regardless of mechanism.',
 tex:R`\frac{\mathrm{Var}(J)}{\langle J\rangle^2}\ \ge\ \frac{2k_B}{\Sigma},\qquad \frac{P(+\sigma)}{P(-\sigma)}=e^{\sigma/k_B}`,
 p:'These are the first genuinely new thermodynamic constraints since the nineteenth century, and they bite on biology rather than on heat engines. Philosophically they matter because they are *inequalities on the possible*, derived from the microdynamics, which apply to systems whose mechanisms are unknown — the rare case of a lower-level theory constraining an upper-level one without describing it.'},

{a:'biochem',b:'biophys',kind:'constitutive',param:R`\text{rates}\to\text{forces}`,
 t:'Biochemistry ⟷ Biophysics: the same molecules, a different set of observables',
 f:'Biochemistry measures ensemble rate constants in a cuvette; biophysics measures force, displacement and dwell time on one molecule at a time. The two are consistent — the mean of the single-molecule dwell distribution recovers the bulk k_cat — but the single-molecule record contains information the bulk average destroys: static disorder between copies, memory between cycles, and the order of substeps.',
 tex:R`k_{\rm cat}=\left(\int_0^\infty t\,p(t)\,dt\right)^{-1};\qquad k(F)=k_0e^{F\Delta x^\ddagger/k_BT}`,
 p:'A case where averaging is not innocent. The bulk description is recoverable from the single-molecule one but not conversely, and phenomena the bulk cannot express — a kinase that switches between slow and fast conformers for minutes at a time — were simply invisible until the measurement changed. Good evidence for the view that levels in biology are individuated by instruments as much as by nature.'},

{a:'biophys',b:'molbio',kind:'constitutive',param:R`\text{specificity from }\Delta\Delta G`,
 t:'Biophysics → Molecular biology: where the fidelity comes from',
 f:'Base pairing gives a discrimination free energy of only a few k_BT, which predicts an error rate near 10⁻² — a hundred times worse than the observed 10⁻⁴ of transcription and far worse than replication\'s 10⁻⁹. The gap is closed by kinetic proofreading: an irreversible, ATP-consuming delay step that lets the wrong substrate fall off twice, squaring the discrimination at a measurable energetic cost.',
 tex:R`f_{\rm eq}=e^{-\Delta\Delta G/k_BT},\qquad f_{\rm KPR}\simeq f_{\rm eq}^{\,n+1}\ \text{at a cost of}\ n\ \text{hydrolyses}`,
 p:'Hopfield and Ninio derived a biological mechanism from a thermodynamic impossibility argument — equilibrium binding *cannot* deliver the observed accuracy — and the mechanism was then found. That is the explanatory pattern philosophers of biology usually deny is available outside physics: a constraint-based derivation that predicts the existence of a mechanism before it is observed.'},

{a:'molbio',b:'sysbio',kind:'coarse',param:R`\text{parts}\to\text{network}`,
 t:'Molecular biology → Systems biology: the parts list is not the behaviour',
 f:'Given every gene, protein and interaction, the dynamic behaviour still does not follow: it requires rate constants, concentrations, compartments and initial conditions, most of which are unmeasured. Systems biology writes ODEs over the network and fits what it cannot measure — and then finds that the fits are radically non-identifiable, with parameters spanning orders of magnitude while predictions stay fixed.',
 tex:R`\dot{\vec x}=N\vec v(\vec x;\vec p);\qquad \text{eigenvalues of } H_{ij}=\partial^2\chi^2/\partial\log p_i\partial\log p_j\ \text{span}\ 10^6`,
 p:'"Sloppiness" is an empirical discovery with direct philosophical consequences: these models are predictively good and parametrically meaningless, so their success cannot be read as evidence that the fitted values are the real ones. It is structural realism arriving in cell biology by the back door — the stiff directions in parameter space are real, the individual coordinates are not.'},

{a:'info',b:'sysbio',kind:'analogy',param:R`\text{motif}\leftrightarrow\text{circuit}`,
 t:'Information theory → Network motifs: the engineering metaphor, priced',
 f:'Motif analysis counts subgraphs that appear more often than in a degree-preserving randomisation, and assigns each an information-processing function — the coherent feed-forward loop as a persistence detector, the incoherent one as a pulse generator. The functional claims have been tested directly in synthetic circuits and largely hold.',
 tex:R`Z=\frac{N_{\rm real}-\langle N_{\rm rand}\rangle}{\sigma_{\rm rand}};\qquad \text{FFL delay}\ \tau=\frac{1}{\alpha}\ln\frac{1}{1-K/\beta}`,
 p:'The function is real; the inference from over-representation to function is not deductive, and the null model does the arguing. Change the randomisation — preserve clustering as well as degree, or account for gene duplication — and much of the enrichment softens. A good test case for how much explanatory weight a statistical baseline can carry, and the answer is: less than the literature assumes.'},

{a:'sysbio',b:'devbio',kind:'instantiation',param:R`\text{GRN kernels}`,
 t:'Systems biology → Development: the network that builds a body',
 f:'Developmental gene regulatory networks are the systems-biology formalism applied to a specific problem, with the addition that the network is spatially distributed and its inputs are maternal gradients. Davidson\'s sea-urchin endomesoderm network is the most completely specified example: dozens of regulatory genes with experimentally verified cis-regulatory linkages, sufficient to predict the effect of a perturbation.',
 tex:R`\partial_t c_i=D_i\nabla^2c_i+f_i(\vec c)-\mu_ic_i`,
 p:'The reason development is the strongest case for mechanistic explanation in biology: the model is not fitted to the output but built from independently verified regulatory connections, and it then predicts perturbation results. Whether the "kernels" Davidson claimed to be evolutionarily immovable really are is a separate and much weaker claim, which comparative data has not been kind to.'},

{a:'genetics',b:'devbio',kind:'contested',param:R`\text{gene}\to\text{trait}`,
 t:'Transmission genetics → Development: what a gene is for',
 f:'Mendelian genetics infers gene–trait relations from breeding ratios without any account of how the gene acts. Development supplies that account, and it does not have the form the inference assumed: the same gene acts at several times in several tissues, its effect depends on the gradients it sits in, and the mutant phenotype names the step at which the process most visibly breaks rather than the gene\'s function.',
 tex:R`\text{eyeless}^{-}\Rightarrow\text{no eye};\ \text{but}\ \text{eyeless}\ \text{ectopic}\Rightarrow\text{eye on a leg}`,
 p:'The gene-for-a-trait idiom survives in population genetics because it is there a claim about variance in a population, not about causation in an individual — a distinction Lewontin made in 1974 and which is still routinely elided. Development is where the elision is most visible: knowing that a mutation abolishes an eye tells you almost nothing about what builds an eye.'},

{a:'devbio',b:'evo',kind:'upward',param:R`\text{bias in } \delta z`,
 t:'Development → Evolution: variation is not isotropic',
 f:'Standard quantitative genetics treats mutation as supplying variation in all directions, leaving selection to do the shaping. Development denies the premise: the mapping from genotype to phenotype is structured, so some variants are common and others effectively unavailable. Measured mutational covariance matrices (M) resemble the standing covariance matrices (G) far more than chance allows, in organisms as different as Drosophila and nematodes.',
 tex:R`\Delta\bar z=G\beta;\qquad \text{with } G\approx cM \text{ observed across taxa}`,
 p:'An upward constraint that changes what needs explaining. If the direction of available variation is biased, then a trait distribution can look adaptive without selection having chosen it, and the adaptationist inference weakens. This is the defensible core of the evo-devo critique, and it is considerably narrower — and better evidenced — than the claim that development replaces selection as the explanation of form.'},

{a:'biophys',b:'neuro',kind:'constitutive',param:R`\gamma\approx20\ \mathrm{pS},\ N\sim10^{2}/\mu m^2`,
 t:'Biophysics → Neurophysiology: the conductances in Hodgkin–Huxley are populations of channels',
 f:'Hodgkin and Huxley fitted smooth macroscopic conductances with no molecular commitment. Single-channel recording later showed those conductances are sums over stochastic two-state pores, with the smooth curve recovered as the ensemble mean. Where channel numbers are small, the noise is not negligible and can by itself trigger spikes.',
 tex:R`g_{\rm Na}(t)=N\gamma\,p_{\rm open}(V,t);\qquad \sigma^2=N\gamma^2p(1-p)`,
 p:'A textbook reduction that is genuine but incomplete in an instructive way: the deterministic model is the N → ∞ limit of the stochastic one, and real axons are not in that limit. The philosophically interesting point is that Hodgkin and Huxley\'s variables m, n and h were explicitly presented as curve-fitting devices, were later found to correspond to real gating particles, and are nevertheless still wrong in detail — a hard case for both instrumentalist and realist readings of model parameters.'},

{a:'biophys',b:'physio',kind:'constitutive',param:R`\Delta p = 8\mu LQ/\pi r^4`,
 t:'Biophysics → Physiology: transport bounds on body plans',
 f:'Diffusion alone carries a molecule about 100 μm in a second and 1 cm in roughly a day, so any tissue thicker than a few hundred micrometres needs convective transport. That single scaling argument, applied before any physiology, predicts the necessity of circulatory and respiratory systems and the approximate spacing of capillaries.',
 tex:R`t\sim L^2/D,\qquad D_{\rm O_2}\approx2\times10^{-9}\ \mathrm{m^2/s}\Rightarrow L_{\rm crit}\sim100\ \mu\mathrm{m}`,
 p:'An explanation by physical necessity rather than by selection history: the capillary spacing is what it is because nothing else would work, not because a lineage happened on it. Such explanations are unusual in biology and philosophically valuable, since they show a case where the answer to "why does this organism have that structure" is not evolutionary at all.'}

];
