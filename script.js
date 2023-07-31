const userInput = document.getElementById("userInput");
let expression = "";

function press(num) {
  expression += num;
  userInput.value = expression;
}
function equal() {
  userInput.value = eval(expression);
  expression = "";
}
function erase() {
  expression = "";
  userInput.value = expression;
}

document.getElementById("downloadBtn").addEventListener("click", () => {
  // הגדר את כתובת ה-URL של קובץ ה-ZIP בשרת שלך
  const zipFileUrl =
    '"C:Users97255Desktopjavascript project- להגשהתיק עבודות אישיcalculter.zip"'; // החלף לכתובת ה-URL המדויקת

  // הפעלת ההורדה של קובץ ה-ZIP
  window.location.href = zipFileUrl;
});
