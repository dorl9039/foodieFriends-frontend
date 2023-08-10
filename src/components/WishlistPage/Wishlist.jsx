import { useState } from 'react';
import Wish from "./Wish";
import WishCard from "./WishCard";
import './Wishlist.css'


const Wishlist = ({wishlistData, handleDelete, handleEdit, handleSelect, selectedWishData, sortWishes}) => {
	const [priceOrder, setPriceOrder] = useState(true)
	const [recentOrder, setRecentOrder] = useState(true)
	const [priorityOrder, setPriorityOrder] = useState(true)


	const handleWishEdit = (data) => {
		handleEdit(selectedWishData.wishId, data)
	}

	const wishes = wishlistData.map((wish) => {
		return (
			<Wish 
				key={wish.wishId}
				wish={wish}
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
			<section className='wishlist__container'>
				<h3 className='wishlist__header'>Wishes</h3>
				<section className='wishlist-sort__container'>
					<p>Sort by:</p>
					<button onClick={onPriceSortClick}>Price</button>
					<button onClick={onRecentSortClick}>Recent</button>
					<button onClick={onPrioritySortClick}>Priority</button>
				</section>
				<section className='wish__container'>
				{wishes}
				</section>
			</section>
			<section>
					<h3>Selected Wish</h3>
					{Object.keys(selectedWishData).length > 2 && 
					<WishCard 
						wishData={selectedWishData}
						handleDelete={handleDelete}
						handleWishEdit={handleWishEdit}/>}
			</section>
		</section>
	)
};

export default Wishlist