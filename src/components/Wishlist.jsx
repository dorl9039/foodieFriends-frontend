import { useState } from 'react';
import Wish from "./Wish";
import WishCard from "./WishCard";
import './Wishlist.css'


const Wishlist = ({wishlistData, handleDelete, handleEdit, handleSelect, selectedWishData}) => {
    console.log(selectedWishData)
    // const onSelect = () => {
    //     handleSelect(wishId)
    // }

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
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleSelect={handleSelect}
            />
            );
        });


    return (
        <section className='main-list__container'>
            <section className='wish-list__container'>
                <h3>Wishlist</h3>
                <section className='wish__container'>
                {wishes}
                </section>
            </section>
            <section className='select-wish__container'>
                <h3>Selected Wish</h3>
                <WishCard wishData={selectedWishData}/>
            </section>
        </section>
    )
};

export default Wishlist