const btnAgregar = document.getElementById('btn-agregar');

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
};

function agregarEventListeners() {
    btnAgregar.addEventListener('click', agregarProducto);
}

function agregarProducto() {
    window.location.replace("agregar-producto.html");
}