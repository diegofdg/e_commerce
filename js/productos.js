import { obtenerProductos } from './API.js';

const inputBuscador = document.getElementById('input-buscador');
const iconoBuscador = document.getElementById('icono-buscador');
const btnAgregar = document.getElementById('btn-agregar');
const productosDivTodos = document.getElementById('productos-div-todos');
let productos = [];

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProductos();
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
}

async function mostrarProductos() {
    const productos = await obtenerProductos();
    productos.forEach(producto => {
        mostrarProductoEnHTML(producto);
    });
}

function mostrarProductoEnHTML(producto) {
    const { id, nombre, precio, imagen, categoria } = producto;

    const divProductosCard = document.createElement('DIV');
    divProductosCard.classList.add('productos-card');

    const imgProducto = document.createElement('IMG');
    imgProducto.classList.add('imagen-producto');
    imgProducto.src = `img/${imagen}`;

    const divProducto = document.createElement('DIV');

    const nombreProducto = document.createElement('H4');
    nombreProducto.textContent = `${nombre}`;
    divProducto.appendChild(nombreProducto);

    const precioProducto = document.createElement('P');
    precioProducto.textContent = `$ ${precio}`;
    divProducto.appendChild(precioProducto);

    const enlaceProducto = document.createElement('A');
    enlaceProducto.setAttribute('data-id', `${id}`);
    enlaceProducto.setAttribute('href', `producto.html?id=${id}`);

    enlaceProducto.textContent = `Ver Producto`;
    divProducto.appendChild(enlaceProducto);

    divProductosCard.appendChild(imgProducto);
    divProductosCard.appendChild(divProducto);
    
    productosDivTodos.appendChild(divProductosCard);
}

function agregarProducto() {
    window.location.replace("agregar-producto.html");
}

function mostrarProductos2(listaProductos) {
    listaProductos.forEach(producto => {
        const { id, nombre, precio, imagen } = producto;

        const divProductosCard = document.createElement('DIV');
        divProductosCard.classList.add('productos-card');

        const imgProducto = document.createElement('IMG');
        imgProducto.classList.add('imagen-producto');
        imgProducto.src = `img/${imagen}`;

        const imgBorrar = document.createElement('IMG');
        imgBorrar.classList.add('icono-borrar');
        imgBorrar.src = 'img/icono_borrar.svg';

        const imgEditar = document.createElement('IMG');
        imgEditar.classList.add('icono-editar');
        imgEditar.src = 'img/icono_editar.svg';

        const divProducto = document.createElement('DIV');

        const nombreProducto = document.createElement('H4');
        nombreProducto.textContent = `${nombre}`;
        divProducto.appendChild(nombreProducto);

        const precioProducto = document.createElement('P');
        precioProducto.textContent = `$ ${precio}`;
        divProducto.appendChild(precioProducto);

        const idProducto = document.createElement('P');
        idProducto.textContent = `# ${id}`;
        idProducto.classList.add('id-producto');
        divProducto.appendChild(idProducto);

        divProductosCard.appendChild(imgProducto);
        divProductosCard.appendChild(imgBorrar);
        divProductosCard.appendChild(imgEditar);
        divProductosCard.appendChild(divProducto);
        
        productosDivTodos.appendChild(divProductosCard);
    });
}