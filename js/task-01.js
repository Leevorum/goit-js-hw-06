// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const elemCategory = document.querySelectorAll('.item');
console.log('Number of categories:', elemCategory.length);
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
const h1 = document.querySelector('.item').firstElementChild;

elemCategory.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    
    console.log('Elements:' , element.lastElementChild.children.length);
});

