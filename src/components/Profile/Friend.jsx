import './Friend.css'

const Friend = ({friendData, handleRemove}) => {
  
  const onRemove = () => {
    handleRemove(friendData.userId)
  }

  return (
    <div className='friend-item__container'>
      <p>{friendData.username}</p>
      <p>{friendData.firstName}</p>
      <p>{friendData.lastName}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default Friend;