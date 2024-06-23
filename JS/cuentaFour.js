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

