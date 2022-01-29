const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// Выбираем по ИД список
const ulEl = document.querySelector("#ingredients");

// Создаем пустой массив для Li
const elements = [];
// Проходим циклом по массиву ingredients
for (let i = 0; i < ingredients.length; i += 1) {
  // На каждой итерации создаем элемент Ли и добавляем ему ЦСС класс и значение из массива
  const liEl = document.createElement("li");
  liEl.textContent = ingredients[i];
  liEl.classList.add("item");
  // Записываем каждый созданый Ли в массив элементов
  elements.push(liEl);
}
// Добавляем к нашему списку ЛИ через спред
ulEl.append(...elements);
