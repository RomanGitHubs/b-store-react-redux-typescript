import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGenres } from '../api/genres';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { putGenr, putPrice, putBooks } from '../store/reducers/book';
import Filter from './Filter';
import { Genre } from '../models/genre';
import Slider from './Slider';
import SortFilter from './SortFilter';
import emptyChBox from '../assets/checkbox-empty.svg';
import fillChBox from '../assets/checkbox-checked.svg';
import { getBooks } from '../api/books';
import { useSearchParams } from 'react-router-dom';

type Props = {
  minPrice: number;
  maxPrice: number;
};

const Filters: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [loadedGenres, setLoadGenre] = useState<Genre[]>([]);

  const {
    selectedGenres,
    selectedMinPrice,
    selectedMaxPrice,
    selectedSort,
  } = useAppSelector((state) => state.bookSlice);

  const {
    minPrice,
    maxPrice,
  } = useAppSelector((state) => state.bookSlice);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getGenres();
        console.log('Load Genres >>> ', genres.data);

        setLoadGenre(genres.data);
        console.log('Load Genres >>> ', loadedGenres);
        // dispatch(putGenres(genres.data));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  }, []);

  const handleSelectGenre = (genre: Genre) => {
    const tempArray = selectedGenres.slice();
    const findIndex = tempArray.findIndex((item) => item === genre.id);
    if (tempArray[findIndex]) {
      console.log('Find >>> ', findIndex);
      tempArray.splice(findIndex, 1);
    } else {
      tempArray.push(genre.id);
    }

    dispatch(putGenr(tempArray));

    console.log('SENDed Genres >>> ', tempArray);
  };

  useEffect(() => {
    (async () => {
      try {
        const params = {
          genre: selectedGenres,
          minPrice: selectedMinPrice,
          maxPrice: selectedMaxPrice,
          sort: selectedSort,
        };
        console.log('Sended params >>> ', params);
        const filtred = await getBooks(params);
        dispatch(putBooks(filtred.data));

        console.log('Filtred books >>> ', filtred.data.books);
      } catch (e: any) {
        console.error('Error >>> ', e);
      }
    })();
  }, [selectedGenres, selectedMinPrice, selectedMaxPrice, selectedSort]);

  const handleChangePrice = ({ min, max }: { min: number; max: number }) => {
    console.log(`min = ${min}, max = ${max}`);
    const price = {
      min: min / 100,
      max: max / 100,
    };
    dispatch(putPrice(price));
  };

  let [searchParams, setSearchParams] = useSearchParams();


  return (
    <Body>
      <Filter title="Genre">
        {loadedGenres && (
          <div className="genre-list">
            {loadedGenres.map((genre) => (
              <Genres key={genre.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedGenres.includes(genre.id)}
                  onChange={() => {
                    handleSelectGenre(genre);
                  }}
                />

                <span className="fake-checkbox" />

                {genre.genre}
              </Genres>
            ))}
          </div>
        )}
      </Filter>

      <Filter title="Price">
        <Slider
          min={minPrice}
          max={maxPrice}
          onChange={handleChangePrice}
        />
      </Filter>
      <Filter title='Sort by' sort={selectedSort}>
        <SortFilter />
      </Filter>
    </Body>
  );
};

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

export default Filters;
