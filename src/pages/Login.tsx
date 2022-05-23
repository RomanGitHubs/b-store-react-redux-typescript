import React from "react";
import Header from '../components/Header';
import LoginBody from '../components/LoginBody';
import Footer from '../components/Footer';

type Props = {

}

const Login: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <LoginBody />
      <Footer />
    </div>
  )
}

export default Login