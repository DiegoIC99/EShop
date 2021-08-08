import React, {useState, memo} from 'react'
import {Provider} from './Context'

function ContextProvider(props) {

    const [cartShow, setcartShow] = useState(false)
    const [cart, setcart] = useState([]);
    let newCartProv = [];

    const updateCart = (data, props, type) => {

        if(data !== undefined)
            data.preventDefault();

        let itemExist = '';

        var item;

        if(type === 'add')
            item = {
                title: props.title,
                qty: data.target[1].value,
                price: props.price,
                id: props.id,
                stock: props.stock
            }

        cart.map( (element, index) => {

            let newQty;

            if(props.id === element.id) {

                itemExist = 'X';

                if(type === 'add'){
                    newQty = props.id === element.id ? parseFloat(element.qty) + parseFloat(data.target[1].value) : element.qty;
                }else {
                    newQty = props.id === element.id && element.qty - 1;
                }

                if(newQty === 0) {
                    cart.splice(index, 1)
                }

                if(newQty <= element.stock){
                    element.qty = newQty;
                }

            }
            
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

export default memo(ContextProvider);