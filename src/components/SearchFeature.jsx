import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';
import './SearchFeature.css'

const SearchFeature = () => {
	const [map, setMap] = useState(null);
	const [value, setValue] = useState('');

	const mapContainerRef = useRef(null);

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

	return (
		<div className='search-feature__container'>
			<div className='search-feature__searchbox'>
				<SearchBox
					accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
					value={value}
					onChange={(res) => {
						setValue(res);
					}}
					// onRetrieve={(res)=> console.log('retrieve', res)}
					map={map}
				/>
			</div>
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