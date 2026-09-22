/* Discovery, experiments, assumptions, notation, worked examples.
   k: definition | idealisation | empirical | auxiliary | contested  */
const HIST_1 = {

qg: {
 origin:[
  {y:'1916', who:'Einstein', t:'Notices the problem himself',
   b:'In the same paper series that completed general relativity, Einstein remarks that quantum effects must modify the theory of gravitational radiation. No experiment prompts this; it is a consistency worry about two theories he already has.'},
  {y:'1930s', who:'Rosenfeld, Bronstein', t:'First quantisation attempts',
   b:'Rosenfeld (1930) quantises the linearised field and finds divergences. Bronstein (1936) gives the first argument that gravity is structurally unlike other fields: measuring a field component in a region of size Δx requires a test body whose own gravity, if it is not to collapse the region, bounds the achievable precision. This is the earliest derivation of a fundamental limit, and it is purely a thought experiment.'},
  {y:'1957–67', who:'Wheeler, DeWitt, Misner', t:'Canonical programme',
   b:'The ADM 3+1 split of GR is quantised: the Wheeler–DeWitt equation ĤΨ[h_{ij}] = 0 follows. The frozen-time problem appears immediately and is still unresolved.'},
  {y:'1974', who:'Hawking', t:'The one quantitative result',
   b:'Quantum fields on a fixed classical black hole background radiate at T_H = ħc³/8πGMk_B. This is a semiclassical calculation, not quantum gravity — but it fixes the target that every candidate must hit, and it creates the information paradox.'},
  {y:'1974–84', who:'Scherk & Schwarz; Green & Schwarz', t:'Strings repurposed',
   b:'A theory built to describe hadrons contained a massless spin-2 state that refused to go away. Scherk and Schwarz (1974) proposed reading it as the graviton instead of a defect. The 1984 anomaly cancellation in SO(32) and E₈×E₈ turned this into a research programme.'},
  {y:'1986–94', who:'Ashtekar; Rovelli & Smolin', t:'Loop quantum gravity',
   b:'New variables recast GR as a gauge theory; Wilson loops give a basis of states, and area and volume operators acquire discrete spectra. Background independence is kept; perturbation around a fixed metric is abandoned.'},
  {y:'1997', who:'Maldacena', t:'AdS/CFT',
   b:'A conjectured exact equivalence between quantum gravity in anti-de Sitter space and a conformal field theory on its boundary. The most-cited paper in theoretical physics, and still a conjecture — and in a spacetime with the wrong sign of Λ.'}
 ],
 exps:[
  {n:'Non-experiment: the hierarchy of scales', who:'—', y:'—', fig:'scaleprobe',
   setup:'To probe a length ℓ you need a quantum of wavelength λ ≲ ℓ, hence energy E ≳ ħc/ℓ. To reach ℓ_P = 1.6×10⁻³⁵ m needs E ≈ 10¹⁹ GeV. The LHC delivers 1.4×10⁴ GeV.',
   meas:'Ratio of required to available energy ≈ 10¹⁵.',
   infer:'No terrestrial accelerator can probe the Planck scale. A collider of LHC design reaching 10¹⁹ GeV would need a ring roughly the size of the Milky Way.',
   assume:'That probing shorter distances requires higher energies in the usual way — which is itself questioned by generalised-uncertainty and minimum-length proposals, where Δx ≳ ħ/Δp + βℓ_P²Δp/ħ has a minimum.'},
  {n:'GW170817 — multi-messenger timing', who:'LIGO/Virgo + Fermi-GBM', y:'2017', fig:'ligo',
   setup:'A neutron-star merger at 40 Mpc produced a gravitational-wave chirp; a gamma-ray burst was detected 1.7 s later by the Fermi satellite.',
   meas:'|c_GW − c_γ|/c < 10⁻¹⁵ over a 130-million-year flight.',
   infer:'Whole classes of modified-gravity and Lorentz-violating quantum-gravity models predicted a frequency- or energy-dependent propagation speed. They were eliminated in a single night.',
   assume:'That the two signals were emitted within a few seconds of each other — an astrophysical modelling assumption, not a measurement. The bound degrades if emission is separated by more than that.'},
  {n:'Gamma-ray burst photon dispersion', who:'Fermi-LAT', y:'2009–', fig:null,
   setup:'Photons of widely different energy (GeV vs MeV) from the same cosmological burst are timed. A granular spacetime would make the speed of light energy-dependent, v(E) ≈ c(1 − E/E_QG).',
   meas:'No dispersion detected; E_QG > E_Planck for linear (n = 1) models.',
   infer:'Linear-in-energy Lorentz violation at the Planck scale is excluded. Quadratic models remain open.',
   assume:'That the high- and low-energy photons left the source simultaneously; intrinsic source lags are the dominant systematic and are not independently known.'}
 ],
 assume:[
  {a:'Gravity must be quantised at all.', k:'contested', n:'Not obviously true. Semiclassical gravity G_{μν} = 8πG⟨T̂_{μν}⟩ is not known to be inconsistent; the Eppley–Hannah and Page–Geilker arguments against it are widely repeated and widely disputed. Page & Geilker (1981) did run an actual experiment against a naive many-worlds semiclassical model and refuted it.'},
  {a:'The Planck scale is where new physics appears.', k:'contested', n:'ℓ_P is a dimensional-analysis combination, not a measured scale. Compare: the Fermi scale G_F^{−1/2} ≈ 300 GeV did signal new physics — which appeared at 80 GeV, below it.'},
  {a:'Perturbative expansion around a fixed background is meaningful.', k:'idealisation', n:'Assumed by string perturbation theory, denied by LQG and causal sets. The disagreement is methodological, not empirical, and no experiment currently distinguishes them.'},
  {a:'Black hole evaporation is unitary.', k:'contested', n:'Assumed by almost everyone since the 1990s, motivated by AdS/CFT rather than observation. If false, Hawking\'s original calculation stands and quantum mechanics is modified instead.'},
  {a:'Spacetime is 4-dimensional at low energy.', k:'empirical', n:'Tested: deviations from the inverse-square law are excluded above ~50 μm (Eöt-Wash torsion balance), bounding large extra dimensions.'},
  {a:'The low-energy theory is general relativity plus a derivative expansion.', k:'definition', n:'This is what "effective theory of gravity" means; it is what makes the Donoghue correction calculable and it fixes what a UV completion must reduce to.'}
 ],
 notation:[
  {s:R`\ell_P,\ E_P,\ M_P`, r:'"ell-Planck", "E-Planck", "M-Planck"', m:'Planck length, energy, mass. M_P is often quoted either as √(ħc/G) = 1.22×10¹⁹ GeV or as the reduced value √(ħc/8πG) = 2.44×10¹⁸ GeV — check which before comparing papers.', d:'m, J (or GeV), kg'},
  {s:R`R,\ R_{\mu\nu},\ R^{\rho}_{\ \sigma\mu\nu}`, r:'"Ricci scalar", "Ricci tensor", "Riemann tensor"', m:'Successive contractions of curvature. R² and R_{μν}R^{μν} are the dimension-4 curvature-squared corrections to the Einstein–Hilbert term.', d:'m⁻², m⁻², m⁻²'},
  {s:R`S_{\rm BH}`, r:'"Bekenstein–Hawking entropy"', m:'Entropy attributed to a black hole horizon, equal to one quarter of its area in Planck units.', d:'J K⁻¹ (dimensionless in units k_B = 1)'},
  {s:R`A`, r:'"horizon area"', m:'Area of the event horizon; for Schwarzschild A = 16πG²M²/c⁴.', d:'m²'},
  {s:R`T_H`, r:'"Hawking temperature"', m:'Temperature of the thermal spectrum radiated by a black hole. Inversely proportional to mass, so black holes have negative heat capacity.', d:'K'},
  {s:R`c_i`, r:'"Wilson coefficients"', m:'Dimensionless numbers multiplying higher-curvature operators in the effective action. Unknown without a UV completion; they do not affect leading-order low-energy predictions.', d:'dimensionless'},
  {s:R`\Psi[h_{ij}]`, r:'"the wavefunction of the geometry"', m:'The Wheeler–DeWitt state, a functional of the spatial 3-metric h_{ij}. Carries no time argument — hence the problem of time.', d:'—'}
 ],
 worked:{t:'How far is the Planck scale, in units you can feel?',
  steps:[
   'Planck length ℓ_P = √(ħG/c³) = √(1.055×10⁻³⁴ × 6.674×10⁻¹¹ / 2.698×10²⁵) m = 1.616×10⁻³⁵ m.',
   'A proton has radius r_p ≈ 0.84×10⁻¹⁵ m. So r_p/ℓ_P ≈ 5.2×10¹⁹.',
   'For comparison, the Earth\'s radius divided by a proton radius is 6.37×10⁶ / 0.84×10⁻¹⁵ ≈ 7.6×10²¹ — only about 150 times larger a ratio.',
   'So: the Planck length is almost as far below a proton as a proton is below the planet.'],
  a:'Every experiment ever performed probes a regime at least 10¹⁵ times too coarse to see Planck-scale structure directly. This is the single most important empirical fact about this sheet, and it is why the philosophical questions here are about theory assessment without evidence.'}
},

gr: {
 origin:[
  {y:'1907', who:'Einstein, Bern patent office', t:'"The happiest thought of my life"',
   b:'"If a person falls freely, he will not feel his own weight." Einstein recognises that a uniformly accelerated frame and a uniform gravitational field are locally indistinguishable — so gravity can be transformed away locally, and therefore is not a force like the others. No experiment, no calculation: an analysis of a fact everyone already knew (all bodies fall alike) that nobody had treated as a clue about geometry.'},
  {y:'1907–11', who:'Einstein', t:'First predictions from the equivalence principle alone',
   b:'Gravitational redshift and light bending δ = 2GM/bc² are derived before any field equation exists. The 1911 bending value is half the final one — an error that was lucky, since the 1914 eclipse expedition sent to test it was interrupted by the outbreak of war.'},
  {y:'1912–15', who:'Einstein with Grossmann', t:'The mathematics, and the hole argument',
   b:'Grossmann supplies Riemannian geometry and the absolute differential calculus of Ricci and Levi-Civita. The 1913 Entwurf theory has field equations that are not generally covariant, because Einstein convinced himself by the hole argument that general covariance would make the theory indeterministic. Two years are lost to a philosophical mistake about the identity of manifold points.'},
  {y:'Nov 1915', who:'Einstein', t:'Four papers in four weeks',
   b:'Racing Hilbert, Einstein returns to general covariance. On 18 November he computes Mercury\'s perihelion advance and gets 43″/century — the observed anomaly — with no adjustable parameter. He later said it gave him palpitations. On 25 November the final field equations appear.'},
  {y:'1916', who:'Schwarzschild', t:'An exact solution, from the Russian front',
   b:'Schwarzschild solves the field equations for a spherical mass within weeks of their publication, while serving in the German army; he died of pemphigus months later. The r = 2GM/c² surface is misread as a physical singularity for nearly 50 years.'},
  {y:'1919', who:'Eddington & Dyson', t:'The eclipse, and the making of a celebrity',
   b:'Expeditions to Sobral (Brazil) and Príncipe measure star displacements during totality. The announcement in November 1919 made Einstein world-famous. The data were marginal and the Sobral astrographic plates — which favoured the Newtonian value — were discarded on grounds of focus drift, a decision debated ever since as a case of theory-laden data selection.'},
  {y:'1960–', who:'Dicke, Schiff, Will and others', t:'The renaissance and the PPN framework',
   b:'GR was an empirically starved theory for forty years. The parametrised post-Newtonian formalism turned "test general relativity" into "measure γ and β", making rival metric theories comparable on one scale — a rare case of a framework built specifically to make theory-choice tractable.'}
 ],
 exps:[
  {n:'The 1919 eclipse expeditions', who:'Dyson, Eddington, Davidson', y:'29 May 1919', fig:'eclipse',
   setup:'Two stations. At Sobral, a 4-inch lens and a 13-inch astrographic telescope fed by a coelostat mirror; at Príncipe, a 13-inch astrographic. Photographic plates of the Hyades field were taken during 6 minutes of totality, then compared with plates of the same field taken months earlier at night, when the Sun was elsewhere. The shift sought was the apparent outward displacement of stars whose light grazed the solar limb.',
   meas:'Predicted deflection at the limb 1.75″. Sobral 4-inch: 1.98″ ± 0.12″. Príncipe astrographic: 1.61″ ± 0.30″. Sobral astrographic (discarded): 0.93″, close to the Newtonian 0.87″.',
   infer:'Announced as confirmation of Einstein over Newton. Modern reanalysis of the surviving plates supports the conclusion; the contemporaneous evidence was much weaker than the announcement implied.',
   assume:'That the reference plates and eclipse plates had the same scale — the dominant systematic, since the Sobral astrographic\'s mirror had warmed and its focus drifted. The discard was justified on independent optical grounds, but the justification was made after the answer was known.'},
  {n:'Pound–Rebka: gravitational redshift in a stairwell', who:'Pound & Rebka, Harvard', y:'1959–60', fig:'pound',
   setup:'A ⁵⁷Co source at the top of the 22.5 m Jefferson Laboratory tower emits 14.4 keV gamma rays; an ⁵⁷Fe absorber sits at the bottom. Recoil-free emission and absorption (the Mössbauer effect, discovered in 1958) gives a line width Γ/E ≈ 10⁻¹². The source is mounted on a loudspeaker cone and moved at a controlled velocity to Doppler-tune the photon energy until resonant absorption is restored. Source and absorber were periodically swapped to cancel systematics.',
   meas:'Predicted fractional shift Δν/ν = gh/c² = 9.81 × 22.5 / 8.99×10¹⁶ = 2.46×10⁻¹⁵. Measured: agreement to 10% (1960), improved to 1% by Pound & Snider in 1965.',
   infer:'Clocks run slower deeper in a gravitational potential, as the equivalence principle requires. Note what is tested: the redshift follows from the EP alone, so this tests the EP, not the field equations.',
   assume:'That the Mössbauer line centre is unaffected by anything else varying over 22.5 m. Temperature was the killer: the second-order Doppler shift from lattice vibrations is ~10⁻¹⁵ per kelvin of difference, comparable to the signal, so source and absorber temperatures had to be monitored and corrected.'},
  {n:'Hulse–Taylor binary pulsar', who:'Hulse & Taylor, Arecibo', y:'1974–', fig:'pulsar',
   setup:'PSR B1913+16 is a pulsar in a 7.75-hour orbit with another neutron star. Pulse arrival times are recorded over decades; the orbit is reconstructed from the Doppler modulation of the pulse period. No other apparatus is involved — the neutron star is the clock and the Galaxy is the laboratory.',
   meas:'Orbital period decays by 76.5 μs per year. GR quadrupole prediction matches the observation to about 0.2% after correcting for the Galactic acceleration of the system.',
   infer:'Gravitational waves carry energy away, at the rate GR predicts. First (indirect) evidence for gravitational radiation; Nobel 1993.',
   assume:'That the companion is a compact object with negligible tidal deformation, and that the system\'s acceleration in the Galactic potential is known well enough to subtract — this is now the limiting systematic, requiring an independent distance measurement.'},
  {n:'GW150914 — direct detection', who:'LIGO Hanford & Livingston', y:'14 Sept 2015', fig:'ligo',
   setup:'Two 4-km Michelson interferometers with Fabry–Pérot arm cavities, 40 kg fused-silica test masses suspended on fibres in ultra-high vacuum, 100 kW of circulating 1064 nm laser light. A passing wave changes the differential arm length by ΔL = hL. The two sites, 3000 km apart, provide a coincidence requirement against local noise.',
   meas:'Peak strain h ≈ 1.0×10⁻²¹, i.e. ΔL ≈ 4×10⁻¹⁸ m over 4 km — about 1/200 of a proton radius. Signal-to-noise 24; false-alarm rate < 1 per 203 000 years.',
   infer:'A binary black hole merger of 36 and 29 solar masses at ~410 Mpc, with 3 solar masses radiated as gravitational waves in 0.2 s. The waveform was matched against numerical-relativity templates through the strong-field merger.',
   assume:'That the template bank (built from GR itself) spans the true signal space. This is a real interpretive circularity: the detection statistic is defined by matched filtering against GR waveforms, so a signal from a substantially non-GR source could be missed or mis-parametrised. Unmodelled burst searches are run in parallel partly to address this.'}
 ],
 assume:[
  {a:'Spacetime is a smooth 4-dimensional Lorentzian manifold.', k:'definition', n:'Not tested below ~10⁻¹⁸ m; assumed to hold down to ℓ_P, where the theory itself predicts failure.'},
  {a:'The equivalence principle: freely falling frames are locally inertial.', k:'empirical', n:'Weak form tested to η < 10⁻¹⁵ (MICROSCOPE, 2022); this is the empirical fact that licenses geometrising gravity at all.'},
  {a:'The field equations are second order in g and derived from a scalar action.', k:'definition', n:'Lovelock\'s theorem makes Einstein–Hilbert the unique such action in 4D, so this assumption has real content: relaxing it (f(R), Gauss–Bonnet, torsion) is exactly how modified-gravity theories are built.'},
  {a:'Matter obeys the energy conditions.', k:'idealisation', n:'Used in the singularity theorems and in positive-mass proofs. Quantum fields violate them (Casimir energy is negative), which is why the theorems do not straightforwardly apply to the real world.'},
  {a:'Test bodies follow geodesics.', k:'auxiliary', n:'Usually postulated; actually derivable from ∇^μT_{μν} = 0 for a sufficiently small body (Geroch–Jang). Extended and self-gravitating bodies need the strong equivalence principle, which is a separate empirical claim.'},
  {a:'The cosmological matter content is known.', k:'auxiliary', n:'The largest live assumption. Fitting GR to galaxies and cosmology requires ~5× more matter than is seen plus a Λ term. Whether that is new matter or a failure of the law cannot be decided by GR alone.'},
  {a:'A model and its diffeomorphic image represent the same physical situation.', k:'contested', n:'The standard resolution of the hole argument. It is an interpretive stipulation, not a theorem, and what it costs substantivalism is exactly what Earman & Norton\'s literature is about.'}
 ],
 notation:[
  {s:R`g_{\mu\nu}`, r:'"g mu nu", the metric tensor', m:'A symmetric rank-2 tensor field giving the invariant interval ds² = g_{μν}dx^μdx^ν. Ten independent components; four are pure gauge (coordinate choice), four are constrained, two propagate — the two gravitational-wave polarisations.', d:'dimensionless (with ds² in m²)'},
  {s:R`\eta_{\mu\nu}`, r:'"eta mu nu"', m:'The Minkowski metric diag(−1,1,1,1) — the flat value g takes in local inertial coordinates. Sign conventions differ between texts; MTW and Wald use (−,+,+,+), particle physics often (+,−,−,−).', d:'dimensionless'},
  {s:R`\Gamma^{\mu}_{\ \alpha\beta}`, r:'"Christoffel symbols", "Gamma mu alpha beta"', m:'Connection coefficients, built from first derivatives of g. Not a tensor: they can be set to zero at any single point, which is the mathematical statement of the equivalence principle.', d:'m⁻¹'},
  {s:R`R^{\rho}_{\ \sigma\mu\nu}`, r:'"Riemann curvature tensor"', m:'The frame-independent curvature; it measures the failure of parallel transport around a closed loop and governs geodesic deviation (tides). Vanishes identically if and only if spacetime is flat.', d:'m⁻²'},
  {s:R`R_{\mu\nu},\ R`, r:'"Ricci tensor", "Ricci scalar"', m:'Contractions R_{μν} = R^ρ_{μρν} and R = g^{μν}R_{μν}. In vacuum R_{μν} = 0, yet Riemann need not vanish — which is why gravitational waves can propagate through empty space.', d:'m⁻²'},
  {s:R`G_{\mu\nu}`, r:'"Einstein tensor"', m:'R_{μν} − ½Rg_{μν}. Constructed so that ∇^μG_{μν} = 0 identically (contracted Bianchi identity), which forces local energy–momentum conservation rather than assuming it.', d:'m⁻²'},
  {s:R`T_{\mu\nu}`, r:'"stress–energy tensor"', m:'T_{00} energy density, T_{0i} momentum density, T_{ij} stress. The source term. GR does not tell you what it is — that comes from whatever matter theory you plug in.', d:'J m⁻³'},
  {s:R`\Lambda`, r:'"Lambda", the cosmological constant', m:'A constant energy density of the vacuum, ρ_Λ = Λc⁴/8πG. Measured value ≈ 10⁻¹²² in Planck units — the largest discrepancy between a naive theoretical estimate and an observation in physics.', d:'m⁻²'},
  {s:R`\tau`, r:'"proper time"', m:'Time elapsed on a clock carried along a worldline, dτ² = −ds²/c². Path-dependent: this is the whole content of the twin puzzle.', d:'s'},
  {s:R`\nabla_{\mu}`, r:'"covariant derivative"', m:'Derivative corrected by Γ so that the result transforms as a tensor. ∇_μ g_{αβ} = 0 by construction (metric compatibility).', d:'m⁻¹'},
  {s:R`a(t),\ H`, r:'"scale factor", "Hubble parameter"', m:'In FLRW cosmology, a(t) rescales comoving distances and H = ȧ/a. H₀ ≈ 67–73 km s⁻¹ Mpc⁻¹, and the disagreement between methods of measuring it is the "Hubble tension".', d:'dimensionless; s⁻¹'},
  {s:R`h_{\mu\nu},\ h`, r:'"metric perturbation", "strain"', m:'g = η + h for weak fields. The observable strain of a gravitational wave is h = ΔL/L; GW150914 peaked at h ≈ 10⁻²¹.', d:'dimensionless'}
 ],
 worked:{t:'Why GPS needs general relativity, in four lines',
  steps:[
   'GR (gravitational): a satellite at r = 26 560 km is higher in the Earth\'s potential than a ground clock at R = 6 370 km. Fractional rate difference = (GM/c²)(1/R − 1/r) = (4.435×10⁻³ m)(1/6.37×10⁶ − 1/2.656×10⁷) = 5.29×10⁻¹⁰. The satellite clock runs FAST.',
   'SR (kinematic): orbital speed v = √(GM/r) = 3 874 m s⁻¹, so −v²/2c² = −8.35×10⁻¹¹. The satellite clock runs SLOW by this amount.',
   'Net: (5.29 − 0.835)×10⁻¹⁰ = 4.45×10⁻¹⁰ fast, i.e. 4.45×10⁻¹⁰ × 86 400 s = 38.5 μs per day.',
   'Position error if uncorrected: c × 38.5 μs = 11.5 km per day, accumulating.'],
  a:'The satellite oscillators are therefore offset before launch to 10.229 999 995 43 MHz instead of 10.23 MHz. This is not a test of relativity so much as an engineering system that would not function without it — the corrections have opposite signs and differ by a factor of six, so no single fudge factor could absorb them.'}
}
};
