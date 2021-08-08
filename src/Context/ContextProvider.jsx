import React, {useState, memo} from 'react'
import {Provider} from './Context'
import { getFirestore } from '../firebase'

function ContextProvider(props) {

    const [cartShow, setcartShow] = useState(false)
    const [cart, setcart] = useState([]);
    const [orderKey, setOrderKey] = useState();

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

    const createOrder = async (totalPrice, date, data) => {

        data.preventDefault();

        const new_order = {
            buyer: {
                name: data.target[0].value,
                phone: data.target[1].value,
                email: data.target[2].value
            },
            ordenes: {
                        cart,
                        totalItem: totalPrice,
                        date: date
                     }
        }

        const conn = getFirestore();
        const collection = conn.collection('orders');
        const response = await collection.add(new_order);

        setcart([])
        setOrderKey(response.id)

    }

    let totalPrice = 0;

    cart.forEach((element) => {

        totalPrice = parseFloat(totalPrice) + (parseFloat(element.price) * element.qty); 
        
    })

    const value = {
        cartShow,
        setcartShow,
        cart,
        updateCart,
        createOrder,
        orderKey,
        totalPrice
    }

    return <Provider value={value} {...props} />

}

export default memo(ContextProvider);