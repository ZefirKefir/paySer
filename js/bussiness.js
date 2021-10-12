const sectionContents = document.querySelectorAll('.section-content');
const sectionButtons = document.querySelectorAll('.section-list-button');

sectionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        sectionButtons.forEach((btn) => {
            btn.classList.remove('section-list-button_active');
        })
        sectionContents.forEach((content) => {
            content.classList.remove('section-content_active');
        })
        sectionButtons[index].classList.add('section-list-button_active');
        sectionContents[index].classList.add('section-content_active');
    })
})

const hiddenDivButton = document.querySelectorAll('.hidden-div-button');
const hidableDiv = document.querySelectorAll('.hidable-div');
const hiddenDivPlusIcon = document.querySelectorAll('.hidden-div-button-icon_plus');
const hiddenDivMinusIcon = document.querySelectorAll('.hidden-div-button-icon_minus');


hiddenDivButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hidableDiv[index].classList.toggle('hidable-div_active');
        hiddenDivPlusIcon[index].classList.toggle('hidden');
        hiddenDivMinusIcon[index].classList.toggle('hidden');
    })
})

const form = document.querySelectorAll('.bussiness-body .modal-window form');
const apiInput = document.querySelector('#API-key');
const passwordInput = document.querySelector('.modal-window input#password-input');
const twoStep = document.querySelector('.modal-window input#two-factor-authentication');

form.forEach((form) => {
    form.addEventListener('click', (e) => {
        const t = e.target;
        if (t.classList.contains('password-edit')) {
            t.classList.add('hidden');
            passwordInput.removeAttribute('disabled');
            document.querySelector('.password-save').classList.remove('hidden');
        } else if (t.classList.contains('password-save')) {
            t.classList.add('hidden');
            passwordInput.setAttribute('disabled', '');
            document.querySelector('.password-edit').classList.remove('hidden');
        } else if (t.classList.contains('two-step-on')) {
            t.classList.add('hidden');
            twoStep.value = 'Включено';
            document.querySelector('.two-step-off').classList.remove('hidden');
        } else if (t.classList.contains('two-step-off')) {
            t.classList.add('hidden');
            twoStep.value = 'Выключено';
            document.querySelector('.two-step-on').classList.remove('hidden');
        }
    })
})


// password eye
const hiddenInputs = document.querySelectorAll('.hiddenInput');
const passwordEyes = document.querySelectorAll('.toggle-password');

passwordEyes.forEach((eye, i) => {
    eye.addEventListener('click', (e) => {
        passwordEyes[i].classList.toggle('toggle-password_slash');

        const t = e.target;
        if (t.classList.contains('toggle-password_slash')) {
            hiddenInputs[i].type = 'text';
        } else {
            hiddenInputs[i].type = 'password';
        }
    })
})
