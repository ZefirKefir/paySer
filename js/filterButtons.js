const filterButtons = document.querySelectorAll('.filter-list-button');

filterButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove('filter-button_active');
        })
        filterButtons[index].classList.add('filter-button_active');
    })
})