/* Cuando hago CLICK .button, .nav TOGGLE 'header__nav--activo' */
var button = document.querySelector('.header__button');
var nav = document.querySelector('.header__nav');
button.addEventListener('click', function () {
    nav.classList.toggle('header__nav--activo');
});
