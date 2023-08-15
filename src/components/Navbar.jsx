import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useNavigate} from 'react-router-dom';
import logo from '../media/foodieFriends-logo.png'

const Navbar = ({updateUser}) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/logout`, {}, {withCredentials: true})
		.then(() => {
			updateUser({loggedIn: false});
			navigate('/home');
		})
		.catch(err => console.log('Error in handleLogout', err));
	}
	
	return (
		<div className='navbar-main__container'>
			<nav className='header-navbar'>
				<img className='navbar__logo' src={logo} alt="foodieFriends-logo" />
				<NavLink to='/home'>Your Lists</NavLink>
				<NavLink to='/add'>Add Wish</NavLink>
				<NavLink to='/profile'>Profile</NavLink>
			</nav>
			<button className='logout-button' onClick={handleLogout}>Sign out</button>

		</div>
	);
};

export default Navbar;