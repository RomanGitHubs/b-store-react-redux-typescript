import React, { useState } from 'react';
import styled from 'styled-components';
import rightArrow from '../assets/right-arrow.svg';
import downArrow from '../assets/down-arrow.svg';

type Props = {
  title?: string;

};

const Filter: React.FC<Props> = (props) => {
  return (
    <Body>{props.title}
      <img src={rightArrow}></img>
    </Body>
  );
};

export default Filter;

const Body = styled.div`
  display: flex;
  width: 166px;
  height: 48px;
  max-width: 196px;
  background: #e6e6e6;
  font-family: 'Poppins';
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  /* padding-right: 8px; */
`;
