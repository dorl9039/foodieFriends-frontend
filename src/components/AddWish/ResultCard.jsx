import './ResultCard.css';

const ResultCard = ({ restaurantData }) => {
	if (restaurantData.restaurantName) {
		return (
			<div className='result-card__container'>
				<div className='result-restaurant__details'>{restaurantData.restaurantName}</div>
				<div>{restaurantData.address1}, {restaurantData.city}, {restaurantData.state}, {restaurantData.country}</div>
			</div>
		)
	}
}
export default ResultCard;