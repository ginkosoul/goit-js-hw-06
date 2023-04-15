const inputField = document.getElementById('name-input');
const outputField = document.getElementById('name-output');
const text = outputField.textContent;

inputField.addEventListener('input',(event) =>{
    if (event.currentTarget.value) {
        outputField.textContent = event.currentTarget.value;
    } else {
        outputField.textContent = text;
    }
});