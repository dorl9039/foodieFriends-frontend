import { useState } from 'react';
import './AddFriend.css'


const AddFriend = ({ handleSubmit }) => {
	const [formData, setFormData] = useState('');
	const handleFormChange = (event) => {
			setFormData(event.target.value);
	}

  const onAddSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData)
    setFormData('')
  }

	return(
    <form className='add-friend-form__container' onSubmit={onAddSubmit}>
        <label htmlFor='friendUsername'>Add a new friend by username</label>
        <input
          className='add-friend-form__field'
          type='text'
          name='username'
          value={formData}
          onChange={handleFormChange}
        />
        <input className='add-friend-form__button' type='Submit' value='Add!'/>
      </form>
	);
};

export default AddFriend;