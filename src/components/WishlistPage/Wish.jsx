import './Wish.css'

const Wish = ({wish, handleSelect}) => {

	const onSelectClick = () => {
		handleSelect(wish.wishId)
	}

	return(
		<section className='wish' onClick={onSelectClick}>
			<h3>{wish.restaurantName}</h3>
			<p>{wish.priority}</p>
			<p>{wish.comment}</p>
		</section>
	)
};

export default Wish
