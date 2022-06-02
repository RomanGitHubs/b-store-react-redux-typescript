import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <Body >
      {props.title}
    </Body>
  );
};

export default Button;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 44px;
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

`;
