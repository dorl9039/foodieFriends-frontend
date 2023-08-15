import { useState } from 'react';
import './NewWishForm.css';

const kInitialFormData = {
		comment: "",
		priority: 0,
};

const NewWishForm = ({ onSubmit, restaurant }) => {
	const [formData, setFormData] = useState(kInitialFormData);


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
		onSubmit(formData);
		setFormData(kInitialFormData);
	}
	return (
		<div className='new-wish-form__container'>
			<h3>Add {restaurant} to wishlist</h3>
			<form className='new-wish-form__form' onSubmit={handleFormSubmit}>
				<label htmlFor='priority'>Priority</label>
				<select 
					name='priority' 
					value={formData.priority}
					onChange={handleFormChange}
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
					type='text'
					name='comment'
					value={formData.comment}
					onChange={handleFormChange}
					autoComplete="off"
				/>
				<input type='Submit' value='Submit' className='add-submit__button' />
			</form>
		</div>
	)
};

export default NewWishForm;