import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/lists'>Your Lists</NavLink>
            <NavLink to='/add'>Add Wish</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
        </nav>
    )
}

export default Navbar;