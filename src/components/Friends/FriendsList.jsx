import Friend from "./Friend";

const FriendsList = ({friendsData}) => {
  const friends = friendsData.map(friend => {
    return (
      <Friend 
        key={friend.userId}
        friendData={friend}
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