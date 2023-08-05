import './WishCard.css'

const WishCard = ({wishData}) => {
    console.log('in WishCard', wishData)
    return(
        <section className='wish-card__container'>
            <h3>Wish restaurant: {wishData.restaurant_name}</h3>
            <ul>
                <li>Priority: {wishData.wish_priority}</li>
                <li>Comment: {wishData.wish_comment}</li>
                <li>Address: {wishData.address_line1}, {wishData.address_city}, {wishData.address_state}, {wishData.address_country}</li>
                <li>Cuisine: {wishData.cuisine}</li>
                <li>Price range: {wishData.price_range}</li>
            </ul>

            
        </section>
    )
};

export default WishCard