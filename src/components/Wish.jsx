import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import './Wish.css'


const Wish = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleDialogDelete = () => {
        setIsDialogOpen(false)
        props.handleDelete(props.wishId)
    }

    const onEditClick = () => {
        props.handleEditClick(props.wishId)
    }

    const onSelectClick = () => {
        props.handleSelect(props.wishId)
    }

    return(
        <section className='wish' onClick={onSelectClick}>
        <h3>Wish {props.wishId}</h3>
        <p>Restaurant: {props.restaurantName}</p>
        <li>
            <button 
                className='delete-button__container'
                onClick={() => setIsDialogOpen(true)}>X</button>
            <button 
                className='edit-button__container'
                onClick={onEditClick}>✏️</button>
        </li>
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <div className='dialog-modal__overlay' aria-hidden="true" />
                <div className='dialog-modal__container'>
                    <Dialog.Panel className='dialog-modal'>
                        <Dialog.Title>Confirm delete?</Dialog.Title>
                        <button onClick={handleDialogDelete}>Delete</button>
                        <button onClick={() => setIsDialogOpen(false)}>Nevermind</button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </section>
    )
};

export default Wish
