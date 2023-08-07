const Friend = ({friendData}) => {
  return (
    <div>
      {friendData.username}
      {friendData.firstName}
      {friendData.lastName}
      <button>Remove</button>
    </div>
  )
}

export default Friend;