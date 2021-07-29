//documento de javascript

//prueba de slider

const slides = document.querySelector(".slider-item").children
const prevSlide = document.querySelector(".left-slide")
const nextSlide = document.querySelector(".right-slide")
let totalSlides = slides.length
var index = 0;

prevSlide.addEventListener('click',()=>{
    next('prev')
})

nextSlide.addEventListener('click',()=>{
    next('next')
})

function next(direccion){
    if(direccion=="next"){
        index++;

        if(index==totalSlides){
            index = 0
        }
    }else{
        if(index== 0){
            index = totalSlides-1
        }
        else{
            index--
        }
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider-active')
    }
    slides[index].classList.add('slider-active')
}

// let dato = window.innerWidth;
// alert(dato)


//menu responsive

//boton menu y cerrar iconos

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