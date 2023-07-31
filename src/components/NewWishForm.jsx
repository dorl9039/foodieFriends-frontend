import { useState } from 'react';

const kInitialFormData = {
    comment: "",
    priority: 0,
}

const NewWishForm = ({ onSubmit, restaurant }) => {
    const [formData, setFormData] = useState(kInitialFormData);
    const [invalidForm, setInvalidForm] = useState(restaurant? false : true)
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
        if (invalidForm) return;
        onSubmit(formData);
        setFormData(kInitialFormData);
        setInvalidForm(restaurant? false : true)
    }
    return (
        <div className='new-wish-form__container'>
            <h2>Add {restaurant} to your wishlist</h2>
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
                />
                {!invalidForm ? 
                <input type='Submit' className='submit-btn' />
                :
                <input type='Submit' className='submit-btn-invalid' disabled />}
            </form>
        </div>
    )
};

export default NewWishForm;