import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';

import './Friend.css'

const Friend = ({friendData, handleRemove}) => {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const onConfirmDelete = () => {
		setDeleteOpen(false)
		handleRemove(friendData.userId)
	}
  

  return (
    <div className='friend-item__container'>
      <p>{friendData.username}</p>
      <p>{friendData.firstName}</p>
      <p>{friendData.lastName}</p>
      <button onClick={()=> setDeleteOpen(true)}>Remove</button>
      <Modal
					className="delete-modal__container"
					open={deleteOpen}
					onClose={() => setDeleteOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
						<div className='delete-modal'>
							<h3> Are you sure you want to remove this friend?</h3>
							<section className='delete-modal-buttons__container'>
								<button onClick={onConfirmDelete}>Delete</button>
								<button onClick={() => setDeleteOpen(false)}>Nevermind</button>
							</section>

						</div>	
			</Modal>
    </div>
  )
}

export default Friend;