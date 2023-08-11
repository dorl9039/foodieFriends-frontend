import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';
import './SearchFeature.css'
import 'mapbox-gl/dist/mapbox-gl.css'


const SearchFeature = ({ onRetrieve }) => {
    const [map, setMap] = useState(null);
    const [value, setValue] = useState('');

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

    const handleRetrieveClick = (res) => {
        // Remove old marker from previous search (if present)
        if (markerRef.current) {
            markerRef.current.remove();
        }
        onRetrieve(res)
        
        // Create marker for current search
        const marker = new mapboxgl.Marker()
            .setLngLat([res.features[0].properties.coordinates.longitude, res.features[0].properties.coordinates.latitude])
            .addTo(map);
        // Update marker reference
        markerRef.current = marker;
    }

    return (
        <div className='search-feature__container'>
            <div className='search-feature__searchbox'>
                <SearchBox
                    accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                    value={value}
                    onChange={(res) => {
                        setValue(res);
                    }}
                    onRetrieve={handleRetrieveClick}
                    map={map}
                />
            </div>
            <br></br>
            <div
                className='map-container'
                style={{height: '600px', width: '100%', margin: 'auto'}}
                ref={mapContainerRef}
            />
            
        </div>
    )
};         
export default SearchFeature;
