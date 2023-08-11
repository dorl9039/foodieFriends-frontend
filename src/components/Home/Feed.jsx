import Rec from "./Rec";

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
		<div className='home-feed__container'>
			{recs}
		</div>
	)
};

export default Feed