import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'
import CounterStock from './CounterStock'

import { useContext } from '../Context/Context'

export default function ItemDetail(props) {

    let history = useHistory();

    const {idProducto} = useParams();
    const [products, setproducts] = useState([])
    const { cart } = useContext()

    let propsItem = '';

    if(props.location.aboutProps === undefined){
        history.goBack();
    }else {
        propsItem = props.location.aboutProps.infoItem;
    }

    const getDetail = async () => {

        let llamada = await fetch(`http://localhost:4000/product/${idProducto}`);
            llamada = await llamada.json();

        setproducts(llamada);
    }

    useEffect(() => {
        getDetail();
    }, [idProducto])

    return(
        <>
            {
                products.map( (element, index) => {
                    return(
                        <div key={index} className='pr__detalle containerInfo'>
                            <div className='pr__detalleImage'>
                                <button className='pr__goback' onClick={history.goBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
                                <img src={element.image} alt={`Imagen detalle`} />
                            </div>
                            <div className='pr__detalleInfo'>
                                <h3>Categoría: {element.categoria}</h3>
                                <h3>Título: {element.title}</h3>
                                <h3>Descripción: {element.descripcion}</h3>
                                <h3>Precio: {element.price}</h3>
                                <CounterStock item={propsItem}/>
                            </div>
                        </div>
                    )
                })
            }
            {
            <Cart 
                cart={cart}/>
            }
        </>
    )
}