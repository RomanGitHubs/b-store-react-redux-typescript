import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { putUser } from '../store/reducers/user';
import { useAppDispatch } from '../store/hooks';
import { registerUser } from '../api/users';
import mainPicture from '../assets/reg-chel.jpg';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import clearCross from '../assets/close-cross-input.svg';

const state = {
  mailIco,
  hideIco,
  placeholderEmail: 'Email',
  placeholderPassword: 'Password',
  placeholderPasswordReplay: 'Password replay',
  labelEmail: 'Enter your email',
  labelPassword: 'Enter your password',
  labelReplay: 'Repeat your password without errors',
};

type Props = {};
type Data = {
  email: string;
  password: string;
  replay: string;
};

const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&*(){}:;<>,.?~_=|-]).{4,16}$/;
const warningEmail = {
  email: 'Wrong email',
  max: 'Email too long, get another',
  required: 'Need email',
};
const warningPassword = {
  matches: 'Password must contain at least 1 lowercase letter, at least 1 uppercase letter, and 1 special character',
  min: 'Password shoud be min 6 charactes',
  required: 'Need password',
};

const signupSchema = yup.object().shape({
  email: yup.string().email(warningEmail.email).max(30, warningEmail.max)
    .required(warningEmail.required),
  password: yup.string().matches(regexPassword, warningPassword.matches)
    .min(6, warningPassword.min).required(warningPassword.required),
  replay: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Signup: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errorState, setError] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      replay: '',
    },
  });

  const onSubmit = async (data: Data) => {
    try {
      if (data.password !== data.replay) return;
      const { replay, ...rest } = data;
      const response = await registerUser(rest);
      dispatch(putUser(response.data.user));
      console.log('RESPONSE', response);
      navigate('/');
    } catch (e: any) {
      console.error('Error >>> ', e.response.data);
    }
  };

  const handleRequest = (e: React.FocusEventHandler<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Sign Up</FormTitle>
        <FormWrapper>
          <InputWrapper errorState>
            <FormIco src={state.mailIco}/>
            <input className='form__input'
              type="text"
              id="input-email"
              placeholder={state.placeholderEmail}
              {...register('email')}
              // onBlur={handleRequest}

            />
          </InputWrapper>
          <InputLabel className="form-label" >{errors.email ? <P>{errors.email.message}</P> : state.labelEmail }</InputLabel>
        </FormWrapper>

        <FormWrapper>
          <InputWrapper errorState>
            <FormIco src={state.hideIco}/>
            <Input
              type="text"
              id="input-email"
              placeholder={state.placeholderPassword}
              {...register('password')}
            />
          </InputWrapper>
          <InputLabel className="form-label">{errors.password ? <P>{errors.password.message}</P> : state.labelPassword }</InputLabel>
        </FormWrapper>

        <FormWrapper>
          <InputWrapper errorState>
            <FormIco src={state.hideIco}/>
            <Input
              type="text"
              id="input-email"
              placeholder={state.placeholderPassword}
              {...register('replay')}
            />
          </InputWrapper>
          <InputLabel className="form-label">{errors.replay ? <P>{errors.replay.message}</P> : state.labelReplay }</InputLabel>
        </FormWrapper>

        <Button type="submit" className="test">Sing Up</Button>

      </Form>
      <Image src={mainPicture}/>
    </Body>
  );
};

type StylesProps = {
  error?: boolean;
  errorState?: boolean;
}

export default Signup;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px calc((1.3% - 9px) * 8) 80px;
`;

const Form = styled.form`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  max-width: 413px;
  width: 100%;
`;

const FormTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 0;
  margin-bottom: 60px;
`;

const Image = styled.img`
display: flex;
max-width: 612px;
max-height: 522px;
height: 45.7%;
min-width: 390px;
padding-left:20px;
`;

const Button = styled.button`
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
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 413px;
  width: 100%;

`;

const InputWrapper = styled.div<StylesProps>`
  display: flex;
  position: relative;
  width: 100%;
  // width: 413px;

  .form__input{
    ${(p) => {
    if (p.errorState) {
      return css`
        border: 2px solid red;
      `;
    }
      return css`
        border: none;
      `;
  }}
  
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  border: none;
  padding: 18px 18px 18px 64px;
  outline: none;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: black;

  :focus {
    border: 2px solid #3d5475;
  }

}
`;

const FormIco = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 2;
  top: 18px;
  left:24px;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  border: none;
  padding: 18px 18px 18px 64px;
  outline: none;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: black;

  :focus {
    border: 2px solid #344966;
  }

`;

const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  color: #344966;
  margin-top: 9px;
`;

const P = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  color: #C30052;
  margin: 0;
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 26px;
  width: 14px;
  height: 14px;
  background-image: url(${clearCross});
  border: none;
`;
