import { useState, useEffect } from 'react';
import axios from 'axios';
import WishlistMap from "../components/WishlistMap";
import Wishlist from "../components/Wishlist";

const UserLists = ({userId}) => {
    const [wishlistData, setWishlistData] = useState([])
    useEffect(() => {
        console.log("called")
        axios
        .get(`http://localhost:5000/users/${userId}/wishlist`)
        .then(response => {
            console.log("called2 ", response)
            const wishes = []
            for (const wish of response.data) {
                console.log("wish:", wish)
                axios
                .get(`http://localhost:5000/restaurants/${wish.restaurant_id}`)
                .then(res => {
                    const wishData = {...wish, ...res.data}
                    console.log('wishData', wishData)
                    wishes.push(wishData)
                })
            }
            setWishlistData(wishes)
        })
        .catch((err) => {
            console.log("error in UserLists useEffect", err)
        })
    }, [userId])

    return (
        <div>
            <h2>Your Lists</h2>
            <Wishlist wishlistData={wishlistData}/>
            
            <WishlistMap />
        </div>
    )
}

export default UserLists;