import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useNavigate} from 'react-router-dom';

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
		<nav className='header-navbar'>
			<div className='header__title'>FoodieFriends</div>
			<NavLink to='/home'>Your Lists</NavLink>
			<NavLink to='/add'>Add Wish</NavLink>
			<NavLink to='/profile'>Profile</NavLink>
			<button className='logout-button' onClick={handleLogout}>Logout</button>
		</nav>
	);
};

export default Navbar;