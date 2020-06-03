import React, { useState } from 'react'
import Error from './Error'

const OrdenApi = ({orderId, setOrderId, errorApi, setOpenOrderApi}) => {

	const [orderTemp, setOrderTemp] = useState(orderId)
	const handleClick = e => {
			setOrderId(orderTemp)
			setOpenOrderApi(false)
	}

	return (
			<><br/>
				<div className="row">
    				<div className="col s12 m5">
      				<div className="card-panel center">
									<div className="input-field">
										<p>ID DE ORDEN:</p>
										<input
											type="text"
											id="orderId"
											value={orderTemp}
											onChange={e => setOrderTemp(e.target.value)}
										/>
										
										{errorApi ? <Error msg="No se encuentra el número de orden" /> : null}
									</div>
									<button
										onClick={handleClick}
										className="waves-effect waves-light btn-small btn-block accent-2"
									>Porbar</button>
							</div>
						</div>
				</div>
		</>
	)
}

export default OrdenApi