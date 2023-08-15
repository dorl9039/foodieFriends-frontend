import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

const ChangePassword = ({open, handleClose, handlePasswordChange}) => {
  const initialFormData = {
    oldPassword: '',
    newPassword: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    handlePasswordChange(formData);
    handleClose();
    setFormData(initialFormData);
  }

  return(
    <div>
    <Modal
      className='register-modal__container'
      open={open}
      onClose={handleClose}
      slots={{backdrop: StyledBackdrop}}>
        <form className='register-modal__form' onSubmit={onFormSubmit}>
					<label htmlFor='oldPassword'>Current password</label>
					<input
						type='password'
						name='oldPassword'
						value={formData.oldPassword}
						onChange={handleFormChange}
					/>
					<label htmlFor='newPassword'>New password</label>
					<input
						type='password'
						name='newPassword'
						value={formData.newPassword}
						onChange={handleFormChange}
					/>
					<input className='auth-button' value='Confirm' type='Submit'/>
				</form>
      </Modal>

    </div>
  )
}

export default ChangePassword;