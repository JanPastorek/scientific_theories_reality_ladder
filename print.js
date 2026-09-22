function pull(names){ const out=[]; for(const n of names){ let v=null; try{ v=eval(n); }catch(e){ v=null; } if(v) out.push(v); } return out; }
const THEORIES=[].concat(...pull(['PHYSICS','PHYSICS_B','PHYSICS_C','PHYSICS_D','CHEM','BIO','BIO_B','BIO_C','META2','META3','META4','META5','MIND','SOCIAL','SOCIAL_B']));
const RELS=[].concat(...pull(['RELATIONS','RELATIONS2','REL_EXTRA_P4','REL_EXTRA_B2','REL_EXTRA_B3','REL_EXTRA_M3','REL_EXTRA_M4','REL_EXTRA_M5','REL_EXTRA_S2']));
Object.assign(FIG, ...pull(['FIG_EXTRA_P4','FIG_EXTRA_B2','FIG_EXTRA_B3','FIG_EXTRA_M3','FIG_EXTRA_M4','FIG_EXTRA_M5','FIG_EXTRA_S2']));
Object.assign(FIGCAP, ...pull(['FIGCAP_EXTRA_P4','FIGCAP_EXTRA_B2','FIGCAP_EXTRA_B3','FIGCAP_EXTRA_M3','FIGCAP_EXTRA_M4','FIGCAP_EXTRA_M5','FIGCAP_EXTRA_S2']));
Object.assign(APP, ...pull(['APP_EXTRA_P4','APP_EXTRA_B2','APP_EXTRA_B3','APP_EXTRA_M3','APP_EXTRA_M4','APP_EXTRA_M5','APP_EXTRA_S2']));
const HIST=Object.assign({}, ...pull(['HIST_1','HIST_2','HIST_3','HIST_4','HIST_5','HIST_6','HIST_7','HIST_8','HIST_9','HIST_10','HIST_11','HIST_12','HIST_13','HIST_14','HIST_15','HIST_16','HIST_17','HIST_18','HIST_19','HIST_19B','HIST_20','HIST_21','HIST_22']));
const AX=Object.assign({}, ...pull(['AX_1','AX_2','AX_3','AX_4','AX_5','AX_6']));
THEORIES.forEach(t=>{ const a=AX[t.id]; if(!a) return; if(a.axioms&&!t.axioms)t.axioms=a.axioms; if(a.hyps&&!t.hyps)t.hyps=a.hyps; if(a.preds&&!t.preds)t.preds=a.preds; });
const TIER_OVERRIDE={info:9,prob:9,logic:9,comp:9,complexity:10,netsci:10,control:10,game:10,ml:10,earth:11,med:11,geol:11,sysneuro:12,cogsci:13,psych:13,ling:14,econ:15,socio:15,anthro:15,polisci:15};
THEORIES.forEach(t=>{ if(TIER_OVERRIDE[t.id]!==undefined) t.tier=TIER_OVERRIDE[t.id]; });
const BY=Object.fromEntries(THEORIES.map(t=>[t.id,t]));
const KIND_ASM={definition:'definition',empirical:'empirical',idealisation:'idealisation',auxiliary:'auxiliary hypothesis',contested:'contested'};
function chronBlock(h){return `<section><h3 class="sec-h o">How it was found</h3><div class="chron">${h.origin.map(o=>`<div><div class="yr">${esc(o.y)}</div><h4>${esc(o.t)}</h4><div class="who">${esc(o.who)}</div><p>${md(o.b)}</p></div>`).join('')}</div></section>`;}
function expBlock(h){return `<section><h3 class="sec-h o">The experiments</h3>${h.exps.map(e=>`<article class="exp"><header><h4>${esc(e.n)}</h4>${(e.who&&e.who!=='—')||(e.y&&e.y!=='—')?`<div class="cred">${[e.who,e.y].filter(x=>x&&x!=='—').map(esc).join(' · ')}</div>`:''}</header><div class="inner">${e.fig&&APP[e.fig]?`<figure>${APP[e.fig]()}</figure>`:''}<div class="row setup"><b>Apparatus &amp; procedure</b><p>${md(e.setup)}</p></div><div class="row meas"><b>What was measured</b><p>${md(e.meas)}</p></div><div class="row inf"><b>What was inferred</b><p>${md(e.infer)}</p></div><div class="row asm"><b>Assumptions &amp; controls</b><p>${md(e.assume)}</p></div></div></article>`).join('')}</section>`;}
function ledgerBlock(h){return `<section><h3 class="sec-h p">What is assumed</h3><div class="ledger">${h.assume.map(x=>`<div><span class="kind k-${x.k}">${esc(KIND_ASM[x.k]||x.k)}</span><div class="a">${md(x.a)}</div><p class="n">${md(x.n)}</p></div>`).join('')}</div></section>`;}
function notationBlock(h){return `<section><h3 class="sec-h t">Notation</h3><div class="notn">${h.notation.map(x=>`<div><div class="sym">\\(${x.s}\\)</div><div class="rd">${esc(x.r)}</div><p class="mn">${md(x.m)}</p><div class="dim">${esc(x.d)}</div></div>`).join('')}</div></section>`;}
function workedBlock(h){const w=h.worked;return `<section><h3 class="sec-h o">Worked example</h3><div class="worked"><h4>${esc(w.t)}</h4><ol>${w.steps.map(s=>`<li>${md(s)}</li>`).join('')}</ol><p class="ans">${md(w.a)}</p></div></section>`;}
const TIERS={0:'Candidate fundamental',1:'Fundamental frameworks',2:'Classical & non-relativistic limits',3:'Many-body, structure & cosmos',4:'Coarse-grained & continuum',5:'Chemical level',6:'Cellular chemistry & biophysics',7:'Molecular & organismal biology',8:'Populations & ecosystems',9:'Formal frameworks',10:'Complexity, networks & control',11:'Integrative sciences',12:'Brains & circuits',13:'Minds',14:'Language',15:'Societies'};
const KIND_HYP={core:'core',bridge:'bridge law',auxiliary:'auxiliary',heuristic:'heuristic',abandoned:'abandoned'};
const KIND_PRED={confirmed:'confirmed',open:'open',failed:'failed',retrodiction:'retrodiction',untestable:'untestable'};
function axiomBlock(t){if(!t.axioms||!t.axioms.length)return '';return `<section><h3 class="sec-h t">Axioms &amp; postulates</h3><div class="axm">${t.axioms.map(a=>`<div><div class="an">${esc(a.n)}</div><div class="as">\\(${a.s}\\)</div><p class="at">${md(a.t)}</p></div>`).join('')}</div></section>`;}
function hypBlock(t){if(!t.hyps||!t.hyps.length)return '';return `<section><h3 class="sec-h p">Hypotheses</h3><div class="hyp">${t.hyps.map(x=>`<div><span class="kind k-${x.k}">${esc(KIND_HYP[x.k]||x.k)}</span><div class="h">${md(x.h)}</div><p class="b">${md(x.b)}</p></div>`).join('')}</div></section>`;}
function predBlock(t){if(!t.preds||!t.preds.length)return '';return `<section><h3 class="sec-h o">Predictions &amp; their tests</h3><div class="prd">${t.preds.map(x=>`<div><span class="kind k-${x.st}">${esc(KIND_PRED[x.st]||x.st)}</span><div class="p">${md(x.p)}</div><div class="num">${x.num&&x.num!=='—'?'\\('+x.num+'\\)':'<span style="color:var(--ink3)">not quantitative</span>'}</div><p class="b">${md(x.b)}</p></div>`).join('')}</div></section>`;}
const KINDLAB={limit:'limit',singular:'singular limit',eft:'effective theory',coarse:'coarse-grain',instantiation:'instantiation',constitutive:'constitutive',contested:'contested',analogy:'formal analogy',upward:'upward influence'};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const md=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>');
const dm=t=>`\\[${t}\\]`;
const ORDER=THEORIES.slice().sort((a,b)=>a.tier-b.tier);
const NUM=Object.fromEntries(ORDER.map((t,i)=>[t.id,i+1]));

function rel(r){return `<details class="rel" open><summary>
  <span class="kind k-${r.kind}">${esc(KINDLAB[r.kind])}</span>
  <span class="ttl">${esc(r.t)}</span><span class="pm">\\(${r.param}\\)</span></summary>
  <div class="body"><p>${md(r.f)}</p><div class="eqbox">${dm(r.tex)}</div>
  <p class="phil"><b>Philosophically</b>${md(r.p)}</p></div></details>`;}

function sheet(t){
  const inn=RELS.filter(r=>r.b===t.id), out=RELS.filter(r=>r.a===t.id);
  const fig=FIG[t.fig]?FIG[t.fig]():'';
  const h=HIST[t.id];
  return `<article class="sheet">
  <div class="sheet-head">
    <div class="eyebrow"><span>Sheet ${NUM[t.id]} / ${ORDER.length}</span><span class="bar"></span>
      <span>${esc(t.dom==='meta'?'framework':t.dom)}</span><span class="bar"></span>
      <span>${esc(TIERS[t.tier])}</span><span class="bar"></span><span>${esc(t.status)}</span></div>
    <h2>${esc(t.n)}</h2><p class="aka">${md(t.aka)}</p><p class="lead">${md(t.one)}</p>
    <div class="meta-row"><span><b>formulated</b>${esc(t.years)}</span><span><b>length</b>${esc(t.scale.len)}</span>
      <span><b>energy</b>${esc(t.scale.en)}</span><span><b>relations</b>${inn.length} in · ${out.length} out</span></div>
  </div>
  <div class="two"><div><h4>What there is</h4><p>${md(t.onto)}</p></div>
    <div><h4>State space</h4><p>${md(t.state)}</p></div>
    <div><h4>Where it holds</h4><p>${md(t.valid.holds)}</p></div>
    <div><h4>Where it breaks</h4><p>${md(t.valid.breaks)}</p></div></div>
  ${axiomBlock(t)}
  <section><h3 class="sec-h t">Core equations</h3>${t.eqs.map(e=>
    `<div class="eq"><div class="nm">${esc(e.name)}</div><div class="eqbox">${dm(e.tex)}</div><p class="gl">${md(e.gloss)}</p></div>`).join('')}</section>
  ${h?notationBlock(h):''}
  ${fig?`<section><h3 class="sec-h t">Figure</h3><figure>${fig}<figcaption>${FIGCAP[t.fig] ? esc(FIGCAP[t.fig]) : esc(t.n)+" — schematic"}</figcaption></figure></section>`:''}
  <section><h3 class="sec-h t">Key concepts</h3><div class="defs">${t.concepts.map(c=>`<div><b>${esc(c.t)}</b><p>${md(c.d)}</p></div>`).join('')}</div></section>
  ${hypBlock(t)}
  ${h?chronBlock(h):''}
  ${h?expBlock(h):''}
  ${h?ledgerBlock(h):''}
  <section><h3 class="sec-h o">Main results</h3><ul class="res" style="padding:0;margin:0">${t.results.map(r=>`<li><span><b>${md(r.n)}</b> — ${md(r.s)}</span></li>`).join('')}</ul></section>
  ${predBlock(t)}
  ${h?workedBlock(h):''}
  ${inn.length?`<section><h3 class="sec-h o">Where this theory comes from</h3><div class="rels">${inn.map(rel).join('')}</div></section>`:''}
  ${out.length?`<section><h3 class="sec-h o">What comes out of it</h3><div class="rels">${out.map(rel).join('')}</div></section>`:''}
  <section><h3 class="sec-h o">Derivations &amp; deeper structure</h3>
    ${[...t.detail.deriv,...(t.detail.deeper||[])].map(d=>`<details class="deep" open><summary>${esc(d.h)}</summary><div class="deep-body"><p>${md(d.b)}</p></div></details>`).join('')}</section>
  <section><h3 class="sec-h p">Philosophical position</h3><div class="phil-block"><p>${md(t.phil.stance)}</p>
    <ul>${t.phil.disputes.map(d=>`<li>${md(d)}</li>`).join('')}</ul>
    <div class="read"><b>Further reading</b>${t.phil.read.map(r=>`<span>${md(r)}</span>`).join('')}</div></div></section>
  </article>`;
}

const tiers=[...new Set(ORDER.map(t=>t.tier))];
const cover=`<div class="cover">
  <p class="sub">CHEATSHEET ATLAS · PHYSICS → CHEMISTRY → BIOLOGY → MIND → SOCIETY</p>
  <h1>The Reduction Ladder</h1>
  <p>Fifty scientific theories, from candidate quantum gravity up to sociology, by way of biophysics, complexity and network science. Each sheet gives the theory's axioms and postulates, its hypotheses tagged by epistemic kind, its predictions marked as prediction or retrodiction, the core equations with a notation key, how the theory was actually found, the experiments with their apparatus and numbers, a ledger of what is assumed and with what status, a worked example, the domain of validity, the derivations, and the philosophical position. Between the sheets run a hundred and thirty-four explicit relations: which limits are smooth, which are singular, which are effective-field-theory decouplings, and which standard reduction claims do not survive inspection.</p>
  <div class="toc">${tiers.map(ti=>`<div><b>${esc(TIERS[ti])}</b></div>`+
    ORDER.filter(t=>t.tier===ti).map(t=>`<div>${String(NUM[t.id]).padStart(2,'0')} &nbsp; ${esc(t.n)}</div>`).join('')).join('')}</div>
  <div class="key"><b style="font-family:var(--f-ui);font-size:8pt;letter-spacing:.12em;text-transform:uppercase;display:block;margin-bottom:6px">Kinds of inter-theory relation</b>
  ${Object.entries(KINDLAB).map(([k,l])=>`<span><span class="kind k-${k}">${esc(l)}</span> ${RELS.filter(r=>r.kind===k).length}</span>`).join('')}
  <p style="margin-top:12px">A <em>limit</em> is a regular expansion in a small dimensionless parameter. A <em>singular limit</em> does not exist pointwise, and the interesting physics lives where it fails. An <em>effective theory</em> relation integrates out heavy degrees of freedom with a computable error. <em>Coarse-grain</em> averages over degrees of freedom. <em>Constitutive</em> is composition rather than derivation. <em>Contested</em> flags a textbook reduction claim the literature does not support. <em>Formal analogy</em> flags shared mathematics with no reduction relation at all. One relation runs <em>upward</em>.</p></div>
</div>`;

out.innerHTML = cover + ORDER.map(sheet).join('');
const ready=(MathJax.startup&&MathJax.startup.promise)||Promise.resolve();
ready.then(()=>MathJax.typesetPromise([out])).then(()=>{window.__ready=true;}).catch(e=>{window.__ready='err:'+e.message});
