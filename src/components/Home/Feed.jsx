import Rec from "./Rec";
import './Feed.css'

const Feed = ({recsData}) => {
    console.log('recsData.wishlist', recsData.wishlist)
    if (recsData.wishlist.length == 0) {
        const recs = recsData.map((rec) => {
            return (
                <Rec 
                key={rec.wish_id}
                recData={rec}
                />
                );
            });
        return (
            <div className='feed__container'>
            {recs}
            </div>
        )
    } else {
        return(
            <>
            No recs yet
            </>
        )
    }
};

export default Feed