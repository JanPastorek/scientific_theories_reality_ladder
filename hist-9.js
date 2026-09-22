const HIST_9 = {

biochem: {
 origin:[
  {y:'1828', who:'Wöhler', t:'Urea from ammonium cyanate',
   b:'Wöhler synthesised an organic compound from inorganic precursors and wrote to Berzelius that he could "make urea without needing a kidney". The episode is usually presented as the death of vitalism; historians point out that vitalists could and did accommodate it, and that vitalism actually survived for another seventy years.'},
  {y:'1897', who:'Eduard Buchner', t:'Fermentation without cells',
   b:'Trying to preserve yeast extract for medical use, Buchner added sugar as a preservative — and the mixture fermented. Pasteur had insisted that fermentation required intact living cells. A cell-free extract doing the job removed the empirical support for vital forces in a way no argument had. Nobel 1907.'},
  {y:'1926', who:'James Sumner', t:'Enzymes are proteins',
   b:'Sumner crystallised urease from jack bean and showed the crystals were protein and catalytically active. Willstätter, the dominant figure in the field, maintained that enzymes were small molecules adsorbed on colloidal carriers, and Sumner\'s result was disbelieved for nearly a decade. Nobel 1946.'},
  {y:'1937', who:'Hans Krebs', t:'The citric acid cycle',
   b:'Krebs inferred a *cyclic* pathway from the observation that small amounts of certain dicarboxylic acids catalytically stimulated large amounts of oxygen uptake in minced pigeon breast muscle — a catalytic effect implies the intermediate is regenerated. The paper was rejected by *Nature*.'},
  {y:'1953–58', who:'Sanger; Perutz & Kendrew', t:'Sequence and structure',
   b:'Sanger sequences insulin, proving a protein has one definite covalent sequence rather than a statistical distribution. Kendrew solves myoglobin — the first protein structure — and finds it "much more irregular and complicated than the predictions of theorists".'},
  {y:'1961', who:'Peter Mitchell', t:'Chemiosmosis, against the field',
   b:'For fifteen years biochemists searched for a high-energy chemical intermediate coupling respiration to ATP synthesis. Mitchell proposed there was none: the coupling is a proton gradient across a membrane. He was so marginalised that he left his university post and set up a private laboratory in a restored Cornish manor house, funded partly by a herd of dairy cattle. Nobel 1978.'},
  {y:'1973', who:'Kacser & Burns', t:'Control is distributed',
   b:'Metabolic control analysis proves that flux control coefficients over a pathway sum to exactly 1, so control is typically spread thinly. This dissolved the "rate-limiting step" picture and, as a side effect, explained the dominance of wild-type alleles without any appeal to selection — settling a dispute that had run since Fisher in 1928.'}
 ],
 exps:[
  {n:'Buchner\'s cell-free fermentation', who:'Eduard Buchner, Tübingen', y:'1897', fig:'buchner',
   setup:'Brewer\'s yeast is ground with quartz sand and kieselguhr in a mortar, and the paste squeezed in a hydraulic press at several hundred atmospheres to yield a clear juice. The juice is filtered to remove any intact cells — verified by microscopy and by plating. Concentrated sucrose or glucose is added, originally as a preservative.',
   meas:'Vigorous CO₂ evolution and ethanol production from the cell-free juice, continuing for days. The activity is destroyed by boiling and diminishes over time.',
   infer:'Fermentation is chemistry, performed by soluble substances that survive the destruction of the cell. No vital force, no intact organism, no "organised ferment" is required.',
   assume:'That no living cells survived the pressing and filtration — the entire weight of the conclusion rests on this, and Buchner checked it by microscopy and culture. The heat-lability of the activity is the crucial second control: it shows the agent is a labile macromolecule rather than a small stable catalyst, though it took Sumner another 29 years to show it is a protein.'},
  {n:'Testing chemiosmosis: the acid-bath experiment', who:'Jagendorf & Uribe, Cornell', y:'1966', fig:'jagendorf',
   setup:'Isolated spinach chloroplast thylakoids are soaked in a pH 4 succinate buffer in complete darkness until the interior equilibrates at pH 4. They are then rapidly injected into a pH 8 buffer containing ADP and inorganic phosphate. This creates an artificial pH gradient of four units across the membrane — about 240 mV of proton-motive force — with no light, no electron transport, and no possibility of a chemical high-energy intermediate having been generated.',
   meas:'ATP is synthesised in the dark, roughly 100 molecules per electron-transport chain, in a single burst as the gradient discharges.',
   infer:'A proton gradient alone is sufficient to drive ATP synthesis. There need be no chemical intermediate. Mitchell\'s hypothesis passes the sharpest possible test: the cause is imposed artificially and the effect follows.',
   assume:'That the pH jump does not itself generate some conventional high-energy intermediate — implausible in the dark with no substrate — and that the measured ATP is genuinely synthesised rather than released from a pool, checked with ³²P labelling. This experiment is the reason chemiosmosis went from heresy to textbook within a decade.'},
  {n:'Watching a single ATP synthase rotate', who:'Noji, Yasuda, Yoshida & Kinosita', y:'1997', fig:'atpsynthase',
   setup:'The F₁ portion of ATP synthase is engineered with a histidine tag so it binds upside-down to a nickel-coated glass coverslip. A fluorescently labelled actin filament ~1–3 μm long is attached to the γ subunit. ATP is supplied and the filament is watched by fluorescence microscopy — it acts as a lever arm making nanometre rotation visible as micrometre motion.',
   meas:'The filament rotates unidirectionally, counterclockwise, in discrete 120° steps, one step per ATP hydrolysed. Later work resolved each 120° step into 80° and 40° substeps. The motor develops a torque of about 40 pN·nm, giving a work output per step of ~80 pN·nm ≈ 50 kJ/mol — essentially the full free energy of ATP hydrolysis, i.e. close to 100% efficiency.',
   infer:'ATP synthase is literally a rotary motor. Boyer\'s binding-change mechanism, inferred indirectly from kinetics, is confirmed by direct observation of a single molecule.',
   assume:'That the attached filament\'s viscous drag does not alter the mechanism (checked with filaments of different lengths), and that surface attachment does not distort the enzyme. The remarkable feature is that a mechanical concept — torque — turns out to be literally and quantitatively applicable at the scale of one protein.'}
 ],
 assume:[
  {a:'Living systems obey ordinary thermodynamics.', k:'empirical', n:'Established by measurement: whole-organism calorimetry balances to within experimental error. Local order is paid for by entropy exported to the surroundings.'},
  {a:'Enzymes do not alter equilibrium constants.', k:'definition', n:'A catalyst lowers ΔG‡ in both directions equally. An enzyme that shifted ΔG° would be a perpetual motion machine.'},
  {a:'The cell is a well-stirred dilute solution.', k:'idealisation', n:'Flatly false: cytoplasm is ~300 g/L macromolecule, crowded enough that excluded volume shifts association constants by orders of magnitude, and it is organised by membranes and phase-separated condensates.'},
  {a:'Steady state: intermediate concentrations are constant.', k:'idealisation', n:'A singular-perturbation approximation valid when enzyme is scarce relative to substrate. The same mathematical move as integrating out heavy fields in an effective theory.'},
  {a:'Pathways are modular and separable.', k:'idealisation', n:'Convenient for teaching and partly real (shared currency metabolites decouple modules), but pathways share intermediates and regulators, and the boundaries are drawn by us.'},
  {a:'In vitro behaviour reflects in vivo behaviour.', k:'contested', n:'The central methodological assumption of the discipline. Purification removes the crowding, the partners and the compartment — the standard worry about whether a mechanism established in a test tube is the one operating in a cell.'},
  {a:'Biological function is a legitimate explanatory category.', k:'contested', n:'Biochemistry cannot be stated without it — this enzyme is *for* this step. Whether function is etiological (selected effect) or causal-role (contribution to a capacity) is the standing philosophical question, and practitioners use both without noticing.'}
 ],
 notation:[
  {s:R`\Delta G^{\circ\prime}`, r:'"delta G standard prime"', m:'The biochemical standard state: pH 7, 55.5 M water, 1 mM Mg²⁺, and [H⁺] omitted from the mass-action expression. For ATP hydrolysis ΔG°′ = −30.5 kJ/mol while the chemists\' ΔG° at pH 0 is about −36. The prime is not decoration.', d:'kJ mol⁻¹'},
  {s:R`\Delta p`, r:'"proton-motive force"', m:'Δψ − (2.3RT/F)ΔpH, in millivolts. Typically 180–220 mV across the inner mitochondrial membrane, split roughly 150 mV electrical and 60 mV chemical. Energy stored in a *topology*, not in a bond.', d:'mV'},
  {s:R`k_{\rm cat},\ K_M`, r:'"turnover number", "Michaelis constant"', m:'k_cat is turnovers per second per site — 4×10⁷ for catalase; K_M is the half-saturating substrate concentration, usually 10⁻⁶–10⁻³ M, and it is typically close to the physiological substrate concentration, so enzymes operate on the steep part of the curve where they are responsive to change.', d:'s⁻¹; M'},
  {s:R`n_H`, r:'"Hill coefficient"', m:'The slope of a log–log plot of fractional saturation. n > 1 means positive cooperativity; haemoglobin has n ≈ 2.8 with four sites. It is an empirical index of sigmoidicity, not a count of binding sites.', d:'dimensionless'},
  {s:R`E^{\circ\prime}`, r:'"standard reduction potential"', m:'In volts at pH 7. The respiratory chain runs from NADH/NAD⁺ at −0.32 V to O₂/H₂O at +0.82 V, a drop of 1.14 V, which for 2 electrons is ΔG°′ = −nFΔE = −220 kJ/mol — enough for several ATP.', d:'V'},
  {s:R`\mathrm{NAD^+/NADH},\ \mathrm{FAD/FADH_2}`, r:'"electron carriers"', m:'NAD⁺ carries a hydride (two electrons, one proton) in soluble catabolism; FAD is covalently bound and carries two hydrogen atoms. NADPH, differing only by a phosphate, is kept reduced and reserved for biosynthesis — a chemical tag separating two energy economies in the same cell.', d:'—'},
  {s:R`C^{J}_{i}`, r:'"flux control coefficient"', m:'∂ln J/∂ln E_i: the fractional change in pathway flux per fractional change in the amount of enzyme i. The summation theorem ΣC = 1 is a theorem, not an empirical finding, and it makes "the rate-limiting step" a special rather than a typical case.', d:'dimensionless'},
  {s:R`\mathrm{P/O}`, r:'"P over O ratio"', m:'ATP made per oxygen atom reduced. About 2.5 for NADH and 1.5 for FADH₂ — non-integer, because the H⁺/ATP stoichiometry of the synthase is set by the number of c-subunits in its rotor ring, which is 8 in mammals and 10–15 in other organisms. A biological constant that is not a whole number and varies by species.', d:'dimensionless'},
  {s:R`[\mathrm{X}]`, r:'"concentration of X"', m:'Square brackets, in mol/L unless stated. Biochemists routinely write concentrations where activities are meant; at physiological ionic strength the difference is tens of percent.', d:'M'}
 ],
 worked:{t:'How much free energy does a cell actually get from one ATP?',
  steps:[
   'Standard value: ΔG°′ = −30.5 kJ/mol for ATP + H₂O → ADP + Pᵢ.',
   'But the cell does not operate at standard state. Actual concentrations: [ATP] ≈ 3 mM, [ADP] ≈ 0.3 mM, [Pᵢ] ≈ 5 mM.',
   'Reaction quotient Q = [ADP][Pᵢ]/[ATP] = (3×10⁻⁴)(5×10⁻³)/(3×10⁻³) = 5×10⁻⁴.',
   'ΔG = ΔG°′ + RT ln Q = −30.5 + (8.314×310/1000)ln(5×10⁻⁴) = −30.5 + 2.58×(−7.60) = −30.5 − 19.6 = −50.1 kJ/mol.',
   'The mass-action ratio is held about 10⁵-fold away from its equilibrium value, and that displacement contributes 40% of the usable energy.'],
  a:'The cell gets 50 kJ/mol, not 30.5, and the extra comes not from the chemistry of the phosphate bond but from actively maintaining the system far from equilibrium. "High-energy bond" is therefore a misleading phrase: the energy is in the *displacement*, a system-level property, not in any particular bond. This is a clean example of a quantity that looks like a property of a molecule but is in fact a property of a maintained non-equilibrium state — which is exactly what a living thing is.'}
},

molbio: {
 origin:[
  {y:'1869–1944', who:'Miescher; Griffith; Avery, MacLeod & McCarty', t:'The slow identification of the hereditary material',
   b:'Miescher isolates "nuclein" from pus-soaked bandages in 1869. Griffith (1928) shows a heat-killed virulent pneumococcus can "transform" a live avirulent strain. Avery, MacLeod and McCarty (1944) purify the transforming principle and identify it as DNA — and are widely disbelieved, because DNA\'s four monotonous bases seemed too simple to carry hereditary specificity, while proteins had twenty.'},
  {y:'1952', who:'Hershey & Chase', t:'The blender experiment',
   b:'Bacteriophage protein is labelled with ³⁵S and DNA with ³²P. After infection, a kitchen blender shears the empty phage coats off the bacterial surface. The ³²P goes into the cells, the ³⁵S stays outside. Less rigorous than Avery\'s work but far more persuasive, largely because of timing and simplicity.'},
  {y:'1950–53', who:'Chargaff; Franklin & Gosling; Watson & Crick', t:'The double helix',
   b:'Chargaff finds A = T and G = C in every organism — a regularity with no explanation. Franklin\'s X-ray photograph 51 of the B form gives the helical cross pattern, the 3.4 Å stacking and the 34 Å repeat, and her unpublished report states the phosphates are on the outside. Watson saw the photograph without her knowledge, via Wilkins. The 1953 model paper closes: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism."'},
  {y:'1958', who:'Meselson & Stahl', t:'"The most beautiful experiment in biology"',
   b:'Density-gradient centrifugation distinguishes three models of replication in a single elegant design. Semiconservative replication is confirmed; conservative and dispersive are excluded.'},
  {y:'1958–70', who:'Crick', t:'The central dogma, and what it actually says',
   b:'Crick\'s claim is about *sequential information*: once it has passed into protein it cannot get out again. He explicitly allowed for RNA → DNA. When reverse transcriptase was found in 1970 and the press declared the dogma overturned, Crick published a note in *Nature* pointing out that it had not been.'},
  {y:'1961–66', who:'Nirenberg & Matthaei; Crick et al.; Khorana', t:'Breaking the code',
   b:'Nirenberg and Matthaei add synthetic poly-U to a cell-free system and get polyphenylalanine: UUU = phenylalanine. Crick\'s frameshift experiments with acridine mutagens establish that the code is a comma-free triplet read from a fixed point. Khorana\'s defined copolymers finish the table by 1966.'},
  {y:'1961', who:'Jacob & Monod', t:'Genes regulate genes',
   b:'The lac operon: a repressor protein bound to an operator site controls transcription of adjacent genes. Genetic regulation becomes a circuit problem, and the concept of a gene network is born.'},
  {y:'2001–20', who:'HGP; Doudna & Charpentier', t:'Reading and writing',
   b:'The human genome yields ~20 000 protein-coding genes — comparable to a nematode, far fewer than predicted. Complexity turns out to be regulatory and combinatorial. CRISPR-Cas9, adapted from a bacterial immune system, makes targeted editing routine.'}
 ],
 exps:[
  {n:'Meselson–Stahl: how DNA replicates', who:'Matthew Meselson & Franklin Stahl, Caltech', y:'1957–58', fig:'meselson',
   setup:'*E. coli* is grown for fourteen generations in medium where the sole nitrogen source is ¹⁵NH₄Cl, so that all its DNA is heavy. At t = 0 the cells are transferred to ordinary ¹⁴N medium. Samples are taken each generation, the DNA extracted, and centrifuged for 20 hours at 140 000 g in a caesium chloride solution. The CsCl forms its own density gradient under the field, and DNA bands at the position where its buoyant density matches the local solution density. Bands are visualised by ultraviolet absorption photography. The density difference between ¹⁵N and ¹⁴N DNA is under 1%.',
   meas:'Generation 0: one heavy band. Generation 1: a single band of exactly intermediate density, and no heavy band. Generation 2: equal amounts of intermediate and light. Generation 3: light band twice the intermediate.',
   infer:'Semiconservative replication. The results discriminate three hypotheses at once: conservative replication predicts heavy and light bands at generation 1 with nothing in between — excluded immediately; dispersive replication predicts a single band that gets progressively lighter and never splits — excluded at generation 2.',
   assume:'That buoyant density tracks isotopic composition linearly and that the DNA is not sheared into pieces small enough to blur the distinction — the fragments are in fact sheared, which is why the method measures average composition per fragment and cannot by itself distinguish dispersive replication over short stretches. The generation-2 splitting is what closes that gap. This is why the experiment is celebrated: one measurement, three hypotheses, decisive against two.'},
  {n:'Hershey–Chase: which molecule carries heredity', who:'Alfred Hershey & Martha Chase, Cold Spring Harbor', y:'1952', fig:'hershey',
   setup:'T2 bacteriophage is grown in medium containing ³⁵S (incorporated into protein, since DNA has no sulphur) or ³²P (incorporated into DNA, since protein has essentially no phosphorus). Labelled phage are allowed to adsorb to *E. coli* for a few minutes. The suspension is then agitated in a Waring kitchen blender for two minutes to shear the phage coats from the bacterial surface, and centrifuged: bacteria pellet, empty coats stay in the supernatant. Radioactivity is counted in both fractions.',
   meas:'About 80% of the ³²P is in the bacterial pellet and is passed on to progeny phage; about 80% of the ³⁵S remains in the supernatant with the empty coats.',
   infer:'DNA enters the cell and directs the production of new phage; protein stays outside. DNA is the genetic material.',
   assume:'That the blender removes coats without lysing bacteria (checked by viability counts), and that the labels are exclusive to the two macromolecule classes. The experiment is considerably messier than the textbook version — the separation is 80/20, not 100/0 — and Hershey himself regarded Avery\'s chemistry as the stronger evidence. Its influence is a case study in how rhetorical clarity can outweigh evidential strength.'},
  {n:'Cracking the first codon', who:'Marshall Nirenberg & Heinrich Matthaei, NIH', y:'27 May 1961',  fig:null,
   setup:'A cell-free extract of *E. coli* containing ribosomes, tRNAs, enzymes and ATP is depleted of its own mRNA by pre-incubation. Twenty reaction tubes are set up, each with all twenty amino acids but with a different one radioactively labelled with ¹⁴C. Synthetic polyuridylic acid — a homopolymer with no natural counterpart — is added as the message. Newly synthesised protein is precipitated with trichloroacetic acid and its radioactivity counted.',
   meas:'Only the tube with labelled phenylalanine gave radioactive polypeptide, and it gave a great deal of it.',
   infer:'UUU codes for phenylalanine. More important, the method works: a synthetic message of known composition can be decoded in a test tube, which converted the genetic code from a cryptographic puzzle for theorists into an experimental programme.',
   assume:'That the extract\'s endogenous messages are fully removed (otherwise background swamps the signal), and that the synthetic polymer is read in frame from an arbitrary start. Random copolymers gave codon *compositions* but not the order; Khorana\'s defined repeating sequences and Nirenberg\'s later triplet-binding assay supplied the order.'}
 ],
 assume:[
  {a:'Sequence determines structure determines function.', k:'idealisation', n:'Anfinsen\'s dogma. True for many small proteins, false for those needing chaperones, for intrinsically disordered proteins (about a third of the human proteome has substantial disorder), and for prions, where the same sequence has two stable folds.'},
  {a:'One gene, one product.', k:'idealisation', n:'Superseded: alternative splicing, RNA editing, overlapping reading frames, trans-splicing and pervasive non-coding transcription all break it.'},
  {a:'The genetic code is universal.', k:'empirical', n:'Nearly. Mitochondria, ciliates and mycoplasmas use variant codes, and selenocysteine and pyrrolysine are co-translationally inserted as 21st and 22nd amino acids.'},
  {a:'Sequence information does not flow out of protein.', k:'empirical', n:'The actual content of the central dogma. Prions transmit *conformational* information, not sequence, so they are not a counterexample — a distinction that is frequently muddled.'},
  {a:'"Information" is a legitimate biological category.', k:'contested', n:'Uncontroversial as causal specificity — DNA specifies protein sequence in a fine-grained mapping that temperature and water do not. Controversial as semantic content, which imports teleology and underwrites blueprint talk that developmental systems theorists reject.'},
  {a:'The genome is the privileged developmental resource.', k:'contested', n:'Challenged by developmental systems theory: cytoplasmic factors, chromatin marks, symbionts and environment are inherited too, and all are necessary.'},
  {a:'In vitro transcription/translation reflects the cell.', k:'idealisation', n:'The cell-free system that cracked the code has no chromatin, no nuclear envelope, no crowding and no regulation.'},
  {a:'Gene expression is deterministic.', k:'idealisation', n:'False at low copy number. Transcription is bursty, and isogenic cells in identical environments show large variation — which cells exploit for bet-hedging and stochastic fate choice.'}
 ],
 notation:[
  {s:R`5'\to 3'`, r:'"five prime to three prime"', m:'Numbering of the deoxyribose carbons; the primes distinguish sugar carbons from base atoms. Sequences are written 5′→3′ by universal convention, DNA polymerase only extends in that direction, and the two strands are antiparallel. Reading a sequence in the wrong direction is the most common beginner\'s error in the field.', d:'—'},
  {s:R`\mathrm{A,T,G,C,U}`, r:'"the bases"', m:'Adenine, thymine, guanine, cytosine; uracil replaces thymine in RNA. A–T pairs share two hydrogen bonds, G–C three, which is why GC-rich DNA has a higher melting temperature.', d:'—'},
  {s:R`\mathrm{bp,\ kb,\ Mb}`, r:'"base pair, kilobase, megabase"', m:'One base pair is 0.34 nm along the helix. The human genome is 3.1 Gb ≈ 2 m of DNA per diploid cell, packed into a 6 μm nucleus — a linear compaction of about 10⁵.', d:'—'},
  {s:R`T_m`, r:'"melting temperature"', m:'Where half the duplex is dissociated. Depends on length, GC content and salt. The quantity every PCR primer design is built around.', d:'°C'},
  {s:R`\mathrm{ORF}`, r:'"open reading frame"', m:'A stretch from a start codon to an in-frame stop. An ORF is a computational prediction, not an observed gene — the slippage between the two is where much of the post-genomic gene-concept trouble lives.', d:'—'},
  {s:R`k_{\rm tx},\ k_{\rm tl},\ \delta`, r:'"transcription rate", "translation rate", "degradation rate"', m:'The four parameters of the standard gene-expression model. Steady-state protein level is k_tx k_tl/(δ_m δ_p); protein half-life is ln2/δ_p, and in bacteria dilution by cell division often dominates actual degradation.', d:'s⁻¹'},
  {s:R`\eta^2_{\rm int},\ \eta^2_{\rm ext}`, r:'"intrinsic and extrinsic noise"', m:'Separated experimentally by the two-colour assay: two identical promoters driving different fluorophores in the same cell. Uncorrelated variation is intrinsic (the stochastic chemistry of that gene); correlated variation is extrinsic (cell-wide factors such as ribosome number).', d:'dimensionless'},
  {s:R`\mathrm{Cas9},\ \mathrm{sgRNA},\ \mathrm{PAM}`, r:'"Cas nine", "single guide RNA", "protospacer adjacent motif"', m:'The nuclease, the 20-nucleotide targeting RNA, and the short sequence (NGG for SpCas9) that must sit next to the target. The PAM requirement is why not every site is editable, and it is how the bacterium avoids cutting its own CRISPR array.', d:'—'},
  {s:R`\mathrm{RPKM,\ TPM}`, r:'"reads per kilobase per million", "transcripts per million"', m:'Normalisations of RNA-seq counts. TPM sums to 10⁶ per sample and is comparable across samples; RPKM does not and is not. Papers using RPKM for cross-sample comparison are making an error that is easy to miss.', d:'dimensionless'}
 ],
 worked:{t:'The price of accuracy: kinetic proofreading in numbers',
  steps:[
   'A ribosome must distinguish the correct tRNA from a near-cognate one. The binding free-energy difference is ΔΔG ≈ 10–12 kJ/mol, mostly from one or two hydrogen bonds.',
   'At equilibrium the best achievable discrimination is the Boltzmann ratio e^{ΔΔG/RT} = e^{11000/(8.314×310)} ≈ e^{4.3} ≈ 74, i.e. an error rate of about 1 in 74 — roughly 10⁻².',
   'Observed translation error rate: about 10⁻⁴, a hundredfold better than the equilibrium bound.',
   'Hopfield\'s resolution: insert an irreversible, energy-consuming step (GTP hydrolysis by EF-Tu) followed by a delay, giving the wrong substrate a second independent chance to dissociate. Two independent tests square the discrimination: 74² ≈ 5500, comfortably better than 10⁴.',
   'The cost: one extra GTP hydrolysed per proofreading cycle, ~50 kJ/mol, paid on every codon whether or not an error was present.'],
  a:'Accuracy beyond the equilibrium limit is not free — it is purchased, at a price fixed by non-equilibrium thermodynamics. This is one of the few places in biology where a quantitative specification (the error rate) is *derived* from physics rather than measured and accepted, and it shows that the cell\'s fidelity is an engineering trade-off between speed, accuracy and energy rather than a brute fact about molecules. Note also that it is a genuinely downward derivation that leaves the higher-level concepts — codon, meaning, error — entirely in place.'}
}
};
