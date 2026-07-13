
const BASE = window.VILMAN_SITUATIONS;
let gender = localStorage.getItem('vilmanGender');
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
  return out;
}
function getItems(){
 return BASE.map(item=>{
   const copy=JSON.parse(JSON.stringify(item));
   copy.image=`assets/images/${gender}/${item.key}.webp`;
   if(gender==='girl'){
     copy.desc=feminize(copy.desc);
     copy.quote=feminize(copy.quote);
     copy.prompt=feminize(copy.prompt);
     copy.choices=copy.choices.map(c=>({short:feminize(c.short),long:feminize(c.long)}));
   }
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
$('#tutorialDone').addEventListener('click',()=>{closeModal($('#tutorialModal'));startGame()});

document.querySelectorAll('[data-game-gender]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  gender=btn.dataset.gameGender;
  localStorage.setItem('vilmanGender',gender);
  genderScreen.classList.remove('active');
  openModal('tutorialModal');
 });
});

function init(){
 if(!gender){
  genderScreen.classList.add('active');
 }else{
  openModal('tutorialModal');
 }
}
function startGame(){
 current=0;selected=[];draftLines.innerHTML='';
 genderScreen.classList.remove('active');finalScreen.classList.remove('active');gameScreen.classList.add('active');
 render();
}
function render(){
 const item=getItems()[current];
 sceneImage.src=item.image;
 sceneDesc.textContent=item.desc;
 sceneQuote.textContent=item.quote||'';
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
 typeText(p,choice.short,()=>{nextBtn.hidden=false;undoBtn.hidden=false});
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
  $('#endingGender').innerHTML='אוהבת,<br>אני';
  $('#motherLabel').innerHTML='אם הילדה שלך הייתה מוסיפה עוד שורה למכתב הזה, מה היית חושבת שהיא הייתה רוצה לכתוב לך?';
  $('#ctaGenderText').innerHTML='יש עוד הרבה "מכתבים"<br>שמסתתרים מאחורי ההתנהגויות של הילדה שלך.';
  document.querySelector('.save-note strong').textContent='המכתב הזה נכתב מתוך ההתבוננות שלך בילדה.';
 }else{
  $('#heartIntro').textContent='אם רק הייתי מצליח להסביר לך מה באמת היה לי בלב...';
  $('#endingGender').innerHTML='אוהב,<br>אני';
  $('#motherLabel').innerHTML='אם הילד שלך היה מוסיף עוד שורה למכתב הזה, מה היית חושבת שהוא היה רוצה לכתוב לך?';
 }
 window.scrollTo({top:0,behavior:'smooth'});
}
$('#motherInput').addEventListener('input',()=>{});
$('#pdfBtn').addEventListener('click',downloadPDF);

async function downloadPDF(){
 const btn=$('#pdfBtn');const old=btn.textContent;btn.disabled=true;btn.textContent='מכינה את המכתב...';
 try{
  if(!window.html2canvas||!window.jspdf) throw new Error('ספריית PDF לא נטענה');
  const pdf=$('#pdfContent');
  const addLine=$('#motherInput').value.trim();
  const paras=selected.filter(Boolean).map(c=>`<p>${escapeHTML(c.long)}</p>`).join('');
  const intro=gender==='girl'?'אם רק הייתי מצליחה להסביר לך מה באמת היה לי בלב...':'אם רק הייתי מצליח להסביר לך מה באמת היה לי בלב...';
  const ending=gender==='girl'?'אוהבת':'אוהב';
  pdf.innerHTML=`
    <h1>המכתב שלא הצלחתי לכתוב לך</h1>
    <p><strong>אמא היקרה שלי,</strong></p>
    <p>יש הרבה דברים שניסיתי להגיד לך...</p>
    <p>אבל לא תמיד היו לי המילים הנכונות.</p>
    <p>לפעמים מה שיצא ממני היו דווקא צעקות, שתיקות, כעס, או מילים שפגעו.</p>
    <p>${intro}</p>${paras}
    ${addLine?`<p>${escapeHTML(addLine)}</p>`:''}
    <p><strong>אמא...</strong><br>תודה שניסית לקרוא<br>גם את מה שלא הצלחתי להגיד.</p>
    <p><strong>${ending},<br>אני</strong></p>`;
  const canvas=await html2canvas(pdf,{scale:1.5,useCORS:true,backgroundColor:'#fff'});
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const pageW=210,pageH=297;
  const pxPerPage=canvas.width*(pageH/pageW);
  let y=0,page=0;
  while(y<canvas.height){
    const slice=document.createElement('canvas');
    slice.width=canvas.width;slice.height=Math.min(pxPerPage,canvas.height-y);
    slice.getContext('2d').drawImage(canvas,0,y,canvas.width,slice.height,0,0,canvas.width,slice.height);
    if(page>0)doc.addPage();
    const img=slice.toDataURL('image/jpeg',0.95);
    const h=pageW*(slice.height/slice.width);
    doc.addImage(img,'JPEG',0,0,pageW,h);
    y+=pxPerPage;page++;
  }
  doc.save('המכתב-שלא-הצלחתי-לכתוב-לך.pdf');
 }catch(e){
  alert('לא הצלחתי ליצור את ה־PDF כרגע. אפשר לנסות שוב או להשתמש באפשרות ההדפסה של הדפדפן.');
  console.error(e);
 }finally{btn.disabled=false;btn.textContent=old}
}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
init();
