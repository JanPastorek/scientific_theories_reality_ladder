const REL_EXTRA_B3 = [

{a:'molbio',b:'immuno',kind:'constitutive',param:R`V\!\times\!D\!\times\!J\times\text{junctional}`,
 t:'Molecular biology → Immunology: where the repertoire comes from',
 f:'Tonegawa showed that antibody genes are assembled by somatic recombination: the germline carries segment libraries, and RAG1/RAG2 cut and rejoin them, with imprecise junctions adding further diversity. The combinatorics gives roughly 10⁶ combinations from the segments and more than 10¹¹ once junctional variation is counted — from a genome with fewer than 2×10⁴ genes.',
 tex:R`\underbrace{40\!\times\!25\!\times\!6}_{\text{heavy}}\times\underbrace{40\!\times\!5}_{\text{light}}\approx10^6;\quad \times\ \text{junctional}\ \Rightarrow\ >10^{11}`,
 p:'The mechanism is molecular and fully reductive; the immunological claim is not. What immunology asserts is that the repertoire is *generated before antigen is seen* — a claim about the temporal order of variation and selection, not about chemistry. The genome could produce the same diversity under an instructionist regime and the theory would be false. This is where the reduction stops.'},

{a:'evo',b:'immuno',kind:'analogy',param:R`\text{variation}+\text{selection}+\text{heredity}`,
 t:'Evolution → Clonal selection: Darwinism inside one organism',
 f:'Clonal selection has all three Darwinian ingredients at the cellular level: variation generated blind to antigen, differential proliferation of cells whose receptors bind, and heredity through the cell lineage. Affinity maturation adds a second, faster round — somatic hypermutation at about 10⁻³ per base per division, a million times the background rate, followed by selection in germinal centres.',
 tex:R`\frac{dn_i}{dt}=n_i\big(\beta\,a_i(A)-\delta\big),\qquad \mu_{\rm SHM}\sim10^{-3}\ \mathrm{bp^{-1}div^{-1}}`,
 p:'A genuine formal analogy that must not be mistaken for an instance. The substrate is somatic: nothing is transmitted to offspring, the process restarts each generation, and there is no population of organisms competing. It is the best-evidenced case of selection operating at a non-organismal level, and therefore the strongest support for the abstract Darwinian schema — and equally a warning that the schema, being substrate-neutral, explains less than it appears to.'},

{a:'immuno',b:'med',kind:'instantiation',param:R`\text{repertoire}\to\text{vaccine design}`,
 t:'Immunology → Medicine: from mechanism to intervention',
 f:'Vaccination predates the theory by a century and a half, and worked without it. What clonal selection supplied was the explanation of why a single exposure protects for decades (memory cells persist and respond faster), why some vaccines need adjuvants (the danger signal, not the antigen, licenses the response), and why others fail — a virus that mutates its epitopes faster than affinity maturation can track.',
 tex:R`\text{protection}\ \propto\ \log(\text{titre});\qquad t_{1/2}^{\rm memory}\gtrsim50\ \text{yr (measles)}`,
 p:'The historical order is the philosophically interesting part: an effective intervention long preceded any correct account of its mechanism, and the mechanism when it arrived changed what could be *designed* rather than what already worked. A clean counterexample to the idea that technological success is evidence of theoretical truth, and a clean example of mechanism knowledge paying off prospectively.'},

{a:'biochem',b:'physio',kind:'constitutive',param:R`\text{fluxes}\to\text{organ function}`,
 t:'Biochemistry → Physiology: the same reactions, organised into balance',
 f:'Physiology adds to biochemistry the constraint of mass balance across a whole organism with defined compartments and flows. The Fick principle is the archetype: the amount of a substance taken up by an organ equals the flow through it times the arteriovenous difference, and it lets cardiac output be measured without touching the heart.',
 tex:R`\dot V_{\rm O_2}=Q\,(C_a-C_v)\ \Rightarrow\ Q=\frac{250\ \mathrm{ml/min}}{0.05\ \mathrm{ml/ml}}=5\ \mathrm{l/min}`,
 p:'Conservation-law reasoning at the organismal scale, borrowing nothing from below but stoichiometry. It is worth noticing how much of classical physiology is of this character — inference from balance rather than from mechanism — because it is the part that has survived unchanged while the molecular story beneath it has been rewritten twice.'},

{a:'hydro',b:'physio',kind:'limit',param:R`\mathrm{Re}\sim10^3,\ \alpha=r\sqrt{\omega\rho/\mu}`,
 t:'Fluid mechanics → Circulation: Poiseuille and its failures',
 f:'Poiseuille flow gives resistance proportional to r⁻⁴, which is why arteriolar tone is the dominant control of blood pressure and why a 19% narrowing halves the flow. It also fails in named ways: the flow is pulsatile (Womersley number about 15 in the aorta, so the profile is blunt rather than parabolic), blood is shear-thinning, and in vessels below about 300 μm the apparent viscosity drops as red cells migrate axially.',
 tex:R`R=\frac{8\mu L}{\pi r^4};\qquad \alpha_{\rm aorta}\approx15\ \Rightarrow\ \text{inertia dominates the profile}`,
 p:'A limit relation whose value lies in the catalogue of its failures. Each failure has a name and a measured correction, and the corrections do not sum to a derivation of circulatory physiology from fluid mechanics — they map the boundary of applicability. This is what the relation between physics and physiology typically looks like once the textbook slogan is put aside.'},

{a:'thermo',b:'physio',kind:'constitutive',param:R`\dot Q=\dot E-\dot W`,
 t:'Thermodynamics → Metabolism: the calorimetric identity',
 f:'Lavoisier and Laplace measured the heat given off by a guinea pig against the CO₂ it produced and found the same ratio as for burning charcoal. Indirect calorimetry still rests on that identity: oxygen consumption, corrected by the respiratory quotient, gives heat production to within a few per cent without any biochemical detail.',
 tex:R`\dot E\ (\mathrm{kJ/min})\approx20.3\,\dot V_{\rm O_2}\ (\mathrm{l/min}),\qquad RQ=\dot V_{\rm CO_2}/\dot V_{\rm O_2}`,
 p:'The oldest surviving reduction in biology and still the cleanest: an organism is, energetically, a slow combustion, and the claim was established before anyone knew what a cell contained. It is also strictly limited — the identity fixes the energy budget and says nothing about how the energy is allocated, which is the question physiology actually asks.'},

{a:'neuro',b:'physio',kind:'constitutive',param:R`\text{reflex arcs, autonomic tone}`,
 t:'Neurophysiology → Physiology: control loops with measurable gain',
 f:'The baroreflex is the best-characterised physiological controller: a step change in arterial pressure is sensed by carotid stretch receptors, and the autonomic response opposes it with an open-loop gain of roughly 2–5, so about 70–80% of an imposed disturbance is corrected. The loop can be opened surgically and the gain measured directly.',
 tex:R`G=\frac{\Delta P_{\rm open}}{\Delta P_{\rm closed}}-1\approx2\text{–}5;\qquad \frac{\Delta P}{\Delta P_0}=\frac{1}{1+G}`,
 p:'Homeostasis is often presented as a vague organising idea; here it is a number that can be measured, and one that turns out to be modest. That matters for the philosophy of function: a "regulated variable" with a gain of 3 is not held constant, it is merely made less variable, and the set-point language then has to be read as a modelling convenience rather than as a discovered target.'},

{a:'physio',b:'med',kind:'constitutive',param:R`\text{organ function}\to\text{disease}`,
 t:'Physiology → Medicine: disease as deranged function',
 f:'The physiological conception of disease — a parameter outside its normal operating range — underwrites most of clinical measurement, from GFR to ejection fraction. It supplies mechanism for intervention: diuretics act on named transporters in named nephron segments, and their effects are predictable from the transport physiology.',
 tex:R`\mathrm{GFR}=\frac{U_{\rm cr}V}{P_{\rm cr}}\approx120\ \mathrm{ml/min/1.73m^2}`,
 p:'The conception fails precisely where the normal range is a population statistic rather than a functional fact, which is most of chronic disease: the thresholds for hypertension and diabetes have each been moved by committee more than once, and each move reclassified millions of people without anything happening to their bodies. Boorse\'s biostatistical theory and its critics are arguing about exactly this junction.'},

{a:'evo',b:'etho',kind:'instantiation',param:R`\text{fitness maximisation}`,
 t:'Evolution → Behavioural ecology: behaviour as a phenotype under selection',
 f:'Behavioural ecology applies optimality reasoning to behaviour: given a currency (usually net energy intake or inclusive fitness), a set of constraints, and a decision variable, predict the behaviour that maximises the currency. The marginal value theorem predicts patch residence times; Hamilton\'s rule predicts when altruism is favoured.',
 tex:R`\frac{\partial g(t)}{\partial t}\bigg|_{t^*}=\frac{g(t^*)}{\tau+t^*};\qquad rB>C`,
 p:'The models are not tests of natural selection — they assume it — but tests of the specific currency and constraint set. When a prediction fails, the standard response is to revise the currency or add a constraint, which is Lakatos\'s protective belt operating in plain sight. The field\'s defence, and it is a reasonable one, is that the revisions are independently testable, and sometimes they have been.'},

{a:'etho',b:'ecol',kind:'upward',param:R`\text{IFD},\ \text{functional response}`,
 t:'Behavioural ecology → Population ecology: individual decisions change the equations',
 f:'Population models usually assume mass action. Behaviour breaks that: predators aggregate where prey are dense, prey change their use of space when predators are present, and the resulting functional responses are not proportional to encounter rates. Ideal free distribution theory predicts how consumers should spread over patches, and the deviation from it is measurable.',
 tex:R`f(N)=\frac{aN}{1+ahN}\ \text{(type II)};\qquad W_1(n_1)=W_2(n_2)\ \text{at the IFD}`,
 p:'An upward relation of the awkward kind: the population-level equation is not derived from behaviour, it is *corrected* by it, and the correction changes qualitative outcomes such as whether a predator–prey cycle is stable. Trait-mediated indirect effects in Yellowstone are the celebrated case, and also the cautionary one — the wolf–elk–aspen story is far less settled than its popular retelling.'},

{a:'etho',b:'cogsci',kind:'contested',param:R`\text{behaviour}\to\text{representation}`,
 t:'Ethology → Cognitive science: the inference to inner states',
 f:'From a behavioural record one may infer a mechanism, but which mechanism is underdetermined. A scrub jay that recovers perishable caches first may be remembering what it cached, where and when — or may be following a single decaying trace. Distinguishing them requires an experiment that dissociates the variables, and such experiments are rare and rarely decisive.',
 tex:R`P(\text{behaviour}\mid\text{rich model})\approx P(\text{behaviour}\mid\text{lean model})`,
 p:'Morgan\'s Canon is usually invoked here as a parsimony rule, and it is a bad one: there is no reason the simpler psychological hypothesis should be the more probable, and applied consistently it would have us deny cognition in humans too. The better framing is ordinary underdetermination, to be attacked with more discriminating experiments rather than with an a priori preference for lean explanations.'},

{a:'physio',b:'ecol',kind:'contested',param:R`B\propto M^{3/4}`,
 t:'Physiology → Ecology: the metabolic theory and its exponent',
 f:'Metabolic scaling theory derives a 3/4 exponent from the geometry of space-filling fractal distribution networks with invariant terminal units, then propagates it upward to population growth rates, lifespans and species-abundance distributions. The empirical exponent across mammals is near 0.75 but confidence intervals in many reanalyses include 2/3, and within-group exponents vary systematically.',
 tex:R`B=B_0M^{3/4}e^{-E/kT};\qquad \text{reported } b = 0.71\text{–}0.76\ \text{depending on dataset and method}`,
 p:'The clearest live case of a proposed reduction in ecology, and the dispute is instructive because both sides agree on the data. What is contested is whether a power law fitted across twenty orders of magnitude, with measurable curvature and taxon-specific deviations, is evidence for a universal derivation or an artefact of fitting on logarithmic axes. It is also a case where a theory\'s reach — from mitochondria to ecosystems — is treated by its proponents as a virtue and by its critics as the symptom.'}

];
