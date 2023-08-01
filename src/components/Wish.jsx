import './Wish.css'
const Wish = (props) => {
    const onDelete = (e) => {
        const delWish = window.confirm(`Are you sure you want to delete wish ${props.wishId}: ${props.restaurantName}`)
        if (delWish) {
           props.handleDelete(props.wishId);
           // set selected wish
           // onWishSelect 
        }
    }

    const onEdit = () => {
        props.handleEdit(props.wishId, editData)
    }

    const onSelect = () => {
        props.handleSelect(props.wishId)
    }
    
    return(
        <section className='wish' onClick={onSelect}>
        <h3>Wish {props.wishId}</h3>
        <p>Restaurant: {props.restaurantName}</p>
        <li>
            <button 
                className='delete-button__container'
                onClick={onDelete}>X</button>
            <button 
                className='edit-button__container'
                onClick={onEdit}>✏️</button>
        </li>

        </section>
    )
};

export default Wish
