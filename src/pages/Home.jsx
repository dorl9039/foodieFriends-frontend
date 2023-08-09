import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Feed from '../components/Home/Feed';
import './Home.css'


const formatData = (data) => {
	const friend = {
		userId: data.friend.user_id,
		username: data.friend.username,
		firstName: data.friend.first_name,
		lastName: data.friend.last_name
	}
	const wish = {
		wishId: data.wishRestaurant.wish_id,
		userId: data.wishRestaurant.user_id,
		restaurantId: data.wishRestaurant.restaurant_id,
		restaurantName: data.wishRestaurant.restaurant_name,
		comment: data.wishRestaurant.wish_comment,
		priority: data.wishRestaurant.wish_priority,
		address1: data.wishRestaurant.address_line1,
		city: data.wishRestaurant.address_city,
		state: data.wishRestaurant.address_state,
		country: data.wishRestaurant.address_country,
		priceRange: data.wishRestaurant.price_range,
		cuisine: data.wishRestaurant.cuisine,
	}
	return {friend, wish}
};


const Home = ({ userId }) => {
	const [recsData, setRecsData] = useState([]);
	const [recsExist, setRecsExist] = useState(false);

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/foodiefriends`)
		.then(res => {
			if (!res.data) return; 
			setRecsExist(true);
			const recs = res.data.map(rec => formatData(rec))
			const sortedRecs = recs.sort((a, b) => b.wish.priority - a.wish.priority);
			setRecsData(sortedRecs);
		})
		.catch(err => console.log("error in Home useEffect", err));
	}, [])

	return (
		<div className='home-page__container'>
			<h2>Your FoodieFriend Recs</h2>
			{recsExist? (
				<Feed recsData={recsData}/>
			) : (
				<p>No recs at the moment</p>
			)}	

		</div>
	)

}

export default Home;