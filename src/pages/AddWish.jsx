import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import axios from 'axios';

import SearchFeature from '../components/AddWish/SearchFeature';
import NewWishForm from '../components/AddWish/NewWishForm';
import ResultCard from '../components/AddWish/ResultCard';

import './AddWish.css'


const AddWish = ({ userId }) => {
    const [restaurantData, setRestaurantData] = useState({})
    const [validForm, setValidForm] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const createNewWish = (data) => {
        axios
        .post(`http://localhost:5000/users/${userId}/wishlist`, data)
        .then(res => {
          console.log('createNewWish result', res.data)
        })
        .catch(err => {
          console.log('Error in createNewWish', err)
        })
      }

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
        setIsDialogOpen(true)
        setValidForm(false)
    }

    return (
        <div>
            <h2>AddWish</h2>
            <SearchFeature onRetrieve={handleRetrieve} />
            <ResultCard restaurantData={restaurantData} />
            {validForm && <NewWishForm onSubmit = {handleNewWishSubmit} restaurant={restaurantData.restaurantName}/>}
            
            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <div className='dialog-modal__overlay' aria-hidden="true" />
            <div className='dialog-modal__container'>
                <Dialog.Panel className='dialog-modal'>
                    <Dialog.Title>Wish added!</Dialog.Title>
                    <button onClick={()=> setIsDialogOpen(false)}>Got it</button>
                </Dialog.Panel>
            </div>
            </Dialog>
        </div>
    )
}

export default AddWish;