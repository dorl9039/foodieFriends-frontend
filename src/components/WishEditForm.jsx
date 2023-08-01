import { useState, useEffect } from 'react';
import './WishEditForm.css'


const WishEditForm = ({wishData, handleWishEdit}) => {
    const [formData, setFormData] = useState({})
    const originalWishData = {
        wishComment: wishData.wish_comment, 
        wishPriority: wishData.wish_priority}

    useEffect(()=> {
        setFormData(originalWishData)
    }, [])

    console.log('formData', formData)
    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = name === "wishPriority" ? parseInt(event.target.value, 10) : event.target.value;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleWishEdit(formData);
    }
    return(
        <div className='edit-wish-form__container'>
            <h3>Edit Wish {wishData.wish_id}</h3>
            <form className='edit-wish-form__form' onSubmit={handleFormSubmit}>
                <label htmlFor='wishPriority'>Priority</label>
                <select 
                    name='wishPriority' 
                    value={formData.wishPriority}
                    onChange={handleFormChange}
                > 
                    <option value='0'>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <label htmlFor='wishComment'>Comment</label>
                <input 
                    type='text'
                    name='wishComment'
                    value={formData.wishComment}
                    onChange={handleFormChange}
                /> 
                <input type='Submit' value='Submit' className='submit-btn' />
            </form>
        </div>
    )
};

export default WishEditForm