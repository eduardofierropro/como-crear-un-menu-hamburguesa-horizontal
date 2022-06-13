

/* Cuando hago CLICK .button, .nav TOGGLE 'header__nav--activo' */

const button = (document.querySelector('.header__button') as HTMLButtonElement)
const nav    = (document.querySelector('.header__nav')    as HTMLElement)

button.addEventListener('click',() : void =>{
    nav.classList.toggle('header__nav--activo')
})