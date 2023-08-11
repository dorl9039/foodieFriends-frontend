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
			<section className='wish-card__container'>
				<section className='wish-restaurant-info'>
					<p>{wishData.address1}, {wishData.city}, {wishData.state}</p>
					<p>{wishData.cuisine} | {wishData.priceRange}</p>
					<p className='wish-restaurant-comment'><b>Wish note:</b> {wishData.comment}</p>
				</section>
				<section className='wish-buttons__container'>
				<button 
					className='wish-delete__button'
					onClick={() => setDeleteOpen(true)}>Delete wish</button>
				<button 
					className='wish-edit__button'
					onClick={onEditClick}>Edit wish</button>
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