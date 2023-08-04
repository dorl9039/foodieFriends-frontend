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
import RegisterUsername from './components/Home/RegisterUsername';

import './App.css';

function App() {
  const {user, handleUsernameUpdate} = useAuth()
  console.log('user in App', user)
  return (
    <>
      <h1>FoodieFriends</h1>
      <Navbar />
      {user?.loggedIn === null ? (
        ''
      ) : user?.loggedIn === true && user?.username? (
        <Routes>
            <Route index element={<Home user={user}/>} />
            <Route element={<WishlistPage userId={user.userId}/>} path='wishlist'/>
            <Route element={<Home user={user}/>} path='home'/>
            <Route element={<RegisterUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>} path='register'/>
            <Route element={<History userId={user.userId}/>} path='history'/>
            <Route element={<Friends />} path='friends'/>
            <Route element={<AddWish userId={user.userId}/>} path='add'/>
            <Route element={<FourOhFour />} path='*'/>
        </Routes>
      ) : user?.loggedIn === true && !user?.username? (
        <RegisterUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>
      ) : (
        <Login />
      )
      }
      
    </>
  )
}

export default App
