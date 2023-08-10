import { useState, useEffect } from 'react';
import Map, {Marker} from 'react-map-gl';
import axios from 'axios';
import Wishlist from "../components/WishlistPage/Wishlist";
import './WishlistPage.css'

const formatData = (data) => {
	return {
		wishId: data.wish_id,
		userId: data.user_id,
		restaurantId: data.restaurant_id,
		restaurantName: data.restaurant_name,
		comment: data.wish_comment,
		priority: data.wish_priority,
		address1: data.address_line1,
		city: data.address_city,
		state: data.address_state,
		country: data.address_country,
		priceRange: data.price_range,
		cuisine: data.cuisine,
		latitude: data.latitude,
		longitude: data.longitude
	}
};

const initialViewport = {
	longitude: -73.98113,
	latitude: 40.767365,
	zoom: 9
}

const initialLonlat = {
	longitude: -73.98113,
	latitude: 40.767365,
}

const WishlistPage = ({userId}) => {
	const [wishlistData, setWishlistData] = useState([])
	const [selectedWishData, setSelectedWishData] = useState(initialLonlat)

	useEffect(() => {
		axios
		.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/wishlist`)
		.then(response => {
			const promises = response.data.map(wish => {
				return axios.get(`${import.meta.env.VITE_SERVER_URL}/restaurants/${wish.restaurant_id}`)
				.then(res => {
					return {...wish, ...res.data}
				})
			})
			return Promise.all(promises);
		})
		.then(res => {
			const wishesData = res.map(wish => formatData(wish))
			console.log('in WishlistPage useEffect, reformated wishesdata', wishesData)	
			setWishlistData(wishesData)
		})
		.catch((err) => {
			console.log("error in UserLists useEffect", err)
		})
	}, [])

	const sortWishes = (type, ascending) => {
		if (type === 'price') {
			if (ascending) {
				setWishlistData(prev =>
					prev.sort((a, b) => a.priceRange.length - b.priceRange.length)
				)
			} else {
				setWishlistData(prev =>
					prev.sort((a, b) => b.priceRange.length - a.priceRange.length)
				)
			}
		} else if (type === 'recent') {
			if (ascending) {
				setWishlistData(prev =>
					prev.sort((a, b) => a.wishId - b.wishId)
				)
			} else {
				setWishlistData(prev =>
					prev.sort((a, b) => b.wishId - a.wishId)
				)
			}
		} else {
			if (ascending) {
				setWishlistData(prev =>
					prev.sort((a, b) => a.priority - b.priority)
				)
			} else {
				setWishlistData(prev =>
					prev.sort((a, b) => b.priority - a.priority)
				)
			}
		}
	}
	

	const handleWishDelete = (wishId) => {
		axios.delete(`${import.meta.env.VITE_SERVER_URL}/wishes/${wishId}`)
		.then(() => {
			setWishlistData(prev => prev.filter(wish => wish.wishId !== wishId));
			setSelectedWishData(initialLonlat);
		})
		.catch((err) => {
			console.log("Error in handleDelete", err);
		})
	}

	const handleWishEdit = (wishId, editData) => {
		axios
		.patch(`${import.meta.env.VITE_SERVER_URL}/wishes/${wishId}`, editData)
		.then(res => {
			setWishlistData(prev => prev.map(wish => {
				if (wish.wishId === wishId) {
					const newWish = {
						...wish, 
						comment: res.data.wish_comment,
						priority: res.data.wish_priority
					};
					setSelectedWishData(newWish);
					return newWish;
				} else {
					return wish;
				}
			}))
		})
		.catch(err => console.log("Error in handleWishEdit", err))
	}

	const handleWishSelect = (wishId) => {
		const thisWish = wishlistData.filter(wish => wishId === wish.wishId);
		const thisWishData = thisWish[0];
		setSelectedWishData(thisWishData);
	}

	const onMarkerClick = (wishId) => {
		handleWishSelect(wishId)
	}

	return (
		<div className='wishlist-page__container'>
			<h2>Your Wishlist</h2>
			<Wishlist 
				wishlistData={wishlistData} 
				handleDelete={handleWishDelete} 
				handleEdit={handleWishEdit} 
				handleSelect={handleWishSelect}
				selectedWishData={selectedWishData}
				sortWishes={sortWishes}
				/>
				<Map
					mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
					initialViewState={initialViewport}
					style={{width: 600, height: 400}}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					longitude={selectedWishData.longitude}
					latitude={selectedWishData.latitude}
					zoom={13}
					>
					{
						wishlistData.map((wish) => (
							<Marker key={wish.wishId}
								latitude={wish.latitude}
								longitude={wish.longitude}
								onClick={() => onMarkerClick(wish.wishId)}>
							</Marker>
						))
					}
			</Map>
		</div>
	)
}

export default WishlistPage;