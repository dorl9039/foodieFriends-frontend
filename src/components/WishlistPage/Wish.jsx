import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import './Wish.css'

const Wish = ({wish, handleDelete, handleEditClick, handleSelect}) => {
	const [open, setOpen] = useState(false)

	const onConfirmDelete = () => {
		setOpen(false)
		console.log('in Wish, onConfirm Delete, wishId', wish.wishId)
		handleDelete(wish.wishId)
	}

	const onEditClick = () => {
		handleEditClick()
	}

	const onSelectClick = () => {
		handleSelect(wish.wishId)
	}

	return(
		<section className='wish' onClick={onSelectClick}>
			<h3>{wish.restaurantName}</h3>
			<p>{wish.priority}</p>
			<p>{wish.comment}</p>
			<li>
				<button 
					className='delete-button__container'
					onClick={() => setOpen(true)}>X</button>
				<button 
					className='edit-button__container'
					onClick={onEditClick}>✏️</button>
			</li>
			<Modal
					className="dialog-modal__container"
					open={open}
					onClose={() => setOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
						<div className='modal'>
							<h3> Are you sure you want to delete this wish?</h3>
							<button onClick={onConfirmDelete}>Delete</button>
							<button onClick={() => setOpen(false)}>Nevermind</button>
						</div>	
			</Modal>    
		</section>
	)
};

export default Wish
