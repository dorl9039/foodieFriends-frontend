import { useState } from 'react';
import axios from 'axios';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';



const AddFriend = ({ open, handleClose, handleSubmit }) => {
	const [formData, setFormData] = useState('');

	const handleFormChange = (event) => {
			setFormData(event.target.value);
	}

  const onAddSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData)
  }
	// const onSetUsername = (event) => {
	// 	event.preventDefault();
	// 		axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/username`, {username:formData})
	// 		.then(res => {
	// 				updateUsername(res.data.username);
	// 				navigate('/home');
	// 		})
	// 		.catch(err => {
	// 				console.log("error in handleRegisterUsername", err);
	// 		})
	// }

	return(
		<div>
			<Modal 
				className='login-modal__container' 
				open={open} 
				onClose={handleClose} 
				slots={{backdrop: StyledBackdrop}}>                  
					<form className='modal' onSubmit={onAddSubmit}>
						<label htmlFor='setUsername'>Username</label>
						<input
							className='login__field'
							type='text'
							name='username'
							value={formData}
							onChange={handleFormChange}
						/>
						<input type='Submit'/>
					</form>
			</Modal>
		</div>
	);
};

export default AddFriend;