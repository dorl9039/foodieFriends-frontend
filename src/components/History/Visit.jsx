import './Visit.css'

const Visit = ({ visitData }) => {
    const visitAttendees = visitData.attendees.map(attendee => attendee.username)
    const visitDate = visitData.visit_date.slice(0, 10)
    return (
        <section className='visit-card__container'>
        <h4>Visit {visitData.visit_id}</h4>
            <ul>
                <li>Restaurant: {visitData.restaurant_name}</li>
                <li>Visit date: {visitDate}</li>
                <li>Comment: {visitData.visit_comment}</li>
                <li>Attendees: {visitAttendees.join(', ')} </li>
                

            </ul>
        
        </section>
    )
};

export default Visit;