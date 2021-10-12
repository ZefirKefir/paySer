const buttons = document.querySelectorAll('.roles .button');
const permissions = document.querySelectorAll('.permission');

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        permissions.forEach((perm) => {
            perm.classList.remove('permission_active');
        })
        permissions[i].classList.add('permission_active');
    })
})