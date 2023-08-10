import { useState } from 'react';
import Wish from "./Wish";
import WishCard from "./WishCard";
import WishEditForm from './WishEditForm';
import './Wishlist.css'


const Wishlist = ({wishlistData, handleDelete, handleEdit, handleSelect, selectedWishData, sortWishes}) => {
	const [editState, setEditState] = useState(false)
	const [priceOrder, setPriceOrder] = useState(true)
	const [recentOrder, setRecentOrder] = useState(true)
	const [priorityOrder, setPriorityOrder] = useState(true)



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

	const onPriceSortClick = () => {
		setPriceOrder((prev) => !prev)
		sortWishes('price', priceOrder)
	}

	const onRecentSortClick = () => {
		setRecentOrder((prev) => !prev)
		sortWishes('recent', recentOrder)
	}

	const onPrioritySortClick = () => {
		setPriorityOrder((prev) => !prev)
		sortWishes('priority', priorityOrder)
	}
	
	return (
		<section className='main-list__container'>
			<section className='wish-list__container'>
				<h3>Wishlist</h3>
				<section className='sort-feature__container'>
					<p>Sort by:</p>
					<button onClick={onPriceSortClick}>Price</button>
					<button onClick={onRecentSortClick}>Recent</button>
					<button onClick={onPrioritySortClick}>Priority</button>
				</section>

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
				(Object.keys(selectedWishData).length > 2 && 
				<section>
						<h3>Selected Wish</h3>
						<WishCard wishData={selectedWishData}/>
				</section>)
			}
		</section>
	)
};

export default Wishlist