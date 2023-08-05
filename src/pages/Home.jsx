import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Home = ({ userId }) => {
    console.log('userId', userId)
    const [recs, setRecs] = useState([])
    const [selectedRec, setSelectedRec] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/foodiefriends`)
        .then(res => {
            setRecs(res.data)
        })
        .catch(err => console.log("error in Home useEffect", err))
    }, [])
    
    return (
        <div>
            <h2>Your FoodieFriend Recs</h2>


        </div>
    )

}

export default Home;