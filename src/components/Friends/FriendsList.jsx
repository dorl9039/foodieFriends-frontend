import Friend from "./Friend";

const FriendsList = ({friendsData, handleRemove}) => {
  const friends = friendsData.map(friend => {
    return (
      <Friend 
        key={friend.userId}
        friendData={friend}
        handleRemove={handleRemove}
        />
    )
  }
    
  )
  return (
    <>
      FriendsList
      {friends}
    </>
  )
}

export default FriendsList;