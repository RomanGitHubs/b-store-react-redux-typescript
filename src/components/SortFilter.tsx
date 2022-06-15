import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Book } from '../models/book';
import { putBooks } from '../store/reducers/book';
import { putSort } from '../store/reducers/sort';

const Sort: React.FC = (props) => {
  const dispatch = useDispatch();

  const handlerChange = (e: any) => {
    console.log(e.target.value);
    (async () => {
      try {
        const getBooks = (): Promise<AxiosResponse<Book[]>> => {
          return axios.create().get('http://localhost:5000/api/books', { params: { sort: e.target.value } });
        };
        const filtred = await getBooks();
        console.log(filtred.data);
        dispatch(putBooks(filtred.data));
        dispatch(putSort(e.target.value));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  };
  return (
    <Body >
      <Filter className='filter'>
        <input id="radio-1" name="radio" type="radio" value="price" onChange={handlerChange}/>
        <label htmlFor="radio-1">Price</label>
      </Filter>
      <Filter className='filter'>
        <input id="radio-2" name="radio" type="radio" value="title" onChange={handlerChange}/>
        <label htmlFor="radio-2">Name</label>
      </Filter>
      <Filter className='filter'>
        <input id="radio-3" name="radio" type="radio" value="author" onChange={handlerChange}/>
        <label htmlFor="radio-3">Author name</label>
      </Filter>
      <Filter className='filter'>
        <input id="radio-4" name="radio" type="radio" value="rating" onChange={handlerChange}/>
        <label htmlFor="radio-4">Rating</label>
      </Filter>
      <Filter className='filter'>
        <input id="radio-5" name="radio" type="radio" value="date" onChange={handlerChange}/>
        <label htmlFor="radio-5">Date of issue</label>
      </Filter>
    </Body>
  );
};

export default Sort;

const Body = styled.div`
  display: flex;
  width: 165px;
  background: #f0f0f0;
  border-radius: 16px;
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 2;
  flex-direction: column;
  text-align: start;
  gap: 12px;
  padding: 16px;
`;

const Filter = styled.div`

  &.filter input[type=radio] {
    display: none;
  }

  &.filter label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #B9BAC3;
    cursor: pointer;
  }

  &.filter input[type=radio]:checked + label {
    color: #344966;
  } 

  &.filter label:hover {
    color: #344966;
  }

`;
