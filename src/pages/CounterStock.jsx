import {useContext} from '../Context/Context'
import {useState, useEffect} from 'react'

export default function CounterStock(props) {

    const { updateCart } = useContext()
    const [qty, setqty] = useState(0)
    const [stock, setStock] = useState(props.item.stock)

    useEffect(() => {

        setStock(props.item.stock)
        setqty(0);

    }, [props.item.stock])

    const onAdd = () => {

        if(props.item.stock != qty) {
            setqty(qty+1)
            setStock(stock-1)
        }

    }

    const onRemove = () => {

        if(qty !== 0) {
            setqty(qty-1)
            setStock(stock+1)
        }

    }

    return(
        <>
        <div className='pr__stock'>
            <h3>Stock: {stock}</h3>
        </div>
        <form onSubmit={ (data) => { updateCart(data, props.item, 'add') } }>
            <button type='button' onClick={onAdd}>+</button>
            <input type='number' readOnly disabled value={qty}/>
            <button type='button' onClick={onRemove}>-</button>
            {
                qty > 0 &&
                <button className='pr__addCart'>Añadir <b>{qty}</b> al carrito</button>
            }
        </form>
        </>
    )

}