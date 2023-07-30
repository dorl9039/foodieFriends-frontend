import { useRef, useEffect, useState } from 'react';

const ResultCard = ({ resultData }) => {
    //API call here
    
    return (
        <ul>
            <li>Restaurant: {resultData.restaurantName}</li>
            <li>Address: {resultData.address1}, {resultData.city}, {resultData.state}, {resultData.country}</li>
            <li>Longitude: {resultData.longitude}</li>
            <li>Latitude: {resultData.latitude}</li>
        </ul>
    )
}
export default ResultCard