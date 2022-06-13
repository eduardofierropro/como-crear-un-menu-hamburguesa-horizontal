
/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */

const button = (document.querySelector('.button') as HTMLButtonElement)
const nav    = (document.querySelector('.nav')    as HTMLElement)

button.addEventListener('click',() : void => {
    nav.classList.toggle('activo')
})