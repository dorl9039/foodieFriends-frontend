import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import LoginBox from '../components/Account/LoginBox'
import RegisterBox from '../components/Account/RegisterBox'
import ConfirmationModal from '../components/ConfirmationModal';
import logo from '../media/foodieFriends-logo-full.png'
import axios from 'axios';

import './Authenticate.css';

const Authenticate = ({updateUser}) => {
	const navigate = useNavigate();
	
	const [loginFail, setLoginFail] = useState(false)
	const [loginFailMessage, setLoginFailMessage] = useState('')

	const handleLoginSubmit = (loginData) => {
		axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, loginData, {withCredentials: true})
		.then((res) => {
			updateUser({...res.data, loggedIn: true})
			navigate('/home')
		}, (err) => {
			setLoginFail(true)
			setLoginFailMessage(err.response.data)
			return;
		})  
		.catch(err => ("Error in handleLoginSubmit", err))
	}

	const [registerOpen, setRegisterOpen] = useState(false);
	const handleRegisterOpen = () => setRegisterOpen(true);
	const handleRegisterClose = () => setRegisterOpen(false);
	const [registerFailMessage, setRegisterFailMessage] = useState('')

	const handleRegisterSubmit = (registerData) => {
		axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/register`, registerData, {withCredentials: true})
		.then((res) => {
			updateUser({...res.data, loggedIn: true})
			navigate('/home')
		}, (err) => {
			setRegisterFailMessage(err.response.data)
			return;
			}
		)  
		.catch(err => ("Error in handleRegisterSubmit", err))
	}


	const googleSignIn = (e) => {
		e.preventDefault()
		const str = `${import.meta.env.VITE_SERVER_URL}/auth/google`
		window.open(str, '_self')
	}

	return (
		<div className='authentication-page__container'>
			<section className='authenticate-page__row1' />
			<section className='authenticate-page-rows__container'>
				<section className='authenticate-page__row2'>
					<section className='logo-title__container'>
						<img className='authenticate-page__logo' src={logo} alt="foodieFriends-logo" />
					</section>
					<p>Organize your restaurant lists and connect with friends!</p>
				</section>
				<section className='authenticate-page__row3'>
						<ConfirmationModal 
							open={loginFail} 
							handleClose={()=>setLoginFail(false)} 
							message={loginFailMessage} />
						<LoginBox 
							handleSubmit={handleLoginSubmit} />
						<section className='row__divider'>
							<p>OR</p>
						</section>
						<button 
							className='auth-button' 
							onClick={handleRegisterOpen}> Create an account 
						</button>
						<section className='row__divider'>
							<p>OR</p>
						</section>
						<RegisterBox 
							open={registerOpen}
							handleClose={handleRegisterClose}
							handleSubmit={handleRegisterSubmit}
							errorMessage={registerFailMessage} />
						<button className='auth-button' onClick={googleSignIn}> Sign in with Google</button>
				</section>
			</section>
			
		</div>
	)
};


export default Authenticate;