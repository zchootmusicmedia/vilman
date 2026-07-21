
const BASE = window.VILMAN_SITUATIONS;
let gender = null;
let current = 0;
let selected = [];
let isTyping = false;

const $ = s => document.querySelector(s);
const genderScreen = $('#genderScreen');
const gameScreen = $('#gameScreen');
const finalScreen = $('#finalScreen');
const sceneImage = $('#sceneImage');
const sceneDesc = $('#sceneDesc');
const sceneQuote = $('#sceneQuote');
const promptEl = $('#prompt');
const choicesEl = $('#choices');
const draftLines = $('#draftLines');
const draftPaper = $('#draftPaper');
const nextBtn = $('#nextBtn');
const undoBtn = $('#undoBtn');
const stepCounter = $('#stepCounter');
const progressFill = $('#progressFill');

const femalePairs = [
 ['הילד','הילדה'],['האח','האחות'],['ממנו','ממנה'],['שלו','שלה'],['אותו','אותה'],
 ['הוא','היא'],['כשהוא','כשהיא'],['ילד','ילדה'],['אוהב','אוהבת'],['מסוגל','מסוגלת'],
 ['זקוק','זקוקה'],['מצליח','מצליחה'],['מפחד','מפחדת'],['מתקשה','מתקשה'],['מוצף','מוצפת'],
 ['עייף','עייפה'],['מותש','מותשת'],['מיואש','מיואשת'],['מודאג','מודאגת'],['גדל','גדלה'],
 ['נלחץ','נלחצת'],['מתכווץ','מתכווצת'],['מלא','מלאה'],['פגוע','פגועה'],['עצוב','עצובה'],
 ['שבור','שבורה'],['אבוד','אבודה'],['רגוע','רגועה'],['נכנס','נכנסה'],['זורק','זורקת'],
 ['צועק','צועקת'],['מתלונן','מתלוננת'],['מסתגר','מסתגרת'],['עונה','עונה'],['חוזר','חוזרת'],
 ['מסיים','מסיימת'],['קיבל','קיבלה'],['ניסה','ניסתה'],['העפתי','העפתי'],['אמרתי','אמרתי'],
 ['התלוננתי','התלוננתי'],['התחצפתי','התחצפתי'],['טרקתי','טרקתי']
];

function feminize(text){
  let out = text;
  femalePairs.sort((a,b)=>b[0].length-a[0].length).forEach(([m,f])=>{
    out = out.replaceAll(m,f);
  });
  out = out
    .replaceAll('אני צריך','אני צריכה')
    .replaceAll('אני כבר גדל','אני כבר גדלה')
    .replaceAll('לא הצלחתי','לא הצלחתי')
    .replaceAll('הייתי צריך','הייתי צריכה')
    .replaceAll('כל כך זקוק','כל כך זקוקה')
    .replaceAll('אני עדיין ילד טוב ושווה','אני עדיין ילדה טובה ושווה')
    .replaceAll('אני מיוחד','אני מיוחדת')
    .replaceAll('פחות מוצלח','פחות מוצלחת')
    .replaceAll('לא מספיק טוב','לא מספיק טובה')
    .replaceAll('גם כשאני לא מצליח','גם כשאני לא מצליחה');
  out = out
    .replaceAll('חשוב לך','חשובה לך')
    .replaceAll('חשוב','חשובה')
    .replaceAll('מיוחד','מיוחדת')
    .replaceAll('עמוס','עמוסה')
    .replaceAll('מותש','מותשת')
    .replaceAll('רעב','רעבה')
    .replaceAll('זקוק','זקוקה')
    .replaceAll('מוצף','מוצפת')
    .replaceAll('מעז','מעזה')
    .replaceAll('מסוגל','מסוגלת')
    .replaceAll('עייף','עייפה')
    .replaceAll('נבהלתי','נבהלתי')
    .replaceAll('פגוע','פגועה')
    .replaceAll('מבוהל','מבוהלת')
    .replaceAll('מיואש','מיואשת')
    .replaceAll('מודאג','מודאגת')
    .replaceAll('לא יוצלח','לא יוצלחת')
    .replaceAll('מתוסכל','מתוסכלת')
    .replaceAll('מתוח','מתוחה')
    .replaceAll('מדוכא','מדוכאת')
    .replaceAll('שבור','שבורה')
    .replaceAll('יודע','יודעת')
    .replaceAll('אוהב אותך','אוהבת אותך')
    .replaceAll('אוהב,','אוהבת,');
  return out;
}
function getItems(){
  const source = gender === 'girl'
    ? window.VILMAN_SITUATIONS_GIRL
    : window.VILMAN_SITUATIONS;

  return source.map(item => {
    const copy = JSON.parse(JSON.stringify(item));
    copy.image = `assets/images/${gender}/${item.key}.webp`;
    return copy;
  });
}
function openModal(id){
 const m=document.getElementById(id);m.classList.add('open');m.setAttribute('aria-hidden','false');
}
function closeModal(m){m.classList.remove('open');m.setAttribute('aria-hidden','true')}
document.querySelectorAll('.modal-close,.modal-done').forEach(b=>b.addEventListener('click',()=>closeModal(b.closest('.modal'))));
document.querySelectorAll('[data-open-purpose]').forEach(b=>b.addEventListener('click',()=>openModal('purposeModal')));
$('#tutorialAgain').addEventListener('click',()=>openModal('tutorialModal'));
$('#tutorialDone').addEventListener('click',()=>closeModal($('#tutorialModal')));

document.querySelectorAll('[data-game-gender]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  gender=btn.dataset.gameGender;
  localStorage.setItem('vilmanGender',gender);
  startGame(true);
 });
});

function init(){
  gender = null;
  localStorage.removeItem('vilmanGender');
  genderScreen.classList.add('active');
  gameScreen.classList.remove('active');
  finalScreen.classList.remove('active');
}
function startGame(showTutorial=false){
 current=0;
 selected=[];
 draftLines.innerHTML='';
 genderScreen.classList.remove('active');
 finalScreen.classList.remove('active');
 gameScreen.classList.add('active');
 render();

 if(showTutorial){
  setTimeout(()=>{
   if(gameScreen.classList.contains('active')){
    openModal('tutorialModal');
   }
  },2000);
 }
}
function render(){
 const item=getItems()[current];
 sceneImage.src=item.image;
 sceneDesc.textContent=item.desc;
 sceneQuote.textContent=(item.quote||'').replace(/[„“”"׳״]/g,'').trim(); sceneQuote.style.display=sceneQuote.textContent?'block':'none';
 promptEl.textContent=item.prompt;
 stepCounter.textContent=`${current+1} / ${BASE.length}`;
 progressFill.style.width=`${((current+1)/BASE.length)*100}%`;
 choicesEl.innerHTML='';nextBtn.hidden=true;undoBtn.hidden=true;
 item.choices.forEach((c,i)=>{
  const b=document.createElement('button');
  b.className='choice-btn';b.type='button';b.textContent=c.short;
  b.onclick=()=>choose(i,b);choicesEl.appendChild(b);
 });
}
function choose(i,btn){
 if(isTyping)return;
 const choice=getItems()[current].choices[i];
 selected[current]=choice;
 [...choicesEl.children].forEach(b=>{b.disabled=true;b.classList.remove('selected')});
 btn.classList.add('selected');
 draftLines.querySelector('.current')?.classList.remove('current');
 const p=document.createElement('p');p.className='draft-line current';draftLines.appendChild(p);
 typeText(p,`${getItems()[current].prompt} ${choice.short}`,()=>{nextBtn.hidden=false;undoBtn.hidden=false});
}
function typeText(el,text,done){
 isTyping=true;let i=0;
 const tick=()=>{
  i++;el.textContent=text.slice(0,i);
  draftPaper.scrollTo({top:draftPaper.scrollHeight,behavior:'smooth'});
  if(i<text.length){
    const ratio=i/text.length;
    setTimeout(tick,ratio>.78?65:ratio>.55?48:30);
  }else{isTyping=false;done&&done()}
 };
 tick();
}
undoBtn.onclick=()=>{
 if(isTyping)return;
 selected[current]=null;
 draftLines.lastElementChild?.remove();
 [...choicesEl.children].forEach(b=>{b.disabled=false;b.classList.remove('selected')});
 nextBtn.hidden=true;undoBtn.hidden=true;
};
nextBtn.onclick=()=>{
 if(!selected[current]||isTyping)return;
 if(current<BASE.length-1){current++;render()}else showFinal();
};
function showFinal(){
 gameScreen.classList.remove('active');finalScreen.classList.add('active');
 const paragraphs=$('#finalParagraphs');paragraphs.innerHTML='';
 selected.filter(Boolean).forEach(c=>{const p=document.createElement('p');p.textContent=c.long;paragraphs.appendChild(p)});
 if(gender==='girl'){
  $('#heartIntro').textContent='אם רק הייתי מצליחה להסביר לך מה באמת היה לי בלב...';
  $('#endingGender').innerHTML='אוהבת,<br>הילדה שלך';
  $('#motherLabel').innerHTML='אם הילדה שלך הייתה מוסיפה עוד שורה למכתב הזה, מה היית חושבת שהיא הייתה רוצה לכתוב לך?';
  $('#ctaGenderText').innerHTML='יש עוד הרבה "מכתבים"<br>שמסתתרים מאחורי ההתנהגויות של הילדה שלך.';
  document.querySelector('.save-note strong').textContent='המכתב הזה נכתב מתוך ההתבוננות שלך בילדה.';
 }else{
  $('#heartIntro').textContent='אם רק הייתי מצליח להסביר לך מה באמת היה לי בלב...';
  $('#endingGender').innerHTML='אוהב,<br>הילד שלך';
  $('#motherLabel').innerHTML='אם הילד שלך היה מוסיף עוד שורה למכתב הזה, מה היית חושבת שהוא היה רוצה לכתוב לך?';
 }
 window.scrollTo({top:0,behavior:'smooth'});
 animateFinalLetter();
}
$('#motherInput').addEventListener('input',()=>{});
$('#pdfBtn').addEventListener('click',downloadPDF);

async function downloadPDF(){
 const btn=$('#pdfBtn'),old=btn.textContent;btn.disabled=true;btn.textContent='מכינה את המכתב...';
 try{
  const intro=gender==='girl'?'אם רק הייתי מצליחה להסביר לך מה באמת היה לי בלב...':'אם רק הייתי מצליח להסביר לך מה באמת היה לי בלב...';
  let blocks=['<strong>אמא היקרה שלי,</strong>','יש הרבה דברים שניסיתי להגיד לך...','אבל לא תמיד היו לי המילים הנכונות.','לפעמים מה שיצא ממני היו דווקא צעקות, שתיקות, כעס, או מילים שפגעו.',intro,...selected.filter(Boolean).map(c=>c.long)];
  const extra=$('#motherInput').value.trim();if(extra)blocks.push('<strong>ויש עוד משהו שאולי רציתי לומר לך...</strong><br>'+escapeHTML(extra));
  const childName=(document.querySelector('#childNameInput')?.value||'').trim();
  const defaultSign=gender==='girl'?'הילדה שלך':'הילד שלך';
  blocks.push('<strong>אמא...</strong><br>תודה שניסית לקרוא<br>גם את מה שלא הצלחתי להגיד.',`<strong>${gender==='girl'?'אוהבת':'אוהב'},<br>${escapeHTML(childName||defaultSign)}</strong>`);
  let pages=[],page=[],units=0;
  for(const x of blocks){const u=Math.max(2,Math.ceil(x.replace(/<[^>]+>/g,'').length/52)+1);if(units+u>22&&page.length){pages.push(page);page=[];units=0}page.push(x);units+=u}if(page.length)pages.push(page);
  const {jsPDF}=window.jspdf,doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  for(let i=0;i<pages.length;i++){if(i)doc.addPage();const el=document.createElement('div');el.className='pdf-content';el.style.position='fixed';el.style.left='-20000px';el.style.top='0';el.innerHTML=(i===0?'<h1>המכתב שלא הצלחתי לכתוב לך</h1>':'')+pages[i].map(x=>`<p>${x}</p>`).join('');document.body.appendChild(el);const c=await html2canvas(el,{scale:1.3,useCORS:true,backgroundColor:'#fff'});doc.addImage(c.toDataURL('image/jpeg',.94),'JPEG',0,0,210,297);el.remove()}
  doc.save('המכתב-שלא-הצלחתי-לכתוב-לך.pdf');
 }catch(e){console.error(e);alert('לא הצלחתי ליצור את ה־PDF כרגע. נסי שוב.')}finally{btn.disabled=false;btn.textContent=old}
}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
init();

let finalTypingCancelled=false;
async function animateFinalLetter(){
 finalTypingCancelled=false;
 const ps=[...document.querySelectorAll('#finalParagraphs p')];
 ps.forEach(p=>{p.dataset.full=p.textContent;p.textContent=''});
 const skip=document.querySelector('#skipFinalTyping'); if(skip)skip.hidden=false;
 for(const p of ps){
  const t=p.dataset.full||'';
  for(let i=0;i<t.length&&!finalTypingCancelled;i++){p.textContent+=t[i];if(i%4===0)await new Promise(r=>setTimeout(r,22))}
  if(finalTypingCancelled)break;
 }
 if(finalTypingCancelled)ps.forEach(p=>p.textContent=p.dataset.full||'');
 if(skip)skip.hidden=true;
}
document.querySelector('#skipFinalTyping')?.addEventListener('click',()=>{finalTypingCancelled=true;document.querySelectorAll('#finalParagraphs p').forEach(p=>p.textContent=p.dataset.full||'')});
document.querySelector('#motherInput')?.addEventListener('input',e=>{
 const v=e.target.value.trim(),box=document.querySelector('#customLetterLine');
 box.innerHTML=v?`<p><strong>ויש עוד משהו שאולי רציתי לומר לך...</strong><br>${escapeHTML(v)}</p>`:'';
});




function updateChildSignature(){
  const input=document.querySelector('#childNameInput');
  const name=(input?.value||'').trim();
  if(gender==='girl'){
    document.querySelector('#endingGender').innerHTML=`אוהבת,<br>${name||'הילדה שלך'}`;
  }else{
    document.querySelector('#endingGender').innerHTML=`אוהב,<br>${name||'הילד שלך'}`;
  }
}
document.querySelector('#childNameInput')?.addEventListener('input',updateChildSignature);
