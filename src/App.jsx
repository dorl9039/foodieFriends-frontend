import { Route, Routes } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import History from './pages/History';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import Friends from './pages/Friends';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';
import Login from './components/Account/Login';
import RegisterUsername from './components/Account/RegisterUsername';
import Profile from './pages/Profile';

import './App.css';

function App() {
  const {user, handleUsernameUpdate, handleUserUpdate} = useAuth()
  console.log('in App, user:', user)
  return (
    <>
      <h1>FoodieFriends</h1>
      <Navbar />
      {user?.loggedIn === null ? (
        ''
      ) : user?.loggedIn === true && user?.username? (
        <Routes>
            <Route index element={<Home userId={user.userId}/>} />
            <Route element={<WishlistPage userId={user.userId}/>} path='wishlist'/>
            <Route element={<Home userId={user.userId}/>} path='home' />
            <Route element={<Profile user={user}/>} path='profile'/>
            <Route element={<RegisterUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>} path='register'/>
            <Route element={<Login updateUser={handleUserUpdate} user={user}/>} path='login' />
            <Route element={<History userId={user.userId}/>} path='history'/>
            <Route element={<Friends />} path='friends'/>
            <Route element={<AddWish userId={user.userId}/>} path='add'/>
            <Route element={<FourOhFour />} path='*'/>
        </Routes>
      ) : user?.loggedIn === true && !user?.username? (
        <RegisterUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>
      ) : (
        <Login updateUser={handleUserUpdate} user={user}/>
      )
      }
      
    </>
  )
}

export default App
