import mapboxgl from 'mapbox-gl';
import { useRef, useMemo, useCallback } from 'react';
import Map, {Marker} from 'react-map-gl';

const WishlistMap = () =>{
	const markerRef = useRef();
	const popup = useMemo(() => {
		return new mapboxgl.Popup().setText('Hello world!')
	}, [])

	const togglePopup = useCallback(() => {
		markerRef.current?.togglePopup();
	}, [])

	return (
		<>
		<Map
			mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
			initialViewState={{
			longitude: -122.4,
			latitude: 37.8,
			zoom: 14
			}}
			style={{width: 600, height: 400}}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			>
			<Marker longitude={-122.4104} latitude={37.8100} popup={popup} ref={markerRef} anchor="bottom" >
			</Marker>
		</Map>
		<button onClick={togglePopup}>Toggle popup</button>
		</>
	);
}

export default WishlistMap;