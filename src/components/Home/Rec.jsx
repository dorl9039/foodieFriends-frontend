import { useState } from 'react';
import './Rec.css'

const Rec = ({recData}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='rec__container'>
			<div className='rec__title' onClick={()=>setIsOpen(props => !props)}> 
				<div>{recData.friend.username} also wants to try out {recData.wish.restaurantName}</div>
				<div>{isOpen? '-' : '+'}</div>
			</div>
			{isOpen && 
				<div className='rec__content'>
					<p>{recData.wish.address1}, {recData.wish.city}, {recData.wish.state}</p>
					<p>{recData.wish.cuisine} | {recData.wish.priceRange}</p>
					<p>Priority: {recData.wish.priority}</p>
					<p>Comment: {recData.wish.comment}</p>
				</div>}
		</div>
	)
}

export default Rec;