import { useState } from 'react';
import Wish from "./Wish";
import WishCard from "./WishCard";
import WishEditForm from './WishEditForm';
import './Wishlist.css'


const Wishlist = ({wishlistData, handleDelete, handleEdit, handleSelect, selectedWishData}) => {
	const [editState, setEditState] = useState(false)

	const handleEditClick = () => {
		setEditState(prev => !prev)
	}

	const handleWishEdit = (data) => {
		handleEdit(selectedWishData.wishId, data)
		setEditState(false)
	}

	const wishes = wishlistData.map((wish) => {
		return (
			<Wish 
				key={wish.wishId}
				wish={wish}
				handleDelete={handleDelete}
				handleEditClick={handleEditClick}
				handleSelect={handleSelect}
			/>
			);
		});
	
	return (
		<section className='main-list__container'>
			<section className='wish-list__container'>
				<h3>Wishlist</h3>
				<section className='wish__container'>
				{wishes}
				</section>
			</section>
			{editState ? 
				(<section className='edit-wish__container'>
						<h3>Edit Wish</h3>
						<WishEditForm 
								wishData={selectedWishData}
								handleWishEdit={handleWishEdit}/>
				</section>)
				:
				(Object.keys(selectedWishData).length > 0 && 
				<section>
						<h3>Selected Wish</h3>
						<WishCard wishData={selectedWishData}/>
				</section>)
			}
		</section>
	)
};

export default Wishlist