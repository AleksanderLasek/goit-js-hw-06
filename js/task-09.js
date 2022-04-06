function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $colorChangingButton = document.querySelector(".change-color");
const $body = document.querySelector("body");
const $colorName = document.querySelector(".color");

$colorChangingButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let newColor = getRandomHexColor();
  $body.style.backgroundColor = `${newColor}`;
  $colorName.textContent = newColor;
}
