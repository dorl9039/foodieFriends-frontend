import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/base/Modal';
import { useAuth } from '../../hooks/useAuth';
import StyledBackdrop from '../StyledBackdrop';

import './WishEditForm.css'

const initialVisitData = {
  visitDate: '',
  visitComment: '',
}

const WishMoveForm = ({wishData, handleMove, handleClose, open}) => {
  const {user, handleUsernameUpdate, handleUserUpdate} = useAuth()
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

  const handleAddAttendee = (friendId) => {
    setSelectedAttendees(prev=> ([...prev, friendId]))
    setSearchInput('')
  }


  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleMove(formData);
    handleClose();
    setFormData(initialVisitData)
  }
		
  return(
    <Modal 
    className='edit-wish-modal__container' 
    open={open} 
    onClose={handleClose} 
    slots={{backdrop: StyledBackdrop}}>                  
      <form className='edit-wish-modal__form' onSubmit={handleFormSubmit}>
        <h3>Move {wishData.restaurantName} to History</h3>
          <label htmlFor='visitDate'>Visit Date</label>
          <input 
            name='visitDate' 
            type='date'
            value={formData.visitDate}
            onChange={handleFormChange}
            /> 
          <label htmlFor='comment'>Visit comment</label>
          <input 
            className='edit-wish-comment__field'
              type='text'
              name='comment'
              value={formData.comment}
              onChange={handleFormChange}
          /> 
          <label htmlFor='attendees'>Add Attendees</label>
          <input
            className='edit-wish-comment__field'
            type='text'
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder='Search for usernames' />
          <ul>
            {friends.filter(friend => friend.username.includes(searchInput)).map(friend =>
              <li key={friend.username}>
                {friend.username}
                <button
                  type='button'
                  onClick={() => handleAddAttendee(friend.userId)}> Add </button>
              </li>
            )}
          </ul>
          <div>
            <p>Selected Attendees:</p>
            <ul>
              {selectedAttendees.map((attendee) => (
                <li key={attendee}>{attendee}</li>
              ))}
            </ul>
          </div>

          <input className='submit__button' type='Submit' defaultValue='Submit' />
      </form>
  </Modal>  
  )
};

export default WishMoveForm;