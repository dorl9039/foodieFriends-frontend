import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import History from './pages/History';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
  console.log('in App, user:', user);
  return (
    <>
      {user?.loggedIn === null ? (
        ''
      ) : user?.loggedIn === true && user?.username? (
        <>
        <Navbar updateUser={handleUserUpdate}/>
        <Routes>
            <Route index element={<Home userId={user.userId}/>} />
            <Route element={<Home userId={user.userId}/>} path='home' />
            <Route element={<WishlistPage userId={user.userId}/>} path='wishlist'/>
            <Route element={<Profile user={user}/>} path='profile'/>
            <Route element={<History userId={user.userId}/>} path='history'/>
            <Route element={<AddWish userId={user.userId}/>} path='add'/>
            <Route element={<FourOhFour />} path='*'/>
            <Route element={<SetUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>} path='set-username'/>
            <Route element={<Authenticate updateUser={handleUserUpdate}/>} path='login' />
        </Routes>
        </>
      ) : user?.loggedIn === true && !user?.username? (
        <SetUsername userId={user.userId} updateUsername={handleUsernameUpdate}/>
      ) : (
        <Authenticate updateUser={handleUserUpdate}/>
      )
      }
    </>
  );
}

export default App;
