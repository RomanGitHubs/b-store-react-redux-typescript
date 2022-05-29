import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Catalog from './Catalog';

type Props = {};

const HomeBody: React.FC<Props> = (props) => {
  return (
    <Body>
      <Catalog />
      <Pagination />
    </Body>
  );
};

export default HomeBody;

const Body = styled.div`
margin: 40px calc(calc(calc(1.3%) - 9px) * 8) 150px;
`;
