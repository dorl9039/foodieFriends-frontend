const Wish = ({wish, handleSelect}) => {

	const onSelectClick = () => {
		handleSelect(wish.wishId)
	}

	return(
		<section className='wish' onClick={onSelectClick}>
			<h3>{wish.restaurantName}</h3>
			<section className='wish-details'>
				<p>Priority: {wish.priority}</p>
				<p>Price: {wish.priceRange}</p>
			</section>
		</section>
	)
};

export default Wish
