import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

import './WishEditForm.css'


const WishEditForm = ({wishData, handleWishEdit, handleClose, open}) => {
		const [formData, setFormData] = useState({})
		
		const originalWishData = {
			comment: wishData.comment, 
			priority: wishData.priority}
		
		const handleFormChange = (event) => {
			const name = event.target.name;
			const value = name === "priority" ? parseInt(event.target.value, 10) : event.target.value;
			setFormData((prev) => ({
				...prev,
				[name]: value
			}));
		}

		const handleFormSubmit = (event) => {
			event.preventDefault();
			handleWishEdit(formData);
			handleClose();
			setFormData({})
		}
		
		return(
			<Modal 
			className='edit-record-modal__container' 
			open={open} 
			onClose={handleClose} 
			slots={{backdrop: StyledBackdrop}}>                  
				<form className='edit-record-modal__form' onSubmit={handleFormSubmit}>
					<h3>Edit wish for {wishData.restaurantName}</h3>
						<label htmlFor='priority'>Priority</label>
						<select 
							name='priority' 
							value={formData.priority}
							defaultValue={originalWishData.priority}
							onChange={handleFormChange}
							size='1'
							> 
								<option value='0'>Select</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
						</select>
						<label htmlFor='comment'>Comment</label>
						<input 
							className='edit-record-text__field'
								type='text'
								name='comment'
								defaultValue={originalWishData.comment}
								value={formData.comment}
								onChange={handleFormChange}
						/> 
						<input className='submit__button' type='Submit' value='Submit' />
				</form>
		</Modal>  
		)
};

export default WishEditForm