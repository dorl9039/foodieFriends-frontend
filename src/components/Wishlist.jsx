import Wish from "./Wish";
import './Wishlist.css'


const Wishlist = ({wishlistData}) => {
    const wishes = wishlistData.map((wish) => {
        return (
            <Wish 
            key={wish.wish_id}
            wishId={wish.wish_id}
            address1={wish.address_line1}
            city={wish.address_city}
            state={wish.address_state}
            country={wish.address_country}
            priceRange={wish.price_range}
            restaurantName={wish.restaurant_name}
            wishComment={wish.wish_comment}
            wishPriority={wish.wish_priority}
            cuisine={wish.cuisine}
            latitude={wish.latitude}
            longitude={wish.longitude}

            />
            );
        });
    console.log('in Wishlist', wishlistData)
        console.log('wishes', wishes)
        



    return (
        <section>
            <p>Wishlist goes here</p>
            <section className='wishlist__container'>
            {wishes}
            </section>

        </section>
    )
};

export default Wishlist