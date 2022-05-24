import React from 'react';
import Header from '../components/Header';
import SignupBody from '../components/SignupBody';
import Footer from '../components/Footer';

type Props = {};

const Signup: React.FC<Props> = (props) => {
  return (
    <div>
      <Header link={'../login'}/>
      <SignupBody />
      <Footer />
    </div>
  );
};

export default Signup;
