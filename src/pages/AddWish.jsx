import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import axios from 'axios';
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../components/StyledBackdrop';

import SearchFeature from '../components/AddWish/SearchFeature';
import NewWishForm from '../components/AddWish/NewWishForm';
import ResultCard from '../components/AddWish/ResultCard';

import './AddWish.css'


const AddWish = ({ userId }) => {
		const [restaurantData, setRestaurantData] = useState({})
		const [validForm, setValidForm] = useState(false)
		const [isDialogOpen, setIsDialogOpen] = useState(false)
		const [wishExists, setWishExists] = useState(false)
		const [wishExistsMessage, setWishExistsMessage] = useState('')

		const createNewWish = (data) => {
			console.log('in createNewWish data', data)		
			axios
				.post(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/wishlist`, data)
				.then(res => {
					setWishExists(false)
					console.log('createNewWish result', res.data)
				},
				err => {
					setWishExists(true)
					setWishExistsMessage(err.response.data)
					console.log(err.response.data)
					return false
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
				// setWishExists(false)
		}
		
		return (
			<div>
				<h2>AddWish</h2>
				<SearchFeature onRetrieve={handleRetrieve} />
				<ResultCard restaurantData={restaurantData} />
				{validForm && <NewWishForm onSubmit = {handleNewWishSubmit} restaurant={restaurantData.restaurantName}/>}
				{!wishExists? (
					<Modal
						className="dialog-modal__container"
						open={isDialogOpen}
						onClose={() => setIsDialogOpen(false)}
						slots={{backdrop: StyledBackdrop}}>
							<div className='modal'>
								<h3> Wish added! </h3>
								<button onClick={()=> setIsDialogOpen(false)}>Got it</button>
							</div>	
					</Modal>
				) :
				(
					<Modal
					className="dialog-modal__container"
					open={isDialogOpen}
					onClose={() => setIsDialogOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
						<div className='modal'>
							<h3> {wishExistsMessage} </h3>
							<button onClick={()=> setIsDialogOpen(false)}>Got it</button>
						</div>	
				</Modal>
				)}
				
			</div>
		)
}

export default AddWish;