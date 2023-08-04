// import Login from "../components/Home/Login";
import RegisterUsername from '../components/Home/RegisterUsername';
import './Home.css'

const Home = ({ user }) => {
    if (user.username) {
        return (
            <div>
                <h2>Home</h2>
                <ul className='user-details__container'>
                    <li>ID: {user.userId}</li>
                    <li>Username: {user.username}</li>
                    <li>Name: {user.firstName} {user.lastName}</li>
                    <li>Joined: {user.creationDate.slice(0, 10)}</li>
                </ul>
            </div>
        )
    } else {
        return (
            <RegisterUsername />
        )
    }

}

export default Home;