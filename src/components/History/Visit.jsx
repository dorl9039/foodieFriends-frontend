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
					<h3>Visit to {visitData.restaurantName}</h3>
					{/* <div>{isOpen? '-' : '+'}</div> */}
				</section>
				{isOpen && (
					<div className='selected-record__container'>
						<div className='selected-record__content'>
							<div className='selected-record-details__container'>
								<img src={visitData.photo} />
								<div className='selected-record__details'>
									<p><b className='detail-type'>Address: </b>{visitData.address1}, {visitData.city}, {visitData.state}</p>
									<p><b className='detail-type'>Cuisine: </b>{visitData.cuisine}</p>
									<p><b className='detail-type'>Price: </b>{visitData.priceRange}</p>
									<p><b className='detail-type'>Visited: </b>{visitDate}</p>
									<p><b className='detail-type'>Your rating:</b> {visitData.rating}</p>
									<p><b className='detail-type'>Review: </b>{visitData.visitComment}</p>
									<p><b className='detail-type'>Went with: </b>{visitAttendees}</p>
								</div>
						</div>
						<div className='record-buttons__container'>
							<button onClick={()=>setDeleteOpen(true)}
								>Delete</button>
							<button onClick={() => setEditOpen(true)}>Edit</button>
						</div>
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