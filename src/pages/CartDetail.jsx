import { useContext } from '../Context/Context'
import { getCurrentDate } from './utils'
import Cart from './Cart'
import { NavLink } from 'react-router-dom'

function CartDetail() {

    const { cart, createOrder, totalPrice, orderKey } = useContext();
    let actualDate = getCurrentDate('/');

    return(

        <>
        <div className="containerInfo">
            {
                cart.length > 0 
                ?
                cart.map((element, index) => {
                    return(
                        <div className="cd__container" key={index}>
                            <div className="cd__title">
                                <h3>
                                    {element.title}
                                </h3>
                            </div>
                            <div className="cd__price">
                                <h5>
                                    ${element.price}
                                </h5>
                            </div>
                            <div className="cd__qty">
                                <h5>
                                    Cantidad pedida: {element.qty}
                                </h5>
                            </div>
                        </div>
                    )
                })
                :
                orderKey !== '' && orderKey !== undefined
                ?
                <h1>Número de orden: {orderKey}</h1>
                :
                <h1>No hay número de orden o carrito disponible, <NavLink to='/Productos'>Ir al catálogo</NavLink></h1>
            }
            <div className="cd__contFinishOrder">
                {
                cart.length > 0
                && 
                <form onSubmit={(data) => {createOrder(totalPrice, actualDate, data)}}>
                    <input required placeholder="Nombre" type="text"/>
                    <input required placeholder="Phone" type="number"/>
                    <input required placeholder="Email" type="email"/>
                    <button className="cd__finishOrder" type="submit">
                        Finalizar compra <h3>Total: {totalPrice}</h3>
                    </button>
                </form>
                }
            </div>
        </div>
        {
            <Cart cart={cart} />
        }
        </>

    )
}

export default CartDetail;