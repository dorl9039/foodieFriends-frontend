import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserLists from './pages/UserLists';
import Friends from './pages/Friends';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';

import './App.css';
const user_id = 1

// const handleNewWishSubmit = (data) => {
//   return axios
//   .post(`http://localhost:5000/users/${user_id}/wishlist`, data)
//   .catch(err => {
//     console.log('Error in handleNewWishSubmit', err)
//   })
// }

function App() {
  const createNewWish = (data) => {
    console.log('createNewWish data', data)
    axios
    .post(`http://localhost:5000/users/${user_id}/wishlist`, data)
    .then(res => {
      console.log('createNewWish result', res)
    })
    .catch(err => {
      console.log('Error in createNewWish', err)
    })
  }
  return (
    <div>
      <h1>FoodieFriends</h1>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<UserLists />} path='lists'/>
        <Route element={<Home />} path='home'/>
        <Route element={<Friends />} path='friends'/>
        <Route element={<AddWish createNewWish={createNewWish}/>} path='add'/>
        <Route element={<FourOhFour />} path='*'/>
      </Routes>
    </div>
  )
}

export default App
