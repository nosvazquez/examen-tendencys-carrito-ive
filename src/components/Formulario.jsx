import React, { useState } from 'react'
import styled from '@emotion/styled'
import { v4 as uuid } from 'uuid'

import Error from './Error'


const Contenedor = styled.div`
	position:absolute;
	margin: 0 auto;
	top: 50px;
	padding:1rem;
	background-color: #fafafa;
	border-radius:.5rem;
	border: 1px solid blue;
	z-index: 99;
    max-width: 500px;
`

const Formulario = ({productos, setProductos, setOpenForm}) => {

	const [	producto, setProducto ] = useState({
		id: '',
		sku: '',
		name: '',
		quantity: 0,
		price: 0
	})
	const [	error, setError] = useState(false)

	const handleChange = e => {
		setProducto({
			...producto,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = e => {
		e.preventDefault()

		let {sku, name, quantity, price} = producto
		
		if (sku.trim() === '' || name.trim() === '' || parseInt(quantity) < 1 || parseInt(price) === 0 ) {
			setError(true)
			return;
		}
		
		setError(false)

		producto.id = uuid()
		setProductos([
			...productos,
			producto
		])
		setOpenForm(false)
	}

	const handleClick = e => {
		setOpenForm(false)
	}

	return (
		<Contenedor className="row">
			{error ? <Error msg="Todos los campos son requeridos" /> : null}
			<form
				onSubmit={handleSubmit}
			>
				<div className="input-field col s12">
					<input
						type="text"
						name="sku"
						id="sku"
						onChange={handleChange}
					/>
					<label htmlFor="sku">Sku: </label>
				</div>
				<div className="input-field col s12">
					<input
						type="text"
						name="name"
						id="name"
						onChange={handleChange}
					/>
					<label htmlFor="name">Name: </label>
				</div>
				<div className="input-field col s12">
					<input
						type="number"
						name="quantity"
						id="quantity"
						onChange={handleChange}
					/>
					<label htmlFor="quantity">Quantity: </label>
				</div>
				<div className="input-field col s12">
					<input
						type="number"
						name="price"
						id="price"
						onChange={handleChange}
					/>
					<label htmlFor="price">Price: </label>
				</div>
				<div className="col s6">
                	<button 
                		type="submit"
                		className="waves-effect waves-light btn-small btn-block accent-3"
                	>Añadir</button>
                </div>
				<div className="col s6">
                	<button
                		onClick={handleClick}
                		className="waves-effect waves-light btn-small btn-block accent-3"
                	>Cancelar</button>
                </div>
			</form>
		</Contenedor>
	)
}

export default Formulario