
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  // state

  //function defination
  const [user, setUser] = useState(true);

  //return statement



  return (
   <> 
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile"  element={<Profile  name="payal" surname="dhakad" adress="tumdiya" authentication={10}/>}/>
          <Route path="*" element={ user === false? <NotFound/>:<Login/>}/>
          
      </Routes>
   
   </> 
  );
}

export default App;
