import React from 'react';
import styled from 'styled-components';
import AuthBanner from '../components/AuthBanner';
import CatalogBody from '../components/CatalogBody';
import Pagination from '../components/Pagination';
import { useAppSelector } from '../store/hooks';

type Props = {};

const Book: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.userSlice.user);
  const book = useAppSelector((state) => state.bookSlice.books);

  console.log(book);
  
  return (
    <Body >
      <div>
        <img></img>
        <div>Description</div>
      </div>
      {user ? null : <AuthBanner />}
      <div>Recomendation</div>
    </Body>
  );
};

export default Book;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 calc((1.3% - 9px) * 8);
`;
