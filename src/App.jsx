import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import AuthProvider from './hooks/useAuth';
import History from './pages/History';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import Friends from './pages/Friends';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';

import './App.css';
const userId = 1

function App() {
  return (
    <AuthProvider>
      <h1>FoodieFriends</h1>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<WishlistPage userId={userId}/>} path='wishlist'/>
        <Route element={<Home />} path='home'/>
        <Route element={<History userId={userId}/>} path='history'/>
        <Route element={<Friends />} path='friends'/>
        <Route element={<AddWish userId={userId}/>} path='add'/>
        <Route element={<FourOhFour />} path='*'/>
      </Routes>
    </AuthProvider>
  )
}

export default App
