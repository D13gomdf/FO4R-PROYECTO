document.addEventListener('DOMContentLoaded', function() {
    var nombreRecuperado = sessionStorage.getItem('nombre');
    var apellidoPaternoRecuperado = sessionStorage.getItem('apellidoPaterno');
    var apellidoMaternoRecuperado = sessionStorage.getItem('apellidoMaterno');
    var correoRecuperado = sessionStorage.getItem('correo');
    var passwordRecuperado = sessionStorage.getItem('password');
    var telefonoRecuperado = sessionStorage.getItem('telefono');

    // Aquí puedes hacer lo que necesites con los datos recuperados
    // Por ejemplo, mostrarlos en algún elemento HTML en cuentaFour.html
    var nombreElemento = document.getElementById('nombreRecuperado');
    var apellidoElemento = document.getElementById('apellidoRecuperado');
    var correoElemento = document.getElementById('correoRecuperado');
    var telefonoElemento = document.getElementById('telefonoRecuperado');

    if (nombreElemento) {
        nombreElemento.textContent = nombreRecuperado;
    }

    if (apellidoElemento) {
        apellidoElemento.textContent = apellidoPaternoRecuperado + ' ' + apellidoMaternoRecuperado;
    }

    if (correoElemento) {
        correoElemento.textContent = correoRecuperado;
    }

    if (telefonoElemento) {
        telefonoElemento.textContent = telefonoRecuperado;
    }
});


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