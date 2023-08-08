import './WishCard.css'

const WishCard = ({wishData}) => {
    return(
        <section className='wish-card__container'>
            <h3>Wish restaurant: {wishData.restaurantName}</h3>
            <ul>
                <li>Priority: {wishData.priority}</li>
                <li>Comment: {wishData.comment}</li>
                <li>Address: {wishData.address1}, {wishData.city}, {wishData.state}, {wishData.country}</li>
                <li>Cuisine: {wishData.cuisine}</li>
                <li>Price range: {wishData.priceRange}</li>
            </ul>
        </section>
    )
};

export default WishCard