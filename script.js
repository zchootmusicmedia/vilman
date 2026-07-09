
const situations = [
  {
    "image": "assets/images/scene1_table.png",
    "desc": "ההורה מבקש מהילד לעזור (בפינוי מהשולחן), והילד מגיב בטון מזלזל וכועס:",
    "quote": "למה תמיד רק אני? למה אתה לא מבקש ממנו אף פעם?",
    "choices": [
      {
        "short": "רציתי שתראי כמה אני כבר עושה ומשתדל.",
        "long": "כשאמרתי \"למה תמיד רק אני?\", בעצם רציתי שתראי כמה אני כבר עושה ומשתדל בדרך כלל. הלוואי שתשימי לב גם לכל הפעמים שאני עוזר, מתאמץ ומשתדל, ותגידי לי שאת גאה בי. כל כך הייתי צריך להרגיש שאת רואה גם את כל הטוב שבי."
      },
      {
        "short": "רציתי שתביני שהיום כבר אין לי כוח לעוד משימה.",
        "long": "כשאמרתי \"למה תמיד רק אני?\", לא באמת רציתי להתחמק. פשוט הרגשתי שהיום כבר אין לי כוח. הייתי עמוס מכל מה שעבר עליי, ועוד בקשה אחת הרגישה לי כבר יותר מידי."
      },
      {
        "short": "רציתי לדעת שגם אותי רואים כמו את האחים שלי.",
        "long": "כשאמרתי \"למה תמיד רק אני?\", בפנים רק רציתי לדעת שגם אותי רואים. לפעמים אני משווה את עצמי לאחים שלי, ומפחד שאולי אני פחות חשוב או פחות מוצלח. כל כך הייתי צריך להרגיש שגם אני מיוחד בשבילך."
      },
      {
        "short": "רציתי שתבקשי ממני אחרת.",
        "long": "כשאמרתי \"למה תמיד רק אני?\", לא היה לי קשה רק לעזור. היה לי קשה איך שזה הגיע. לפעמים כשמבקשים ממני מיד, אני נלחץ או מתכווץ. הלוואי שלפעמים תתני לי רגע להתארגן או תבקשי ממני בדרך שתעזור לי להצליח."
      },
      {
        "short": "כבר הסתובבתי עם עלבון בלב... והבקשה שלך פגשה אותי שם.",
        "long": "כשאמרתי \"למה תמיד רק אני?\", זה לא באמת התחיל כשהתבקשתי לעזור. כבר הסתובבתי עם עלבון או קושי מהיום, וכשהגיעה הבקשה שלך, כבר לא הצלחתי להכיל אותה. לא רציתי לפגוע בך... פשוט כבר הייתי מלא מבפנים."
      }
    ]
  },
  {
    "image": "assets/images/scene2_food.png",
    "desc": "הילד נכנס הביתה, זורק את התיק באמצע הסלון ואומר בכעס:",
    "quote": "אין מה לאכול בבית הזה! למה אף פעם אין מה שאני רוצה?",
    "choices": [
      {
        "short": "חיכיתי כל היום רק להגיע הביתה ולהירגע.",
        "long": "כשנכנסתי הביתה וצרחתי, לא באמת כעסתי על האוכל. כל היום רק חיכיתי לחזור הביתה ולהירגע במקום הבטוח שלי. כשהגעתי ולא הצלחתי להירגע, כל המתח והלחץ פשוט יצאו בצעקות."
      },
      {
        "short": "רציתי שתעטפי אותי... לפני שתנסי לפתור את הבעיה.",
        "long": "כשצעקתי שאין מה לאכול, בעצם רציתי לומר לך שאני כל כך זקוק לך עכשיו. רציתי שתעטפי אותי באהבה שלך, לפני שתנסי לפתור את מה שקרה. כל כך הייתי צריך להרגיש שאת איתי, ורק אחר כך הייתי מצליח להירגע."
      },
      {
        "short": "רציתי שתביני כמה היום הזה היה לי קשה ומתיש.",
        "long": "כשזרקתי את התיק וצרחתי, רציתי לספר לך כמה היום הזה היה לי קשה ומתיש. הרגשתי שהראש שלי כבר לא מצליח להכיל את כל מה שעבר עליי, ורק בבית הרשיתי לעצמי להוציא את הכול."
      },
      {
        "short": "התאכזבתי ממשהו אחר... והוצאתי את זה על האוכל.",
        "long": "כשצעקתי שאין מה לאכול, זה בכלל לא היה בגלל האוכל. התאכזבתי ממשהו אחר באותו יום, ופשוט לא ידעתי איך לספר לך. הכאב יצא בדרך אחרת."
      },
      {
        "short": "רציתי שתדעי כמה אני אוהב את מה שאת מכינה.",
        "long": "כשצעקתי שאין מה לאכול, אני יודע שזה נשמע בדיוק הפוך... אבל דווקא רציתי שתדעי כמה אני אוהב את האוכל שלך. כל כך התרגלתי שהוא תמיד מחכה לי, שברגע שהתאכזבתי, לא ידעתי איך להגיד את זה יפה."
      }
    ]
  },
  {
    "image": "assets/images/scene3_shoes.png",
    "desc": "ההורה מבקש מהילד לבצע פעולה שגרתית, כמו לבוא לשולחן או לסדר את הנעליים, והילד מגיב בזלזול ובהתחצפות, תוך כדי גלגול עיניים או הליכה הפגנתית לחדר:",
    "quote": "תבקשו ממישהו אחר!",
    "choices": [
      {
        "short": "רציתי שתיתני לי להרגיש שאני כבר מסוגל לבד.",
        "long": "כשהתחצפתי, בעצם נבהלתי. היה לי קשה שמחליטים בשבילי כל הזמן. כל כך רציתי שתראי שאני כבר גדל, שאני מסוגל לבד, ושתהיי גאה בי על זה."
      },
      {
        "short": "רציתי רק עוד כמה דקות לפני המשימה הבאה.",
        "long": "כשהתחצפתי, לא באמת רציתי לסרב. פשוט הייתי כל כך עמוס ולחוץ באותו רגע, וכל כך הייתי צריך עוד כמה דקות לעצמי לפני שעוברים למשימה הבאה."
      },
      {
        "short": "רציתי שתתני לי לבחור איך ומתי לעשות את זה.",
        "long": "כשהתחצפתי, בעצם רציתי לבקש ממך שתתני לי לבחור איך ומתי לעשות את מה שביקשת. לפעמים כשיש לי קצת בחירה, הרבה יותר קל לי לשתף פעולה."
      },
      {
        "short": "רציתי שתשאלי קודם מה עובר עליי.",
        "long": "כשהתחצפתי, לא באמת רציתי לפגוע בך. רציתי כל כך לשתף אותך כמה רע לי באותו רגע, אבל הרגשתי שאין לי איך להגיד את זה, ושהבקשה הגיעה לפני שהצלחתי להסביר מה עובר עליי."
      },
      {
        "short": "פחדתי לאכזב אותך... אז יצאתי למתקפה.",
        "long": "כשהתחצפתי, זה היה כי בפנים כל כך פחדתי לאכזב אותך. לפעמים כשקשה לי, אני לא יודע איך להגיד את זה, ואז במקום לבקש עזרה או להסביר, יוצאות לי מילים שפוגעות."
      }
    ]
  },
  {
    "image": "assets/images/scene4_brother.png",
    "desc": "האח לוקח חפץ קטן ללא רשות, והילד מתחיל לצרוח עליו, לחטוף אותו בחזרה ולבכות:",
    "quote": "אתה תמיד לוקח לי את הדברים! תסתלק מכאן!",
    "choices": [
      {
        "short": "רציתי שיבינו כמה חשוב לי שישמרו על הדברים שלי.",
        "long": "כשצעקתי אחרי שנגעו לי בחפצים שלי, לא באמת רציתי לריב. רציתי שיבינו כמה חשוב לי שישמרו על הדברים שלי, ושלא ייגעו בהם בלי רשות. לפעמים אני פשוט לא מצליח להסביר את זה יפה."
      },
      {
        "short": "כבר הגעתי הביתה בלי כוחות... ולא הצלחתי להתמודד עם עוד דבר אחד.",
        "long": "כשצעקתי כל כך, זה לא התחיל ברגע שנגעו לי בחפץ. הגעתי כבר מותש ומלא במתח מהיום שעבר עליי, וכשזה קרה, פשוט כבר לא נשאר לי כוח להתמודד עם עוד דבר אחד."
      },
      {
        "short": "רציתי לבקש ממך שיהיה לי מקום שמור לדברים שלי.",
        "long": "כשצעקתי אחרי שנגעו לי בחפצים שלי, בעצם רציתי לבקש ממך שיהיה לי מקום אחד בטוח ששייך רק לי. מקום שבו אני יכול לדעת שהדברים שלי נשארים כמו שהשארתי אותם. זה נותן לי תחושת ביטחון."
      },
      {
        "short": "לא כעסתי רק עליו... פשוט הייתי צריך קצת שקט.",
        "long": "כשצעקתי \"תסתלק מכאן!\", לא באמת רציתי להרחיק אותו. באותו רגע הייתי כל כך מוצף ופגוע, שכל מה שהייתי צריך היה קצת שקט כדי להירגע."
      },
      {
        "short": "כל כך פחדתי שיקרה משהו לחפץ הזה.",
        "long": "כשצעקתי כל כך, רציתי להסביר שפחדתי שהחפץ הזה ייהרס או יתקלקל. אולי זה נראה קטן, אבל בשבילי הוא היה חשוב מאוד, והפחד הזה פשוט יצא בצעקות."
      }
    ]
  },
  {
    "image": "assets/images/scene5_book.png",
    "desc": "הילד מנסה לפתור תרגיל מורכב או להרכיב משהו, לא מצליח, ופתאום מעיף את הספר או החפץ מהשולחן וצועק:",
    "quote": "תעזבי אותי כבר! את רק מציקה לי! הכול בגללך!",
    "choices": [
      {
        "short": "רציתי לומר לך שאני מפחד שלא אצליח.",
        "long": "כשהעפתי את הספרים וצעקתי, בעצם רציתי לומר לך שאני מפחד שלא אצליח. הרגשתי מיואש ומודאג, ולא ידעתי אם אי פעם אצליח כמו כולם."
      },
      {
        "short": "התביישתי שקשה לי כל כך.",
        "long": "כשצעקתי עלייך, בפנים הרגשתי כישלון גדול. כל כך התביישתי שלא הצלחתי, שבמקום להגיד כמה קשה לי, פשוט האשמתי אותך."
      },
      {
        "short": "רציתי לנסות לבד... אבל שתישארי קרובה.",
        "long": "כשהעפתי את הספרים, לא באמת רציתי שתעזבי אותי. רציתי לנסות לבד, אבל גם להרגיש שאת נשארת לידי. לפעמים אני צריך שתאמיני בי, גם אם אני עדיין לא מצליח."
      },
      {
        "short": "פחדתי שתראי כמה אני מתקשה.",
        "long": "כשצעקתי עלייך, כל כך פחדתי שתראי כמה קשה לי. הרגשתי שזה גדול עליי, ופחדתי שתחשבי שאני לא מספיק טוב."
      },
      {
        "short": "רציתי רק שתחבקי אותי ותגידי לי שאני בסדר.",
        "long": "כשצעקתי עלייך, בפנים כל כך רציתי שתבואי, תחבקי אותי ותגידי לי שאני בסדר. שתזכירי לי שגם כשאני לא מצליח, אני עדיין ילד טוב ושווה."
      }
    ]
  },
  {
    "image": "assets/images/scene6_cancelled.png",
    "desc": "המשפחה הייתה אמורה לצאת לפעילות, אך היא בוטלה ברגע האחרון. הילד טורק את הדלת וצועק:",
    "quote": "אי אפשר לסמוך כאן על אפ'חד אף פעם!",
    "choices": [
      {
        "short": "רציתי לומר לך שקשה לי מאוד עם אכזבות.",
        "long": "כשטרקתי את הדלת וצעקתי שאי אפשר לסמוך על אפ'חד, רציתי לומר לך שקשה לי מאוד עם אכזבות. לפעמים אני כל כך מחכה למשהו, וכשהוא מתבטל, אני מרגיש כאילו כל העולם שלי מתפרק."
      },
      {
        "short": "לא ידעתי איפה לשים את כל האכזבה שלי.",
        "long": "כשאמרתי שאי אפשר לסמוך על אפ'חד, בעצם לא ידעתי איפה לשים את כל האכזבה שלי. כל כך קיוויתי לרגע הזה, וכשהוא נעלם, פשוט לא ידעתי איך לבקש ממך עזרה."
      },
      {
        "short": "רציתי שתביני כמה זה היה חשוב לי.",
        "long": "כשצעקתי שאי אפשר לסמוך על אפ'חד, לא באמת רציתי להאשים אותך. רציתי שתביני כמה הדבר הזה היה חשוב לי, וכמה כאב לי שהוא לא קרה."
      },
      {
        "short": "הרגשתי שאיבדתי משהו שחיכיתי לו כל כך.",
        "long": "כשצעקתי וטרקתי את הדלת, הרגשתי כאילו איבדתי משהו שחיכיתי לו כל כך. באותו רגע הרגשתי אבוד, ולא הצלחתי למצוא דרך אחרת להוציא את כל מה שהיה לי בפנים."
      },
      {
        "short": "רציתי שמישהו פשוט ינחם אותי.",
        "long": "כשצעקתי שאי אפשר לסמוך על אפ'חד, לא באמת רציתי להתרחק ממך. כל כך רציתי שמישהו פשוט ינחם אותי, יחבק אותי, ויעזור לי לשאת את האכזבה הגדולה שהרגשתי."
      }
    ]
  },
  {
    "image": "assets/images/scene7_room.png",
    "desc": "הילד חוזר מבית הספר, נכנס הביתה בפנים נפולות ומתוחות, מסתגר בחדר ולא עונה לשאלות, למרות שאת מנסה לשאול אותו מה קרה.",
    "quote": "",
    "choices": [
      {
        "short": "הייתי חייב קצת שקט. נגמר לי האוויר.",
        "long": "כשחזרתי הביתה ונכנסתי ישר לחדר, פשוט הייתי חייב קצת שקט. הרגשתי שנגמר לי האוויר מכל מה שעבר עליי היום, והייתי צריך כמה דקות לעצמי כדי להירגע."
      },
      {
        "short": "לא רציתי להוציא עלייך את כל מה שעבר עליי.",
        "long": "כשהתעלמתי ממך ונכנסתי לחדר, זה לא היה כי לא רציתי להיות איתך. דווקא פחדתי להוציא עלייך את כל הכעס והעומס שהצטברו לי במשך היום. כל כך רציתי שלא תיפגעי ממני."
      },
      {
        "short": "רציתי שתהיי לידי... גם בלי לדבר.",
        "long": "כשטרקתי את הדלת ולא עניתי לך, בעצם רציתי שתהיי לידי, אבל בלי לשאול שאלות. הייתי כל כך שבור ועייף, שלא הצלחתי למצוא מילים."
      },
      {
        "short": "גם אני עדיין לא הבנתי מה עובר עליי.",
        "long": "כשנכנסתי הביתה והתעלמתי מהשאלות שלך, רציתי לומר לך שגם אני עדיין לא הבנתי למה כל כך קשה לי. הייתי צריך קצת זמן כדי להבין בעצמי מה אני מרגיש."
      },
      {
        "short": "רציתי שתביני שאני פשוט מותש.",
        "long": "כשהסתגרתי בחדר במשך שעות, לא רציתי להתרחק ממך. פשוט הייתי מותש. כל כך הרבה דברים עברו עליי היום, שהרגשתי שאני חייב שקט כדי לאסוף את עצמי."
      }
    ]
  },
  {
    "image": "assets/images/scene8_task.png",
    "desc": "הילד מסיים לבצע משימה שקיבל. ההורה מבקש שישפר משהו קטן. הילד מתפרץ:",
    "quote": "את תמיד חייבת למצוא מה לא בסדר! תעשי את זה בעצמך וזהו!",
    "choices": [
      {
        "short": "רציתי שתראי כמה פחדתי לאכזב אותך.",
        "long": "כשהתחצפתי אחרי ההערה שלך, רציתי לומר לך שכל כך פחדתי לאכזב אותך. כל כך רציתי שתהיי מרוצה ממני, וכששמעתי שיש עוד מה לתקן, הרגשתי שלא הצלחתי."
      },
      {
        "short": "רציתי שתראי כמה השתדלתי.",
        "long": "כשהתחצפתי אחרי ההערה שלך, רציתי שתראי כמה השתדלתי לפני שהסתכלת על מה שהיה חסר. כל כך התאמצתי, וכששמעתי רק את התיקון, הרגשתי שכל המאמץ שלי נעלם."
      },
      {
        "short": "רציתי שתביני שגם לי היה קשה.",
        "long": "כשהתחצפתי, לא באמת רציתי לפגוע בך. רציתי שתביני שגם לי היה קשה לבצע את המשימה הזאת. לפעמים אני משקיע את כל הכוחות שלי, וזה עדיין לא מספיק."
      },
      {
        "short": "כבר לא נשאר לי כוח לנסות שוב.",
        "long": "כשהתחצפתי אחרי שביקשת שאשפר, פשוט הרגשתי שלא נשאר לי כוח להתחיל שוב. הייתי כל כך עייף מהמאמץ שכבר השקעתי, שעוד תיקון אחד הרגיש לי יותר מדי."
      },
      {
        "short": "רציתי רק לשמוע שגם עכשיו את גאה בי.",
        "long": "כשהתחצפתי אחרי ההערה שלך, לא באמת רציתי להתווכח. כל כך רציתי לשמוע שגם עכשיו את גאה בי, גם אם עדיין לא הכול מושלם. זה היה נותן לי כוח להמשיך."
      }
    ]
  }
];

const introScreen = document.getElementById('introScreen');
const gameScreen = document.getElementById('gameScreen');
const finalScreen = document.getElementById('finalScreen');
const startBtn = document.getElementById('startBtn');
const sceneImage = document.getElementById('sceneImage');
const sceneDesc = document.getElementById('sceneDesc');
const sceneQuote = document.getElementById('sceneQuote');
const choicesEl = document.getElementById('choices');
const draftLines = document.getElementById('draftLines');
const draftPaper = document.getElementById('draftPaper');
const writingHand = document.getElementById('writingHand');
const nextBtn = document.getElementById('nextBtn');
const undoBtn = document.getElementById('undoBtn');
const stepCounter = document.getElementById('stepCounter');
const progressFill = document.getElementById('progressFill');
const finalParagraphs = document.getElementById('finalParagraphs');
const finalLetter = document.getElementById('finalLetter');
const envelope = document.getElementById('envelope');

let current = 0;
let selected = [];
let currentChoiceIndex = null;
let isTyping = false;

function startGame() {
  if (introScreen) introScreen.classList.remove('active');
  if (gameScreen) gameScreen.classList.add('active');
  loadSituation(0);
}

if (startBtn) {
  startBtn.addEventListener('click', startGame);
}

if (window.START_GAME_DIRECTLY) {
  startGame();
}

nextBtn.addEventListener('click', () => {
  if (isTyping) return;
  if (current < situations.length - 1) {
    current++;
    currentChoiceIndex = null;
    loadSituation(current);
  } else {
    showFinal();
  }
});

undoBtn.addEventListener('click', () => {
  if (isTyping) return;
  selected.pop();
  const last = draftLines.lastElementChild;
  if (last) last.remove();
  currentChoiceIndex = null;
  nextBtn.hidden = true;
  undoBtn.hidden = true;
  enableChoices();
});

function loadSituation(index) {
  const item = situations[index];
  sceneImage.classList.add('changing');
  sceneImage.alt = `סיטואציה ${index + 1}`;
  sceneImage.src = '';
  window.requestAnimationFrame(() => {
    sceneImage.src = `${item.image}?step=${index + 1}`;
    sceneImage.onload = () => sceneImage.classList.remove('changing');
  });
  sceneDesc.textContent = item.desc;
  sceneQuote.textContent = item.quote || '';
  sceneQuote.style.display = item.quote ? 'block' : 'none';
  stepCounter.textContent = `${index + 1} / ${situations.length}`;
  progressFill.style.width = `${((index + 1) / situations.length) * 100}%`;
  nextBtn.hidden = true;
  undoBtn.hidden = true;
  choicesEl.innerHTML = '';

  item.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.type = 'button';
    btn.textContent = choice.short;
    btn.addEventListener('click', () => choose(i, btn));
    choicesEl.appendChild(btn);
  });
}

function choose(choiceIndex, btn) {
  if (isTyping) return;
  currentChoiceIndex = choiceIndex;
  const choice = situations[current].choices[choiceIndex];
  Array.from(choicesEl.children).forEach(b => {
    b.disabled = true;
    b.classList.remove('selected');
  });
  btn.classList.add('selected');
  selected[current] = choice;

  const previousCurrent = draftLines.querySelector('.draft-line.current');
  if (previousCurrent) previousCurrent.classList.remove('current');

  const line = document.createElement('p');
  line.className = 'draft-line current';
  line.textContent = '';
  draftLines.appendChild(line);

  typeText(line, choice.short, () => {
    nextBtn.hidden = false;
    undoBtn.hidden = false;
  });
}

function enableChoices() {
  Array.from(choicesEl.children).forEach(b => {
    b.disabled = false;
    b.classList.remove('selected');
  });
}

function typeText(el, text, done) {
  isTyping = true;
  nextBtn.hidden = true;
  undoBtn.hidden = true;
  writingHand.classList.remove('fly');
  writingHand.classList.add('writing');

  let i = 0;
  const total = text.length;

  function tick() {
    i++;
    el.textContent = text.slice(0, i);
    placeHand(el, i / Math.max(total, 1));
    draftPaper.scrollTo({ top: draftPaper.scrollHeight, behavior: 'smooth' });

    if (i < total) {
      const progress = i / total;
      const delay = progress > .78 ? 68 : (progress > .55 ? 50 : 31);
      setTimeout(tick, delay);
    } else {
      writingHand.classList.remove('writing');
      writingHand.classList.add('fly');
      playPenSound();
      setTimeout(() => {
        writingHand.classList.remove('fly');
        isTyping = false;
        if (typeof done === 'function') done();
      }, 470);
    }
  }
  tick();
}

function placeHand(el, progress) {
  const paperRect = draftPaper.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const lineWidth = Math.min(rect.width, paperRect.width - 70);
  const startRight = 38;
  const travel = Math.max(90, lineWidth * 0.75);
  writingHand.style.top = `${(rect.top - paperRect.top) + 4 + draftPaper.scrollTop}px`;
  writingHand.style.right = `${startRight + (travel * progress)}px`;
}

function playPenSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(620, ctx.currentTime);
    gain.gain.setValueAtTime(0.018, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch(e) {}
}

function showFinal() {
  gameScreen.classList.remove('active');
  finalScreen.classList.add('active');

  finalParagraphs.innerHTML = '';
  selected.filter(Boolean).forEach(choice => {
    const p = document.createElement('p');
    p.textContent = choice.long;
    finalParagraphs.appendChild(p);
  });

  setTimeout(() => {
    finalLetter.classList.add('show');
  }, 2300);
}
