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

    const getDetail = () => {

        let llamada = [];
        
        fetch(`http://localhost:4000/product/${idProducto}`)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function(response) {

            if(response.length == 0) {
                throw new Error('No hay un producto asociado a ese ID')
            }else {
                llamada = response;
                setproducts(llamada);
            }

        }).catch(function(error) {
            console.log(error);
        });

        
    }

    useEffect(() => {
        getDetail();
    }, [idProducto])

    let item = [];

    if(products != [])
        products.forEach(Element => {
            item = {
                id: Element.id,
                image: Element.image,
                price: Element.price,
                stock: Element.stock,
                title: Element.title
            }
        })

        console.log(products)

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
                                <h3>Stock: {element.stock}</h3>
                                <CounterStock item={item}/>
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