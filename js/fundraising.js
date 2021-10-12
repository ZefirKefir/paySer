const check = document.querySelector('.checkbox-input');
const defCollect = document.querySelector('.default-collecting-div');
const amount = document.querySelector('#collecting-amount');

check.addEventListener('change', () => {
    defCollect.classList.toggle('default-collecting-div_hidden');
})