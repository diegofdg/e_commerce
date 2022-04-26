const btnHero = document.getElementById('btn-hero');
const productosDivStarwars = document.getElementById('productos-div-starwars');
const productosDivConsolas = document.getElementById('productos-div-consolas');
const productosDivDiversos = document.getElementById('productos-div-diversos');

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
                enlaceProducto.textContent = `Ver Producto`;
                divProducto.appendChild(enlaceProducto);

                divProductosCard.appendChild(imgProducto);
                divProductosCard.appendChild(divProducto);
                
                productosDivStarwars.appendChild(divProductosCard);
            });
            break;

        case 'Consolas':
            const listaFiltradaConsolas = listaProductos.filter(filtrarConsolas);
    
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