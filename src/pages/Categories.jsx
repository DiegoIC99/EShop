import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Products from './Products'
import Cart from './Cart'

export default function Categories(props) {

    const {idCategory, hasCategory} = useParams();
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    let urlApi = hasCategory ? `product/${hasCategory}` : 'products';
        urlApi += idCategory ? `/${idCategory}` : '';

    const getProducts = async () => {
        let llamada = await fetch(`http://localhost:4000/${urlApi}`);
        llamada = await llamada.json();

        setproducts(llamada);
    }

    const updateCart = (data, props) => {

        data.preventDefault();

        let itemExist = '';

        let item = {
            title: props.title,
            qty: data.target[1].value,
            price: props.price,
            id: props.id
        }

        cart.forEach( element => {

            let newQty = props.id === element.id ? parseFloat(element.qty) + parseFloat(data.target[1].value) : element.qty;

            if(props.id === element.id) {
                itemExist = 'X';
            }
            
            element.qty = newQty;
            
        })

        setcart( itemExist === '' ? [...cart, item] : [...cart])

        return item;

    }
    
    useEffect(() => {

        const ac = new AbortController();
        getProducts()
        return () => ac.abort();
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
                        cart={cart}
                        addToCart={updateCart}/>

                )
            })
        }
        {
            <Cart 
                cart={cart}/>
        }
        </div>
    )
}