import {useContext} from '../Context/Context'
import {useState} from 'react'

export default function CounterStock(props) {

    const { updateCart } = useContext()
    const [qty, setqty] = useState(1)

    console.log(props)

    return(

        <form onSubmit={ (data) => { updateCart(data, props.item) } }>
            <button type='button' onClick={() => {props.item.stock == qty ? setqty(qty) : setqty(qty+1)}}>+</button>
            <input type='number' readOnly disabled value={qty}/>
            <button type='button' onClick={() => { qty === 1 ? setqty(qty) : setqty(qty-1)}}>-</button>
            <button className='pr__addCart'>Añadir al carrito</button>
        </form>

    )

}