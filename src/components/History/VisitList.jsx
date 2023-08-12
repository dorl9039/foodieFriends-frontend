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
				<section className='record__container'>
					{visits}
				</section>
			</section>
	)
};

export default VisitList;

