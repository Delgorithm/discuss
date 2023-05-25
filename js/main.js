const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar__mobile');
const navbar_title = document.querySelector('.navbar')

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar_title.style.color = "white";
});