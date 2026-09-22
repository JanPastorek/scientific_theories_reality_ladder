function pull(names){ const out=[]; for(const n of names){ let v=null; try{ v=eval(n); }catch(e){ v=null; }
  if(v) out.push(v); } return out; }

const THEORIES = [].concat(...pull(['PHYSICS','PHYSICS_B','PHYSICS_C','PHYSICS_D','CHEM','BIO','BIO_B','BIO_C',
  'META2','META3','META4','META5','MIND','SOCIAL','SOCIAL_B']));
const RELS = [].concat(...pull(['RELATIONS','RELATIONS2','REL_EXTRA_P4','REL_EXTRA_B2','REL_EXTRA_B3',
  'REL_EXTRA_M3','REL_EXTRA_M4','REL_EXTRA_M5','REL_EXTRA_S2']));
Object.assign(FIG, ...pull(['FIG_EXTRA_P4','FIG_EXTRA_B2','FIG_EXTRA_B3','FIG_EXTRA_M3','FIG_EXTRA_M4','FIG_EXTRA_M5','FIG_EXTRA_S2']));
Object.assign(FIGCAP, ...pull(['FIGCAP_EXTRA_P4','FIGCAP_EXTRA_B2','FIGCAP_EXTRA_B3','FIGCAP_EXTRA_M3','FIGCAP_EXTRA_M4','FIGCAP_EXTRA_M5','FIGCAP_EXTRA_S2']));
Object.assign(APP, ...pull(['APP_EXTRA_P4','APP_EXTRA_B2','APP_EXTRA_B3','APP_EXTRA_M3','APP_EXTRA_M4','APP_EXTRA_M5','APP_EXTRA_S2']));
const HIST = Object.assign({}, ...pull(['HIST_1','HIST_2','HIST_3','HIST_4','HIST_5','HIST_6','HIST_7','HIST_8','HIST_9','HIST_10',
  'HIST_11','HIST_12','HIST_13','HIST_14','HIST_15','HIST_16','HIST_17','HIST_18','HIST_19','HIST_19B','HIST_20','HIST_21','HIST_22']));
const AX = Object.assign({}, ...pull(['AX_1','AX_2','AX_3','AX_4','AX_5','AX_6']));

/* axioms / hypotheses / predictions supplied out of band for the older sheets */
THEORIES.forEach(t=>{ const a=AX[t.id]; if(!a) return;
  if(a.axioms && !t.axioms) t.axioms=a.axioms;
  if(a.hyps   && !t.hyps)   t.hyps=a.hyps;
  if(a.preds  && !t.preds)  t.preds=a.preds; });

/* tier placement is decided here, not in the data files */
const TIER_OVERRIDE = {
  info:9, prob:9, logic:9, comp:9,
  complexity:10, netsci:10, control:10, game:10, ml:10,
  earth:11, med:11, geol:11,
  sysneuro:12, cogsci:13, psych:13, ling:14,
  econ:15, socio:15, anthro:15, polisci:15
};
THEORIES.forEach(t=>{ if(TIER_OVERRIDE[t.id]!==undefined) t.tier = TIER_OVERRIDE[t.id]; });

const BY = Object.fromEntries(THEORIES.map(t => [t.id, t]));

const TIERS = {
  0:'Candidate fundamental', 1:'Fundamental frameworks', 2:'Classical & non-relativistic limits',
  3:'Many-body, structure & cosmos', 4:'Coarse-grained & continuum', 5:'Chemical level',
  6:'Cellular chemistry & biophysics', 7:'Molecular & organismal biology', 8:'Populations & ecosystems',
  9:'Formal frameworks', 10:'Complexity, networks & control', 11:'Integrative sciences',
  12:'Brains & circuits', 13:'Minds', 14:'Language', 15:'Societies'
};

const ROWLAB = {0:'Candidate fundamental',1:'Fundamental frameworks',2:'Classical limits',3:'Structure & cosmos',
  4:'Continuum & statistical',5:'Chemical level',6:'Cellular chemistry',7:'Molecular biology',8:'Populations',
  9:'Formal frameworks',10:'Complexity & control',11:'Integrative sciences',12:'Brains & circuits',13:'Minds',14:'Language',15:'Societies'};

const KINDLAB = {limit:'limit', singular:'singular limit', eft:'effective theory', coarse:'coarse-grain',
  instantiation:'instantiation', constitutive:'constitutive', contested:'contested', analogy:'formal analogy', upward:'upward influence'};

const SHORT = {qg:'Quantum Gravity', rg:'Renormalization Group', cmt:'Condensed Matter', nuc:'Nuclear & Atomic',
  chemkin:'Chemical Kinetics', bond:'Structure & Bonding', biochem:'Biochemistry', em:'Classical E&M',
  hydro:'Fluid Mechanics', statmech:'Statistical Mechanics', genetics:'Transmission Genetics',
  info:'Information', earth:'Earth System', med:'Medicine', sysneuro:'Systems Neuro',
  cogsci:'Cognitive Science', psych:'Psychology', ling:'Linguistics', econ:'Economics', socio:'Sociology',
  cosmo:'Cosmology', astro:'Stellar Astrophysics', plasma:'Plasma & MHD', matsci:'Materials',
  biophys:'Biophysics', sysbio:'Systems Biology', devbio:'Development', immuno:'Immunology',
  physio:'Physiology', etho:'Ethology', prob:'Probability', logic:'Logic', comp:'Computability',
  complexity:'Complex Systems', netsci:'Network Science', control:'Control Theory', game:'Game Theory',
  ml:'Machine Learning', geol:'Geology', anthro:'Anthropology', polisci:'Political Science'};

const POS = {
  qg:{x:42,row:0},
  gr:{x:16,row:1}, qft:{x:44,row:1}, sm:{x:68,row:1}, rg:{x:92,row:1},
  sr:{x:6,row:2}, em:{x:26,row:2}, qm:{x:48,row:2},
  cosmo:{x:0,row:3}, astro:{x:6,row:3}, cm:{x:22,row:3}, statmech:{x:40,row:3}, cmt:{x:62,row:3}, nuc:{x:84,row:3},
  plasma:{x:0,row:4}, thermo:{x:20,row:4}, hydro:{x:40,row:4}, matsci:{x:60,row:4}, qchem:{x:84,row:4},
  chemkin:{x:62,row:5}, bond:{x:90,row:5},
  biophys:{x:40,row:6}, biochem:{x:74,row:6},
  sysbio:{x:0,row:7}, devbio:{x:14,row:7}, neuro:{x:32,row:7}, physio:{x:48,row:7}, immuno:{x:62,row:7}, molbio:{x:78,row:7}, genetics:{x:94,row:7},
  etho:{x:56,row:8}, evo:{x:76,row:8}, ecol:{x:94,row:8},
  info:{x:0,row:9}, prob:{x:22,row:9}, logic:{x:48,row:9}, comp:{x:72,row:9},
  complexity:{x:0,row:10}, netsci:{x:26,row:10}, control:{x:48,row:10}, game:{x:68,row:10}, ml:{x:88,row:10},
  earth:{x:20,row:11}, med:{x:54,row:11}, geol:{x:84,row:11},
  sysneuro:{x:30,row:12},
  cogsci:{x:26,row:13}, psych:{x:58,row:13},
  ling:{x:22,row:14},
  econ:{x:40,row:15}, socio:{x:66,row:15}, anthro:{x:88,row:15}, polisci:{x:96,row:15}
};
Object.keys(POS).forEach(id=>{ if(!BY[id]) delete POS[id]; });

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function renderMap(){
  const L=158, W=860, TOP=44, RH=66;
  const px = x => L + (x/100)*W;
  const py = r => TOP + r*RH;
  const boxes = {};
  for(const [id,p] of Object.entries(POS)){
    const label = SHORT[id] || BY[id].n;
    const w = Math.max(76, label.length*6.7 + 18);
    boxes[id] = {x:px(p.x), y:py(p.row), w, h:26, dom:BY[id].dom, label};
  }
  // resolve horizontal overlaps row by row, then keep everything inside the frame
  const GAP = 12, LEFT = 180, RIGHT = 1068;
  const rowsOf = {};
  for(const [id,p] of Object.entries(POS)){ (rowsOf[p.row] ||= []).push(id); }
  for(const ids of Object.values(rowsOf)){
    ids.sort((a,b)=>boxes[a].x - boxes[b].x);
    for(let i=1;i<ids.length;i++){
      const prev=boxes[ids[i-1]], cur=boxes[ids[i]];
      const need = prev.x + prev.w/2 + GAP + cur.w/2;
      if(cur.x < need) cur.x = need;
    }
    const last = boxes[ids[ids.length-1]];
    let over = (last.x + last.w/2) - RIGHT;
    if(over > 0){ for(let i=ids.length-1;i>=0;i--){
      const b=boxes[ids[i]]; b.x -= over;
      const min = (i===0) ? LEFT + b.w/2 : boxes[ids[i-1]].x + boxes[ids[i-1]].w/2 + GAP + b.w/2;
      if(b.x < min){ over = min - b.x; b.x = min; } else over = 0;
    }}
    ids.forEach(id=>{ const b=boxes[id]; b.x = Math.max(LEFT + b.w/2, b.x); });
  }
  const edge = (a,b) => {
    const A=boxes[a], B=boxes[b];
    if(B.y > A.y+8){ const y1=A.y+A.h/2, y2=B.y-B.h/2, m=(y1+y2)/2;
      return `M${A.x} ${y1} C ${A.x} ${m}, ${B.x} ${m}, ${B.x} ${y2}`; }
    if(B.y < A.y-8){ const y1=A.y-A.h/2, y2=B.y+B.h/2, m=(y1+y2)/2;
      return `M${A.x} ${y1} C ${A.x} ${m}, ${B.x} ${m}, ${B.x} ${y2}`; }
    const s = B.x>A.x?1:-1, x1=A.x+s*A.w/2, x2=B.x-s*B.w/2;
    return `M${x1} ${A.y} C ${x1+s*34} ${A.y-30}, ${x2-s*34} ${B.y-30}, ${x2} ${B.y}`;
  };
  const rows = [...new Set(Object.values(POS).map(p=>p.row))].sort((a,b)=>a-b);
  mapsvg.innerHTML =
    rows.map(r=>`<line x1="8" y1="${py(r)+16}" x2="1072" y2="${py(r)+16}" stroke="var(--rule)" stroke-width="1" stroke-dasharray="2 5"/>
      <text class="rowlab" x="8" y="${py(r)+4}">${esc(ROWLAB[r])}</text>`).join('')
    + RELS.map(r=>`<path class="edge e-${r.kind}" d="${edge(r.a,r.b)}" marker-end="url(#arm)"><title>${esc(r.t)} — ${esc(KINDLAB[r.kind])}</title></path>`).join('')
    + Object.entries(boxes).map(([id,b])=>`<g class="node ${b.dom}" data-go="${id}" tabindex="0" role="button" aria-label="${esc(BY[id].n)}">
        <rect x="${b.x-b.w/2}" y="${b.y-b.h/2}" width="${b.w}" height="${b.h}" rx="3"/>
        <text x="${b.x}" y="${b.y+4.5}">${esc(b.label)}</text><title>${esc(BY[id].one)}</title></g>`).join('');

  maplegend.innerHTML = Object.keys(KINDLAB).map(k=>{
    const st={limit:'solid',singular:'dashed',eft:'solid',coarse:'dotted',instantiation:'solid',
      constitutive:'solid',contested:'dashed',analogy:'dashed',upward:'dashed'}[k];
    const col={limit:'var(--teal)',instantiation:'var(--teal)',upward:'var(--teal)',eft:'var(--ochre)',coarse:'var(--ochre)',
      singular:'var(--plum)',contested:'var(--plum)',constitutive:'var(--rule2)',analogy:'var(--ink3)'}[k];
    const n = RELS.filter(r=>r.kind===k).length;
    return `<span><i style="border-top-style:${st};border-top-color:${col}"></i>${esc(KINDLAB[k])} · ${n}</span>`;
  }).join('');

}


function relCard(r){
  return `<details class="rel" open><summary>
      <span class="kind k-${r.kind}">${esc(KINDLAB[r.kind])}</span>
      <span class="ttl">${esc(r.t)}</span>
      <span class="pm">\\(${r.param}\\)</span></summary>
    <div class="body"><p>${md(r.f)}</p><div class="eqbox">\\[${r.tex}\\]</div>
      <p class="phil"><b>Philosophically</b>${md(r.p)}</p></div></details>`;
}
const md = s => esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>');
renderMap();
maplist.innerHTML = `<h3 class="sec-h o">All ${RELS.length} relations, in full</h3><div class="rels">${RELS.map(relCard).join('')}</div>`;
(function(){ const ready=(window.MathJax&&MathJax.startup&&MathJax.startup.promise)||Promise.resolve();
  ready.then(()=>MathJax.typesetPromise([document.body])).catch(()=>{}).then(()=>{window.__mapready=true;}); })();
