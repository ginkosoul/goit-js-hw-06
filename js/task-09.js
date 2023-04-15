function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyElement = document.querySelector('body');
const btnChangeColor = document.querySelector('button.change-color');
const colorText = document.querySelector('span.color');

btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor(){
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  colorText.textContent = color;
}