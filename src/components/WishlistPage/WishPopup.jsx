import { Popup } from 'react-map-gl';

const WishPopup = ({wish, closePopup}) => {
  return (
    <Popup
      latitude={wish.latitude}
      longitude={wish.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offset={20}
     >
      <p className='wish-popup-text'>{wish.restaurantName}</p>
    </Popup>
  )};

export default WishPopup;