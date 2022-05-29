import React from 'react';
import styled from 'styled-components';

type Props = {};

const Cart: React.FC<Props> = (props) => {
  return (
    <Body>

    </Body>
  );
};

export default Cart;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px calc(calc(calc(1%) - 9px) * 15) 80px;
`;
