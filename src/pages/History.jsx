import { useEffect, useState } from 'react';
import VisitList from "../components/History/VisitList";
import axios from 'axios';

const formatData = (data) => {
	return {
		visitId: data.visit_id,
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

const History = ({ userId }) => {
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
		})
		.catch(err => {
			console.log("Error in useEffect get history", err)
		})
	}, [])

	const handleVisitDelete = () => {
		// Axios call goes here
	}

	const handleVisitEdit = () => {
		// Axios call goes here
	}

	const handleVisitSelect = (visitId) => {
		const thisVisit = historyData.filter(visit => visitId === visit.visitId);
		const thisVisitData = thisVisit[0]
		setSelectedVisit(thisVisitData)
	}

	console.log('in History, selectedVisit', selectedVisit)
	return (
			<div>
				<h2>History</h2>
				<VisitList 
					historyData={historyData}
					handleDelete={handleVisitDelete}
					handleEdit={handleVisitEdit}
					handleSelect={handleVisitSelect}
					selectedVisit={selectedVisit}/>
			</div>
	)
}

export default History;