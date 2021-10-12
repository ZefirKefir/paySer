// burger
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
const burgerArrow = document.querySelector('.burger-icon')

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu_active')
    burgerButton.classList.toggle('burger-button_active')
})