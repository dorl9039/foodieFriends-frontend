import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Feed from '../components/Home/Feed';

const Home = ({ userId }) => {
    console.log('userId', userId)
    const [recsData, setRecsData] = useState([])
    const [recsExist, setRecsExist] = useState(false)
    const [selectedRec, setSelectedRec] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/foodiefriends`)
        .then(res => {
            if (res.data.wishlist.length > 0) {
                setRecsExist(true)
                setRecsData(res.data)
            }
        })
        .catch(err => console.log("error in Home useEffect", err))
    }, [])
    
    return (
        <div>
            <h2>Your FoodieFriend Recs</h2>
            {recsExist? (
                <Feed recsData={recsData}/>
            ) : 
            'No recs at the moment'
            }

        </div>
    )

}

export default Home;