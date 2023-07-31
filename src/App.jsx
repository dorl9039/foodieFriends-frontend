import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserLists from './pages/UserLists';
import Friends from './pages/Friends';
import AddWish from './pages/AddWish';
import FourOhFour from './pages/404';

import './App.css';

function App() {

  return (
    <div>
      <h1>FoodieFriends</h1>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<UserLists />} path='lists'/>
        <Route element={<Home />} path='home'/>
        <Route element={<Friends />} path='friends'/>
        <Route element={<AddWish />} path='add'/>
        <Route element={<FourOhFour />} path='*'/>
      </Routes>
    </div>
  )
}

export default App
