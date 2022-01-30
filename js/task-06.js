// Получаем инпут
const inputValidation = document.querySelector("#validation-input");
// Слушатель на инпут событие
inputValidation.addEventListener("input", event => {
  // Если количество символов равно дата атрибуту добавляем класс валид и убираем класс невалид.
  // Для проверки добавляем намбер к дата атрибуту, так как он стринг.

  if (Number(inputValidation.dataset.length) === event.currentTarget.value.length) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
});
