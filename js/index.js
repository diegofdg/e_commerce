import { obtenerProductos } from './API.js';

const btnHero = document.getElementById('btn-hero');
const inputBuscador = document.getElementById('input-buscador');
const iconoBuscador = document.getElementById('icono-buscador');
const loginDiv = document.getElementById('login-div');
const logoDiv = document.getElementById('logo-div');
const headerStarwars = document.getElementById('header-star-wars');
const enlaceStarwarsVerTodo = document.getElementById('enlace-star-wars-ver-todo');
const starwarsProductosHeader = document.getElementById('star-wars-productos-header');
const consolasProductosHeader = document.getElementById('consolas-productos-header');
const diversosProductosHeader = document.getElementById('diversos-productos-header');
const productosDivStarwars = document.getElementById('productos-div-starwars');
const productosDivConsolas = document.getElementById('productos-div-consolas');
const productosDivDiversos = document.getElementById('productos-div-diversos');
let mostrarHeader = true;
let productos = [];

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProductos();
};

function agregarEventListeners() {
    btnHero.addEventListener('click', consolas);

    inputBuscador.addEventListener('keyup', (e) => {
        console.log(e.target.value);
        
        if(e.target.value == "") {
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

function consolas() {
    document.getElementById('consolas')
        .scrollIntoView({
            behavior: 'smooth'
        });
}

async function mostrarProductos() {
    starwarsProductosHeader.style.display = 'flex';
    consolasProductosHeader.style.display = 'flex';
    diversosProductosHeader.style.display = 'flex';
    headerStarwars.textContent = 'Star Wars';
    headerStarwars.style.paddingBottom = '0';
    enlaceStarwarsVerTodo.style.display = 'flex';
    
    limpiarHtml();
    
    productos = await obtenerProductos();
    productos.forEach(producto => {
        mostrarProductoEnHTML(producto);
    });
}

function mostrarProductoEnHTML(producto) {
    const { id, nombre, precio, imagen, categoria } = producto;

    const divProductosCard = document.createElement('DIV');
    divProductosCard.setAttribute('data-id', `${id}`);
    divProductosCard.classList.add('productos-card');

    const imgProducto = document.createElement('IMG');
    imgProducto.classList.add('imagen-producto');
    imgProducto.src = `${imagen}`;
    imgProducto.alt = `imagen ${nombre}`;

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
    divProductosCard.appendChild(divProducto);

    switch(categoria) {
        case 'Star Wars':
            productosDivStarwars.appendChild(divProductosCard);
            break;
        case 'Consolas':
            productosDivConsolas.appendChild(divProductosCard);
            break;
        case 'Diversos':
            productosDivDiversos.appendChild(divProductosCard);
            break;
        default:
            break;
    }
}

function filtrarProductos(criterio) {
    headerStarwars.textContent = 'Star Wars';
    headerStarwars.style.paddingBottom = '0';
    enlaceStarwarsVerTodo.style.display = 'flex';

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
    
        limpiarStarWars();
        limpiarConsolas();
        limpiarDiversos();

    } else {
        limpiarConsolas();
        limpiarDiversos();

        headerStarwars.textContent = 'No hay productos';
        headerStarwars.style.paddingBottom = '1.6rem';
        enlaceStarwarsVerTodo.style.display = 'none';
    }
}

function limpiarHtml() {
    while(productosDivStarwars.firstChild) {
        productosDivStarwars.removeChild(productosDivStarwars.firstChild);
    }

    while(productosDivConsolas.firstChild) {
        productosDivConsolas.removeChild(productosDivConsolas.firstChild);
    }

    while(productosDivDiversos.firstChild) {
        productosDivDiversos.removeChild(productosDivDiversos.firstChild);
    }
}

function limpiarStarWars() {
    if(productosDivStarwars.firstElementChild === null) {
        starwarsProductosHeader.style.display = 'none';
    }
}

function limpiarConsolas() {
    if(productosDivConsolas.firstElementChild === null) {
        consolasProductosHeader.style.display = 'none';
    }
}

function limpiarDiversos() {
    if(productosDivDiversos.firstElementChild === null) {
        diversosProductosHeader.style.display = 'none';
    }
}