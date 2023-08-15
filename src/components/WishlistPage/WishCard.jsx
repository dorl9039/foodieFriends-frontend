import { useState } from 'react';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import WishEditForm from './WishEditForm';
import WishMoveForm from './WishMoveForm';

import './WishCard.css';

const WishCard = ({wishData, handleDelete, handleWishEdit, handleWishMove}) => {

	const [deleteOpen, setDeleteOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);
	const [moveOpen, setMoveOpen] = useState(false);

	const onConfirmDelete = () => {
		setDeleteOpen(false);
		handleDelete(wishData.wishId);
	}

	const onEditClick = () => {
		setEditOpen(true);
	}

	const onMoveClick = () => {
		setMoveOpen(true);
	}

	return(
		<section className='selected-record__container'>
			<section className='selected-record__content'>
				<section className='selected-record-details__container'>
					<img src={wishData.photo} />
					<section className='selected-record__details'>
						<p><b className='detail-type'>Address: </b>{wishData.address1}, {wishData.city}, {wishData.state}</p>
						<p><b className='detail-type'>Cuisine:</b> {wishData.cuisine}</p>
						<p><b className='detail-type'>Price:</b> {wishData.priceRange} | <b>Priority:</b> {wishData.priority}</p>
					
						<p className='wish-restaurant-comment'><b className='detail-type'>Wish note:</b> {wishData.comment}</p>
						<div className='wish-restaurant-foodiefriends'>
							{wishData.foodieFriends.length > 0? 
								<div>
									<section><b className='detail-type'>FoodieFriends:</b> {wishData.foodieFriends.map(friend => friend.username).toString()}</section> 
									<button 
										className='contact-friend__button' 
										onClick={() => window.location=`mailto:${wishData.foodieFriends.map(friend => friend.email).toString()}?subject=Want to try out ${wishData.restaurantName} together?`}>
										<section>✉️</section>
										<section>Message FoodieFriends</section>
									</button>					
								</div>
							: <></>}
						</div>
					</section>
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