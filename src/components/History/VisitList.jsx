import Visit from "./Visit";
import { useState } from 'react';
import './VisitList.css'

const VisitList = ({historyData, handleEdit, handleDelete, handleSelect, selectedVisit, sortVisits}) => {
	const [priceOrder, setPriceOrder] = useState(true)
	const [dateOrder, setDateOrder] = useState(true)
	const [ratingOrder, setRatingOrder] = useState(true)
	const [sortOption, setSortOption] = useState({
		price: false,
		date: false,
		rating: false,
	})
	const [searchInput, setSearchInput] = useState('');

	const onPriceSortClick = () => {
		setPriceOrder(prev => !prev);
		sortVisits('price', priceOrder)
		setSortOption({
			price: true,
			date: false,
			rating: false,
		})
	}

	const onDateSortClick = () => {
		setDateOrder(prev => !prev);
		sortVisits('date', dateOrder)
		setSortOption({
			price: false,
			date: true,
			rating: false,
		})
	}

	const onRatingSortClick = () => {
		setRatingOrder(prev => !prev);
		sortVisits('rating', ratingOrder)
		setSortOption({
			price: false,
			date: false,
			rating: true,
		})
	}

	const visits = historyData.filter(wish => wish.restaurantName.toLowerCase().includes(searchInput.toLowerCase())).map((visit) => {
		return (
			<Visit 
			key={visit.visitId}
			visitData={visit}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleSelect={handleSelect}
			selectedVisit={selectedVisit}
			/>
			);
		});

	const handleSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value)
	}

	return (
			<section className='list__container'>
				<input
						className='search-record__field'
						type='text'
						value={searchInput}
						onChange={handleSearchInputChange}
						placeholder='Search' />
				<section className='list-sort-btns__container'>
					<p>Sort by:</p>
					<button
						className={sortOption.price?'active-sort-option':'inactive-sort-option'} 
						onClick={onPriceSortClick}>Price</button>
					<button
					className={sortOption.date?'active-sort-option':'inactive-sort-option'} 
					onClick={onDateSortClick}>Date</button>
					<button
					className={sortOption.rating?'active-sort-option':'inactive-sort-option'} 
					onClick={onRatingSortClick}>Rating</button>
				</section>
				<section className='record__container'>
					{visits}
				</section>
			</section>
	)
};

export default VisitList;

