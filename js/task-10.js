function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputRange = document.querySelector("input");

let boxArray = [];
let divsCount = 0;

inputRange.addEventListener("input", event => {
  console.log(Number(event.currentTarget.value));
  // console.log(divsCount);
  // return Number(event.currentTarget.value);
  divsCount = Number(event.currentTarget.value);
});
console.log(divsCount);
function createBoxes(amount) {
  let height = 30;
  let width = 30;
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

createBtn.addEventListener("click", createBoxes(divsCount));
destroyBtn.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
