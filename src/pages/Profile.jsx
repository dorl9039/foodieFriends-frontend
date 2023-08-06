import './Profile.css'

const Profile = ({ user }) => {
    console.log("user in Profile", user)
    return (
        <div>
            <h2>Profile</h2>
            <ul className='user-details__container'>
                <li>ID: {user.user_id}</li>
                <li>Username: {user.username}</li>
                <li>Name: {user.first_name} {user.last_name}</li>
                <li>Joined: {user.creation_date.slice(0, 10)}</li>
            </ul>
        </div>
    )

}

export default Profile;