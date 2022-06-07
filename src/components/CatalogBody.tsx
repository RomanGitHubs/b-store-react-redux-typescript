import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Book from './Book';
import Filters from './Filters';
import { useAppSelector } from '../store/hooks';
import { getBooks } from '../api/books';
import { putBooks } from '../store/reducers/book';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
import Pagination from './Pagination';

type Props = {};

const CatalogBody: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const books = await getBooks();
        console.log(books.data);
        dispatch(putBooks(books.data));
        setReady(true);
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const books = useAppSelector((state) => state.bookSlice.books);

  const [genre, setGenre] = useState(false);
  const [price, setPrice] = useState(false);
  const [sort, setSort] = useState(false);

  const handleOpenGenre = () => {
    setGenre((genre) => !genre);
  };
  const handleOpenPrice = () => {
    setPrice((price) => !price);
  };
  const handleOpenSort = () => {
    setSort((sort) => !sort);
  };

  return (
    <Body >
      <Header>
        <Title>Catalog</Title>
        <Filters />

      </Header>
      {books ? <Content>
        {books.map((book) =>
          <Book
            key={book.id}
            photo={book.photo}
            title={book.title}
            author={book.author}
            rating={book.rating}
            price={book.price}
            news={book.news}
            bestsaller={book.bestsaller}
            isFavorite={book.isFavorite}
            available={book.available}
          />,
        )}
      </Content> : null }
      {books ? <Pagination /> : null }

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
  align-items: center;
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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  align-items: center;
  margin-top: 40px;
`;
