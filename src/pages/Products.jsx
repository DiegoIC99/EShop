import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Products(props) {

    const [qty, setqty] = useState(1)

    return(
        <div className='pr__item'>
            <div className='pr__title'>
                {props.title}
            </div>
            <hr />
            <div className='pr__image'>
                <img src={props.image} alt='Imágen producto' />
            </div>
            <div className='pr__price'>
                ${props.price}
            </div>
            <Link to={{
                pathname: `/Detalle/${props.id}/${qty}`,
                aboutProps: { 
                    infoItem: props,
                    cart: props.cart, 
                    addToCart: props.addToCart
                }
            }}>
                Ver detalle
            </Link>
            <form onSubmit={ (data) => { props.addToCart(data, props) } }>
                <button type='button' onClick={() => {setqty(qty+1)}}>+</button>
                <input type='number' readOnly disabled value={qty}/>
                <button type='button' onClick={() => { qty === 1 ? setqty(qty) : setqty(qty-1)}}>-</button>
                <button className='pr__addCart'>Añadir al carrito</button>
            </form>
        </div>
    )


}