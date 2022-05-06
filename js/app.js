const btnLogin = document.getElementById('btn-login');
const inputContactoNombre = document.getElementById('input-contacto-nombre');
const inputContactoMensaje = document.getElementById('input-contacto-mensaje');
const formularioContacto = document.getElementById('formulario-contacto');
const contenedorCampos = document.getElementById('contenedor-campos');
const btnContactoEnviar = document.getElementById('btn-contacto-enviar');
const campoContactoNombre = document.getElementById('campo-contacto-nombre');
const campoContactoMensaje = document.getElementById('campo-contacto-mensaje');
let errorNombre = true;
let errorMensaje = true;

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    btnContactoEnviar.disabled = true;
    btnContactoEnviar.classList.add('disabled');
};

function agregarEventListeners() {
    btnLogin.addEventListener('click', login);
    inputContactoNombre.addEventListener('keyup', validarMensaje);
    inputContactoMensaje.addEventListener('keyup', validarMensaje);
    btnContactoEnviar.addEventListener('click', enviarMensaje);
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
                mostrarMensajeContacto('El nombre no puede estar vacío', 'error', campoContactoNombre);
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
                return;
            }

            if(nombre.length > 40) {
                errorNombre = true;
                mostrarMensajeContacto('El nombre no puede contener más de 40 caracteres', 'error', campoContactoNombre);
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
                return;
            }

            errorNombre = false;
            break;

        case 'input-contacto-mensaje':
            const mensaje = inputContactoMensaje.value;
            if(mensaje === '') {
                errorMensaje = true;
                mostrarMensajeContacto('El mensaje no puede estar vacío', 'error', campoContactoMensaje);
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
                return;
            }

            if(mensaje.length > 60) {
                errorMensaje = true;
                mostrarMensajeContacto('El mensaje no puede contener más de 60 caracteres', 'error', campoContactoMensaje);
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
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

    setTimeout(() => {
        spinner.style.display = 'none';
        mostrarMensajeContacto('El email se ha enviado exitosamente', 'exito', btnContactoEnviar.parentElement);
    }, 3000);
}

function mostrarMensajeContacto(mensaje, tipo, origen) {
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
        origen?.parentElement.insertBefore(divMensaje, origen);
        
        setTimeout(() => {
            divMensaje.remove();
            if (tipo == 'exito') {
                formularioContacto.reset();
                btnContactoEnviar.disabled = true;
                btnContactoEnviar.classList.add('disabled');
            }
        }, 2000);
    }
}