function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

button.addEventListener("click", handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}
