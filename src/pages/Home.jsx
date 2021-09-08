import {NavLink} from 'react-router-dom'

export default function Home() {
    return(
        <div className='containerInfo' style={{textAlign: 'center'}}>
            <h1 className="first__header">
                30% OFF WEEK!
            </h1>
            <img src="https://compragamer.net/bannersPrincipal/b550%203-min.jpg" alt="imagen home"/>
            <div style={{marginTop: '2rem'}}>
                <NavLink to="/Productos" className="button_cat">Ir a nuestro catálogo</NavLink>
            </div>
        </div>
    )
}