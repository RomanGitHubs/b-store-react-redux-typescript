import React, { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getGenres } from '../api/genres';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { putGenr, putPrice } from '../store/reducers/filters';
import Filter from './Filter';
import { Genre } from '../models/genre';
import { putBooks } from '../store/reducers/book';
import Slider from './Slider';
import SortFilter from './SortFilter';
import emptyChBox from '../assets/checkbox-empty.svg';
import fillChBox from '../assets/checkbox-checked.svg';
import { getBooks } from '../api/books';
import { Book } from '../models/book';

type Props = {
  minPrice: number;
  maxPrice: number;
};

const Filters: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [loadGenre, setLoadGenre] = useState<Genre[]>([]);

  const usedGenre: string[] = [];

  const { genre, price, sort } = useAppSelector((state) => state.filterSlice);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getGenres();
        console.log('Load Genres >>> ', genres.data);

        setLoadGenre(genres.data);
        console.log('Load Genres >>> ', loadGenre);
        // dispatch(putGenres(genres.data));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  }, []);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();

    const id = e.target.id;
    console.log('TARGET ID >>> ', id);
    console.log('PRE SENDed Genres >>> ', usedGenre);

    if (usedGenre.includes(id)) {
      const find = usedGenre.findIndex((item) => item === id);
      console.log('Find >>> ', find);
      usedGenre.splice(find, 1);
    } else {
      usedGenre.push(id);
    }

    dispatch(putGenr(usedGenre));

    console.log('SENDed Genres >>> ', usedGenre);
  };

  useEffect(() => {
    (async () => {
      try {
        // const params = new URLSearchParams({ genr, price, sort });
        const params = {
          genre,
          price,
          sort,
        };
        console.log('Sended params >>> ', params);
        const filtred = await getBooks(params);
        dispatch(putBooks(filtred.data));
        console.log('Filtred books >>> ', filtred.data);
      } catch (e: any) {
        console.error('Error >>> ', e);
      }
    })();
  }, [genre, price, sort]);

  const handleChangePrice = ({ min, max }: { min: number; max: number }) => {
    console.log(`min = ${min}, max = ${max}`);
    // const paramPrice = new URLSearchParams({ price: `${min}, ${max}` });
    const price = `${min}, ${max}`;
    dispatch(putPrice(price));
  };

  return (
    <Body>
      <Filter title="Genre">
        {loadGenre ? <div className="genre-list">
          {loadGenre.map((genre) =>
            <Genres key={genre.id}>
              <input
                type="checkbox"
                className="checkbox"
                checked={usedGenre.includes(`${genre.id}`)}
                // checked={Object.values(loadGenre).includes(genre.id)}
                onChange={handleSelect}
                id={`${genre.id}`}
              />
              <span className="fake-checkbox"></span>{genre.genre}
            </Genres>)
          }
        </div> : null}
      </Filter>

      <Filter title="Price" >
        <Slider
          min={props.minPrice}
          max={props.maxPrice}
          onChange={handleChangePrice}
        />
      </Filter>
      <Filter title="Sort by price" >
        <SortFilter />
      </Filter>
    </Body>
  );
};

export default Filters;

const Body = styled.div`
  display: flex;
  width: 628px;
  height: 48px;
  justify-content: space-between;
  position: relative;

  .genre-list{
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    position: absolute;
    left: 0px;
    top: 60px;
    z-index: 2;
    padding: 15px;
    gap: 10px;
    border-radius: 16px;
  }
  .checkbox {
    display: flex;
    margin-right: 10px;
    height: 24px;
    width: 24px;
    border: 2px solid #344966;
    border-radius: 20px;
  }
  .checkbox:checked + label:before {
      content: "x";
    }

`;
const Genres = styled.label`
  display: flex;
  width: 275px;
  height: 28px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 0.75px;
  color: #344966;


  label {
    display: block;
    cursor: pointer;
  }

  .checkbox { 
    opacity: 0;
    position: absolute;
    left: -100000px;
  }

  .fake-checkbox {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 4px;
  }

  .fake-checkbox::before,
  .fake-checkbox::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${emptyChBox}) no-repeat center / contain;
  }

  .fake-checkbox::after {
    background: url(${fillChBox})  no-repeat center / contain;
    opacity: 0;
  }

  .checkbox:checked + .fake-checkbox::before {
    opacity: 0;
  }

  .checkbox:checked + .fake-checkbox::after {
    opacity: 1;
  }

  .checkbox:focus + .fake-checkbox {
      outline:  #34496624 solid 5px;
      border-radius: 20px;
  }

`;
