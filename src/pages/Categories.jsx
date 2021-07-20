import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Products from './Products'
import Cart from './Cart'

export default function Categories(props) {

    const {idCategory, hasCategory} = useParams();
    const [products, setproducts] = useState([]);

    let urlApi = hasCategory ? `product/${hasCategory}` : 'products';
        urlApi += idCategory ? `/${idCategory}` : '';

    const getProducts = async () => {
        let llamada = await fetch(`http://localhost:4000/${urlApi}`);
        llamada = await llamada.json();

        setproducts(llamada);
    }

    useEffect(() => {
        getProducts()
    }, [idCategory]);

    return(
        <div className='containerInfo pr__containerProds'>
        {
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
        }
        {
            <Cart />
        }
        </div>
    )
}