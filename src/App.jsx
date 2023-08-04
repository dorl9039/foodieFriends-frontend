import { Route, Routes } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import History from './pages/History';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import Friends from './pages/Friends';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';
import Login from './components/Home/Login';

import './App.css';

function App() {
  const user = useAuth()
  console.log('user in App', user)
  return (
    <>
      <h1>FoodieFriends</h1>
      <Navbar />
      {user?.loggedIn === null ? (
        ''
      ) : user?.loggedIn === true ? (
        <Routes>
            <Route index element={<Home />} />
            <Route element={<WishlistPage userId={user.id}/>} path='wishlist'/>
            <Route element={<Home />} path='home'/>
            <Route element={<History userId={user.id}/>} path='history'/>
            <Route element={<Friends />} path='friends'/>
            <Route element={<AddWish userId={user.id}/>} path='add'/>
            <Route element={<FourOhFour />} path='*'/>
        </Routes>
      ) : (
        <Login />
      )
      }
      
    </>
  )
}

export default App
