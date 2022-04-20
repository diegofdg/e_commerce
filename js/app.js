const btnLogin = document.getElementById('btn-login');
const inputContactoNombre = document.getElementById('input-contacto-nombre');
const inputContactoMensaje = document.getElementById('input-contacto-mensaje');
const formularioContacto = document.getElementById('formulario-contacto');
const contenedorCampos = document.getElementById('contenedor-campos');
const btnContactoEnviar = document.getElementById('btn-contacto-enviar');
let errorNombre = true;
let errorMensaje = true;

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
    btnContactoEnviar.disabled = true;
    btnContactoEnviar.classList.add('disabled');
};

function agregarEventListeners() {
    btnLogin.addEventListener('click', login);
    inputContactoNombre.addEventListener('blur', validarMensaje);
    inputContactoMensaje.addEventListener('blur', validarMensaje);
    formularioContacto.addEventListener('submit', enviarMensaje)
}

function login() {
    window.location.replace("login.html");
}

function validarMensaje(e) {
    e.preventDefault();
    
    switch(e.target.id) {
        case 'input-contacto-nombre':
            const nombre = inputContactoNombre.value;
            if(nombre === '') {
                errorNombre = true;
                mostrarMensaje('El nombre no puede estar vacío', 'error', formularioContacto.parentElement.nextElementSibling);
                return;
            }

            if(nombre.length > 40) {
                mostrarMensaje('El nombre no puede contener más de 40 caracteres', 'error', formularioContacto.parentElement.nextElementSibling);
                errorNombre = true;
                return;
            }

            errorNombre = false;

            break;

        case 'input-contacto-mensaje':
            const mensaje = inputContactoMensaje.value;
            if(mensaje === '') {
                errorMensaje = true;
                mostrarMensaje('El mensaje no puede estar vacío', 'error', formularioContacto.parentElement.nextElementSibling);
                return;
            }

            if(mensaje.length > 60) {
                mostrarMensaje('El mensaje no puede contener más de 60 caracteres', 'error', formularioContacto.parentElement.nextElementSibling);
                errorMensaje = true;
                return;
            }

            errorMensaje = false;

            break;

        default:
            return;
    }

    if(!errorNombre && !errorMensaje) {
        btnContactoEnviar.disabled = false;
        btnContactoEnviar.classList.remove('disabled');
    }
}

function enviarMensaje(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';
        mostrarMensaje('El email se ha enviado exitosamente', 'exito', btnContactoEnviar.parentElement.nextElementSibling);
    }, 3000);
}

function mostrarMensaje(mensaje, tipo, origen) {
    let mostrarMensaje;
    if(tipo == 'error') {
        mostrarMensaje = document.querySelector('.error');
    } else if (tipo == 'exito'){
        mostrarMensaje = document.querySelector('.exito');
    }
    
    if(!mostrarMensaje) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add(tipo, 'mensaje-contacto');
        divMensaje.textContent = mensaje;
        
        contenedorCampos.insertBefore(divMensaje, origen);
        
        setTimeout(()=> {
            divMensaje.remove();
            if (tipo == 'exito') {
                formularioContacto.reset();
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
            }
        }, 3000);
    }
}