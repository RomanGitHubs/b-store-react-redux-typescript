import React, { Children, useState } from 'react';
import styled from 'styled-components';
import Filter from './Filter';

type Props = {};

const Filters: React.FC<Props> = (props) => {
  // const [genre, setGenre] = useState(false);
  // const [price, setPrice] = useState(false);
  // const [sort, setSort] = useState(false);

  // const handleOpenGenre = () => {
  //   setGenre((genre) => !genre);
  // };
  // const handleOpenPrice = () => {
  //   setPrice((price) => !price);
  // };
  // const handleOpenSort = () => {
  //   setSort((sort) => !sort);
  // };
  return (
    <Body>
      <Filter title={'Genre'}></Filter>
      <Filter title={'Price'}></Filter>
      <Filter title={'Sort by price'}></Filter>
    </Body>
  );
};

export default Filters;

const Body = styled.div`
  display: flex;
  width: 628px;
  height: 48px;
  justify-content: space-between;
`;
