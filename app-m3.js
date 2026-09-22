/* Apparatus figures for the probability sheet. Colours from CSS classes only. */
const APP_EXTRA_M3 = {

oscrep: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="The Open Science Collaboration replication protocol: original studies sampled from three journals, protocols agreed with original authors in advance, replications powered well above the originals, and the resulting shift in effect sizes">
<rect class="acf" x="14" y="20" width="96" height="26" rx="3"/>
<text class="lb" x="62" y="37" text-anchor="middle">100 studies</text>
<text class="tk mut" x="14" y="58">3 journals, 2008</text>
<path class="ocst" d="M112 33 L 140 33" marker-end="url(#ar)"/>
<rect class="ocf" x="142" y="20" width="110" height="26" rx="3"/>
<text class="lb" x="197" y="37" text-anchor="middle">protocol agreed</text>
<text class="tk mut" x="142" y="58">with original authors</text>
<path class="ocst" d="M254 33 L 282 33" marker-end="url(#ar)"/>
<rect class="acf" x="284" y="20" width="122" height="26" rx="3"/>
<text class="lb" x="345" y="37" text-anchor="middle">97 replications run</text>
<text class="tk mut" x="284" y="58">median power &gt; 0.9</text>
<line class="ax" x1="40" y1="122" x2="406" y2="122"/>
<text class="tk mut" x="40" y="138">effect size r</text>
<text class="tk mut" x="406" y="138" text-anchor="end">0.0 → 0.8</text>
${[0.11,0.18,0.22,0.27,0.3,0.34,0.37,0.4,0.43,0.47,0.5,0.55,0.6,0.66].map((v,i)=>`<circle class="acd" cx="${40+v*440}" cy="${100-((i%3)*7)}" r="3"/>`).join('')}
${[0.0,0.02,0.05,0.06,0.08,0.1,0.11,0.13,0.15,0.18,0.2,0.24,0.28,0.36].map((v,i)=>`<circle class="ocd" cx="${40+v*440}" cy="${118-((i%3)*7)}" r="3"/>`).join('')}
<text class="tk ac" x="330" y="96">original</text>
<text class="tk oc" x="180" y="112">replication</text>
<text class="tk pl" x="40" y="86">36 of 97 reached p &lt; 0.05 again; mean effect roughly halved</text>
</svg>`,

baserate: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="A base-rate tree for a screening test: out of ten thousand people with a one percent prevalence, a test with ninety percent sensitivity and ninety percent specificity produces far more false positives than true ones">
<rect class="mut2f" x="164" y="14" width="92" height="22" rx="3"/>
<text class="lb" x="210" y="29" text-anchor="middle">10 000 tested</text>
<path class="mut2" d="M196 38 L 100 62"/><path class="mut2" d="M224 38 L 320 62"/>
<rect class="acf" x="50" y="62" width="100" height="22" rx="3"/>
<text class="tk" x="100" y="77" text-anchor="middle">100 have it</text>
<rect class="ocf" x="270" y="62" width="100" height="22" rx="3"/>
<text class="tk" x="320" y="77" text-anchor="middle">9900 do not</text>
<path class="acst" d="M86 86 L 60 108"/><path class="acst" d="M114 86 L 140 108"/>
<path class="ocst" d="M306 86 L 280 108"/><path class="ocst" d="M334 86 L 360 108"/>
<text class="tk ac" x="56" y="122" text-anchor="middle">90 test +</text>
<text class="tk mut" x="142" y="122" text-anchor="middle">10 test −</text>
<text class="tk oc" x="276" y="122" text-anchor="middle">990 test +</text>
<text class="tk mut" x="362" y="122" text-anchor="middle">8910 test −</text>
<text class="tk pl" x="14" y="146">Of 1080 positives, 90 are real: P(disease | +) = 8.3%, not 90%.</text>
</svg>`,

calibcurve: () => `<svg viewBox="0 0 420 150" class="dia" role="img" aria-label="A calibration plot: forecast probability against observed frequency, with a well-calibrated forecaster near the diagonal and an overconfident one bowed away from it">
<line class="ax" x1="60" y1="122" x2="240" y2="122"/><line class="ax" x1="60" y1="122" x2="60" y2="20"/>
<line class="mut2" x1="60" y1="122" x2="240" y2="20"/>
<text class="tk mut" x="240" y="138" text-anchor="end">stated probability</text>
<text class="tk mut" x="56" y="20" text-anchor="end">observed</text>
${[[0,4],[20,26],[40,48],[60,60],[80,78],[100,96]].map(([a,b])=>`<circle class="acd" cx="${60+a*1.8}" cy="${122-b*1.02}" r="3.4"/>`).join('')}
<path class="acst nofill" d="M60 118 C 100 96, 140 72, 240 24"/>
${[[0,0],[20,8],[40,20],[60,34],[80,52],[100,72]].map(([a,b])=>`<circle class="pld" cx="${60+a*1.8}" cy="${122-b*1.02}" r="3.4"/>`).join('')}
<path class="plst nofill" d="M60 122 C 110 116, 170 96, 240 49"/>
<text class="tk ac" x="246" y="30">calibrated</text>
<text class="tk pl" x="246" y="54">overconfident</text>
<text class="tk mut" x="246" y="86">Brier score</text>
<text class="tk mut" x="246" y="100">= reliability</text>
<text class="tk mut" x="246" y="114">− resolution</text>
<text class="tk mut" x="246" y="128">+ uncertainty</text>
</svg>`,

strepto: () => `<svg viewBox="0 0 420 152" class="dia" role="img" aria-label="The 1948 MRC streptomycin trial: patients allocated by sealed envelopes from a random number series, to streptomycin plus bed rest or bed rest alone, with radiographs read blind by a panel">
<rect class="mut2f" x="150" y="14" width="120" height="24" rx="3"/>
<text class="lb" x="210" y="30" text-anchor="middle">107 patients enrolled</text>
<rect class="acst2 nofill" x="176" y="46" width="68" height="20" rx="3"/>
<text class="tk ac" x="210" y="60" text-anchor="middle">sealed envelope</text>
<path class="mut2" d="M190 66 L 116 84"/><path class="mut2" d="M230 66 L 304 84"/>
<rect class="acf" x="40" y="84" width="152" height="24" rx="3"/>
<text class="tk" x="116" y="100" text-anchor="middle">streptomycin + bed rest (55)</text>
<rect class="ocf" x="230" y="84" width="152" height="24" rx="3"/>
<text class="tk" x="306" y="100" text-anchor="middle">bed rest alone (52)</text>
<rect class="plst2 nofill" x="140" y="116" width="140" height="20" rx="3"/>
<text class="tk pl" x="210" y="130" text-anchor="middle">films read blind, 3 readers</text>
<path class="plst" d="M116 110 L 150 116"/><path class="plst" d="M306 110 L 272 116"/>
<text class="tk oc" x="14" y="148">Deaths at 6 months: 4/55 treated, 14/52 control. The randomisation, not the drug, was the innovation.</text>
</svg>`

};
