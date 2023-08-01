import './WishCard.css'

const WishCard = ({wishData}) => {
    console.log('in WishCard', wishData)
    return(
        <section className='wish-card__container'>
            <h4>Wish {wishData.wish_id}</h4>
            <ul>
                <li>Restaurant: {wishData.restaurant_name}</li>
                <li>Priority: {wishData.wish_priority}</li>
                <li>Comment: 
                        {wishData.wish_comment}
                </li>

            </ul>

            
        </section>
    )
};

export default WishCard