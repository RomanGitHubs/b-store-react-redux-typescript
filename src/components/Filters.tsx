import React, { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getGenres } from '../api/genres';
import { useAppSelector } from '../store/hooks';
import { putGenres } from '../store/reducers/genre';
import Button from './Button';
import Filter from './Filter';
import { Book } from '../models/book';
import { putBooks } from '../store/reducers/book';
import Slider from './Slider';

type Props = {
  minPrice: number;
  maxPrice: number;
};

const Filters: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

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

  const [usedGenre, setUseGenre] = useState<string[]>([]);

  const genres = useAppSelector((state) => state.genreSlice.genre);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    console.log('TARGET >>> ', 'id: ', id, e.target);

    if (usedGenre.includes(id)) {
      const find = usedGenre.findIndex((item) => item === id);
      console.log('Find >>> ', find);
      usedGenre.splice(find, 1);
      setUseGenre(usedGenre);
    } else {
      usedGenre.push(id);
      setUseGenre(usedGenre);
    }

    (async () => {
      const getBooks = (): Promise<AxiosResponse<Book[]>> => {
        return axios.create().get(`http://localhost:5000/api/books/?genre=${usedGenre}`);
      };
      const filtred = await getBooks();
      console.log(filtred.data);
      dispatch(putBooks(filtred.data));
    })();

    console.log('SENDed Genres >>> ', usedGenre);
  };



  return (
    <Body>
      <Filter title="Genre">
        { genres ? <div className="genre-list">
          { genres.map((genre) =>
            <Genre key={genre.id}>
              <input type="checkbox" className="checkBox" checked={usedGenre.includes(`${genre.id}`)} onChange={handleSelect} id={`${genre.id}`}/>
              <span>{genre.genre}</span>
            </Genre>,
          )}
        </div> : null }
      </Filter>

      <Filter title="Price" >
        <Slider
          min={props.minPrice}
          max={props.maxPrice}
          onChange={({ min, max }: { min: number; max: number }) => {
            console.log(`min = ${min}, max = ${max}`);
            // const params = new URLSearchParams([['price', `${min},${max}`]]);
            // console.log(params);
            // (async () => {
            //   const getBooks = (): Promise<AxiosResponse<Book[]>> => {
            //     return axios.create().get('http://localhost:5000/api/books', { params: { price: `${min},${max}` } });
            //   };
            //   const filtred = await getBooks();
            //   console.log(filtred.data);
            //   dispatch(putBooks(filtred.data));
            // })();
          }}
        />
      </Filter>
      <Filter title="Sort by price" >
        <div className="slider">
        </div>
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
  .checkBox {
    margin-right: 10px;
    height: 24px;
    width: 24px;
  }
  /* .slider {
    position: absolute;
    width: 413px;
    height: 151px;
    left: 0px;
    top: 60px;
    background: #f0f0f0;
    border-radius: 16px;
    z-index: 2;

  } */
`;
const Genre = styled.div`
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
`;
