function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputRange = document.querySelector('[type="number"]');

let boxArray = [];
// let divsCount = Number(inputRange.value);

// inputRange.addEventListener("input", event => {
//   // console.log(Number(event.currentTarget.value));
//   // console.log(divsCount);
//   // return Number(event.currentTarget.value);
//   return (divsCount += Number(event.currentTarget.value));
// });
let height = 30;
let width = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = `${width}px`;
    divBox.style.height = `${height}px`;
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxArray.push(divBox);
    height += 10;
    width += 10;
  }
  divBoxes.append(...boxArray);
}
createBtn.addEventListener("click", () => {
  createBoxes(Number(inputRange.value));
});
function destcroyDivs() {
  height = 30;
  width = 30;
  boxArray = [];
  divBoxes.innerHTML = "";
}
destroyBtn.addEventListener("click", () => {
  destcroyDivs();
});
console.log(height);
