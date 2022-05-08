const url = 'https://backend-json-server.herokuapp.com/productos';

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

export const nuevoProducto = async producto => {
    try {
        const resultado = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resultado;

    } catch (error) {
        console.log(error);
    }
}

export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const modificarProducto = async producto => {
    try {
        await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
    } catch (error) {
        console.log(error);
    }
}