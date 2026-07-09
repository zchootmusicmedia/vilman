# המכתב שלא הצלחתי לכתוב לך

קבצים מוכנים להעלאה ל-GitHub Pages.

## איך מעלים
1. פתחי Repository חדש ב-GitHub.
2. העלי את כל הקבצים והתיקיות כמו שהם.
3. Settings → Pages → Deploy from branch → main / root.
4. תקבלי קישור למשחק.
5. את הקישור אפשר להטמיע בדף נחיתה עם iframe:

```html
<iframe 
  src="https://USERNAME.github.io/REPO-NAME/"
  style="width:100%; height:100vh; border:0;"
  loading="lazy">
</iframe>
```

## פונט כתב יד
לא צירפתי את קובץ הפונט לחבילה. 
אם יש לך רישיון מתאים, העלי בעצמך את:
`OHNoamAbramovich-Regular.woff2`
לתיקייה:
`assets/fonts/`

ואז פתחי את הערת ה-@font-face בתחילת `style.css`.

## קישור כפתור סיום
הכפתור בסוף מוגדר כרגע ל:
https://michal-vilman.ravpage.co.il/ragish3

אפשר לערוך ב-`index.html`.

עדכון שימוש:
- index.html = עמוד פתיחה עם טופס הרשמה.
- game.html = עמוד המשחק עצמו. הגדירי אותו כדף תודה/Redirect אחרי שליחת הטופס.
