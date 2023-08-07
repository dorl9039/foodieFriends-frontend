import axios from "axios";
import { useEffect, useState } from "react";
import FriendsList from "../components/Friends/FriendsList";
import AddFriend from "../components/Friends/AddFriend";


const formatUserData = (userData) => {
	return {
		username: userData.username,
		firstName: userData.first_name,
		lastName: userData.last_name,
		userId: userData.user_id
	}
}
const FriendsPage = ({userId}) => {
	const [modalOpen, setModalOpen] = useState(false)
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

	const handleAddSubmit = (username) => {
		axios.post(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/friends`, {username: username})
		.then(res => {
			const newFriend = formatUserData(res.data)
			setFriendsData(prev => ([...prev, newFriend]))
		})
		.catch(err => console.log("Error in FriendsPage, handleAddSubmit", err))
	}

	return (
		<div>
			<h2>Manage Your Friends</h2>
			<FriendsList friendsData={friendsData}/>
			<button onClick={()=>{setModalOpen(true)}}>Add new friend</button>
			<AddFriend open={modalOpen} handleClose={()=>{setModalOpen(false)}} handleSubmit={handleAddSubmit}/>
		</div>
	)
}

export default FriendsPage;