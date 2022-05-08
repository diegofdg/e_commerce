import { obtenerProductos, eliminarProducto } from './API.js';

const inputBuscador = document.getElementById('input-buscador');
const iconoBuscador = document.getElementById('icono-buscador');
const loginDiv = document.getElementById('login-div');
const btnLogin = document.getElementById('btn-login');
const logoDiv = document.getElementById('logo-div');
const headerTodosProductos = document.getElementById('header-todos-productos');
const btnAgregar = document.getElementById('btn-agregar');
const productosDivTodos = document.getElementById('productos-div-todos');
let mostrarHeader = true;
let productos = [];
let idProductos = [ 12345, 23456, 34567, 45678, 56789, 67890, 78901, 89012, 90123, 10123, 11234, 12456, 13567, 14678, 15789, 16890, 17901, 18012 ];

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProductos();
    verificarLogin();
};

function agregarEventListeners() {
    btnAgregar.addEventListener('click', agregarProducto);

    inputBuscador.addEventListener('keyup', (e) => {
        if(e.target.value === "") {
            mostrarProductos();
        } else if(e.target.value.length > 3) {
            filtrarProductos(e.target.value);
        }
    });

    iconoBuscador.addEventListener('click', () => {
        let mediaqueryList = window.matchMedia('(max-width: 767px)');
        if(mediaqueryList.matches) {
            mostrarHeader = !mostrarHeader;
            loginDiv.style.display = 'none';
            logoDiv.style.display = 'none';
            inputBuscador.style.display = 'block';

            if(mostrarHeader) {
                loginDiv.style.display = 'flex';
                logoDiv.style.display = 'flex';
                inputBuscador.style.display = 'none';
            }
            
        } else {
            loginDiv.style.display = 'flex';
            logoDiv.style.display = 'flex';
            inputBuscador.style.display = 'block';
        }
    });
}

async function mostrarProductos() {
    headerTodosProductos.textContent = 'Todos los productos';
    
    limpiarHtml();

    productos = await obtenerProductos();
    productos.forEach(producto => {
        mostrarProductoEnHTML(producto);
    });
}

function mostrarProductoEnHTML(producto) {
    const { id, nombre, precio, imagen } = producto;

    const divProductosCard = document.createElement('DIV');
    divProductosCard.setAttribute('data-id', `${id}`);
    divProductosCard.classList.add('productos-card');

    const imgProducto = document.createElement('IMG');
    imgProducto.classList.add('imagen-producto');
    imgProducto.src = `${imagen}`;
    imgProducto.alt = `imagen ${nombre}`;
    imgProducto.loading = 'lazy';

    const imgBorrar = document.createElement('IMG');
    imgBorrar.addEventListener('click', (e) => {
        borrarProducto(e.target.parentElement);
    });
    imgBorrar.classList.add('icono-borrar');
    imgBorrar.src = 'img/icono_borrar.svg';

    const imgEditar = document.createElement('IMG');
    imgEditar.addEventListener('click', (e) => {
        editarProducto(e.target.parentElement);
    });
    imgEditar.classList.add('icono-editar');
    imgEditar.src = 'img/icono_editar.svg';

    const divProducto = document.createElement('DIV');

    const nombreProducto = document.createElement('H4');
    nombreProducto.textContent = `${nombre}`;
    divProducto.appendChild(nombreProducto);

    const precioProducto = document.createElement('P');
    precioProducto.textContent = `$ ${precio}`;
    divProducto.appendChild(precioProducto);

    const enlaceProducto = document.createElement('A');
    enlaceProducto.setAttribute('href', `producto.html?id=${id}`);

    enlaceProducto.textContent = `Ver Producto`;
    divProducto.appendChild(enlaceProducto);

    divProductosCard.appendChild(imgProducto);
    divProductosCard.appendChild(imgBorrar);
    divProductosCard.appendChild(imgEditar);
    divProductosCard.appendChild(divProducto);
    
    productosDivTodos.appendChild(divProductosCard);
}

function filtrarProductos(criterio) {
    headerTodosProductos.textContent = 'Todos los productos';
    
    let criterioBusqueda = criterio.toLowerCase();
    const listaFiltradaTodas = productos.filter(producto => {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(criterioBusqueda) !== -1) {
            return producto;
        }
    });

    limpiarHtml();

    if(listaFiltradaTodas.length > 0) {
        listaFiltradaTodas.forEach(producto => {
            mostrarProductoEnHTML(producto);
        });
    } else {
        limpiarHtml();

        headerTodosProductos.textContent = 'No hay productos';
    }
}

function limpiarHtml() {
    while(productosDivTodos.firstChild) {
        productosDivTodos.removeChild(productosDivTodos.firstChild);
    }
}

function agregarProducto() {
    if(localStorage.getItem('alurageek') === 'correo@correo.com') {
        window.location.replace('agregar-producto.html');
    } else {
        alert('Para poder agregar productos debes hacer login');
    }
}

function borrarProducto(productoEliminar) {
    if(localStorage.getItem('alurageek') === 'correo@correo.com') {
        let idProducto = Number(productoEliminar.getAttribute('data-id'))
        let permisoEliminar = idProductos.includes(idProducto);

        if(!permisoEliminar) {
            if (window.confirm('¿Deseas eliminar el producto seleccionado?')) {
                eliminarProducto(idProducto);
                alert('El producto se ha eliminado correctamente')
                window.location.replace('productos.html');
            }
        } else {
            alert('Lo siento, Usted no tiene permisos para realizar tal operación');
        }
        
    } else {
        alert('Para poder eliminar productos debes hacer login');        
    }
}

async function editarProducto(productoEditar) {
    if(localStorage.getItem('alurageek') === 'correo@correo.com') {
        let idProducto = Number(productoEditar.getAttribute('data-id'))
        let permisoEditar = idProductos.includes(idProducto);
    
        if(!permisoEditar) {
            if (window.confirm('¿Deseas editar el producto seleccionado?')) {
                editarProducto(idProducto);
                window.location.replace(`agregar-producto.html?id=${idProducto}`);
            }
        } else {
            alert('Lo siento, Usted no tiene permisos para realizar tal operación');
        }

    } else {
        alert('Para poder editar productos debes hacer login');        
    }
}