

/* Cuando hago CLICK .Header-button, .Header-nav TOGGLE 'isActive' */

const button = (document.querySelector('.Header-button') as HTMLButtonElement)
const nav    = (document.querySelector('.Header-nav')    as HTMLElement)

button.addEventListener('click',() : void => {
    nav.classList.toggle('isActive')
})