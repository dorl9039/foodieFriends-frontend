import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import icon1 from '../../media/user-icon-1.png'
import icon2 from '../../media/user-icon-2.png'
import icon3 from '../../media/user-icon-3.png'
import icon4 from '../../media/user-icon-4.png'
import icon5 from '../../media/user-icon-5.png'

import './Friend.css'

const iconArr = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5
]

const Friend = ({friendData, handleRemove, iconNum}) => {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const onConfirmDelete = () => {
		setDeleteOpen(false)
		handleRemove(friendData.userId)
	}
  
	console.log(iconArr)

  return (
    <div className='friend-item__container'>
			<div className='friend__details'>
				<img src={iconArr[iconNum]} />
				<p>@{friendData.username}</p>
				<p>({friendData.firstName} {friendData.lastName})</p>
			</div>
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