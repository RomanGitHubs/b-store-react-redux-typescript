import React from 'react';
import styled from 'styled-components';
import CatalogBody from '../components/CatalogBody';
import Pagination from '../components/Pagination';

type Props = {};

const Catalog: React.FC<Props> = (props) => {
  return (
    <Body >
      <CatalogBody />
    </Body>
  );
};

export default Catalog;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 calc((1.3% - 9px) * 8);
`;
