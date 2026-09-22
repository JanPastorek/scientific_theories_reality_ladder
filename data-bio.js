const BIO = [
{
 id:'biochem', n:'Biochemistry & Bioenergetics', aka:'Metabolism · enzymes · chemiosmosis',
 dom:'biology', tier:6, years:'1897 – 1961', status:'confirmed',
 scale:{len:'10⁻⁹ – 10⁻⁵ m', en:'ATP ≈ 0.5 eV ≈ 50 kJ/mol', lg:9},
 one:'How a cell stays far from equilibrium: a catalysed, kinetically controlled chemical network that harvests free energy through a proton gradient and spends it in units of about 50 kJ/mol.',
 onto:'Macromolecules (proteins, nucleic acids, lipids, polysaccharides) and metabolites in a crowded aqueous compartment, organised by membranes. Everything is ordinary chemistry; what is added is *organisation* — catalysts, compartments, and regulated flux.',
 state:'Concentrations of ~10³ metabolites, fluxes through ~10³ reactions, plus the membrane potential and pH gradient. A dynamical system held at a non-equilibrium steady state by continuous throughput.',
 eqs:[
  {tex:R`\Delta G=\Delta G^{\circ\prime}+RT\ln\frac{[\text{ADP}][\mathrm{P_i}]}{[\text{ATP}]}\approx-50\ \mathrm{kJ/mol}\ \text{in vivo}`, name:'ATP hydrolysis', gloss:'The standard value is −30.5 kJ/mol; the cell holds the ratio ~10⁵ from equilibrium, so the actual value is ~−50. Free energy available depends on how far from equilibrium you keep things — thermodynamics applied by a system that manages its own reaction quotient.'},
  {tex:R`\Delta p=\Delta\psi-\frac{2.3RT}{F}\Delta\mathrm{pH}\approx 200\ \mathrm{mV}`, name:'Proton-motive force (Mitchell 1961)', gloss:'Energy is stored not in a chemical intermediate but as an electrochemical gradient across a membrane. Rejected for a decade, then Nobel 1978 — one of the great cases of a correct theory resisted because it violated a disciplinary assumption (that energy coupling must be chemical).'},
  {tex:R`v=\frac{k_{\rm cat}[\mathrm{E}]_{0}[\mathrm{S}]}{K_{M}+[\mathrm{S}]},\qquad \frac{k_{\rm cat}}{K_{M}}\le k_{\rm diff}\approx10^{8-9}\,\mathrm{M^{-1}s^{-1}}`, name:'Enzyme kinetics & the catalytic perfection limit', gloss:'Some enzymes (triosephosphate isomerase, catalase) reach the diffusion limit: every encounter is productive. Evolution has, in these cases, hit a physical ceiling.'},
  {tex:R`v=\frac{V_{\max}[S]^{n}}{K^{n}+[S]^{n}}\quad (n>1:\ \text{cooperativity})`, name:'Hill equation & allostery', gloss:'Haemoglobin n ≈ 2.8. Cooperativity converts a graded input into a switch — the basic mechanism of biological decision-making, and the reason regulation is possible at all.'},
  {tex:R`\text{C}_{6}\text{H}_{12}\text{O}_{6}+6\,\text{O}_{2}\to 6\,\text{CO}_{2}+6\,\text{H}_{2}\text{O},\ \ \Delta G^{\circ\prime}=-2870\ \mathrm{kJ/mol}\Rightarrow\sim 30\ \text{ATP}`, name:'Respiration, with the efficiency', gloss:'~30 × 50 / 2870 ≈ 52% of available free energy captured — better than any heat engine at these temperatures, because it is not a heat engine.'},
  {tex:R`J_{i}=\sum_{k}\nu_{ik}v_{k}=0\ \text{(steady state)};\qquad C^{J}_{i}=\frac{\partial\ln J}{\partial\ln E_{i}},\quad \sum_{i}C^{J}_{i}=1`, name:'Metabolic control analysis', gloss:'The summation theorem: control over a pathway flux is *distributed*, and the sum of all control coefficients is exactly 1. This is a rigorous refutation of the "rate-limiting step" picture — control is a system property, not a property of one enzyme.'}
 ],
 concepts:[
  {t:'Coupling', d:'An unfavourable reaction is driven by a favourable one sharing a common intermediate or enzyme. This — not any exemption from thermodynamics — is how life builds order.'},
  {t:'Non-equilibrium steady state', d:'A cell is open, with continuous matter and energy throughput. Equilibrium is death, literally and technically.'},
  {t:'Catalysis by transition-state stabilisation', d:'Enzymes bind the transition state more tightly than the substrate, lowering ΔG‡. Rate enhancements up to 10¹⁷; transition-state-analogue inhibitors are the design principle behind many drugs.'},
  {t:'Compartmentalisation', d:'Membranes create distinct chemical environments, permit gradients, and localise reactions. The gradient *is* the stored energy — topology doing thermodynamic work.'},
  {t:'Modularity', d:'Metabolism decomposes into pathways (glycolysis, TCA, pentose phosphate) sharing currency metabolites (ATP, NADH, acetyl-CoA). Near-decomposability in Simon\'s sense, and the reason the network is intelligible at all.'},
  {t:'Molecular machines', d:'ATP synthase is a rotary motor: the c-ring turns, three catalytic sites cycle, ~3 H⁺ per ATP. Directly visualised rotating (Noji 1997). Mechanical concepts applied literally, not metaphorically, at the nanoscale.'}
 ],
 results:[
  {n:'Buchner (1897)', s:'Cell-free extract ferments sugar. Ends vitalism as an empirical programme: no living cell required, only its chemistry.'},
  {n:'Chemiosmotic theory', s:'Mitchell 1961. Unified respiration and photosynthesis under one mechanism, against fifteen years of failed search for a chemical intermediate.'},
  {n:'Structure of the machinery', s:'Myoglobin (1958), haemoglobin, ATP synthase, the ribosome (Nobel 2009), and now AlphaFold-scale structure prediction.'},
  {n:'Metabolic control analysis', s:'Kacser & Burns 1973: overturns the rate-limiting-step dogma and explains the genetics of dominance — dominance of wild-type alleles falls out of flux control being distributed, so it need not have evolved (contra Fisher).'},
  {n:'Thermodynamic viability of life', s:'Living systems export entropy to the environment; local order is purchased, not free. Schrödinger\'s *What is Life?* (1944) set the agenda.'}
 ],
 valid:{holds:'Cellular and organismal metabolism, from bacteria to humans; the framework is essentially universal across life.', breaks:'Molecular crowding (cytoplasm is ~300 g/L protein; dilute-solution kinetics is quantitatively wrong there); low-copy-number stochasticity; spatial organisation and phase-separated condensates, where the well-mixed assumption fails; and whole-cell prediction, which remains out of reach.'},
 detail:{
  deriv:[
   {h:'From chemistry: what carries over and what is added', b:'Every biochemical step obeys thermodynamics and transition-state theory; nothing is added at the level of law. What is added is *constraint structure*: which of the astronomically many chemically possible reactions actually occur is determined by which catalysts are present, and that is determined by the genome, hence by evolutionary history. The chemistry fixes what is possible; the history fixes what is actual. This is the sense in which biology is not "just chemistry" that costs nothing metaphysically — the laws are the same, the boundary conditions are historically produced.'},
   {h:'Why life does not violate the Second Law, quantitatively', b:'A human dissipates ~100 W at 310 K, producing entropy at ~0.3 W/K ≈ 2×10²² k_B/s. The internal order maintained is vastly less than this. The Earth\'s energy budget makes the accounting plain: it receives ~1.7×10¹⁷ W of ~5800 K photons and radiates the same power as ~255 K photons — roughly 20× more photons out than in, hence an enormous entropy export. Life runs on the *entropy gradient*, not on energy.'},
   {h:'The rate-limiting step, and a genuine higher-level theorem', b:'Metabolic control analysis proves Σ C^J_i = 1 over all enzymes in a pathway. Consequences: control is typically spread across many enzymes, each with a small coefficient; overexpressing one enzyme usually barely changes flux; and a heterozygote with 50% enzyme normally has ~100% flux, which *explains the dominance of wild-type alleles* without invoking selection for dominance modifiers. Fisher\'s selectionist account of dominance was a major early controversy in population genetics; Kacser and Burns dissolved it with a systems argument. A clean instance of a higher-level (network) theorem settling a question posed at another level entirely.'}
  ],
  deeper:[
   {h:'Function, teleology and the new mechanism', b:'Biochemistry is stated in irreducibly functional language — this enzyme is *for* catalysing that step. Two families of account: *etiological* (Wright, Millikan, Neander): a trait\'s function is the effect for which it was selected, so function is historical; *causal-role* (Cummins): a function is a contribution to a containing system\'s capacity, ahistorical and analysis-relative. Biochemists mostly use the second while presupposing the first. The new-mechanist programme (Machamer–Darden–Craver, Bechtel) argues that explanation here consists in describing entities and activities organised to produce a phenomenon, not in subsumption under laws — and biochemistry is its best-worked case study.'}
  ]
 },
 phil:{
  stance:'Where vitalism actually died — not by philosophical argument but by Buchner\'s cell-free extract. Also where functional language becomes unavoidable, and where mechanistic explanation displaced law-based explanation as the working model of what an explanation is.',
  disputes:[
   'Are biological functions etiological (selected effects) or causal-role? Does biochemical practice presuppose an answer?',
   'Is mechanistic explanation a genuine alternative to the deductive-nomological model, or a special case of it?',
   'Does metabolic control analysis show that causal control is a system-level property irreducible to component properties?',
   'Is "molecular machine" a literal description or a metaphor that imports design assumptions?'
  ],
  read:['Bechtel, *Discovering Cell Mechanisms*','Craver, *Explaining the Brain*','Nicholson, "Organisms ≠ Machines" (2013)','Schrödinger, *What is Life?* (1944)','Kacser & Burns, "The Molecular Basis of Dominance" (1981)']
 },
 fig:'atp'
},

{
 id:'molbio', n:'Molecular Biology', aka:'The central dogma · gene expression · regulation',
 dom:'biology', tier:7, years:'1953 – 1970', status:'confirmed',
 scale:{len:'10⁻⁹ – 10⁻⁶ m', en:'—', lg:8},
 one:'Information stored as a nucleotide sequence is copied, transcribed and translated into protein sequence — with the crucial constraint that sequence information never flows back out of protein.',
 onto:'DNA, RNA and protein as informational polymers, plus the machinery that reads and writes them. "Information" here is sequence correspondence, not Shannon entropy and not meaning — a point on which a great deal of confusion depends.',
 state:'A genome sequence, plus the current expression state: which genes are transcribed, at what rate, with what modifications. Formally a high-dimensional dynamical system with the genome as fixed parameters.',
 eqs:[
  {tex:R`\text{DNA}\xrightarrow[\text{transcription}]{}\text{RNA}\xrightarrow[\text{translation}]{}\text{protein}\ \ \not\to\ \text{nucleic acid}`, name:'The central dogma (Crick 1958, restated 1970)', gloss:'Crick\'s actual claim: once *sequential information* has passed into protein it cannot get out again. It is not "DNA makes RNA makes protein", and it is not violated by reverse transcription, which Crick explicitly allowed for.'},
  {tex:R`\text{64 codons}\to\text{20 amino acids}+\text{stop};\quad \text{degenerate, nearly universal}`, name:'The genetic code', gloss:'The code is a *convention* in a strong sense: the mapping is chemically arbitrary (any codon could in principle specify any amino acid, as expanded-code organisms demonstrate) yet frozen and shared across life. Arbitrariness plus universality is why "code" is not merely a metaphor here.'},
  {tex:R`\frac{dm}{dt}=k_{\rm tx}f([\mathrm{TF}])-\delta_{m}m,\qquad \frac{dp}{dt}=k_{\rm tl}m-\delta_{p}p`, name:'Gene expression dynamics', gloss:'The basic module of systems biology. Combined with feedback, this generates switches, oscillators and pulse generators.'},
  {tex:R`f([\mathrm{TF}])=\frac{[\mathrm{TF}]^{n}/K^{n}}{1+[\mathrm{TF}]^{n}/K^{n}}`, name:'Hill-type regulation', gloss:'Cooperative binding makes response sharp. n > 1 plus positive feedback gives bistability — a cell can remember a transient signal, which is the physical basis of differentiation.'},
  {tex:R`\frac{\sigma^{2}}{\langle p\rangle^{2}}=\frac{1}{\langle p\rangle}+\frac{b}{\langle p\rangle}+\eta^{2}_{\rm ext}`, name:'Expression noise', gloss:'Intrinsic (bursty transcription, b proteins per mRNA) plus extrinsic noise. With ~10 mRNA copies per cell, stochasticity is not measurement error: it is exploited in bet-hedging and in stochastic cell-fate choice.'},
  {tex:R`\text{error rates: replication }10^{-9\text{--}10},\ \ \text{transcription }10^{-5},\ \ \text{translation }10^{-4}`, name:'Fidelity hierarchy', gloss:'Proofreading and kinetic proofreading (Hopfield 1974) buy accuracy beyond the equilibrium binding-energy limit by spending ATP. Accuracy has a thermodynamic price, and the cell pays it only where it matters.'}
 ],
 concepts:[
  {t:'Gene', d:'The concept has fragmented. Mendelian (a unit of inheritance), classical (a unit of recombination and mutation), molecular (an ORF), and post-genomic (a context-dependent template resource, given alternative splicing, overlapping reading frames, trans-splicing, and pervasive non-coding transcription). ENCODE\'s definitional struggles made this a public problem, not just a philosophical one.'},
  {t:'Information', d:'Used in at least three senses: causal specificity (which molecule determines which), semantic/teleosemantic content, and Shannon quantity. Only the first is uncontroversial. Sarkar, Godfrey-Smith and Griffiths have argued the semantic reading is doing illicit work.'},
  {t:'Regulation', d:'Operon (Jacob & Monod 1961), enhancers, chromatin state, non-coding RNA. Most of what distinguishes a neuron from a hepatocyte is regulatory, not genomic — the same genome, different expression.'},
  {t:'Epigenetics', d:'Heritable expression states not encoded in sequence: DNA methylation, histone modification, prions. Transgenerational inheritance in mammals is real but limited; its evolutionary significance is actively disputed.'},
  {t:'Network motifs', d:'Recurring circuit patterns — feed-forward loops, autoregulation, toggles — appearing far more often than chance. Alon\'s programme treats the cell as engineered circuitry with identifiable design principles.'},
  {t:'Molecular machines & self-assembly', d:'Ribosome, spliceosome, polymerases. Structure specifies function; assembly is largely spontaneous, driven by binding free energy.'}
 ],
 results:[
  {n:'The double helix (1953)', s:'Structure implies mechanism: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism."'},
  {n:'The genetic code cracked (1961–66)', s:'Nirenberg, Khorana, Crick\'s frameshift experiments. A chemically arbitrary mapping, read out by experiment.'},
  {n:'The operon (1961)', s:'Jacob & Monod: genes are regulated by other genes. The conceptual origin of gene networks and of development-as-regulation.'},
  {n:'Recombinant DNA, PCR, sequencing, CRISPR', s:'A theory that became a toolkit; the human genome (2001) and genome editing (Nobel 2020).'},
  {n:'What the genome did not deliver', s:'~20 000 protein-coding genes — fewer than expected, comparable to a nematode. Complexity is regulatory and combinatorial, not a matter of gene count. A well-documented failed prediction, made publicly by serious people.'}
 ],
 valid:{holds:'All known cellular life and viruses; the informational framework is universal.', breaks:'It does not predict phenotype from genotype for complex traits; does not explain development (which needs spatial and mechanical accounts too); underdescribes epigenetics and RNA-world-era biology; and the "one gene one protein" picture is superseded by alternative splicing, RNA editing and non-coding function.'},
 detail:{
  deriv:[
   {h:'Relation to chemistry: derivation is not the relation', b:'Base pairing is hydrogen bonding and base stacking — ordinary chemistry, computable. Protein folding is free-energy minimisation (Anfinsen), and AlphaFold now predicts structure from sequence with high accuracy without solving the physics. But the *code* is not chemistry: which codon means which amino acid is fixed by the aminoacyl-tRNA synthetases, i.e. by evolved machinery, not by chemical affinity between codon and amino acid. Change the synthetase and the meaning changes — this has been done experimentally (expanded genetic codes with 21+ amino acids). So molecular biology contains an irreducibly *historical and conventional* element embedded in a chemical substrate. That combination is what makes it a different kind of science from chemistry, rather than a branch of it.'},
   {h:'Kinetic proofreading: a thermodynamic bound on meaning', b:'Discrimination between correct and incorrect substrates at equilibrium is limited to e^{ΔΔG/k_BT}, which for tRNA selection gives ~10⁻². Observed error rates are ~10⁻⁴. Hopfield\'s resolution: introduce a delay and an irreversible, energy-consuming step that gives a second independent chance to reject the wrong substrate, squaring the discrimination. The extra accuracy is *bought* with ATP. Accuracy of information transfer has a price fixed by non-equilibrium thermodynamics — one of the few places where a biological specification is derived from physics rather than measured.'}
  ],
  deeper:[
   {h:'Was the central dogma reduced, or did it reduce Mendelism?', b:'The standard story — Mendelian genetics reduced to molecular biology — is the most-examined and least-successful case in the reduction literature. Schaffner\'s attempt required so many corrections and bridge principles that Hull, Kitcher and Rosenberg took it as a refutation. The problems: "Mendelian gene" and "molecular gene" do not coreference (one Mendelian gene may be several ORFs, alternative splicing gives one ORF several products); classical laws (segregation, independent assortment) are about chromosome mechanics at meiosis, not about DNA sequence; and molecular biology explains *why* Mendel\'s laws hold approximately and *when* they fail (linkage, meiotic drive, imprinting), which is a different achievement from deriving them. Kitcher\'s conclusion (1984): molecular biology deepens and corrects classical genetics without reducing it — and he argues classical genetics retains explanatory patterns molecular biology cannot express.'},
   {h:'What is information doing in this theory?', b:'The uncontroversial content is *causal specificity* (Woodward, Griffiths & Stotz): DNA sequence specifies protein sequence in a fine-grained, mapping-preserving way that other causes of protein synthesis (temperature, water availability) do not. The controversial addition is semantic content — that genes carry *instructions* or *meaning* — which imports teleology and underwrites "blueprint" talk that developmental systems theorists (Oyama, Griffiths & Gray) reject as licensing genetic determinism. Note that the *arbitrariness* of the code is a genuine disanalogy with ordinary chemical causation and is the strongest argument for the semantic reading.'}
  ]
 },
 phil:{
  stance:'The most intensively studied reduction case outside physics, and the one where the classical model most clearly fails — while the science itself is spectacularly successful. That combination is the philosophical datum.',
  disputes:[
   'Does molecular biology reduce classical genetics? (Schaffner yes-with-corrections; Hull, Kitcher, Rosenberg no.)',
   'Is genetic "information" semantic, merely causal-specificity, or an equivocation that licenses genetic determinism?',
   'What is a gene, if anything, in the post-genomic era? Is the concept still doing unified work?',
   'Developmental systems theory: is the genome privileged among developmental resources, or one among many?'
  ],
  read:['Kitcher, "1953 and All That: A Tale of Two Sciences" (1984)','Griffiths & Stotz, *Genetics and Philosophy*','Godfrey-Smith, "Genes and Codes" ','Sarkar, *Genetics and Reductionism*','Oyama, *The Ontogeny of Information*']
 },
 fig:'dogma'
},

{
 id:'genetics', n:'Transmission Genetics', aka:'Mendelian & quantitative genetics',
 dom:'biology', tier:7, years:'1866 · 1900 · 1918', status:'confirmed',
 scale:{len:'organism / population', en:'—', lg:4},
 one:'Discrete hereditary factors segregate and recombine according to combinatorial rules — a theory that worked for half a century with no idea what the factors were made of, and which remains the working framework of breeding and medical genetics.',
 onto:'Genes as abstract units at loci on chromosomes, with alleles, dominance relations and recombination distances. Deliberately uncommitted about material composition — Morgan\'s maps were built before anyone knew DNA was the hereditary material.',
 state:'A genotype: an assignment of alleles to loci. For populations: a vector of allele and genotype frequencies. For quantitative traits: a variance decomposition.',
 eqs:[
  {tex:R`Aa\times Aa\to 1:2:1\ \text{genotypic},\ 3:1\ \text{phenotypic}`, name:'Segregation (Mendel\'s first law)', gloss:'Alleles separate at meiosis; each gamete gets one. The mechanism (chromosome behaviour in anaphase I) was found 30 years later — the law was inferred from ratios alone.'},
  {tex:R`p^{2}+2pq+q^{2}=1,\qquad p+q=1`, name:'Hardy–Weinberg equilibrium', gloss:'The null model of population genetics: with random mating and no selection, mutation, drift or migration, frequencies are constant. Its *violations* are the data — every evolutionary force is defined as a deviation from it.'},
  {tex:R`r=\frac{\text{recombinants}}{\text{total}},\qquad 1\ \mathrm{cM}\approx1\%\ \text{recombination}`, name:'Linkage & genetic maps', gloss:'Sturtevant 1913: recombination frequency measures distance along a chromosome. A one-dimensional physical structure inferred purely from breeding statistics — one of the finest examples of inference to unobservable structure in the history of science.'},
  {tex:R`V_{P}=V_{G}+V_{E}+V_{G\times E}+2\,\mathrm{Cov}(G,E),\qquad V_{G}=V_{A}+V_{D}+V_{I}`, name:'Variance decomposition (Fisher 1918)', gloss:'Fisher\'s reconciliation of Mendelism with continuous variation: many small-effect loci give a normal distribution. It also founded ANOVA — statistics as a discipline is a by-product of a genetics dispute.'},
  {tex:R`h^{2}=\frac{V_{A}}{V_{P}},\qquad R=h^{2}S\ \ \text{(breeder's equation)}`, name:'Heritability', gloss:'A ratio of *variances in a population in an environment*, not a measure of how genetically determined a trait is in an individual. This is the most misused number in science. h² for height is ~0.8 and yet mean height rose ~10 cm in a century, entirely environmentally.'},
  {tex:R`y=\mu+\sum_{j}x_{j}\beta_{j}+\epsilon;\qquad \text{GWAS: }-\log_{10}p>7.3`, name:'GWAS & polygenic scores', gloss:'Thousands of loci of tiny effect. Height: ~12 000 variants explain ~40% of variance. The "omnigenic" model (Boyle, Li & Pritchard 2017) proposes essentially every expressed gene contributes through network connectivity.'}
 ],
 concepts:[
  {t:'Genotype / phenotype distinction', d:'Johannsen 1911. The single most important conceptual move in biology after Darwin: it separates what is transmitted from what is expressed, and blocks the inference from appearance to heredity.'},
  {t:'Dominance & epistasis', d:'Dominance is a relation between alleles *at a locus with respect to a trait*, not a property of a gene. Epistasis (interaction between loci) makes genotype–phenotype maps non-additive and is why prediction is hard.'},
  {t:'Penetrance & expressivity', d:'The same genotype gives different phenotypes across individuals. Even in "monogenic" disease the mapping is probabilistic — BRCA1 penetrance for breast cancer is ~60–70%, not 100%.'},
  {t:'Norm of reaction', d:'The full function from environment to phenotype for a genotype. Reaction norms for different genotypes cross, which means asking whether a trait is "genetic or environmental" is malformed rather than merely difficult.'},
  {t:'Heritability is not heredity', d:'h² is population- and environment-specific, says nothing about individuals, and nothing about malleability. Phenylketonuria is essentially fully heritable and completely treatable by diet.'},
  {t:'Missing heritability', d:'Identified variants long explained far less variance than twin studies implied. Partly resolved by rare variants, larger samples and polygenicity; partly a signal that twin-study assumptions (equal environments) are shakier than assumed.'}
 ],
 results:[
  {n:'Mendel (1866) and its rediscovery (1900)', s:'Ignored for 34 years — a standard case study in why results need a receptive theoretical context to count as discoveries.'},
  {n:'The chromosome theory (1902–15)', s:'Sutton, Boveri, Morgan. Abstract factors localised to physical bodies; *Drosophila* maps built from recombination frequencies alone.'},
  {n:'The modern synthesis (1918–42)', s:'Fisher, Haldane, Wright reconciled Mendelian discreteness with Darwinian gradualism — the biometrician/Mendelian war ended by mathematics.'},
  {n:'One gene–one enzyme (1941)', s:'Beadle & Tatum in *Neurospora*: the bridge from transmission genetics to biochemistry.'},
  {n:'Medical and agricultural genetics', s:'Linkage mapping of disease genes, marker-assisted selection, genomic selection in livestock — the theory is in daily industrial use.'}
 ],
 valid:{holds:'Diploid sexual organisms; single-locus large-effect traits; and statistically, at the population level, for quantitative traits within a specified environment.', breaks:'Individual prediction from genotype for complex traits; strong epistasis and G×E; non-Mendelian inheritance (imprinting, mitochondrial, meiotic drive, transposons); anything requiring extrapolation of h² across populations or environments — which is precisely where it is most often applied.'},
 detail:{
  deriv:[
   {h:'Mendel from meiosis — nearly', b:'Segregation follows from homologue separation at anaphase I. Independent assortment follows from random orientation of bivalents at metaphase I — *for loci on different chromosomes*. Loci on the same chromosome violate it, in proportion to distance; that violation is what makes genetic mapping possible. So molecular/cytological knowledge does not simply derive Mendel\'s laws: it derives a *corrected and restricted* version, and explains the exceptions (linkage, imprinting, drive). Kitcher\'s point is that this is explanatory deepening rather than reduction, and that the cytological-level explanation of segregation (pairing and separation of any physical structures, whatever their composition) is more general than any DNA-level story — which is why the molecular details are, for this explanandum, the wrong grain.'},
   {h:'Why heritability does not measure genetic determination', b:'h² = V_A/V_P is a ratio of variances. Three consequences that are constantly ignored. (1) If the environment is uniform, V_E → 0 and h² → 1 for *any* trait. Number of fingers is ~0 heritable; most variance is accidental. (2) h² is silent about means, so a trait can be highly heritable within groups while differences between groups are entirely environmental (Lewontin\'s seed-lot argument). (3) h² says nothing about malleability. Treating h² as a measure of how "genetic" a trait is commits a fallacy of division: a population-level statistic is read as an individual-level property.'}
  ],
  deeper:[
   {h:'The biometrician–Mendelian war, and how it ended', b:'From 1900 to 1918, Pearson and Weldon (continuous variation, correlation, gradual evolution) fought Bateson and de Vries (discrete factors, saltation). Both sides had good evidence. Fisher\'s 1918 paper showed that many Mendelian loci of small additive effect *produce* a normal distribution with exactly the observed correlations between relatives — dissolving the dispute by showing the two positions were describing the same system at different grains. It is one of the cleanest historical examples of a theoretical unification that is genuinely a unification rather than an elimination, and it produced ANOVA as a side-effect.'},
   {h:'Causal interpretation of GWAS', b:'GWAS finds statistical association, mostly in non-coding regulatory regions, with tiny individual effects. Interpretive hazards: linkage disequilibrium (the hit is a marker, not the cause), population stratification (confounding by ancestry), and the fact that polygenic scores transport poorly across ancestries — which is an epistemological problem about external validity, not merely a data-coverage gap. Within-family designs (comparing siblings) control much of the confounding and typically shrink estimated effects, which tells you how much of the original signal was causal.'}
  ]
 },
 phil:{
  stance:'A theory that worked for fifty years without knowing its own subject matter, and whose central statistic (heritability) is the most consequential misunderstood quantity in the sciences. Both facts are philosophically instructive.',
  disputes:[
   'Does molecular genetics reduce classical genetics? (The Kitcher/Hull/Rosenberg debate.)',
   'What, if anything, does heritability tell us about causation, individuals or policy?',
   'Is the gene-centred view of heredity a distortion of development? (Developmental systems theory.)',
   'Is "missing heritability" a data problem, a model problem, or evidence that twin-study assumptions are wrong?'
  ],
  read:['Lewontin, "The Analysis of Variance and the Analysis of Causes" (1974)','Kitcher, "1953 and All That" (1984)','Sober, "Separating Nature and Nurture"','Downes & Matthews, "Heritability" (SEP)']
 },
 fig:'punnett'
},

{
 id:'neuro', n:'Neurophysiology', aka:'Hodgkin–Huxley · cable theory · neural coding',
 dom:'biology', tier:7, years:'1952 –', status:'confirmed',
 scale:{len:'10⁻⁶ – 10⁻¹ m', en:'~100 mV, ~1 ms', lg:6},
 one:'The one place in biology where a macroscopic organismal phenomenon — the nerve impulse — is quantitatively derived from physical chemistry, with no fitted phenomenology left over.',
 onto:'Membranes as capacitors, ion channels as voltage-dependent conductances, ionic gradients as batteries. A neuron is an electrical circuit with nonlinear, voltage-gated elements — literally, not by analogy.',
 state:'Membrane potential V(x,t) along the neuron, plus gating variables (m, h, n) describing channel populations. A reaction–diffusion system on a branched one-dimensional domain.',
 eqs:[
  {tex:R`E_{\rm ion}=\frac{RT}{zF}\ln\frac{[\mathrm{ion}]_{\rm out}}{[\mathrm{ion}]_{\rm in}};\quad E_{K}\approx-90,\ E_{Na}\approx+60\ \mathrm{mV}`, name:'Nernst potential', gloss:'Pure equilibrium thermodynamics applied to a membrane. The resting potential and the action potential\'s amplitude are both fixed by these numbers — biology using a physical-chemical result without modification.'},
  {tex:R`C_{m}\frac{dV}{dt}=-\bar g_{Na}m^{3}h(V-E_{Na})-\bar g_{K}n^{4}(V-E_{K})-g_{L}(V-E_{L})+I`, name:'Hodgkin–Huxley equations', gloss:'Four coupled ODEs. The exponents m³ and n⁴ were fitted in 1952 and later vindicated: the K⁺ channel is a tetramer (four independent subunits), the Na⁺ channel has three activation gates plus inactivation. A curve-fitting parameter that turned out to be a structural count.'},
  {tex:R`\frac{dx}{dt}=\alpha_{x}(V)(1-x)-\beta_{x}(V)x,\qquad x\in\{m,h,n\}`, name:'Gating kinetics', gloss:'Two-state channel populations with voltage-dependent rates. The nonlinearity of α, β in V is what makes the system excitable rather than merely passive.'},
  {tex:R`\lambda=\sqrt{\frac{r_{m}}{r_{i}}}=\sqrt{\frac{a R_{m}}{2R_{i}}},\qquad \tau_{m}=R_{m}C_{m}`, name:'Cable equation & space constant', gloss:'Passive spread decays over λ ~ 0.1–1 mm. Myelination raises r_m and lowers C_m, giving saltatory conduction and a ~50× speed-up — evolution solving a cable-engineering problem.'},
  {tex:R`\text{threshold, all-or-none, refractory period};\quad v\approx 1\text{–}100\ \mathrm{m/s}`, name:'Excitability', gloss:'A saddle-node or Hopf bifurcation in the dynamical system. "Threshold" is not a parameter in the equations — it is an emergent feature of the phase portrait, which is why it is only approximately sharp.'},
  {tex:R`r(t)=f\!\left(\int k(\tau)s(t-\tau)d\tau\right);\qquad I(S;R)=\sum p(s,r)\log_{2}\frac{p(s,r)}{p(s)p(r)}`, name:'Neural coding', gloss:'Linear–nonlinear models and information-theoretic analysis of what spike trains carry. Note this is Shannon information used properly — quantitative, with no semantic content smuggled in.'}
 ],
 concepts:[
  {t:'Excitable medium', d:'A system with a stable rest state that produces a large stereotyped response to a suprathreshold perturbation, then becomes refractory. Shared with cardiac tissue, the BZ reaction and forest fires — a genuinely cross-domain dynamical class.'},
  {t:'Ion channel', d:'A membrane protein forming a selective, gated pore. Single-channel currents were directly measured by patch clamp (Neher & Sakmann, Nobel 1991), confirming a posit inferred from macroscopic kinetics 25 years earlier.'},
  {t:'Synaptic plasticity', d:'Hebbian learning, LTP/LTD, STDP — synaptic strength depends on correlated activity with millisecond-scale timing dependence. The main candidate physical substrate of memory.'},
  {t:'Population coding', d:'Information distributed across many neurons; single-cell tuning is broad and ambiguous. Related to, but empirically distinct from, multiple realisability arguments in philosophy of mind.'},
  {t:'Levels in neuroscience', d:'Marr\'s computational / algorithmic / implementational triad. Widely used, and criticised for suggesting levels are more separable than they are — the implementation often constrains the algorithm substantially.'},
  {t:'Dynamical systems view', d:'Bifurcations, attractors, limit cycles. Neurons and circuits are better understood as dynamical systems than as logic gates; Izhikevich classified neuron types by bifurcation structure.'}
 ],
 results:[
  {n:'Hodgkin & Huxley (1952)', s:'Computed the action potential waveform, amplitude and conduction velocity from voltage-clamp measurements — by hand-cranked calculator, over three weeks. Nobel 1963. Still the template for quantitative biology.'},
  {n:'Patch clamp', s:'Single-channel currents resolved; the picoampere steps predicted by the model were seen directly.'},
  {n:'Channel structures', s:'MacKinnon\'s K⁺ channel crystal structure (Nobel 2003) revealed the selectivity filter — carbonyl oxygens mimicking the hydration shell of K⁺ but not Na⁺, explaining 10 000:1 selectivity at near-diffusion-limited throughput.'},
  {n:'Connectomics', s:'*C. elegans* (302 neurons, complete since 1986), *Drosophila* whole brain (~140 000 neurons, 2024). Having the wiring diagram has proved far less explanatory than expected — a useful corrective about what structural knowledge buys.'},
  {n:'Neural prosthetics', s:'Cochlear implants, deep brain stimulation, brain–computer interfaces: the biophysics is understood well enough to intervene.'}
 ],
 valid:{holds:'Single-neuron electrophysiology and small circuits, quantitatively and predictively.', breaks:'Scaling to behaviour and cognition. Having all 302 *C. elegans* neurons and their connections has not yielded a predictive model of its behaviour. Glia, neuromodulation, and the vast parameter degeneracy of conductance-based models (many parameter sets produce identical activity) all complicate the picture.'},
 detail:{
  deriv:[
   {h:'A complete chain from physics, unusually', b:'Nernst potentials come from equilibrium statistical mechanics; membrane capacitance from electrostatics of a 5 nm lipid bilayer (~1 μF/cm², a value predicted from first principles); axial resistance from electrolyte conductivity; the cable equation from Kirchhoff\'s laws applied to a distributed RC line; and channel gating from Boltzmann-distributed conformational states of a charged protein domain. The only empirical inputs are the rate functions α(V), β(V). Hodgkin and Huxley then *predicted* conduction velocity (18.8 m/s computed vs 21.2 m/s measured) with no fitting to that quantity. This is as close as biology gets to a derivation from physics — and it is worth noticing how rare it is, and how local: it covers the impulse, not the animal.'},
   {h:'What the derivation does not deliver', b:'The HH model explains the action potential. It does not explain why *this* neuron fires *now*, which depends on circuit architecture and on the organism\'s situation; nor what the spike train means, which requires a theory of representation the biophysics does not contain. The case is therefore a good demonstration that successful low-level derivation of a mechanism leaves the higher-level explanatory questions untouched rather than dissolving them.'}
  ],
  deeper:[
   {h:'Multiple realisability, measured', b:'Prinz, Bucher & Marder (2004) searched a 20-million-model parameter space of the lobster stomatogastric ganglion and found that widely different sets of conductances produce essentially identical network output. Real animals show 2–6-fold variation in individual conductances with matched behaviour. This is multiple realisability as an experimental result within a single species, not a philosopher\'s thought experiment about Martians — and it implies that a complete list of parameter values would not be the explanation of the behaviour.'},
   {h:'Mechanistic explanation and its levels', b:'Craver\'s *Explaining the Brain* takes neuroscience as the exemplar: explanation is the description of a multi-level mechanism, with constitutive relevance established by mutual manipulability (intervene on the part, detect a change in the phenomenon; intervene on the phenomenon, detect a change in the part). The HH model is a good case; the gap between connectome and behaviour is a good illustration of why a parts list is not a mechanism.'}
  ]
 },
 phil:{
  stance:'Simultaneously the best case in biology for successful reduction to physics (the action potential) and a clear case of its explanatory limits (the connectome problem). Holding both in view at once is the point.',
  disputes:[
   'Does the HH success license optimism about reducing cognition, or is it a special case where a single physical variable happens to carry the phenomenon?',
   'Marr\'s levels: genuinely autonomous, or an artefact of our ignorance about implementation?',
   'Is neural "coding" and "representation" literal, or a placeholder for a causal story not yet told?',
   'What does measured parameter degeneracy imply for the prospects of explanation-by-parameter-specification?'
  ],
  read:['Craver, *Explaining the Brain* (2007)','Marr, *Vision*, ch. 1','Bechtel & Richardson, *Discovering Complexity*','Prinz, Bucher & Marder, "Similar network activity from disparate circuit parameters" (2004)']
 },
 fig:'ap'
},

{
 id:'evo', n:'Evolutionary Theory', aka:'Natural selection · population genetics · the modern synthesis',
 dom:'biology', tier:8, years:'1859 · 1918–42', status:'confirmed',
 scale:{len:'populations, 10⁰–10⁹ generations', en:'—', lg:2},
 one:'Heritable variation plus differential reproduction yields adaptation and common descent — the only theory in this atlas whose fundamental explanatory appeal is to *history* rather than to law.',
 onto:'Populations of individuals bearing heritable variation, embedded in lineages related by common descent. The population, not the individual, is the unit that evolves; individuals do not evolve, they live and die.',
 state:'A vector of allele or genotype frequencies in a population, evolving by selection, drift, mutation, migration and recombination. A stochastic dynamical system on a simplex.',
 eqs:[
  {tex:R`\Delta p=\frac{pq\,[\,p(w_{11}-w_{12})+q(w_{12}-w_{22})\,]}{\bar w}\ \xrightarrow{\ \text{weak sel.}\ }\ \frac{pq\,s}{\bar w}`, name:'Selection at one locus', gloss:'The core recursion of population genetics. Everything else in the theory is a generalisation of this.'},
  {tex:R`\Delta\bar z=\mathrm{Cov}(w,z)/\bar w+\mathbb{E}[w\,\Delta z]/\bar w`, name:'Price equation', gloss:'An exact identity, not a model: any change in a population mean splits into a selection term (covariance of fitness with trait) and a transmission term. Its generality is also its weakness — being true by construction, it explains nothing by itself, which is exactly why the multilevel-selection debates that rest on it are so hard to settle.'},
  {tex:R`\mathrm{Var}(p)=\frac{p q}{2N_{e}},\quad t_{\rm fix}\approx4N_{e},\quad P_{\rm fix}=\frac{1-e^{-4N_{e}sp}}{1-e^{-4N_{e}s}};\ \ |s|\lesssim\frac{1}{2N_{e}}\Rightarrow\text{drift}`, name:'Genetic drift & effective population size', gloss:'Selection is effective only for |s| > 1/(2N_e). In small populations, selection is *blind* to weakly deleterious mutations — a purely statistical fact with enormous consequences for genome evolution.'},
  {tex:R`k=\mu\quad\text{(neutral substitution rate = mutation rate)}`, name:'Kimura\'s neutral theory (1968)', gloss:'For neutral alleles the substitution rate is independent of population size — new mutations arise at rate 2Nμ and fix with probability 1/2N. This gives the molecular clock, and makes neutrality the *null hypothesis* against which selection must be demonstrated.'},
  {tex:R`\Delta\bar w=\frac{V_{A}(w)}{\bar w}\quad\text{(Fisher's fundamental theorem)}`, name:'Fisher\'s fundamental theorem', gloss:'Often misread as "fitness always increases". Fisher\'s actual claim concerns only the partial change due to changes in allele frequency at constant environment — and environments, including the population\'s own composition, always change.'},
  {tex:R`\frac{\partial\varphi}{\partial t}=-\frac{\partial}{\partial p}\!\left[M(p)\varphi\right]+\frac{1}{2}\frac{\partial^{2}}{\partial p^{2}}\!\left[\frac{p(1-p)}{2N_{e}}\varphi\right]`, name:'Diffusion approximation (Kimura)', gloss:'Treat allele frequency as a continuous diffusion when N is large — the same mathematics as Brownian motion with drift. Formally identical to a Fokker–Planck equation, and the reason population genetics looks like statistical physics.'},
  {tex:R`rb>c\quad\text{(Hamilton's rule)}`, name:'Inclusive fitness', gloss:'Altruism spreads when relatedness × benefit exceeds cost. Explains eusociality, and remains contested as to generality (Nowak, Tarnita & Wilson 2010 vs a 137-author reply).'}
 ],
 concepts:[
  {t:'Natural selection', d:'Requires only variation, heritability and differential reproduction. Substrate-neutral — which is why it applies to viruses, antibodies, and (arguably) cultural variants, and why "Darwinian" is a structural rather than a biological category.'},
  {t:'Fitness', d:'Expected reproductive success — and notoriously slippery. Defined as actual offspring it makes "survival of the fittest" tautological; defined as a propensity it needs an account of that propensity; and in variable environments the right measure is geometric rather than arithmetic mean, which makes bet-hedging rational. The propensity interpretation (Mills & Beatty) is standard and still debated.'},
  {t:'Drift', d:'Sampling error in finite populations. Not a force pushing in a direction but a variance — which is why the "forces" metaphor for evolutionary causes (Sober) has been so heavily criticised.'},
  {t:'Adaptation vs exaptation', d:'A trait shaped by selection for its current role, vs one co-opted from another (Gould & Vrba). Distinguishing them requires historical evidence, not just current utility — and it is the substance of the adaptationism debate.'},
  {t:'Levels of selection', d:'Gene, individual, group, species. Formally, the Price equation partitions selection at any level; whether a given partition tracks a real causal structure is the substantive question. Okasha\'s treatment is the standard reference.'},
  {t:'Constraint', d:'Developmental, phylogenetic and physical limits on available variation. The Gould–Lewontin "Spandrels" critique (1979) targeted the habit of assuming every trait is an optimum.'},
  {t:'Species', d:'Biological, phylogenetic, ecological, genotypic-cluster — at least two dozen concepts. The pluralist reading is that "species" tracks different real structures for different purposes, not that biologists are confused.'}
 ],
 results:[
  {n:'Common descent', s:'Supported by the nested hierarchy, the near-universal genetic code, shared pseudogenes and endogenous retroviruses at homologous sites, and molecular phylogenies converging with morphology. A consilience argument of exceptional strength.'},
  {n:'The modern synthesis (1918–42)', s:'Fisher, Haldane, Wright, Dobzhansky, Mayr, Simpson: Mendelian genetics, selection and palaeontology unified.'},
  {n:'Neutral theory (1968)', s:'Most molecular variation is selectively neutral. Gave the molecular clock and made neutrality the null model — arguably the largest single shift in evolutionary thinking since 1942.'},
  {n:'Observed evolution', s:'Antibiotic and pesticide resistance; Lenski\'s LTEE (>75 000 generations, with the *E. coli* citrate innovation at generation ~31 500); Grants\' Galápagos finches, with measured selection coefficients on beak depth.'},
  {n:'Evo-devo', s:'Hox genes deeply conserved from flies to vertebrates; regulatory change rather than protein change underlies much morphological evolution. Development is a source of structure, not only a constraint.'},
  {n:'Phylogenetics as inference', s:'Maximum likelihood and Bayesian tree reconstruction; molecular dating; ancient DNA (Neanderthal admixture in non-African genomes at ~2%).'}
 ],
 valid:{holds:'All life. Timescales from days (microbes, viruses) to 3.8 Gyr.', breaks:'The origin of life itself (there is no population to select on before replication); extensive horizontal gene transfer in prokaryotes, which makes the tree into a network; and prediction — evolutionary theory explains and retrodicts far better than it predicts, because outcomes depend on contingent variation and environment.'},
 detail:{
  deriv:[
   {h:'Relation to the lower levels', b:'Evolution does not reduce to genetics, let alone to chemistry — it *presupposes* them and adds a different kind of explanation. The genetic level supplies the transmission mechanism (what population genetics formalises); the biochemical level supplies the space of possible variation; but the explanatory work is done by *population-level statistics over historical lineages*. Notice the direction of fit: selection explains why a trait is *prevalent*, not why any individual has it — which is why Sober distinguishes selection *for* from selection *of*, and why evolutionary explanation is irreducibly population-level even under complete physicalism.'},
   {h:'Structural parallels with statistical physics', b:'The diffusion approximation for allele frequencies is a Fokker–Planck equation; Wright\'s adaptive landscape is a potential surface; N_e plays the role of inverse temperature (large N_e = strong selection = low noise; small N_e = drift-dominated = high noise); and the stationary distribution of allele frequency under mutation–selection–drift has a Boltzmann-like form. Sella & Hirsh (2005) made the correspondence explicit, with 2N_e as the inverse temperature. This is a formal analogy with real predictive use, and it is a nice test case for how much a shared mathematical structure licenses — the mechanisms are utterly different, and the analogy transfers results but not ontology.'},
   {h:'Why "survival of the fittest" is not a tautology', b:'If fitness is *defined* as actual reproductive success, then the principle is empty. The standard repair (propensity interpretation): fitness is a probabilistic disposition determined by the organism\'s traits in its environment, so it is predictive rather than definitional — a thicker beak *causes* higher expected survival in a drought, and this can be measured independently of the outcome. The theory\'s empirical content lies in the claim that these dispositions are heritable and that the resulting dynamics produce the observed patterns. The residual problem is that fitness is multiply realisable across every trait and organism, making it the clearest biological example of a functionally-defined higher-level property.'}
  ],
  deeper:[
   {h:'Spandrels, and the shape of the adaptationism debate', b:'Gould & Lewontin (1979) attacked the practice of assuming each trait is separately optimised and inventing selective stories for it. Their alternatives: constraint, allometry, drift, pleiotropy, phyletic inheritance, and co-option. The productive residue is methodological — adaptation must be *demonstrated* (by comparative phylogenetic methods, optimality models with testable currencies, or measured selection gradients), not assumed. Godfrey-Smith usefully distinguishes empirical adaptationism (selection is in fact the dominant force), explanatory adaptationism (adaptation is the big question), and methodological adaptationism (assume optimality as a heuristic) — three theses that the original debate ran together.'},
   {h:'Is there a law of evolution?', b:'Evolutionary explanations are historical: they cite particular lineages, contingent environments and frozen accidents. Beatty\'s "evolutionary contingency thesis" holds that there are no distinctively biological laws, because every biological generalisation is an evolutionary contingency. Sober counters that population-genetic principles (Hardy–Weinberg, the selection recursion) are a priori mathematical truths rather than empirical laws — which, if right, means biology gets its generality from mathematics rather than from nomic necessity. Either way, the contrast with the sheets at the top of this atlas is sharp: there is nothing in evolution that plays the role the Einstein equations play in GR.'}
  ]
 },
 phil:{
  stance:'The theory that made philosophy of biology a separate field. Its explanations are historical and statistical rather than nomological, its central concept (fitness) is functionally defined, and its unit of explanation is the population — three features that make it resist every model of scientific theory built on physics.',
  disputes:[
   'What is fitness? Propensity, statistical summary, or theoretical primitive?',
   'Levels of selection: is group selection a real causal process or a re-description of individual selection? (Sober & Wilson vs Williams, Dawkins; Okasha\'s synthesis.)',
   'How adaptationist should biology be, thirty-five years after *Spandrels*?',
   'Are there biological laws? (Beatty\'s contingency thesis vs Sober, Mitchell\'s pragmatic pluralism.)',
   'The statisticalist/causalist debate: are selection and drift causes, or merely statistical descriptions of ensembles of individual-level causes? (Matthen & Ariew vs Sober, Reisman & Forber.)'
  ],
  read:['Sober, *The Nature of Selection*','Okasha, *Evolution and the Levels of Selection*','Gould & Lewontin, "The Spandrels of San Marco" (1979)','Godfrey-Smith, *Darwinian Populations and Natural Selection*','Lewens, "Adaptationism" (SEP)']
 },
 fig:'landscape'
},

{
 id:'ecol', n:'Ecology', aka:'Population dynamics · communities · ecosystems',
 dom:'biology', tier:8, years:'1920 –', status:'partial',
 scale:{len:'10⁻³ – 10⁷ m', en:'—', lg:1},
 one:'The dynamics of populations, communities and material flows — the level at which the sciences in this atlas stop producing sharp laws and start producing models that work in some systems and not others.',
 onto:'Populations, species, guilds, communities, ecosystems, and flows of energy and matter through them. Whether "community" and "ecosystem" name real, bounded individuals or are pragmatic groupings is a live question in the field itself, not only in its philosophy.',
 state:'Abundance vectors, age or stage structure, spatial distribution, interaction networks, and nutrient/energy pools. Usually high-dimensional, always partially observed.',
 eqs:[
  {tex:R`\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right);\qquad N_{t+1}=rN_{t}(1-N_{t})`, name:'Logistic growth & the logistic map', gloss:'The continuous version is tame; its discrete analogue period-doubles into chaos at r > 3.57. May (1976) used it to show simple deterministic ecological models generate apparently random dynamics — a founding result of chaos theory that arrived from ecology.'},
  {tex:R`\frac{dN}{dt}=N(a-bP),\qquad \frac{dP}{dt}=P(cN-d)`, name:'Lotka–Volterra predator–prey', gloss:'Neutrally stable closed orbits — structurally unstable, so any perturbation of the model changes the qualitative behaviour. A standard example of a model that is analytically instructive and dynamically unrealistic.'},
  {tex:R`\text{coexistence}\iff \alpha_{12}<\frac{K_{1}}{K_{2}}<\frac{1}{\alpha_{21}};\qquad \text{Chesson: }\bar r_{i}>0\ \text{when rare}`, name:'Competition & modern coexistence theory', gloss:'Chesson\'s framework separates stabilising niche differences from fitness differences, and gives an invasibility criterion. This is as close as ecology gets to a general principle.'},
  {tex:R`S=cA^{z},\quad z\approx0.15\text{–}0.35;\qquad \hat S_{\rm eq}\ \text{(MacArthur–Wilson)}`, name:'Species–area relationship', gloss:'One of the most robust empirical regularities in ecology, holding across taxa and continents — and with at least four competing explanations (sampling, habitat heterogeneity, island equilibrium, neutral). Robust pattern, contested mechanism.'},
  {tex:R`R_{0}=\frac{\beta}{\gamma},\qquad \frac{dI}{dt}=\beta SI-\gamma I;\ \ \text{herd immunity }1-\tfrac{1}{R_{0}}`, name:'SIR epidemiology', gloss:'Population ecology of pathogens. The most consequential piece of ecological modelling in public life, and a case where model assumptions (homogeneous mixing) became a public epistemological issue.'},
  {tex:R`\frac{dB}{dt}=\text{GPP}-R_{a}-R_{h}-E;\quad \text{trophic efficiency}\approx10\%`, name:'Energy flow & trophic structure', gloss:'~10% of energy passes between trophic levels, which is why food chains are short (4–5 links) — a thermodynamic constraint producing an ecological pattern.'},
  {tex:R`\text{alternative stable states; }\ \lambda_{\max}\to 0\ \Rightarrow\ \text{critical slowing down}`, name:'Regime shifts & early-warning signals', gloss:'Lakes, reefs and drylands can flip between states with hysteresis. Rising variance and autocorrelation as a bifurcation approaches give generic early warnings — a rare transportable result.'}
 ],
 concepts:[
  {t:'Niche', d:'Grinnellian (habitat requirements), Eltonian (functional role), Hutchinsonian (an n-dimensional hypervolume of conditions permitting persistence). Three concepts under one word, and the ambiguity has generated decades of cross-purposes argument.'},
  {t:'Density dependence & regulation', d:'Negative feedback on per-capita growth. Whether populations are generally regulated, and by what, was the Nicholson–Andrewartha debate and is not fully settled.'},
  {t:'Trophic cascade', d:'Predator effects propagating down food webs — wolves to elk to willows to beavers in Yellowstone. Strong in some systems, weak in others, and the contrast is itself an open research question.'},
  {t:'Stability, resilience, and their many meanings', d:'Local asymptotic stability, resilience (return rate), resistance, persistence, variability. May\'s 1972 result that complexity *destabilises* random model communities contradicted ecological intuition and set an agenda that is still running.'},
  {t:'Neutral theory (Hubbell 2001)', d:'Assume all individuals are demographically equivalent regardless of species; you still reproduce species-abundance distributions and species–area curves. A null model whose success is embarrassing for niche-based explanation — directly parallel to Kimura\'s neutral theory in genetics.'},
  {t:'Scale dependence', d:'Patterns and processes change qualitatively with grain and extent. There is no single natural scale, and results do not transport across scales. This is the central methodological difficulty of the field.'}
 ],
 results:[
  {n:'Island biogeography (1967)', s:'MacArthur & Wilson: species richness as an immigration–extinction equilibrium. Testable, tested (Simberloff\'s mangrove defaunation), and the theoretical basis of reserve design.'},
  {n:'Keystone species (Paine 1966)', s:'Removing *Pisaster* collapsed intertidal diversity. Experimental manipulation established that community structure depends disproportionately on particular species.'},
  {n:'Chaos from simple models (May 1976)', s:'Deterministic ecological models produce aperiodic dynamics — a major contribution from ecology to dynamical systems theory generally.'},
  {n:'Biodiversity–ecosystem function', s:'Diversity generally increases productivity and stability, via complementarity and selection effects. Established by long-running grassland experiments.'},
  {n:'Global biogeochemistry', s:'Quantified carbon, nitrogen and phosphorus cycles; humans now fix more N than all natural processes combined. Ecology as an Earth-system science.'}
 ],
 valid:{holds:'Qualitative understanding broadly; quantitative prediction in well-characterised, low-diversity or heavily-instrumented systems (fisheries, epidemics, managed forests).', breaks:'Quantitative prediction in diverse, open, non-stationary systems. Ecology has few exceptionless generalisations, strong context-dependence, and a serious external-validity problem: results rarely transport between systems, scales or eras.'},
 detail:{
  deriv:[
   {h:'What ecology inherits from below, and what it does not', b:'Inherited: thermodynamic constraints (10% trophic efficiency; metabolic scaling B ∝ M^{3/4}, which the metabolic theory of ecology turns into predictions about population density and life history); stoichiometric constraints (Redfield ratio C:N:P ≈ 106:16:1 in marine plankton, linking organismal chemistry to ocean biogeochemistry); and evolutionary constraints on what organisms can do. Not inherited: which species are present, which interactions matter, and what the community structure is. These are historical and contingent, so the general theory constrains without determining. Ecology is thus a science of *constrained contingency*, and its law-likeness is proportionally weak.'},
   {h:'Why ecology has no laws — and what it has instead', b:'Candidate laws (competitive exclusion, species–area, metabolic scaling) all have documented exceptions and contested mechanisms. Cooper, Mikkelson and others argue ecology instead has *model families* — sets of related idealised models used to explore possibilities and interpret particular systems (Levins\' trade-off between generality, realism and precision; Weisberg on modelling strategy). This is closer to how most of science outside physics actually operates, which makes ecology a better template for general philosophy of science than physics is — and a much worse one for anybody looking for the DN model.'}
  ],
  deeper:[
   {h:'Are ecosystems individuals?', b:'Clements treated communities as superorganisms with developmental trajectories; Gleason treated them as chance assemblages of independently-distributed species. Modern evidence largely favours Gleason — species ranges shifted individualistically during Pleistocene climate change, and "communities" reassemble differently in each interglacial. Yet ecosystem-level properties (nutrient cycling rates, resilience) are measurable and manageable. The question of whether ecological wholes are causally efficacious entities or bookkeeping aggregates bears directly on conservation policy: what exactly is being restored when an ecosystem is restored, if its Pleistocene composition was never a stable object?'},
   {h:'Prediction, policy, and values', b:'Ecology is asked for predictions under precisely the conditions where it is weakest: novel climates, novel species assemblages, no stationarity. This makes it a central case for the philosophy of science-in-policy — inductive risk (how much evidence before declaring a species endangered?), the role of values in setting error tolerances, and the legitimacy of expert judgement where models underdetermine outcomes. Ecology is where philosophy of science stops being about the structure of theories and starts being about acting under uncertainty.'}
  ]
 },
 phil:{
  stance:'The level at which the tidy picture of this atlas breaks down — and the honest endpoint of a tour that starts at the Planck scale. What ecology lacks in nomological structure it supplies in evidence about how science works when laws run out.',
  disputes:[
   'Are there ecological laws, or only model families and case-specific generalisations?',
   'Are communities and ecosystems real individuals or pragmatic aggregates? (Clements vs Gleason, and its policy consequences.)',
   'Neutral vs niche explanation of diversity patterns — and what it means that a null model fits so well.',
   'Inductive risk and the role of values in ecological science used for policy.',
   'Is the diversity–stability relationship a general truth, a system-specific pattern, or an artefact of how stability is defined?'
  ],
  read:['Cooper, *The Science of the Struggle for Existence*','Odenbaugh, "Ecological Modeling" (SEP)','Levins, "The Strategy of Model Building in Population Biology" (1966)','Sagoff, *The Economy of the Earth*','Mitchell, *Unsimple Truths*']
 },
 fig:'lv'
}
];
