import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import WishEditForm from './WishEditForm';
import './WishCard.css'

const WishCard = ({wishData, handleDelete, handleWishEdit}) => {
	const [deleteOpen, setDeleteOpen] = useState(false)
	const [editOpen, setEditOpen] = useState(false)

	const onConfirmDelete = () => {
		setDeleteOpen(false)
		console.log('in Wish, onConfirm Delete, wishId', wishData.wishId)
		handleDelete(wishData.wishId)
	}

	const onEditClick = () => {
		setEditOpen(true)
	}

	return(
		<section className='wish-card__container'>
			<h3>Wish restaurant: {wishData.restaurantName}</h3>
			<ul>
				<li>Priority: {wishData.priority}</li>
				<li>Comment: {wishData.comment}</li>
				<li>Address: {wishData.address1}, {wishData.city}, {wishData.state}, {wishData.country}</li>
				<li>Cuisine: {wishData.cuisine}</li>
				<li>Price range: {wishData.priceRange}</li>
			</ul>
				<li>
				<button 
					className='delete-button__container'
					onClick={() => setDeleteOpen(true)}>X</button>
				<button 
					className='edit-button__container'
					onClick={onEditClick}>✏️</button>
			</li>
			<Modal
					className="dialog-modal__container"
					open={deleteOpen}
					onClose={() => setDeleteOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
						<div className='modal'>
							<h3> Are you sure you want to delete this wish?</h3>
							<button onClick={onConfirmDelete}>Delete</button>
							<button onClick={() => setDeleteOpen(false)}>Nevermind</button>
						</div>	
			</Modal>
			<WishEditForm 
								wishData={wishData}
								handleWishEdit={handleWishEdit}
								handleClose={()=>setEditOpen(false)}
								open={editOpen}/>    
		</section>
	)
};

export default WishCard