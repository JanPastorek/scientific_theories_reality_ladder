const HIST_3 = {

sm: {
 origin:[
  {y:'1930', who:'Pauli', t:'A particle invented to save a conservation law',
   b:'Beta-decay electrons emerge with a continuous energy spectrum, not the single line a two-body decay requires. Bohr was prepared to abandon energy conservation. Pauli instead postulated an undetected neutral particle in a letter to a conference he was skipping for a ball, calling it "a desperate remedy" and adding "I have done a terrible thing, I have postulated a particle that cannot be detected." Detected by Cowan & Reines 26 years later.'},
  {y:'1934', who:'Fermi', t:'The first weak interaction theory',
   b:'A four-fermion contact interaction with one constant G_F. Rejected by *Nature* as "too remote from physical reality". It is exactly right as an effective theory below 80 GeV, and its non-renormalisability was the clue to the W boson.'},
  {y:'1956–57', who:'Lee & Yang; Wu', t:'Parity is not a symmetry of the world',
   b:'Lee and Yang noticed that parity conservation, assumed universally, had never been tested in weak interactions. Wu tested it in six months and found maximal violation. Pauli had written "I do not believe that the Lord is a weak left-hander"; he lost money on it.'},
  {y:'1961–68', who:'Glashow; Weinberg; Salam', t:'Electroweak unification',
   b:'Glashow proposes SU(2)×U(1) but must insert masses by hand. Weinberg (1967) and Salam apply the Higgs mechanism to give the W and Z masses while keeping the photon massless. Weinberg\'s paper was cited twice in its first four years — nobody believed a spontaneously broken gauge theory could be renormalisable, until \'t Hooft proved it in 1971.'},
  {y:'1964', who:'Gell-Mann; Zweig', t:'Quarks, proposed with reservations',
   b:'The eightfold way organises hadrons by SU(3); Gell-Mann proposes fractionally charged constituents, at first as a possibly-fictitious bookkeeping device ("a schematic model"). Zweig\'s independent "aces" paper was never accepted by a journal.'},
  {y:'1964', who:'Englert & Brout; Higgs; Guralnik, Hagen & Kibble', t:'The mass mechanism',
   b:'Three independent papers within months, all building on Anderson\'s 1962 observation that this is how photons get an effective mass inside a superconductor. Higgs\'s paper was initially rejected by *Physics Letters* for having "no obvious relevance to physics".'},
  {y:'1970', who:'Glashow, Iliopoulos & Maiani', t:'A particle predicted by an absence',
   b:'Strangeness-changing neutral currents (K⁰ → μ⁺μ⁻) are observed to be enormously suppressed. GIM show this follows automatically if a fourth quark exists to cancel the amplitude. Charm is discovered in 1974. A prediction derived from something not happening.'},
  {y:'2012', who:'ATLAS & CMS', t:'The last piece',
   b:'A 125 GeV boson is announced on 4 July at CERN, with both collaborations blind to each other\'s result until the day. Higgs and Englert receive the Nobel the following year; Brout had died in 2011.'}
 ],
 exps:[
  {n:'The Wu experiment: parity violation', who:'C. S. Wu, Ambler, Hayward, Hoppes, Hudson (NBS)', y:'Dec 1956 – Jan 1957', fig:'wu',
   setup:'A thin layer of ⁶⁰Co is deposited on a cerium-magnesium-nitrate crystal and cooled to 0.003 K by adiabatic demagnetisation. A solenoid polarises the cobalt nuclei along its axis. Beta electrons are counted by an anthracene scintillator inside the cryostat, its light piped out through a 1.2 m lucite rod to a photomultiplier. Two NaI gamma counters (equatorial and polar) monitor the degree of nuclear polarisation via the gamma anisotropy, which serves as the internal thermometer. The magnetic field direction is reversed and the counting rates compared.',
   meas:'Electron emission rate was ~40% larger opposite to the nuclear spin than along it, and the asymmetry decayed away over ~6 minutes exactly as the polarisation warmed up.',
   infer:'The weak interaction distinguishes left from right absolutely. Mirror symmetry is not a symmetry of nature. Within months this forced the V−A structure of the weak current.',
   assume:'That the observed asymmetry is not an instrumental artefact of the magnetic field acting on the electrons. Controlled by reversing the field, by the decay of the effect with warming, and by checking that the gamma anisotropy (a parity-even quantity) behaved as expected. The warming curve is the key control: an instrumental effect would not fade with the polarisation.'},
  {n:'Discovery of neutral currents', who:'Gargamelle collaboration, CERN', y:'1973', fig:'bubble',
   setup:'Gargamelle was a 4.8 m bubble chamber holding 12 m³ of liquid freon (CF₃Br), chosen for high density so that neutrino interactions would occur at a usable rate. A muon-neutrino beam from the PS traverses it. The chamber is expanded, tracks nucleate bubbles, and stereo cameras photograph them. 1.4 million pictures were scanned largely by hand.',
   meas:'~100 events with hadrons produced and no outgoing muon, against a predicted neutron background. Ratio of neutral-current to charged-current events ≈ 0.21.',
   infer:'A neutral weak boson exists: ν_μ + N → ν_μ + hadrons. This was the electroweak model\'s first confirmed novel prediction, and it made the W and Z search credible.',
   assume:'That muonless events are not neutron-induced background. This was the whole fight: neutrons entering the chamber mimic the signature. The resolution was the spatial distribution — neutron-induced events should cluster near the chamber walls and show an exponential attenuation with depth; the signal events were uniformly distributed. A competing US experiment saw the effect, lost it, and saw it again, earning the name "alternating neutral currents".'},
  {n:'Discovery of the Higgs boson', who:'ATLAS & CMS, LHC', y:'2012', fig:'lhc',
   setup:'Proton bunches collide at √s = 7–8 TeV, 40 million times a second. Detectors are onion-shell: silicon trackers in a solenoidal field measure charged-particle momenta; electromagnetic calorimeters (lead-tungstate crystals in CMS, liquid argon in ATLAS) measure photon and electron energies; hadronic calorimeters measure jets; muon chambers form the outer layer. A two-level trigger keeps ~400 events per second out of 4×10⁷. The two "golden" channels are H → γγ (a narrow mass peak over a smooth falling background) and H → ZZ* → 4 leptons (very low background, poor statistics).',
   meas:'A resonance at 125.09 ± 0.24 GeV, local significance 5.0σ (ATLAS) and 4.9σ (CMS) in the combined channels; now measured at 125.20 ± 0.11 GeV.',
   infer:'A scalar boson with couplings proportional to mass — the last Standard Model particle. Spin-0 confirmed by angular distributions; CP-even favoured.',
   assume:'That the background shape under the diphoton peak is correctly modelled — it is fitted from the data sidebands with a parametrised function, and the choice of function is itself a systematic ("spurious signal"). Both collaborations blinded the signal region during analysis design specifically to prevent the background choice from being tuned to the answer.'},
  {n:'Neutrino oscillation — physics beyond this sheet', who:'Super-Kamiokande; SNO', y:'1998; 2001–02', fig:'kamioka',
   setup:'Super-K: 50 000 tonnes of ultrapure water 1 km underground in a zinc mine, viewed by 11 146 photomultiplier tubes, detecting Čerenkov cones from charged leptons produced by neutrino interactions. Muon-neutrinos produced in the atmosphere arrive from all directions; those from below have travelled ~13 000 km through the Earth, those from above ~15 km. SNO: 1000 tonnes of heavy water 2 km down in a Canadian nickel mine, able to detect all three neutrino flavours separately via three distinct reaction channels.',
   meas:'Super-K: upward-going ν_μ deficit of about a factor of two, with the deficit depending on zenith angle (i.e. on path length) exactly as oscillation predicts. SNO: the total flux of all flavours from the Sun matches the solar model, while the electron-neutrino flux alone is one third of it.',
   infer:'Neutrinos change flavour in flight, therefore they have mass and the flavour and mass eigenstates are misaligned. The minimal Standard Model forbids this. It remains the only confirmed laboratory physics beyond the Standard Model.',
   assume:'For Super-K, that the atmospheric neutrino production model and the detector\'s directional reconstruction are right — the up/down comparison is designed so that most systematics cancel, which is why the zenith-angle dependence, not the absolute rate, is the evidence. For SNO, that the three channels\' cross-sections are known; this is why the same detector measuring all three was decisive where thirty years of flux measurements had not been.'}
 ],
 assume:[
  {a:'The gauge group is SU(3)_C × SU(2)_L × U(1)_Y.', k:'empirical', n:'Read off from experiment, not derived. Nothing in the framework explains this choice; grand unified theories try to embed it in a larger simple group and predict proton decay, which has not been seen (τ_p > 2.4×10³⁴ yr).'},
  {a:'There are exactly three generations.', k:'empirical', n:'Measured, not explained: the Z⁰ line width at LEP gives N_ν = 2.984 ± 0.008 light active neutrino species.'},
  {a:'Neutrinos are massless.', k:'contested', n:'An assumption of the minimal model, and now known to be false. Mass is added by hand — Dirac or Majorana, undetermined — with 7–9 extra parameters.'},
  {a:'The Higgs is a fundamental scalar.', k:'contested', n:'Alternatives (technicolour, composite Higgs) predicted deviations in couplings; none seen so far, but the LHC constrains compositeness only to a few TeV.'},
  {a:'The 19 parameters are constants of nature.', k:'idealisation', n:'Constancy over cosmological time is tested: bounds on Δα/α of order 10⁻¹⁷ per year from the Oklo natural reactor and quasar absorption spectra.'},
  {a:'θ_QCD ≈ 0.', k:'contested', n:'CP violation in QCD is allowed by the symmetries but the neutron electric dipole moment bounds θ < 10⁻¹⁰. Nothing in the model explains why. The leading proposal (Peccei–Quinn, giving the axion) predicts a new particle not yet found.'},
  {a:'Perturbation theory applies at collider energies.', k:'auxiliary', n:'True for electroweak processes; for QCD it requires factorisation — separating a calculable hard scattering from measured parton distribution functions. Factorisation is proved only for a limited set of processes.'}
 ],
 notation:[
  {s:R`SU(3)_C\times SU(2)_L\times U(1)_Y`, r:'"S-U-three colour cross S-U-two left cross U-one hypercharge"', m:'The gauge group. Subscript L means it acts only on left-handed fields — this is where parity violation is encoded. Y is weak hypercharge, related to electric charge by Q = T³ + Y/2.', d:'—'},
  {s:R`\Phi`, r:'"the Higgs doublet"', m:'A complex SU(2) doublet: four real fields. Three are eaten by W⁺, W⁻, Z⁰ to become their longitudinal polarisations; one remains as the physical Higgs boson.', d:'GeV (in ħ=c=1)'},
  {s:R`v`, r:'"the vacuum expectation value"', m:'⟨Φ⟩ = v/√2 with v = 246 GeV (the value 174 GeV is v/√2 — conventions differ, check before comparing). Fixed experimentally by the muon lifetime via G_F.', d:'GeV'},
  {s:R`y_f`, r:'"Yukawa coupling"', m:'Strength of the Higgs–fermion coupling; m_f = y_f v/√2. y_top ≈ 1, y_electron ≈ 3×10⁻⁶. The spread over five orders of magnitude is the flavour puzzle.', d:'dimensionless'},
  {s:R`\theta_W`, r:'"weak mixing angle", "Weinberg angle"', m:'Rotates (W³, B) into (Z, γ). sin²θ_W ≈ 0.231. Predicts m_W = m_Z cos θ_W, a relation confirmed at the per-mille level — one of the model\'s sharpest tests.', d:'dimensionless'},
  {s:R`V_{\rm CKM}`, r:'"the CKM matrix"', m:'A 3×3 unitary matrix relating quark mass eigenstates to weak eigenstates. Three angles and one phase; the phase is the sole source of CP violation in the quark sector.', d:'dimensionless'},
  {s:R`G_F`, r:'"Fermi constant"', m:'1.1663788×10⁻⁵ GeV⁻². Measured from the muon lifetime to 0.5 ppm. Its dimensions (inverse mass squared) are the signature that Fermi theory is an effective theory: G_F/√2 = g²/8m_W².', d:'GeV⁻²'},
  {s:R`\alpha_s`, r:'"strong coupling"', m:'g²/4π ≈ 0.118 at the Z mass; it runs to ~1 at 1 GeV, where perturbation theory fails and confinement sets in.', d:'dimensionless'},
  {s:R`\Lambda_{\rm QCD}`, r:'"Lambda QCD"', m:'≈ 200 MeV — the scale where α_s blows up. Generated by dimensional transmutation from a dimensionless coupling, which is how a theory with (almost) no mass parameters produces the proton mass.', d:'MeV'},
  {s:R`\sqrt{s},\ \mathcal{L}`, r:'"root-s", "luminosity"', m:'Centre-of-mass collision energy, and the beam luminosity in cm⁻² s⁻¹. Events = σ × ∫ℒdt. Integrated luminosity is quoted in inverse femtobarns (1 fb⁻¹ = 10³⁹ cm⁻²).', d:'GeV; cm⁻²s⁻¹'},
  {s:R`\sigma,\ \text{significance }\sigma`, r:'"cross-section" vs "standard deviations"', m:'A notorious collision of notation: the same letter means an effective area (measured in barns) and a statistical significance. "A 5σ excess in the σ measurement" is a legitimate sentence.', d:'barn; dimensionless'}
 ],
 worked:{t:'Reading the W mass out of the Fermi constant',
  steps:[
   'Fermi theory gives G_F/√2 = g²/8m_W², so m_W² = g²√2/(8G_F) — but g is not directly measured.',
   'Use g = e/sin θ_W and e² = 4πα: m_W² = πα/(√2 G_F sin²θ_W).',
   'Insert α = 1/137.036, G_F = 1.16638×10⁻⁵ GeV⁻², sin²θ_W = 0.2312.',
   'm_W² = π(7.297×10⁻³)/(1.4142 × 1.16638×10⁻⁵ × 0.2312) GeV² = 6014 GeV², so m_W = 77.6 GeV.',
   'Radiative corrections (dominated by the top quark loop) raise this by about 3%, giving ≈ 80.4 GeV.'],
  a:'Measured: 80.3692 ± 0.0133 GeV. Three quantities measured in atomic physics, muon decay and neutrino scattering predict the mass of a particle discovered afterwards — and the 3% radiative correction is how the top quark mass was pinned to ~175 GeV before anyone saw a top quark. This is the Standard Model at its strongest: overdetermination across wildly different experiments.'}
}
};
