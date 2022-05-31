import React from 'react';
import styled from 'styled-components';

type Props = {};

const CatalogBody: React.FC<Props> = (props) => {
  return (
    <Body >
      <Header>
        <Title>Catalog</Title>
        <Filter>Filter</Filter>
        <Filter>Filter</Filter>
        <Filter>Filter</Filter>
      </Header>
      <Content>BOOKS</Content>
    </Body>
  );
};

export default CatalogBody;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 90px 0 80px;
`;

const Header = styled.div`
  display:flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 0;
`;

const Filter = styled.div`
  display: flex;
  width: 196px;
  height: 48px;
  background: #F0F4EF;
  font-family: 'Poppins';
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  align-items: center;
  margin-top: 40px;
`;
