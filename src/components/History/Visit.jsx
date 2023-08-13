import { useState, useEffect } from 'react';
import './Visit.css'
import Modal from '@mui/base/Modal';
import StyledBackdrop from '../StyledBackdrop';
import VisitEditForm from './VisitEditForm';

const Visit = ({ visitData, handleEdit, handleDelete, handleSelect, selectedMarker }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [deleteOpen, setDeleteOpen] = useState(false)
	const [editOpen, setEditOpen] = useState(false)
	
	const visitAttendees = visitData.attendees.map(attendee => attendee.username)
	const visitDate = visitData.visitDate.slice(0, 10)

	useEffect(() => {
		if (selectedMarker === visitData.visitId) {
			setIsOpen(true);
		} else {
			setIsOpen(false)
		}
	}, [selectedMarker, visitData.visitId])

	const onSelectClick = () => {
		handleSelect(visitData.visitId)
		setIsOpen(props => !props)
	}

	const onConfirmDelete = () => {
		setDeleteOpen(false)
		handleDelete(visitData.visitId)
	}

	
		return (
			<section className='record'>
				<section className='record-title__container' onClick={onSelectClick}>
					<h4>Visit {visitData.visitId} to {visitData.restaurantName}</h4>
					<div>{isOpen? '-' : '+'}</div>
				</section>
				{isOpen && (
					<div className='selected-record__container'>
						<div className='selected-record__content'>
							<p>{visitData.address1}, {visitData.city}, {visitData.state}</p>
							<p>{visitData.cuisine} | {visitData.priceRange}</p>
							<p>Visited on: {visitDate}</p>
							<p>Visit rating: {visitData.rating}</p>
							<p>Visit comment: {visitData.visitComment}</p>
							<p>Went with: {visitAttendees}</p>
						</div>
						<div className='record-buttons__container'>
							<button onClick={()=>setDeleteOpen(true)}
								>Delete</button>
							<button onClick={() => setEditOpen(true)}>Edit</button>
						</div>
					</div>
				)
				}
				<Modal
					className='delete-modal__container'
					open={deleteOpen}
					onClose={()=> setDeleteOpen(false)}
					slots={{backdrop: StyledBackdrop}}>
							<div className='delete-modal'>
								<h3> Are you sure you want to delete this wish?</h3>
								<section className='delete-modal-buttons__container'>
									<button onClick={onConfirmDelete}>Delete</button>
									<button onClick={() => setDeleteOpen(false)}>Nevermind</button>
							</section>
						</div>	
					</Modal>
					<VisitEditForm
						visit={visitData}
						editOpen={editOpen}
						handleClose={()=>setEditOpen(false)}
						handleEdit={handleEdit} />

			</section>
	)
};

export default Visit;