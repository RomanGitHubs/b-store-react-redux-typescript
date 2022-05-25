import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeBody from '../components/HomeBody';
import { AuthStatus } from '../utils/AuthProvider';

type Props = {};

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <Header link={'../login'}/>
      <AuthStatus />

      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
