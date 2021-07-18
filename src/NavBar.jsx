import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(props) {
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
                            <li>
                                <NavLink to='/Productos/category/Placas-de-video' activeClassName='submenu__active'>Placas de video</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Productos/category/Procesadores' activeClassName='submenu__active'>Procesadores</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Productos/category/perifericos' activeClassName='submenu__active'>Perifericos</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
