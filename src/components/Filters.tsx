import React, { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getGenres } from '../api/genres';
import { useAppSelector } from '../store/hooks';
import { putGenres } from '../store/reducers/genre';
import Filter from './Filter';
import { Genre } from '../models/genre';
import { putBooks } from '../store/reducers/book';
import Slider from './Slider';
import SortFilter from './SortFilter';
import emptyChBox from '../assets/checkbox-empty.svg';
import fillChBox from '../assets/checkbox-checked.svg';
import { getBooks } from '../api/books';
import { putPrice } from '../store/reducers/price';

type Props = {
  minPrice: number;
  maxPrice: number;
};

const Filters: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [usedGenre, setUseGenre] = useState<Genre[]>([]);
  const genres = useAppSelector((state) => state.genreSlice.genre);
  const price = useAppSelector((state) => state.priceSlice.price);
  const sort = useAppSelector((state) => state.sortSlice.sort);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getGenres();
        console.log(genres.data);
        dispatch(putGenres(genres.data));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  }, []);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();

    const id = e.target.id;
    console.log('TARGET >>> ', 'id: ', id, e.target);

    // if (usedGenre.includes(id)) {
    //   const find = usedGenre.findIndex((item) => item === id);
    //   console.log('Find >>> ', find);
    //   usedGenre.splice(find, 1);
    //   setUseGenre(usedGenre);
    // } else {
    //   usedGenre.push(id);
    //   setUseGenre(usedGenre);
    // }
    // dispatch(putGenres(usedGenre));

    // (async () => {
    //   const getBooks = (): Promise<AxiosResponse<Book[]>> => {
    //     return axios.create().get(`http://localhost:5000/api/books/?genre=${usedGenre}`);
    //   };
    //   const filtred = await getBooks();
    //   console.log(filtred.data);
    //   dispatch(putBooks(filtred.data));
    // })();

    console.log('SENDed Genres >>> ', usedGenre);
  };

  useEffect(() => {
    (async () => {
      try {
        // const params = new URLSearchParams({ genre: genres, price: price, sort: sort });
        const params = {
          genre: usedGenre?.map((genre) => genre.isChecked === true),
          price,
          sort,
        };
        console.log(params);
        
        const filtred = await getBooks(params);
        dispatch(putBooks(filtred.data));
      } catch (e: any) {
        console.error('Error >>> ');
      }
    })();
  }, [genres, price, sort]);

  const handlePrice = () => {

  };

  // (async () => {
  //   const getBooks = (): Promise<AxiosResponse<Book[]>> => {
  //     return axios.create().get('http://localhost:5000/api/books', { params });
  //   };
  //   const filtred = await getBooks();
  //   console.log(filtred.data);
  //   dispatch(putBooks(filtred.data));
  // })();


  return (
    <Body>
      <Filter title="Genre">
        {genres ? <div className="genre-list">
          {genres.map((genre) =>
            <Genres key={genre.id}>
              <input
                type="checkbox"
                className="checkbox"
                checked={genre.isChecked}
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

          onChange={({ min, max }: { min: number; max: number }) => {
            console.log(`min = ${min}, max = ${max}`);
            // const paramPrice = new URLSearchParams({ price: `${min}, ${max}` });
            dispatch(putPrice(`${min}, ${max}`));
          }}

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
