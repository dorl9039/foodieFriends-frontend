import { useState, useEffect } from 'react';
import WishCard from "./WishCard";

const Wish = ({wish, handleSelect, handleDelete, handleWishEdit, selectedMarker}) => {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		if (selectedMarker.wishId === wish.wishId) {
			setIsOpen(true);
		} else {
			setIsOpen(false)
		}
	}, [selectedMarker, wish.wishId])

	const onSelectClick = () => {
		handleSelect(wish.wishId)
		setIsOpen(props => !props)
	}

	return(
		<section className='wish'>
			<div className='wish-title__container' onClick={onSelectClick}>
				<h3 >{wish.restaurantName}</h3>
				<div>{isOpen? '-' : '+'}</div>
			</div>
			{isOpen &&
			<WishCard 
				wishData={wish}
				handleDelete={handleDelete}
				handleWishEdit={handleWishEdit}/>}
		</section>
	)
};

export default Wish
