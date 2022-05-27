import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

const Cart: React.FC<Props> = (props) => {
  return (
    <div>
      <Header link="../signup"/>
      <Footer />
    </div>
  );
};

export default Cart;
