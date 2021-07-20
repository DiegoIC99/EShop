import {useState} from 'react'
import {Link} from 'react-router-dom'
import CounterStock from './CounterStock'

export default function Products(props) {

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
                pathname: `/Detalle/${props.id}`,
                aboutProps: { 
                    infoItem: props,
                }
            }}>
                Ver detalle
            </Link>
            <div className='pr__stock'>
                Stock actual: <b>{props.stock}</b>
            </div>
            <CounterStock item={props} />
        </div>
    )


}