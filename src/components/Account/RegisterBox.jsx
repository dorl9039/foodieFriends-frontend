import {useState, forwardRef} from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';


const kFormInitialState = {
	username: '',
	password: '',
	firstName: '',
	lastName: '',
	email: '',
};

export const RegisterBox = ({open, handleClose, handleSubmit, errorMessage}) => {
	const [formData, setFormData] = useState(kFormInitialState);
	const [validRegistration, setValidRegistration] = useState(true)
	const [validForm, setValidForm] = useState({
		username: false,
		password: false,
		firstName: false,
		lastName: false,
		email: false
	})
	

	const onFormChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setFormData(prev => ({
			...prev, [name]: value
		}));
		value ? setValidForm(prev => ({...prev, [name]: true})) : setValidForm(prev => ({...prev, [name]: false}))
	}

	const onSubmit = (event) => {
		event.preventDefault();
		const valid = handleSubmit(formData);
		if (valid) {
			setFormData(kFormInitialState);
			handleClose();
		} else {
			setValidRegistration(false)
		}
	}

	const checkFieldsValid = (fields) => {
		for (const field in fields) {
			if (!fields[field]) return false
		}
		return true
	}

	return (
		<Modal 
			className='login-modal__container' 
			open={open} 
			onClose={handleClose} 
			slots={{backdrop: StyledBackdrop}}>                  
				<form className='modal' onSubmit={onSubmit}>
					{!validRegistration? <p>{errorMessage}</p> : <></>}
					<label htmlFor='registerUsername'>Username</label>
					<input
						className='login__field'
						type='text'
						name='username'
						value={formData.username}
						onChange={onFormChange}
					/>
					<label htmlFor='registerPassword'>Password</label>
					<input
						className='login__field'
						type='password'
						name='password'
						value={formData.password}
						onChange={onFormChange}
					/>
					<label htmlFor='registerFirstName'>First name</label>
					<input
						className='login__field'
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={onFormChange}
					/>
					<label htmlFor='registerLastName'>Last name</label>
					<input
						className='login__field'
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={onFormChange}
					/>
					<label htmlFor='registerEmailName'>Email</label>
					<input
						className='login__field'
						type='text'
						name='email'
						value={formData.email}
						onChange={onFormChange}
					/>
					{checkFieldsValid(validForm) ? 
						<input type='Submit' value='Create account'/> 
					:
					(
						<>
						<p>Please fill out all the fields</p>
						<input type='Submit' value='Create account' disabled/> 
						</>
					)
					}
				</form>
		</Modal>
	);
};

export default RegisterBox;