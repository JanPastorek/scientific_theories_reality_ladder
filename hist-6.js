const HIST_6 = {

statmech: {
 origin:[
  {y:'1738', who:'Daniel Bernoulli', t:'Pressure from collisions, ignored for a century',
   b:'In *Hydrodynamica* Bernoulli derives gas pressure from molecules striking the walls and gets P ∝ nv². Caloric theory was ascendant and the idea went nowhere for 120 years.'},
  {y:'1857–60', who:'Clausius; Maxwell', t:'The distribution of velocities',
   b:'Clausius introduces the mean free path, answering the objection that gases would mix instantly if molecules moved at hundreds of metres per second. Maxwell then derives the velocity distribution from an assumption of astonishing economy — that the three Cartesian components are statistically independent and the distribution is isotropic — which forces the Gaussian form with no dynamics at all. It is the first statistical law in physics.'},
  {y:'1872–77', who:'Boltzmann', t:'The H-theorem and the entropy formula',
   b:'The transport equation, and the proof that H decreases. Then Loschmidt\'s reversibility objection (1876) and Zermelo\'s recurrence objection (1896) force Boltzmann to reinterpret the result as probabilistic and to write S = k log W — engraved on his tombstone in Vienna, though he never wrote it in quite that form. He killed himself in 1906, with the reality of atoms still contested.'},
  {y:'1902', who:'Gibbs', t:'Ensembles',
   b:'*Elementary Principles in Statistical Mechanics* replaces a single system\'s trajectory with a probability distribution over a fictional ensemble of copies. Cleaner, more general — and it relocates rather than solves the irreversibility problem, since the Gibbs entropy is exactly constant under Hamiltonian flow.'},
  {y:'1905–13', who:'Einstein; Smoluchowski; Perrin', t:'Atoms become visible',
   b:'Einstein predicts ⟨x²⟩ = 2Dt for suspended particles and notes that measuring it yields Avogadro\'s number. Perrin does it, with gamboge grains under a microscope, and obtains N_A by several independent routes that agree. Ostwald and the energeticists conceded. The debate over the reality of atoms ended in a laboratory, which is why it is the standard exhibit in the scientific-realism literature.'},
  {y:'1944', who:'Onsager', t:'An exact solution that broke mean-field theory',
   b:'The two-dimensional Ising model solved exactly: a logarithmically divergent specific heat and β = 1/8 rather than the mean-field 1/2. Fluctuations do not merely perturb the answer, they change it qualitatively. This is the datum that made the renormalisation group necessary.'},
  {y:'1961–2012', who:'Landauer; Bennett; Bérut et al.', t:'Information becomes thermodynamic',
   b:'Landauer argues that erasing a bit must dissipate at least k_BT ln 2; Bennett shows measurement can be done reversibly, so the cost lands on erasure, exorcising Maxwell\'s demon. Bérut and colleagues then measure the bound directly with a colloidal bead in a double-well optical trap.'}
 ],
 exps:[
  {n:'Perrin on Brownian motion: counting atoms', who:'Jean Perrin, Paris', y:'1908–13', fig:'perrin',
   setup:'Two complementary measurements on the same emulsions. (1) *Sedimentation equilibrium*: monodisperse gamboge or mastic grains — their radius fixed independently by Stokes settling, by weighing a counted number, and by measuring a column of them — are suspended in water in a cell about 100 μm deep. Under gravity they reach an equilibrium in which concentration falls exponentially with height: a barometric distribution for visible particles. Perrin counted grains at successive focal depths through a microscope, in one series accumulating over 13 000 counts. (2) *Displacement*: a single grain\'s position is marked on a camera lucida grid at fixed 30-second intervals, and the mean square displacement accumulated.',
   meas:'Sedimentation: n(h) = n₀exp(−mgh/k_BT), giving N_A ≈ 6.8×10²³. Displacement: ⟨x²⟩ = 2Dt with D = k_BT/6πηa, giving N_A ≈ 6.9×10²³. Perrin assembled thirteen independent routes to N_A — gas viscosity, blackbody radiation, alpha-particle counting, radioactivity, critical opalescence, the blue of the sky — clustering around 6.5–7.2×10²³.',
   infer:'Molecules exist, have a definite size and number, and their thermal agitation is directly visible as the jitter of a micron-sized grain. The convergence of independent methods, not any single one of them, is the argument — which is why Perrin\'s book is titled *Les Atomes*.',
   assume:'That Stokes\' law applies to the grains (checked by three independent radius determinations); that the grains are uniform in size — the hardest experimental problem, requiring months of fractionation by repeated centrifugation; and that the displacements are diffusion rather than drift, controlled by confirming ⟨x⟩ = 0 and that ⟨x²⟩ grows linearly, not quadratically, in t.'},
  {n:'Joule\'s paddle wheel: heat is a form of energy', who:'James Joule, Manchester', y:'1845–49', fig:'joule',
   setup:'A brass paddle wheel turns inside a calorimeter of water fitted with fixed vanes that stop the water simply rotating with it. Two lead weights descend on cords over pulleys, turning the wheel; their mass and fall height give the work done. The weights are wound up and released twenty times per run. A mercury thermometer graduated to 1/200 °F reads the water temperature before and after. Joule corrected for bearing friction and for radiative exchange with the room.',
   meas:'A rise of about 0.5 °F over many repetitions. Mechanical equivalent of heat: 772.692 foot-pounds per BTU, within 1% of the modern 778.',
   infer:'Work and heat are interconvertible at a fixed rate; caloric is not conserved, energy is. Combined with kinetic theory, heat becomes molecular motion.',
   assume:'That essentially all the work goes into the water rather than into the apparatus or the room. The signal was so small that Joule\'s claim was received sceptically for years; the experiment is really a triumph of systematic-error control rather than of apparatus.'},
  {n:'Direct measurement of the Landauer bound', who:'Bérut, Arakelyan, Petrosyan, Ciliberto, Dillenschneider & Lutz', y:'2012', fig:'landauer',
   setup:'A single 2 μm silica bead in water is held in a double-well optical trap formed by two focused laser beams — a physical one-bit memory, with the bead in the left or the right well. To erase: lower the barrier, tilt the well so the bead ends on a chosen side whatever side it started on, raise the barrier. The bead\'s trajectory is tracked at high speed and the work computed from the trajectory and the calibrated trap potential.',
   meas:'The mean dissipated heat approaches k_BT ln 2 = 3×10⁻²¹ J from above as the erasure is made slower, saturating but never violating the bound.',
   infer:'Logical irreversibility carries an unavoidable thermodynamic cost. Maxwell\'s demon must eventually clear its memory, and that is where the bill arrives.',
   assume:'That the protocol is genuinely logically irreversible — it must return the bit to a standard state whatever its initial value — and that the trap potential is accurately calibrated, done by measuring the bead\'s equilibrium position distribution.'},
  {n:'Fluctuation theorems: violating the Second Law on purpose', who:'Wang, Sevick, Mittag, Searles & Evans', y:'2002', fig:null,
   setup:'A colloidal bead is captured in an optical trap which is then dragged through water at constant speed. For each short trajectory the work done on the bead is computed from its measured displacement relative to the trap centre. Thousands of trajectories are accumulated.',
   meas:'For trajectories shorter than about two seconds, a measurable fraction show entropy *decreasing*. The ratio of probabilities obeys P(+ΔS)/P(−ΔS) = e^{ΔS/k_B}, and the Jarzynski equality ⟨e^{−βW}⟩ = e^{−βΔF} holds exactly.',
   infer:'The Second Law is statistical. Violations occur, with a probability exponentially small in system size and duration — for a macroscopic system, e^{−10²³}.',
   assume:'That the trap is harmonic and calibrated, and the dynamics overdamped. The philosophical significance is that this makes the reduction *testable*: statistical mechanics predicts exactly when and how often the phenomenological law fails, and the prediction is confirmed.'}
 ],
 assume:[
  {a:'The microdynamics is Hamiltonian and time-reversible.', k:'definition', n:'The starting point, and the source of the problem: irreversibility cannot follow from reversible dynamics alone.'},
  {a:'Phase-space (Liouville) volume is the right measure.', k:'contested', n:'It is stationary under the dynamics, which is a reason but not a derivation. Why this measure and not another is the central unsolved question about probability here.'},
  {a:'Molecular chaos: colliding pairs are uncorrelated before impact.', k:'contested', n:'This is where irreversibility enters the H-theorem. It cannot hold both before and after a collision, so it is a time-asymmetric assumption smuggled into a time-symmetric framework.'},
  {a:'Ergodicity, or at least typicality.', k:'contested', n:'Strict ergodicity is proved for very few systems (Sinai billiards) and false for many real ones (KAM tori, glasses). The modern Boltzmannian replacement is that the overwhelming majority of microstates, by measure, behave thermodynamically.'},
  {a:'The thermodynamic limit N → ∞.', k:'idealisation', n:'Required for genuine non-analyticity: at finite N the partition function is a finite sum of analytic terms and cannot produce a sharp transition.'},
  {a:'The Past Hypothesis.', k:'auxiliary', n:'Not derivable from the dynamics, and indispensable — without it the argument that predicts entropy increase toward the future predicts it equally toward the past, which is false. Penrose puts the required fine-tuning at 1 part in 10^(10^123).'},
  {a:'Interactions are short-ranged, so entropy and energy are extensive.', k:'idealisation', n:'Fails for gravity. Self-gravitating systems have negative heat capacity and no proper thermodynamic limit.'},
  {a:'A macrostate partition is given.', k:'contested', n:'Boltzmann entropy is defined relative to a coarse-graining. Whether that partition is objective or reflects our measurement capacities is the crux of the entropy-objectivity dispute.'}
 ],
 notation:[
  {s:R`\Omega(E,V,N)`, r:'"Omega", the multiplicity', m:'The phase-space volume, or number of microstates, compatible with a macrostate — Boltzmann\'s W. For a mole of gas, ln Ω is of order 10²³.', d:'dimensionless after dividing by h^{3N}N!'},
  {s:R`k_B`, r:'"Boltzmann\'s constant"', m:'1.380 649×10⁻²³ J K⁻¹, exact since 2019 — it now defines the kelvin. Physically just a conversion factor between temperature and energy; in natural units k_B = 1 and temperature is an energy.', d:'J K⁻¹'},
  {s:R`\beta = 1/k_BT`, r:'"beta", inverse temperature', m:'More fundamental than T, since β = ∂S/∂E is what appears in every formula and stays sensible (and can go negative) for systems with bounded energy. Not the critical exponent, not v/c, not the RG beta function.', d:'J⁻¹'},
  {s:R`Z`, r:'"partition function", from *Zustandssumme*', m:'Σ_i e^{−βE_i}. Introduced as a normalising constant, it turns out to encode everything: F = −k_BT ln Z, and every thermodynamic quantity is a derivative of ln Z.', d:'dimensionless'},
  {s:R`\rho(q,p,t)`, r:'"phase-space density"', m:'The ensemble distribution, obeying ∂ρ/∂t = {H,ρ}. This evolution conserves −∫ρ ln ρ exactly, which is why Gibbs entropy cannot increase without coarse-graining.', d:'(J s)^{−3N}'},
  {s:R`S_B,\ S_G`, r:'"Boltzmann entropy", "Gibbs entropy"', m:'S_B = k_B ln|Γ_M| is a function of the actual microstate via the macrostate containing it; S_G = −k_B∫ρ ln ρ is a functional of a probability distribution. They agree in equilibrium and differ out of it, and which is "the" entropy decides whether entropy is objective.', d:'J K⁻¹'},
  {s:R`f(\mathbf{x},\mathbf{v},t)`, r:'"one-particle distribution function"', m:'Density in six-dimensional single-particle phase space. Reducing the full 6N-dimensional description to this is already an approximation — the BBGKY hierarchy truncated at first order.', d:'s³ m⁻⁶'},
  {s:R`H`, r:'"Boltzmann\'s H"', m:'∫f ln f d³v. The H-theorem says dH/dt ≤ 0, so −H (essentially entropy) increases. Not the Hamiltonian, not enthalpy, not the magnetic field — four standard meanings of one letter.', d:'m⁻³'},
  {s:R`\lambda_{\rm mfp}`, r:'"mean free path"', m:'1/(√2 nσ); 68 nm for air at STP. Its ratio to the system size is the Knudsen number, which decides whether hydrodynamics applies.', d:'m'},
  {s:R`\langle\cdot\rangle`, r:'"ensemble average"', m:'∫(·)ρ dΓ. Whether this equals the time average along one trajectory is the ergodic question — and a laboratory instrument measures the time average.', d:'—'}
 ],
 worked:{t:'How improbable is a Second Law violation you could see?',
  steps:[
   'Take 1 cm³ of air at STP: N ≈ 2.5×10¹⁹ molecules.',
   'Ask for all of them to be found in the left half at some instant. Each is independently on the left with probability ½, so P = 2^{−N}.',
   'log₁₀P = −N log₁₀2 = −2.5×10¹⁹ × 0.301 = −7.5×10¹⁸.',
   'So P = 10^{−7 500 000 000 000 000 000}. For scale, the observable universe holds ~10⁸⁰ particles and is ~10¹⁷ s old.',
   'Meanwhile the corresponding entropy decrease, ΔS = −Nk_B ln 2 = −2.4×10⁻⁴ J K⁻¹, is a perfectly ordinary-looking number.'],
  a:'The Second Law is not a prohibition but an overwhelming improbability — and the exponent is large enough that the difference has no practical consequence at macroscopic scale, while being decisive for a colloidal bead, where violations are routinely measured. What the reduction changes is the *modal status* of the law, from "cannot" to "will not". Whether a derivation that alters modal status counts as reducing the original law is precisely what Nagel\'s model does not settle.'}
},

thermo: {
 origin:[
  {y:'1824', who:'Sadi Carnot', t:'The right answer from a false theory',
   b:'*Réflexions sur la puissance motrice du feu*, written at 28 and ignored for a decade. Carnot reasons by analogy with a water wheel: caloric falls from a high temperature to a low one and does work on the way, the caloric itself being conserved. The theory is false; the conclusion — that maximum efficiency depends only on the two temperatures and not at all on the working substance — is exactly right. A standing problem for any simple story linking a theory\'s truth to its success.'},
  {y:'1843–50', who:'Joule; Mayer', t:'Energy conservation',
   b:'Mayer, a ship\'s doctor, infers it partly from the colour of sailors\' venous blood in the tropics, is ignored, and is eventually institutionalised. Joule measures the mechanical equivalent of heat repeatedly and precisely. Caloric dies.'},
  {y:'1850–65', who:'Clausius', t:'Two laws, and a coined word',
   b:'Clausius reconciles Carnot with Joule by seeing that caloric is not conserved — only part of the heat does work. He states both laws and in 1865 coins "entropy" from the Greek for transformation, choosing a word deliberately similar to "energy" so the two would sound related.'},
  {y:'1848–54', who:'Thomson (Kelvin)', t:'Absolute temperature',
   b:'Carnot\'s result implies a temperature scale independent of any thermometric substance: define T by the ratio of heats in a reversible cycle. Temperature stops being what a thermometer reads and becomes a theoretical quantity.'},
  {y:'1875–78', who:'Gibbs', t:'Chemical thermodynamics',
   b:'"On the Equilibrium of Heterogeneous Substances" introduces chemical potential, the phase rule and free energy — published in the *Transactions of the Connecticut Academy*, which almost nobody read. Maxwell recognised its importance, built a plaster model of Gibbs\'s thermodynamic surface for water, and sent it to him.'},
  {y:'1906–12', who:'Nernst', t:'The third law',
   b:'Entropy differences vanish as T → 0, so absolute zero is unattainable in finitely many steps. It is the one classical thermodynamic law that requires quantum mechanics to explain, and so the point where the phenomenological theory points beyond itself.'},
  {y:'1999', who:'Lieb & Yngvason', t:'Axiomatisation',
   b:'Entropy is constructed from the single relation of adiabatic accessibility X ≺ Y, with no heat engines, no temperature and no probability. The Second Law becomes the claim that this relation is a total order representable by one extensive function — the cleanest statement of what the law actually asserts.'}
 ],
 exps:[
  {n:'Joule\'s free expansion and the porous plug', who:'Joule 1845; Joule & Thomson 1852', y:'1845/1852', fig:'freeexp',
   setup:'Two copper vessels joined by a stopcock sit in a water bath; one holds air at about 22 atm, the other is evacuated. The stopcock is opened, the gas expands into vacuum doing no external work, and the bath temperature is monitored. The far more sensitive later version passes gas steadily through a plug of cotton wool between two thermometers in an insulated tube, so the apparatus itself never has to be heated or cooled.',
   meas:'Free expansion: no detectable temperature change — Joule\'s bath was too coarse to see the small real effect. Porous plug: a clear temperature change whose sign depends on the starting temperature and vanishes at the inversion temperature.',
   infer:'For an ideal gas, internal energy depends on temperature alone and not on volume — this is what "ideal" means. The residual effect in real gases measures intermolecular forces directly, and is the operating principle of every gas liquefaction plant and household refrigerator.',
   assume:'That the vessels and pipework have negligible heat capacity compared with the water. That assumption is exactly what defeated the first version, since the copper absorbed most of the effect — and the failure is what motivated the second design. A good example of a null result that was an artefact of an unexamined assumption.'},
  {n:'Finding absolute zero without reaching it', who:'Amontons 1702; Gay-Lussac 1802; Kelvin 1848', y:'1702–1848', fig:'gaslaw',
   setup:'A constant-volume gas thermometer: a fixed quantity of dilute gas in a bulb connected to a mercury manometer. The mercury level is adjusted to hold the volume constant while the bulb is held at temperatures fixed by reproducible phase changes (ice point, steam point, and others). Pressure is plotted against temperature.',
   meas:'P is linear in T with the same fractional slope for every dilute gas: dP/P = 1/273.15 per °C. Extrapolating to P = 0 gives −273.15 °C.',
   infer:'There is an absolute zero of temperature, common to all gases.',
   assume:'That the linear relation extrapolates through the whole range to zero pressure. It does not — every real gas liquefies first. So the absolute zero of thermodynamics is fixed by extrapolating beyond the domain in which any measurement was made, and its later vindication by the Carnot-cycle definition and by quantum statistics is a striking case of a successfully projected idealisation.'},
  {n:'The approach to absolute zero', who:'Onnes 1908; Giauque & MacDougall 1933; Ketterle group 2003', y:'1908–2021', fig:null,
   setup:'A ladder of techniques, each exploiting a different degree of freedom. Liquefaction and evaporative pumping (Onnes, 0.9 K). Adiabatic demagnetisation: order the spins of a paramagnetic salt in a strong field, then remove the field isentropically so the spins absorb entropy from the lattice (Giauque, 0.25 K). Dilution refrigeration using the finite solubility of ³He in ⁴He (~2 mK). Nuclear demagnetisation (μK). Laser plus evaporative cooling of trapped atoms (nK and below).',
   meas:'Lowest recorded: 450 pK in a sodium condensate (MIT 2003); 38 pK in a matter-wave lensing experiment (2021). Each rung gains roughly a factor of 10³, and none reaches zero.',
   infer:'The third law is confirmed operationally: every method removes a finite fraction of the remaining entropy, so infinitely many steps would be required.',
   assume:'That the quantity measured is a genuine equilibrium temperature. At these scales it is inferred from the momentum spread of an expanding cloud, which presupposes internal thermal equilibrium — a real interpretive issue, since the atoms are in equilibrium with nothing else.'}
 ],
 assume:[
  {a:'Equilibrium states exist and are fixed by a few variables.', k:'definition', n:'Everything follows from this, and it is why thermodynamics is silent about processes: it describes endpoints, not paths, and says nothing about rates.'},
  {a:'The zeroth law: thermal equilibrium is transitive.', k:'empirical', n:'What makes temperature a well-defined scalar. Named after the others because its necessity was noticed last.'},
  {a:'Reversible, quasi-static processes exist.', k:'idealisation', n:'They require infinitely slow change, hence infinite time and zero power. No real process is reversible; reversible ones only set bounds.'},
  {a:'Systems are large and interactions short-ranged.', k:'idealisation', n:'Needed for extensivity. Fails for gravitating systems, small systems, and interfaces.'},
  {a:'Entropy exists as a state function.', k:'definition', n:'Constructed from ∮δQ_rev/T = 0, or from adiabatic accessibility. That such a function exists at all is the content of the Second Law.'},
  {a:'Absolute zero is unattainable.', k:'empirical', n:'The Nernst statement. Explaining it requires a non-degenerate quantum ground state — the phenomenological theory cannot account for its own third law.'},
  {a:'The Second Law has no exceptions.', k:'contested', n:'Strictly false. Jarzynski and Crooks make the exceptions quantitative and they have been measured. The law is a claim about overwhelming probability at macroscopic scale.'}
 ],
 notation:[
  {s:R`\delta Q,\ \delta W`, r:'"delta-Q", "delta-W"', m:'The δ rather than d marks an *inexact* differential: heat and work are path-dependent and are not properties of a state. Writing dQ is a standard and consequential error. Sign conventions differ — physics usually takes W as work done *by* the system, chemistry as work done *on* it — so always check which.', d:'J'},
  {s:R`U,\ H,\ F,\ G`, r:'"internal energy", "enthalpy", "Helmholtz free energy", "Gibbs free energy"', m:'Legendre transforms of one another: H = U + PV, F = U − TS, G = H − TS. Each is minimised at equilibrium under different constraints — F at fixed T and V, G at fixed T and P. Which potential is appropriate is decided by what the apparatus holds constant. A is often used for F, especially in chemistry.', d:'J'},
  {s:R`S`, r:'"entropy"', m:'dS = δQ_rev/T. A state function although defined through a path-dependent quantity: dividing by T is exactly what makes the differential exact.', d:'J K⁻¹'},
  {s:R`T`, r:'"absolute temperature"', m:'Defined by Carnot efficiency, or equivalently by 1/T = ∂S/∂U. The second definition permits negative temperatures for systems with bounded energy spectra — and negative temperatures are hotter than infinite, not colder than zero.', d:'K'},
  {s:R`\mu_i`, r:'"chemical potential"', m:'(∂G/∂n_i) at fixed T, P and other amounts. The driving force for particle transfer: matter flows from high μ to low. Equality of μ across phases is the condition of phase equilibrium.', d:'J mol⁻¹'},
  {s:R`C_V,\ C_P`, r:'"heat capacities at constant volume and pressure"', m:'C_P > C_V always, since at constant pressure part of the heat does expansion work. Their ratio γ enters the speed of sound and adiabatic processes.', d:'J K⁻¹'},
  {s:R`\eta`, r:'"efficiency"', m:'W/Q_H, bounded by 1 − T_C/T_H. Not to be confused with viscosity, for which η is also standard.', d:'dimensionless'},
  {s:R`(\partial X/\partial Y)_Z`, r:'"partial derivative of X with respect to Y at constant Z"', m:'The subscript is not decoration: thermodynamic partials are meaningless without stating what is held fixed, because a state can be parametrised in many ways. The Maxwell relations are statements about equality of mixed second partials.', d:'varies'},
  {s:R`^{\circ},\ ^{\ddagger},\ ^{\circ\prime}`, r:'"standard state", "transition state", "biochemical standard"', m:'ΔG° is at 1 bar and unit activity; ΔG‡ is an activation barrier; ΔG°′ is the biochemical standard at pH 7, which can differ from ΔG° by tens of kJ/mol for reactions releasing H⁺. Mixing them is a common and large error.', d:'J mol⁻¹'}
 ],
 worked:{t:'What Carnot\'s bound actually costs a power station',
  steps:[
   'A supercritical coal plant: steam at T_H = 873 K (600 °C), condenser at T_C = 300 K (27 °C).',
   'Carnot ceiling: η = 1 − 300/873 = 0.656, i.e. 65.6%.',
   'Best real net efficiency for such a plant: about 45%. The gap is irreversibility — finite-rate heat transfer, friction, turbine and generator losses.',
   'The Curzon–Ahlborn bound, which maximises *power* rather than efficiency, is 1 − √(T_C/T_H) = 1 − √0.344 = 0.414, i.e. 41.4%.',
   'Real plants sit close to the Curzon–Ahlborn figure, not the Carnot one.'],
  a:'The reversible bound is unattainable because reaching it requires infinitely slow operation, which delivers no power at all. What engineers actually optimise against is a different bound, also derived from thermodynamics alone — a nice case of one idealisation being replaced by a more realistic one within the same theory. And all of it descends from an argument made in 1824 about a conserved fluid that does not exist.'}
}
};
