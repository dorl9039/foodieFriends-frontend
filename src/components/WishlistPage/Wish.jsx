import { useState } from 'react';
import WishCard from "./WishCard";

const Wish = ({wish, handleSelect, selectedWishId, handleDelete, handleWishEdit}) => {
	const [isOpen, setIsOpen] = useState(false)

	const wishClass = wish.wishId === selectedWishId? 'selected-wish' : 'wish'
	const wishSectionClass = wish.wishId === selectedWishId? 'selected-wish-details' : 'wish-details'
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
			{/* <section className={wishSectionClass}>
				<p>Priority: {wish.priority}</p>
				<p>Price: {wish.priceRange}</p> */}
			{/* </section> */}
		</section>
	)
};

export default Wish
