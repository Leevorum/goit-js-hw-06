// Инпут и спан
const inputRange = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
// Слушатель на инпут
spanEl.style.fontSize = `${inputRange.value}px`;
inputRange.addEventListener("input", event => {
  // Добавляем инлайн стиль к спан, значение текущее значение range input
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
