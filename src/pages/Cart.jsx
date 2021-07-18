export default function Cart(props) {

    let cart = props.cart;

    return(
        <div className={`pu__cart`}>
            <div className='pu__title'>

            </div>
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
                <button>
                    Continuar con el pago
                </button>
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