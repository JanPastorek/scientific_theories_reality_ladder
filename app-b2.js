/* Apparatus drawings for the second biology batch. Colours come from CSS classes only. */
const APP_EXTRA_B2 = {

optrap: () => `<svg viewBox="0 0 420 160" class="dia" role="img" aria-label="Optical trap measuring kinesin stepping: a focused infrared laser holds a silica bead attached to a single kinesin molecule walking along a microtubule fixed to a coverslip, with the bead displacement recorded on a quadrant photodiode">
<rect class="mut2f" x="24" y="120" width="372" height="10"/>
<text class="tk mut" x="24" y="144">coverslip</text>
<rect class="acf" x="70" y="104" width="300" height="10" rx="4"/>
<text class="tk ac" x="76" y="100">microtubule (13 protofilaments, 8 nm repeat)</text>
${[80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360].map(x=>`<line class="mut2" x1="${x}" y1="104" x2="${x}" y2="114"/>`).join('')}
<path class="ocst2" d="M168 104 L 176 88 L 186 96 L 194 82"/>
<text class="tk oc" x="150" y="80" text-anchor="end">kinesin dimer</text>
<circle class="acf" cx="212" cy="66" r="18"/>
<text class="tk" x="212" y="70" text-anchor="middle">bead</text>
<path class="acst" d="M194 82 L 200 74"/>
<path class="plst2" d="M188 12 L 212 58 L 236 12"/>
<text class="tk pl" x="246" y="20">1064 nm trap</text>
<path class="ocst" d="M212 40 L 212 24" marker-end="url(#ar)"/>
<line class="ax" x1="258" y1="66" x2="330" y2="66"/>
<text class="tk mut" x="334" y="70">QPD</text>
<rect class="mut2f" x="334" y="56" width="20" height="20"/>
<text class="tk oc" x="24" y="30">8.0 ± 0.1 nm steps · stall ≈ 5–7 pN · one ATP per step</text>
<text class="tk mut" x="24" y="46">trap stiffness 0.02–0.1 pN/nm, calibrated from the bead's own Brownian spectrum</text>
</svg>`,

afmforce: () => `<svg viewBox="0 0 420 166" class="dia" role="img" aria-label="AFM force spectroscopy on a polyprotein: a cantilever tip picks up a chain of identical domains and pulls, producing a sawtooth force–extension trace as each domain unfolds in turn">
<rect class="mut2f" x="20" y="126" width="180" height="10"/>
<text class="tk mut" x="20" y="150">gold substrate</text>
<path class="acst2" d="M20 66 L 150 78"/>
<path class="acst2" d="M150 78 L 158 92"/>
<text class="tk ac" x="20" y="58">cantilever, k ≈ 50 pN/nm</text>
<path class="plst" d="M60 34 L 96 70"/><path class="plst" d="M96 70 L 132 34"/>
<text class="tk pl" x="136" y="32">laser + photodiode</text>
${[0,1,2,3,4].map(i=>`<circle class="ocf" cx="${158+i*2}" cy="${100+i*5}" r="5"/>`).join('')}
<path class="ocst" d="M168 124 L 168 132"/>
<text class="tk oc" x="176" y="118">polyprotein, 8 identical domains</text>
<line class="ax" x1="240" y1="118" x2="400" y2="118"/><line class="ax" x1="240" y1="118" x2="240" y2="34"/>
<text class="tk mut" x="400" y="134" text-anchor="end">extension (nm)</text>
<text class="tk mut" x="236" y="34" text-anchor="end">F</text>
<path class="ocst nofill" d="M240 118 C 252 118, 258 66, 264 62 L 266 112 C 280 112, 288 62, 294 58 L 296 110 C 310 110, 318 58, 324 54 L 326 108 C 340 108, 348 56, 354 52 L 356 106 C 372 106, 384 54, 392 46"/>
<text class="tk oc" x="240" y="152">each tooth: one domain unfolds, contour length jumps 28 nm</text>
<text class="tk mut" x="240" y="30">peaks at 150–250 pN, and the peak height depends on pull rate</text>
</svg>`,

patchsingle: () => `<svg viewBox="0 0 420 164" class="dia" role="img" aria-label="Single-channel patch clamp: a fire-polished glass pipette forms a gigaohm seal on a membrane patch containing one channel, and the amplifier records square current steps between closed and open levels">
<path class="acst2 nofill" d="M24 22 L 112 74 L 112 96 L 24 148"/>
<text class="tk ac" x="24" y="18">glass pipette, tip 1 μm</text>
<path class="ocst2 nofill" d="M112 74 C 126 78, 126 92, 112 96"/>
<text class="tk oc" x="132" y="70">membrane patch</text>
<rect class="acf" x="116" y="80" width="6" height="10"/>
<text class="tk mut" x="24" y="162">seal resistance &gt; 10 GΩ — without it the pA signal is buried in noise</text>
<circle class="mut2 nofill" cx="152" cy="42" r="13"/><text class="tk mut" x="152" y="46" text-anchor="middle">A</text>
<path class="mut2" d="M112 74 L 140 50"/>
<line class="ax" x1="196" y1="60" x2="400" y2="60"/>
<text class="tk mut" x="196" y="52">closed</text>
<line class="ax" x1="196" y1="112" x2="400" y2="112"/>
<text class="tk mut" x="196" y="126">open, 4 pA at −100 mV</text>
<path class="ocst nofill" d="M196 60 L 226 60 L 226 112 L 252 112 L 252 60 L 288 60 L 288 112 L 300 112 L 300 60 L 336 60 L 336 112 L 372 112 L 372 60 L 400 60"/>
<text class="tk oc" x="400" y="150" text-anchor="end">dwell times exponentially distributed · γ = 20 pS</text>
</svg>`,

tetherbact: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="Tethered cell experiment: a bacterium attached to a glass slide by a single sheared flagellum rotates its whole body, and the rotation is scored under a microscope as counterclockwise or clockwise runs and tumbles">
<rect class="mut2f" x="24" y="118" width="372" height="10"/>
<text class="tk mut" x="24" y="142">glass slide, anti-flagellin coated</text>
<circle class="acd" cx="150" cy="112" r="4"/>
<path class="ocst2 nofill" d="M150 112 C 146 100, 154 92, 150 82"/>
<ellipse class="acf" cx="150" cy="64" rx="32" ry="12" transform="rotate(-18 150 64)"/>
<text class="tk ac" x="150" y="40" text-anchor="middle">cell body, 2 μm</text>
<path class="ocst nofill" d="M196 78 a 34 34 0 1 1 -8 -32" marker-end="url(#ar)"/>
<text class="tk oc" x="206" y="52">≈ 6 Hz</text>
<line class="ax" x1="256" y1="96" x2="400" y2="96"/>
<text class="tk mut" x="256" y="112">time</text>
<path class="acst nofill" d="M256 78 L 292 78 L 292 96 L 300 96 L 300 78 L 344 78 L 344 96 L 350 96 L 350 78 L 400 78"/>
<text class="tk ac" x="256" y="70">CCW = run</text>
<text class="tk mut" x="400" y="70" text-anchor="end">CW = tumble</text>
<text class="tk oc" x="256" y="134">adding attractant lengthens runs; the cell adapts back to baseline in ~10 s</text>
</svg>`,

repress: () => `<svg viewBox="0 0 420 160" class="dia" role="img" aria-label="The repressilator: three repressor genes on a plasmid each shutting off the next in a cycle, with a GFP reporter, and the resulting oscillation in single-cell fluorescence">
<circle class="ax nofill" cx="96" cy="76" r="52"/>
<text class="tk mut" x="96" y="18" text-anchor="middle">low-copy plasmid</text>
${[[96,30,'TetR'],[142,104,'LacI'],[50,104,'λ cI']].map(([x,y,l])=>`<rect class="acf" x="${x-24}" y="${y-9}" width="48" height="18" rx="3"/><text class="lb" x="${x}" y="${y+4}" text-anchor="middle">${l}</text>`).join('')}
<path class="ocst" d="M116 42 L 134 88" marker-end="url(#ar)"/>
<path class="ocst" d="M120 108 L 74 108" marker-end="url(#ar)"/>
<path class="ocst" d="M58 88 L 78 44" marker-end="url(#ar)"/>
<text class="tk oc" x="96" y="80" text-anchor="middle">each represses</text>
<text class="tk oc" x="96" y="94" text-anchor="middle">the next</text>
<line class="ax" x1="208" y1="110" x2="400" y2="110"/><line class="ax" x1="208" y1="110" x2="208" y2="30"/>
<text class="tk mut" x="400" y="126" text-anchor="end">time (min)</text>
<text class="tk mut" x="204" y="30" text-anchor="end">GFP</text>
<path class="acst2 nofill" d="M208 96 C 222 40, 240 40, 254 96 C 268 148, 286 40, 300 96 C 314 148, 332 40, 346 96 C 358 140, 376 48, 392 78"/>
<text class="tk ac" x="208" y="146">period ≈ 150 min, longer than the 30 min division time</text>
<text class="tk mut" x="400" y="146" text-anchor="end">phase drifts between sister cells</text>
</svg>`,

bcdimage: () => `<svg viewBox="0 0 420 158" class="dia" role="img" aria-label="Measuring the Bicoid gradient: fixed Drosophila embryos stained with anti-Bicoid antibody are imaged by confocal microscopy, nuclear intensities are read along the anterior–posterior axis, and the profile is fitted to an exponential">
<ellipse class="acf2" cx="150" cy="58" rx="118" ry="34"/>
<ellipse class="ax nofill" cx="150" cy="58" rx="118" ry="34"/>
${(()=>{let o='';for(let i=0;i<40;i++){const a=i*2.399,rr=Math.sqrt((i+0.5)/40);const x=150+112*rr*Math.cos(a),y=58+30*rr*Math.sin(a);const op=Math.max(0.12,1-(x-32)/236);o+=`<circle class="ocd" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" opacity="${op.toFixed(2)}"/>`}return o})()}
<text class="tk ac" x="32" y="24">anterior</text><text class="tk mut" x="268" y="24" text-anchor="end">posterior</text>
<text class="tk mut" x="150" y="104" text-anchor="middle">embryo 500 μm long, ~6000 nuclei at cycle 14</text>
<line class="ax" x1="300" y1="104" x2="404" y2="104"/><line class="ax" x1="300" y1="104" x2="300" y2="28"/>
<text class="tk mut" x="404" y="120" text-anchor="end">x/L</text>
<path class="acst2 nofill" d="M300 32 C 322 66, 344 88, 404 98"/>
${[[300,32],[316,56],[332,72],[350,84],[372,92],[396,97]].map(([x,y])=>`<circle class="ocd" cx="${x}" cy="${y}" r="2.6"/>`).join('')}
<text class="tk oc" x="300" y="138">λ ≈ 100 μm, fitted over the anterior 40%</text>
<text class="tk mut" x="404" y="24" text-anchor="end">C(x)=C₀e^(−x/λ)</text>
</svg>`,

cuticle: () => `<svg viewBox="0 0 420 156" class="dia" role="img" aria-label="Drosophila larval cuticle preparation: wild-type denticle belts in a repeating segmental pattern beside a segment-polarity mutant in which every belt is mirror-duplicated">
<text class="lb" x="24" y="22">wild type</text>
<rect class="ax nofill" x="24" y="30" width="170" height="44" rx="10"/>
${[0,1,2,3,4,5].map(i=>`<g>${[0,1,2,3,4].map(j=>`<path class="ocst" d="M${36+i*26+j*3} 62 l 3 -8"/>`).join('')}</g>`).join('')}
<text class="tk mut" x="24" y="88">8 belts, each polarised the same way</text>
<text class="lb" x="234" y="22">segment-polarity mutant</text>
<rect class="ax nofill" x="234" y="30" width="170" height="44" rx="10"/>
${[0,1,2,3].map(i=>`<g>${[0,1,2,3].map(j=>`<path class="plst2" d="M${246+i*40+j*3} 62 l 3 -8"/>`).join('')}${[0,1,2,3].map(j=>`<path class="plst2" d="M${270+i*40+j*3} 54 l 3 8"/>`).join('')}</g>`).join('')}
<text class="tk pl" x="234" y="88">each belt mirrored about its own midline</text>
<text class="tk mut" x="24" y="116">Preparation: embryos dechorionated in bleach, mounted in Hoyer's medium, cleared overnight at 60 °C.</text>
<text class="tk oc" x="24" y="134">The screen read out pattern, not molecules: 15 loci from 27 000 mutagenised chromosomes.</text>
</svg>`

};
