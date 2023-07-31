import { useState } from 'react';

import SearchFeature from '../components/SearchFeature';
import NewWishForm from '../components/NewWishForm';
import ResultCard from '../components/ResultCard';


const AddWish = ({createNewWish}) => {
    const [restaurantData, setRestaurantData] = useState({})
    const [validForm, setValidForm] = useState(false)

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
        setValidForm(true)
    }
    const handleNewWishSubmit = (wishData) => {
        const data = {
            restaurantData,
            wishData
        }
        console.log('data in AddWish', data)
        createNewWish(data);
    }

    console.log(restaurantData)
    return (
        <div>
            <h2>AddWish</h2>
            <SearchFeature onRetrieve={handleRetrieve} />
            <h2> Search Result: </h2>
            <ResultCard restaurantData={restaurantData} />
            {validForm && (<NewWishForm onSubmit = {handleNewWishSubmit} restaurant={restaurantData.restaurantName}/>)
            }
        </div>
    )
}

export default AddWish;