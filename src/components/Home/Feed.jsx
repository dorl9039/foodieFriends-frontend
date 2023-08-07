import Rec from "./Rec";
import './Feed.css'

const Feed = ({recsData}) => {
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
};

export default Feed