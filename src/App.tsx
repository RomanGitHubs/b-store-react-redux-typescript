import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { useAppDispatch } from './store/hooks';
import { getUser } from './api/users';
import { putUser } from './store/reducers/user';
import Loader from './components/Loader';
import Book from './pages/Book';

const App: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setReady(true);
        } else {
          const user = await getUser();

          dispatch(putUser(user.data));
          console.log(user.data);
          setReady(true);
        }
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  return (

    <div className="App">
      {ready
        ? (<>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='catalog' element={<Catalog />} />
            <Route path='book' element={<Book />} />
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
          </Routes>
          <Footer />
        </>)
        : <Loader />
      }
    </div>
  );
};

export default App;
