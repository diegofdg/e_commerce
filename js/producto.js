const heroProductoDiv = document.getElementById('hero-producto-div');
const productosDivSimilares = document.getElementById('productos-div-similares');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProducto(listaProductos);
    mostrarProductos(listaProductos, 'Star Wars');
};

function mostrarProducto(listaProductos) {
    const productoFiltrado = listaProductos.filter((producto => producto.id === 12345));
    console.log(productoFiltrado[0]);
    
    const { id, nombre, precio, imagen, descripcion } = productoFiltrado[0];

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
                enlaceProducto.setAttribute('href', 'producto.html');

                enlaceProducto.textContent = `Ver Producto`;
                divProducto.appendChild(enlaceProducto);

                divProductosCard.appendChild(imgProducto);
                divProductosCard.appendChild(divProducto);
                
                productosDivSimilares.appendChild(divProductosCard);
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