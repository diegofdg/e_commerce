import { obtenerProducto, obtenerProductos } from './API.js';

const heroProductoDiv = document.getElementById('hero-producto-div');
const productosDivSimilares = document.getElementById('productos-div-similares');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

async function iniciarApp() {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idProducto = parseInt(parametrosURL.get('id'));
    const producto = await obtenerProducto(idProducto);

    mostrarProducto(producto);
    mostrarProductos(producto.categoria);
};

function mostrarProducto(producto) {
    const { nombre, precio, imagen, descripcion } = producto;

    const imgProducto = document.createElement('IMG');
    imgProducto.classList.add('imagen-producto');
    imgProducto.src = `img/${imagen}`;

    const divProducto = document.createElement('DIV');
    divProducto.classList.add('contenedor', 'contenedor-detalle-producto');

    const nombreProducto = document.createElement('H4');
    nombreProducto.textContent = `${nombre}`;
    divProducto.appendChild(nombreProducto);

    const precioProducto = document.createElement('P');
    precioProducto.classList.add('precio');
    precioProducto.textContent = `$ ${precio}`;
    divProducto.appendChild(precioProducto);

    const descripcionProducto = document.createElement('P');
    descripcionProducto.classList.add('descripcion');
    descripcionProducto.textContent = `${descripcion}`;
    divProducto.appendChild(descripcionProducto);

    heroProductoDiv.appendChild(imgProducto);
    heroProductoDiv.appendChild(divProducto);    
}

async function mostrarProductos(categoria) {
    const productos = await obtenerProductos();
    productos.forEach(producto => {
        if(categoria === producto.categoria) {
            mostrarProductoEnHTML(producto);
        }
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
    
    productosDivSimilares.appendChild(divProductosCard);
}