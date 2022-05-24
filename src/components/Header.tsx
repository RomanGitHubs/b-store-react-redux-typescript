import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logo from '../assets/logo-header.svg';
import searchIco from '../assets/search-ico.svg';

type Props = {
  link: string;
};

const Header: React.FC<Props> = (props) => {
  return (
    <Head>
      <Logo to={'/'} />
      <Center>
        <InputName>Catalog</InputName>
        <InputWrapper className="input-wrapper">
          <InputIco src={searchIco}/>
          <Input placeholder="Search"/>
        </InputWrapper>
      </Center>
      <Links to={props.link}>Log In / Sign Up</Links>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: calc(calc(calc(1%) - 9px) * 15);
  margin-right: calc(calc(calc(1%) - 9px) * 15);
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  width: 88.5px;
  height: 46px;
  background-image: url(${logo});
  background-size: cover;
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
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
  padding: 0 43px 0 43px;
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

const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 44px;
  min-width: 173px;
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
