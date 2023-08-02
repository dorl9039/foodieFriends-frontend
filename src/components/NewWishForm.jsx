import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import './NewWishForm.css'

const kInitialFormData = {
    wish_comment: "",
    wish_priority: 0,
}

const NewWishForm = ({ onSubmit, restaurant }) => {
    const [formData, setFormData] = useState(kInitialFormData);
    const [isDialogOpen, setIsDialogOpen] = useState(false)

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
        onSubmit(formData);
        setIsDialogOpen(true)
        setFormData(kInitialFormData);
    }
    return (
        <div className='new-wish-form__container'>
            <h3>Add {restaurant} to your wishlist</h3>
            <form className='new-wish-form__form' onSubmit={handleFormSubmit}>
                <label htmlFor='wish_priority'>Priority</label>
                <select 
                    name='wish_priority' 
                    value={formData.wish_priority}
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
                    value={formData.wish_comment}
                    onChange={handleFormChange}
                />
                <input type='Submit' value='Submit' className='submit-btn' />
            </form>

            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <div className='dialog-modal__overlay' aria-hidden="true" />
            <div className='dialog-modal__container'>
                <Dialog.Panel className='dialog-modal'>
                    <Dialog.Title>Wish added!</Dialog.Title>
                    <button onClick={()=> setIsDialogOpen(false)}>Got it</button>
                </Dialog.Panel>
            </div>
            </Dialog>
        </div>
    )
};

export default NewWishForm;