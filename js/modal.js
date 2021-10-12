// modal window
const modalButtons = document.querySelectorAll('.modal-button');
const modalWindows = document.querySelectorAll('.modal-window');
const modalWindowContents = document.querySelectorAll('.modal-window-content')

const scrollWidth = window.innerWidth - document.body.offsetWidth;
modalButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalWindows[index].classList.add('modal-window_active');
        document.body.classList.add('no-scroll');
        document.body.style.cssText = `padding-right: ${scrollWidth}px`;
    })
})

modalWindows.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('close-modal') || target.classList.contains('modal-window_active')) {
            modalWindows[index].classList.remove('modal-window_active');
            document.body.classList.remove('no-scroll');
            document.body.style.cssText = '';
        }
    })
})