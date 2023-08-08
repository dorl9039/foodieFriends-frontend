import './Rec.css'

const Rec = ({recData}) => {
	return (
		<div className='rec__container'>
			{recData.friend.firstName} ({recData.friend.username}) also wants to try out {recData.wish.restaurantName}
		</div>
	)
}

export default Rec;