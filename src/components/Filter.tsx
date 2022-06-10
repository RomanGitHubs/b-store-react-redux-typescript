import React, { useState } from 'react';
import styled from 'styled-components';
import rightArrow from '../assets/right-arrow.svg';
import downArrow from '../assets/down-arrow.svg';

type Props = {
  title?: string;
  onClick?: (e: any) => Event;
  children?: React.ReactNode
};

const Filter: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenState = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <Body >
      <div className="title" onClick={toggleOpenState}>
        {props.title}
        <img src={rightArrow}></img>
      </div>
      {isOpen && <div>
        {props.children}
      </div>}
    </Body>
  );
};

export default Filter;

const Body = styled.div`
  display: flex;
  width: 166px;
  height: 48px;
  max-width: 196px;
  background: #f0f0f0;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  color: #344966;

  .title {
    display: flex;
    width: 166px;
    background: #f0f0f0;
    font-family: 'Poppins';
    align-items: center;
    justify-content: space-between;
  }
`;
