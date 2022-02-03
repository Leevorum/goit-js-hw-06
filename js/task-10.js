function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Получаем нужные елементы
const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputRange = document.querySelector('[type="number"]');
// создае пустой массив
let boxArray = [];
// let divsCount = Number(inputRange.value);
// inputRange.addEventListener("input", event => {
//   // return Number(event.currentTarget.value);
//   divsCount = Number(event.currentTarget.value);
// });
// Переменные высоты и ширины дивов
let height = 30;
let width = 30;
// Функция для создания дивов
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = `${width}px`;
    divBox.style.height = `${height}px`;
    // Добавляем диву рандомный цвет
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    // Собираем все в массив
    boxArray.push(divBox);
    // Добавляем +10 к размерам дива на каждой итерации
    height += 10;
    width += 10;
  }
  // Добавляем все дивы в разметку
  divBoxes.append(...boxArray);
}
// Добавляем на кнопку создания слушатель, и передаем функцию создания
createBtn.addEventListener("click", () => {
  createBoxes(Number(inputRange.value));
});
// Слушатель на кнопку уничтожить, возвращаем параметры дивов к стандартным 30
// Очищаем массив и хтмл
destroyBtn.addEventListener("click", () => {
  height = 30;
  width = 30;
  boxArray = [];
  divBoxes.innerHTML = "";
});
