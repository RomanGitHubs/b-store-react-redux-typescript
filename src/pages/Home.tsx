import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import Catalog from '../components/Catalog';
import AuthBanner from '../components/AuthBanner';

type Props = {};

const Home: React.FC<Props> = (props) => {
  return (
    <Body>
      <Banner />
      <Catalog />
      <Pagination />
      <AuthBanner />
    </Body>
  );
};

export default Home;

const Body = styled.div`
margin: 40px calc(calc(calc(1%) - 9px) * 15) 150px calc(calc(calc(1%) - 9px) * 15);
`;
