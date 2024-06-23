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

















