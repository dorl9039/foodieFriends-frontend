import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/base/Modal';
import { useAuth } from '../../hooks/useAuth';
import StyledBackdrop from '../StyledBackdrop';

import './WishEditForm.css'

const initialVisitData = {
  visitDate: '',
  visitComment: '',
  rating: '',
}

const WishMoveForm = ({wishData, handleMove, handleClose, open}) => {
  const {user} = useAuth()
  const [formData, setFormData] = useState(initialVisitData)
  const [searchInput, setSearchInput] = useState('');
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [friends, setFriends] = useState([])

  useEffect(()=> {
    //Fetch friend usernames
    axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${user.userId}/friends`)
    .then((res) => {
      setFriends(res.data)
    })
    .catch(err => console.log("Error in WishMoveForm useEffect", err))
  }, [])

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value)
  }

  const handleAddAttendee = (friend) => {
    setSelectedAttendees(prev=> ([...prev, friend]))
    setSearchInput('')
  }

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = name === 'rating' ? parseInt(event.target.value, 10) : event.target.value
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const visitData = {
      ...formData,
      attendees: selectedAttendees
    }
    console.log('in WishMoveForm, handleFormSubmit, visitData:', visitData)
    handleMove(wishData, visitData);
    handleClose();
    setFormData(initialVisitData)
    setSelectedAttendees([])
  }
		
  return(
    <Modal 
      className='edit-record-modal__container' 
      open={open} 
      onClose={handleClose} 
      slots={{backdrop: StyledBackdrop}}
      >                  
      <form className='edit-record-modal__form' onSubmit={handleFormSubmit}>
        <h3>Move {wishData.restaurantName} to History</h3>
          <label htmlFor='visitDate'>Visit Date</label>
          <input 
            name='visitDate' 
            type='date'
            value={formData.visitDate}
            onChange={handleFormChange}
            /> 
          <label htmlFor='rating'>Rating</label>
						<select 
							name='rating' 
							value={formData.rating}
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
          <label htmlFor='visitComment'>Visit comment</label>
          <input 
            className='edit-record-text__field'
              type='text'
              name='visitComment'
              value={formData.comment}
              onChange={handleFormChange}
          /> 
          <label htmlFor='attendees'>Add Attendees</label>
          <input
            className='edit-record-text__field attendees-search__field'
            type='text'
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder='Search for usernames' />
          <ul className='attendees-search-result__container'>
            {friends.filter(friend => friend.username.includes(searchInput)).map((friend, index) =>
              (searchInput.length > 0? 
                <li key={index}>
                  {friend.username}
                  <button className='add-attendee__button'
                    type='button'
                    onClick={() => handleAddAttendee(friend)}> Add </button>
                </li> : <></>)
            )}
          </ul>
          <div className='selected-attendees__container'>
            <p>Selected Attendees:</p>
            <ul>
              {selectedAttendees.map((attendee) => (
                <li key={attendee.username}>{attendee.username}</li>
              ))}
            </ul>
          </div>
          <input className='submit__button' type='Submit' defaultValue='Submit' />
      </form>
  </Modal>  
  )
};

export default WishMoveForm;