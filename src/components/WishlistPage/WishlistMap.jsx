import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

const WishlistMap = () =>{
  return (
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
    <Marker longitude={-122.4104} latitude={37.8100} anchor="bottom" >
    </Marker>
    </Map>
  );
}

export default WishlistMap;