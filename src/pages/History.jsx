import { useEffect, useState } from 'react';
import VisitList from "../components/History/VisitList";
import VisitDetails from "../components/History/VisitCard";

const History = ({ userId }) => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            <h2>History</h2>
            <VisitList />
            <VisitDetails />
        </div>
    )
}

export default History;