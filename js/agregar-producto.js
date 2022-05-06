import { modificarProducto, nuevoProducto, obtenerProducto } from './API.js';

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
const selectCategoria = document.getElementById('categoria');
const contenedorCamposAgregar = document.getElementById('contenedor-campos-agregar');
const iconoAgregarImagen = document.getElementById('icono-agregar-imagen');
const dropZone = document.getElementById('drop-zone');
const dropZoneDiv = document.getElementById('drop-zone-div');
let archivo;
let imagenArchivo = [];
let editar = false;
let idProducto;

let errorAgregarNombre = true;
let errorAgregarMensaje = true;
let errorAgregarCategoria = true;
let errorAgregarPrecio = true;
let errorAgregarImagen = true;

iniciarApp();

async function iniciarApp() {
    const parametrosURL = new URLSearchParams(window.location.search);
    idProducto = parseInt(parametrosURL.get('id'));
    agregarEventListeners();
    btnAgregarEnviar.disabled = true;
    btnAgregarEnviar.classList.add('disabled');

    if(idProducto !== NaN) {
        editar = true;
        btnAgregarEnviar.disabled = false;
        btnAgregarEnviar.classList.remove('disabled');
        const producto = await obtenerProducto(idProducto);
        mostrarProducto(producto);
    }    
};

function agregarEventListeners() {
    dropZone.addEventListener('dragover', permitirDrop, false);    
    dropZone.addEventListener('drop', drop, false);
    btnBuscarArchivo.addEventListener('click', buscarArchivo);
    inputBuscarArchivo.addEventListener('change', verificarArchivo);
    inputAgregarNombre.addEventListener('keyup', validarProducto);
    inputAgregarMensaje.addEventListener('keyup', validarProducto);
    inputAgregarPrecio.addEventListener('keyup', validarProducto);
    selectCategoria.addEventListener('change', validarProducto);
    formularioAgregar.addEventListener('submit', agregarProducto);
}

function permitirDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();    
    archivo = e.dataTransfer.files[0];
    leerImagen();
}

function leerImagen() {
    let tipoArchivo = archivo.type;
    let regexSoloImagenes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];

    if (regexSoloImagenes.includes(tipoArchivo)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(archivo);
        fileReader.onload = () => {            
            imagenArchivo.push(fileReader.result);
            dropZone.style.backgroundImage="url('" + imagenArchivo[0] + "')";
            dropZone.style.backgroundSize= "cover";
            dropZone.style.backgroundRepeat= "no-repeat";
            dropZone.style.backgroundPosition= "center center"
            dropZoneDiv.style.display="none";
        }
    } else {
        mostrarMensaje('Debe seleccionar una imágen válida', 'error', dropZone.parentElement);
    }
}

function verificarArchivo(e) {
    e.preventDefault();

    if(document.getElementsByClassName('input-buscar-archivo')[0].files[0] === undefined) {
        errorAgregarImagen = true;
    } else {
        archivo = document.getElementsByClassName('input-buscar-archivo')[0].files[0];
        leerImagen();
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
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
                return;
            }

            if(nombre.length > 20) {
                mostrarMensaje('El nombre no puede contener más de 20 caracteres', 'error', campoAgregarNombre);
                errorAgregarNombre = true;
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
                return;
            }

            errorAgregarNombre = false;

            break;

        case 'input-agregar-precio':
            const precio = inputAgregarPrecio.value;
            
            if(precio === '') {
                mostrarMensaje('El precio no puede estar vacío', 'error', campoAgregarPrecio);
                errorAgregarPrecio = true;
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
                return;
            }

            errorAgregarPrecio = false;

            break;

        case 'input-agregar-mensaje':
            const mensaje = inputAgregarMensaje.value;
            if(mensaje === '') {
                mostrarMensaje('El mensaje no puede estar vacío', 'error', campoAgregarMensaje);
                errorAgregarMensaje = true;
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
                return;
            }

            if(mensaje.length > 150) {
                mostrarMensaje('El mensaje no puede contener más de 150 caracteres', 'error', campoAgregarMensaje);
                errorAgregarMensaje = true;
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
                return;
            }

            errorAgregarMensaje = false;

            break;
        
        case 'categoria':
            const categoriaSeleccionada = document.querySelector('#categoria').value;
            if(categoriaSeleccionada === '') {
                mostrarMensaje('Debes seleccionar una categoría', 'error', campoAgregarCategoria);
                errorAgregarCategoria = true;
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
            }

            errorAgregarCategoria = false;

            break;

        default:
            return;
    }

    if(!errorAgregarImagen && !errorAgregarNombre && !errorAgregarPrecio && !errorAgregarMensaje &&!errorAgregarCategoria) {
        btnAgregarEnviar.disabled = false;
        btnAgregarEnviar.classList.remove('disabled');        
    }
}

async function agregarProducto(e) {
    e.preventDefault();

    let categoriaSeleccionada = document.querySelector('#categoria').value;

    switch(categoriaSeleccionada) {
        case '1':
            categoriaSeleccionada = 'Star Wars';
            break;
        case '2':
            categoriaSeleccionada = 'Consolas';
            break;
        case '3':
            categoriaSeleccionada = 'Diversos';
            break;
        default:
            break;
    }

    const categoria = categoriaSeleccionada;
    const nombre = inputAgregarNombre.value;
    const precio = inputAgregarPrecio.value;
    const descripcion = inputAgregarMensaje.value;
    const imagen = imagenArchivo[0];    

    const productoNuevo = {
        id: idProducto,
        categoria,
        nombre,
        precio,
        descripcion,
        imagen
    }

    console.log(productoNuevo);
    console.log(editar);
    
    
    

    if(editar) {
        console.log('entro aca');
        await modificarProducto(productoNuevo);
    } else {
        await nuevoProducto(productoNuevo);
    }    
    
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
                dropZone.style.backgroundImage="none";
                dropZoneDiv.style.display="flex";
                btnAgregarEnviar.disabled = true;
                btnAgregarEnviar.classList.add('disabled');
            }
        }, 3000);
    }
}

function mostrarProducto(producto) {
    const { nombre, precio, descripcion, imagen, categoria } = producto;
    console.log(producto);    

    imagenArchivo.push(producto.imagen);    
    dropZone.style.backgroundImage="url('" + imagenArchivo[0] + "')";
    dropZone.style.backgroundSize= "cover";
    dropZone.style.backgroundRepeat= "no-repeat";
    dropZone.style.backgroundPosition= "center center"
    dropZoneDiv.style.display="none";

    inputAgregarNombre.value = nombre;
    inputAgregarPrecio.value = precio;
    inputAgregarMensaje.value = descripcion;

    let categorias = document.querySelector('#categoria');

    switch(categoria) {
        case 'Star Wars':
            categorias.value = '1';
            break;
        case 'Consolas':
            categorias.value = '2';
            break;
        case 'Diversos':
            categorias.value = '3';
            break;
        default:
            break;
    }
    
    
    
    
}