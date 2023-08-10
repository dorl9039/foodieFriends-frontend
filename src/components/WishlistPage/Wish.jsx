const Wish = ({wish, handleSelect, selectedWishId}) => {
	const wishClass = wish.wishId === selectedWishId? 'selected-wish' : 'wish'
	const wishSectionClass = wish.wishId === selectedWishId? 'selected-wish-details' : 'wish-details'
	const onSelectClick = () => {
		handleSelect(wish.wishId)
	}

	return(
		<section className={wishClass} onClick={onSelectClick}>
			<h3>{wish.restaurantName}</h3>
			<section className={wishSectionClass}>
				<p>Priority: {wish.priority}</p>
				<p>Price: {wish.priceRange}</p>
			</section>
		</section>
	)
};

export default Wish
