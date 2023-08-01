const WishCard = ({wishData}) => {
    console.log('in WishCard', wishData)
    return(
        <section>
            {wishData.restaurant_name}
        </section>
    )
};

export default WishCard