import { useState, useEffect } from 'react';
import Map, {Marker} from 'react-map-gl';
import axios from 'axios';
import Wishlist from "../components/WishlistPage/Wishlist";
import MapPopup from '../components/WishlistPage/MapPopup';
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
	zoom: 14
}

const initialLonlat = {
	longitude: -73.98113,
	latitude: 40.767365,
}

const WishlistPage = ({userId, setView}) => {
	const [wishlistData, setWishlistData] = useState([])
	const [selectedWishData, setSelectedWishData] = useState(initialLonlat)
	const [selectedMarker, setSelectedMarker] = useState(null)
	const [viewport, setViewport] = useState(initialViewport)

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
		const data = {
			wish_comment: editData.comment,
			wish_priority: editData.priority
		}
		axios
		.patch(`${import.meta.env.VITE_SERVER_URL}/wishes/${wishId}`, data)
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

	const handleWishMove = (wish, data) => {
		const visitData = {
			...data,
			restaurantId: wish.restaurantId,
			restaurantName: wish.restaurantName,
		}
		axios.post(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/history`, visitData)
		.then(() => {
			handleWishDelete(wish.wishId)
		})
		.catch(err => console.log('Error in POST of handleWishMove', err))
	}

	const handleWishSelect = (wishId) => {
		const thisWish = wishlistData.filter(wish => wishId === wish.wishId);
		const thisWishData = thisWish[0];
		setSelectedWishData(thisWishData);
		setViewport(prev =>(
			{ ...prev,
				latitude: thisWishData.latitude,
				longitude: thisWishData.longitude,
			})
		)
	}

	const onMarkerClick = (wishId) => {
		handleWishSelect(wishId)
		setSelectedMarker(wishId)
	}


	return (
		<div className='lists-page__container'>
			<h2>Your Wishlist</h2>
			<div className='lists-page__content'>
				<div className='main-list__container'>
					<button className='list-view__button' onClick={()=>setView(true)}>Wishlist</button>
					<button className='list-view__button' onClick={()=>setView(false)}>History</button>
						<Wishlist 
							wishlistData={wishlistData} 
							handleDelete={handleWishDelete} 
							handleEdit={handleWishEdit} 
							handleSelect={handleWishSelect}
							selectedWish={selectedWishData}
							selectedMarker={selectedMarker}
							setSelectedMarker={setSelectedMarker}
							sortWishes={sortWishes}
							handleWishMove={handleWishMove}
							/>
					</div>
				<Map
					className='wish-map'
					{...viewport}
					mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
					style={{width: '100%', height: '100%', margin: 'auto'}}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					onMove={(e)=>setViewport(e.viewState)}
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
					{selectedMarker &&
					<MapPopup record={selectedWishData} closePopup={()=>setSelectedMarker(null)}/>
					}
				</Map>
			</div>
		</div>
	)
}

export default WishlistPage;