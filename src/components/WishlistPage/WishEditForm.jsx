import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

import './WishEditForm.css'


const WishEditForm = ({wishData, handleWishEdit, handleClose, open}) => {
    
    const [formData, setFormData] = useState({})
    const originalWishData = {
        wish_comment: wishData.wish_comment, 
        wish_priority: wishData.wish_priority}
    
    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = name === "wish_priority" ? parseInt(event.target.value, 10) : event.target.value;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleWishEdit(formData);
        handleClose();
    }
    
    return(
        <Modal 
        className='edit-wish__container' 
        open={open} 
        onClose={handleClose} 
        slots={{backdrop: StyledBackdrop}}>                  
            <form className='edit-wish__form' onSubmit={handleFormSubmit}>
            <h3>Edit Wish {wishData.wish_id} for {wishData.restaurant_name}</h3>
                <label htmlFor='wish_priority'>Priority</label>
                <select 
                    name='wish_priority' 
                    value={formData.wish_priority}
                    defaultValue={originalWishData.wish_priority}
                    onChange={handleFormChange}
                > 
                    <option value='0'>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <label htmlFor='wish_comment'>Comment</label>
                <input 
                    type='text'
                    name='wish_comment'
                    defaultValue={originalWishData.wish_comment}
                    value={formData.wish_comment}
                    onChange={handleFormChange}
                /> 
                <input type='Submit' value='Submit' className='submit-btn' />
                <button className='historicize-button'>Move to history</button>
            </form>
    </Modal>  
    )
};

export default WishEditForm