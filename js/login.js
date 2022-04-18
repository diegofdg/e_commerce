const formularioLogin = document.getElementById('formulario-login');
const contenedorLogin = document.getElementById('contenedor-login');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const btnEnviar = document.getElementById('boton-enviar');
const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const usuario = 'correo@correo.com';
const password = '123456';

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
    if(btnEnviar) {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('disabled');
    }
};

function agregarEventListeners() {
    inputEmail.addEventListener('blur', validarLogin);
    inputPassword.addEventListener('blur', validarLogin);
    formularioLogin.addEventListener('submit', submitLogin);
}

function validarLogin(e) {
    e.preventDefault();
    
    switch(e.target.id){
        case 'input-email':
            const email = inputEmail.value;
            if(email === '') {
                mostrarMensaje('El email no puede estar vacío', 'error', formularioLogin.parentElement.nextElementSibling);
                return;
            }

            if(!expresionRegular.test(email)){
                mostrarMensaje('El email no es válido', 'error', formularioLogin.parentElement.nextElementSibling);
                return;
            }

            console.log('Pasó la validación de email');
            
            break;

        case 'input-password':
            const password = inputPassword.value;
            if(password === '') {
                mostrarMensaje('El password no puede estar vacío', 'error', formularioLogin.parentElement.nextElementSibling);
                return;
            }

            console.log('Pasó la validación de password');
            
            break;

        default:
            return;
    }
}

function submitLogin(e) {
    e.preventDefault();
        
    if(inputEmail.value == 'correo@correo.com') {
        if(inputPassword.value == '123456') {
            window.location.replace("agregar-producto.html");
        }
    } else {
        mostrarMensaje('Usuario o Password incorrectos', 'error', formularioLogin.parentElement.nextElementSibling);
    }
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
        divMensaje.classList.add(tipo);
        divMensaje.textContent = mensaje;
        contenedorLogin.insertBefore(divMensaje, origen);
        
        setTimeout(()=> {
            divMensaje.remove();
            if (tipo == 'exito'){
                formularioLogin.reset();
                btnEnviar.disabled = true;
                btnEnviar.classList.add('disabled');
            }
        }, 3000);
    }
}