export const getTotal = productos => {
	
	let total = 0
	
	if (productos.length > 0) {
		total = productos
				.map(producto => (producto.price * producto.quantity))
				.reduce((total, number) => total + number)
				.toFixed(2)
	}

	return total;
}