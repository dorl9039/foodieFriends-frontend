import { useState} from 'react';
import WishlistPage from './WishlistPage';
import History from './History';
import Map, {Marker} from 'react-map-gl';
import MapPopup from '../components/WishlistPage/MapPopup';

const initialViewport = {
	longitude: -73.98113,
	latitude: 40.767365,
	zoom: 14
}

const ListsPage = ({userId}) => {
  // view defaults to Wishlist
  const [view, setView] = useState(true);
  const [viewport, setViewport] = useState(initialViewport);
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleRecordSelect = (id) => {
    const thisRecord = records.filter(record => id ===record.id);
    const thisRecordData = thisRecord[0]
    setSelectedRecord(thisRecordData)
    setViewport(prev => (
      {...prev,
      latitude: thisRecordData.latitude,
      longitude: thisRecordData.longitude}
    ))
  }

  const onMarkerClick = (id) => {
    handleRecordSelect(id);
    setSelectedMarker(id)
  }

  return (
    <div className='lists-page__container'>
      <button onClick={()=>setView(true)}>Wishlist</button>
      <button onClick={()=>setView(false)}>History</button>
      {view? 
      <WishlistPage 
        userId={userId}
        setRecords={setRecords}
        handleSelect={handleRecordSelect}/> :
      <History userId={userId}/>}
      <Map
        className='history-map'
        {...viewport}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        style={{width: '100%', height: '100%', margin: 'auto'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(e)=>setViewport(e.viewState)}
        >
        {
          records.map((record) => (
            <Marker key={record.visitId}
              latitude={record.latitude}
              longitude={record.longitude}
              onClick={() => onMarkerClick(record.id)}>
            </Marker>
          ))
        }
        {selectedMarker &&
          <MapPopup record={selectedRecord} closePopup={() => setSelectedMarker(null)}/>
        }
					</Map>

    </div>

  )
}

export default ListsPage;