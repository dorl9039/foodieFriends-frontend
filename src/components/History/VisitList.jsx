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
			<section className='visit-list__container'>
				<h3>Visits</h3>
				<section className='visit__container'>
					{visits}
				</section>
			</section>
	)
};

export default VisitList;

