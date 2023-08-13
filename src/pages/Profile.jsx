import axios from 'axios';
import { useState } from 'react';
import './Profile.css'
import SetUsername from '../components/Account/SetUsername'
import FriendsPage from '../components/Profile/FriendsPage'
import ChangePassword from '../components/Account/ChangePassword';

const Profile = ({ user }) => {
	const [passwordOpen, setPasswordOpen] = useState(false)
	console.log("user in Profile", user)
	
	const handlePasswordChange = (data) => {
		axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${user.userId}/password`, data)
		.then(res => console.log("in handlePasswordChange then res", res))
		.catch(err => console.log('in handlePasswordChange err', err))
	}
	
	return (
		<div className='profile-page__container'>
			<div className='profile-content__container'>
			<h2>Profile</h2>
			<ul className='user-details__container'>
				<li>ID: {user.userId}</li>
				<li>Username: {user.username}</li>
				<li>Name: {user.firstName} {user.lastName}</li>
				<li>Joined: {user.creationDate.slice(0, 10)}</li>
			</ul>
			<SetUsername purpose={'Change Username'}/>
			<button onClick={()=> setPasswordOpen(true)}>Change Password</button>
			<ChangePassword open={passwordOpen} handleClose={()=>setPasswordOpen(false)} handlePasswordChange={handlePasswordChange}/>

			</div>
			<FriendsPage userId={user.userId}/>
		</div>
	)

}

export default Profile;