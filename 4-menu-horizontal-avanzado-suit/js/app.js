/* Cuando hago CLICK .Header-button, .Header-nav TOGGLE 'isActive' */
var button = document.querySelector('.Header-button');
var nav = document.querySelector('.Header-nav');
button.addEventListener('click', function () {
    nav.classList.toggle('isActive');
});
