const btnAgregar = document.getElementById('btn-agregar');
const productosDivTodos = document.getElementById('productos-div-todos');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    agregarEventListeners();
    mostrarProductos(listaProductos);
};

function agregarEventListeners() {
    btnAgregar.addEventListener('click', agregarProducto);
}

function agregarProducto() {
    window.location.replace("agregar-producto.html");
}

function mostrarProductos(listaProductos) {
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