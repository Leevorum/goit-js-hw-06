function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Получаем ссылки на нужные элементы
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
// Слушатель на кнопку
changeColorButton.addEventListener("click", () => {
  // результат функции в переменную
  let randomColor = getRandomHexColor();
  // Добавляем цвет в боди
  body.style.backgroundColor = `${randomColor}`;
  // Добавляем текстовое значение в спан
  spanColor.textContent = `${randomColor}`;
});
