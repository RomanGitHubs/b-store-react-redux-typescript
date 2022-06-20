import React, { useState } from 'react';
import styled from 'styled-components';
import notFound from '../assets/404f.png';
import { useScreenSize } from './ScreenSize';

type Props = {};

const NotFound: React.FC<Props> = (props) => {
  const [height, width] = useScreenSize();

  console.log(height, width);

  return (
    <Body>
      <img src={notFound}/>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 150px calc((1.3% - 9px) * 8);
`;

export default NotFound;
