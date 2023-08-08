import mapboxgl from 'mapbox-gl';
import React, { useRef, useState, Fragment } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
// const testWishes = [ 
//   {
//     wishId: 41,
//     userId: 6,
//     restaurantId: 'H_KyiRhwho8rdlw_R93_0Q',
//     restaurantName: 'Marea',
//     priceRange: '$$$$$',
//     priority: 3,
//     latitude: 40.767365,
//     longitude: -73.98113,
//     cuisine: 'Italian, Seafood, Wine Bars',
//     comment: 'entry1',
//     address1: '240 Centra Park S',
//     city: 'New York City',
//     State: 'NY',
//     country: 'US'
//   }]


const WishlistMap = ({wishes}) =>{
		const [showPopup, setShowPopup] = useState(false)
		const wishMarkers = wishes.map((wish) => (
				<Marker key={wish.wishId}
					latitude={wish.latitude}
					longitude={wish.longitude}
					anchor='bottom'
					/>
		))
		console.log('wishmarkers', wishMarkers)
	return (
		<>
		<Map
			mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
			initialViewState={{
			longitude: -73.98113,
			latitude: 40.767365,
			zoom: 14
			}}
			style={{width: 600, height: 400}}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				{wishMarkers}
				{/* {showPopup && (
					<Popup
						longitude={testWish.longitude}
						latitude={testWish.latitude}
						anchor='bottom'
						onClose={()=> setShowPopup(false)}>
							You are here
					</Popup>
				)} */}
		</Map>
		</>
	);
}

export default WishlistMap;