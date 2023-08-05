import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>
            <NavLink to='/add'>Add Wish</NavLink>
            <NavLink to='/history'>History</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/profile'>Profile</NavLink>

        </nav>
    )
}

export default Navbar;