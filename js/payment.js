const sectionButtons = document.querySelectorAll('.payment-select-button');
const sections = document.querySelectorAll('.section-content');

sectionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        sectionButtons.forEach((btn) => {
            btn.classList.remove('payment-select-button_active');
        })
        sections.forEach((section) => {
            section.classList.remove('section-content_active');
        })
        btn.classList.add('payment-select-button_active');
        sections[index].classList.add('section-content_active');
    })
})