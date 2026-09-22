
const PHYSICS = [
{
 id:'qg', n:'Quantum Gravity', aka:'String/M-theory · Loop quantum gravity · Asymptotic safety · Causal sets',
 dom:'physics', tier:0, years:'1930 – (no empirically confirmed theory)', status:'candidate',
 scale:{len:'10⁻³⁵ m', en:'10¹⁹ GeV', lg:35},
 one:'A family of research programmes, none experimentally confirmed, that try to describe gravity and spacetime quantum-mechanically — i.e. to say what happens where GR and QFT both break down.',
 onto:'Disputed by programme. Strings: 1-dimensional extended objects plus branes in 10/11 dimensions; spacetime is emergent and geometry is approximate. LQG: quantised areas and volumes carried by spin networks; spacetime is discrete and background-independent. Asymptotic safety: ordinary metric gravity, but with a non-Gaussian UV fixed point. Causal sets: a locally finite partial order of events; continuum geometry is a coarse-grained approximation.',
 state:'No agreed state space. String theory uses a QFT/CFT on the worldsheet plus a landscape of vacua; LQG uses spin-network states in a kinematical Hilbert space with constraint operators.',
 eqs:[
  {tex:R`\ell_{P}=\sqrt{\dfrac{\hbar G}{c^{3}}}\approx 1.6\times10^{-35}\,\mathrm{m},\qquad E_{P}=\sqrt{\dfrac{\hbar c^{5}}{G}}\approx 1.22\times10^{19}\,\mathrm{GeV}`, name:'Planck scale', gloss:'The unique combination of ħ, G, c with dimensions of length. It marks where the EFT expansion of gravity stops converging — not, by itself, evidence that spacetime is discrete.'},
  {tex:R`S_{\text{eff}}=\int d^{4}x\sqrt{-g}\left[\frac{M_P^{2}}{2}R+c_{1}R^{2}+c_{2}R_{\mu\nu}R^{\mu\nu}+\mathcal{O}\!\left(\frac{R^{3}}{M_P^{2}}\right)\right]`, name:'Gravity as an effective field theory', gloss:'Even without knowing the UV completion, GR can be treated as the leading term of a derivative expansion. This yields finite, unambiguous quantum corrections at low energy — the first real quantum-gravity predictions.'},
  {tex:R`V_{\text{Newton}}(r)=-\frac{Gm_{1}m_{2}}{r}\left[1+3\frac{G(m_{1}+m_{2})}{rc^{2}}+\frac{41}{10\pi}\frac{G\hbar}{r^{2}c^{3}}+\dots\right]`, name:'Leading quantum correction to the Newtonian potential', gloss:'Donoghue 1994. Calculable from the EFT alone, independent of the UV completion — and utterly unmeasurable (~10⁻⁴¹ relative at atomic scales).'},
  {tex:R`S_{\text{BH}}=\frac{k_{B}c^{3}A}{4G\hbar}=\frac{k_B A}{4\ell_P^{2}},\qquad T_{H}=\frac{\hbar c^{3}}{8\pi G M k_{B}}`, name:'Bekenstein–Hawking entropy & Hawking temperature', gloss:'The one place where ħ, G, c and k_B all appear together in a formula almost everyone accepts. Any candidate theory is expected to reproduce the area law by counting microstates.'}
 ],
 concepts:[
  {t:'Background independence', d:'The metric is not fixed in advance but solved for. LQG and causal sets take this as non-negotiable; perturbative string theory begins from a fixed background, which is one of the deepest methodological disagreements in the field.'},
  {t:'Non-renormalisability of GR', d:'G has mass dimension −2, so the perturbative expansion requires infinitely many counterterms with independent coefficients. Predictivity fails at E ~ M_P — but not below it. This is a statement about the expansion, not proof that gravity must be replaced.'},
  {t:'Holography / AdS-CFT', d:'A conjectured exact duality: quantum gravity in (d+1)-dimensional anti-de Sitter space ≡ a conformal field theory on its d-dimensional boundary. The strongest concrete handle anyone has on quantum gravity — but in a spacetime with the wrong (negative) cosmological constant.'},
  {t:'The landscape', d:'String theory admits an enormous number (often quoted ~10⁵⁰⁰) of metastable vacua with different low-energy physics. Whether this makes the theory unfalsifiable or merely requires anthropic/statistical reasoning is contested.'},
  {t:'Problem of time', d:'Canonical quantisation gives the Wheeler–DeWitt equation ĤΨ = 0: the physical state does not evolve. Time must be recovered relationally, from correlations between subsystems.'}
 ],
 results:[
  {n:'Hawking radiation (1974)', s:'Black holes radiate thermally at T_H. Semiclassical (quantum fields on classical curved spacetime), not full quantum gravity — but any candidate must reproduce it.'},
  {n:'Strominger–Vafa (1996)', s:'For certain extremal supersymmetric black holes, string theory counts microstates and reproduces A/4ℓ_P² exactly. A genuine success — for a highly non-generic class of black holes.'},
  {n:'Singularity theorems (Penrose 1965, Hawking–Penrose 1970)', s:'Under reasonable energy conditions, GR predicts its own geodesic incompleteness. The theory tells you where it fails.'},
  {n:'Area/volume quantisation in LQG', s:'Geometric operators have discrete spectra, A ∝ ℓ_P²√(j(j+1)). Whether these operators are physical (gauge-invariant) observables remains contested.'},
  {n:'No empirical discrimination', s:'As of today no observation distinguishes any candidate from any other, or from "GR + EFT corrections". Constraints exist (Lorentz-invariance violation bounds from gamma-ray bursts, GW170817 timing) but they cut against specific models, not programmes.'}
 ],
 valid:{holds:'Nowhere confirmed. The EFT treatment of gravity is reliable for E ≪ M_P and is genuinely predictive there.', breaks:'The domain where a full theory is needed — black hole interiors, the first 10⁻⁴³ s, curvature ~ ℓ_P⁻² — is precisely the domain we cannot probe. LHC energies are ~10¹⁵ times too low.'},
 detail:{
  deriv:[
   {h:'Why gravity resists quantisation (the honest version)', b:'Quantise the metric perturbation g_{μν} = η_{μν} + √(32πG) h_{μν}. The graviton propagator and vertices follow. Loop diagrams produce divergences whose counterterms are operators of ever-higher dimension: at one loop, pure gravity is finite on-shell (\'t Hooft–Veltman 1974), gravity + matter diverges at one loop, and pure gravity diverges at two loops (Goroff–Sagnotti 1986, coefficient 209/2880·(1/(4π)⁴)·∫√g C³). Each new divergence needs a new free parameter measured from experience. With infinitely many, predictive power at E ~ M_P is lost.'},
   {h:'The EFT rescue, and its limits', b:'Non-renormalisable ≠ useless. Order the counterterms by powers of E/M_P: at any fixed order in E/M_P only finitely many matter, so finitely many measurements fix all of them and everything else is predicted. This is exactly how Fermi theory worked before the W boson. It gives real numbers (the Donoghue correction above) and it fails, by construction, at E ~ M_P.'},
   {h:'What a UV completion must supply', b:'(i) a mechanism cutting off the graviton loop divergences — extended objects (strings), discreteness (LQG), or a UV fixed point (asymptotic safety); (ii) a microstate count reproducing A/4ℓ_P²; (iii) a resolution of the information paradox; (iv) a mechanism for recovering smooth 4D Lorentzian geometry in the IR. No programme currently does all four.'}
  ],
  deeper:[
   {h:'Information paradox', b:'Semiclassical evaporation maps a pure state to a thermal (mixed) state, violating unitarity. Page\'s theorem: if evaporation is unitary, entanglement entropy of the radiation must turn over at the Page time. Recent "island"/quantum-extremal-surface calculations reproduce the Page curve from a semiclassical gravitational path integral — arguably the most significant technical development of the last decade, though what it shows about the underlying ontology is disputed.'},
   {h:'Is the Planck scale a physical scale or a bookkeeping device?', b:'Note what the Planck length actually is: a dimensional-analysis combination. The inference "therefore spacetime is discrete at 10⁻³⁵ m" is an inference, not a measurement, and it is exactly the kind of inference a philosopher of science should want to see audited. Compare: the Fermi scale G_F^{-1/2} ≈ 300 GeV did correctly indicate new physics — but the new physics (the W at 80 GeV) appeared below it, not at it.'}
  ]
 },
 phil:{
  stance:'A case where the usual reduction picture inverts: we have a well-confirmed *effective* theory (GR-as-EFT) and no fundamental theory, so the inter-theoretic relation has to be conjectured downward rather than derived upward.',
  disputes:[
   'Underdetermination in its sharpest form: several inequivalent programmes are compatible with all evidence, and plausibly will remain so. Does this undermine scientific realism about fundamental physics, or is it a temporary evidential predicament?',
   'Non-empirical theory assessment (Dawid): can internal virtues — no known alternatives, unexpected explanatory coherence, meta-inductive success of the research programme — confirm a theory? Critics (Ellis, Silk, Smolin) read this as abandoning falsifiability.',
   'Is spacetime fundamental or emergent? If emergent, emergent *from what* — and what makes the base level count as "physical" without spatiotemporal properties (Huggett & Wüthrich)?',
   'Whether the non-renormalisability of GR is a defect of gravity or a defect of perturbation theory around a fixed background (the asymptotic-safety reading).'
  ],
  read:['Wüthrich & Huggett, *Out of Nowhere* (2025)','Rickles, *A Brief History of String Theory*','Dawid, *String Theory and the Scientific Method*','Donoghue, "Introduction to the Effective Field Theory Description of Gravity" (gr-qc/9512024)']
 },
 fig:'planck'
},

{
 id:'gr', n:'General Relativity', aka:'Einstein\'s theory of gravitation',
 dom:'physics', tier:1, years:'1915', status:'confirmed',
 scale:{len:'10⁻³ – 10²⁶ m', en:'≤ 10¹⁸ GeV', lg:20},
 one:'Gravity is not a force acting in spacetime but the curvature of spacetime itself; free bodies follow geodesics, and matter–energy sources the curvature.',
 onto:'A 4-dimensional smooth manifold M carrying a Lorentzian metric g_{μν} of signature (−,+,+,+), plus matter fields. There is no background spacetime: the metric is itself a dynamical field. Physical states are equivalence classes under diffeomorphism.',
 state:'A model is a triple (M, g_{ab}, T_{ab}). In initial-value (ADM 3+1) form: data (Σ, h_{ij}, K_{ij}) on a spacelike slice, subject to the Hamiltonian and momentum constraints; evolution is unique up to diffeomorphism (Choquet-Bruhat–Geroch).',
 eqs:[
  {tex:R`G_{\mu\nu}+\Lambda g_{\mu\nu}\;=\;R_{\mu\nu}-\tfrac12 R\,g_{\mu\nu}+\Lambda g_{\mu\nu}\;=\;\frac{8\pi G}{c^{4}}T_{\mu\nu}`, name:'Einstein field equations', gloss:'Ten coupled non-linear PDEs for g_{μν}. Four are constraints, not evolution equations (Bianchi identity ∇^μ G_{μν}=0), which is why energy–momentum conservation is built in rather than imposed.'},
  {tex:R`S=\frac{c^{4}}{16\pi G}\int d^{4}x\,\sqrt{-g}\,(R-2\Lambda)+S_{\text{matter}}[g,\psi]`, name:'Einstein–Hilbert action', gloss:'Lovelock\'s theorem: in 4D, this is the *unique* action giving second-order field equations from g alone. GR is far less arbitrary than it looks.'},
  {tex:R`\frac{d^{2}x^{\mu}}{d\tau^{2}}+\Gamma^{\mu}_{\ \alpha\beta}\frac{dx^{\alpha}}{d\tau}\frac{dx^{\beta}}{d\tau}=0`, name:'Geodesic equation', gloss:'The law of inertia in curved spacetime. Remarkably, it is not an independent postulate — it follows from ∇^μT_{μν}=0 for a small enough body (Geroch–Jang).'},
  {tex:R`ds^{2}=-\left(1-\frac{2GM}{rc^{2}}\right)c^{2}dt^{2}+\left(1-\frac{2GM}{rc^{2}}\right)^{-1}dr^{2}+r^{2}d\Omega^{2}`, name:'Schwarzschild solution', gloss:'The unique static spherically symmetric vacuum solution (Birkhoff). r_s = 2GM/c² is a coordinate artefact, not a curvature singularity; r = 0 is genuine.'},
  {tex:R`H^{2}=\left(\frac{\dot a}{a}\right)^{2}=\frac{8\pi G}{3}\rho-\frac{kc^{2}}{a^{2}}+\frac{\Lambda c^{2}}{3}`, name:'Friedmann equation (FLRW)', gloss:'GR applied to a homogeneous isotropic universe. The empirical basis of modern cosmology; Λ > 0 is the "dark energy" term.'},
  {tex:R`\Box\bar h_{\mu\nu}=-\frac{16\pi G}{c^{4}}T_{\mu\nu},\qquad P_{\rm GW}=\frac{32G}{5c^{5}}\mu^{2}r^{4}\omega^{6}`, name:'Linearised waves & quadrupole formula', gloss:'Gravitational radiation is quadrupolar (no monopole: mass conservation; no dipole: momentum conservation) — hence weak, hence detected only in 2015.'}
 ],
 concepts:[
  {t:'Equivalence principle', d:'Weak EP: inertial mass = gravitational mass, so all bodies fall alike (tested to ~10⁻¹⁵, MICROSCOPE 2022). Einstein EP: locally, in free fall, physics is that of SR. Strong EP: this holds for self-gravitating bodies too. The EP is what makes gravity geometrisable — it is the empirical fact that licenses the whole ontological move.'},
  {t:'Diffeomorphism invariance & general covariance', d:'The equations hold in any coordinate system; more substantively, there are no non-dynamical background structures. This is what makes "where/when" not a well-posed question independently of the metric — and it drives the hole argument.'},
  {t:'Curvature: tidal, not absolute', d:'You cannot feel gravity; you feel tides. R^μ_{ναβ} is the frame-independent content, measured by geodesic deviation: D²ξ^μ/dτ² = −R^μ_{ναβ}u^ν ξ^α u^β.'},
  {t:'Horizon', d:'A causal boundary, not a material surface. Locally unremarkable (an infalling observer notices nothing at r_s for a large black hole); globally it is where outgoing null geodesics no longer escape.'},
  {t:'Singularity', d:'Defined as geodesic incompleteness, not "infinite curvature at a point" — because there is no point there to have the property. A theory-internal signal that the theory has run out.'}
 ],
 results:[
  {n:'Mercury\'s perihelion', s:'43″/century anomaly, predicted with no free parameters (1915). The first and still the cleanest classical test.'},
  {n:'Light bending & lensing', s:'δ = 4GM/(bc²), twice the Newtonian-corpuscle value. Eddington 1919; today a routine astronomical tool (Einstein rings, cluster mass maps, microlensing).'},
  {n:'Gravitational redshift', s:'Pound–Rebka (1960), and now a required correction in GPS: satellite clocks run fast by ~38 μs/day (+45 GR, −7 SR). Without it, positioning errors accumulate at ~10 km/day.'},
  {n:'Binary pulsar orbital decay', s:'PSR B1913+16 matches the quadrupole prediction to ~0.2% over 40 years (Hulse–Taylor).'},
  {n:'Direct gravitational waves', s:'GW150914 (LIGO): a binary black hole merger, waveform matched to numerical relativity. GW170817 fixed |c_GW − c|/c < 10⁻¹⁵, killing large classes of modified-gravity models overnight.'},
  {n:'Black hole imaging', s:'EHT M87* (2019) and Sgr A* (2022): shadow diameter consistent with the Kerr photon ring.'},
  {n:'Singularity theorems', s:'Penrose (1965): a trapped surface + energy conditions + global hyperbolicity ⟹ incompleteness. GR predicts its own breakdown.'}
 ],
 valid:{holds:'Every regime tested: solar system (PPN parameters γ, β = 1 to ~10⁻⁵), strong field (pulsars, mergers), cosmology (with dark matter and Λ added by hand).', breaks:'(i) Curvature approaching ℓ_P⁻²: black hole interiors, t → 0. (ii) It is classical — the semiclassical equation G_{μν} = 8πG⟨T̂_{μν}⟩ is at best an approximation. (iii) Galaxy rotation curves and structure formation require ~5× more matter than is seen, and accelerating expansion requires Λ; whether these are additions to the matter content or failures of the gravitational law is an open empirical question.'},
 detail:{
  deriv:[
   {h:'Newtonian limit (weak field, slow motion)', b:'Set g_{μν} = η_{μν} + h_{μν} with |h| ≪ 1, assume ∂_t h ≈ 0 and v/c ≪ 1, take dust T_{00} = ρc². The geodesic equation reduces to d²x^i/dt² = −½c²∂_i h_{00}, so identify h_{00} = −2Φ/c². The 00-component of the field equation then becomes ∇²Φ = 4πGρ — Poisson\'s equation. Two small parameters, GM/rc² and v²/c², are taken to zero together.'},
   {h:'Special-relativistic limit', b:'At any point p one can choose Riemann normal coordinates in which g_{μν}(p) = η_{μν} and ∂_α g_{μν}(p) = 0. SR holds *exactly at a point and to first order around it*; curvature enters only at second order, ~R·(Δx)². So the limit is local, and "how local" is set by the tidal scale — which is why it is an approximation with a controllable error, not a mere idealisation.'},
   {h:'GR as the leading term of an EFT', b:'Treat the Einstein–Hilbert term as the lowest-dimension diffeomorphism-invariant operator. Higher curvature terms R², R_{μν}R^{μν}, ... are suppressed by M_P^{-2}. This reframes GR not as a fundamental theory but as the universal IR limit of *any* theory of an interacting massless spin-2 field (Weinberg\'s theorem: Lorentz invariance + massless spin 2 + a soft-graviton condition ⟹ the equivalence principle).'}
  ],
  deeper:[
   {h:'The hole argument', b:'Take a solution (M, g). Pick a region H and a diffeomorphism d that is the identity outside H but not inside. Then (M, d*g) is also a solution, agreeing with the first everywhere outside H. If manifold points have identity independently of the metric, the field equations fail to determine the field inside H — indeterminism. Einstein was stalled by this for two years (1913–15). The standard resolution: models related by a diffeomorphism represent the same physical situation, so spacetime points have no primitive identity (sophisticated substantivalism / relationism). Earman & Norton 1987 is the modern locus.'},
   {h:'Energy is not local', b:'There is no covariant local energy density for the gravitational field — only pseudotensors (Landau–Lifshitz), or quasi-local/asymptotic definitions (ADM, Bondi). This is a direct consequence of the equivalence principle: you can always transform the "gravitational field" away at a point.'},
   {h:'Where the Newtonian limit is subtler than advertised', b:'Cosmologically, the limit is not uniform: the Newtonian approximation works locally but not for the universe as a whole (Newtonian cosmology is ill-posed without a cut-off). And in the post-Newtonian expansion, the "limit" is an asymptotic series, not a convergent one. Malament and Ehlers have given precise frame-theory constructions in which Newton–Cartan theory, rather than Newtonian gravity, is the clean λ → 0 limit — Newton–Cartan geometrises gravity too, showing that the "geometrical" character of GR is not by itself what distinguishes it from Newton.'}
  ]
 },
 phil:{
  stance:'GR is the standard exhibit for the claim that theory change can alter ontology without discarding empirical content — Newtonian gravity is recovered as a limit, but "gravitational force" is not recovered as an entity.',
  disputes:[
   'Substantivalism vs relationism about spacetime, after the hole argument. Does diffeomorphism invariance refute substantivalism, or only haecceitistic substantivalism?',
   'Is the Newton → GR relation a Kuhnian incommensurability case or a textbook limiting-case reduction? Both readings use the same mathematics and disagree about what the mathematics shows.',
   'Does dark matter show that GR needs supplementing (new matter) or replacing (MOND/TeVeS)? A live test case for how theories are protected by auxiliary hypotheses (Duhem–Quine in the wild).',
   'The status of singularities: a prediction of the theory, or a proof that the theory has a limited domain? Earman, *Bangs, Crunches, Whimpers and Shrieks*.'
  ],
  read:['Wald, *General Relativity* (ch. 10, 11)','Earman & Norton, "What Price Spacetime Substantivalism?" (1987)','Malament, *Topics in the Foundations of General Relativity and Newtonian Gravitation Theory*','Misner, Thorne & Wheeler, *Gravitation*']
 },
 fig:'lightcone'
},

{
 id:'qft', n:'Quantum Field Theory', aka:'Relativistic quantum field theory · the framework',
 dom:'physics', tier:1, years:'1927 – 1975', status:'confirmed',
 scale:{len:'10⁻¹⁸ – 10⁻¹⁰ m', en:'10⁻³ – 10⁴ GeV', lg:18},
 one:'The framework that results from insisting on quantum mechanics and special relativity at once: the basic entities are fields on spacetime, particles are their quantised excitations, and particle number is not conserved.',
 onto:'Operator-valued distributions φ̂(x) on Minkowski spacetime, acting on a Fock (or, in the interacting case, a not-obviously-Fock) Hilbert space. "Particles" are quanta of field modes — a derived, and in curved spacetime or non-inertial frames a frame-dependent, notion.',
 state:'A state in a Hilbert space carrying a unitary representation of the Poincaré group. Wightman axioms: fields as tempered-distribution-valued operators, Poincaré covariance, spectrum condition, a unique vacuum, and microcausality [φ(x),φ(y)] = 0 for spacelike separation.',
 eqs:[
  {tex:R`\mathcal{L}=\bar\psi(i\gamma^{\mu}D_{\mu}-m)\psi-\tfrac14 F_{\mu\nu}F^{\mu\nu},\qquad D_{\mu}=\partial_{\mu}+ieA_{\mu}`, name:'QED Lagrangian', gloss:'The most precisely tested theory in science. The covariant derivative is where "force" comes from: demanding local U(1) phase invariance *forces* the photon into existence.'},
  {tex:R`Z[J]=\int\mathcal{D}\phi\;e^{\frac{i}{\hbar}\left(S[\phi]+\int J\phi\right)},\qquad \langle 0|T\phi(x_1)\cdots|0\rangle=\frac{1}{Z}\frac{\delta^{n}Z}{i\delta J(x_1)\cdots}`, name:'Path-integral generating functional', gloss:'Sum over field histories. The ħ → 0 stationary-phase limit picks out δS = 0 — the classical field equations drop out as a saddle point.'},
  {tex:R`[\phi(\mathbf{x},t),\pi(\mathbf{y},t)]=i\hbar\,\delta^{3}(\mathbf{x}-\mathbf{y}),\qquad \phi(x)=\int\!\frac{d^{3}k}{(2\pi)^{3}\sqrt{2\omega_k}}\left(a_{k}e^{-ikx}+a^{\dagger}_{k}e^{ikx}\right)`, name:'Canonical quantisation & mode expansion', gloss:'a†_k creates a quantum of momentum k. Particle number becomes an operator; interactions do not commute with it.'},
  {tex:R`\mu\frac{d g}{d\mu}=\beta(g),\qquad \beta_{\rm QED}=\frac{e^{3}}{12\pi^{2}}>0,\qquad \beta_{\rm QCD}=-\frac{g^{3}}{16\pi^{2}}\left(11-\tfrac23 n_{f}\right)<0`, name:'Running couplings', gloss:'Couplings depend on the probe energy. Sign of β decides everything: QED is IR-free and has a Landau pole in the UV; QCD is asymptotically free, and confines in the IR.'},
  {tex:R`a_{e}=\frac{g-2}{2}:\quad \text{theory } 0.001\,159\,652\,18\ldots \ \text{vs experiment } 0.001\,159\,652\,18\ldots`, name:'Electron anomalous magnetic moment', gloss:'Agreement to roughly 1 part in 10¹². Whatever else is true of QFT, its empirical adequacy in this regime is not in question.'},
  {tex:R`\text{spin-statistics: } \ \text{integer spin} \Rightarrow [\,\cdot,\cdot\,]=0,\quad \text{half-integer} \Rightarrow \{\cdot,\cdot\}=0`, name:'Spin–statistics theorem', gloss:'Derived, not assumed: from Lorentz invariance + positive energy + microcausality. Fermi statistics — hence the Pauli principle, hence chemistry — is a consequence of relativity.'}
 ],
 concepts:[
  {t:'Field first, particle second', d:'Fields are the basic objects; particles are quanta. In curved spacetime or for accelerated observers the particle concept becomes observer-relative (Unruh effect: an accelerated detector in the Minkowski vacuum registers a thermal bath at T = ħa/2πck_B). Malament and Halvorson have argued this rules out any particle ontology for relativistic QM.'},
  {t:'Gauge invariance', d:'A redundancy of description, not a symmetry of the world. Yet imposing it locally generates the interactions. Philosophically awkward: the deepest-seeming principle in physics is formally a statement that some of our variables are surplus.'},
  {t:'Renormalisation', d:'No longer understood as removing infinities but as organising a theory by scale. A cut-off Λ is legitimate physics — the theory is *supposed* to be incomplete at short distance. This reinterpretation (Wilson, 1971) did more philosophical work than any other development in 20th-century physics.'},
  {t:'Virtual particles', d:'Internal lines in a perturbative expansion. They are terms in a series, not entities: they are off-shell, the expansion is asymptotic (divergent), and they disappear entirely in lattice or non-perturbative formulations. A standing warning about reading ontology off a calculational device.'},
  {t:'Vacuum', d:'The lowest-energy state, not "nothing". It has non-trivial structure: condensates, Casimir energy, entanglement across any region boundary (Reeh–Schlieder: acting on the vacuum with operators in any open region generates a dense set of states — the vacuum is entangled across every scale).'},
  {t:'Haag\'s theorem', d:'The interaction picture does not exist in infinite-volume relativistic QFT: a free-field representation and an interacting one are unitarily inequivalent. The textbook derivation of the S-matrix is therefore, as stated, inconsistent — while being spectacularly accurate. A genuine foundational scandal.'}
 ],
 results:[
  {n:'QED precision', s:'g−2 of the electron, Lamb shift, hyperfine structure — agreement across 10–12 significant figures.'},
  {n:'Asymptotic freedom (1973)', s:'Gross, Politzer, Wilczek. Explains why quarks behave as free at high energy (deep inelastic scattering) yet are never isolated.'},
  {n:'CPT theorem', s:'Any Lorentz-invariant local QFT with a positive-energy spectrum is CPT-invariant. Predicts exact particle/antiparticle mass and lifetime equality — verified for K⁰ to ~10⁻¹⁸.'},
  {n:'Anomalies', s:'Classical symmetries can fail to survive quantisation (chiral anomaly). Anomaly cancellation in the SM relates quark and lepton charges — an otherwise unexplained numerical coincidence (why is Q_proton = −Q_electron to 10⁻²¹?).'},
  {n:'Lattice QCD', s:'Non-perturbative computation of the hadron spectrum from first principles, agreeing with measured masses at the percent level. The strongest evidence that QCD is not merely a perturbative recipe.'}
 ],
 valid:{holds:'All tested particle physics up to ~10 TeV.', breaks:'(i) Gravity is not included. (ii) Most physically interesting 4D interacting QFTs have not been shown to exist in a mathematically rigorous sense — constructing Yang–Mills with a mass gap is a Millennium Prize problem. (iii) QED has a Landau pole; it must be an effective theory. (iv) Perturbative series are asymptotic, with zero radius of convergence (Dyson 1952).'},
 detail:{
  deriv:[
   {h:'Non-relativistic limit: QFT → quantum mechanics', b:'Write ψ(x) = e^{−imc²t/ħ}φ(x) to remove the rest-mass phase; for |p| ≪ mc the Dirac equation\'s lower components are suppressed by ~p/mc, and a Foldy–Wouthuysen expansion gives the Pauli equation with the Zeeman term, plus 1/c² corrections: spin–orbit coupling, the Darwin term, relativistic kinetic correction. Simultaneously, at energies below 2mc² pair creation is kinematically forbidden, so particle number is effectively conserved and the Fock space truncates to a fixed-N sector — which *is* the N-particle Schrödinger theory. Two limits are being taken: v/c → 0 and E ≪ 2mc².'},
   {h:'Classical limit: QFT → classical field theory', b:'ħ → 0 in the path integral. The stationary-phase approximation makes the classical solution dominate, with fluctuations O(√ħ). Equivalently: coherent states with large occupation numbers behave classically, which is why a radio wave is described by Maxwell and not by counting photons.'},
   {h:'Integrating out heavy fields (the EFT move)', b:'Given a field H of mass M and light fields ℓ, define exp(iS_eff[ℓ]) = ∫DH exp(iS[ℓ,H]). At energies E ≪ M this generates a local expansion: S_eff = ∫ (ℒ_light + Σ_i c_i O_i / M^{d_i−4}). Concretely, integrating the W boson out of the SM gives Fermi\'s four-fermion theory with G_F/√2 = g²/8M_W² — Fermi theory is *derived*, and its non-renormalisability is *explained* as the signature of an omitted heavy particle.'},
   {h:'Appelquist–Carazzone decoupling theorem (1975)', b:'In a renormalisable theory with a heavy field of mass M, all effects of that field on light-field Green\'s functions at E ≪ M are either absorbed into redefinitions of the light theory\'s couplings or suppressed by powers of E/M. This is the theorem that licenses doing physics without knowing physics at higher energies — arguably the single most important formal result for the philosophy of scientific autonomy.'}
  ],
  deeper:[
   {h:'Wilsonian renormalisation, and why "non-renormalisable" stopped being an insult', b:'Put the theory on a lattice with spacing a = 1/Λ. Integrate out modes between Λ/b and Λ; the couplings flow. Near a fixed point, operators are classified as relevant (grow in the IR — few of these), marginal, or irrelevant (die as (E/Λ)^n). Generic UV physics is therefore invisible at low energy except through a handful of relevant couplings. Two consequences: (a) renormalisability is not a criterion of theoretical acceptability but an explanation of *why low-energy physics is simple and stable*; (b) universality — wildly different microphysics flows to the same IR theory, which is why an EFT can be well-confirmed while telling you nothing about what underlies it.'},
   {h:'Interpretive problem: what are QFTs about?', b:'Particle interpretations face Malament\'s theorem (no localisable particles in relativistic QM), Reeh–Schlieder, and the Unruh effect. Field interpretations face the problem that the field values are operators, not values, and that unitarily inequivalent representations proliferate. Algebraic QFT (Haag–Kastler) relocates the primitives to a net of local observable algebras O ↦ 𝔄(O) — mathematically clean, empirically remote, and the standard battleground (Wallace vs Fraser on whether the philosopher should interpret rigorous AQFT or the empirically successful "conventional" QFT).'}
  ]
 },
 phil:{
  stance:'The place where the effective-field-theory picture displaced the fundamentalist picture. After Wilson, "this theory is only valid below Λ" is a structural feature, not an admission of failure — and that reframing is what makes the whole tower of theories in this atlas philosophically respectable rather than merely pragmatic.',
  disputes:[
   'Fraser vs Wallace: should philosophers interpret rigorous axiomatic QFT (which may have no realistic 4D models) or the Lagrangian/EFT version (which works but is not a well-defined mathematical object)?',
   'Ontology: particles, fields, or algebras of local observables? Each option is blocked by a theorem.',
   'Does the EFT picture support structural realism, selective realism about low-energy structure, or a form of instrumentalism about everything above the cut-off?',
   'Is gauge invariance metaphysically significant or pure surplus structure? (Compare the Aharonov–Bohm effect, which suggests the gauge potential is not entirely redundant.)',
   'Haag\'s theorem: how can an inconsistent derivation produce 12-digit accuracy? What does this show about the relation between rigour and empirical success?'
  ],
  read:['Wallace, "In Defence of Naiveté" (2006)','Fraser, "The Fate of ‘Particles’ in QFT" ','Ruetsche, *Interpreting Quantum Theories*','Williams, "Scientific Realism Made Effective" (2019)','Weinberg, *The Quantum Theory of Fields*, vol. 1 ch. 1']
 },
 fig:'rgflow'
},

{
 id:'sm', n:'The Standard Model', aka:'SU(3)_C × SU(2)_L × U(1)_Y',
 dom:'physics', tier:1, years:'1961 – 1973 (Higgs confirmed 2012)', status:'confirmed',
 scale:{len:'10⁻¹⁸ m', en:'10⁻³ – 10³ GeV', lg:18},
 one:'The specific quantum field theory of all known non-gravitational matter and forces: three generations of quarks and leptons, twelve gauge bosons, one Higgs — and, at last count, 19 free parameters nobody can derive.',
 onto:'Matter: 6 quarks and 6 leptons, each a Weyl fermion field in a specified representation of SU(3)×SU(2)×U(1), in three generations. Forces: gauge fields (8 gluons, W±, Z⁰, γ). Plus a complex scalar doublet whose vacuum expectation value breaks SU(2)_L × U(1)_Y → U(1)_EM.',
 state:'Same as QFT. What makes the SM a *theory* rather than a framework is the choice of gauge group, matter representations, and 19 measured parameters (9 fermion masses + 3 CKM angles + 1 CKM phase + 3 gauge couplings + θ_QCD + Higgs mass and vev) — plus 7 more if neutrinos are massive Dirac/Majorana particles.',
 eqs:[
  {tex:R`\mathcal{L}_{\rm SM}=-\tfrac14 F^{a}_{\mu\nu}F^{a\,\mu\nu}+i\bar\psi\gamma^{\mu}D_{\mu}\psi+|D_{\mu}\Phi|^{2}-V(\Phi)-\left(y_{ij}\bar\psi_{L}^{i}\Phi\psi_{R}^{j}+\text{h.c.}\right)`, name:'The Standard Model Lagrangian', gloss:'Four lines: gauge kinetic terms, fermion kinetic + gauge coupling, Higgs kinetic + potential, Yukawa couplings. Everything known about matter, excluding gravity, is in here.'},
  {tex:R`V(\Phi)=\mu^{2}|\Phi|^{2}+\lambda|\Phi|^{4},\quad \mu^{2}<0\ \Rightarrow\ \langle\Phi\rangle=\frac{v}{\sqrt2}=174\ \mathrm{GeV}`, name:'Higgs potential (the "Mexican hat")', gloss:'The Lagrangian is symmetric; the vacuum is not. Spontaneous symmetry breaking — the same mechanism as a ferromagnet below T_c, borrowed directly from condensed matter (Anderson, Nambu).'},
  {tex:R`m_{W}=\tfrac12 g v,\quad m_{Z}=\tfrac12\sqrt{g^{2}+g'^{2}}\,v,\quad \cos\theta_{W}=\frac{m_{W}}{m_{Z}},\quad m_{f}=\frac{y_{f}v}{\sqrt2}`, name:'Masses from the vev', gloss:'Gauge boson masses are *predicted* from couplings and v — a genuine test, passed. Fermion masses are not predicted: each y_f is fitted. The Higgs explains how mass is generated, not why m_top/m_electron ≈ 340 000.'},
  {tex:R`\mathcal{L}_{\rm QCD}=-\tfrac14 G^{a}_{\mu\nu}G^{a\mu\nu}+\sum_{q}\bar q(i\gamma^{\mu}D_{\mu}-m_{q})q,\quad \alpha_{s}(M_{Z})\approx0.118`, name:'QCD', gloss:'Non-abelian: gluons carry colour and self-interact. Hence asymptotic freedom at short distance and confinement at long distance (linear potential V(r) ≈ σr, σ ≈ 0.9 GeV/fm).'},
  {tex:R`V_{\rm CKM}=\begin{pmatrix}V_{ud}&V_{us}&V_{ub}\\V_{cd}&V_{cs}&V_{cb}\\V_{td}&V_{ts}&V_{tb}\end{pmatrix},\quad J\approx3\times10^{-5}`, name:'CKM matrix & CP violation', gloss:'Quark mass and weak eigenstates are misaligned. The single complex phase gives all SM CP violation — quantified by the Jarlskog invariant J, which is ~10⁹ times too small to account for the matter–antimatter asymmetry of the universe.'}
 ],
 concepts:[
  {t:'Local gauge invariance', d:'Promote a global symmetry to a local one; the connection field required to keep the derivative covariant *is* the force carrier. Geometrically: gauge fields are connections on a principal bundle, field strength is curvature. The same mathematics as GR, different bundle.'},
  {t:'Spontaneous symmetry breaking & the Higgs mechanism', d:'A symmetric potential with an asymmetric minimum. For a global symmetry you get massless Goldstone bosons; gauge it, and the Goldstones become the longitudinal polarisations of massive gauge bosons. "The gauge boson eats the Goldstone."'},
  {t:'Confinement', d:'Colour-charged states cost infinite energy to separate: pull a quark away and the flux tube snaps into a new quark–antiquark pair. Hence only colour singlets (hadrons) exist as asymptotic states. No analytic proof exists — this is part of the Millennium problem.'},
  {t:'Chirality', d:'The weak interaction couples only to left-handed fermions. Parity is maximally violated — the single most surprising experimental fact of the 20th century (Wu 1956), and still unexplained.'},
  {t:'Generations', d:'Three copies of the same representation content, differing only in mass. "Who ordered that?" (Rabi, of the muon). Unexplained.'},
  {t:'Naturalness / hierarchy', d:'The Higgs mass receives quadratically divergent radiative corrections δm_H² ~ Λ². Keeping m_H = 125 GeV with Λ = M_P requires a cancellation to ~32 decimal places. Whether this is a genuine problem or an artefact of a particular (Wilsonian, cut-off-based) way of thinking is now seriously contested — the LHC found no naturalness-motivated new physics.'}
 ],
 results:[
  {n:'Prediction of W and Z masses', s:'Predicted from α, G_F, θ_W before discovery; found at CERN in 1983 at 80 and 91 GeV.'},
  {n:'Prediction of charm, bottom, top', s:'Charm from GIM (absence of flavour-changing neutral currents); the top mass was pinned to ~175 GeV by precision electroweak fits before its 1995 discovery.'},
  {n:'Higgs boson (2012)', s:'The last missing piece, at 125.25 ± 0.17 GeV. Its couplings scale with mass as predicted.'},
  {n:'Neutral currents (1973)', s:'The Z⁰ prediction\'s first confirmation, in Gargamelle.'},
  {n:'Anomaly cancellation', s:'Σ Y³ = 0 and Σ Y = 0 across each generation require exactly the observed quark/lepton content and colour number — explaining charge quantisation.'},
  {n:'What it fails to contain', s:'Gravity; dark matter; dark energy; neutrino masses (added by hand); the baryon asymmetry; and no explanation of its own 19+ parameters.'}
 ],
 valid:{holds:'Everything measured at colliders to ~10 TeV, plus precision flavour physics. No confirmed deviation, despite enormous effort.', breaks:'Neutrino oscillations (established 1998) require mass, which the minimal SM forbids — the first laboratory physics beyond the SM. The strong-CP problem (θ_QCD < 10⁻¹⁰ with no reason). And the theory says nothing about 95% of the universe\'s energy content.'},
 detail:{
  deriv:[
   {h:'SM → Fermi theory of beta decay', b:'At E ≪ m_W the W propagator 1/(q² − m_W²) → −1/m_W². The exchange contracts to a point: (g²/8m_W²)(J^μ J†_μ), i.e. Fermi\'s (G_F/√2)(J·J) with G_F/√2 = g²/8m_W². Fermi theory is thus derived as an EFT, its 1930s "non-renormalisability" retroactively explained as the fingerprint of the omitted W. This is the canonical worked example of the whole EFT philosophy: the low-energy theory was correct, predictive, and incomplete, all at once.'},
   {h:'QCD → chiral perturbation theory → nuclear physics', b:'Below Λ_QCD ≈ 200 MeV, quarks and gluons are the wrong variables. Chiral symmetry SU(2)_L × SU(2)_R breaks spontaneously to SU(2)_V, giving pions as pseudo-Goldstone bosons with m_π² ∝ m_q (Gell-Mann–Oakes–Renner). Build the most general Lagrangian of pions and nucleons consistent with the symmetries, ordered in p/Λ_χ. Nuclear forces then come out as a controlled expansion — a chain SM → χPT → nuclear shell model in which each link is a genuine EFT construction, none of which is a Nagelian derivation of the higher-level "laws".'},
   {h:'SM → QED + Fermi + QCD below the electroweak scale', b:'Integrate out the top, Higgs, W and Z. What remains is QED (exact U(1)) plus QCD plus a tower of higher-dimension operators encoding weak effects. The emergent low-energy theory looks nothing like its parent: different gauge group, different degrees of freedom, different symmetries (parity restored to good approximation).'}
  ],
  deeper:[
   {h:'The SM as an EFT: dimension-5 and dimension-6 operators', b:'Write ℒ = ℒ_SM + Σ c_5 O_5/Λ + Σ c_6 O_6/Λ² + ... There is exactly *one* dimension-5 operator (Weinberg): (LΦ)(LΦ)/Λ, which — after the Higgs gets its vev — is a Majorana neutrino mass m_ν ~ v²/Λ. Plug in m_ν ~ 0.05 eV and you get Λ ~ 10¹⁵ GeV: the observed neutrino masses point, without any model-building, to a scale near grand unification. This is the most striking thing the EFT framework has ever delivered.'},
   {h:'Naturalness as a philosophical problem', b:'The hierarchy problem is not an inconsistency; the SM with a fine-tuned Higgs mass is perfectly consistent and empirically adequate. It is an argument from *improbability of the parameter value*, which requires a measure over parameter space that nobody has justified. The failure of the LHC to find superpartners has made this a live methodological case study: was naturalness ever a well-founded principle, or a successful heuristic overextended into a law? (Hossenfelder, Wells, Williams, Rosaler & Harlander.)'}
  ]
 },
 phil:{
  stance:'Simultaneously the best-confirmed theory ever constructed and a theory that nobody believes is fundamental. It is the clearest single counterexample to the idea that confirmation and fundamentality travel together.',
  disputes:[
   'Is naturalness an epistemic principle, an aesthetic preference, or a mistake? What does its failure at the LHC teach about theory-choice criteria?',
   'Does the SM\'s 19 free parameters undercut realism, or is that just a demand for explanation the theory never promised?',
   'Anomaly cancellation explains charge quantisation — is that explanation, or a happy constraint? A good test case for theories of scientific explanation in physics.',
   'Gauge symmetry as surplus structure vs. as the deepest fact about the world.'
  ],
  read:['Hossenfelder, *Lost in Math*','Williams, "Naturalness, the Autonomy of Scales, and the 125 GeV Higgs" (2015)','Weinberg, "Effective Field Theory, Past and Future"','Rosaler & Harlander, "Naturalness, Wilsonian Renormalization, and Fundamental Parameter Shifts" (2019)']
 },
 fig:'higgs'
}
];
