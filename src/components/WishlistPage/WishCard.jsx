import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import WishEditForm from './WishEditForm';

import './WishCard.css'
import WishMoveForm from './WishMoveForm';

const WishCard = ({wishData, handleDelete, handleWishEdit, handleWishMove}) => {

	const [deleteOpen, setDeleteOpen] = useState(false)
	const [editOpen, setEditOpen] = useState(false)
	const [moveOpen, setMoveOpen] = useState(false)

	const onConfirmDelete = () => {
		setDeleteOpen(false)
		handleDelete(wishData.wishId)
	}

	const onEditClick = () => {
		setEditOpen(true)
	}

	const onMoveClick = () => {
		setMoveOpen(true)
	}

	return(
		<section className='selected-record__container'>
			<section className='selected-record__content'>
				<section className='wish-restaurant-info'>
					<p>{wishData.address1}, {wishData.city}, {wishData.state}</p>
					<p>{wishData.cuisine} | {wishData.priceRange}</p>
					<p className='wish-restaurant-comment'><b>Wish note:</b> {wishData.comment}</p>
				</section>
				<section className='record-buttons__container'>
				<button onClick={() => setDeleteOpen(true)}>Delete</button>
				<button onClick={onEditClick}>Edit</button>
				<button onClick={onMoveClick}>Move</button>
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
			<WishMoveForm
				wishData={wishData}
				handleMove={handleWishMove}
				handleClose={()=>setMoveOpen(false)}
				open={moveOpen}/>  
		</section>
	)
};

export default WishCard