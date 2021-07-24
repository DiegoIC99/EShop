import {useContext} from '../Context/Context'
import {useState} from 'react'

export default function CounterStock(props) {

    const { updateCart } = useContext()
    const [qty, setqty] = useState(1)

    const onAdd = () => {

        if(props.item.stock != qty) {
            setqty(qty+1)
        }

    }

    const onRemove = () => {

        if(qty !== 1) {
            setqty(qty-1)
        }

    }

    return(

        <form onSubmit={ (data) => { updateCart(data, props.item) } }>
            <button type='button' onClick={onAdd}>+</button>
            <input type='number' readOnly disabled value={qty}/>
            <button type='button' onClick={onRemove}>-</button>
            <button className='pr__addCart'>Añadir al carrito</button>
        </form>

    )

}