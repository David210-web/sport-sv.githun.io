const btnMenu = document.querySelector('.btn-menu')
btnMenu.addEventListener('click',()=>{
    mostrarIcono();
    mostrarMenu();
})

function mostrarIcono(){
    const iconoMenu = document.querySelector('.menu-on')
    const iconoCerrar = document.querySelector('.menu-off')
    iconoMenu.classList.toggle('desactive')
    iconoCerrar.classList.toggle('desactive')

}

function mostrarMenu(){
    const menu = document.querySelector('.menu-principal')
    menu.classList.toggle('menu-active')
}


//comentarios sobre la pagina

console.log('Los videos son de youtube los dueños de esos videos son los canales en los que estan subidos los videos todos sus respectivos derechos a ellos')
console.log('el calendario de los partidos no es real son partidos inventados con fechas tambien inventadas')
console.log('las noticias son reales mas solo aplica para la primera semana del mes de julio del 2021')

