import { useState, useEffect } from 'react';
import WishCard from "./WishCard";
import './Wish.css';

const Wish = ({wish, handleSelect, handleDelete, handleWishEdit, selectedMarker, handleWishMove, setSelectedMarker}) => {
	const [isOpen, setIsOpen] = useState(false);
	
	useEffect(() => {
		if (selectedMarker === wish.wishId) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [selectedMarker, wish.wishId]);

	const onSelectClick = () => {
		handleSelect(wish.wishId);
		if (selectedMarker === wish.wishId){
			setSelectedMarker(null)
		} else {
			setSelectedMarker(wish.wishId)
		}
	}

	return(
		<section className='record'>
			<div className='record-title__container' onClick={onSelectClick}>
				<h3 >{wish.restaurantName}</h3>
			</div>
			{isOpen &&
			<WishCard 
				wishData={wish}
				handleDelete={handleDelete}
				handleWishEdit={handleWishEdit}
				handleWishMove={handleWishMove}/>}
		</section>
	)
};

export default Wish;
