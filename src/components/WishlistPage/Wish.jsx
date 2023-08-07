import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import './Wish.css'

const Wish = ({wish, handleDelete, handleEditClick, handleSelect}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleDialogDelete = () => {
        setIsDialogOpen(false)
        handleDelete(wish.wishId)
    }

    const onEditClick = () => {
        handleEditClick()
    }

    const onSelectClick = () => {
        handleSelect(wish.wishId)
    }

    return(
        <section className='wish' onClick={onSelectClick}>
        <h3>{wish.restaurantName}</h3>
        <p>{wish.priority}</p>
        <p>{wish.comment}</p>
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
