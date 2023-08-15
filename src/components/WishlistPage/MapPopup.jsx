import { Popup } from 'react-map-gl';

const MapPopup = ({record, closePopup}) => {
  console.log('in MapPopup')
  return (
    <Popup
      latitude={record.latitude}
      longitude={record.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offset={20}
     >
      <p className='wish-popup-text'>{record.restaurantName}</p>
    </Popup>
  )};

export default MapPopup;