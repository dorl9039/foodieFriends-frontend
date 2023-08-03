import Visit from "./Visit";
import VisitCard from "./VisitCard";
import './VisitList.css'

const VisitList = () => {
    return (
    <section className='main-visit-list__container'>
            <section className='visit-list__container'>
                <h3>Visits</h3>
                <section className='visit__container'>
                <Visit />
                </section>

            </section>
            <section className='select-visit__container'>
                <h3>Selected Wish</h3>
                <VisitCard />
            </section>
        </section>
    )
};

export default VisitList;

