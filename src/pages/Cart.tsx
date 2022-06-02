import React from 'react';
import styled from 'styled-components';
import books from '../assets/cart-default.jpg';
import Button from '../components/Button';

type Props = {};

const Cart: React.FC<Props> = (props) => {
  return (
    <Body>
      <Image src={books} />
      <Content>
        <Title>Your cart is empty</Title>
        <Text>Add items to cart to make a purchase. Go to the catalogue no.</Text>
        <Button title='Go to catalog'></Button>
      </Content>
    </Body>
  );
};

export default Cart;

const Body = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
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
  align-items: center;
  margin-top: 40px;
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
`;
