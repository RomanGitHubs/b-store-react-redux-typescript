import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { putSort, putOrder } from '../store/reducers/book';
import orderArrow from '../assets/arrows.png';

const Sort: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const { selectedSort, selectedOrder } = useAppSelector((state) => state.bookSlice);

  const handlerChange = (e: any) => {
    console.log(e.target.value);
    (async () => {
      try {
        dispatch(putSort(e.target.value));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  };

  const handlerOrder = (e: any) => {
    if (selectedOrder == 'DESC') dispatch(putOrder('ASC'));
    if (selectedOrder == 'ASC') dispatch(putOrder('DESC'));
  };

  return (
    <Body >
      <Filter className='filter'>
        <input id="radio-1" name="radio" type="radio" value="price" onChange={handlerChange} checked={selectedSort === 'price'}/>
        <label htmlFor="radio-1">Price</label>
        {selectedSort === 'price' ? <img className='arrows' src={orderArrow} onClick={handlerOrder}/> : null}
      </Filter>
      <Filter className='filter'>
        <input id="radio-2" name="radio" type="radio" value="title" onChange={handlerChange} checked={selectedSort === 'title'}/>
        <label htmlFor="radio-2">Title</label>
        {selectedSort === 'title' ? <img className='arrows' src={orderArrow} onClick={handlerOrder}/> : null}
      </Filter>
      <Filter className='filter'>
        <input id="radio-3" name="radio" type="radio" value="author" onChange={handlerChange} checked={selectedSort === 'author'}/>
        <label htmlFor="radio-3">Author name</label>
        {selectedSort === 'author' ? <img className='arrows' src={orderArrow} onClick={handlerOrder}/> : null}
      </Filter>
      <Filter className='filter'>
        <input id="radio-4" name="radio" type="radio" value="rating" onChange={handlerChange} checked={selectedSort === 'rating'}/>
        <label htmlFor="radio-4">Rating</label>
        {selectedSort === 'rating' ? <img className='arrows' src={orderArrow} onClick={handlerOrder}/> : null}
      </Filter>
      <Filter className='filter'>
        <input id="radio-5" name="radio" type="radio" value="date" onChange={handlerChange} checked={selectedSort === 'date'}/>
        <label htmlFor="radio-5">Date of issue</label>
        {selectedSort === 'date' ? <img className='arrows' src={orderArrow} onClick={handlerOrder}/> : null}
      </Filter>
    </Body>
  );
};

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

  display: flex;
  justify-content: space-between;

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
    color: #a3a3a3;
    cursor: pointer;
  }

  &.filter input[type=radio]:checked + label {
    color: #344966;
  } 

  &.filter label:hover {
    color: #344966;
  }

  .arrows {
    width: 23px;
    height: 23px;
  }
`;

export default Sort;
