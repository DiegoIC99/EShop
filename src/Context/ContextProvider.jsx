import React, {useState} from 'react'
import {Provider} from './Context'

export function ContextProvider(props) {

    const [cartShow, setcartShow] = useState(false)
    const [cart, setcart] = useState([]);

    const updateCart = (data, props) => {

        data.preventDefault();

        let itemExist = '';

        let item = {
            title: props.title,
            qty: data.target[1].value,
            price: props.price,
            id: props.id,
            stock: props.stock
        }

        cart.forEach( element => {

            let newQty = props.id === element.id ? parseFloat(element.qty) + parseFloat(data.target[1].value) : element.qty;

            if(props.id === element.id) {
                itemExist = 'X';
            }
            
            if(newQty <= element.stock)
                element.qty = newQty;
            
        })

        setcart( itemExist === '' && data.target[1].value > 0 ? [...cart, item] : [...cart])

        return item;

    }

    const value = {
        cartShow,
        setcartShow,
        cart,
        updateCart
    }

    return <Provider value={value} {...props} />

}