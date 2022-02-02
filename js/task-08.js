// Получаем нашу форму
const form = document.querySelector(".login-form");
// Слушатель на форму по сабмиту
form.addEventListener("submit", handleSubmit);
// Функция обработчик
function handleSubmit(event) {
  // Сбрасываем дефолтное поведение формы
  event.preventDefault();
  // Делаем деструктуризацию для получения только нужных эмейла и пароля
  const {
    elements: { email, password }
  } = event.currentTarget;
  //   Проверка на заполненость формы, если хоть одно поле не заполнено выводим алерт
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  // Если поля заполнены, заполняем обьекту юзер эмеил и пароль
  const user = {
    email: email.value,
    password: password.value
  };
  // Выводим в консоль логин и пароль
  console.log(`Login: ${user.email}, Password: ${user.password}`);
  // Сбрасываем форму
  event.currentTarget.reset();
}
