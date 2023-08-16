import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

import './RegisterUsername.css';


const SetUsername = ({ userId, updateUsername, purpose }) => {
	const [formData, setFormData] = useState('');
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleFormChange = (event) => {
			setFormData(event.target.value);
	}

	const onSetUsername = (event) => {
		event.preventDefault();
			axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/username`, {username:formData})
			.then(res => {
					updateUsername(res.data.username);
					handleClose()
					if (!purpose) {
						navigate('/home');
					}
			})
			.catch(err => {
					console.log("error in handleRegisterUsername", err);
			})
	}

	return(
		<div>
			<button className='auth-button' onClick={handleOpen}>{purpose? purpose : 'Set username'}</button>
			<Modal 
				className='register-modal__container' 
				open={open} 
				onClose={handleClose} 
				slots={{backdrop: StyledBackdrop}}>                  
					<form className='register-modal__form' onSubmit={onSetUsername}>
						<label htmlFor='setUsername'>Username</label>
						<input
							className='login__field'
							type='text'
							name='username'
							value={formData}
							onChange={handleFormChange}
							autoComplete='off'
						/>
						<input className='auth-button' value='Confirm' type='Submit'/>
					</form>
			</Modal>
		</div>
	);
};

export default SetUsername;