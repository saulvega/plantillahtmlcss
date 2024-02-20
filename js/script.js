let progresscircle = document.getElementById("progress1");
let percentage = document.getElementById("percentage");
let loadingDots = document.querySelector('.dots');

let cantidad = 0;
let cantidad2 = 630;

let tiempo = setInterval(() => {
    cantidad += 1;
    let valores = Math.ceil((cantidad2 -= 6.3));
    percentage.textContent = cantidad + "%";
    progresscircle.style.strokeDashoffset = `${valores}`;
    document.querySelector('.progress-bar').style.width = cantidad + "%";
    if (cantidad >= 75) {
        clearInterval(tiempo);
        // Una vez que la carga esté completa, mostrar el porcentaje final y eliminar el texto de "Cargando"
        percentage.textContent = "75%";
        document.querySelector('.progress-bar').textContent = "75%";
        // Eliminar los puntos de carga
        loadingDots.style.display = "none";
    }
}, 80);

// Función para observar cuando el elemento está en la pantalla
function startAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            // Si el elemento está completamente en la pantalla, comienza la animación
            startProgressAnimation();
            // Deja de observar el elemento para evitar múltiples activaciones
            observer.unobserve(entry.target);
        }
    });
}
// Función para iniciar la animación de progreso
function startProgressAnimation() {
    // Inicia la animación modificando las propiedades CSS de los elementos necesarios
    progresscircle.style.animation = "progress-animation 2s linear forwards";
    document.querySelector('.progress-bar').style.animation = "progress-bar-animation 2s linear forwards";
}


// Configuración del observer
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1 // Se activará cuando el 100% del elemento sea visible
};

// Elemento que se va a observar (la barra de progreso)
let target = document.querySelector('.progress-container');

// Crear el observer
let observer = new IntersectionObserver(startAnimation, options);

// Observar el elemento
observer.observe(target);

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(e){
    const parrafos = document.querySelectorAll(".informacion")

    let alturas = [];
    let alturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){

        parrafos.forEach(parrafo =>{

            if(alturaMaxima ==0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima +"px";
            }
        });

        return aplicarAlturas;

    })();

    alturaMaxima = Math.max.apply(Math, alturas);

    aplicarAlturas();

})