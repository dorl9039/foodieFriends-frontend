import './Profile.css'

const Profile = ({ user }) => {
        return (
            <div>
                <h2>Profile</h2>
                <ul className='user-details__container'>
                    <li>ID: {user.userId}</li>
                    <li>Username: {user.username}</li>
                    <li>Name: {user.firstName} {user.lastName}</li>
                    <li>Joined: {user.creationDate.slice(0, 10)}</li>
                </ul>
            </div>
        )

}

export default Profile;