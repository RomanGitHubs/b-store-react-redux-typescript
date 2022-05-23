import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';


type Props = {

}

const App: React.FC<Props> = (props) => {

  const state = [];

  return (
    
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
      </Routes>

    </div>
  );
}

export default App;
