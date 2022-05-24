import React from 'react';
import Header from '../components/Header';
import ProfileBody from '../components/ProfileBody';
import Footer from '../components/Footer';

type Props = {};

const Profile: React.FC<Props> = (props) => {
  return (
    <div>
      <Header link={'../login'}/>
      <ProfileBody />
      <Footer />
    </div>
  );
};

export default Profile;
