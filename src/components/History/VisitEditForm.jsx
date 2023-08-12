import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

const VisitEditForm = ({visit, editOpen, handleClose, handleEdit}) => {
  const [formData, setFormData] = useState('')

  const handleFormChange = (event) => {
    setFormData(event.target.name)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleEdit(visit.visitId, formData)
    handleClose()
    setFormData('')
  }

  return(
    <Modal
					className='edit-visit-modal__container'
					open={editOpen}
					onClose={handleClose}
					slots={{backdrop: StyledBackdrop}}>
						<form className='edit-visit-modal__form'
							onSubmit={handleFormSubmit}>
               <h3>Edit visit comment for {visit.restaurantName}</h3> 
               <label htmlFor='comment'>Comment:</label>
               <input
                className='edit-visit-comment__field'
                type='text'
                name='comment'
                value={formData}
                onChange={handleFormChange} />
                <button className='submit__button' type='Submit' value='Submit' />
              </form>
		</Modal>
  )
}

export default VisitEditForm;
