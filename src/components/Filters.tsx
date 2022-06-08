import React, { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getGenres } from '../api/genres';
import { useAppSelector } from '../store/hooks';
import { putGenres } from '../store/reducers/genre';
import Button from './Button';
import Filter from './Filter';

type Props = {};

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

  type Id = {
    id: string;
  }

  const sendedArray: Id[] = [];

  const genres = useAppSelector((state) => state.genreSlice.genre);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    const id: any = e.target.id;

    if (!sendedArray.includes(id)) {
      sendedArray.push(id);
    } else {
      const index = sendedArray.findIndex((id) => id);
      sendedArray.splice(index - 1, 1);
    }

    console.log('SENDed Genres >>> ', sendedArray);
  };

  return (
    <Body>
      <Filter title="Genre">
        { genres ? <div className="genre-list">
          { genres.map((genre) =>
            <Genre key={genre.id}>
              <input type="checkbox" className="checkBox" onChange={handleSelect} id={`${genre.id}`}/>
              <span>{genre.genre}</span>
            </Genre>,
          )}
          <Button title="Accept"/>
        </div> : null }
      </Filter>
      <Filter title="Price" ></Filter>
      <Filter title="Sort by price" ></Filter>
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
    background-color: #e6e6e6;
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
