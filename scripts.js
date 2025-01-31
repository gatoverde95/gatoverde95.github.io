document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});
