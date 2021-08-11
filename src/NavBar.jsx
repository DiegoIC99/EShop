import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import { useContext } from './Context/Context'
import {getFirestore} from './firebase'

export default function NavBar(props) {

    const { cartShow, setcartShow, cart } = useContext()
    const [categories, setCategories] = useState([])
    let totalItems = 0;

    const getCategories = async () => {

        let Categories = [];

        const conn = getFirestore();
        const collection = conn.collection("products");
        const query = await collection.get();

        query.forEach((item, index) => {
            Categories.push(item.data().categoria)
        })

        var filterCategories = Categories.filter((value, index) => Categories.indexOf(value) === index)

        setCategories(filterCategories)
    }

    useEffect(() => {
        getCategories();
    }, [])

    cart.forEach((element) => {
        totalItems = totalItems + parseFloat(element.qty);
    })

    return(
        <header className='nb__header'>
            <nav className='nb__nav'>
                <div className='nb__logo'>
                    E-Shop
                </div>
                <ul className='nb__items'>
                    <li>
                        <NavLink to='/Productos'>Catálogo</NavLink>
                    </li>
                    <li to='' className='list__submenu'>
                        Categorías
                        <ul>
                            {
                                categories.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <NavLink to={`/Productos/category/${item}`} activeClassName='submenu__active'>{item}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li>
                        <a style={{position: 'relative'}} onClick={ () => {setcartShow(!cartShow ? true : false)} }>
                            <FontAwesomeIcon icon={faCartPlus} />
                            {
                                totalItems !== 0 && <div className="totalItemsCart">{totalItems}</div>
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
