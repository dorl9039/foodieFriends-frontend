import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

const initialFormData = {
  visitComment:'',
  rating: '',
}

const VisitEditForm = ({visit, editOpen, handleClose, handleEdit}) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = name === 'rating' ? parseInt(event.target.value, 10) : event.target.value
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleEdit(visit.visitId, formData)
    console.log("in VisitEditForm, handleFormSubmit. formData:", formData)
    handleClose()
    setFormData(initialFormData)
  }

  return(
    <Modal
					className='edit-record-modal__container'
					open={editOpen}
					onClose={handleClose}
					slots={{backdrop: StyledBackdrop}}>
						<form className='edit-record-modal__form'
							onSubmit={handleFormSubmit}>
               <h3>Edit visit for {visit.restaurantName}</h3> 
               <label htmlFor='visitComment'>Comment:</label>
               <input
                className='edit-record-text__field'
                type='text'
                name='visitComment'
                value={formData.visitComment}
                onChange={handleFormChange} />
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
                <input className='submit__button' type='Submit' value='Submit' />
              </form>
		</Modal>
  )
}

export default VisitEditForm;
