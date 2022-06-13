/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
var button = document.querySelector('.button');
var nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});
