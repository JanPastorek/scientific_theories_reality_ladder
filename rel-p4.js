const REL_EXTRA_P4 = [

{a:'gr',b:'cosmo',kind:'instantiation',param:R`\text{homogeneity} + \text{isotropy}`,
 t:'General relativity → Cosmology: the field equations plus a symmetry assumption',
 f:'The Einstein equations admit a vast space of solutions. Cosmology selects one family by imposing, by hand, that space is homogeneous and isotropic about every point. That assumption collapses ten coupled field equations to two ordinary differential equations in a single function a(t), and it is what makes the subject tractable. It is not a theorem of general relativity, and it is false at every scale below about 100 Mpc.',
 tex:R`ds^2=-c^2dt^2+a^2(t)\left[\frac{dr^2}{1-kr^2}+r^2d\Omega^2\right]`,
 p:'A textbook case of Wigner\'s point that the symmetry assumptions do as much work as the dynamical law. The cosmological principle was originally defended on Copernican grounds — an a priori argument about our lack of privilege — and only later given observational support by the isotropy of the CMB, which strictly establishes isotropy about *one* point. Getting homogeneity from that needs the Copernican assumption back again, or the Ehlers–Geren–Sachs theorem plus the premise that all observers see an isotropic CMB, which is not something we can check.'},

{a:'qft',b:'cosmo',kind:'contested',param:R`\rho_\Lambda^{\rm obs}/\rho_\Lambda^{\rm QFT}\sim10^{-120}`,
 t:'Quantum field theory → Cosmology: the worst prediction in physics',
 f:'Every field contributes zero-point energy to the vacuum, and in general relativity vacuum energy gravitates. Cutting the sum off at the Planck scale gives a vacuum energy density about 10¹²⁰ times the measured value of Λ; cutting off at the electroweak scale still leaves a factor of 10⁵⁵. No symmetry in the Standard Model forbids the term, and supersymmetry, which would cancel it, is broken.',
 tex:R`\rho_{\rm vac}\sim\frac{1}{2}\int^{\Lambda_{\rm cut}}\frac{d^3k}{(2\pi)^3}\hbar\omega_k \sim \frac{\Lambda_{\rm cut}^4}{16\pi^2}`,
 p:'The two most successful theories in physics, combined in the most naive way available, disagree with observation by more orders of magnitude than any other quantitative claim ever made. The effective-field-theory reply — that Λ is a free parameter to be measured, like any other coefficient in the low-energy expansion — is formally correct and widely felt to be unsatisfying. The dissatisfaction is itself philosophically interesting: it shows that physicists demand of their theories something beyond empirical adequacy plus renormalisability, and cannot say precisely what.'},

{a:'cosmo',b:'nuc',kind:'instantiation',param:R`\eta=n_b/n_\gamma\simeq6.1\times10^{-10}`,
 t:'Cosmology → Nuclear physics: the first three minutes as a reactor',
 f:'Between roughly 1 s and 20 min after the hot dense phase, the expansion rate set by the Friedmann equation competes with nuclear reaction rates measured in terrestrial laboratories. Light-element abundances follow from a single free parameter, the baryon-to-photon ratio. Nothing about the nuclear physics is modified: laboratory cross sections are used unchanged.',
 tex:R`Y_p\simeq\frac{2(n/p)}{1+(n/p)},\qquad (n/p)\big|_{\rm freeze}\simeq e^{-\Delta m c^2/k_BT_f}\simeq1/6`,
 p:'A rare clean case of a prediction running downward across scales: the cosmological model fixes a boundary condition and the nuclear physics does the rest, with no new parameters and no adjustable couplings. Deuterium is now measured in quasar absorption systems to about 1%, and agrees with the baryon density read off the CMB acoustic peaks — two completely independent routes to the same number. Lithium-7 does not agree, by a factor of about three, and that discrepancy has resisted twenty years of attention.'},

{a:'nuc',b:'astro',kind:'constitutive',param:R`\langle\sigma v\rangle(T)`,
 t:'Nuclear physics → Stellar structure: measured cross sections as an input function',
 f:'Stellar models take reaction rates from the laboratory and use them as source terms in the energy equation. The measurements have to be made at laboratory energies far above the stellar Gamow window and then extrapolated downward across several orders of magnitude in cross section, because the Coulomb barrier makes direct measurement at stellar energies impossible above ground.',
 tex:R`\epsilon_{\rm nuc}=\sum_i Q_i\,n_1n_2\langle\sigma v\rangle_i,\qquad \langle\sigma v\rangle\propto S(E)e^{-\sqrt{E_G/E}}`,
 p:'Not a derivation but a supply relation, and one where the crucial step — the extrapolation of the astrophysical S-factor to energies that cannot be reached — is theory-laden in exactly the way philosophers of measurement describe. The ¹²C(α,γ)¹⁶O rate, which fixes the carbon-to-oxygen ratio of the universe, is still uncertain at the 15–20% level after sixty years of effort, and that uncertainty propagates into every claim about massive-star evolution.'},

{a:'qm',b:'astro',kind:'limit',param:R`T\ll T_F`,
 t:'Quantum mechanics → Stellar structure: degeneracy pressure and a mass limit',
 f:'Pauli exclusion supplies a pressure that does not vanish at zero temperature. Treating the electrons as an ideal degenerate gas and balancing that pressure against self-gravity gives a maximum mass for a cold body, with no free parameters beyond the composition — a limit computed from ħ, c, G and the proton mass alone.',
 tex:R`M_{\rm Ch}\simeq\frac{\sqrt{3\pi}}{2}\left(\frac{\hbar c}{G}\right)^{3/2}\frac{1}{(\mu_e m_H)^2}\simeq1.44\,M_\odot\ (\mu_e=2)`,
 p:'One of the cleanest downward derivations in the atlas: microphysics fixes a macroscopic bound, the bound was derived before it was needed, and the observed mass distribution of white dwarfs cuts off where it should. It is also a reminder that derivations meet resistance for non-evidential reasons — Eddington attacked the result publicly for years, and Chandrasekhar left the field. Whatever one thinks of Kuhn, the episode is not explained by evidence alone.'},

{a:'astro',b:'cosmo',kind:'upward',param:R`M_B\text{-}s\text{-}c\ \text{calibration}`,
 t:'Stellar astrophysics → Cosmology: the distance ladder as an evidential dependence',
 f:'Every claim about the expansion history rests on standardisable candles whose standardisation is a piece of stellar astrophysics. Type Ia supernovae are calibrated by a light-curve-shape relation whose physical basis — the amount of ⁵⁶Ni synthesised in the explosion — is modelled but not derived from first principles, and the ladder is anchored on Cepheids whose period–luminosity relation carries its own metallicity dependence.',
 tex:R`\mu=m_B-M_B+\alpha x_1-\beta c,\qquad d_L(z)=(1+z)\!\int_0^z\!\frac{c\,dz'}{H(z')}`,
 p:'The direction of dependence runs against the reduction hierarchy: a claim about the largest scales is evidentially hostage to an unfinished theory of exploding stars. The H₀ tension — about 73 km s⁻¹ Mpc⁻¹ from the ladder against about 67 from the CMB, now well past 5σ — is the live case. Either an astrophysical systematic hides in the calibration, or the cosmological model is wrong; the dispute cannot be settled inside either field alone, which makes it a natural experiment in how communities allocate blame under Duhem underdetermination.'},

{a:'em',b:'plasma',kind:'constitutive',param:R`N_D=n\lambda_D^3\gg1`,
 t:'Electromagnetism → Plasma physics: many charges, collectively screened',
 f:'A plasma is just charged particles obeying Maxwell plus Lorentz. What makes it a separate subject is the collective regime: when many particles sit inside a Debye sphere, the exact many-body problem is replaced by a smooth self-consistent field, individual encounters become a correction, and the system acquires a screening length and a natural oscillation frequency that no single charge possesses.',
 tex:R`\lambda_D=\sqrt{\frac{\varepsilon_0k_BT}{ne^2}},\qquad \omega_p=\sqrt{\frac{ne^2}{\varepsilon_0m}}`,
 p:'The new quantities are properties of the ensemble and of nothing else, but they are definable from the microphysics without residue, so this is emergence of the harmless kind — novel behaviour, no novel ontology. Worth keeping as a control case: it shows that "collective properties absent at the level below" is far too weak a criterion for the interesting sort of emergence, since it is satisfied here by a system nobody thinks is irreducible.'},

{a:'statmech',b:'plasma',kind:'singular',param:R`\text{collisionless}:\ \nu_{\rm coll}\to0`,
 t:'Statistical mechanics → Vlasov plasma: damping without dissipation',
 f:'Dropping collisions from the BBGKY hierarchy gives the Vlasov equation, which is exactly time-reversible and conserves entropy. Landau nevertheless found that a small-amplitude wave in such a plasma decays exponentially, at a rate set by the slope of the velocity distribution at the phase velocity. The energy is not dissipated: it is carried into ever-finer structure in velocity space by phase mixing, and can be brought back — plasma echo experiments do exactly that.',
 tex:R`\gamma_L=\frac{\pi}{2}\frac{\omega_p^3}{k^2}\left.\frac{\partial f_0}{\partial v}\right|_{v=\omega/k}`,
 p:'The clearest counterexample in physics to the identification of irreversible behaviour with entropy production. A macroscopic observable decays monotonically while the microstate evolves reversibly and the fine-grained entropy stays fixed; the arrow lives entirely in the choice of coarse-grained observable. Anyone arguing about the statistical-mechanical foundations of the second law should have to say something about this case, and most accounts do not.'},

{a:'hydro',b:'plasma',kind:'limit',param:R`\omega\ll\Omega_i,\ L\gg\rho_i,\ \eta\to0`,
 t:'Fluid mechanics → Ideal magnetohydrodynamics: a one-fluid ordering',
 f:'Ideal MHD is Navier–Stokes with the Lorentz force added and a specific set of orderings imposed: slow compared with the ion cyclotron frequency, large compared with the ion gyroradius, quasi-neutral, and with resistivity set to zero. Under those conditions the magnetic field is frozen into the flow and field-line topology is conserved for all time.',
 tex:R`\rho\frac{d\vec v}{dt}=-\nabla p+\frac{1}{\mu_0}(\nabla\times\vec B)\times\vec B,\qquad \frac{\partial\vec B}{\partial t}=\nabla\times(\vec v\times\vec B)`,
 p:'The ideal limit is not a benign idealisation: the conserved topology it imposes is broken by an arbitrarily small resistivity in thin layers, and magnetic reconnection — the mechanism behind solar flares and tokamak sawteeth — happens entirely in the region where the limit fails. Like the ray-optics limit of wave optics, the interesting physics is concentrated exactly where the approximation is invalid, which is Batterman\'s asymptotic-explanation thesis instantiated in a field that rarely gets philosophical attention.'},

{a:'cmt',b:'matsci',kind:'contested',param:R`\sigma_{\rm y}^{\rm obs}/\sigma_{\rm th}\sim10^{-3}`,
 t:'Condensed matter → Solid mechanics: the strength of materials is not computed from band theory',
 f:'A perfect crystal should shear at roughly G/2π. Real metals yield at a thousandth of that. The explanation is dislocations — line defects whose motion lets planes slip one row at a time — and their density, arrangement and pinning are set by processing history, not by the electronic structure. Yield strength is predicted by Hall–Petch, Taylor and Orowan relations whose coefficients are fitted.',
 tex:R`\tau=\alpha G b\sqrt{\rho_{\rm disl}},\qquad \sigma_y=\sigma_0+k_yd^{-1/2}`,
 p:'The property that decides whether a bridge stands is controlled by the defect microstructure, and the microstructure is a contingent record of how the metal was made. No amount of exact many-body computation over a perfect lattice gets you there. This is not multiple realisability in the philosopher\'s abstract sense but something sharper: the lower-level theory is the wrong theory for the question, and everyone in the field knows it while continuing to describe the relation as reduction.'},

{a:'thermo',b:'matsci',kind:'coarse',param:R`G(T,P,x)\ \text{fitted}`,
 t:'Thermodynamics → Phase diagrams: CALPHAD fits the free energy it cannot derive',
 f:'Computing a multicomponent phase diagram means minimising the total Gibbs energy. In practice the Gibbs energy of each phase is written as a polynomial in composition and temperature with adjustable coefficients, and those coefficients are fitted to measured phase boundaries, calorimetry and, more recently, first-principles energies. The thermodynamic structure is exact; the functions inside it are empirical.',
 tex:R`G_m=\sum_i x_i{}^{\circ}G_i+RT\sum_i x_i\ln x_i+\sum_{i<j}x_ix_j\sum_\nu L_{ij}^{(\nu)}(x_i-x_j)^\nu`,
 p:'Worth naming plainly because it is so often obscured: the phase diagram of a real alloy is a curve-fitting exercise wearing thermodynamic clothing. The framework constrains the fit powerfully — Gibbs\' phase rule, common-tangent construction, consistency across subsystems — so this is not mere curve fitting; it is a case of a theory supplying the *form* of a law while measurement supplies its content, which is what most of engineering science actually looks like.'},

{a:'matsci',b:'earth',kind:'instantiation',param:R`\dot\varepsilon=A\sigma^n e^{-Q/RT}`,
 t:'Solid mechanics → Earth system: rock as a creeping solid',
 f:'Mantle convection treats rock as a fluid on geological timescales, and the viscosity used comes from laboratory creep experiments on olivine aggregates deformed at 10⁻⁵ s⁻¹ and extrapolated to mantle strain rates of 10⁻¹⁵ s⁻¹ — ten orders of magnitude, across which the deformation mechanism itself may change from dislocation to diffusion creep.',
 tex:R`\eta_{\rm eff}=\frac{\sigma}{2\dot\varepsilon}\sim10^{21}\ \mathrm{Pa\,s}`,
 p:'The extrapolation is longer than the one that embarrasses nuclear astrophysics, and it is defended by a mechanism argument — that the same dislocation physics operates at both ends — rather than by data. Independent constraints from post-glacial rebound agree to within about an order of magnitude, which is both reassuring and a fair statement of the precision available about the interior of the planet.'}

];
