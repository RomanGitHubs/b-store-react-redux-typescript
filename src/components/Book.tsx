import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../store/hooks';
import Button from './Button';
import favoriteButton from '../assets/button-favorite_unpressed.svg';
import favoriteButtonPressed from '../assets/button-favorite_pressed.svg';
import newBook from '../assets/new-book.png';
import bestsellerBook from '../assets/bestseller-book.png';
import star from '../assets/star.svg';
import starFilled from '../assets/star-filled.svg';

type Props = {
  id?: number;
  cover?: string;
  title?: string;
  author?: string;
  rating?: number;
  price?: string;
  new?: boolean;
  bestsaller?: boolean;
  isFavorite?: boolean;
  available?: boolean;
};

const Book: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.userSlice.user);
  console.log(props.available);

  // const handleAddCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   console.log(e.target);
  //   console.log('Added to cart');
  // };

  return (
    <StyledContainer
      cover={props.cover}
      isFavorite={props.isFavorite}
      likeIco={favoriteButton}
      unlikeIco={favoriteButtonPressed}
      newBook={newBook}
      bestsellerBook={bestsellerBook}
      star={star}
      starFilled={starFilled}
    >
      <div className="book__cover">
        { user ? <button className="book__favorite"></button> : null }
        <div className="book__attributies">
          { props.new ? <img className='book__attributies-new' src={newBook}></img> : null}
          { props.bestsaller ? <img className='book__attributies-best' src={bestsellerBook}></img> : null}
        </div>
      </div>
      <p className="book__title">{props.title}</p>
      <p className="book__author">{props.author}</p>
      <div className="book__rating">
        <div className="book__rating-stars">

          { props.rating === 0
            ? <>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
            </> : null}
          { props.rating === 1
            ? <>
              <img className="star" src={starFilled}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
            </> : null}
          { props.rating === 2
            ? <>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
            </> : null}
          { props.rating === 3
            ? <>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={star}></img>
              <img className="star" src={star}></img>
            </> : null}
          { props.rating === 4
            ? <>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={star}></img>
            </> : null}
          { props.rating === 5
            ? <>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
              <img className="star" src={starFilled}></img>
            </> : null}

        </div>
        <div className="book__rating-number">{props.rating}.0</div>
      </div>
      { props.available === true
        ? <Button
          title={`$${props.price}USD`}
          type='catalog'
          id={props.id}
        /> : <Button
          title={'Not available'}
          type='not-availble'
        /> }

    </StyledContainer>
  );
};

type StylesProps = {
  cover?: string;
  isFavorite?: boolean;
  likeIco?: string;
  unlikeIco?: string;
  isVisible?: boolean;
  newBook?: string;
  bestsellerBook?: string;
  star?: string;
  starFilled?: string;
};

const StyledContainer = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 663px;

  .book {
    &__cover {
      display: flex;
      width: 305px;
      height: 448px;
      background: url(${(props) => props.cover});
      background-size: cover;
      border-radius: 16px;
      margin-bottom: 30px;
      position: relative;

    }
    &__favorite{
      position: absolute;
      display: flex;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      border-radius: 24px;
      top: 20px;
      left: 20px; 
      
    ${(p) => {
      if (p.isFavorite) {
        return css`
          background: url(${p.likeIco});
        `;
      }
        return css`
        background: url(${p.unlikeIco});
        `;
    }}
      background-size: cover;
    }
    &__attributies {
      display: flex;
      flex-direction: column;
      height: 70px;
      width: 175px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      justify-content: flex-end;
      

      &-new{
        width: 132px;
        height: 30px;
      }
      &-best{
        width: 175px;
        height: 30px;
        margin-top: 10px;
      }
    }
    &__title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #344966;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
    }
    &__author {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #B9BAC4;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
    }
    &__rating {
      display: flex;
      justify-content: space-between;
      width: 300px;
      height: 27px;
      margin: 20px 0;

      &-stars {
        display: flex;
        width: 250px;
        height: 26px;
        justify-content: space-between;


        .star {
          display: flex;
          width: 26px;
          height: 26px;
        }

        /* ${(p) => {
    if (p.isVisible) {
      return css`
            display: block;
          `;
    }
    return css`
          display: none;
        `;
  }} */
      }
      &-number{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #B9BAC4;
        text-align: center;
        align-items: center;
      }
    }
  }



/* 
      ${(p) => {
    if (p.isVisible) {
      return css`
            display: block;
          `;
    }
    return css`
          display: none;
        `;
  }}

  display: ${(p) => (p.isVisible ? 'block' : 'none')};
  height: ${(p) => (p.isVisible ? '20px' : '50%')};
    } */
  
`;

export default Book;
