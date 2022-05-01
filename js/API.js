const url = 'http://localhost:3000/productos';

export const obtenerProductos = async () => {
    try {
        const resultado =  await fetch(url);
        const productos = await resultado.json();
        return productos;
    } catch (error) {
        console.log(error);        
    }
}

export const obtenerProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = await resultado.json();
        return producto;
        
    } catch (error) {
        console.log(error);        
    }
}