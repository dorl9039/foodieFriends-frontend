import { useEffect, useState } from 'react';
import VisitList from "../components/History/VisitList";
import VisitDetails from "../components/History/VisitCard";
import axios from 'axios';

const History = ({ userId }) => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/history`)
        .then(res => {
            setHistoryData(res.data)
        })
        .catch(err => {
            console.log("Error in useEffect get history", err)
        })
    }, [])

    return (
        <div>
            <h2>History</h2>
            <VisitList historyData={historyData}/>
            <VisitDetails />
        </div>
    )
}

export default History;