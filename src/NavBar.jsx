import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import { useContext } from './Context/Context'

export default function NavBar(props) {

    const { cartShow, setcartShow, cart } = useContext()
    const [categories, setCategories] = useState([])
    let totalItems = 0;

    const getCategories = () => {
        fetch(`http://localhost:4000/categories`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Hubo un error al obtener la información')
            }
            return response.json()
        })
        .then((response) => {
            console.log(response)
            setCategories(response)
        })
        .catch( (e) => {
            new Error(e);
        })
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
                        <NavLink to='/' activeClassName='itemListActive'>Inicio</NavLink>
                    </li>
                    <li to='' className='list__submenu'>
                        Productos
                        <ul>
                            <li>
                                <NavLink to='/Productos' activeClassName='submenu__active'>Todas</NavLink>
                            </li>
                            {
                                categories.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <NavLink to={`/Productos/category/${item.cod_categoria}`} activeClassName='submenu__active'>{item.name}</NavLink>
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
