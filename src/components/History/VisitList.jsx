import Visit from "./Visit";
import './VisitList.css'

const VisitList = ({historyData, handleEdit, handleDelete, handleSelect, selectedVisit}) => {
		
	
	const visits = historyData.map((visit) => {
		return (
			<Visit 
			key={visit.visitId}
			visitData={visit}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleSelect={handleSelect}
			selectedVisit={selectedVisit}
			/>
			);
		});
	
	return (
			<section className='list__container'>
				<section className='list-sort-btns__container'>
					<p>Sort by:</p>
					<button>Price</button>
					<button>Date visited</button>
					<button>Rating</button>
				</section>
				<section className='record__container'>
					{visits}
				</section>
			</section>
	)
};

export default VisitList;

