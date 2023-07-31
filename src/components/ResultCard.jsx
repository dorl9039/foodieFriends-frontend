import './ResultCard.css'

const ResultCard = ({ restaurantData }) => {
    if (restaurantData.restaurantName) {
        return (
            <ul className='result-card__container'>
                <li>Restaurant: {restaurantData.restaurantName}</li>
                <li>Address: {restaurantData.address1}, {restaurantData.city}, {restaurantData.state}, {restaurantData.country}</li>
            </ul>
        )
    }
}
export default ResultCard