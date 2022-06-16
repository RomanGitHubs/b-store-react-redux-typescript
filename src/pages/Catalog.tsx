import React from 'react';
import styled from 'styled-components';
import AuthBanner from '../components/AuthBanner';
import CatalogBody from '../components/CatalogBody';
import Pagination from '../components/Pagination';
import { useAppSelector } from '../store/hooks';

type Props = {};

const Catalog: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.userSlice.user);

  return (
    <Body >
      <CatalogBody />
      {user ? null : <AuthBanner />}
    </Body>
  );
};

export default Catalog;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 calc((1.3% - 9px) * 8);
`;
