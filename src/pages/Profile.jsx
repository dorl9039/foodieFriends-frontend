import axios from 'axios';
import { useState } from 'react';
import './Profile.css'
import SetUsername from '../components/Account/SetUsername'
import FriendsPage from '../components/Profile/FriendsPage'
import ChangePassword from '../components/Account/ChangePassword';
import userIcon from '../media/user-icon.png'

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
			<h2>Profile</h2>
			<div className='profile-page__content'>
				<div className='profile-account__container'>
					<h3>Account Details</h3>
					<div className='profile-account__content'>
						<ul className='user-details__container'>
							<img className='user-icon__img' src={userIcon} alt='user-icon-pizza'/>
							<li>Username: {user.username}</li>
							<li>Name: {user.firstName} {user.lastName}</li>
							<li>Joined: {user.creationDate.slice(0, 10)}</li>
						</ul>
						<SetUsername purpose={'Change Username'}/>
						<button className='auth-button' onClick={()=> setPasswordOpen(true)}>Change Password</button>
						<ChangePassword open={passwordOpen} handleClose={()=>setPasswordOpen(false)} handlePasswordChange={handlePasswordChange}/>
					</div>
				</div>

				<FriendsPage userId={user.userId}/>
			</div>
		</div>
	)

}

export default Profile;