import './Nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <img className="logo" src="./assets/Logo.jpg" alt="Little Lemon Logo"/>
            <ul>
                <li><Link to="/" className="home">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav;