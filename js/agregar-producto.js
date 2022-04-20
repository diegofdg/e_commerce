const btnBuscarArchivo = document.getElementById('btn-buscar-archivo');
const formularioAgregar = document.getElementById('formulario-agregar');
const inputBuscarArchivo = document.getElementById('input-buscar-archivo');
const inputAgregarNombre = document.getElementById('input-agregar-nombre');
const inputAgregarPrecio = document.getElementById('input-agregar-precio');
const inputAgregarMensaje = document.getElementById('input-agregar-mensaje');
const btnAgregarEnviar = document.getElementById('btn-agregar-enviar');
const campoAgregarNombre = document.getElementById('campo-agregar-nombre');
const campoAgregarPrecio = document.getElementById('campo-agregar-precio');
const campoAgregarMensaje = document.getElementById('campo-agregar-mensaje');
const contenedorCamposAgregar = document.getElementById('contenedor-campos-agregar');

let errorAgregarNombre = true;
let errorAgregarMensaje = true;
let errorAgregarPrecio = true;
let errorAgregarImagen = true;

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
    btnAgregarEnviar.disabled = true;
    btnAgregarEnviar.classList.add('disabled');
};

function agregarEventListeners() {
    btnBuscarArchivo.addEventListener('click', buscarArchivo);
    inputBuscarArchivo.addEventListener('change', verificarArchivo);
    inputAgregarNombre.addEventListener('blur', validarProducto);
    inputAgregarMensaje.addEventListener('blur', validarProducto);
    inputAgregarPrecio.addEventListener('blur', validarProducto);
    formularioAgregar.addEventListener('submit', agregarProducto);
}

function verificarArchivo() {
    if(document.getElementsByClassName('input-buscar-archivo')[0].files[0] === undefined) {
        errorAgregarImagen = true;
    } else {
        errorAgregarImagen = false;
    }
}

function buscarArchivo () {
    document.getElementById('input-buscar-archivo').click();
}

function validarProducto(e) {
    e.preventDefault();
    
    switch(e.target.id) {
        case 'input-agregar-nombre':
            const nombre = inputAgregarNombre.value;
            if(nombre === '') {
                mostrarMensaje('El nombre no puede estar vacío', 'error', campoAgregarNombre);
                errorAgregarNombre = true;
                return;
            }

            if(nombre.length > 20) {
                mostrarMensaje('El nombre no puede contener más de 20 caracteres', 'error', campoAgregarNombre);
                errorAgregarNombre = true;
                return;
            }

            errorAgregarNombre = false;

            break;

        case 'input-agregar-precio':
            const precio = inputAgregarPrecio.value;
            
            if(precio === '') {
                mostrarMensaje('El precio no puede estar vacío', 'error', campoAgregarPrecio);
                errorAgregarPrecio = true;
                return;
            }

            errorAgregarPrecio = false;

            break;

        case 'input-agregar-mensaje':
            const mensaje = inputAgregarMensaje.value;
            if(mensaje === '') {
                mostrarMensaje('El mensaje no puede estar vacío', 'error', campoAgregarMensaje);
                errorAgregarMensaje = true;
                return;
            }

            if(mensaje.length > 150) {
                mostrarMensaje('El mensaje no puede contener más de 150 caracteres', 'error', campoAgregarMensaje);
                errorAgregarMensaje = true;
                return;
            }

            errorAgregarMensaje = false;

            break;

        default:
            return;
    }

    if(!errorAgregarImagen && !errorAgregarNombre && !errorAgregarPrecio && !errorAgregarMensaje) {
        btnAgregarEnviar.disabled = false;
        btnAgregarEnviar.classList.remove('disabled');        
    }
}

function agregarProducto(e) {
    e.preventDefault();
    
    const spinner = document.querySelector('#spinner-agregar');
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';
        mostrarMensaje('El producto se ha agregado exitosamente', 'exito', campoAgregarMensaje);        
        
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
        divMensaje.classList.add(tipo, 'mensaje-agregar');
        divMensaje.textContent = mensaje;
        
        origen?.parentElement.insertBefore(divMensaje, origen.nextElementSibling);
        
        setTimeout(()=> {
            divMensaje.remove();
            if (tipo == 'exito') {
                formularioAgregar.reset();
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
            }
        }, 3000);
    }
}