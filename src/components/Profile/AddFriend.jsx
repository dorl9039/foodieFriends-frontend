import { useState } from 'react';


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
    <form onSubmit={onAddSubmit}>
        <label htmlFor='friendUsername'>Add friend by username</label>
        <input
          className='login__field'
          type='text'
          name='username'
          value={formData}
          onChange={handleFormChange}
        />
        <input type='Submit' value='Add!'/>
      </form>
	);
};

export default AddFriend;