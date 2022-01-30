// Инпут
const inputValue = document.querySelector("#name-input");
// Значение спан
const spanValue = document.querySelector("#name-output");

// Добавляем слушателя на ивент инпут
inputValue.addEventListener("input", event => {
  // Если строка пустая, будет Аннонимус по умолчанию
  if (event.currentTarget.value === "") {
    spanValue.textContent = "Anonymous";
  } else {
    // Добавляем в спан текст из инпута
    spanValue.textContent = event.currentTarget.value;
  }
});
