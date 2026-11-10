const PLAYERS = [
  {id:'messi',name:'Лионель Месси',short:'МЕССИ',rating:94,pos:'RW',club:'Интер Майами',country:'АРГ',kind:'legend',color:'#75b9ee',dark:'#172b51',stats:[89,92,94,97,35,65]},
  {id:'ronaldo',name:'Криштиану Роналду',short:'РОНАЛДУ',rating:93,pos:'ST',club:'Аль-Наср',country:'ПОР',kind:'legend',color:'#f5d276',dark:'#70451e',stats:[84,94,82,88,36,77]},
  {id:'pele',name:'Пеле',short:'ПЕЛЕ',rating:96,pos:'CF',club:'Легенда · Сантос',country:'БРА',kind:'legend',color:'#ffcf66',dark:'#264b36',stats:[95,96,88,95,58,78]},
  {id:'maradona',name:'Диего Марадона',short:'МАРАДОНА',rating:95,pos:'CAM',club:'Легенда · Наполи',country:'АРГ',kind:'legend',color:'#ffcf66',dark:'#183e66',stats:[89,92,92,99,42,76]},
  {id:'zidane',name:'Зинедин Зидан',short:'ЗИДАН',rating:94,pos:'CAM',club:'Легенда · Реал Мадрид',country:'ФРА',kind:'legend',color:'#ffcf66',dark:'#242a39',stats:[82,86,94,93,65,80]},
  {id:'ronaldinho',name:'Роналдиньо',short:'РОНАЛДИНЬО',rating:93,pos:'LW',club:'Легенда · Барселона',country:'БРА',kind:'legend',color:'#ffcf66',dark:'#183e66',stats:[88,88,90,98,35,69]},
  {id:'mbappe',name:'Килиан Мбаппе',short:'МБАППЕ',rating:92,pos:'ST',club:'Реал Мадрид',country:'ФРА',kind:'star',color:'#8d76ed',dark:'#17223f',stats:[97,90,80,92,36,78]},
  {id:'haaland',name:'Эрлинг Холанд',short:'ХОЛАНД',rating:91,pos:'ST',club:'Манчестер Сити',country:'НОР',kind:'star',color:'#8d76ed',dark:'#243eaa',stats:[89,94,66,80,45,88]},
  {id:'yamal',name:'Ламин Ямаль',short:'ЯМАЛЬ',rating:89,pos:'RW',club:'Барселона',country:'ИСП',kind:'star',color:'#8d76ed',dark:'#172a60',stats:[90,82,83,91,28,58]},
  {id:'bellingham',name:'Джуд Беллингем',short:'БЕЛЛИНГЕМ',rating:90,pos:'CAM',club:'Реал Мадрид',country:'АНГ',kind:'star',color:'#8d76ed',dark:'#6b4c29',stats:[81,86,84,88,78,87]},
  {id:'vinicius',name:'Винисиус Жуниор',short:'ВИНИСИУС',rating:90,pos:'LW',club:'Реал Мадрид',country:'БРА',kind:'star',color:'#8d76ed',dark:'#704a24',stats:[95,84,79,94,29,68]},
  {id:'salah',name:'Мохамед Салах',short:'САЛАХ',rating:90,pos:'RW',club:'Ливерпуль',country:'ЕГИ',kind:'star',color:'#8d76ed',dark:'#a32b31',stats:[89,89,82,90,45,75]},
  {id:'kane',name:'Гарри Кейн',short:'КЕЙН',rating:90,pos:'ST',club:'Бавария',country:'АНГ',kind:'star',color:'#8d76ed',dark:'#a61c2b',stats:[69,93,85,83,49,82]},
  {id:'saka',name:'Букайо Сака',short:'САКА',rating:88,pos:'RW',club:'Арсенал',country:'АНГ',kind:'star',color:'#8d76ed',dark:'#b92f39',stats:[89,83,78,89,56,70]},
  {id:'lautaro',name:'Лаутаро Мартинес',short:'ЛАУТАРО',rating:88,pos:'ST',club:'Интер',country:'АРГ',kind:'star',color:'#8d76ed',dark:'#172e4b',stats:[83,88,75,85,43,84]},
  {id:'odegaard',name:'Мартин Эдегор',short:'ЭДЕГОР',rating:87,pos:'CAM',club:'Арсенал',country:'НОР',kind:'gold',color:'#c0a76b',dark:'#ad2935',stats:[72,82,89,88,65,67]},
  {id:'rodri',name:'Родри',short:'РОДРИ',rating:89,pos:'CDM',club:'Манчестер Сити',country:'ИСП',kind:'gold',color:'#c0a76b',dark:'#2444a0',stats:[66,73,87,81,86,85]},
  {id:'modric',name:'Лука Модрич',short:'МОДРИЧ',rating:87,pos:'CM',club:'Милан',country:'ХОР',kind:'gold',color:'#c0a76b',dark:'#ba202e',stats:[72,74,89,87,70,65]},
  {id:'vanDijk',name:'Вирджил ван Дейк',short:'ВАН ДЕЙК',rating:89,pos:'CB',club:'Ливерпуль',country:'НИД',kind:'gold',color:'#c0a76b',dark:'#ae2830',stats:[75,60,71,72,90,86]},
  {id:'courtois',name:'Тибо Куртуа',short:'КУРТУА',rating:89,pos:'GK',club:'Реал Мадрид',country:'БЕЛ',kind:'gold',color:'#c0a76b',dark:'#314e35',stats:[85,89,76,90,52,88]},
  {id:'pedri',name:'Педри',short:'ПЕДРИ',rating:86,pos:'CM',club:'Барселона',country:'ИСП',kind:'gold',color:'#c0a76b',dark:'#172b65',stats:[78,70,86,89,68,65]},
  {id:'griezmann',name:'Антуан Гризманн',short:'ГРИЗМАНН',rating:87,pos:'CF',club:'Атлетико Мадрид',country:'ФРА',kind:'gold',color:'#c0a76b',dark:'#aa2531',stats:[81,86,86,87,54,75]},
  {id:'foden',name:'Фил Фоден',short:'ФОДЕН',rating:86,pos:'CAM',club:'Манчестер Сити',country:'АНГ',kind:'gold',color:'#c0a76b',dark:'#2244a2',stats:[83,82,84,89,48,62]},
  {id:'son',name:'Сон Хын Мин',short:'СОН',rating:86,pos:'LW',club:'Лос-Анджелес',country:'КОР',kind:'gold',color:'#c0a76b',dark:'#252a56',stats:[88,87,80,86,43,70]},
  {id:'alisson',name:'Алиссон Бекер',short:'АЛИССОН',rating:88,pos:'GK',club:'Ливерпуль',country:'БРА',kind:'gold',color:'#c0a76b',dark:'#5d7635',stats:[86,88,80,91,54,86]}
];
const SAVE_KEY = 'gol-legends-save-v1';
const freshState = () => ({coins:1250,inventory:[],squad:[],packs:0,claimed:[],trainingUsed:false});
let state;
try { state = {...freshState(), ...JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')}; } catch { state = freshState(); }
state.inventory = Array.isArray(state.inventory) ? state.inventory : [];
state.squad = Array.isArray(state.squad) ? state.squad : [];
state.claimed = Array.isArray(state.claimed) ? state.claimed : [];
let activeFilter = 'all';
let pendingCards = [];
let toastTimer;
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const fmt = n => Number(n).toLocaleString('ru-RU');
function save(){localStorage.setItem(SAVE_KEY,JSON.stringify(state));renderAll();}
function player(id){return PLAYERS.find(p=>p.id===id);}
function ownedCount(id){return state.inventory.filter(c=>c.id===id).length;}
function uniqueCount(){return new Set(state.inventory.map(c=>c.id)).size;}
function notify(text){const t=$('#toast');t.textContent=text;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2500);}
function cardMarkup(p, extraClass='', instance=''){
 const rarity = p.kind === 'legend' ? 'card-legend' : p.kind === 'star' ? 'card-rare' : 'card-common';
 const kit = p.dark || '#203a2e';
 return `<article class="player-card ${rarity} ${extraClass}" style="--kit:${p.color};--kit-dark:${kit}" data-id="${p.id}" ${instance ? `data-instance="${instance}"` : ''} aria-label="${p.name}, ${p.rating} баллов">
  <div class="pc-tag">${p.kind==='legend'?'ЛЕГЕНДА':p.kind==='star'?'ЗВЕЗДА':'ЗОЛОТО'}</div><div class="pc-top"><span class="pc-rating">${p.rating}</span><span class="pc-pos">${p.pos}</span></div>
  <div class="player-art"><div class="player-silhouette"><i class="head"></i><i class="hair"></i><i class="body"></i><span class="number">${p.country==='АРГ'?'10':p.country==='ПОР'?'7':p.country==='БРА'?'11':'9'}</span></div></div>
  <div class="pc-name">${p.short}</div><div class="pc-club">${p.club} · ${p.country}</div><div class="pc-footer"><span>СКОРОСТЬ</span><strong>${p.stats[0]}</strong><span>УДАР</span><strong>${p.stats[1]}</strong></div></article>`;
}
function renderAll(){
 $('#coinBalance').textContent=fmt(state.coins);
 $('#squadCount').textContent=state.squad.length;
 const avg=state.squad.length?Math.round(state.squad.reduce((sum,id)=>sum+(player(id)?.rating||0),0)/state.squad.length):null;
 $('#teamRating').textContent=avg||'—'; $('#squadRating').textContent=avg||'—';
 $('#collectionTotal').textContent=String(state.inventory.length).padStart(2,'0');
 $('#filterAll').textContent=state.inventory.length;
 const progress=Math.min(uniqueCount()/10*100,100);$('#sideProgress').style.width=`${progress}%`;
 updateMissionSummary(); renderRecent(); renderCollection(); renderSquad(); renderChallenges();
}
function missionProgress(){return {open:state.packs>0?1:0,collect:Math.min(uniqueCount(),5),squad:Math.min(state.squad.length,5)};}
function updateMissionSummary(){
 const m=missionProgress();$('#missionOpenProgress').style.width=`${m.open*100}%`;$('#missionCollectProgress').style.width=`${m.collect/5*100}%`;
 const openDone=m.open>=1;const collectDone=m.collect>=5;
 $('#missionOpenCheck').textContent=openDone?'✓':'○';$('#missionCollectCheck').textContent=collectDone?'✓':'○';
 $('#missionOpenCheck').classList.toggle('completed',openDone);$('#missionCollectCheck').classList.toggle('completed',collectDone);
}
function renderRecent(){
 const host=$('#recentList');if(!state.inventory.length){host.innerHTML='<div class="empty-state"><span>✦</span><p>Пока пусто. Твоя первая звезда уже ждёт.</p></div>';return;}
 host.innerHTML=state.inventory.slice(-6).reverse().map(c=>{const p=player(c.id);return `<div class="recent-player" style="--accent:${p.color}"><span class="recent-rating">${p.rating}</span><div><strong>${p.name}</strong><small>${p.club}</small></div><span class="recent-tag">${p.kind==='legend'?'ЛЕГЕНДА':p.kind==='star'?'ЗВЕЗДА':'ЗОЛОТО'}</span></div>`;}).join('');
}
function renderCollection(){
 const host=$('#collectionGrid');const filtered=state.inventory.filter(c=>{const p=player(c.id);return activeFilter==='all'||p.kind===activeFilter;});
 if(!filtered.length){host.innerHTML=`<div class="no-cards"><b>${state.inventory.length?'В ЭТОЙ КАТЕГОРИИ ПОКА ПУСТО':'КОЛЛЕКЦИЯ ЖДЁТ ПЕРВУЮ ЗВЕЗДУ'}</b><span>Открой пак на главной, чтобы найти футболистов.</span></div>`;return;}
 host.innerHTML=filtered.slice().reverse().map(c=>cardMarkup(player(c.id),'',c.uid)).join('');
}
function renderSquad(){
 const slots=$('#pitchSlots');slots.innerHTML=Array.from({length:5},(_,i)=>{const id=state.squad[i];if(!id)return `<div class="pitch-slot"><div class="pitch-placeholder">+</div><span>ПОЗИЦИЯ ${String(i+1).padStart(2,'0')}</span></div>`;const p=player(id);return `<div class="pitch-slot"><div class="pitch-card" style="--accent:${p.color}"><span class="recent-rating">${p.rating}</span><div><strong>${p.short}</strong><small>${p.pos} · ${p.country}</small></div></div><button data-remove="${id}">УБРАТЬ ×</button></div>`;}).join('');
 $('#squadPoolCount').textContent=`${state.inventory.length} В КОЛЛЕКЦИИ`;
 const owned=[...new Set(state.inventory.map(c=>c.id))];const pool=$('#squadPool');
 if(!owned.length){pool.innerHTML='<div class="empty-pool">Сначала открой пак, чтобы найти игроков.</div>';return;}
 pool.innerHTML=owned.map(id=>{const p=player(id);const selected=state.squad.includes(id);return `<button class="pool-player" data-add="${id}" ${selected||state.squad.length>=5?'disabled':''} style="--accent:${p.color}"><span class="recent-rating">${p.rating}</span><span><strong>${p.short}</strong><small>${p.pos} · ${p.club}</small></span><span class="pool-add">${selected?'✓':'+'}</span></button>`;}).join('');
}
const CHALLENGES=[{id:'first-pack',icon:'▤',title:'Первый шаг',desc:'Открой свой первый футбольный пак',reward:100,progress:()=>Math.min(state.packs,1),goal:1},{id:'five-players',icon:'♙',title:'Коллекционер',desc:'Собери 5 разных футболистов',reward:150,progress:()=>Math.min(uniqueCount(),5),goal:5},{id:'full-squad',icon:'⚽',title:'Тренер мечты',desc:'Добавь 5 игроков в свой состав',reward:200,progress:()=>Math.min(state.squad.length,5),goal:5}];
function renderChallenges(){
 const host=$('#challengeList');let done=0;
 host.innerHTML=CHALLENGES.map(c=>{const progress=c.progress();const claimed=state.claimed.includes(c.id);if(claimed)done++;return `<article class="challenge-item"><div class="challenge-icon">${c.icon}</div><div class="challenge-info"><span>ЗАДАНИЕ · НАГРАДА ◉ ${c.reward}</span><strong>${c.title}</strong><small>${c.desc} · ${progress}/${c.goal}</small><div class="mission-track"><i style="width:${progress/c.goal*100}%"></i></div></div><div class="challenge-reward">◉ +${c.reward}<br><button class="claim-btn" data-claim="${c.id}" ${progress<c.goal||claimed?'disabled':''}>${claimed?'ПОЛУЧЕНО':progress>=c.goal?'ЗАБРАТЬ':'В ПРОЦЕССЕ'}</button></div></article>`;}).join('');
 $('#challengeDone').textContent=`${done}/3`;
}
function generatePack(){
 const available=PLAYERS.filter(p=>true);const weights=available.map(p=>p.kind==='legend'?4:p.kind==='star'?24:72);
 return Array.from({length:3},()=>{let n=Math.random()*weights.reduce((a,b)=>a+b,0);let chosen=available[0];for(let i=0;i<available.length;i++){n-=weights[i];if(n<=0){chosen=available[i];break;}}return chosen;});
}
function startPack(){
 if(pendingCards.length){notify('Сначала забери все карточки из текущего пака.');return;}
 if(state.coins<250){notify('Не хватает монет. Выполни задание или забери тренировочную награду!');return;}
 state.coins-=250;state.packs++;save();
 const stage=$('#packStage'),wrap=$('#packWrap'),cards=$('#revealCards');
 $('#openPack').disabled=true;$('#tapHint').classList.remove('show');$('#packCaption').textContent='ТВОЯ ФУТБОЛЬНАЯ ИСТОРИЯ...';
 wrap.classList.remove('opening');wrap.style.opacity='1';cards.className='reveal-cards';cards.innerHTML='';
 void wrap.offsetWidth;wrap.classList.add('opening');
 pendingCards=generatePack().map(p=>({id:p.id,uid:`${Date.now()}-${Math.random().toString(36).slice(2)}`,clicked:false}));
 setTimeout(()=>{
  wrap.style.display='none';cards.innerHTML=pendingCards.map((c,i)=>cardMarkup(player(c.id),'',c.uid).replace('class="player-card','class="player-card reveal-card').replace('data-instance="'+c.uid+'"',`data-instance="${c.uid}" data-index="${i}"`)).join('');
  $$('.reveal-card',cards).forEach((el,i)=>setTimeout(()=>el.classList.add('visible'),i*180));
  setTimeout(()=>cards.classList.add('ready'),700);
  $('#packCaption').textContent='ТРИ НОВЫЕ ИСТОРИИ';
 },1450);
}
function revealCard(el){
 if(!pendingCards.length||!el||el.classList.contains('collected'))return;
 const idx=Number(el.dataset.index),entry=pendingCards[idx];if(!entry||entry.clicked)return;
 entry.clicked=true;el.classList.add('collected');el.style.transform='translateY(-13px) scale(1.06)';el.style.boxShadow='0 0 0 2px var(--accent),0 0 28px color-mix(in srgb,var(--accent),transparent 40%)';
 const dup=ownedCount(entry.id)>0;
 if(dup){state.coins+=30;notify(`${player(entry.id).name} — дубликат! +30 монет`);}else notify(`${player(entry.id).name} добавлен в коллекцию!`);
 state.inventory.push(entry);save();
 if(pendingCards.every(c=>c.clicked)){
  $('#revealCards').classList.add('done');$('#packCaption').textContent='ОТЛИЧНАЯ НАХОДКА!';$('#openPack').disabled=false;
  setTimeout(()=>{pendingCards=[];$('#revealCards').innerHTML='';$('#revealCards').className='reveal-cards';$('#packWrap').style.display='';$('#packWrap').classList.remove('opening');$('#packWrap').style.opacity='1';$('#packCaption').innerHTML='<span class="caption-star">✦</span> КАЖДЫЙ ПАК — НОВАЯ ИСТОРИЯ <span class="caption-star">✦</span>';},2400);
 }
}
function goView(view){
 $$('.view').forEach(v=>v.classList.remove('active'));const el=$(`#${view}View`);if(el)el.classList.add('active');
 $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));window.scrollTo({top:0,behavior:'smooth'});$('#mobileMenu').classList.remove('open');
}
function claimChallenge(id){
 const c=CHALLENGES.find(x=>x.id===id);if(!c||state.claimed.includes(id)||c.progress()<c.goal)return;
 state.claimed.push(id);state.coins+=c.reward;save();$('#rewardTitle').innerHTML='ЗАДАНИЕ<br><em>ВЫПОЛНЕНО!</em>';$('#rewardMessage').textContent=`«${c.title}» — награда отправлена в кошелёк клуба.`;$('#rewardAmount').textContent=`+${c.reward}`;$('#rewardBackdrop').classList.add('open');
}
$('#openPack').addEventListener('click',startPack);
$('#packWrap').addEventListener('click',()=>{if(!pendingCards.length)$('#tapHint').classList.add('show');});
$('#revealCards').addEventListener('click',e=>revealCard(e.target.closest('.player-card')));
document.addEventListener('click',e=>{
 const nav=e.target.closest('[data-view]');if(nav){goView(nav.dataset.view);return;}
 const goto=e.target.closest('[data-goto]');if(goto){goView(goto.dataset.goto);return;}
 const filter=e.target.closest('[data-filter]');if(filter){activeFilter=filter.dataset.filter;$$('.filter-chip').forEach(x=>x.classList.toggle('active',x===filter));renderCollection();return;}
 const add=e.target.closest('[data-add]');if(add){if(state.squad.length>=5){notify('В составе уже 5 игроков.');return;}state.squad.push(add.dataset.add);save();notify(`${player(add.dataset.add).name} в стартовом составе!`);return;}
 const remove=e.target.closest('[data-remove]');if(remove){state.squad=state.squad.filter(x=>x!==remove.dataset.remove);save();notify('Игрок убран из состава.');return;}
 const claim=e.target.closest('[data-claim]');if(claim)claimChallenge(claim.dataset.claim);
});
$('#earnCoins').addEventListener('click',()=>{
 if(state.trainingUsed){notify('Тренировка сегодня уже пройдена. Возвращайся завтра!');return;}
 state.trainingUsed=true;state.coins+=100;save();notify('Отличная тренировка! +100 монет');
});
$('#helpBtn').addEventListener('click',()=>$('#modalBackdrop').classList.add('open'));
$('#modalClose').addEventListener('click',()=>$('#modalBackdrop').classList.remove('open'));
$('#modalDone').addEventListener('click',()=>$('#modalBackdrop').classList.remove('open'));
$('#rewardClose').addEventListener('click',()=>$('#rewardBackdrop').classList.remove('open'));
$('#rewardDone').addEventListener('click',()=>$('#rewardBackdrop').classList.remove('open'));
$$('.modal-backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');}));
$('#mobileMenu').addEventListener('click',()=>{const nav=$('.sidebar');nav.classList.toggle('mobile-open');});
window.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal-backdrop').forEach(m=>m.classList.remove('open'));});
renderAll();
