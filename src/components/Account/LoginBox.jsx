import { useState } from 'react';


const kLoginFormInitialState = {
	username: '',
	password: '',
}

export const LoginBox = ({ handleSubmit}) => {
	const [loginFormData, setLoginFormData] = useState(kLoginFormInitialState);

	const onLoginFormChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setLoginFormData(prev => ({
			...prev, [name]: value
		}));
	};

	const onLoginSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit fired');
		handleSubmit(loginFormData);
		setLoginFormData(kLoginFormInitialState);
	};

	return (                
				<form className='login__form' onSubmit={onLoginSubmit}>
					<label htmlFor='loginUsername'>Username</label>
					<input
						type='text'
						name='username'
						value={loginFormData.username}
						onChange={onLoginFormChange}
					/>
					<label htmlFor='loginPassword'>Password</label>
					<input
						type='password'
						name='password'
						value={loginFormData.password}
						onChange={onLoginFormChange}
					/>
					<input className='auth-button' value='Sign In' type='Submit'/>
				</form>
	);
};

export default LoginBox;