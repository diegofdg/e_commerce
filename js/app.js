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

console.log(campoContactoNombre);


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
                mostrarMensajeContacto('El nombre no puede estar vacío', 'error', campoContactoNombre);
                return;
            }

            if(nombre.length > 40) {
                mostrarMensajeContacto('El nombre no puede contener más de 40 caracteres', 'error', campoContactoNombre);
                errorNombre = true;
                return;
            }

            errorNombre = false;

            break;

        case 'input-contacto-mensaje':
            const mensaje = inputContactoMensaje.value;
            if(mensaje === '') {
                errorMensaje = true;
                mostrarMensajeContacto('El mensaje no puede estar vacío', 'error', campoContactoMensaje);
                return;
            }

            if(mensaje.length > 60) {
                mostrarMensajeContacto('El mensaje no puede contener más de 60 caracteres', 'error', campoContactoMensaje);
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
        mostrarMensajeContacto('El email se ha enviado exitosamente', 'exito', btnContactoEnviar.parentElement.nextElementSibling);
    }, 3000);
}

function mostrarMensajeContacto(mensaje, tipo, origen) {
    console.log(origen);
    
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
        
        //contenedorCampos.insertBefore(divMensaje, origen);
        origen?.parentElement.insertBefore(divMensaje, origen.nextElementSibling);
        
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