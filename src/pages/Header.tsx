import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo-header.svg';
import searchIco from '../assets/search-ico.svg';
import cartIco from '../assets/button-cart.svg';
import favoriteIco from '../assets/button-favorite.svg';
import userIco from '../assets/button_user.svg';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/reducers/user';

type Props = {
};

const Header: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    navigate('/');
  };

  const user = useAppSelector((state) => state.userSlice.user);

  const goHome = () => {
    navigate('/');
  };

  return (
    <Head>
      <Logo onClick={goHome}/>
      <Center>
        <InputName>Catalog</InputName>
        <InputWrapper className="input-wrapper">
          <InputIco src={searchIco}/>
          <Input placeholder="Search"/>
        </InputWrapper>
      </Center>

      { user ? (
        <Links>
          <LinkCart to={'/cart'} />
          <LinkFavorite onClick={handleLogout}/>
          <LinkUser to={'/profile'} />
        </Links>
      ) : (
        <Links>
          <LinkSign to={'/signup'}>Sign Up</LinkSign>
          <LinkLog to={'/login'}>Log In</LinkLog>
        </Links>
      )}

    </Head>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: calc((1.3% - 9px) * 8);
  margin-right: calc((1.3% - 9px) * 8);
  /* margin-right: auto;
  margin-left: auto; */
  align-items: center;
`;

const Logo = styled.button`
  display: flex;
  min-width: 88.5px;
  min-height: 46px;
  background-image: url(${logo});
  background-size: cover;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 782px;
  width: 100%;
`;

const InputName = styled.div`
  display: flex;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  justify-content: center;
  width: 100%;
  max-width: 152px;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const InputIco = styled.img`
  display: flex;
  position: absolute;
  top: 20px;
  left: 24px;
`;

const Input = styled.input`
  height: 24px;
  width: 100%;
  padding: 20px 20px 20px 64px;
  border: none;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  color: black;
  background: #F0F4EF;
  border-radius: 16px;
  outline: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 231px;
  min-width: 210px;
  margin-left: 51px; 
`;

const LinkLog = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 44px;
  cursor: pointer;
  background: #344966;
  text-align: center;
  border-radius: 16px;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.75px;
  color: #F0F4EF;
  text-decoration: none;
`;

const LinkSign = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 16px;
  border: 2px solid #344966;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.75px;
  color: #344966;
  text-decoration: none;
`;

const LinkCart = styled(Link)`
  background-image: url(${cartIco});
  background-size: cover;
  width: 48px;
  height: 48px;
`;

const LinkFavorite = styled.button`
  background-image: url(${favoriteIco});
  background-size: cover;
  background-color: white;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
`;

const LinkUser = styled(Link)`
  background-image: url(${userIco});
  background-size: cover;
  width: 48px;
  height: 48px;
`;

export default Header;
