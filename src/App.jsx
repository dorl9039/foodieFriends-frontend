import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Navbar from './components/Navbar';
import WishlistPage from './pages/WishlistPage';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';
import Authenticate from './pages/Authenticate';
import SetUsername from './components/Account/SetUsername';
import Profile from './pages/Profile';

import './pages/Authenticate.css'
import './App.css';


function App() {
  const {user, handleUsernameUpdate, handleUserUpdate} = useAuth();
  console.log('inApp, user is', user)
  return (
    <div>
      {user?.loggedIn === null ? (
        ''
      ) : user?.loggedIn === true && user?.username? (
        <div>
        <Navbar updateUser={handleUserUpdate}/>
        <Routes>
            <Route index element={<WishlistPage userId={user.userId}/>} />
            <Route element={<WishlistPage userId={user.userId}/>} path='home'/>
            <Route element={<Profile user={user} updateUsername={handleUsernameUpdate}/>} path='profile'/>
            <Route element={<AddWish userId={user.userId}/>} path='add'/>
            <Route element={<FourOhFour />} path='*'/>
            <Route element={<SetUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>} path='set-username'/>
            <Route element={<Authenticate updateUser={handleUserUpdate}/>} path='login' />
        </Routes>
        </div>
      ) : user?.loggedIn === true && !user?.username? (
        <SetUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>
      ) : (
        <Authenticate updateUser={handleUserUpdate}/>
      )
      }
    </div>
  );
}

export default App;
