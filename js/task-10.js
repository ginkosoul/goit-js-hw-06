function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  let newBoxes = '';
  for (let i = 0; i < amount; i++) {
    newBoxes += createDiv(30 + 10*i, getRandomHexColor());
  }
  boxes.innerHTML = newBoxes;
}

function destroyBoxes(){
  boxes.innerHTML = '';
}

const createDiv = (size, color) => `
  <div style="background-color: ${color}; width: ${size}px; height: ${size}px;" >
  </div>`;

const boxes = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNum = document.querySelector('#controls > input');

console.log(boxes)
console.log(createBtn)
console.log(destroyBtn)
console.log(inputNum)

createBtn.addEventListener('click', () => {
  const boxNum = Number(inputNum.value);
  console.log(boxNum);
  boxes.style.display = "flex";
  boxes.style.flexWrap = "wrap"
  createBoxes(boxNum);
})

destroyBtn.addEventListener('click',destroyBoxes);

