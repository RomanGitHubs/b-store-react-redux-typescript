import React from 'react';
import styled, { css } from 'styled-components';

type ButtonTypes = 'small' | 'large' | 'catalog';

type Props = {
  title: string;
  className?:string;
  type?: ButtonTypes;
};

const Button: React.FC<Props> = (props) => {
  return (
    <Body type={props.type}>
      $ {props.title} USD
    </Body>
  );
};

type StylesProps = {
  type?: ButtonTypes;
}
const Body = styled.div<StylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
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

  ${(props) => {
    switch (props.type) {
    case 'large':
      return css``;
    case 'small':
      return css``;
    case 'catalog':
      return css`
        width: 305px;
        height: 48px;
        font-size: 20px;
        line-height: 28px;
      `;
    default:
      return css``;
    }
  }}
  
  `;

export default Button;
