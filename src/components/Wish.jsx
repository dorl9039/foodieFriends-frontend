import './Wish.css'
const Wish = (props) => {
    const onDeleteClick = () => {
        const delWish = window.confirm(`Are you sure you want to delete wish ${props.wishId}: ${props.restaurantName}`)
        if (delWish) {
           props.handleDelete(props.wishId);
           // set selected wish
           // onWishSelect 
        }
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
                onClick={onDeleteClick}>X</button>
            <button 
                className='edit-button__container'
                onClick={onEditClick}>✏️</button>
        </li>

        </section>
    )
};

export default Wish
