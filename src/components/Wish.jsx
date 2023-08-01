import './Wish.css'
const Wish = (props) => {
    // const onDelete = (e) => {
    //     const delWish = window.confirm(`Are you sure you want to delete wish ${props.wishId}: ${props.restaurantName}`)
    //     if (delWish) {
    //        props.handleDelete(props.wishId);
    //        // set selected wish
    //        // onWishSelect 
    //     }
    // }
    console.log('in Wish', props)
    return(
        <section className='wish'>
        <h3>Wish {props.wishId}</h3>
        <p>Restaurant: {props.restaurantName}</p>
        <li>
            <button 
                className='delete-button__container'>X</button>
                {/* onClick={onDelete}>X</button> */}
            <button className='edit-button__container'>✏️</button>
        </li>

        </section>
    )
};

export default Wish
