import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import Catalog from './Catalog';
import AuthBanner from '../components/AuthBanner';
import { useAppSelector } from '../store/hooks';
import CatalogBody from '../components/CatalogBody';

type Props = {};

const Home: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.userSlice.user);

  return (
    <Body>
      <Banner />
      <CatalogBody />
      <Pagination />
      {user ? null : <AuthBanner />}
    </Body>
  );
};

export default Home;

const Body = styled.div`
  margin: 40px calc((1.3% - 9px) * 8) 150px;
`;
