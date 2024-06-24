document.addEventListener('DOMContentLoaded', function() {
    var nombreRecuperado = sessionStorage.getItem('nombre');
    var apellidoPaternoRecuperado = sessionStorage.getItem('apellidoPaterno');
    var apellidoMaternoRecuperado = sessionStorage.getItem('apellidoMaterno');
    var correoRecuperado = sessionStorage.getItem('correo');
    var telefonoRecuperado = sessionStorage.getItem('telefono');
    var profileImageRecuperado = sessionStorage.getItem('profileImage');

    var nombreElemento = document.getElementById('nombreRecuperado');
    var apellidoElemento = document.getElementById('apellidoRecuperado');
    var correoElemento = document.getElementById('correoRecuperado');
    var telefonoElemento = document.getElementById('telefonoRecuperado');
    var profileImageElemento = document.getElementById('profileImage');

    if (!nombreRecuperado || !apellidoPaternoRecuperado || !apellidoMaternoRecuperado || !correoRecuperado || !telefonoRecuperado) {
        alert('No se pueden mostrar datos ya que primero se tiene que registrar.');
        window.location.href = './../HTML/login.html';
    } else {
        if (nombreElemento) nombreElemento.textContent = nombreRecuperado;
        if (apellidoElemento) apellidoElemento.textContent = apellidoPaternoRecuperado + ' ' + apellidoMaternoRecuperado;
        if (correoElemento) correoElemento.textContent = correoRecuperado;
        if (telefonoElemento) telefonoElemento.textContent = telefonoRecuperado;
        if (profileImageElemento && profileImageRecuperado) profileImageElemento.src = profileImageRecuperado;
        else profileImageElemento.src = "./../profilepicture.png"; // Ruta de la imagen predeterminada
    }

    document.getElementById('editButton').addEventListener('click', enableEditing);
    document.getElementById('saveButton').addEventListener('click', saveChanges);
    document.getElementById('changeProfileImageButton').addEventListener('click', changeProfileImage);
});

function enableEditing() {
    var elements = document.querySelectorAll('.valoresDatos');
    elements.forEach(function(element) {
        var input = document.createElement('input');
        input.type = 'text';
        input.value = element.textContent;
        input.classList.add('editable');
        element.parentNode.replaceChild(input, element);
    });

    document.getElementById('editButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline-block';
}

function saveChanges() {
    var inputs = document.querySelectorAll('.editable');
    var data = {};

    inputs.forEach(function(input) {
        var span = document.createElement('span');
        span.classList.add('valoresDatos');
        span.textContent = input.value;
        input.parentNode.replaceChild(span, input);

        // Save to sessionStorage
        if (input.id.includes('nombre')) {
            sessionStorage.setItem('nombre', input.value);
        } else if (input.id.includes('apellido')) {
            var apellidos = input.value.split(' ');
            sessionStorage.setItem('apellidoPaterno', apellidos[0]);
            sessionStorage.setItem('apellidoMaterno', apellidos[1] || '');
        } else if (input.id.includes('correo')) {
            sessionStorage.setItem('correo', input.value);
        } else if (input.id.includes('telefono')) {
            sessionStorage.setItem('telefono', input.value);
        }
    });

    document.getElementById('editButton').style.display = 'inline-block';
    document.getElementById('saveButton').style.display = 'none';
}

function changeProfileImage() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.addEventListener('change', function() {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var img = document.getElementById('profileImage');
            img.src = e.target.result;

            // Save to sessionStorage
            sessionStorage.setItem('profileImage', e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}


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