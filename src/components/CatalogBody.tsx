import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Book from './Book';
import Filters from './Filters';
import { useAppSelector } from '../store/hooks';
import { getBooks } from '../api/books';
import { getGenres } from '../api/genres';
import { putBooks } from '../store/reducers/book';
import { putGenr } from '../store/reducers/filters';
import Loader from './Loader';
import Pagination from './Pagination';

type Props = {};

const CatalogBody: React.FC<Props> = (props) => {
  const books = useAppSelector((state) => state.bookSlice.books);
  let minPrice = 0;
  let maxPrice = 0;
  const priceArray: number[] = [];

  if (books) {
    for (let i = 0; i < books.length; i++) {
      priceArray.push(Number(books[i].price * 100));
      // console.log(typeof (books[i].price));
    }
    // console.log(priceArray);
    minPrice = Math.min(...priceArray);
    maxPrice = Math.max(...priceArray);
  }

  return (
    <Body >
      <Header>
        <Title>Catalog</Title>
        <Filters minPrice={minPrice} maxPrice={maxPrice}/>

      </Header>
      {books ? <Content>
        {books.map((book) =>
          <Book
            key={book.id}
            id={book.id}
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
      {/* {books ? <Pagination /> : null } */}

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
