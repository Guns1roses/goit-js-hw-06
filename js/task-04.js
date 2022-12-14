// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);