//responsive y Nv hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var navLeft = document.querySelector('.nav-left');

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            navLeft.classList.toggle('active');
        });
    }
});



//indicador barra de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la URL de la página actual
    const currentPage = window.location.pathname.split('/').pop();

    // Obtener todos los elementos de navegación
    const navLinks = document.querySelectorAll('.elementoNavegacion a');

    // Iterar sobre los enlaces y comparar con la página actual
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active'); // Agregar clase activa si es la página actual
        }
    });
});




//animacion imagenes tarjetas
document.addEventListener("DOMContentLoaded", function() {
    
    const tarjetas = document.querySelectorAll('.contenedorTarjeta img, .contenedorCuenta img');

    //configuracion del Tilt (animacion)
    tarjetas.forEach(tarjeta => {
        VanillaTilt.init(tarjeta, {
            max: 25,  // Máximo grado de inclinación
            speed: 400,  // Velocidad de la animación
            glare: true,  // Habilita el efecto de brillo
            "max-glare": 0.5  // Intensidad del brillo
        });
    });
});


//contador 

document.addEventListener('DOMContentLoaded', function() {
    const contador = document.getElementById('contador');
    const txtContador = document.querySelector('.txtContador');

   //Indica que tanta visibilidad necesita tener el usuario para que el contador se inicie
    const opciones = {
        root: null, //viewerport segun el navegador (donde se corta la pagina para hacer scroll)
        rootMargin: '0px', 
        threshold: 0.45// Umbral de visibilidad del 50%
    };

    
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia el contador cada vez que se vuelve a ver
                resetearContador();
            }
        });
    };

    // Crea el Intersection Observer
    const observer = new IntersectionObserver(callback, opciones);

    // Observa el contador
    observer.observe(contador);

    // Función para animar el contador
    function animarContador() {
        const valorFinal = 44; // Valor final del contador
        const duracion = 3000; // Duración de la animación en milisegundos
        const incremento = Math.ceil(valorFinal / duracion * 100); // Incremento por cada paso

        let valorActual = 0;

        const actualizarContador = setInterval(() => {
            valorActual += incremento;

            // Actualiza el texto del contador
            contador.textContent = valorActual.toLocaleString(); // Formatea el número con separadores de miles

            // Detiene el intervalo cuando alcanza el valor final
            if (valorActual >= valorFinal) {
                clearInterval(actualizarContador);
                contador.textContent = valorFinal.toLocaleString(); // Asegura que el contador muestre el valor final exacto
            }
        }, 50); // Intervalo de actualización del contador (milisegundos)
    }

    // Función para reiniciar el contador
    function resetearContador() {
        contador.textContent = '0'; // Reinicia el texto del contador a 0 antes de animarlo nuevamente
        animarContador(); // Inicia la animación del contador
    }

    // Inicia la animación del contador cuando se carga la página por primera vez
    animarContador();
});
