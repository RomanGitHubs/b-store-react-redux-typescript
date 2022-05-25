import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthProvider, RequireAuth } from './utils/AuthProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

const App: React.FC = (props) => {
  return (

    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='catalog' element={<Catalog />}/>
          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }/>
          <Route path='cart' element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }/>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
