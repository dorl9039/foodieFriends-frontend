import fof from '../media/404-image.png'
import './404.css'

const FourOhFour = () => {
    return (
        <div className='four-oh-four__page'>
            <h1>404 — Page Not Found</h1>
            <img src={fof} alt='sad-carrot'/>
        </div>
    )
}

export default FourOhFour;