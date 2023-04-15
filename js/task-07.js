const fontSizeCtrl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeCtrl.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
})