const btnHero = document.getElementById('btn-hero');
const inputBuscador = document.getElementById('input-buscador');
const iconoBuscador = document.getElementById('icono-buscador');
const loginDiv = document.getElementById('login-div');
const logoDiv = document.getElementById('logo-div');
const productosDivStarwars = document.getElementById('productos-div-starwars');
const productosDivConsolas = document.getElementById('productos-div-consolas');
const productosDivDiversos = document.getElementById('productos-div-diversos');
let mostrarHeader = true;

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProductos(listaProductos, 'Star Wars');
    mostrarProductos(listaProductos, 'Consolas');
    mostrarProductos(listaProductos, 'Diversos');
};

function agregarEventListeners() {
    btnHero.addEventListener('click', consolas);

    inputBuscador.addEventListener('keyup', (e) => {
        if(e.target.value.length > 3) {
            filtrarProductos(e.target.value);
        }
    });

    iconoBuscador.addEventListener('click', () => {        
        let mediaqueryList = window.matchMedia("(max-width: 767px)");
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
            inputBuscador.style.display = 'block';
        }
    });
}

function consolas() {
    document.getElementById("consolas")
        .scrollIntoView({
            behavior: 'smooth'
        });
}

function mostrarProductos(listaProductos, criterio) {    
    switch(criterio) {
        case 'Star Wars':
            const listaFiltradaStarwars = listaProductos.filter(filtrarStarwars);
            
            if(listaFiltradaStarwars.length === 0) {
                productosDivStarwars.previousElementSibling.style.display='none';
                return;
            }

            productosDivStarwars.previousElementSibling.style.display = 'flex';            
    
            listaFiltradaStarwars.forEach(producto => {
                const { id, nombre, precio, imagen } = producto;

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
                enlaceProducto.setAttribute('href', 'producto.html');

                enlaceProducto.textContent = `Ver Producto`;
                divProducto.appendChild(enlaceProducto);

                divProductosCard.appendChild(imgProducto);
                divProductosCard.appendChild(divProducto);
                
                productosDivStarwars.appendChild(divProductosCard);
            });
            break;

        case 'Consolas':
            const listaFiltradaConsolas = listaProductos.filter(filtrarConsolas);

            if(listaFiltradaConsolas.length === 0) {
                productosDivConsolas.previousElementSibling.style.display='none';
                return;
            }

            productosDivConsolas.previousElementSibling.style.display = 'flex';
    
            listaFiltradaConsolas.forEach(producto => {
                const { id, nombre, precio, imagen } = producto;

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
                enlaceProducto.textContent = `Ver Producto`;
                divProducto.appendChild(enlaceProducto);

                divProductosCard.appendChild(imgProducto);
                divProductosCard.appendChild(divProducto);
                
                productosDivConsolas.appendChild(divProductosCard);
            });
            break;

        case 'Diversos':
            const listaFiltradaDiversos = listaProductos.filter(filtrarDiversos);

            if(listaFiltradaDiversos.length === 0) {
                productosDivDiversos.previousElementSibling.style.display='none';
                return;
            }

            productosDivDiversos.previousElementSibling.style.display = 'flex';
    
            listaFiltradaDiversos.forEach(producto => {
                const { id, nombre, precio, imagen } = producto;

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
                enlaceProducto.textContent = `Ver Producto`;
                divProducto.appendChild(enlaceProducto);

                divProductosCard.appendChild(imgProducto);
                divProductosCard.appendChild(divProducto);
                
                productosDivDiversos.appendChild(divProductosCard);
            });   
            break;

        default:
            break;
    }
}

function filtrarStarwars(producto) {
    if(producto.categoria === 'Star Wars') {
        return producto;
    }
}

function filtrarConsolas(producto) {
    if(producto.categoria === 'Consolas') {
        return producto;
    }
}

function filtrarDiversos(producto) {
    if(producto.categoria === 'Diversos') {
        return producto;
    }
}

function filtrarProductos(criterio) {
    let criterioBusqueda = criterio.toLowerCase();
    const listaFiltradaTodas = listaProductos.filter((producto)=> {
        let nombre = producto.nombre.toLowerCase();
        
        if(nombre.indexOf(criterioBusqueda) !== -1) {
            return producto;
        }
    });
    
    limpiarHtml();

    mostrarProductos(listaFiltradaTodas, 'Star Wars');
    mostrarProductos(listaFiltradaTodas, 'Consolas');
    mostrarProductos(listaFiltradaTodas, 'Diversos');
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