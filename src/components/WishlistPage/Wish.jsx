import { useState, useEffect } from 'react';
import WishCard from "./WishCard";

const Wish = ({wish, handleSelect, handleDelete, handleWishEdit, selectedMarker, setSelectedMarker, handleWishMove}) => {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		if (selectedMarker === wish.wishId) {
			setIsOpen(true);
		} else {
			setIsOpen(false)
		}
	}, [selectedMarker, wish.wishId])

	const onSelectClick = () => {
		handleSelect(wish.wishId)
		setIsOpen(props => !props)
		if (isOpen) {
			setSelectedMarker(null)
		} else {
			setSelectedMarker(wish.wishId)
		}
	}

	return(
		<section className='record'>
			<div className='record-title__container' onClick={onSelectClick}>
				<h3 >{wish.restaurantName}</h3>
				<div>{isOpen? '-' : '+'}</div>
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

export default Wish
