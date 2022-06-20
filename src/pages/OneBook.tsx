import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AuthBanner from '../components/AuthBanner';
import CatalogBody from '../components/CatalogBody';
import Pagination from '../components/Pagination';
import { useAppSelector } from '../store/hooks';

type Props = {};

const Book: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.userSlice.user);
  const books = useAppSelector((state) => state.bookSlice.books);

  const navigate = useNavigate();
  const params = useParams();
  console.log('Params', params);

  // const paramsId = parseInt(params.bookId, 10);
  // console.log('Params', paramsId);
  // const book = books?.map((item) => item.id === paramsId);

  // console.log(book);

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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 calc((1.3% - 9px) * 8);
`;

export default Book;
