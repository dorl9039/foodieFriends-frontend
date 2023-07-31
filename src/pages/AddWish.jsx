import { useState } from 'react';
import SearchFeature from '../components/SearchFeature';
import NewWishForm from '../components/NewWishForm';

const AddWish = () => {
    const [restaurantData, setRestaurantData] = useState({})
    const handleRetrieve = (result) => {
        setRestaurantData({
            restaurantName: result.features[0].properties.name,
            address1: result.features[0].properties.address,
            city: result.features[0].properties.context.place.name,
            state: result.features[0].properties.context.region.region_code,
            country: result.features[0].properties.context.country.country_code,
            longitude: result.features[0].properties.coordinates.longitude,
            latitude: result.features[0].properties.coordinates.latitude,
        })
    }
    const handleNewWishSubmit = () => {
        //Make API calls here
    }
    return (
        <div>
            <h2>AddWish</h2>
            <SearchFeature onRetrieve={handleRetrieve} />
            <NewWishForm onSubmit = {handleNewWishSubmit} restaurant={restaurantData.restaurantName}/>
        </div>
    )
}

export default AddWish;