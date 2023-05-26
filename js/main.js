const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar__mobile');
const discuss_title = document.querySelector('.navbar-logo-title');

// btn hamburger
const btn_bar = document.querySelector('.bar');

// btn create account
const btn_create_account = document.querySelector('.btn__create-account');

let isChanged = false;

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    if(!isChanged) {
        discuss_title.style.color = "white";
    } else {
        discuss_title.style.color = "black";
    }
    isChanged = !isChanged;
});

btn_create_account.addEventListener('click', function () {
    window.location.href = "../html/account.html";
});