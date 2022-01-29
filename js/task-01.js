// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Считаем количество категорий
const elemCategory = document.querySelectorAll('.item');
console.log('Number of categories:', elemCategory.length);
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Цикл для прохода массива elemCategory

elemCategory.forEach(element => {
    // Вывод текста категории
    console.log('Category:', element.firstElementChild.textContent);
    // Вывод Количества всех чилдренов
    console.log('Elements:' , element.lastElementChild.children.length);
});

