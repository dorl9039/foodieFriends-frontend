import './ResultCard.css'

const ResultCard = ({ resultData }) => {
    if (resultData.restaurantName) {
        return (
            <ul className='result-card__container'>
                <li>Restaurant: {resultData.restaurantName}</li>
                <li>Address: {resultData.address1}, {resultData.city}, {resultData.state}, {resultData.country}</li>
            </ul>
        )
    }
}
export default ResultCard