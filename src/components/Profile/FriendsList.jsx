import Friend from "./Friend";

const FriendsList = ({friendsData, handleRemove}) => {
  const friends = friendsData.map((friend, index) => {
    return (
      <Friend 
        iconNum={index%5}
        key={friend.userId}
        friendData={friend}
        handleRemove={handleRemove}
        />
    )
  }
    
  )
  return (
    <div className='friends-section__content'>
      {friends}
    </div>
  )
}

export default FriendsList;