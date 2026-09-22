const HIST_4 = {

qm: {
 origin:[
  {y:'1900', who:'Planck', t:'A fit in search of a justification',
   b:'Planck interpolates between Wien\'s law (good at high frequency) and Rayleigh–Jeans (good at low) and gets the blackbody formula right in an evening. He then spends weeks finding a derivation, and can only do it by dividing the oscillator energy into elements ε = hν — "an act of desperation", and one he tried to undo for the next decade.'},
  {y:'1905', who:'Einstein', t:'Light itself is grainy',
   b:'The photoelectric paper takes the quanta as real properties of radiation, not of matter, and predicts E_max = hν − W: a straight line whose slope is h and whose intercept is the work function. Millikan spent ten years trying to disprove it and in 1916 published a confirmation to 0.5% while still calling the hypothesis "untenable".'},
  {y:'1913', who:'Bohr', t:'A model that works and should not',
   b:'Quantised angular momentum reproduces the Balmer series and predicts the Rydberg constant from e, m and h to within 1%. It is also internally inconsistent — it uses classical orbits while forbidding the radiation classical electrodynamics demands. It worked for hydrogen and failed for helium.'},
  {y:'1922', who:'Stern & Gerlach', t:'Space quantisation, seen directly',
   b:'A silver beam splits into two, not a continuum. Intended as a test of Bohr–Sommerfeld orbital quantisation; in fact it measured electron spin, which had not yet been proposed. A textbook case of a correct result for the wrong theoretical reason.'},
  {y:'1924–25', who:'de Broglie; Heisenberg; Born & Jordan', t:'Two formalisms',
   b:'De Broglie proposes λ = h/p for matter. Heisenberg, recovering from hay fever on Helgoland, builds a theory using only observable transition amplitudes; Born recognises the arrays as matrices. Heisenberg had not heard of matrices.'},
  {y:'1926', who:'Schrödinger; Born', t:'Wave mechanics and the probability rule',
   b:'Schrödinger writes the wave equation over the Christmas holidays, and proves it equivalent to matrix mechanics months later. He believed |ψ|² was a charge density; Born, in a footnote added in proof, proposes instead that it is a probability density — the interpretive move that created the measurement problem.'},
  {y:'1927', who:'Davisson & Germer; Thomson', t:'Electrons diffract',
   b:'A laboratory accident — a liquid-air bottle exploded, oxidising a nickel target, which was then annealed into large crystals — turned a scattering experiment into a diffraction experiment. Electrons showed Bragg peaks. G. P. Thomson found the same independently; his father J. J. had won the Nobel for showing the electron is a particle.'},
  {y:'1935–64–2015', who:'EPR; Bell; Hensen, Giustina, Shalm', t:'From philosophy to experiment',
   b:'EPR argue the theory is incomplete. Bohr replies obscurely. For 29 years this is metaphysics. Then Bell (1964) derives an inequality that any local hidden-variable theory must satisfy and quantum mechanics violates. Aspect narrows the loopholes in 1982; three groups close them simultaneously in 2015. Nobel 2022.'}
 ],
 exps:[
  {n:'Stern–Gerlach', who:'Stern & Gerlach, Frankfurt', y:'1922', fig:'sterngerlach',
   setup:'Silver is evaporated in an oven at ~1000 °C; a beam is collimated by two slits and passed for 3.5 cm through the gap of an electromagnet whose pole pieces are deliberately asymmetric — one knife-edged, one grooved — to produce a strong field gradient ∂B_z/∂z ≈ 10 T/m transverse to the beam. A magnetic moment μ in a gradient feels a force F_z = μ_z ∂B_z/∂z. The beam lands on a cooled glass plate and is developed.',
   meas:'Two distinct spots separated by ~0.2 mm, with a gap between them, instead of the continuous smear classical randomly-oriented moments would give. (Famously the deposit was invisible until Gerlach\'s cheap cigars, high in sulphur, fumed the silver into visible silver sulphide.)',
   infer:'The component of the magnetic moment along an arbitrarily chosen axis takes only discrete values. Later understood as spin-½ with μ_z = ±μ_B.',
   assume:'That the beam is neutral (no Lorentz force), that the gradient is uniform across the beam, and that silver\'s single 5s valence electron carries the whole moment. The last is why silver was chosen; a beam of iron would have been uninterpretable.'},
  {n:'Single-electron double slit', who:'Merli, Missiroli & Pozzi 1974; Tonomura et al. 1989', y:'1974/1989', fig:'doubleslit',
   setup:'An electron microscope is fitted with an electron biprism — a fine charged wire between two earthed plates — which acts as a coherent beam splitter, the electron-optical equivalent of two slits. The beam intensity is reduced until the average number of electrons in flight is far below one (in Tonomura\'s run, ~1000 electrons per second over a 40 cm flight, so the mean separation between successive electrons was ~150 km). Arrivals are recorded one at a time on a position-sensitive detector.',
   meas:'Individual, localised detection events at apparently random positions. After ~10 electrons: noise. After 3000: a hint. After 70 000: a full interference pattern with the expected fringe spacing.',
   infer:'Each electron arrives whole, at one place; but the distribution of places is an interference pattern. There is no ensemble of simultaneously-present electrons to interfere with each other. Whatever interferes is associated with the single electron.',
   assume:'That electrons truly are isolated in flight — the key control, established by the counting rate and the flight time. If two electrons were ever in the apparatus together, the result would be uninteresting.'},
  {n:'Loophole-free Bell test', who:'Hensen et al. (Delft); Giustina et al. (Vienna); Shalm et al. (NIST)', y:'2015', fig:'bell',
   setup:'Delft version: two nitrogen-vacancy centres in diamond, in separate labs 1.3 km apart on the TU Delft campus. Each electron spin is entangled with an emitted photon; the photons meet at a beamsplitter at a third location, and a coincident two-detector click heralds entanglement of the two distant spins. Only then are the measurement bases chosen — by fast quantum random number generators at each station — and the spins read out. The 1.3 km separation gives 4.27 μs of light travel time, while basis choice plus readout takes less than that, so the two measurement events are spacelike separated.',
   meas:'S = 2.42 ± 0.20 against the local bound S ≤ 2 (quantum maximum 2√2 = 2.83). p = 0.039 for 245 trials. The optical experiments achieved far higher statistical significance with photon pairs and high-efficiency transition-edge detectors (>75% efficiency, above the 2/3 fair-sampling threshold).',
   infer:'No theory in which outcomes are determined by local variables, with settings chosen independently of those variables, can reproduce the observed correlations. Local realism is empirically refuted.',
   assume:'Three, and the experiments were designed to close each: (i) *locality* — settings and outcomes spacelike separated, closed by distance and timing; (ii) *detection* — no post-selection on detected pairs, closed by heralding (Delft) or high detector efficiency (Vienna, NIST); (iii) *freedom of choice* — the settings are not correlated with the hidden variables. The third cannot be closed, only pushed back: the "Big Bell Test" (2018) used choices from 100 000 human volunteers, and cosmic-Bell experiments used photons from quasars emitted billions of years ago. Superdeterminism remains logically open and is not testable.'},
  {n:'Quantum superposition of large molecules', who:'Arndt, Zeilinger; later Fein, Arndt', y:'1999–2019', fig:null,
   setup:'A beam of C₆₀ fullerenes (and later oligoporphyrins of 25 000 amu, ~2000 atoms) is produced in an oven, velocity-selected, and passed through a Talbot–Lau interferometer: three nanofabricated gratings with ~266 nm period in ultra-high vacuum. Molecular positions are read out by laser ionisation or fluorescence.',
   meas:'High-contrast interference fringes for objects with de Broglie wavelengths of ~5 pm — a thousand times smaller than the molecule itself.',
   infer:'Superposition is not restricted to microscopic systems. It survives to masses where the object has internal temperature, rotational and vibrational excitations, and even emits thermal photons — as long as no which-path information escapes.',
   assume:'That decoherence is controlled: the experiment deliberately varies the residual gas pressure and the molecule\'s internal temperature to *turn interference off*, confirming the decoherence mechanism quantitatively. Collapse models (GRW/CSL) predict interference loss at larger masses; these experiments are steadily constraining their parameter space, which makes this the one place where interpretations are being tested.'}
 ],
 assume:[
  {a:'States are rays in a complex Hilbert space; observables are self-adjoint operators.', k:'definition', n:'The kinematic framework. Why complex, and why linear, are not explained by the theory; reconstruction programmes (Hardy, Chiribella–D\'Ariano–Perinotti) try to derive them from information-theoretic axioms.'},
  {a:'Composite systems combine by tensor product.', k:'definition', n:'This single choice generates entanglement and hence everything Bell-theoretic. A direct sum would not.'},
  {a:'The Born rule gives probabilities.', k:'definition', n:'Gleason\'s theorem shows it is the unique probability measure on projections for dim ≥ 3, so its *form* is forced — but that probabilities appear at all is not derived, and is exactly what Everettian accounts must supply.'},
  {a:'Evolution is unitary when no measurement occurs.', k:'contested', n:'"When no measurement occurs" is the problem, not a detail. The theory does not define which interactions are measurements.'},
  {a:'Measurement yields a single definite outcome.', k:'contested', n:'Denied by Everett; secured by adding collapse (GRW) or by adding variables (Bohm). The three options differ in ontology, one differs in dynamics and is testable.'},
  {a:'Identical particles are permutation-symmetric.', k:'empirical', n:'Tested to extraordinary precision — searches for Pauli-violating atomic transitions bound violations at the 10⁻²⁹ level.'},
  {a:'Measurement settings are freely choosable.', k:'contested', n:'Required by Bell\'s derivation. Cannot be established experimentally, only made increasingly implausible to deny.'},
  {a:'The apparatus is classical.', k:'idealisation', n:'Bohr insisted on it; decoherence explains why it is a good approximation without making it fundamental.'}
 ],
 notation:[
  {s:R`|\psi\rangle,\ \langle\psi|`, r:'"ket psi", "bra psi"', m:'Dirac notation: a vector in Hilbert space and its dual. ⟨φ|ψ⟩ is the inner product, a complex number whose modulus squared is a probability.', d:'dimensionless (normalised)'},
  {s:R`\hat A`, r:'"A hat", an operator', m:'The hat marks an operator rather than a number. Observables are self-adjoint (Â = Â†), guaranteeing real eigenvalues and a complete eigenbasis.', d:'units of the observable'},
  {s:R`\hat H`, r:'"the Hamiltonian"', m:'The energy operator, and the generator of time translation. Specifying Ĥ is what specifies a particular quantum system.', d:'J'},
  {s:R`[\hat A,\hat B]`, r:'"commutator"', m:'ÂB̂ − B̂Â. Non-zero means the two observables cannot both have sharp values; the commutator sets the uncertainty bound.', d:'product of the two'},
  {s:R`\hbar`, r:'"h-bar"', m:'h/2π = 1.054 571 817×10⁻³⁴ J s. Since 2019 exact by definition of the kilogram. Its smallness relative to macroscopic actions is why the world looks classical.', d:'J s'},
  {s:R`\rho`, r:'"density operator"', m:'A positive operator with Tr ρ = 1. Pure state: ρ = |ψ⟩⟨ψ| and ρ² = ρ. Mixed: ρ² ≠ ρ. A subsystem of an entangled pure state is always mixed — and this is not ignorance in the classical sense.', d:'dimensionless'},
  {s:R`\mathrm{Tr}_B`, r:'"partial trace over B"', m:'Discards subsystem B to give A\'s reduced state. The formal operation behind decoherence: trace out the environment and interference terms vanish from ρ_A.', d:'—'},
  {s:R`\otimes`, r:'"tensor product"', m:'Combines systems: dim(ℋ_A ⊗ ℋ_B) = dim ℋ_A × dim ℋ_B. A state not expressible as |ψ_A⟩⊗|ψ_B⟩ is entangled.', d:'—'},
  {s:R`\hat P_a = |a\rangle\langle a|`, r:'"projector onto a"', m:'Picks out the component of the state along |a⟩. P² = P. Born rule: P(a) = ⟨ψ|P̂_a|ψ⟩.', d:'dimensionless'},
  {s:R`S`, r:'"the CHSH quantity"', m:'|E(a,b) − E(a,b′) + E(a′,b) + E(a′,b′)| where E is a correlation coefficient. Bounded by 2 for local hidden variables, by 2√2 for quantum mechanics (Tsirelson), by 4 for no-signalling theories in general.', d:'dimensionless'},
  {s:R`\Psi(x_1,\dots,x_N)`, r:'"the many-body wavefunction"', m:'A function on 3N-dimensional configuration space, not on physical space. This is the fact that makes ψ-ontic readings metaphysically awkward and makes exact computation exponentially hard.', d:'m^{−3N/2}'}
 ],
 worked:{t:'Why a dust grain does not interfere: decoherence, in numbers',
  steps:[
   'Take a grain of radius a = 10 μm, mass m ≈ 4×10⁻¹² kg, in air at 300 K and 1 atm.',
   'The collisional decoherence rate for a superposition of separation Δx is Λ_dec ≈ Λ Δx², with the scattering constant Λ ≈ 10³⁶ m⁻²s⁻¹ for air at STP on an object this size.',
   'For Δx = 1 μm = 10⁻⁶ m: rate ≈ 10³⁶ × 10⁻¹² = 10²⁴ s⁻¹.',
   'Coherence time ≈ 10⁻²⁴ s. Even in perfect vacuum, the 2.7 K cosmic microwave background alone gives ~10⁻⁶ s for the same grain.',
   'By contrast, a C₆₀ molecule in the Vienna interferometer at 10⁻⁸ mbar has a coherence time of milliseconds — long enough to cross the apparatus.'],
  a:'Interference is not absent for large objects in principle; it is destroyed faster than any conceivable measurement. That is an explanation of why we never see superposed cats. It is emphatically *not* an explanation of why the grain is found in one place rather than being in a superposition we cannot detect — the global state remains superposed. Conflating the two is the commonest error about decoherence.'}
},

sr: {
 origin:[
  {y:'1865', who:'Maxwell', t:'The conflict is already present',
   b:'Maxwell\'s equations give a definite speed c = 1/√(μ₀ε₀) with no reference to any source or observer. Under a Galilean transformation they change form. Either mechanics or electromagnetism had to give — but nobody read it that way for forty years.'},
  {y:'1887', who:'Michelson & Morley', t:'The null result',
   b:'The most famous failed experiment in physics. Its actual historical role is disputed: Einstein\'s 1905 paper does not cite it, and he later gave inconsistent accounts of whether he knew of it. He consistently cited instead the asymmetry in Faraday induction — that moving the magnet and moving the coil give the same current but are described by different mechanisms.'},
  {y:'1889–1904', who:'FitzGerald, Lorentz, Poincaré', t:'The right equations, the wrong story',
   b:'Lorentz derives the transformation while retaining the ether and a preferred frame; contraction is a dynamical effect of intermolecular forces on moving rods, and "local time" is a mathematical auxiliary. Poincaré (1905) has the relativity principle, the group structure, and the name. What is missing is the claim that there is no preferred frame and that local time *is* time.'},
  {y:'June 1905', who:'Einstein', t:'Two postulates, ten pages, no references',
   b:'"On the Electrodynamics of Moving Bodies" starts from the relativity principle and the constancy of c, and derives the transformation kinematically — as a claim about space and time, not about rods. The decisive step is §1: an operational definition of distant simultaneity by light-signal synchronisation, which makes it obvious that simultaneity is frame-dependent.'},
  {y:'Sept 1905', who:'Einstein', t:'E = mc², as an afterthought',
   b:'A three-page follow-up: a body emitting light in two opposite directions loses mass L/c². Einstein hedges — "it is not impossible" that this can be tested with radium salts.'},
  {y:'1908', who:'Minkowski', t:'Geometry',
   b:'"Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows." The invariant interval makes the theory a geometry. Einstein initially dismissed this as "superfluous erudition" — then needed it entirely for general relativity.'}
 ],
 exps:[
  {n:'Michelson–Morley', who:'Michelson & Morley, Cleveland', y:'July 1887', fig:'michelson',
   setup:'A sandstone slab 1.5 m square floats in a trough of mercury so it can be rotated smoothly without strain. On it, a half-silvered mirror splits a sodium-light beam into two perpendicular arms; multiple reflections between mirror pairs fold each path to an effective 11 m. The beams recombine and form fringes viewed through a telescope. If the Earth moves through a stationary ether at v ≈ 30 km/s, the two round-trip times differ by Δt ≈ Lv²/c³, and rotating the apparatus by 90° should swing the fringe pattern by ΔN = 2Lv²/λc² fringes.',
   meas:'Expected shift 0.4 fringes (they could resolve ~0.01). Observed: less than 0.01 fringes — consistent with zero. Modern optical-resonator versions bound the anisotropy at Δc/c < 10⁻¹⁸.',
   infer:'Either the Earth drags the ether along, or rods contract by exactly the compensating factor (Lorentz–FitzGerald), or there is no ether frame. The experiment alone does not choose; it took the relativity principle to make the third reading compelling.',
   assume:'That the two arms are equal to within a wavelength, that thermal and mechanical strain do not mimic the signal (hence the mercury float and the rotation), and — crucially — that the arms do not contract. That last assumption is what Lorentz denied, which is why the null result is not by itself a refutation of the ether. Underdetermination in the textbook case.'},
  {n:'Muon lifetime dilation', who:'Rossi & Hall 1941; Frisch & Smith 1963', y:'1941/1963', fig:'muon',
   setup:'Frisch & Smith: a scintillator counter telescope on Mount Washington (1907 m) counts muons in a narrow momentum band (selected by iron absorber thickness so that only muons of β ≈ 0.995 stop in the detector). The apparatus is then taken to Cambridge, Massachusetts (3 m) and the count repeated. The muon decay curve within the detector is also recorded to measure the lifetime in situ.',
   meas:'~563 muons per hour at the summit; a classical calculation using the rest lifetime τ₀ = 2.2 μs predicts ~27 per hour at sea level. Observed: ~408 per hour. The relativistic prediction with γ ≈ 8.4 is ~400.',
   infer:'Moving clocks run slow, by exactly the factor γ. Equivalently, in the muon\'s frame the mountain is contracted from 1907 m to 227 m.',
   assume:'That the same population is being sampled at both altitudes — hence the momentum selection, without which muons of different energies would confound the comparison. Also that muons are not created or absorbed between the two altitudes in a way that mimics the effect.'},
  {n:'Ives–Stilwell: the transverse Doppler shift', who:'Ives & Stilwell', y:'1938', fig:null,
   setup:'A beam of hydrogen canal rays (H₂⁺, H₃⁺) is accelerated through ~10 kV. Their emitted light is observed nearly along the beam direction, and simultaneously the light emitted backwards is collected by a mirror, so that both the blue- and red-shifted lines appear on the same spectrogram alongside a stationary reference line. Classically the two shifted lines should straddle the rest wavelength symmetrically; relativistically their *midpoint* is displaced by the second-order factor γ.',
   meas:'The midpoint displacement matched γ = 1 + v²/2c² to a few percent, at v/c ≈ 0.005.',
   infer:'Time dilation is confirmed independently of any length measurement, and by a second-order effect that Lorentz\'s ether theory does not naturally produce. Together with Michelson–Morley and Kennedy–Thorndike, this fixes the Lorentz transformation uniquely within the Robertson–Mansouri–Sexl test framework.',
   assume:'That the ion velocity is known from the accelerating voltage (checked against the first-order splitting itself), and that the observation angle is small enough that its uncertainty does not swamp the second-order term — the reason for the ingenious same-plate forward/backward comparison.'}
 ],
 assume:[
  {a:'The principle of relativity: laws take the same form in all inertial frames.', k:'definition', n:'A meta-principle constraining theories rather than describing a mechanism — Einstein\'s own "principle theory" style, deliberately modelled on thermodynamics.'},
  {a:'The speed of light in vacuum is the same in all inertial frames.', k:'empirical', n:'Since 1983, c is *defined* as 299 792 458 m/s and the metre is derived from it, so this is no longer a measurement — a striking case of an empirical result being promoted to a convention.'},
  {a:'Space is homogeneous and isotropic; time is homogeneous.', k:'definition', n:'Rarely stated, but it does most of the work: with the group property, these alone give a one-parameter family of transformations with an invariant speed K, and experiment only has to fix K.'},
  {a:'Distant simultaneity is fixed by the standard (ε = ½) synchrony.', k:'contested', n:'Reichenbach argued this is a convention, since measuring the one-way speed of light requires already-synchronised clocks. Malament\'s theorem shows standard simultaneity is the only non-trivial relation definable from the causal structure plus a worldline — which many take to settle it, and some do not.'},
  {a:'Spacetime is flat.', k:'idealisation', n:'False wherever gravity acts, i.e. everywhere. SR is the tangent-space approximation, and how good it is depends on the tidal scale of the region.'},
  {a:'Rods and clocks measure the interval.', k:'contested', n:'Brown\'s *Physical Relativity* argues this needs a dynamical justification — the constitution of rods must be Lorentz-covariant — and that the geometrical story presupposes rather than explains it.'}
 ],
 notation:[
  {s:R`ds^2`, r:'"the interval", "ds squared"', m:'−c²dt² + dx² + dy² + dz². Invariant under Lorentz transformations. Negative for timelike separation (in this sign convention), zero for null, positive for spacelike.', d:'m²'},
  {s:R`\gamma`, r:'"gamma", the Lorentz factor', m:'1/√(1 − v²/c²). Equals 1 at v = 0, 1.005 at 10% of c, 7.09 at 99%, 7460 for LHC protons. Every relativistic effect is some power of it.', d:'dimensionless'},
  {s:R`\beta`, r:'"beta"', m:'v/c. Not the critical exponent, not the beta function, not 1/k_BT — four different standard meanings of one letter, all appearing in this atlas.', d:'dimensionless'},
  {s:R`x^{\mu}`, r:'"x mu", a four-vector', m:'(ct, x, y, z), μ = 0,1,2,3. Greek indices run over 0–3, Latin over 1–3 — a convention assumed without comment in most texts.', d:'m'},
  {s:R`\eta_{\mu\nu}`, r:'"the Minkowski metric"', m:'diag(−1,1,1,1) here; particle physics usually uses (+1,−1,−1,−1). Neither is more correct; mixing them silently is a standard source of sign errors.', d:'dimensionless'},
  {s:R`p^{\mu}`, r:'"four-momentum"', m:'(E/c, p). Its invariant square gives E² = (pc)² + (mc²)². Conservation of p^μ replaces separate conservation of energy and momentum.', d:'kg m s⁻¹'},
  {s:R`m`, r:'"mass"', m:'In modern usage always the invariant rest mass. "Relativistic mass" γm is deprecated: it makes E = mc² true by definition and obscures that m is a Lorentz scalar. Older texts use it, which is why the same equation can mean different things in different decades.', d:'kg'},
  {s:R`\tau`, r:'"proper time"', m:'∫√(1−v²/c²) dt along a worldline — what a carried clock reads. Maximised, not minimised, along the inertial path between two timelike-separated events.', d:'s'},
  {s:R`\Lambda^{\mu}_{\ \nu}`, r:'"Lorentz transformation matrix"', m:'The boost/rotation acting on four-vectors. Boosts are hyperbolic rotations by rapidity φ with tanh φ = β; rapidities add linearly, which is the cleanest way to see why velocities do not.', d:'dimensionless'},
  {s:R`F^{\mu\nu}`, r:'"electromagnetic field tensor"', m:'Antisymmetric, containing E and B. That E and B are components of one object is why "is this field electric or magnetic?" has no frame-independent answer.', d:'mixed'}
 ],
 worked:{t:'The muon that should not reach the ground',
  steps:[
   'A muon created at 15 km altitude with γ = 20 (energy ≈ 2.1 GeV) travels at v ≈ 0.99875c.',
   'Non-relativistic expectation: distance covered in one mean lifetime = 0.99875 × 3×10⁸ × 2.2×10⁻⁶ = 659 m. To cross 15 km takes 22.8 lifetimes, so the surviving fraction is e^{−22.8} = 1.2×10⁻¹⁰.',
   'Relativistically, in the Earth frame the lifetime is dilated: γτ₀ = 20 × 2.2 μs = 44 μs, giving a decay length of 13.2 km. Crossing 15 km takes 1.14 lifetimes; surviving fraction e^{−1.14} = 0.32.',
   'In the muon\'s own frame the lifetime is still 2.2 μs, but the atmosphere is contracted to 15 km/20 = 750 m, crossed in 2.5 μs — 1.14 lifetimes. Same answer.'],
  a:'A factor of 2.7×10⁹ between the classical and relativistic survival probabilities, which is why muons are the dominant ionising radiation at sea level (about one per square centimetre per minute — several pass through you as you read this). Note that the two frames disagree about *which* effect is responsible, dilation or contraction, and agree exactly on the observable. That is what frame-independence of physical content means, made concrete.'}
}
};
