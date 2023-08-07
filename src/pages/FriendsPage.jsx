import axios from "axios";
import { useEffect, useState } from "react";
import FriendsList from "../components/Friends/FriendsList";
import AddFriend from "../components/Friends/AddFriend";
import ConfirmationModal from "../components/ConfirmationModal";
// import ErrorModal from "../components/ErrorModal";


const formatUserData = (userData) => {
	return {
		username: userData.username,
		firstName: userData.first_name,
		lastName: userData.last_name,
		userId: userData.user_id
	}	
}

const FriendsPage = ({userId}) => {
	const [showSuccess, setShowSuccess] = useState(false)
	const [showError, setShowError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [friendsData, setFriendsData] = useState([])

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/friends`)
		.then(res => {
			const friends = res.data.map(friend => formatUserData(friend))
			console.log('friends in FriendsPage', friends)
			setFriendsData(friends)
		})
		.catch(err => console.log("Error in FriendsPage useEffect", err))
	}, [])

	const handleAddFriend = (username) => {
		axios.post(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/friends`, {username: username})
		.then(res => {
			const newFriend = formatUserData(res.data)
			setFriendsData(prev => ([...prev, newFriend]))
			setShowSuccess(true)
		})
		.catch(err => {
			setShowError(true)
			setErrorMessage(err.response.data)	
		} )
	}

	const handleRemoveFriend = (friendId) => {
		axios.delete(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/friends/${friendId}`)
		.then(() => {
			setFriendsData(prev=> prev.filter(friend=> friend.userId !== friendId))
		})
		.catch(err => console.log("Error in FriendsPage, handleRemoveFriend", err))

	}

	return (
		<div>
			<h2>Manage Your Friends</h2>
			<FriendsList 
				friendsData={friendsData}
				handleRemove={handleRemoveFriend}
				/>
			<AddFriend handleSubmit={handleAddFriend}/>
			<ConfirmationModal 
				open={showSuccess} 
				handleClose={() => setShowSuccess(false)} 
				message='New friend added!'
				/>
			<ConfirmationModal 
				open={showError} 
				handleClose={() => setShowError(false)} 
				message={errorMessage}
				/>
		</div>
	)
}

export default FriendsPage;