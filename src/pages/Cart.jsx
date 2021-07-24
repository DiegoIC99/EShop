
import { useContext } from '../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Cart(props) {

    const { cartShow, cart } = useContext()

    let cartShown = cartShow ? 'cartShown' : 'cartHidden'

    return(
        <div className={`pu__cart ${cartShown}`}>
            <h3 className='pu__title'>
                <FontAwesomeIcon icon={faCartPlus} /> Carrito de compras
            </h3>
            <hr />
            <div>
                {
                    cart.map((element, index) =>{
                        return(
                            <ItemsCart
                                key={index} 
                                id={element.id}
                                title={element.title}
                                qty={element.qty}
                                price={element.price}
                            />
                        )
                    })
                }
            </div>
            <div className='pu__footer'>
                <Link to='/cart'>
                    <button>Continuar con el pago</button>
                </Link>
            </div>
        </div>
    )
}

export function ItemsCart(props) {

    return(
        <div className='card__container'>
            <div className='card__title'>
                Producto: <b>{props.title}</b>
            </div>
            <div className='card__price'>
                Precio: <b>{props.price}</b>
            </div>
            <div className='card__qty'>
                Cantidad: <b>{props.qty}</b>
            </div>
        </div>
    )

}