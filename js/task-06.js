const validationInput = document.getElementById('validation-input');
const dataLength = Number(validationInput.dataset.length);
console.log(dataLength)

validationInput.addEventListener('blur',(event) => {
    console.log(event.currentTarget.value.length, dataLength);
    if (event.currentTarget.value.length === dataLength){
        validationInput.classList.remove('invalid')
        validationInput.classList.add('valid');
    } else if (event.currentTarget.value){
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('valid')
        validationInput.classList.remove('invalid')
    }
})