import { useState } from 'react';
import Wish from "./Wish";
import './Wishlist.css';


const Wishlist = ({wishlistData, handleDelete, handleEdit, handleSelect, selectedWish, sortWishes, selectedMarker, handleWishMove, setSelectedMarker}) => {
	const [priceOrder, setPriceOrder] = useState(true);
	const [recentOrder, setRecentOrder] = useState(true);
	const [priorityOrder, setPriorityOrder] = useState(true);
	const [sortOption, setSortOption] = useState({
		price: false,
		recent: false,
		priority: false,
	})
	const [searchInput, setSearchInput] = useState('');

	const handleWishEdit = (data) => {
		handleEdit(selectedWish.wishId, data);
	}



	const wishes = wishlistData.filter(wish => wish.restaurantName.toLowerCase().includes(searchInput.toLowerCase()) || wish.cuisine.toLowerCase().includes(searchInput.toLowerCase()) || wish.city.toLowerCase().includes(searchInput.toLowerCase()) || wish.foodieFriends.map(friend => friend.username).join(', ').includes(searchInput.toLowerCase())).map((wish) => {
		return (
			<Wish 
				key={wish.wishId}
				wish={wish}
				handleSelect={handleSelect}
				handleDelete={handleDelete}
				handleWishEdit={handleWishEdit}
				selectedMarker={selectedMarker}
				handleWishMove={handleWishMove}
				setSelectedMarker={setSelectedMarker}
			/>
			);
		});

	const onPriceSortClick = () => {
		setPriceOrder((prev) => !prev);
		sortWishes('price', priceOrder);
		setSortOption({
			price: true,
			recent: false,
			priority: false});
	}

	const onRecentSortClick = () => {
		setRecentOrder((prev) => !prev);
		sortWishes('recent', recentOrder);
		setSortOption({
			price: false,
			recent: true,
			priority: false});
	}

	const onPrioritySortClick = () => {
		setPriorityOrder((prev) => !prev);
		sortWishes('priority', priorityOrder);
		setSortOption({
			price: false,
			recent: false,
			priority: true});
	}
	
	const handleSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value);
	}

	return (
			<section className='list__container'>
				<input
						className='search-record__field'
						type='text'
						value={searchInput}
						onChange={handleSearchInputChange}
						placeholder=' Search your list' />

				<section className='list-sort-btns__container'>
					<p>Sort by:</p>
					<button 
						className={sortOption.price?'active-sort-option':'inactive-sort-option'} 
						onClick={onPriceSortClick}>Price</button>
					<button 
						className={sortOption.recent?'active-sort-option':'inactive-sort-option'}
						onClick={onRecentSortClick}>Recent</button>
					<button 
						className={sortOption.priority?'active-sort-option':'inactive-sort-option'}
						onClick={onPrioritySortClick}>Priority</button>
				</section>
				<section className='record__container'>
					{wishes}
				</section>
			</section>
	)
};

export default Wishlist