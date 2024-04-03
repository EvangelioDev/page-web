const menu_btn = document.querySelector(".menu-btn");

menu_btn.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.main-cards', {dilay: 500});
ScrollReveal().reveal('.banner-one', {dilay: 500});
ScrollReveal().reveal('.banner-two', {dilay: 500});