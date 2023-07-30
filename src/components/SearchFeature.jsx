import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Marker } from "react-map-gl"
import { SearchBox } from '@mapbox/search-js-react';
import './SearchFeature.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import ResultCard from './ResultCard';

const SearchFeature = () => {
	const [map, setMap] = useState(null);
	const [value, setValue] = useState('');
	const [resultData, setResultData] = useState({})

	const mapContainerRef = useRef(null);
	const markerRef = useRef(null);

	useEffect(() => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-73.943, 40.7789],
			zoom: 11
		});

		setMap(map)
		return () => map.remove();
	}, []);

	const handleRetrieve = (res) => {
		if (markerRef.current) {
			markerRef.current.remove();
		}
		setResultData({
			restaurantName: res.features[0].properties.name,
			address1: res.features[0].properties.address,
			city: res.features[0].properties.context.place.name,
			state: res.features[0].properties.context.region.region_code,
			country: res.features[0].properties.context.country.country_code,
			longitude: res.features[0].properties.coordinates.longitude,
			latitude: res.features[0].properties.coordinates.latitude,
		})
		const marker = new mapboxgl.Marker()
			.setLngLat([res.features[0].properties.coordinates.longitude, res.features[0].properties.coordinates.latitude])
			.addTo(map);
		markerRef.current = marker;
	}
	console.log(resultData)

	return (
		<div className='search-feature__container'>
			<div className='search-feature__searchbox'>
				<SearchBox
					accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
					value={value}
					onChange={(res) => {
						setValue(res);
					}}
					onRetrieve={handleRetrieve}
					map={map}
				/>
			</div>
			<ResultCard resultData={resultData} />
			<br></br>
			<div
				className='map-container'
				style={{height: '500px', width: '500px', margin: '20px'}}
				ref={mapContainerRef}
			/>
			
		</div>
	)
};         
export default SearchFeature;