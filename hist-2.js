const HIST_2 = {

qft: {
 origin:[
  {y:'1900–05', who:'Planck, Einstein', t:'The field is grainy',
   b:'Planck fits the blackbody curve by quantising oscillator energies in units hν — a move he called "an act of desperation" and long regarded as a mathematical trick. Einstein 1905 takes the quanta seriously to explain the photoelectric effect. The electromagnetic field, the paradigm continuum, has discrete excitations.'},
  {y:'1927', who:'Dirac', t:'Quantising the field itself',
   b:'"The quantum theory of the emission and absorption of radiation." Dirac quantises the EM field, deriving Einstein\'s A and B coefficients from first principles. Spontaneous emission — previously a brute empirical rate — becomes stimulated emission by vacuum fluctuations. This is the birth of QFT.'},
  {y:'1928', who:'Dirac', t:'An equation with a defect that was a prediction',
   b:'Seeking a first-order relativistic wave equation, Dirac finds one whose solutions include negative energies. He proposes a filled sea, identifies the holes first (wrongly) as protons, then as a new particle. Anderson finds the positron in a cloud chamber in 1932. Antimatter is a consequence of demanding relativity and quantum mechanics together.'},
  {y:'1930s–40s', who:'everyone', t:'Divergences and despair',
   b:'Loop corrections give infinite answers. Oppenheimer, Weisskopf and others confirm the problem is general. Dirac, Bohr and Landau all at various points concluded the framework was wrong. The theory was nearly abandoned.'},
  {y:'1947', who:'Lamb & Retherford; Shelter Island', t:'A measurement that forced the issue',
   b:'Using microwave technology developed for wartime radar, Lamb measures a 1057 MHz splitting between the 2s½ and 2p½ levels of hydrogen, which Dirac theory says are degenerate. At the Shelter Island conference weeks later, Bethe computes a non-relativistic estimate on the train home and gets ~1040 MHz by subtracting the free-electron self-energy. Renormalisation is born as an accounting trick that works.'},
  {y:'1948–49', who:'Tomonaga, Schwinger, Feynman; Dyson', t:'Covariant renormalisation',
   b:'Three independent formulations, proved equivalent by Dyson (1949), who also shows renormalisability to all orders. Feynman diagrams make the expansion computable by people who are not Schwinger.'},
  {y:'1954', who:'Yang & Mills', t:'Non-abelian gauge theory',
   b:'Generalising the U(1) of electromagnetism to SU(2). Pauli objected at the seminar that the gauge bosons would be massless and no such particles exist. The objection was correct and unanswered for a decade, until spontaneous symmetry breaking.'},
  {y:'1971–73', who:"'t Hooft & Veltman; Gross, Wilczek, Politzer", t:'Renormalisability and asymptotic freedom',
   b:"'t Hooft proves spontaneously broken gauge theories are renormalisable, making the electroweak model respectable overnight. Two years later the sign of the non-abelian beta function is computed: negative. Quarks are free at short distance — which is exactly what the SLAC scattering data had been showing."}
 ],
 exps:[
  {n:'The Lamb shift', who:'Lamb & Retherford, Columbia', y:'1947', fig:'lamb',
   setup:'A beam of hydrogen atoms is excited to the metastable 2s½ state by electron bombardment, then passed through a tunable microwave field in a magnetic field, and finally onto a tungsten detector that responds only to metastable atoms. When the microwave frequency matches the 2s½→2p½ splitting, atoms are driven to 2p½, which decays promptly to the ground state and is not detected. The signal is a dip in detector current.',
   meas:'Splitting 1057.8 MHz (modern value 1057.845 MHz). Dirac theory predicts exactly zero.',
   infer:'The electron interacts with its own radiation field; vacuum fluctuations and vacuum polarisation shift the levels. Field quantisation is physically real, not bookkeeping.',
   assume:'That the magnetic-field extrapolation to zero field is valid (the measurement is made in a field and extrapolated), and that the detector\'s metastable-selectivity is complete. Both were checked by varying beam conditions.'},
  {n:'Electron anomalous magnetic moment', who:'Kusch & Foley 1947; Dehmelt 1987; Gabrielse 2008–23', y:'1947–', fig:'penning',
   setup:'Modern version: a single electron is confined in a Penning trap — a 5 T magnetic field for radial confinement, a quadrupole electrostatic field for axial confinement, cooled to 100 mK in a dilution refrigerator. The cyclotron frequency ν_c and the spin-precession (anomaly) frequency ν_a are measured on the same single particle via quantum-jump spectroscopy of the axial mode. Then a/2 = ν_a/ν_c.',
   meas:'a_e = 1.159 652 180 59(13)×10⁻³. Theory, computed to five loops (12 672 diagrams at order α⁵): agreement at the 10⁻¹² level.',
   infer:'QED is correct to twelve significant figures. Equivalently, given a, the measurement now defines the world\'s most precise value of the fine-structure constant.',
   assume:'That the trap fields are characterised, that cavity QED shifts from the trap walls are computed, and — for the α extraction — that no beyond-Standard-Model contribution hides in a. The muon\'s a_μ, sensitive to heavier states by (m_μ/m_e)² ≈ 43 000, is where a discrepancy has been argued and is currently unresolved.'},
  {n:'Deep inelastic scattering at SLAC', who:'Friedman, Kendall, Taylor', y:'1967–73', fig:'dis',
   setup:'A 20 GeV electron beam from the 2-mile linac strikes a liquid-hydrogen target. Scattered electrons are momentum-analysed by large magnetic spectrometers at fixed angles (6°, 10°, 18°, 26°) and detected in scintillator/Čerenkov hodoscopes. The measured quantity is the double-differential cross-section d²σ/dΩdE′ as a function of energy loss ν and momentum transfer Q².',
   meas:'Cross-sections far larger than expected for a soft extended proton, and structure functions depending only on the ratio x = Q²/2Mν, not on Q² separately ("Bjorken scaling").',
   infer:'The proton contains point-like charged constituents. Scaling is what you get from elastic scattering off free point particles — hence quarks are nearly free at short distance, which asymptotic freedom later explained.',
   assume:'The parton model: that the constituents are free during the brief interaction and that their transverse momenta are negligible. Both fail at the few-percent level, and the logarithmic scaling violations that result are themselves a precision test of QCD.'},
  {n:'Lattice QCD hadron spectrum', who:'Dürr et al. (BMW collaboration)', y:'2008', fig:null,
   setup:'Not a laboratory experiment but a numerical one, and the standard is the same. Spacetime is discretised on a Euclidean lattice (typically 64³×128 sites, spacings a = 0.05–0.12 fm); the path integral is evaluated by Monte Carlo importance sampling over gauge configurations. Quark masses and the coupling are fixed by matching a small number of inputs (m_π, m_K, m_Ξ). Then a continuum and infinite-volume extrapolation is performed.',
   meas:'Light hadron masses — nucleon, Λ, Σ, Ξ, Δ, Ω — reproduced at the few-percent level with no further free parameters.',
   infer:'QCD is not just a perturbative recipe: it non-perturbatively generates ~99% of the mass of ordinary matter from binding energy, with quark rest masses contributing ~1%.',
   assume:'That the continuum limit a → 0 and chiral extrapolation to physical quark masses are controlled; that finite-volume effects are exponentially small. Each is estimated and quoted as a systematic — this is the part where a computation becomes an experiment with error bars.'}
 ],
 assume:[
  {a:'Microcausality: operators at spacelike separation commute.', k:'definition', n:'The formal expression of relativistic causality. It is what forces the spin–statistics connection, and hence the Pauli principle, and hence chemistry.'},
  {a:'The vacuum is unique and Poincaré-invariant, and energy is bounded below.', k:'definition', n:'The Wightman spectrum condition. Fails in curved spacetime and for accelerated observers — which is why the particle concept becomes observer-relative there (Unruh).'},
  {a:'The interaction can be switched on adiabatically (interaction picture).', k:'contested', n:'Haag\'s theorem says this is impossible in infinite volume: free and interacting representations are unitarily inequivalent. The standard S-matrix derivation therefore rests on a step known to be invalid, while producing 12-digit agreement. This is a genuine open foundational scandal, not a technicality.'},
  {a:'The perturbation series is meaningful.', k:'idealisation', n:'Dyson (1952) argued it has zero radius of convergence: the theory is unstable for e² < 0, so no disc of convergence surrounds the origin. It is an asymptotic series — useful truncated, divergent if summed.'},
  {a:'A cut-off Λ exists and low-energy physics is insensitive to it.', k:'empirical', n:'The Wilsonian reinterpretation. Justified by the decoupling theorem, and confirmed every time a new heavy particle is found without invalidating the low-energy theory.'},
  {a:'Fields are operator-valued distributions, not functions.', k:'definition', n:'Needed because products of fields at a point are ill-defined; this is the mathematical root of the divergences.'},
  {a:'Realistic interacting 4D QFTs exist as mathematical objects.', k:'contested', n:'Unproven. Constructing Yang–Mills with a mass gap is a Millennium Prize problem; φ⁴ in four dimensions is believed to be trivial (non-interacting in the continuum limit).'}
 ],
 notation:[
  {s:R`\hat\phi(x),\ \hat\psi(x)`, r:'"phi hat of x", "psi hat of x"', m:'Field operators at spacetime point x — scalar and spinor respectively. Not numbers and not wavefunctions: they create and destroy quanta when acting on states.', d:'m⁻¹ (scalar), m⁻³ᐟ² (spinor), in ħ = c = 1'},
  {s:R`a^{\dagger}_{k},\ a_{k}`, r:'"a-dagger k", "a k"', m:'Creation and annihilation operators for a quantum of momentum k. [a_k, a†_{k′}] = (2π)³δ³(k−k′) for bosons; anticommutators for fermions.', d:'—'},
  {s:R`|0\rangle`, r:'"the vacuum"', m:'The lowest-energy state. Not empty: it has zero-point energy, condensates, and entanglement across every region boundary (Reeh–Schlieder).', d:'—'},
  {s:R`\mathcal{L},\ S`, r:'"Lagrangian density", "action"', m:'S = ∫d⁴x ℒ. In QFT the Lagrangian *is* the specification of the theory — writing ℒ is what "choosing a theory" means.', d:'ℒ: energy density; S: J·s'},
  {s:R`D_{\mu}=\partial_{\mu}+ieA_{\mu}`, r:'"covariant derivative"', m:'Ordinary derivative corrected by the gauge field so that the result transforms covariantly under local phase rotations. The interaction term is generated entirely by this substitution — this is where "force" comes from.', d:'m⁻¹'},
  {s:R`F_{\mu\nu}`, r:'"field strength tensor"', m:'∂_μA_ν − ∂_νA_μ. Components are E and B. Geometrically the curvature of the gauge connection — the same mathematics as Riemann curvature, different bundle.', d:'V m⁻¹ (mixed)'},
  {s:R`\gamma^{\mu}`, r:'"gamma matrices"', m:'4×4 matrices satisfying {γ^μ,γ^ν} = 2η^{μν}. Their existence is why spin-½ is possible; several inequivalent explicit representations (Dirac, Weyl, Majorana) are in use.', d:'dimensionless'},
  {s:R`Z[J]`, r:'"generating functional"', m:'The path integral with a source J. Functional derivatives of ln Z give connected correlation functions — the objects that turn into cross-sections.', d:'—'},
  {s:R`\beta(g)`, r:'"beta function"', m:'μ dg/dμ: how a coupling changes with the energy scale at which it is defined. Its sign decides the entire qualitative behaviour of a theory.', d:'dimensionless'},
  {s:R`\alpha`, r:'"fine-structure constant"', m:'e²/4πε₀ħc ≈ 1/137.035 999 177. Dimensionless, so its value is not a matter of units — and is unexplained.', d:'dimensionless'},
  {s:R`\Lambda`, r:'"cut-off"', m:'The energy above which the theory is not claimed to apply. In the Wilsonian view a physical feature of the description, not an embarrassment.', d:'GeV'},
  {s:R`\Gamma,\ \sigma`, r:'"decay width", "cross-section"', m:'The two observables QFT actually predicts: Γ = ħ/τ is an inverse lifetime, σ an effective area (1 barn = 10⁻²⁸ m²).', d:'GeV; m² or barn'}
 ],
 worked:{t:'The one-loop anomalous magnetic moment, and what it costs to go further',
  steps:[
   'Dirac theory predicts g = 2 exactly, i.e. a ≡ (g−2)/2 = 0.',
   'Schwinger (1948) computed the single one-loop vertex correction: a = α/2π = (1/137.036)/(2π) = 1.161 41×10⁻³.',
   'Measured: a_e = 1.159 652 181×10⁻³. Schwinger\'s single term already gets four significant figures.',
   'Order α²: 7 diagrams. Order α³: 72. Order α⁴: 891. Order α⁵: 12 672 diagrams, evaluated numerically over decades by Kinoshita and collaborators.',
   'Residual theory–experiment difference sits at the 10⁻¹² level, limited by the input value of α.'],
  a:'"α/2π" is engraved on Schwinger\'s tombstone. The philosophical point: a divergent asymptotic series, derived via an interaction picture that Haag\'s theorem says does not exist, gives the most accurate prediction in science. Any account of why theories succeed has to survive this example.'}
},

rg: {
 origin:[
  {y:'1953–54', who:'Stueckelberg & Petermann; Gell-Mann & Low', t:'A symmetry of the arbitrary',
   b:'Renormalisation requires choosing a subtraction point μ; physics cannot depend on it. The invariance of observables under change of μ is a group-like structure — hence "renormalisation group", though it is only a semigroup. At this stage it is a technical statement about QED, not a picture of nature.'},
  {y:'1963–66', who:'Widom; Domb & Hunter; Kadanoff', t:'Scaling near critical points',
   b:'Experiments on fluids and magnets near T_c gave exponents that disagreed with mean-field theory (β ≈ 0.33 not 0.5) yet agreed with each other across utterly different substances. Widom guessed a scaling form for the equation of state; Kadanoff (1966) gave the physical picture — block spins — explaining why scaling should hold and why exponents should be related.'},
  {y:'1944', who:'Onsager', t:'The datum that broke mean-field theory',
   b:'The exact solution of the 2D Ising model gives a logarithmically divergent specific heat and β = 1/8, not the mean-field 1/2. A solvable model proved that fluctuations matter and that the standard approximation was qualitatively, not just quantitatively, wrong.'},
  {y:'1971–72', who:'Wilson; Wilson & Fisher', t:'The synthesis',
   b:'Wilson turns Kadanoff\'s picture into a calculational scheme: integrate out short-wavelength modes, follow the flow of couplings, classify perturbations at fixed points as relevant or irrelevant. With Fisher he introduces the ε = 4 − d expansion, making exponents computable. Nobel 1982 — awarded to a single person, unusually, for a change of viewpoint rather than a discovery.'},
  {y:'1974', who:'Wilson', t:'Numerical RG solves the Kondo problem',
   b:'A many-body problem where perturbation theory diverges logarithmically is solved by iterated numerical coarse-graining. Proof that the method computes, not merely explains.'},
  {y:'1975', who:'Appelquist & Carazzone', t:'The decoupling theorem',
   b:'Heavy particles leave no trace at low energy beyond redefined couplings and effects suppressed by E/M. This converts "we can ignore what we don\'t know" from a hope into a theorem, and it is the formal charter for every autonomous special science in this atlas.'},
  {y:'1979', who:'Weinberg', t:'"Phenomenological Lagrangians"',
   b:'If you write the most general Lagrangian consistent with the symmetries and expand in energy, you get the most general S-matrix consistent with those symmetries. Non-renormalisable theories become legitimate, predictive, and bounded — the EFT programme in one page.'}
 ],
 exps:[
  {n:'Critical opalescence', who:'Andrews 1869; von Smoluchowski & Einstein 1908–10', y:'1869', fig:'opal',
   setup:'A sealed tube of CO₂ is heated through its critical point (31.0 °C, 73.8 bar) while illuminated. Below T_c a meniscus separates liquid and gas; as T → T_c the meniscus fades and the fluid turns milky white, then clears again above T_c.',
   meas:'Intense scattering of visible light at T_c, meaning density fluctuations on the scale of the wavelength, ~500 nm — roughly 10³ molecular diameters.',
   infer:'The correlation length ξ diverges at the critical point. The system has no characteristic scale; it looks the same at every magnification. This is the phenomenon the RG explains, and it is visible by eye in a sealed tube.',
   assume:'That the sample is at uniform temperature and pressure — hard near T_c because the compressibility diverges, so gravity stratifies the fluid. Definitive exponent measurements were eventually done in microgravity on the Space Shuttle for exactly this reason.'},
  {n:'Critical exponents of the liquid–gas and magnetic transitions', who:'Heller & Benedek; Guggenheim; many', y:'1950s–70s', fig:null,
   setup:'Measure an order parameter as a function of reduced temperature t = (T−T_c)/T_c: for a fluid, the density difference ρ_liq − ρ_gas by densitometry; for a magnet, the spontaneous magnetisation by NMR of ¹⁹F in MnF₂; for a binary alloy, the composition difference by neutron scattering. Fit to |t|^β.',
   meas:'Fluids (Ne, Ar, Kr, Xe, N₂, O₂, CO, CH₄) all give β ≈ 0.33–0.35 and collapse onto a single curve when scaled by critical values (Guggenheim 1945). Uniaxial magnets give the same β. Mean-field theory predicts 0.5.',
   infer:'Universality: substances with entirely different microscopic constituents share exponents exactly. Chemistry is irrelevant to critical behaviour; only dimensionality and order-parameter symmetry matter.',
   assume:'That the fitted range is close enough to T_c that corrections to scaling are negligible, and that T_c itself is determined independently. Both are serious in practice — this is why the confirmation took twenty years.'},
  {n:'Conformal bootstrap determination of 3D Ising exponents', who:'El-Showk, Paulos, Poland, Rychkov, Simmons-Duffin, Vichi', y:'2012–16', fig:null,
   setup:'Again a computation with experimental character. Impose only conformal invariance, unitarity and crossing symmetry on four-point functions; the consistency conditions carve out an allowed region in the space of operator dimensions. The 3D Ising theory sits at a kink on the boundary.',
   meas:'ν = 0.629 971(4), η = 0.036 298(2) — six significant figures, from no Lagrangian and no Monte Carlo.',
   infer:'The critical theory is fixed by symmetry and consistency alone. The microscopic Hamiltonian is not merely unnecessary; it never enters.',
   assume:'That the theory is conformal (not merely scale-invariant) and unitary, and that the kink identification is correct. These are checked against Monte Carlo and experiment, which agree.'}
 ],
 assume:[
  {a:'There is a separation of scales.', k:'empirical', n:'The whole framework presupposes it. Where it fails — turbulence, glasses, protein folding, strongly correlated electrons at ξ ~ a — the RG gives little.'},
  {a:'A local cut-off theory exists at short distance.', k:'idealisation', n:'One puts the theory on a lattice or introduces Λ. The physical content is claimed to be independent of which regulator — a claim verified case by case, not proved in general.'},
  {a:'The flow reaches a fixed point.', k:'idealisation', n:'Assumed, not guaranteed. Limit cycles and chaotic RG flows are possible in principle and are known in some systems.'},
  {a:'The thermodynamic limit N → ∞ is taken.', k:'contested', n:'Strictly required for genuine non-analyticity, i.e. for a sharp phase transition to exist at all. Whether this idealisation is eliminable is the Batterman–Butterfield dispute, and it is the load-bearing philosophical question on this sheet.'},
  {a:'Operators can be classified as relevant/irrelevant by their scaling dimension at the fixed point.', k:'definition', n:'This classification *is* the explanation of universality. Note it is a statement about a linearisation, valid in a neighbourhood of the fixed point.'},
  {a:'Naturalness: dimensionless couplings are O(1) at their defining scale.', k:'contested', n:'A heuristic with no derivation, requiring an unjustified measure on parameter space. Its failure to predict new physics at the LHC is now a live methodological case study.'}
 ],
 notation:[
  {s:R`\mu,\ \Lambda`, r:'"renormalisation scale", "cut-off"', m:'μ is an arbitrary reference energy introduced by the subtraction scheme; Λ is a physical upper limit of validity. They are often conflated and are not the same thing.', d:'GeV'},
  {s:R`\beta_i(\{g\})`, r:'"beta function of coupling i"', m:'μ ∂g_i/∂μ. A vector field on the space of theories; its zeros are fixed points.', d:'dimensionless'},
  {s:R`g^{*}`, r:'"fixed point"', m:'A coupling value where β = 0 — a scale-invariant theory. Gaussian (free) or non-Gaussian (interacting, e.g. Wilson–Fisher).', d:'dimensionless'},
  {s:R`\xi`, r:'"correlation length"', m:'The distance over which fluctuations are correlated, ⟨φ(0)φ(r)⟩ ~ e^{−r/ξ}. Diverges as |t|^{−ν} at a continuous transition — this divergence is what makes microscopic detail irrelevant.', d:'m'},
  {s:R`t`, r:'"reduced temperature"', m:'(T − T_c)/T_c. The natural dimensionless distance from criticality.', d:'dimensionless'},
  {s:R`\nu,\ \beta,\ \gamma,\ \alpha,\ \eta`, r:'"critical exponents"', m:'ξ ~ |t|^{−ν}, order parameter m ~ |t|^β, susceptibility χ ~ |t|^{−γ}, specific heat C ~ |t|^{−α}, correlation function at T_c ~ r^{−(d−2+η)}. Beware: β here is not the beta function and not 1/k_BT.', d:'dimensionless'},
  {s:R`d_i`, r:'"scaling dimension"', m:'The power of length by which an operator rescales. d_i < d means relevant (grows in the IR), d_i > d irrelevant.', d:'dimensionless'},
  {s:R`\mathcal{O}_i,\ c_i`, r:'"operators", "Wilson coefficients"', m:'The terms in the effective Lagrangian and their coefficients. Physics at low energy depends on the UV theory only through the values of the c_i.', d:'varies; c_i dimensionless by construction'},
  {s:R`\epsilon = 4-d`, r:'"epsilon"', m:'The expansion parameter of Wilson & Fisher: compute in 4 − ε dimensions and set ε = 1 at the end. Formally illegitimate, numerically excellent.', d:'dimensionless'}
 ],
 worked:{t:'Why microscopic detail is invisible: an irrelevant operator, quantified',
  steps:[
   'Take an EFT valid below Λ = 1 TeV, and an irrelevant dimension-6 operator with coefficient c/Λ².',
   'Its effect on an observable at energy E scales as (E/Λ)².',
   'At a B-meson experiment, E ≈ 5 GeV: (5/1000)² = 2.5×10⁻⁵.',
   'At an atomic-physics experiment, E ≈ 10 eV = 10⁻⁸ GeV: (10⁻⁸/10³)² = 10⁻²².',
   'So a new particle at 1 TeV shifts atomic energy levels in the twenty-second decimal place.'],
  a:'This is the quantitative content of "chemistry does not depend on the top quark". The autonomy of the higher-level science is not a philosophical thesis about complexity or multiple realisability in the abstract — it is a suppression factor you can compute, and its value here is 10⁻²².'}
}
};
