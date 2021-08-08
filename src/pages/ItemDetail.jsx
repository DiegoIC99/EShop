import { useParams, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'
import CounterStock from './CounterStock'

import { useContext } from '../Context/Context'
import { getFirestore } from '../firebase'

export default function ItemDetail(props) {

    let history = useHistory();

    const {idProducto} = useParams();
    const [products, setproducts] = useState([])
    const { cart } = useContext()

    const getDetail = async () => {

        let Products = [];

        const conn = getFirestore();
        const collection = conn.collection("products");
        const condicion = await collection.where("id","==",idProducto).get();

        condicion.forEach((item) => {
            Products.push(item.data())
        })

        setproducts(Products)
    }

    useEffect(() => {
        getDetail();
    }, [idProducto])

    let item = [];

    if(products != [])
        products.forEach(Element => {
            item = {
                id: Element.id,
                image: Element.image,
                price: Element.price,
                stock: Element.stock,
                title: Element.title
            }
        })

    return(
        <>
            {
                products.length > 0 
                ?
                products.map( (element, index) => {
                    return(
                        <div key={index} className='pr__detalle containerInfo'>
                            <div className='pr__detalleImage'>
                                <button className='pr__goback' onClick={history.goBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
                                <img src={element.image} alt={`Imagen detalle`} />
                            </div>
                            <div className='pr__detalleInfo'>
                                <h3>Categoría: {element.categoria}</h3>
                                <h3>Título: {element.title}</h3>
                                <h3>Descripción: {element.descripcion}</h3>
                                <h3>Precio: {element.price}</h3>
                                <CounterStock item={item}/>
                            </div>
                        </div>
                    )
                })
                : 
                <h3 className="centered">Cargando producto</h3>
            }
            {
            <Cart 
                cart={cart}/>
            }
        </>
    )
}