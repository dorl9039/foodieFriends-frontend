import WishlistMap from "../components/WishlistMap";
import Wishlist from "../components/Wishlist";

const UserLists = () => {
    return (
        <div>
            <h2>Your Lists</h2>
            <Wishlist />
            
            <WishlistMap />
        </div>
    )
}

export default UserLists;