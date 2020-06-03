import React from 'react'

const Producto = ({producto, productos, setProductos}) => {

	const {id, sku, name, quantity, price} = producto

	const quitarProducto = id => {
		let productosFiltered = productos.filter(producto => producto.id !== id)

		setProductos(productosFiltered)
	}

	return (
		<tr>
			<td>{sku}</td>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>{price}</td>
			<td>{(price * quantity).toFixed(2)}</td>
			<td>
					<button
						onClick={() => quitarProducto(id)}
					>Quitar</button>
			</td>
		</tr>
	)
}

export default Producto