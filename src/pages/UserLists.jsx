import { useState, useEffect } from 'react';
import axios from 'axios';
import WishlistMap from "../components/WishlistMap";
import Wishlist from "../components/Wishlist";

const UserLists = ({userId}) => {
    const [wishlistData, setWishlistData] = useState([])
    // const [selectedWishId, setSelectedWishId] = useState(null)
    const [selectedWishData, setSelectedWishData] = useState({})

    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/users/${userId}/wishlist`)
        .then(response => {
            const promises = response.data.map(wish => {
                return axios.get(`http://localhost:5000/restaurants/${wish.restaurant_id}`)
                .then(res => {
                    console.log('in UserLists', res.data)
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
    }, [])

    const handleWishDelete = (wishId) => {
        axios.delete(`http://localhost:5000/wishes/${wishId}`)
        .then(() => {
            setWishlistData(prev => prev.filter(wish => wish.wish_id !== wishId))
        })
        .catch((err) => {
            console.log("Error in handleDelete", err)
        })
    }

    const handleWishEdit = (wishId, editData) => {
        axios
        .patch(`http://localhost:5000/wishes/${wishId}`, editData)
        .then(res => {
            setWishlistData(prev => prev.map(wish => {
                if (wish.wish_id === wishId) {
                    return {...wish, 
                        wish_comment: res.data.wish_comment,
                        wish_priority: res.data.wish_priority}
                } else {
                    return wish
                }
            }))
        })
        .catch(err => console.log("Error in handleWishEdit", err))
    }
    const handleWishSelect = (wishId) => {
        // setSelectedWishId(wishId)
        axios
        .get(`http://localhost:5000/wishes/${wishId}`)
        .then(res => {
            setSelectedWishData(res.data)
        })
        .catch(err => {
            console.log("Error in handleWishSelect", err)
        })
    }
    return (
        <div>
            <h2>Your Lists</h2>
            <Wishlist 
                wishlistData={wishlistData} 
                handleDelete={handleWishDelete} 
                handleEdit={handleWishEdit} 
                handleSelect={handleWishSelect}
                selectedWishData={selectedWishData}
                />
            
            <WishlistMap />
        </div>
    )
}

export default UserLists;