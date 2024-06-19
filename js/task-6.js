function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// let heightBox = 30;
// let widthBox = 30;

// inputEl.addEventListener("input", () => {
//   const inputValue = Number(inputEl.value);
//   console.log(inputValue);
//   if (inputValue >= 1 && inputValue <= 100) {
//     btnCreate.addEventListener("click", () => createBoxes(inputValue));
//     btnCreate.removeEventListener("click", createBoxes);
//   }
//   btnDestroy.addEventListener("click", destroyBoxes);
// });

// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.style.width = `${widthBox} px`;
//     newDiv.style.height = `${heightBox}`;
//     newDiv.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(newDiv);
//     widthBox += 10;
//     heightBox += 10;
//   }
// }

// function destroyBoxes() {
//   boxes.replaceChildren();
//   widthBox = 30;
//   heightBox = 30;
// }
const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newDiv);
  }
}

createBtn.addEventListener("click", () => {
  const inputValue = Number(input.value);
  if (inputValue >= 1 && inputValue <= 100) {
    boxes.innerHTML = "";
    createBoxes(inputValue);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
