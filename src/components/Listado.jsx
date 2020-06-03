import React from 'react'
import styled from '@emotion/styled'

import Producto from './Producto'
import { getTotal } from '../Helpers'

const TotalCont = styled.th`
		text-align: right;
		margin-right: 5px;
`

const Listado = ({order, productos, setProductos}) => {

	return (
		<>
			<h4>Número de Orden: {order}</h4>
			<table>
				<tbody>
					<tr>
						<td>SKU</td>
						<td>NAME</td>
						<td>QUANTITY</td>
						<td>PRICE</td>
						<td>SUB TOTAL</td>
						<td></td>
					</tr>
					{productos.map(producto => (
						<Producto
							key={producto.id}
							producto={producto}
							productos={productos}
							setProductos={setProductos}
						/>
					))}
					<tr>
						<TotalCont colSpan="4"> TOTAL: </TotalCont>
						<th colSpan="2">$ {getTotal(productos)} </th>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default Listado