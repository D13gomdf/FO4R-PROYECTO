document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var nombreLocal = document.getElementById('nombre').value;
        var apellidoPaternoLocal = document.getElementById('apellidoPaterno').value;
        var apellidoMaternoLocal = document.getElementById('apellidoMaterno').value;
        var correoLocal = document.getElementById('correo').value;
        var passwordLocal = document.getElementById('password').value;
        var telefonoLocal = document.getElementById('telefono').value;

        sessionStorage.setItem('nombre', nombreLocal);
        sessionStorage.setItem('apellidoPaterno', apellidoPaternoLocal);
        sessionStorage.setItem('apellidoMaterno', apellidoMaternoLocal);
        sessionStorage.setItem('correo', correoLocal);
        sessionStorage.setItem('password', passwordLocal);
        sessionStorage.setItem('telefono', telefonoLocal);

        window.location.href = './../HTML/cuentaFour.html';
    });
});