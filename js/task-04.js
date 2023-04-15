let counterValue = 0;
let isActive = true;
const message = ["Undefined   ", "Undefined.  ", "Undefined.. ", "Undefined...", "Selfcheck   ", "Selfcheck.  ", "Selfcheck.. ", "Selfcheck...", "System restarts   ", "System restarts.  ", "System restarts.. ", "System restarts...", "System restarts.  "]

const elementValue = document.getElementById('value');
// const elementValue = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener('click',(event) => {
    if (isActive) {
        event.preventDefault;
        counterValue += 1;
        elementValue.textContent = counterValue;
        if (counterValue === -13) catchUndefined();
    }
})

btnDecrement.addEventListener('click',(event) => {
    if (isActive) {
        event.preventDefault;
        counterValue -= 1;
        elementValue.textContent = counterValue;
        if (counterValue === 13) catchUndefined();
    }
})


const catchUndefined = () => {
    isActive = false;
    elementValue.textContent = "Undefined";
    setTimeout(() => {
        for (let i =0; i < message.length;i += 1) {
            setTimeout(() => {elementValue.textContent = message[i]}, i*500);
        }
        setTimeout(() => {isActive = true;
            elementValue.textContent = counterValue}, message.length*500);
    },250)
    
}
