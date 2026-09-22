const PHYSICS_B = [
{
 id:'qm', n:'Quantum Mechanics', aka:'Non-relativistic quantum theory',
 dom:'physics', tier:2, years:'1925 – 1926', status:'confirmed',
 scale:{len:'10⁻¹⁵ – 10⁻⁶ m', en:'10⁻⁹ – 10⁻³ GeV', lg:11},
 one:'The theory of systems with a fixed number of non-relativistic particles, in which states are vectors in a Hilbert space, observables are operators, and the theory predicts only probabilities — with an unresolved question about what happens on measurement.',
 onto:'Contested, and this is not a detail: the formalism is agreed, the ontology is not. Candidates: the wavefunction is the complete physical state (Everett, GRW); it is a state of knowledge about an underlying particle configuration (Bohm); it is a bookkeeping device for an agent\'s expectations (QBism, pragmatist readings).',
 state:'A ray in a complex separable Hilbert space ℋ (or a density operator ρ on ℋ). Composite systems: tensor products, ℋ_AB = ℋ_A ⊗ ℋ_B — which is where entanglement comes from and where classical intuition dies.',
 eqs:[
  {tex:R`i\hbar\frac{\partial}{\partial t}|\psi\rangle=\hat H|\psi\rangle,\qquad \hat H=\frac{\hat p^{2}}{2m}+V(\hat x)`, name:'Schrödinger equation', gloss:'Linear, deterministic, unitary. Every interpretive difficulty comes from the fact that this equation, applied to a measuring device, does not produce a definite outcome.'},
  {tex:R`[\hat x,\hat p]=i\hbar\quad\Longrightarrow\quad \Delta A\,\Delta B\ \ge\ \tfrac12\left|\langle[\hat A,\hat B]\rangle\right|,\quad \Delta x\Delta p\ge \hbar/2`, name:'Canonical commutator & uncertainty relation', gloss:'Not a limit on measurement disturbance but a property of states: no state is sharp in both. Kennard–Robertson form is a theorem, not a measurement claim.'},
  {tex:R`P(a)=\left\|\hat P_{a}|\psi\rangle\right\|^{2}=\langle\psi|\hat P_{a}|\psi\rangle`, name:'Born rule', gloss:'The only place probability enters. Gleason\'s theorem: for dim ℋ ≥ 3, it is the unique probability measure on the lattice of projections — so the *form* is forced, though why there are probabilities at all is not.'},
  {tex:R`\rho_{A}=\mathrm{Tr}_{B}\,\rho_{AB},\qquad |\Psi\rangle\neq|\psi_A\rangle\otimes|\psi_B\rangle \ \text{(entangled)}`, name:'Reduced state & entanglement', gloss:'The whole is not determined by the parts. Schrödinger called this "the characteristic trait of quantum mechanics" — not superposition.'},
  {tex:R`\frac{d\langle \hat A\rangle}{dt}=\frac{1}{i\hbar}\langle[\hat A,\hat H]\rangle+\left\langle\frac{\partial \hat A}{\partial t}\right\rangle \ \Rightarrow\ m\frac{d^{2}\langle x\rangle}{dt^{2}}=-\langle \nabla V\rangle`, name:'Ehrenfest theorem', gloss:'Expectation values obey Newton-like equations — but with ⟨∇V(x)⟩, not ∇V(⟨x⟩). The two agree only for narrow wavepackets in slowly-varying potentials. This is the gap where the classical limit actually lives.'},
  {tex:R`\psi(x)\sim \frac{A}{\sqrt{p(x)}}\exp\!\left(\frac{i}{\hbar}\int^{x}\! p(x')dx'\right),\qquad p=\sqrt{2m(E-V)}`, name:'WKB / semiclassical form', gloss:'Valid when the de Broglie wavelength varies slowly, |dλ/dx| ≪ 1. The 1/ħ in the exponent is why the ħ → 0 limit is *singular*: the phase oscillates infinitely fast rather than converging.'},
  {tex:R`S\le 2\ \text{(local hidden variables)};\qquad S_{\rm QM}=2\sqrt2\approx 2.828`, name:'CHSH–Bell inequality', gloss:'An experimentally decidable question about metaphysics. Nature violates the bound — confirmed loophole-free (Hensen 2015, Giustina, Shalm; Nobel 2022).'}
 ],
 concepts:[
  {t:'Superposition', d:'Linearity of the state space. Not "being in two places" but having no definite value for the relevant observable — the physical signature is interference, which vanishes the moment which-path information leaks out.'},
  {t:'Entanglement & non-separability', d:'Correlations exceeding anything a common cause can produce, without permitting signalling. The "spooky action" language is misleading: no-signalling holds exactly.'},
  {t:'Measurement problem', d:'The unitary dynamics is linear, so if |detector ready⟩|↑⟩ → |up⟩ and |ready⟩|↓⟩ → |down⟩, then |ready⟩(|↑⟩+|↓⟩) → |up⟩+|down⟩ — a superposed pointer. Either the dynamics is incomplete (Everett: it is all there, branches), or it is wrong (GRW: add collapse), or the description is incomplete (Bohm: add positions). Every option pays a price.'},
  {t:'Decoherence', d:'Environmental entanglement destroys interference between pointer states in ~10⁻²⁰ s for macroscopic objects. It explains why we never see interference and selects a preferred basis (einselection) — it does *not* by itself produce a single outcome, because the global state stays superposed. Widely and wrongly presented as a solution.'},
  {t:'Contextuality', d:'Kochen–Specker: for dim ℋ ≥ 3, one cannot assign values to all observables simultaneously, consistently with functional relations, independently of which compatible set they are measured with. A constraint on hidden variables independent of locality.'},
  {t:'Identical particles', d:'States are (anti)symmetrised: permutation is not a physical operation. Fermions exclude; bosons bunch. This has ontological teeth — quantum "particles" may not be individuals in any classical sense.'}
 ],
 results:[
  {n:'Atomic spectra', s:'Hydrogen energies E_n = −13.6 eV/n², the periodic table via shell filling + Pauli exclusion — the origin of all of chemistry.'},
  {n:'Tunnelling', s:'T ≈ exp(−2∫√(2m(V−E))/ħ dx). Alpha decay (Gamow 1928), STM, nuclear fusion in the Sun (which would not ignite classically).'},
  {n:'Bell violations', s:'Local realism is empirically false. Whatever replaces it must be non-local (Bohm), non-unique-outcome (Everett), or deny the setting-independence assumption.'},
  {n:'Bose–Einstein condensation (1995)', s:'Macroscopic occupation of a single mode below T_c = (2πħ²/mk_B)(n/2.612)^{2/3}. Quantum coherence at millimetre scales.'},
  {n:'Superconductivity, superfluidity, lasers, transistors', s:'Roughly a third of the GDP of developed economies runs on the applied consequences.'},
  {n:'No-cloning, no-signalling', s:'Structural theorems: an unknown state cannot be copied; entanglement cannot transmit information. Foundations of quantum cryptography.'}
 ],
 valid:{holds:'Non-relativistic systems from nuclei to (in careful experiments) 10⁴-atom molecules and gram-scale oscillators. No confirmed deviation anywhere.', breaks:'v → c (needs QFT); variable particle number; gravitational self-interaction of the state (untested, and where a genuine breakdown could hide); and — foundationally — it does not say what happens when a measurement occurs.'},
 detail:{
  deriv:[
   {h:'The classical limit is singular — this matters philosophically', b:'Naively ħ → 0 in the Schrödinger equation. But ħ appears in the *denominator* of the WKB phase exp(iS/ħ), so as ħ → 0 the wavefunction oscillates unboundedly fast: the limit does not exist pointwise. What does converge is the Wigner function toward a classical Liouville density, and only after smoothing. Berry\'s term: this is a *singular* limit, structurally like the ray-optics limit λ → 0 of wave optics, where caustics and rainbows live precisely in the region where the limit fails. Consequence for reduction: classical mechanics is not obtained from QM by an ordinary limit operation. Chaotic systems make this vivid — the Ehrenfest time after which quantum and classical predictions diverge grows only logarithmically, t_E ~ λ⁻¹ ln(S/ħ), so for the Solar System it is ~50 million years.'},
   {h:'What actually delivers classicality', b:'Three ingredients, none sufficient alone: (i) large action S/ħ ≫ 1 so WKB applies; (ii) narrow wavepackets in slowly-varying potentials so Ehrenfest\'s theorem closes; (iii) decoherence, which suppresses interference between macroscopically distinct states at rate Λ_dec ~ (m k_B T /ħ²) (Δx)² — for a 1 g object with Δx = 1 cm, coherence dies in ~10⁻³⁰ s. Decoherence explains the *absence of interference*, not the *presence of one outcome*.'},
   {h:'Quantisation as the inverse map', b:'Dirac\'s correspondence {A,B}_PB → (1/iħ)[Â,B̂] maps classical Poisson brackets to commutators. It is not a well-defined functor: the Groenewold–van Hove theorem shows no quantisation map can be consistent for all polynomial observables. So "quantise the classical theory" — the actual route by which every quantum theory was discovered — is provably not a legitimate general procedure, which is a startling fact about the relation between the two levels.'}
  ],
  deeper:[
   {h:'The interpretations, priced', b:'**Everett**: keep the Schrödinger equation, drop unique outcomes. Price: make sense of probability where everything happens (decision-theoretic derivations, Deutsch–Wallace; disputed), and the preferred-basis problem (answered by decoherence). **Bohm**: add particle positions guided by ψ via dx/dt = (ħ/m)Im(∇ψ/ψ). Price: explicit non-locality, a privileged foliation in the relativistic case, and ψ doing work while being unobservable. **GRW/CSL**: modify the dynamics with stochastic localisation. Price: a new physical constant, tail problems, and difficulty relativising — but it is the only one that is *empirically distinguishable*, and is being actively constrained. **QBism/pragmatism**: the state is an agent\'s credence. Price: it is unclear what the theory says about the world when nobody is looking.'},
   {h:'What Bell\'s theorem actually shows', b:'The derivation needs: (a) outcomes determined by λ plus local settings (factorisability), and (b) settings independent of λ (statistical independence / "free choice"). Violation refutes the conjunction. Denying (a) gives non-locality; denying (b) gives superdeterminism or retrocausality. Everett denies the framework\'s assumption of single outcomes. What Bell does *not* show is that quantum mechanics requires faster-than-light causation — no-signalling is a theorem.'}
  ]
 },
 phil:{
  stance:'The one place in mature physics where an unresolved interpretive question is not merely philosophical decoration: the interpretations differ about the ontology, some differ about the dynamics, and one of them (GRW) is empirically testable.',
  disputes:[
   'The measurement problem, and whether decoherence dissolves, relocates, or merely reframes it.',
   'ψ-ontic vs ψ-epistemic. The PBR theorem (2012) rules out a broad class of ψ-epistemic models given a preparation-independence assumption — how strong is that assumption?',
   'Is the ħ → 0 limit a reduction in Nagel\'s sense at all? Berry, Batterman and Rosaler argue the singularity means the classical level is not eliminable even in principle; Butterfield argues emergence and reduction are compatible here.',
   'Whether identical quantum particles are individuals (French & Redhead, Saunders on weak discernibility).'
  ],
  read:['Wallace, *The Emergent Multiverse*','Maudlin, *Quantum Non-Locality and Relativity*','Batterman, *The Devil in the Details*','Bell, *Speakable and Unspeakable in Quantum Mechanics*','Rosaler, "Local Reduction in Physics" (2015)']
 },
 fig:'wkb'
},

{
 id:'sr', n:'Special Relativity', aka:'Einstein 1905 · Minkowski spacetime',
 dom:'physics', tier:2, years:'1905 (Minkowski 1908)', status:'confirmed',
 scale:{len:'any', en:'any (flat spacetime)', lg:9},
 one:'Space and time are aspects of a single 4-dimensional geometry with an invariant interval; the speed of light is a structural constant of that geometry rather than a property of light.',
 onto:'Minkowski spacetime: an affine 4-manifold with a flat metric η = diag(−1,1,1,1) and no preferred inertial frame, no absolute simultaneity, and no ether.',
 state:'Events are points; worldlines are curves with timelike tangents; physical quantities are tensors on M⁴, and laws are tensor equations (hence automatically frame-independent).',
 eqs:[
  {tex:R`ds^{2}=-c^{2}dt^{2}+dx^{2}+dy^{2}+dz^{2}\quad\text{(invariant)}`, name:'Minkowski interval', gloss:'The whole theory in one line. Everything else — time dilation, contraction, the speed limit — is a consequence of this quantity being the same for all inertial observers.'},
  {tex:R`t'=\gamma\!\left(t-\frac{vx}{c^{2}}\right),\quad x'=\gamma(x-vt),\quad \gamma=\frac{1}{\sqrt{1-v^{2}/c^{2}}}`, name:'Lorentz transformation', gloss:'A rotation in the (t,x) plane by an imaginary angle. Note the vx/c² term in t′: relativity of simultaneity is the *primary* effect; dilation and contraction are corollaries.'},
  {tex:R`E=\gamma mc^{2},\quad \mathbf{p}=\gamma m\mathbf{v},\quad E^{2}=(pc)^{2}+(mc^{2})^{2}`, name:'Relativistic energy–momentum', gloss:'Mass and energy are the same quantity in different units. For m = 0, E = pc — massless particles exist and must move at c.'},
  {tex:R`u'=\frac{u+v}{1+uv/c^{2}}\ \xrightarrow[c\to\infty]{}\ u+v`, name:'Velocity addition', gloss:'The Galilean rule is the leading term of an expansion in v/c. The correction is second order, which is why 200 years of mechanics missed it.'},
  {tex:R`\partial_{\mu}F^{\mu\nu}=\mu_{0}J^{\nu},\quad \partial_{[\alpha}F_{\beta\gamma]}=0,\quad F_{\mu\nu}=\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu}`, name:'Maxwell, covariantly', gloss:'Electromagnetism was *already* relativistic in 1865. E and B are components of one tensor; whether a field is "electric" or "magnetic" is frame-dependent.'}
 ],
 concepts:[
  {t:'Relativity of simultaneity', d:'"At the same time" is not frame-independent for spacelike-separated events. This, not time dilation, is the conceptual core — and it is what makes a global present untenable, driving the block-universe debate.'},
  {t:'Light cone & causal structure', d:'Events are timelike-, null-, or spacelike-separated, invariantly. Causal order is preserved for timelike/null pairs; for spacelike pairs, temporal order is frame-dependent — so any causal influence between them would break frame-independence of causal order.'},
  {t:'Proper time', d:'τ = ∫√(−ds²)/c, the time read by a clock along its own worldline. Path-dependent: the twin "paradox" is simply that in Minkowski geometry the straight line is the *longest* timelike path.'},
  {t:'Four-vectors & covariance', d:'Write the law as a tensor equation and frame-independence is automatic. This "principle-theory" style (Einstein\'s own term) constrains theories rather than modelling mechanisms.'},
  {t:'No rigid bodies, no instantaneous forces', d:'Rigidity is incompatible with a finite signal speed; hence continuum mechanics and action-at-a-distance forces must be replaced by fields.'}
 ],
 results:[
  {n:'Muon lifetime', s:'Atmospheric muons (τ = 2.2 μs) reach the ground; γ ≈ 20–50. Time dilation, or equivalently length contraction of the atmosphere in the muon frame.'},
  {n:'Ives–Stilwell, Kennedy–Thorndike, Michelson–Morley', s:'Together these fix the Lorentz transformation uniquely (Robertson–Mansouri–Sexl test theory).'},
  {n:'E = mc² in practice', s:'Nuclear binding energies, the Sun\'s luminosity, particle–antiparticle annihilation, and the ~1% of a nucleon\'s mass that is actually quark rest mass (the rest is QCD binding energy).'},
  {n:'Particle accelerators', s:'At the LHC, protons reach γ ≈ 7460. Beam optics are designed with relativistic kinematics as routine engineering.'},
  {n:'Antimatter', s:'The Dirac equation — SR + QM — predicted the positron (1928/1932). Antimatter is a consequence of relativity, not an extra assumption.'}
 ],
 valid:{holds:'All non-gravitational physics, to extraordinary precision. Lorentz-invariance violations are constrained at the 10⁻¹⁸–10⁻²³ level in various sectors.', breaks:'Where gravity matters: SR is the tangent-space approximation to GR, exact only at a point and to first order. Accelerating frames can be handled, but tidal effects cannot.'},
 detail:{
  deriv:[
   {h:'Newtonian limit c → ∞ (or v/c → 0)', b:'Expand: γ = 1 + v²/2c² + O(v⁴/c⁴). Then E = mc² + ½mv² + ..., recovering the kinetic energy plus a constant; p → mv; velocity addition → Galilean; and the vx/c² term in the Lorentz transformation vanishes, restoring absolute simultaneity. Geometrically, the limit takes the Minkowski metric to the degenerate pair of structures of Galilean spacetime (a temporal metric t_{ab} and a spatial metric h^{ab} with t_{ab}h^{bc} = 0) — the "limit" is a *contraction of the symmetry group*, Poincaré → Galilei, in İnönü–Wigner\'s sense. This is a clean case where the limit is smooth and the reduction is essentially unproblematic — worth contrasting with ħ → 0.'},
   {h:'Why the two limits differ in kind', b:'v/c → 0 is a limit in a dimensionless parameter that genuinely goes to zero in the regime of interest, and the expansion is regular: corrections are analytic in (v/c)². The ħ → 0 limit has ħ in an exponent\'s denominator and is asymptotic/singular. Two "limits", two different philosophical verdicts about reduction — from the same textbook vocabulary.'},
   {h:'Deriving SR without light', b:'Assume only: homogeneity of space and time, isotropy, the relativity principle, and that transformations form a group. One gets a one-parameter family with an invariant speed K; K = ∞ gives Galilei, K finite gives Lorentz. Experiment sets K = c. Light\'s role is evidential, not definitional — a point that matters for how one reads the second postulate.'}
  ],
  deeper:[
   {h:'Principle theory vs constructive theory', b:'Einstein distinguished *principle* theories (start from empirical generalisations elevated to postulates — thermodynamics, SR) from *constructive* theories (build from hypothesised microstructure — kinetic theory). He presented SR as a principle theory and said this was a virtue born of necessity. Brown\'s *Physical Relativity* argues the reverse: length contraction and time dilation need a dynamical explanation in terms of the Lorentz-covariant forces holding rods together, and geometry alone explains nothing. This is one of the sharpest live debates in philosophy of physics — is spacetime structure explanatory, or is it a codification of dynamical symmetries?'},
   {h:'Does SR entail the block universe?', b:'Putnam and Rietdijk argued from relativity of simultaneity to the reality of all events (eternalism). Stein replied that the argument smuggles in transitivity of "is real to", which relativistic causal structure does not license. The debate is a model case of inferring metaphysics from physics — and of how much work the tacit premises do.'}
  ]
 },
 phil:{
  stance:'The textbook example of a smooth, unproblematic limiting-case relation (Poincaré → Galilei) — which is exactly why it is so useful as a contrast class for the limits that are *not* smooth.',
  disputes:[
   'Brown\'s dynamical vs the geometrical interpretation of Lorentz contraction: does spacetime structure explain rod behaviour, or the other way round?',
   'Presentism vs eternalism after the relativity of simultaneity (Putnam/Rietdijk vs Stein).',
   'Conventionality of simultaneity (Reichenbach\'s ε): is the standard synchrony a convention or fixed by causal structure? (Malament\'s theorem constrains the options.)',
   'Whether Lorentz\'s ether theory is empirically equivalent to SR, and what underdetermination that establishes.'
  ],
  read:['Brown, *Physical Relativity* (2005)','Stein, "On Einstein–Minkowski Space-Time" (1968)','Maudlin, *Philosophy of Physics: Space and Time*','Einstein, "On the Electrodynamics of Moving Bodies" (1905)']
 },
 fig:'lightcone'
},

{
 id:'em', n:'Classical Electrodynamics', aka:'Maxwell\'s theory of the electromagnetic field',
 dom:'physics', tier:2, years:'1861 – 1873', status:'confirmed',
 scale:{len:'10⁻¹⁰ m – astronomical', en:'≪ m_e c²', lg:8},
 one:'Charges and currents source a continuous electromagnetic field that carries energy, momentum and angular momentum, propagates at c, and — as Maxwell realised — simply *is* light.',
 onto:'Fields E(x,t), B(x,t) (or the potential A_μ) as physical entities on spacetime, plus charge and current densities. The field is not a bookkeeping device: it carries momentum, as Poynting flux, and without it momentum conservation fails.',
 state:'(E, B) everywhere, plus charge/current distributions; or (A_μ, ∂_t A_μ) modulo gauge. Deterministic and time-reversal invariant, with the arrow of radiation imposed by boundary conditions, not by the equations.',
 eqs:[
  {tex:R`\nabla\cdot\mathbf{E}=\frac{\rho}{\varepsilon_{0}},\qquad \nabla\cdot\mathbf{B}=0`, name:'Gauss\'s laws', gloss:'Charge sources E; there are no magnetic monopoles (an empirical fact, not a necessity — Dirac showed one monopole would explain charge quantisation).'},
  {tex:R`\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t},\qquad \nabla\times\mathbf{B}=\mu_{0}\mathbf{J}+\mu_{0}\varepsilon_{0}\frac{\partial\mathbf{E}}{\partial t}`, name:'Faraday & Ampère–Maxwell', gloss:'The displacement-current term μ₀ε₀∂E/∂t was Maxwell\'s addition, required by charge conservation — and it is what makes wave solutions possible. A correction demanded by consistency that turned out to predict light.'},
  {tex:R`\Box \mathbf{E}=0\ \Rightarrow\ c=\frac{1}{\sqrt{\mu_{0}\varepsilon_{0}}}=2.998\times10^{8}\ \mathrm{m/s}`, name:'Wave equation', gloss:'Two constants measured in the laboratory with capacitors and wires yield the speed of light. Maxwell 1862: "we can scarcely avoid the inference that light consists in the transverse undulations of the same medium."'},
  {tex:R`\mathbf{F}=q(\mathbf{E}+\mathbf{v}\times\mathbf{B})`, name:'Lorentz force law', gloss:'Logically independent of the Maxwell equations: they say how charges make fields, this says how fields move charges. Together with Newton\'s laws they close the system — almost (see radiation reaction).'},
  {tex:R`\mathbf{S}=\frac{1}{\mu_{0}}\mathbf{E}\times\mathbf{B},\qquad u=\frac{\varepsilon_{0}E^{2}}{2}+\frac{B^{2}}{2\mu_{0}},\qquad \frac{\partial u}{\partial t}+\nabla\cdot\mathbf{S}=-\mathbf{J}\cdot\mathbf{E}`, name:'Poynting theorem', gloss:'Local energy conservation with the field as a genuine carrier — the strongest classical argument for field realism.'},
  {tex:R`P=\frac{\mu_{0}q^{2}a^{2}}{6\pi c}\quad\text{(Larmor)}`, name:'Radiation from accelerated charge', gloss:'Why the Rutherford atom is unstable: a classical orbiting electron would spiral in within ~10⁻¹¹ s. Classical EM predicts, unambiguously, that matter cannot exist.'}
 ],
 concepts:[
  {t:'Field as entity', d:'Faraday\'s lines of force made literal. The decisive argument is dynamical: in the field-free description, momentum is not conserved instant-to-instant for two charges in relative motion; assign momentum density ε₀E×B and it is.'},
  {t:'Gauge freedom', d:'A → A + ∇χ, φ → φ − ∂_t χ leave E, B unchanged. Surplus structure — except that the Aharonov–Bohm effect shows the holonomy ∮A·dl is physical even where B = 0.'},
  {t:'Retarded potentials & the arrow of radiation', d:'The equations admit both retarded and advanced solutions; we only ever see retarded. The asymmetry is not in the law. Wheeler–Feynman absorber theory tried to derive it from cosmological boundary conditions; most now treat it as a special-initial-conditions fact, parallel to the thermodynamic arrow.'},
  {t:'Linearity & superposition', d:'Maxwell\'s equations in vacuum are linear: light does not scatter light. This fails at O(α²) in QED (Euler–Heisenberg), and photon–photon scattering has now been observed in heavy-ion collisions.'},
  {t:'Self-energy and radiation reaction', d:'A point charge has infinite field energy; the Abraham–Lorentz force F = μ₀q²ȧ/6πc admits runaway and pre-accelerating solutions. Classical EM is internally inconsistent for point charges — a fact usually taught as a footnote, which deserves better.'}
 ],
 results:[
  {n:'Unification of electricity, magnetism, optics', s:'The first unification in physics, and the template for every subsequent one.'},
  {n:'Prediction of radio waves', s:'Hertz 1887, 23 years after the theory. A textbook case of novel prediction of a previously unknown phenomenon.'},
  {n:'Lorentz invariance before relativity', s:'Maxwell\'s equations are invariant under the Lorentz group, not the Galilei group. That conflict with mechanics *is* the problem Einstein solved.'},
  {n:'Entire technological base', s:'Motors, generators, radio, radar, waveguides, antennas, optical design, electrical engineering as a discipline.'},
  {n:'Failure at atomic scale', s:'Blackbody spectrum (ultraviolet catastrophe), atomic stability, specific heats. These failures are what forced quantum theory.'}
 ],
 valid:{holds:'Macroscopic fields, from DC to gamma rays, whenever photon occupation numbers are large and fields are below the Schwinger limit E_c = m_e²c³/eħ ≈ 1.3 × 10¹⁸ V/m.', breaks:'Single photons; atomic-scale matter; fields near E_c (vacuum pair production); point-charge self-energy.'},
 detail:{
  deriv:[
   {h:'QED → classical EM', b:'Coherent states |α⟩ with ⟨n⟩ ≫ 1 have field expectation values obeying Maxwell\'s equations with fractional fluctuations ~1/√⟨n⟩. A 1 mW laser beam contains ~10¹⁵ photons/s, so fluctuations are ~10⁻⁷·⁵. Equivalently, ħ → 0 at fixed field strength means photon number → ∞. This is a smooth limit — unlike the classical limit of *matter*.'},
   {h:'EM → geometric optics (a second, singular limit)', b:'Write E = A(x)e^{ik₀S(x)} and let λ → 0. The eikonal equation |∇S|² = n² drops out, and rays are the characteristics. But λ → 0 is singular in exactly the same way as ħ → 0: the phase oscillates unboundedly, and the limit fails precisely at caustics and focal points, where geometric optics predicts infinite intensity. Berry\'s point: the *interesting* physics — rainbows, supernumerary bows, the twelvefold structure of caustics — lives in the boundary layer where the limit breaks down. The philosophical moral transfers directly to ħ → 0 and to N → ∞.'},
   {h:'EM + matter → circuit theory', b:'When wavelengths greatly exceed device size (quasi-static regime), fields collapse into lumped parameters R, L, C, and Maxwell\'s equations become Kirchhoff\'s laws. A genuine EFT-style reduction — the "small parameter" is L_device/λ — and an unusually clean example of how a whole engineering discipline is a controlled approximation.'}
  ],
  deeper:[
   {h:'The Aharonov–Bohm effect and gauge realism', b:'An electron beam encircling a perfectly shielded solenoid picks up a phase Δφ = qΦ/ħ even though E = B = 0 everywhere along its path. Options: (i) A is physically real (but gauge-dependent); (ii) the holonomy ∮A·dl — gauge-invariant but non-local — is the real quantity; (iii) there is non-local action of B. Each option gives up something a classical field theorist wanted. The standard modern reading takes the holonomy, i.e. the fibre-bundle connection, as the physical structure.'},
   {h:'Maxwell\'s own route, and what it shows about models', b:'Maxwell derived the equations from an elaborate mechanical model of vortices and idle wheels in the ether — a model he did not believe and later discarded, keeping the equations. A standard case study in the role of analogy and heuristic models: the scaffolding was false, the structure it produced was retained. Grist for structural realism (Worrall), and a caution about inferring ontology from derivation history.'}
  ]
 },
 phil:{
  stance:'The historical origin of the field concept and the first successful unification; also the theory whose internal inconsistencies (self-energy, atomic instability) are usually swept aside in teaching, making it a good case for how theories survive known defects.',
  disputes:[
   'Are fields entities or dispositions of charges? Does the Poynting momentum argument settle it?',
   'Gauge potentials: surplus structure, or real given Aharonov–Bohm?',
   'Worrall\'s structural realism was built on the Fresnel → Maxwell transition: the equations were retained while the ether ontology was abandoned. Is the "structure" really preserved, or is that hindsight?',
   'The radiation arrow: law, boundary condition, or cosmological fact?'
  ],
  read:['Worrall, "Structural Realism: The Best of Both Worlds?" (1989)','Lange, *An Introduction to the Philosophy of Physics*','Jackson, *Classical Electrodynamics*','Frisch, *Inconsistency, Asymmetry, and Non-Locality*']
 },
 fig:'eikonal'
},

{
 id:'cm', n:'Classical Mechanics', aka:'Newtonian · Lagrangian · Hamiltonian mechanics',
 dom:'physics', tier:2, years:'1687 · 1788 · 1833', status:'confirmed (limited domain)',
 scale:{len:'10⁻⁶ m – 10¹² m', en:'v ≪ c, S ≫ ħ', lg:4},
 one:'Point masses and rigid bodies move deterministically in absolute (or Galilean) space and time under forces; equivalently, they extremise an action — and the second formulation turned out to be the one that survived.',
 onto:'Newtonian: particles with mass and position, forces acting between them, in a spacetime with absolute time and Euclidean spatial geometry. Lagrangian/Hamiltonian: a configuration manifold Q, or a symplectic phase space (T*Q, ω), with dynamics generated by a single scalar function.',
 state:'Newtonian: (x_i, v_i) for N particles, 6N numbers. Hamiltonian: a point in phase space M = T*Q with symplectic form ω = dp ∧ dq; evolution is the flow of the Hamiltonian vector field, preserving ω (hence Liouville measure).',
 eqs:[
  {tex:R`\mathbf{F}=\frac{d\mathbf{p}}{dt}=m\ddot{\mathbf{x}},\qquad \mathbf{F}_{12}=-\mathbf{F}_{21}`, name:'Newton\'s second and third laws', gloss:'Second-order in time: position and velocity fix the future. The third law is what makes momentum conservation hold — and it fails for velocity-dependent (magnetic) forces unless the field carries momentum.'},
  {tex:R`S[q]=\int_{t_1}^{t_2}L(q,\dot q,t)\,dt,\qquad \delta S=0\ \Longleftrightarrow\ \frac{d}{dt}\frac{\partial L}{\partial \dot q_{i}}-\frac{\partial L}{\partial q_{i}}=0`, name:'Hamilton\'s principle & Euler–Lagrange equations', gloss:'Coordinate-independent, handles constraints painlessly, and generalises to fields and to quantum theory. The action is the object that survives every subsequent revolution.'},
  {tex:R`H(q,p)=\sum_i p_{i}\dot q_{i}-L,\qquad \dot q_{i}=\frac{\partial H}{\partial p_{i}},\quad \dot p_{i}=-\frac{\partial H}{\partial q_{i}}`, name:'Hamilton\'s equations', gloss:'First-order, geometrically symplectic. The bridge to both statistical mechanics (phase-space measure) and quantum theory (H → Ĥ).'},
  {tex:R`\{A,B\}=\sum_{i}\left(\frac{\partial A}{\partial q_{i}}\frac{\partial B}{\partial p_{i}}-\frac{\partial A}{\partial p_{i}}\frac{\partial B}{\partial q_{i}}\right),\qquad \dot A=\{A,H\}`, name:'Poisson bracket', gloss:'The classical structure whose quantum counterpart is (1/iħ)[Â,B̂]. The structural parallel is exact for linear observables and provably breaks for general ones (Groenewold–van Hove).'},
  {tex:R`\mathbf{F}=-\frac{Gm_{1}m_{2}}{r^{2}}\hat r,\qquad \nabla^{2}\Phi=4\pi G\rho`, name:'Universal gravitation', gloss:'Instantaneous action at a distance — which Newton himself called "so great an Absurdity that... no Man who has... a competent Faculty of thinking, can ever fall into it."'},
  {tex:R`\text{symmetry of }L\ \Longrightarrow\ \text{conserved current}\qquad\text{(Noether, 1918)}`, name:'Noether\'s theorem', gloss:'Time-translation → energy; space-translation → momentum; rotation → angular momentum. Conservation laws stop being brute facts and become consequences of spacetime symmetry. Arguably the single most important theorem in theoretical physics.'}
 ],
 concepts:[
  {t:'Determinism', d:'Given exact initial data, the future is fixed — in principle. Even this fails in edge cases: Norton\'s dome, and non-Lipschitz forces, admit multiple solutions; and collision singularities (Xia 1992: five bodies can be sent to infinity in finite time) mean Newtonian mechanics is not globally well-posed.'},
  {t:'Absolute vs relational space', d:'Newton\'s rotating bucket argues for absolute space; Leibniz and Mach argue against. Galilean spacetime (no absolute position, absolute acceleration) is the modern compromise — an affine structure without a preferred rest frame.'},
  {t:'Phase space & Liouville', d:'Hamiltonian flow preserves volume. This is the foundation of statistical mechanics, and the reason the microcanonical measure is the natural one.'},
  {t:'Integrability & chaos', d:'Integrable systems (N conserved quantities in involution) foliate phase space into tori. Generic systems are not integrable: KAM theory shows tori survive small perturbations but break on resonances, and trajectories separate as e^{λt}. Determinism does not entail predictability.'},
  {t:'Constraints & generalised coordinates', d:'Lagrangian mechanics eliminates constraint forces by working on the constraint surface. This is why the formalism scales to rigid bodies, robotics and celestial mechanics where Newtonian bookkeeping does not.'},
  {t:'Action-at-a-distance vs fields', d:'Newtonian gravity is instantaneous, which is incompatible with relativity. The field concept (from EM) is what eventually resolves it.'}
 ],
 results:[
  {n:'Kepler\'s laws derived', s:'Elliptical orbits, equal areas, T² ∝ a³ — all consequences of the inverse-square law. The founding achievement of the mathematical-law style of science.'},
  {n:'Prediction of Neptune (1846)', s:'Le Verrier and Adams inferred an unseen planet from Uranus\'s residuals; Galle found it within a degree. The same method applied to Mercury produced "Vulcan", which does not exist — a paired case study in when auxiliary-hypothesis rescue works and when it does not.'},
  {n:'Continuum and rigid-body mechanics', s:'Euler\'s equations, elasticity, structural engineering. Essentially all built infrastructure.'},
  {n:'Spaceflight', s:'Every trajectory ever flown is Newtonian, with relativistic corrections only for timing and precision navigation.'},
  {n:'Chaos (Poincaré 1890, Lorenz 1963)', s:'Sensitive dependence on initial conditions in deterministic systems. Weather, the long-term Solar System (Lyapunov time ~5 Myr).'}
 ],
 valid:{holds:'v ≪ c, action ≫ ħ, weak gravitational fields, and not too many particles for the computation to be feasible.', breaks:'Precession of Mercury; GPS timing; atomic and molecular structure; blackbody radiation; specific heats at low T; superconductivity; anything with v/c or ħ/S not small.'},
 detail:{
  deriv:[
   {h:'Recovered from three directions', b:'(1) **From SR**, as v/c → 0: an analytic, regular expansion with corrections O(v²/c²). (2) **From GR**, as GM/rc² → 0 and v/c → 0 jointly: gives ∇²Φ = 4πGρ. Note that Newton–Cartan theory, not flat-space Newtonian gravity, is the mathematically clean limit (Ehlers\' frame theory) — the geometrised form survives, the force does not. (3) **From QM**, as S/ħ → ∞: singular, requiring decoherence in addition to the formal limit. Three "reductions" of the same theory with three different structures. Any general account of intertheoretic reduction has to accommodate all three.'},
   {h:'Why Hamiltonian form is the one that matters', b:'Newtonian force language does not generalise: it survives neither relativity (no rigid bodies, no instantaneous forces) nor quantum theory. The action, the symplectic structure and Noether\'s theorem survive all of them. A striking fact for theory-succession debates — what carried over from 1687 was not Newton\'s ontology or even his laws as stated, but the variational structure discovered a century *after* him.'},
   {h:'Norton\'s dome', b:'On the surface h(r) = −(2/3g)r^{3/2}, the equation of motion r̈ = √r admits both r(t) = 0 for all t and r(t) = (t−T)⁴/144 for any T > 0. A mass sits at rest and then spontaneously moves, with no violation of Newton\'s laws. The force is not Lipschitz. Whether this shows Newtonian mechanics is indeterministic or shows the model is unphysical is exactly the sort of question that reveals what one thinks laws are *for*.'}
  ],
  deeper:[
   {h:'Reduction, and what "recovering Newton" leaves out', b:'Nagel\'s model requires derivation of the reduced theory from the reducer plus bridge laws. Even the tidiest case (SR → CM) does not quite fit: "Newtonian mass" is not identical to any relativistic quantity — relativistic mass and rest mass diverge, and the term partitions differently. Kuhn and Feyerabend pressed exactly this. The standard reply (Schaffner, Nickles, Batterman, Butterfield) is that what is derived is not the old theory but a *corrected image* of it, and that this is enough for continuity. The strength of that reply is one of the load-bearing questions in the philosophy of science.'},
   {h:'Chaos and the limits of the deterministic picture', b:'For the Solar System, trajectories diverge with Lyapunov time ~5 Myr; positions become unpredictable beyond ~100 Myr no matter how well measured. Determinism is a property of the equations, predictability a property of our epistemic access, and the gap between them is a fact about the world (Laskar\'s integrations), not about our instruments.'}
  ]
 },
 phil:{
  stance:'The reference case for every debate about intertheoretic reduction, theory succession and scientific realism — and the one theory in this atlas that is *known false* and *universally still used*.',
  disputes:[
   'Absolute vs relational space; whether Galilean spacetime is a stable middle position or an unmotivated compromise.',
   'Is Newtonian mechanics reduced by, or merely approximated by, relativity and quantum mechanics? Nagel vs Kuhn/Feyerabend vs Batterman.',
   'Norton\'s dome and the scope of Newtonian determinism.',
   'Is the principle of least action explanatory, or teleological window-dressing on a differential equation?',
   'Cartwright: do the laws of physics lie? Newtonian force laws are literally true of nothing and enormously useful — what is the correct account of that?'
  ],
  read:['Arnold, *Mathematical Methods of Classical Mechanics*','Norton, "Causation as Folk Science" (2003)','Batterman, *The Devil in the Details*','Cartwright, *How the Laws of Physics Lie*','Butterfield, "Less is Different" (2011)']
 },
 fig:'phase'
}
];
