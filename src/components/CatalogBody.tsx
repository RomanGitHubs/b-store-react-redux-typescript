import React from 'react';
import styled from 'styled-components';
import Book from './Book';
import Filters from './Filters';
import { useAppSelector } from '../store/hooks';

type Props = {};

const CatalogBody: React.FC<Props> = (props) => {
  const { books, minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);

  return (
    <Body >
      <Header>
        <Title>Catalog</Title>
        <Filters minPrice={minPrice} maxPrice={maxPrice}/>

      </Header>
      <Container>
        { (books !== null && books.length > 0) ? <Content>
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
        </Content> : <EmptyCatalog>Empty</EmptyCatalog> }
      </Container>
    </Body>
  );
};

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

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
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
`;

const EmptyCatalog = styled.div`
  display: flex;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 100px auto 100px;
`;

export default CatalogBody;
