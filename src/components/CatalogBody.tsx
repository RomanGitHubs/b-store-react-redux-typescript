import React, { useState } from 'react';
import styled from 'styled-components';
import rightArrow from '../assets/right-arrow.svg';
import downArrow from '../assets/down-arrow.svg';
import Book from './Book';
import narnia from '../assets/narnia.png';
import psychlogy from '../assets/psychlogy.png';
import doriangray from '../assets/doriangray.png';
import subtleart from '../assets/subtleart.png';
import twotowers from '../assets/twotowers.png';

type Props = {};

const CatalogBody: React.FC<Props> = (props) => {
  const initialStateBook = [
    { id: 1, cover: narnia, title: 'The Chronicles of Narnia', author: 'C. S. Lewis', rating: 5, price: '14.99', new: false, bestsaller: false, isFavorite: true, available: true },
    { id: 2, cover: psychlogy, title: 'The Psychlogy of Money', author: 'Morgan Housel', rating: 4, price: '14.99', new: false, bestsaller: true, isFavorite: false, available: true },
    { id: 3, cover: doriangray, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 0, price: '14.99', new: true, bestsaller: false, isFavorite: true, available: false },
    { id: 4, cover: subtleart, title: 'The Subtle art of not giving a fuck', author: 'Mark Manson', rating: 5, price: '14.99', new: true, bestsaller: true, isFavorite: false, available: true },
    { id: 5, cover: twotowers, title: 'The Two towers', author: 'J. R. R. Tolkien', rating: 5, price: '14.99', new: false, bestsaller: false, isFavorite: true, available: true },
  ];

  const [books, setBooks] = useState(initialStateBook);
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
        <Filters>
          <Filter onClick={handleOpenGenre}>Genre
            <img src={ genre ? downArrow : rightArrow}></img>
          </Filter>
          <Filter onClick={handleOpenPrice}>Price
            <img src={ price ? downArrow : rightArrow}></img>
          </Filter>
          <Filter onClick={handleOpenSort}>Sort by price
            <img src={ sort ? downArrow : rightArrow}></img>
          </Filter>
        </Filters>
      </Header>
      <Content>
        {books.map((book) =>
          <Book
            key={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            rating={book.rating}
            price={book.price}
            new={book.new}
            bestsaller={book.bestsaller}
            isFavorite={book.isFavorite}
            available={book.available}
          />,
        )}
      </Content>
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

const Filters = styled.div`
  display: flex;
  width: 628px;
  height: 48px;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  width: 166px;
  height: 48px;
  max-width: 196px;
  background: #e6e6e6;
  font-family: 'Poppins';
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  /* padding-right: 8px; */
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
  justify-content: center;
`;
