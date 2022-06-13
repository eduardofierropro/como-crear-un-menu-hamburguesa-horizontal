

/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


/* jQuery : Enlazar jQuery*/
/* $('.button').on('click',()=>{
    $('.nav').toggleClass('activo')
}) */