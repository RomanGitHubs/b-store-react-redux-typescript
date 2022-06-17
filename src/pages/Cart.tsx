import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import books from '../assets/cart-default.jpg';
import Button from '../components/Button';

type Props = {};

const Cart: React.FC<Props> = (props) => {
  return (
    <Body>
      <Image src={books} />
      <Content>
        <Title>Your cart is empty</Title>
        <Text>Add items to cart to make a purchase.<br/>Go to the catalogue no.</Text>
        <Links to='/catalog'>Go to catalog</Links>
      </Content>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 150px calc((1.3% - 9px) * 8);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin-left: 110px;
`;

const Image = styled.img`
  height: 261px;
  width: 433px;
`;

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
`;

const Text = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #344966;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 44px;
  min-width: 173px;
  cursor: pointer;
  background: #344966;
  text-align: center;
  border-radius: 16px;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.75px;
  color: #F0F4EF;
  text-decoration: none;
  z-index: 3;
`;

export default Cart;
