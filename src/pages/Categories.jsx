import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Products from './Products'
import Cart from './Cart'
import {getFirestore} from "../firebase"

export default function Categories(props) {

    const {idCategory} = useParams();
    const [products, setproducts] = useState([]);
    const [error, setError] = useState(false)

    const getProducts = async () => {

        let Products = [];

        const conn = getFirestore();
        const collection = conn.collection("products");
        const condicion = idCategory ? collection.where("categoria","==",`${idCategory}`) : collection;
        const query = condicion.get();
        const resultado = await query;

        resultado.forEach((item) => {
            Products.push(item.data())
        })

        if(Products.length > 0)
            setError(false)
        else 
            setError(true)

        setproducts(Products)

    }

    useEffect(() => {
        getProducts()
    }, [idCategory]);

    return(
        <>
        <div className='containerInfo pr__containerProds'>
        {
            products.length > 0
            ?
            products.map( (element, index) => {
                return(
                    <Products 
                        key={index}
                        id={element.id}
                        title={element.title}
                        image={element.image}
                        price={element.price}
                        stock={element.stock}/>

                )
            })
            :
            !error &&
            <h3 className="centered">Cargando {idCategory ? `categoría ${idCategory}` : `catálogo`}</h3>
        }
        {
            <Cart />
        }
        </div>
        {
            error ? <h3 style={{textAlign: 'center'}}>No hay productos para mostrar dentro de esta categoria</h3> : ''
        }
        </>
    )
}