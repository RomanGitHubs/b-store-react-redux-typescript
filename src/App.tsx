import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

type Props = {};

const App: React.FC<Props> = (props) => {
  const state = [];

  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='catalog' element={<Catalog />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>

    </div>
  );
};

export default App;
