import { useState} from 'react';
import WishlistPage from './WishlistPage';
import History from './History';


const ListsPage = ({userId}) => {
  // view defaults to Wishlist
  const [view, setView] = useState(true);


  return (
    <div>
      {view? 
      <WishlistPage 
        userId={userId}
        setView={setView}/> 
      :
      <History 
        userId={userId}
        setView={setView}
      />}
    </div>

  )
}

export default ListsPage;