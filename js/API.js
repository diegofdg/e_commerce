const url = 'http://localhost:4000/productos';

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
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        //window.location.href = 'index.html';
        
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