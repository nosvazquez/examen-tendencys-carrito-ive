import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

import Listado from './components/Listado'
import Formulario from './components/Formulario'
import OrdenApi from './components/OrdenApi'

const BtnOrderId = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`

function App() {
  //let orderId = 2218569498764
  const [orderId, setOrderId] = useState(2218569498764)
  const API_URL = `https://eshop-deve.herokuapp.com/api/v2/orders/${orderId}`
  const API_JWT = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'
  
  const [productos, setProductos] = useState([])
  const [order, setOrder] = useState(0)
  const [errorApi, setErrorApi] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [openOrderApi, setOpenOrderApi] = useState(false)

  const getProductos = async () => {

    let dataShop = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': API_JWT
      }
    }).then( res => res.json())
    
    if (dataShop.statusCode === 404) {
      setErrorApi(true)
      return;
    }

    setErrorApi(false)
    setOrder(dataShop.order.number)
    setProductos(dataShop.order.items)

  }

  useEffect(() => {
    if (productos.length > 0) {
        setProductos([])
        setOrder(0)
    }
    getProductos()

    // eslint-disable-next-line
  }, [orderId])


  const handleClick = e => {
    if (e.target.id === 'openFormProduct') {
        setOpenForm(true)
    } else if (e.target.id === 'openCheckout') {
    } else if (e.target.id === 'openOrderApi') {
        setOpenOrderApi(true)
    }

  }
  return (
    <>
      
      <div className="container">
              
        <div className="row">
            <div className="col s12">
                <Listado
                  order={order}
                  productos={productos}
                  setProductos={setProductos}
                />
            </div>
        </div>
        <div className="row">
            <div className="col s6 center">
                <button 
                  id="openFormProduct"
                  onClick={handleClick}
                  className="waves-effect waves-light btn-small btn-block blue accent-4"
                >Agregar nuevo producto</button>
            </div>
            <div className="col s6 center">
                <button 
                  id="openCheckout"
                  onClick={handleClick}
                  className="waves-effect waves-light btn-small btn-block green accent-4"
                >Procesar pago</button>
            </div>
        </div>


        {openForm ? (
                      <Formulario 
                          productos={productos}
                          setProductos={setProductos}
                          setOpenForm={setOpenForm}
                      />) : null}

      </div>

      <div className="container">
          <div className="row">
            <div className="col s10 center">
                <BtnOrderId 
                  id="openOrderApi"
                  onClick={handleClick}
                  className="waves-effect waves-light btn-small btn-block orange accent-4"
                >Order id</BtnOrderId>

                {openOrderApi ? (
                              <OrdenApi
                                orderId={orderId}
                                setOrderId={setOrderId}
                                errorApi={errorApi}
                                setOpenOrderApi={setOpenOrderApi}
                              />) : null
                }
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
