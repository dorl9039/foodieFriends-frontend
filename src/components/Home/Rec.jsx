import { useState } from 'react';
import './Rec.css';

const Rec = ({recData}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='rec__container'>
			<div className='rec__title' onClick={()=>setIsOpen(props => !props)}> 
				<div>{recData.friend.username} also wants to try out {recData.wish.restaurantName}</div>
				<div>{isOpen? '-' : '+'}</div>
			</div>
			{isOpen && 
				<div className='rec__content'>
					<section className='rec-restaurant-info'>
						<p>{recData.wish.address1}, {recData.wish.city}, {recData.wish.state}</p>
					<p>{recData.wish.cuisine} | {recData.wish.priceRange}</p>
					</section>
					<section className='rec-wish-info'>
						<p>Your priority: {recData.wish.priority}</p>
						<p>Your comment: {recData.wish.comment}</p>	
					</section>
					<button 
						className='contact-friend__button' 
						onClick={() => window.location=`mailto:${recData.friend.email}?subject=Want to try out ${recData.wish.restaurantName} together?`}>
							<div>✉️</div>
							<div>Connect with {recData.friend.username}</div></button>
				</div>}
		</div>
	)
}

export default Rec;