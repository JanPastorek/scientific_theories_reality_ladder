const CHEM = [
{
 id:'qchem', n:'Quantum Chemistry', aka:'Born–Oppenheimer · Hartree–Fock · DFT',
 dom:'chemistry', tier:4, years:'1927 – 1965', status:'confirmed',
 scale:{len:'10⁻¹¹ – 10⁻⁹ m', en:'0.1 – 10 eV', lg:10},
 one:'Molecules treated as electrons moving in the field of clamped nuclei — the approximation that creates molecular structure as an object of study, and without which "the shape of a molecule" is not even well-defined.',
 onto:'Electrons and nuclei, Coulomb interactions, antisymmetrised wavefunctions. What is *added* by the approximation: a potential energy surface, nuclear geometry, and hence bonds, conformers, reaction paths and transition states — none of which appear in the exact molecular Hamiltonian.',
 state:'An antisymmetric N-electron wavefunction Ψ(r₁σ₁,...,r_Nσ_N; R) parametrically dependent on nuclear coordinates R; or, in DFT, the ground-state electron density n(r), which by Hohenberg–Kohn determines everything.',
 eqs:[
  {tex:R`\Psi_{\rm tot}(\mathbf{r},\mathbf{R})\approx \psi_{\rm el}(\mathbf{r};\mathbf{R})\,\chi_{\rm nuc}(\mathbf{R}),\qquad \kappa=\left(\frac{m_{e}}{M}\right)^{1/4}\sim 0.1`, name:'Born–Oppenheimer ansatz', gloss:'Nuclei are 1836× heavier than electrons, so electrons adjust adiabatically. The expansion parameter is (m_e/M)^{1/4}, chosen because vibrational energies scale as κ² and rotational as κ⁴ — the level structure of molecules is a direct readout of this hierarchy.'},
  {tex:R`\hat H_{\rm el}\psi_{n}(\mathbf{r};\mathbf{R})=E_{n}(\mathbf{R})\,\psi_{n}(\mathbf{r};\mathbf{R})`, name:'Electronic Schrödinger equation & potential energy surface', gloss:'E_n(R) is the PES. Minima are stable molecules and conformers, first-order saddles are transition states, and the whole language of reaction mechanism lives on this surface — which exists only because the nuclei were clamped.'},
  {tex:R`E_{\rm HF}=\min_{\{\phi\}}\langle \Phi_{\rm SD}|\hat H|\Phi_{\rm SD}\rangle,\qquad \hat F\phi_{i}=\varepsilon_{i}\phi_{i}`, name:'Hartree–Fock & the self-consistent field', gloss:'A single Slater determinant: each electron in the mean field of the others, with exchange included exactly. Recovers ~99% of the total energy and systematically misses the ~1% (correlation energy) that determines chemistry.'},
  {tex:R`E_{\rm corr}=E_{\rm exact}-E_{\rm HF};\qquad \text{MP2},\ \text{CCSD(T)}\ \text{("gold standard", }\sim1\ \mathrm{kcal/mol})`, name:'Electron correlation', gloss:'Chemical accuracy is 1 kcal/mol ≈ 0.043 eV ≈ 4×10⁻³ of a typical bond energy. Chemistry is decided in the fourth significant figure of the total energy.'},
  {tex:R`E[n]=T_{s}[n]+\int v_{\rm ext}n\,d^{3}r+E_{H}[n]+E_{xc}[n],\qquad \left(-\tfrac12\nabla^{2}+v_{\rm eff}\right)\phi_{i}=\varepsilon_{i}\phi_{i}`, name:'Kohn–Sham DFT', gloss:'Hohenberg–Kohn: the ground-state density determines the external potential, hence everything. The exact E_xc[n] exists and is unknown; practice uses hundreds of approximations (LDA, GGA, hybrids), chosen partly by which works for the system at hand.'},
  {tex:R`\nabla_{\mathbf{R}}E_{n}=0:\ \text{minimum (molecule)};\quad \text{one negative Hessian eigenvalue: transition state}`, name:'Stationary points on the PES', gloss:'Molecular structure is *defined* as a critical point of a function that the exact theory does not contain.'}
 ],
 concepts:[
  {t:'Potential energy surface', d:'The central construct of chemistry. It is a function of nuclear coordinates in a fixed frame — so it presupposes that nuclei have definite positions, which the exact quantum treatment denies.'},
  {t:'Adiabatic vs diabatic', d:'BO fails where surfaces approach: avoided crossings and conical intersections. There the nuclear motion couples electronic states, and photochemistry, vision and photosynthesis all happen precisely there. BO breakdown is not exotic — it is where the interesting chemistry is.'},
  {t:'Correlation energy', d:'The difference between reality and the best single-determinant description. Small in absolute terms, decisive in relative terms — a good illustration that the size of an approximation\'s error is meaningless without the scale of the effect being explained.'},
  {t:'Basis set & basis-set limit', d:'Orbitals expanded in finite sets (STO-3G, cc-pVTZ). Results depend on the basis, and quoted accuracy means little without it. A pervasive form of model-dependence inside a supposedly ab initio method.'},
  {t:'Functional choice in DFT', d:'DFT is exact in principle and approximate in every implementation. The proliferation of functionals, fitted to reference data, makes it in practice a semi-empirical method wearing first-principles clothing — a point Perdew and others have argued about at length ("Jacob\'s ladder" vs "the great functional swindle").'},
  {t:'Molecular structure as emergent', d:'The exact Hamiltonian of a chiral molecule is parity-invariant, so its exact eigenstates are parity eigenstates — superpositions of left- and right-handed forms. Handedness is not a property of an exact eigenstate. It arises from BO plus environmental decoherence.'}
 ],
 results:[
  {n:'The chemical bond, explained', s:'H₂⁺ and H₂ solved (Burrau 1927, Heitler–London 1927): binding comes from delocalisation lowering kinetic energy, plus exchange. The covalent bond has no classical analogue.'},
  {n:'Periodic trends', s:'Ionisation energies, electronegativity, atomic radii — all follow from shell structure and screening.'},
  {n:'Predictive computational chemistry', s:'CCSD(T)/CBS achieves ~1 kcal/mol on small molecules; DFT is routine for systems of hundreds of atoms. Nobel 1998 (Kohn, Pople), 2013 (multiscale QM/MM).'},
  {n:'Woodward–Hoffmann rules', s:'Orbital symmetry conservation predicts which pericyclic reactions proceed and with what stereochemistry. A symmetry argument at the chemical level, not a computation.'},
  {n:'Spectroscopy', s:'Vibrational, rotational and electronic spectra computed and assigned; the basis of analytical chemistry and astrochemistry.'}
 ],
 valid:{holds:'Ground-state chemistry away from surface crossings; molecules from H₂ to proteins (with method-dependent accuracy).', breaks:'Conical intersections and photochemistry (BO fails by construction); strongly correlated systems (transition-metal clusters, bond dissociation, where single-reference methods collapse); and exponential scaling — exact solution of an N-electron system costs ~e^N.'},
 detail:{
  deriv:[
   {h:'Born–Oppenheimer as an EFT-style separation', b:'Expand in κ = (m_e/M)^{1/4}. Electronic energies scale as κ⁰ ~ 1 eV, vibrational as κ² ~ 0.1 eV, rotational as κ⁴ ~ 10⁻³ eV. Each level of nuclear motion is a further-suppressed perturbation on the electronic problem, which is exactly the structure of an effective-theory expansion: heavy degrees of freedom (nuclei) frozen, light ones (electrons) solved, corrections organised in powers of a small ratio. The nuclear Schrödinger equation on E_n(R) then gives vibrational and rotational spectra, with non-adiabatic couplings as the higher-order terms. The whole of molecular spectroscopy is a readout of this hierarchy.'},
   {h:'What BO adds that was not there before', b:'This is the crux for the reduction debate. The exact molecular Hamiltonian is invariant under rotations, translations and parity. Its exact eigenstates therefore have no orientation, no nuclear geometry and no handedness. "Molecular structure" — the thing all of chemistry is about — appears only *after* the clamped-nucleus approximation. So structure is not derived from quantum mechanics; it is introduced by an approximation to quantum mechanics. Woolley put it sharply: molecular structure is not a property that quantum mechanics assigns to isolated molecules; it is a property of molecules *in interaction with an environment*, or an artefact of a representation.'},
   {h:'Hund\'s paradox, and why the world is chiral', b:'For a chiral molecule the two enantiomers are minima separated by a barrier; exact eigenstates are their symmetric and antisymmetric combinations, split by tunnelling. For D₂S₂ the tunnelling time is microseconds; for a typical amino acid it is ~10⁶⁵ years. So a chiral molecule is *dynamically* trapped, and decoherence from collisions and radiation continuously localises it. Chirality — a fact on which all of biochemistry depends — is thus an environment-induced, symmetry-broken, emergent property, not a term in the Hamiltonian. This is arguably the single best-worked example of emergence anywhere in the sciences, because every step is quantitative.'}
  ],
  deeper:[
   {h:'Does chemistry reduce to physics? The state of play', b:'The affirmative case: Dirac 1929 — "the underlying physical laws necessary for the mathematical theory of a large part of physics and the whole of chemistry are thus completely known" — plus the periodic table from shell structure, plus computational chemistry\'s predictive success. The negative case: (i) molecular structure requires BO and is absent from the exact theory; (ii) exact solution is exponentially hard, so "in principle" derivability does no epistemic work; (iii) chemical concepts — bond, aromaticity, electronegativity, functional group, oxidation state — are not definable in quantum-mechanical terms, and several are demonstrably not observables (the bond is not a Hermitian operator; QTAIM and other schemes give different, defensible bond assignments); (iv) DFT\'s functionals are calibrated against chemical data, so the "derivation" is partly circular. Hettema, Scerri, Woolley and Hendry have developed these; Weisberg and Needham are more sanguine. The modern consensus is closer to: ontological reduction yes, epistemic and conceptual reduction no.'},
   {h:'DFT: exact theory, approximate practice', b:'Hohenberg–Kohn guarantees a universal functional exists. It does not tell you what it is, and the v-representability problem shows the domain is delicate. In practice the field has produced a ladder of functionals with fitted parameters (B3LYP has three), validated against benchmark sets. A method both rigorously grounded and empirically calibrated — and this hybrid character is now typical of how "first-principles" computation actually works across the sciences.'}
  ]
 },
 phil:{
  stance:'The canonical test case for inter-level reduction outside physics, and the one where the negative verdict is most carefully documented: the object of the higher science (molecular structure) is provably absent from the lower theory\'s exact description.',
  disputes:[
   'Woolley\'s challenge: is molecular structure emergent, environment-induced, or simply a description-relative artefact?',
   'Is the "bond" a real entity, a useful fiction, or an ambiguous concept with several inequivalent operationalisations (MO, VB, QTAIM, ELF)?',
   'Does DFT\'s empirical calibration undermine claims that computational chemistry derives chemistry from physics?',
   'Scerri: does quantum mechanics explain the periodic table, given that the Madelung (n+ℓ) rule is not derived from the Schrödinger equation and has known exceptions?'
  ],
  read:['Woolley, "Must a Molecule Have a Shape?" (JACS 1978)','Hendry, "Two Conceptions of the Chemical Bond" (2008)','Scerri, *The Periodic Table: Its Story and Its Significance*','Hettema, *Reducing Chemistry to Physics*','Primas, *Chemistry, Quantum Mechanics and Reductionism*']
 },
 fig:'pes'
},

{
 id:'bond', n:'Chemical Structure & Bonding', aka:'MO theory · VB theory · periodicity · stereochemistry',
 dom:'chemistry', tier:5, years:'1852 – 1939', status:'confirmed',
 scale:{len:'10⁻¹⁰ m', en:'1 – 5 eV per bond', lg:10},
 one:'The autonomous conceptual system chemists actually use — valence, bond, functional group, oxidation state, aromaticity, stereochemistry — which predicts enormous swathes of chemical behaviour without solving a single Schrödinger equation.',
 onto:'Atoms with characteristic valences, connected by bonds of definite order, arranged in three dimensions, grouped into functional groups that behave transferably across compounds. Formally reducible to electron density; conceptually independent of it, and historically prior by seventy years.',
 state:'A molecular graph — atoms as vertices, bonds as edges, with stereochemical decorations. This is a *combinatorial* state space, and the fact that it predicts so well is the central fact about chemistry.',
 eqs:[
  {tex:R`\psi_{\rm MO}=\sum_{i}c_{i}\phi_{i}\ \text{(LCAO)};\qquad \text{bond order}=\tfrac12(n_{\rm bonding}-n_{\rm antibonding})`, name:'Molecular orbital theory', gloss:'Correctly predicts O₂ is paramagnetic (two unpaired electrons in π*) — which Lewis structures get wrong. The decisive early test of MO over VB.'},
  {tex:R`E_{\pi}=\alpha+ m_{j}\beta,\qquad m_{j}=2\cos\frac{2\pi j}{n}\ \text{(cyclic)};\quad 4n+2\ \text{aromatic}`, name:'Hückel theory & the aromaticity rule', gloss:'A two-parameter model on the molecular graph gives the 4n+2 rule, benzene\'s stability, and the whole of aromatic chemistry. Essentially graph theory with physics attached.'},
  {tex:R`\Delta\chi=\chi_{A}-\chi_{B}:\ \ \text{ionic character};\qquad \mu=q\,d\ \ \text{(dipole)}`, name:'Electronegativity', gloss:'Pauling\'s scale, derived from bond energies. Not a quantum-mechanical observable — there are at least five inequivalent definitions (Pauling, Mulliken, Allred–Rochow, Allen, Sanderson) giving different numbers and all usable.'},
  {tex:R`\Delta H_{\rm rxn}\approx\sum \text{BE}_{\rm broken}-\sum \text{BE}_{\rm formed}`, name:'Bond energy additivity', gloss:'Transferability: a C–H bond is worth ≈ 413 kJ/mol in almost any molecule. This near-additivity is what makes chemistry tractable and is a genuinely surprising fact about the electron density — locality of chemical environment (the "nearsightedness" Kohn later made precise).'},
  {tex:R`\text{VSEPR: }2\!\to\!\text{linear},\ 3\!\to\!\text{trigonal},\ 4\!\to\!\text{tetrahedral},\ 5\!\to\!\text{bipyramidal},\ 6\!\to\!\text{octahedral}`, name:'VSEPR geometry', gloss:'Count electron domains, minimise repulsion, read off the shape. A rule of thumb with no rigorous derivation that gets molecular geometry right for most main-group compounds.'},
  {tex:R`R/S,\ E/Z,\ \text{d/l};\qquad \text{enantiomers: }\Delta G=0\ \text{in an achiral environment}`, name:'Stereochemistry', gloss:'Identical composition and connectivity, different three-dimensional arrangement, different biology. Thalidomide is the standard cautionary example.'}
 ],
 concepts:[
  {t:'Valence', d:'The combining capacity of an element. Proposed by Frankland (1852) and used to build all of structural organic chemistry *before* the electron was discovered in 1897 — a striking case of a successful theoretical posit with no known underlying mechanism.'},
  {t:'Functional group', d:'A substructure (–OH, –COOH, C=C) conferring characteristic reactivity nearly independently of the rest of the molecule. The organising principle of organic chemistry, and a textbook case of a multiply-realised higher-level kind.'},
  {t:'Resonance / delocalisation', d:'When one Lewis structure will not do, chemists use a weighted superposition. Notoriously, "resonance structures" do not exist individually — an explicitly fictional device that carries real predictive content.'},
  {t:'Aromaticity', d:'Cyclic delocalisation conferring extra stability. Diagnosed by several inequivalent criteria — energetic, magnetic (NICS), geometric, electronic — which do not always agree. A concept doing heavy work while resisting definition.'},
  {t:'Oxidation state', d:'A bookkeeping convention (IUPAC updated the definition as recently as 2016) that nevertheless organises inorganic chemistry, redox and electrochemistry. Real enough to build an industry on, conventional enough to be legislated.'},
  {t:'Chirality', d:'Non-superimposable mirror images. Fundamental to biochemistry (L-amino acids, D-sugars) and, as the quantum chemistry sheet shows, not a property of an exact molecular eigenstate.'}
 ],
 results:[
  {n:'The periodic table (1869)', s:'Mendeleev predicted eka-aluminium, eka-boron, eka-silicon with properties, and left gaps. Found as gallium, scandium, germanium. Novel prediction from an entirely phenomenological classification.'},
  {n:'Structural theory of organic chemistry', s:'Kekulé, Couper, van \'t Hoff, Le Bel: the tetrahedral carbon and molecular graph. Synthetic organic chemistry — including every pharmaceutical — is built on it.'},
  {n:'Retrosynthetic analysis (Corey)', s:'Plan a synthesis backwards by disconnecting bonds at functional-group logic. Nobel 1990. A purely chemical-level algorithm, now the basis of machine-learning synthesis planners.'},
  {n:'Pauling\'s resonance and hybridisation', s:'sp³/sp²/sp accounts for geometry; *The Nature of the Chemical Bond* (1939) shaped the field for fifty years.'},
  {n:'Woodward–Hoffmann rules (1965)', s:'Orbital symmetry determines allowed pericyclic pathways. Explains and predicts stereochemistry from a symmetry argument at the molecular-orbital level.'}
 ],
 valid:{holds:'Main-group and organic chemistry, most of coordination chemistry; the workhorse conceptual scheme of the discipline.', breaks:'Hypervalent compounds, electron-deficient boranes (three-centre bonds), transition-metal and f-block complexes, metallic and extended solids, strongly correlated systems — plus every case where VB and MO give conflicting pictures.'},
 detail:{
  deriv:[
   {h:'How this level relates to quantum chemistry', b:'Downward: MO theory *is* an approximate solution of the electronic Schrödinger equation (LCAO with a minimal basis). Hückel theory is that, with all integrals replaced by two parameters. So there is a genuine derivational path. Upward: the path does not deliver the concepts. Bond order, electronegativity, oxidation state, functional group and aromaticity are not expectation values of any operator; several have multiple inequivalent formalisations that disagree numerically while all being useful. Bader\'s QTAIM defines bonds as gradient paths of the density and gives well-defined atoms-in-molecules — and its bond assignments sometimes conflict with chemical intuition (e.g. it finds a "bond path" between the ortho hydrogens in biphenyl). Which is correct? The question may not have a determinate answer, which is itself the interesting result.'},
   {h:'Why transferability works — and why that is surprising', b:'A C–H bond energy is nearly constant across molecules; a carbonyl group reacts similarly in ketones, esters and amides. Kohn made the underlying fact precise as the "nearsightedness of electronic matter": the density at a point depends on the external potential only within a screening length of ~1 Å in typical systems. That theorem *explains* why chemistry can be done with local, additive concepts — a rare case of a higher-level methodological principle receiving a lower-level justification after a century of successful use.'}
  ],
  deeper:[
   {h:'Chemistry as the standing counterexample to unity-of-science optimism', b:'Chemistry has been, on paper, reducible to physics since 1926. In practice the discipline grew, and continues to grow, using concepts with no quantum-mechanical definitions, and its predictions in most of organic chemistry still come from structural reasoning rather than computation. If "reduction achieved" were the right description, we should expect the higher-level vocabulary to wither. It has instead expanded. Whatever reduction means, it evidently does not mean *replacement* — and any adequate account has to explain the persistence, not merely tolerate it.'}
  ]
 },
 phil:{
  stance:'A mature, predictively powerful science whose central concepts are not definable in the vocabulary of the theory that supposedly grounds it. The best available counterweight to the assumption that reduction-in-principle settles anything.',
  disputes:[
   'Are chemical bonds real entities, structural features of the density, or useful fictions? (Hendry\'s structural vs energetic conceptions.)',
   'Does the existence of inequivalent operationalisations (five electronegativity scales, several aromaticity criteria) show conceptual defect or legitimate pluralism?',
   'What is the epistemic status of an admittedly fictional device — resonance structures — that carries real predictive content?',
   'Scerri on whether quantum mechanics explains, or merely accommodates, the periodic table.'
  ],
  read:['Hendry, *The Metaphysics of Chemistry*','Pauling, *The Nature of the Chemical Bond*','Bader, *Atoms in Molecules: A Quantum Theory*','Scerri & Fisher (eds.), *Essays in the Philosophy of Chemistry*']
 },
 fig:'mo'
},

{
 id:'chemkin', n:'Chemical Thermodynamics & Kinetics', aka:'Equilibrium · rate laws · transition state theory',
 dom:'chemistry', tier:5, years:'1864 – 1935', status:'confirmed',
 scale:{len:'molecular – bulk', en:'k_BT ≈ 0.025 eV at 300 K', lg:8},
 one:'Two independent questions about every reaction — *will it go?* (thermodynamics) and *how fast?* (kinetics) — answered by two separate theories that are often confused and never interchangeable.',
 onto:'Populations of molecules with a Boltzmann distribution of energies, crossing barriers on a potential energy surface. Concentrations and rate constants are the state variables; individual molecules appear only in the statistical derivation.',
 state:'A vector of concentrations {[A_i]}, evolving by coupled ODEs (the rate equations), with a thermodynamic constraint fixing the equilibrium point.',
 eqs:[
  {tex:R`\Delta G^{\circ}=-RT\ln K,\qquad K=\prod_{i}a_{i}^{\nu_{i}},\qquad \Delta G=\Delta H-T\Delta S`, name:'Equilibrium and free energy', gloss:'One equation connecting a measurable equilibrium constant to a thermodynamic state function. At 298 K, a factor of 10 in K costs 5.7 kJ/mol — chemistry is exquisitely sensitive to small energies.'},
  {tex:R`v=k\,[A]^{m}[B]^{n};\qquad k=A\,e^{-E_{a}/RT}\ \text{(Arrhenius)}`, name:'Rate law & Arrhenius equation', gloss:'Orders m, n are *empirical* and need not equal stoichiometric coefficients — they encode the mechanism, which is why kinetics is the primary evidence for mechanisms.'},
  {tex:R`k=\kappa\frac{k_{B}T}{h}\,\frac{Q^{\ddagger}}{Q_{A}Q_{B}}e^{-E_{0}/k_{B}T}=\kappa\frac{k_{B}T}{h}e^{-\Delta G^{\ddagger}/RT}`, name:'Eyring transition state theory', gloss:'k_BT/h ≈ 6×10¹² s⁻¹ at 298 K — a universal attempt frequency. TST assumes a quasi-equilibrium with the saddle-point configuration and no recrossing; κ patches the failures.'},
  {tex:R`v=\frac{V_{\max}[S]}{K_{M}+[S]},\qquad K_{M}=\frac{k_{-1}+k_{2}}{k_{1}}`, name:'Michaelis–Menten (steady-state approximation)', gloss:'Derived by setting d[ES]/dt ≈ 0 — a singular perturbation valid when [E] ≪ [S]. The template for essentially all of enzyme kinetics and much of systems biology.'},
  {tex:R`\Delta G^{\ddagger}=\frac{\lambda}{4}\left(1+\frac{\Delta G^{\circ}}{\lambda}\right)^{2}`, name:'Marcus theory of electron transfer', gloss:'Predicts an "inverted region" where reactions get *slower* as they become more exergonic — counterintuitive, doubted for 25 years, then confirmed (Miller & Closs 1984). Nobel 1992.'},
  {tex:R`\frac{d\mathbf{c}}{dt}=\mathbf{S}\,\mathbf{v}(\mathbf{c}),\qquad \text{stiff: }\tau_{\rm fast}/\tau_{\rm slow}\sim10^{-9}`, name:'Reaction networks', gloss:'Combustion and atmospheric mechanisms involve thousands of coupled reactions spanning nine decades in timescale. Stiffness forces separation-of-timescales methods — an EFT-like move inside chemistry.'}
 ],
 concepts:[
  {t:'Thermodynamic vs kinetic control', d:'Diamond is metastable; the graphite conversion takes ~10⁷⁸ years. Most of the organic world, and all of life, is kinetically trapped. "Favourable" and "fast" are orthogonal, and conflating them is the commonest error in the subject.'},
  {t:'Mechanism', d:'The sequence of elementary steps. Not observable, inferred from kinetics, isotope effects, stereochemistry and trapped intermediates — underdetermined in principle, and a good arena for thinking about inference to the best explanation in practice.'},
  {t:'Transition state', d:'A first-order saddle point on the PES, lifetime ~10⁻¹³ s. It is not an intermediate and cannot be isolated; femtosecond spectroscopy (Zewail, Nobel 1999) observes the crossing but not a species.'},
  {t:'Catalysis', d:'Lowers ΔG‡ without changing ΔG°. Enzymes achieve rate enhancements up to 10¹⁷ — orotidine decarboxylase turns a 78-million-year half-life into 18 milliseconds.'},
  {t:'Steady-state & rate-determining step', d:'Singular-perturbation approximations justified by timescale separation. The same logic as adiabatic elimination in physics and as integrating out heavy fields in EFT — a genuinely cross-level methodological pattern.'},
  {t:'Far from equilibrium', d:'Open systems with throughput can sustain oscillations (Belousov–Zhabotinsky), travelling waves and Turing patterns. ΔG still decreases globally; local order is paid for by export of entropy. This is the physical basis of how life is thermodynamically possible.'}
 ],
 results:[
  {n:'Haber–Bosch (1909)', s:'N₂ + 3H₂ ⇌ 2NH₃, driven by Le Chatelier reasoning plus catalysis. Feeds roughly half the world\'s population; consumes ~1–2% of global energy.'},
  {n:'Ozone-layer chemistry', s:'Catalytic Cl radical cycles, one atom destroying ~10⁵ O₃ molecules. Nobel 1995; led to the Montreal Protocol — kinetics driving international law.'},
  {n:'Enzyme kinetics', s:'Michaelis–Menten, allostery, inhibition mechanisms — the quantitative backbone of pharmacology.'},
  {n:'Marcus inverted region', s:'A counterintuitive prediction confirmed decades later; central to photosynthetic charge separation and photovoltaics.'},
  {n:'Dissipative structures', s:'Prigogine (Nobel 1977): ordered structures sustained by entropy export. Chemical clocks, pattern formation, and the conceptual bridge to biology.'}
 ],
 valid:{holds:'Dilute solutions, gas-phase and well-mixed systems, near or far from equilibrium, above the tunnelling regime.', breaks:'Very low temperature (hydrogen tunnelling dominates); single-molecule and small-copy-number regimes (needs stochastic chemical kinetics — the Gillespie algorithm; gene expression with ~10 mRNA copies is not described by rate equations); crowded or spatially structured media such as the cytoplasm; and non-TST-conforming reactions with significant recrossing.'},
 detail:{
  deriv:[
   {h:'From quantum chemistry to a rate constant', b:'(1) Compute the PES; locate reactants, transition state and products. (2) Compute partition functions Q from the vibrational frequencies at each stationary point (harmonic approximation). (3) Apply Eyring. What the derivation requires beyond quantum mechanics: a Boltzmann distribution (statistical mechanics), the quasi-equilibrium assumption, the no-recrossing assumption, and a choice of dividing surface. What it delivers: absolute rate constants, typically within one or two orders of magnitude, and much better for relative rates within a series — which is what chemists mostly need. So this really is a multi-level derivation, and it is honest about which inputs come from where.'},
   {h:'The steady-state approximation as singular perturbation', b:'Michaelis–Menten follows from ε = [E]₀/([S]₀+K_M) ≪ 1. Formally this is a fast/slow system: the fast variable [ES] relaxes to a slaved value determined by the slow variable [S], and the dynamics collapses onto a lower-dimensional slow manifold. This is *exactly* the structure of integrating out heavy fields in EFT, of the Born–Oppenheimer separation, and of adiabatic elimination in laser physics. The recurrence of one mathematical pattern across four disciplines that developed it independently is itself a fact worth explaining.'},
   {h:'Where rate equations fail: stochastic chemical kinetics', b:'Rate equations assume concentrations are smooth and deterministic — valid when molecule numbers are large. In a bacterial cell a transcription factor may be present in ~10 copies, and the correct description is the chemical master equation with Poissonian noise. Gene expression noise is not experimental error but a real dynamical variable that cells regulate and, in bet-hedging strategies, exploit. The continuum description fails in exactly the way the hydrodynamic continuum fails at high Knudsen number — same structure, different discipline.'}
  ],
  deeper:[
   {h:'Downward causation, without metaphysics', b:'A catalyst is a higher-level structural feature (an active-site geometry) that determines which of many thermodynamically allowed pathways is realised. Nothing about the microphysics is violated — all it does is change barrier heights — yet the explanation of *why this product and not that one* cites molecular architecture, not the Schrödinger equation. This is the ordinary, deflationary sense in which higher-level structure has causal relevance: constraint selection among microphysically permitted pathways. Much of the downward-causation literature would be improved by starting here rather than with consciousness.'}
  ]
 },
 phil:{
  stance:'The layer where physics becomes biology. Everything living is a kinetically controlled, far-from-equilibrium chemical network — so the thermodynamics/kinetics distinction is exactly what makes biology possible without violating anything.',
  disputes:[
   'Mechanisms are unobservable and inferred; how secure is inference to the best mechanistic explanation, given documented cases of long-accepted mechanisms being overturned?',
   'Is the transition state an entity, a region, or a mathematical artefact of a chosen dividing surface?',
   'Do reaction networks exhibit genuine downward causation, or only constraint-selection among microphysically-permitted paths?',
   'What does the recurrence of the same singular-perturbation structure across physics, chemistry and biology show — a deep fact, or the availability of a single useful technique?'
  ],
  read:['Machamer, Darden & Craver, "Thinking About Mechanisms" (2000)','Bechtel, *Discovering Cell Mechanisms*','Prigogine, *From Being to Becoming*','Ramsey, "Molecular Shape, Reduction, Explanation and Approximation" (1997)']
 },
 fig:'tst'
}
];
