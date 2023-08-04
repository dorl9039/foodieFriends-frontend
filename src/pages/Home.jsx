// import Login from "../components/Home/Login";
import {useState} from 'react';
import axios from 'axios';
import RegisterUsername from '../components/Home/RegisterUsername';
import './Home.css'

const Home = ({ user }) => {
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

}

export default Home;