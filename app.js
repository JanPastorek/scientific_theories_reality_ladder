const G = (n) => (typeof window!=='undefined' && window[n]) || (typeof globalThis!=='undefined' && globalThis[n]) || null;
const _arr = n => { try { return eval(n); } catch(e){ return null; } };
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
const KIND_ASM = {definition:'definition', empirical:'empirical', idealisation:'idealisation', auxiliary:'auxiliary hypothesis', contested:'contested'};
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
const dm  = t => `\\[${t}\\]`;

let current = 'qg';
let filter = new Set(['physics','chemistry','biology','mind','social','integrative','meta']);

/* ---------------- rail ---------------- */
function renderRail(){
  const rows = [...new Set(THEORIES.map(t=>t.tier))].sort((a,b)=>a-b);
  rail.innerHTML = rows.map(tier=>{
    const items = THEORIES.filter(t=>t.tier===tier && filter.has(t.dom));
    if(!items.length) return '';
    return `<div class="tier"><div class="tier-h"><b>${esc(TIERS[tier])}</b><i></i></div><ul>${
      items.map(t=>`<li><button data-go="${t.id}" aria-current="${t.id===current}">
        <span class="dot d-${t.dom}"></span><span>${esc(t.n)}</span></button></li>`).join('')
    }</ul></div>`;
  }).join('');
}

/* ---------------- sheet ---------------- */
function relCard(r, dir){
  const other = dir==='out' ? r.b : r.a;
  return `<details class="rel"><summary>
      <span class="kind k-${r.kind}">${esc(KINDLAB[r.kind])}</span>
      <span class="ttl">${esc(r.t)}</span>
      <span class="pm">\\(${r.param}\\)</span></summary>
    <div class="body">
      <p>${md(r.f)}</p>
      <div class="eqbox">${dm(r.tex)}</div>
      <p class="phil"><b>Philosophically</b>${md(r.p)}</p>
      <p style="font-size:13.5px;font-family:var(--f-ui)"><a href="#${other}" data-go="${other}">Open ${esc(BY[other].n)} →</a></p>
    </div></details>`;
}


const KIND_HYP = {core:'core', bridge:'bridge law', auxiliary:'auxiliary', heuristic:'heuristic', abandoned:'abandoned'};
const KIND_PRED = {confirmed:'confirmed', open:'open', failed:'failed', retrodiction:'retrodiction', untestable:'untestable'};

function axiomBlock(t){
  if(!t.axioms || !t.axioms.length) return '';
  return `<section id="sec-ax"><h3 class="sec-h t">Axioms &amp; postulates</h3><div class="axm">${
    t.axioms.map(a=>`<div><div class="an">${esc(a.n)}</div>
      <div class="as">\\(${a.s}\\)</div><p class="at">${md(a.t)}</p></div>`).join('')}</div></section>`;
}
function hypBlock(t){
  if(!t.hyps || !t.hyps.length) return '';
  return `<section id="sec-hyp"><h3 class="sec-h p">Hypotheses</h3><div class="hyp">${
    t.hyps.map(x=>`<div><span class="kind k-${x.k}">${esc(KIND_HYP[x.k]||x.k)}</span>
      <div class="h">${md(x.h)}</div><p class="b">${md(x.b)}</p></div>`).join('')}</div></section>`;
}
function predBlock(t){
  if(!t.preds || !t.preds.length) return '';
  return `<section id="sec-pred"><h3 class="sec-h o">Predictions &amp; their tests</h3><div class="prd">${
    t.preds.map(x=>`<div><span class="kind k-${x.st}">${esc(KIND_PRED[x.st]||x.st)}</span>
      <div class="p">${md(x.p)}</div>
      <div class="num">${x.num && x.num!=='—' ? '\\('+x.num+'\\)' : '<span style="color:var(--ink3)">not quantitative</span>'}</div>
      <p class="b">${md(x.b)}</p></div>`).join('')}</div></section>`;
}

function chronBlock(h){
  return `<section><h3 class="sec-h o">How it was found</h3><div class="chron">${
    h.origin.map(o=>`<div><div class="yr">${esc(o.y)}</div><h4>${esc(o.t)}</h4>
      <div class="who">${esc(o.who)}</div><p>${md(o.b)}</p></div>`).join('')}</div></section>`;
}
function expBlock(h){
  return `<section><h3 class="sec-h o">The experiments</h3>${
    h.exps.map(e=>`<article class="exp">
      <header><h4>${esc(e.n)}</h4>${(e.who&&e.who!=='—')||(e.y&&e.y!=='—')?`<div class="cred">${[e.who,e.y].filter(x=>x&&x!=='—').map(esc).join(' · ')}</div>`:''}</header>
      <div class="inner">
        ${e.fig && APP[e.fig] ? `<figure>${APP[e.fig]()}</figure>` : ''}
        <div class="row setup"><b>Apparatus &amp; procedure</b><p>${md(e.setup)}</p></div>
        <div class="row meas"><b>What was measured</b><p>${md(e.meas)}</p></div>
        <div class="row inf"><b>What was inferred</b><p>${md(e.infer)}</p></div>
        <div class="row asm"><b>Assumptions &amp; controls</b><p>${md(e.assume)}</p></div>
      </div></article>`).join('')}</section>`;
}
function ledgerBlock(h){
  return `<section><h3 class="sec-h p">What is assumed</h3><div class="ledger">${
    h.assume.map(x=>`<div><span class="kind k-${x.k}">${esc(KIND_ASM[x.k]||x.k)}</span>
      <div class="a">${md(x.a)}</div><p class="n">${md(x.n)}</p></div>`).join('')}</div></section>`;
}
function notationBlock(h){
  return `<section><h3 class="sec-h t">Notation</h3><div class="notn">${
    h.notation.map(x=>`<div><div class="sym">\\(${x.s}\\)</div><div class="rd">${esc(x.r)}</div>
      <p class="mn">${md(x.m)}</p><div class="dim">${esc(x.d)}</div></div>`).join('')}</div></section>`;
}
function workedBlock(h){
  const w=h.worked;
  return `<section><h3 class="sec-h o">Worked example</h3><div class="worked">
    <h4>${esc(w.t)}</h4><ol>${w.steps.map(s=>`<li>${md(s)}</li>`).join('')}</ol>
    <p class="ans">${md(w.a)}</p></div></section>`;
}

function renderSheet(id){
  const t = BY[id]; if(!t) return;
  current = id;
  const inn  = RELS.filter(r=>r.b===id);
  const out  = RELS.filter(r=>r.a===id);
  const fig  = FIG[t.fig] ? FIG[t.fig]() : '';
  const h    = HIST[id];

  sheet.innerHTML = `
  <div class="sheet-head">
    <div class="eyebrow">
      <span class="dot d-${t.dom}"></span><span>${esc(t.dom==='meta'?'framework':t.dom)}</span><span class="bar"></span>
      <span>${esc(TIERS[t.tier])}</span><span class="bar"></span><span>${esc(t.status)}</span>
    </div>
    <h2>${esc(t.n)}</h2>
    <p class="aka">${md(t.aka)}</p>
    <p class="lead">${md(t.one)}</p>
    <div class="meta-row">
      <span><b>formulated</b>${esc(t.years)}</span>
      <span><b>length</b>${esc(t.scale.len)}</span>
      <span><b>energy</b>${esc(t.scale.en)}</span>
      <span><b>relations</b>${inn.length} in · ${out.length} out</span>
      ${h?`<span><b>experiments</b>${h.exps.length}</span><span><b>assumptions</b>${h.assume.length}</span>`:''}
    </div>
  </div>

  <div class="two">
    <div><h4>What there is</h4><p>${md(t.onto)}</p></div>
    <div><h4>State space</h4><p>${md(t.state)}</p></div>
    <div><h4>Where it holds</h4><p>${md(t.valid.holds)}</p></div>
    <div><h4>Where it breaks</h4><p>${md(t.valid.breaks)}</p></div>
  </div>

  ${axiomBlock(t)}

  <section>
    <h3 class="sec-h t">Core equations</h3>
    ${t.eqs.map(e=>`<div class="eq"><div class="nm">${esc(e.name)}</div>
      <div class="eqbox">${dm(e.tex)}</div><p class="gl">${md(e.gloss)}</p></div>`).join('')}
  </section>

  ${h?notationBlock(h):''}

  ${fig?`<section><h3 class="sec-h t">Figure</h3><figure>${fig}
    <figcaption>${FIGCAP[t.fig] ? esc(FIGCAP[t.fig]) : esc(t.n)+" — schematic"}</figcaption></figure></section>`:''}

  <section>
    <h3 class="sec-h t">Key concepts</h3>
    <div class="defs">${t.concepts.map(c=>`<div><b>${esc(c.t)}</b><p>${md(c.d)}</p></div>`).join('')}</div>
  </section>

  ${hypBlock(t)}

  ${h?chronBlock(h):''}
  ${h?expBlock(h):''}
  ${h?ledgerBlock(h):''}

  <section>
    <h3 class="sec-h o">Main results</h3>
    <ul class="res" style="padding:0;margin:0">${t.results.map(r=>`<li><span><b>${md(r.n)}</b> — ${md(r.s)}</span></li>`).join('')}</ul>
  </section>

  ${predBlock(t)}

  ${h?workedBlock(h):''}

  ${inn.length?`<section><h3 class="sec-h o">Where this theory comes from</h3>
    <div class="rels">${inn.map(r=>relCard(r,'in')).join('')}</div></section>`:''}

  ${out.length?`<section><h3 class="sec-h o">What comes out of it</h3>
    <div class="rels">${out.map(r=>relCard(r,'out')).join('')}</div></section>`:''}

  <section>
    <h3 class="sec-h o">Derivations &amp; deeper structure</h3>
    ${t.detail.deriv.map(d=>`<details class="deep"><summary>${esc(d.h)}</summary>
      <div class="deep-body"><p>${md(d.b)}</p></div></details>`).join('')}
    ${(t.detail.deeper||[]).map(d=>`<details class="deep"><summary>${esc(d.h)}</summary>
      <div class="deep-body"><p>${md(d.b)}</p></div></details>`).join('')}
  </section>

  <section>
    <h3 class="sec-h p">Philosophical position</h3>
    <div class="phil-block">
      <p>${md(t.phil.stance)}</p>
      <ul>${t.phil.disputes.map(d=>`<li>${md(d)}</li>`).join('')}</ul>
      <div class="read"><b>Further reading</b>${t.phil.read.map(r=>`<span>${md(r)}</span>`).join('')}</div>
    </div>
  </section>`;

  renderRail();
  typeset(sheet);
  window.scrollTo({top:0,behavior:'instant'});
  try{ history.replaceState(null,'','#'+id); }catch(e){}
}

/* very small markdown: *emphasis* and **strong** */
function md(s){
  return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>');
}

/* ---------------- map ---------------- */
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

  maplist.innerHTML = `<h3 class="sec-h o">All ${RELS.length} relations</h3><div class="rels">${
    RELS.map(r=>relCard(r,'out')).join('')}</div>`;
  typeset(mapsvg.parentElement.parentElement);
}

/* ---------------- plumbing ---------------- */
function typeset(el){
  try{
    if(!window.MathJax || typeof MathJax.typesetPromise !== 'function') return;
    const ready = (MathJax.startup && MathJax.startup.promise) || Promise.resolve();
    ready.then(()=>MathJax.typesetPromise([el])).catch(()=>{});
  }catch(e){}
}

filters.innerHTML = [['physics','Physics'],['chemistry','Chemistry'],['biology','Biology'],['mind','Mind'],['social','Social'],['integrative','Integrative'],['meta','Framework']]
  .map(([k,l])=>`<button class="chip" data-f="${k}" aria-pressed="true">${l}</button>`).join('');

document.addEventListener('click', e=>{
  const go = e.target.closest('[data-go]');
  if(go){ e.preventDefault(); showSheets(); renderSheet(go.dataset.go); return; }
  const f = e.target.closest('[data-f]');
  if(f){ const k=f.dataset.f, on=f.getAttribute('aria-pressed')==='true';
    if(on && filter.size>1){ filter.delete(k); f.setAttribute('aria-pressed','false'); }
    else { filter.add(k); f.setAttribute('aria-pressed','true'); }
    renderRail(); return; }
});
mapsvg.addEventListener('keydown', e=>{
  if((e.key==='Enter'||e.key===' ') && e.target.closest('[data-go]')){
    e.preventDefault(); showSheets(); renderSheet(e.target.closest('[data-go]').dataset.go); }
});

function showSheets(){ tabSheets.setAttribute('aria-selected','true'); tabMap.setAttribute('aria-selected','false');
  document.getElementById('view-sheets').hidden=false; document.getElementById('view-map').hidden=true; }
const tabSheets=document.getElementById('tab-sheets'), tabMap=document.getElementById('tab-map');
tabSheets.onclick = showSheets;
tabMap.onclick = ()=>{ tabMap.setAttribute('aria-selected','true'); tabSheets.setAttribute('aria-selected','false');
  document.getElementById('view-sheets').hidden=true; document.getElementById('view-map').hidden=false;
  window.scrollTo({top:0,behavior:'instant'}); };

document.getElementById('expandall').onclick = ()=>{
  const root = document.getElementById('view-map').hidden ? sheet : document.getElementById('view-map');
  const ds=[...root.querySelectorAll('details')]; const anyClosed = ds.some(d=>!d.open);
  ds.forEach(d=>d.open=anyClosed);
};
document.getElementById('themebtn').onclick = ()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur==='dark' ? 'light' : cur==='light' ? null : 'dark';
  if(next) document.documentElement.setAttribute('data-theme',next);
  else document.documentElement.removeAttribute('data-theme');
  try{ next ? localStorage.setItem('rl-theme',next) : localStorage.removeItem('rl-theme'); }catch(e){}
};
try{ const s=localStorage.getItem('rl-theme'); if(s) document.documentElement.setAttribute('data-theme',s); }catch(e){}

const start = (location.hash||'').slice(1);
renderRail();
renderSheet(BY[start] ? start : 'qg');
renderMap();

/* ---------------- search ---------------- */
let IDX = null;
function buildIndex(){
  if(IDX) return IDX;
  const rows = [];
  const push = (id, kind, title, sub, extra) =>
    rows.push({id, kind, title, sub, hay:((title||'')+' '+(sub||'')+' '+(extra||'')).toLowerCase()});

  THEORIES.forEach(t=>{
    push(t.id,'theory',t.n,t.aka,[t.one,t.onto,t.state,t.years,TIERS[t.tier],t.status].join(' '));
    (t.concepts||[]).forEach(c=>push(t.id,'concept',c.t,t.n,c.d));
    (t.results||[]).forEach(r=>push(t.id,'result',r.n,t.n,r.s));
    (t.eqs||[]).forEach(e=>push(t.id,'equation',e.name,t.n,e.gloss+' '+e.tex));
    (t.axioms||[]).forEach(a=>push(t.id,'axiom',a.n,t.n,a.s+' '+a.t));
    (t.hyps||[]).forEach(x=>push(t.id,'hypothesis',x.h,t.n+' · '+(KIND_HYP[x.k]||x.k),x.b));
    (t.preds||[]).forEach(x=>push(t.id,'prediction',x.p,t.n+' · '+(KIND_PRED[x.st]||x.st),x.b+' '+x.num));
    ((t.detail&&t.detail.deriv)||[]).forEach(d=>push(t.id,'derivation',d.h,t.n,d.b));
    ((t.detail&&t.detail.deeper)||[]).forEach(d=>push(t.id,'derivation',d.h,t.n,d.b));
    (t.phil&&t.phil.disputes||[]).forEach(d=>push(t.id,'dispute',d.length>90?d.slice(0,88)+'…':d,t.n,d));
    (t.phil&&t.phil.read||[]).forEach(r=>push(t.id,'reading',r,t.n,r));
    const h = HIST[t.id]; if(!h) return;
    (h.origin||[]).forEach(o=>push(t.id,'history',o.t,t.n+' · '+o.who+' · '+o.y,o.b));
    (h.exps||[]).forEach(e=>push(t.id,'experiment',e.n,t.n+' · '+[e.who,e.y].filter(x=>x&&x!=='—').join(' · '),
      [e.setup,e.meas,e.infer,e.assume].join(' ')));
    (h.assume||[]).forEach(a=>push(t.id,'assumption',a.a.length>90?a.a.slice(0,88)+'…':a.a,t.n+' · '+(KIND_ASM[a.k]||a.k),a.n));
    (h.notation||[]).forEach(n=>push(t.id,'notation',n.r,t.n+' · '+n.d,n.m+' '+n.s));
    if(h.worked) push(t.id,'worked example',h.worked.t,t.n,h.worked.steps.join(' ')+' '+h.worked.a);
  });
  RELS.forEach(r=>push(r.a,'relation',r.t,KINDLAB[r.kind],r.f+' '+r.p+' '+r.tex));
  IDX = rows;
  return IDX;
}
const KINDW = {theory:0, relation:1, concept:2, experiment:2, axiom:2, hypothesis:2, prediction:2,
  equation:3, result:3, history:3, assumption:4, derivation:4, dispute:4, notation:5, 'worked example':4, reading:6};

function search(q){
  q = q.trim().toLowerCase();
  if(q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const out = [];
  for(const r of buildIndex()){
    let score = 0, ok = true;
    for(const t of terms){
      const i = r.hay.indexOf(t);
      if(i < 0){ ok = false; break; }
      const ti = r.title.toLowerCase().indexOf(t);
      score += ti === 0 ? 40 : ti > 0 ? 22 : 6;
      if(i === 0) score += 6;
    }
    if(!ok) continue;
    score -= (KINDW[r.kind] ?? 4) * 3;
    out.push({r, score});
  }
  out.sort((a,b)=> b.score - a.score || a.r.title.length - b.r.title.length);
  return out.slice(0, 40).map(x=>x.r);
}
function hl(text, q){
  const terms = q.trim().toLowerCase().split(/\s+/).filter(t=>t.length>1);
  let h = esc(text);
  terms.forEach(t=>{
    h = h.replace(new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>');
  });
  return h;
}
const qEl = document.getElementById('q'), resEl = document.getElementById('results');
let sel = -1, lastRows = [];
function renderResults(rows, q){
  lastRows = rows; sel = -1;
  if(!rows.length){ resEl.innerHTML = '<div class="none">Nothing matches that.</div>'; resEl.hidden=false; return; }
  let html = '', lastKind = null;
  rows.forEach((r,i)=>{
    if(r.kind !== lastKind){ html += `<div class="rgrp">${esc(r.kind)}</div>`; lastKind = r.kind; }
    html += `<button data-i="${i}" data-go="${r.id}"><span class="rt">${hl(r.title,q)}</span>
      <span class="rs">${hl(r.sub||BY[r.id].n, q)}</span></button>`;
  });
  resEl.innerHTML = html; resEl.hidden = false;
}
function closeResults(){ resEl.hidden = true; sel = -1; }
if(qEl){
  qEl.addEventListener('input', ()=>{
    const q = qEl.value;
    if(q.trim().length < 2){ closeResults(); return; }
    renderResults(search(q), q);
  });
  qEl.addEventListener('keydown', e=>{
    if(e.key === 'Escape'){ qEl.value=''; closeResults(); qEl.blur(); return; }
    if(resEl.hidden) return;
    const btns = [...resEl.querySelectorAll('button')];
    if(!btns.length) return;
    if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
      e.preventDefault();
      sel = e.key === 'ArrowDown' ? Math.min(sel+1, btns.length-1) : Math.max(sel-1, 0);
      btns.forEach(b=>b.classList.remove('sel'));
      btns[sel].classList.add('sel'); btns[sel].scrollIntoView({block:'nearest'});
    } else if(e.key === 'Enter'){
      e.preventDefault();
      (btns[sel] || btns[0]).click();
    }
  });
  qEl.addEventListener('focus', ()=>{ if(qEl.value.trim().length>1) renderResults(search(qEl.value), qEl.value); });
  document.addEventListener('click', e=>{ if(!e.target.closest('.srchbox')) closeResults(); });
  document.addEventListener('keydown', e=>{
    if(e.key === '/' && document.activeElement !== qEl && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)){
      e.preventDefault(); qEl.focus(); qEl.select();
    }
  });
  resEl.addEventListener('click', ()=>{ closeResults(); qEl.blur(); });
}
