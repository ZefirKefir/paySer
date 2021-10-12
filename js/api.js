const sectionBtns = document.querySelectorAll('.mini-section-button');
const sectionBtnIcons = document.querySelectorAll('.mini-section-icon');
const sections = document.querySelectorAll('.section-list');

sectionBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sectionBtnIcons[i].classList.toggle('mini-section-icon_active');
        sections[i].classList.toggle('section-list_active');
    })
})