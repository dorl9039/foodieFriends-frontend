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
		<section className='selected-wish__container'>
			<section className='selected-wish__content'>
			<h3 className='selected-wish__header'>Selected Wish</h3>
			<section className='wish-card__container'>
				<h3>{wishData.restaurantName}</h3>
				<section className='wish-restaurant-info'>
					<p>{wishData.cuisine} | {wishData.priceRange}</p>
					<p>{wishData.address1}, {wishData.city}, {wishData.state}</p>
				</section>
				<section className='wish-restaurant-comment'>Wish notes: {wishData.comment}</section>
				<section className='wish-buttons__container'>
				<button 
					className='wish-delete__button'
					onClick={() => setDeleteOpen(true)}>X</button>
				<button 
					className='wish-edit__button'
					onClick={onEditClick}>✏️</button>
			</section>
			</section>
			</section>
			<Modal
					className="delete-modal__container"
					open={deleteOpen}
					onClose={() => setDeleteOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
						<div className='delete-modal'>
							<h3> Are you sure you want to delete this wish?</h3>
							<section className='delete-modal-buttons__container'>
							<button onClick={onConfirmDelete}>Delete</button>
							<button onClick={() => setDeleteOpen(false)}>Nevermind</button>
							</section>

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