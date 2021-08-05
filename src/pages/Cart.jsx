
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
                    cart.length > 0 ?
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
                    :
                    <h4>
                        No hay items seleccionados
                    </h4>
                }
            </div>
            <div className='pu__footer'>
                {
                    cart.length > 0 ?
                    <Link to='/cart'>
                        <button>Finalizar compra</button>
                    </Link>
                    :
                    null
                }
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