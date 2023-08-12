import { useEffect, useState } from 'react';
import VisitList from "../components/History/VisitList";
import axios from 'axios';
import Map, {Marker} from 'react-map-gl';
import MapPopup from '../components/WishlistPage/MapPopup';
import './History.css'

const formatData = (data) => {
	return {
		id: data.visit_id,
		visitDate: data.visit_date,
		visitComment: data.visit_comment,
		attendees: data.attendees.map(attendee => ({username: attendee.username, userId: attendee.user_id})),
		restaurantId: data.restaurant_id,
		restaurantName: data.restaurant_name,
		address1: data.address_line1,
		city: data.address_city,
		state: data.address_state,
		country: data.address_country,
		longitude: data.longitude,
		latitude: data.latitude,
		cuisine: data.cuisine,
		priceRange: data.price_range,
	}
}

const initialViewport = {
	longitude: -73.98113,
	latitude: 40.767365,
	zoom: 14
}

const initialLonLat = {
	longitude: -73.98113,
	latitude: 40.767365,
}

const History = ({ userId, setView }) => {
	const [historyData, setHistoryData] = useState([]);
	const [selectedVisit, setSelectedVisit] = useState(initialLonLat);
	const [selectedMarker, setSelectedMarker] = useState(null);
	const [viewport, setViewport] = useState(initialViewport);

	useEffect(() => {
		axios
		.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/history`)
		.then(res => {
			const visits = res.data.map(visit => formatData(visit))
			console.log("in History useEffect, visits:", visits)
			setHistoryData(visits)
			setSelectedVisit(initialLonLat)
		})
		.catch(err => {
			console.log("Error in useEffect get history", err)
		})
	}, [])

	const handleVisitDelete = (visitId) => {
		axios.delete(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/history/${visitId}`)
		.then(() => {
			setHistoryData(prev => prev.filter(visit => visit.visitId !== visitId))
			setSelectedVisit(initialLonLat)
		})
		.catch(err => console.log("Error in handleVisitDelete", err))
	}

	const handleVisitEdit = (visitId, data) => {
		const visitData = {
			visit_comment: data
		}
		axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/history/${visitId}`, visitData)
		.then(res => {
			setHistoryData(prev => prev.map(visit => {
				if (visit.visitId === visitId) {
					const newVisit = {
						...visit,
						visitComment: res.data.visit_comment
					};
					setSelectedVisit(newVisit);
					return newVisit;
				} else {
					return visit;
				}
			}))
		})
		.catch(err => console.log("Error in handleVisitEdit", err))
	}

	const handleVisitSelect = (visitId) => {
		const thisVisit = historyData.filter(visit => visitId === visit.visitId);
		const thisVisitData = thisVisit[0]
		setSelectedVisit(thisVisitData)
		setViewport(prev => (
			{...prev,
			latitude: thisVisitData.latitude,
			longitude: thisVisitData.longitude
			}
		))
	}

	const onMarkerClick = (visitId) => {
		handleVisitSelect(visitId)
		setSelectedMarker(visitId)
	}

	console.log('in History, selectedVisit', selectedVisit)
	return (
			<div className='lists-page__container'>
				<h2>History</h2>
				<div className='lists-page__content'>
				<div className='main-list__container'>
					<button className='list-view__button' onClick={()=>setView(true)}>Wishlist</button>
					<button className='list-view__button' onClick={()=>setView(false)}>History</button>
					<VisitList 
						historyData={historyData}
						handleDelete={handleVisitDelete}
						handleEdit={handleVisitEdit}
						handleSelect={handleVisitSelect}
						selectedVisit={selectedVisit}
						/>
						</div>
					<Map
						className='history-map'
						{...viewport}
						mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
						style={{width: '100%', height: '100%', margin: 'auto'}}
						mapStyle="mapbox://styles/mapbox/streets-v9"
						onMove={(e)=>setViewport(e.viewState)}
						>
						{
							historyData.map((visit) => (
								<Marker key={visit.visitId}
									latitude={visit.latitude}
									longitude={visit.longitude}
									onClick={() => onMarkerClick(visit.visitId)}>
								</Marker>
							))
						}
						{selectedMarker &&
							<MapPopup record={selectedVisit} closePopup={()=>setSelectedMarker(null)}/>
						}
					</Map>
				</div>
			</div>
	)
}

export default History;