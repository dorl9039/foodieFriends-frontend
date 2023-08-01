import { useState, useEffect } from 'react';
import axios from 'axios';
import WishlistMap from "../components/WishlistMap";
import Wishlist from "../components/Wishlist";

const UserLists = ({userId}) => {
    const [wishlistData, setWishlistData] = useState([])
    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/users/${userId}/wishlist`)
        .then(response => {
            const promises = response.data.map(wish => {
                return axios.get(`http://localhost:5000/restaurants/${wish.restaurant_id}`)
                .then(res => {
                    return {...wish, ...res.data}
                })
            })
            return Promise.all(promises);
        })
        .then(res => {
            setWishlistData(res)
        })
        .catch((err) => {
            console.log("error in UserLists useEffect", err)
        })
    }, [userId])

    // console.log('in UserList', wishlistData)
    return (
        <div>
            <h2>Your Lists</h2>
            <Wishlist wishlistData={wishlistData}/>
            
            <WishlistMap />
        </div>
    )
}

export default UserLists;