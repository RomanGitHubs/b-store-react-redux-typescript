import React from 'react';
import styled from 'styled-components';
import mainPicture from '../assets/reg-chel.jpg';
import InputForm from './InputForm'
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';

type Props = {

};

const state = {
	mailIco,
	hideIco,
	placeholderEmail: 'Email',
	placeholderPassword: 'Password',
	labelEmail: 'Enter your email',
	labelPassword: 'Enter your password',
}

const LoginBody:React.FC<Props> = (props) => {

  return (
    <Body>
      <Form>
          <FormTitle>Log In</FormTitle>
          <InputForm src={state.mailIco} placeholder={state.placeholderEmail} label={state.labelEmail}/>
					<InputForm src={state.hideIco} placeholder={state.placeholderPassword} label={state.labelPassword}/>
          <Link href="#">Log in</Link>
      </Form>

      <Image src={mainPicture}/>
  </Body>
  )
}

export default LoginBody;

const Body = styled.div `
	display: flex;
	justify-content: space-between;
	margin: 90px calc(calc(calc(1%) - 9px) * 15) 80px;
`

const Form = styled.form `
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 60px;
	color: #0D1821;
`
const FormTitle = styled.h2 `
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 60px;
	color: #0D1821;
	margin: 0;
	margin-bottom: 60px;
`

const Image = styled.img `
	display: flex;
	max-width: 612px;
	max-height: 522px;
	width: 50%;
	height: 50%;
`
const Link = styled.a `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 44px;
  min-width: 173px;
  cursor: pointer;
  background: #344966;
	margin-top: 60px;

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
`