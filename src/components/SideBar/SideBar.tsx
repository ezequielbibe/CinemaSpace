import React from 'react';
import { Link } from 'react-router-dom'
import imagen from '../../assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
    return(
        <div className='sideBar'>
            <div>
                <div className='sideBar-logo'>
                    <img src={imagen} alt="" />
                    <h1>CINEMA SPACE</h1>
                </div>
                <nav className='sideBar-nav'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/cartelera">Cartelera</Link></li>
                        <li><Link to="/estrenos">Estrenos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </div>

            <footer>
                <LocationOnIcon className='icon-location' /> 
                <span>Argentina, Buenos Aires, Bahia Blanca - Alsina 650</span>
            </footer>
        </div>
        
    )
}

export default Header;