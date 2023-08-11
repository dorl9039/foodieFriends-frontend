import { useState } from 'react';
import axios from 'axios';

import SearchFeature from '../components/AddWish/SearchFeature';
import NewWishForm from '../components/AddWish/NewWishForm';
import ResultCard from '../components/AddWish/ResultCard';

import './AddWish.css'
import ConfirmationModal from '../components/ConfirmationModal';


const AddWish = ({ userId }) => {
		const [restaurantData, setRestaurantData] = useState({})
		const [validForm, setValidForm] = useState(false)
		const [errorMessage, setErrorMessage] = useState('')
		const [showErrorMessage, setShowErrorMessage] = useState(false)
		const [showSuccessMessage, setShowSuccessMessage] = useState(false)

		const createNewWish = (data) => {
			console.log('in createNewWish data', data)		
			axios
				.post(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/wishlist`, data)
				.then(() => {
					setShowSuccessMessage(true)
				}, err => {
						setShowErrorMessage(true)
						setErrorMessage(err.response.data)
				})
				.catch(err => console.log('Error in createNewWish', err))
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
				createNewWish(data);		
				setValidForm(false)
		}
		
		return (
			<div className='add-wish-page__container'>
				<h2>AddWish</h2>
				<div className='add-wish-page__content'>
					<SearchFeature onRetrieve={handleRetrieve} />
					<div className='add-wish-result__container'>
						<ResultCard restaurantData={restaurantData} />
					{validForm && <NewWishForm onSubmit = {handleNewWishSubmit} restaurant={restaurantData.restaurantName}/>}
					</div>
					
				</div>
					<ConfirmationModal
						open={showSuccessMessage}
						handleClose={() => setShowSuccessMessage(false)}
						message="Wish added!" 
						/>
					<ConfirmationModal
						open={showErrorMessage}
						handleClose={() => setShowErrorMessage(false)}
						message={errorMessage}
						/>

			</div>
		)
}

export default AddWish;