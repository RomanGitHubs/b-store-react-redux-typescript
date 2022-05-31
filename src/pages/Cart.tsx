import React from 'react';
import styled from 'styled-components';

type Props = {};

const Cart: React.FC<Props> = (props) => {
  return (
    <Body>
      <Content>CART ( ТЕЛЕГА )</Content>
    </Body>
  );
};

export default Cart;

const Body = styled.div`
  display: flex;
  flex-direction: column;
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
