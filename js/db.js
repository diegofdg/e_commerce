const listaProductos = [
	{
		id: 12345,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_01.jpg'
	},
	{
		id: 23456,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_02.jpg'
	},
	{
		id: 34567,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_03.jpg'
	},
	{
		id: 45678,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_04.jpg'
	},
	{
		id: 56789,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_05.jpg'
	},
	{
		id: 67890,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_06.jpg'
	},
	{
		id: 78901,
		categoria: 'Consolas',
		nombre: 'Control XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_01.jpg'
	},
	{
		id: 89012,
		categoria: 'Consolas',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_02.jpg'
	},
	{
		id: 90123,
		categoria: 'Consolas',
		nombre: 'Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_03.jpg'
	},
	{
		id: 10123,
		categoria: 'Consolas',
		nombre: 'Control XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_04.jpg'
	},
	{
		id: 11234,
		categoria: 'Consolas',
		nombre: 'Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_05.jpg'
	},
	{
		id: 12456,
		categoria: 'Consolas',
		nombre: 'Game Boy Color',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_06.jpg'
	},
	{
		id: 13567,
		categoria: 'Diversos',
		nombre: 'Camisa Atari',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_01.jpg'
	},
	{
		id: 14678,
		categoria: 'Diversos',
		nombre: 'Camisa SNES',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_02.jpg'
	},
	{
		id: 15789,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_03.jpg'
	},
	{
		id: 16890,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_04.jpg'
	},
	{
		id: 17901,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_05.jpg'
	},
	{
		id: 18012,
		categoria: 'Diversos',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_06.jpg'
	}
];