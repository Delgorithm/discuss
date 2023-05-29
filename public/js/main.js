const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar__mobile');
const discuss_title = document.querySelector('.navbar-logo-title');
// btn 'sign in" from the hamburger menu
const btn_signin_hamburger = document.querySelector('.sign-in__mobile');

// btn hamburger
const btn_bar = document.querySelector('.bar');

// btn create account
const btn_create_account = document.querySelector('.btn__create-account');

let isChanged = false;

// Event listener click on menu_btn
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
    window.location.href = "../public/html/account.html";
});

// Event listener click on btn_signin_hamburger
btn_signin_hamburger.addEventListener('click', function () {
    window.location.href = "../public/html/account.html";
});