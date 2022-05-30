import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { RequireAuth } from './utils/RequireAuth';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { User } from './store/models/user';
import { getUser } from './API/users';
import { putUser } from './store/redusers/user';
import Loader from './components/Loader';

const App: React.FC = (props) => {
  // const [user, setUser] = useState<User | undefined>();
  const dispatch = useAppDispatch();

  const [button, setButton] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const user: any = await getUser();

        dispatch(putUser(user.data));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data.message);
      } finally {
        setReady(true);
      }
    })();
  }, [setReady, dispatch]);

  return (

    <div className="App">
      <Header />
      {ready
        ? (<Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path='cart' element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          } />
        </Routes>)
        : <Loader />
      }

      <Footer />
    </div>
  );
};

export default App;
