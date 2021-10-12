const scrollToTopBtn = document.querySelector('.top-scroll-button');
scrollToTopBtn.addEventListener('click', () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})
const scrollFade = () => {
    const y = window.scrollY;
    if (y>= 50) {
        scrollToTopBtn.classList.add('shown');
    } else {
        scrollToTopBtn.classList.remove('shown');
    }
}
window.addEventListener('scroll', scrollFade);