let counterValue = 0;
// Получаем кнопки с дата атрибутами
const decrementButton = document.querySelector('[data-action="decrement"]');

const incrementButton = document.querySelector('[data-action="increment"]');
// Получаем спан для Value
const uiValue = document.querySelector("#value");
// Слушатель на кнопку увеличить
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  uiValue.textContent = counterValue;
});
// Слушатель на кнопку уменьшить
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  uiValue.textContent = counterValue;
});
