const listaProductos = [
	{
		id: 1,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_01.jpg'
	},
	{
		id: 2,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_02.jpg'
	},
	{
		id: 3,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_03.jpg'
	},
	{
		id: 4,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_04.jpg'
	},
	{
		id: 5,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_05.jpg'
	},
	{
		id: 6,
		categoria: 'Star Wars',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'star_wars_img_06.jpg'
	},
	{
		id: 7,
		categoria: 'Consolas',
		nombre: 'Control XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_01.jpg'
	},
	{
		id: 8,
		categoria: 'Consolas',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_02.jpg'
	},
	{
		id: 9,
		categoria: 'Consolas',
		nombre: 'Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_03.jpg'
	},
	{
		id: 10,
		categoria: 'Consolas',
		nombre: 'Control XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_04.jpg'
	},
	{
		id: 11,
		categoria: 'Consolas',
		nombre: 'Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_05.jpg'
	},
	{
		id: 12,
		categoria: 'Consolas',
		nombre: 'Game Boy Color',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'consolas_img_06.jpg'
	},
	{
		id: 13,
		categoria: 'Diversos',
		nombre: 'Camisa Atari',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_01.jpg'
	},
	{
		id: 14,
		categoria: 'Diversos',
		nombre: 'Camisa SNES',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_02.jpg'
	},
	{
		id: 15,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_03.jpg'
	},
	{
		id: 16,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_04.jpg'
	},
	{
		id: 17,
		categoria: 'Diversos',
		nombre: 'Control y Consola XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_05.jpg'
	},
	{
		id: 18,
		categoria: 'Diversos',
		nombre: 'Producto XYZ',
		precio: 60,
		descripcion: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
		imagen: 'diversos_img_06.jpg'
	}
];