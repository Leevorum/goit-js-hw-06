const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
// Получаем селектор UL
const ulEl = document.querySelector(".gallery");
// Делаем разметку с помощью мапа и шаблонных строк
const galleryMarkup = images
  .map(image => `<li class="gallery-item"><img src="${image.url}" width = 320px height = 200px; alt="${image.alt}"></li>`)
  .join("");
// Добавляем в хтмл
ulEl.insertAdjacentHTML("afterbegin", galleryMarkup);
