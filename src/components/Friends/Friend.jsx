const Friend = ({friendData, handleRemove}) => {
  
  const onRemove = (event) => {
    handleRemove(friendData.userId)
  }

  return (
    <div>
      {friendData.username}
      {friendData.firstName}
      {friendData.lastName}
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default Friend;