import './Rec.css'

const Rec = ({recData}) => {
    return (
        <div className='rec__container'>
            {recData.friend.first_name} ({recData.friend.username}) also wants to try out {recData.wishRestaurant.restaurant_name}
        </div>
    )
}

export default Rec;