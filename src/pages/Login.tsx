import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import { loginUser } from '../api/users';
import { useAppDispatch } from '../store/hooks';
import { putUser } from '../store/reducers/user';
import mainPicture from '../assets/reg-chel.jpg';

const constans = {
  mailIco,
  hideIco,
  placeholderEmail: 'Email',
  placeholderPassword: 'Password',
  labelEmail: 'Enter your email',
  labelPassword: 'Enter your password',
};

type Props = {};
type Data = {
  email: string;
  password: string;
};

interface LocationState {
  from: {
    pathname: string,
  };
}

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
const loginSchema = yup.object({
  email: yup.string().email(warningEmail.email).required(warningEmail.required),
  password: yup.string().required(warningPassword.required),
});

const Login: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const from = location.state as LocationState || { from: { pathname: '/' } };

  console.log(from);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: Data) => {
    try {
      const response = await loginUser(data);
      dispatch(putUser(response.data.user));
      console.log('RESPONSE', response);

      navigate(from.from.pathname, { replace: true });
    } catch (e: any) {
      console.error('Error >>> ', e.response.data);
    }
  };

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Log In</FormTitle>
        <Controller control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper>
              <InputWrapper errorState={!!errors.email}>
                <FormIco src={constans.mailIco} />
                <input className='form__input'
                  type="text"
                  id="input-email"
                  placeholder={constans.placeholderEmail}
                  value={value}
                  {...register('email')}

                />
              </InputWrapper>
              <InputLabel className="form-label">{errors.email ? <ErrMessage>{errors.email.message}</ErrMessage> : constans.labelEmail }</InputLabel>
            </FormWrapper>
          )}
          name="email"
          rules={{ required: true }}
        />

        <Controller control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper>
              <InputWrapper errorState={!!errors.password}>
                <FormIco src={constans.hideIco} />
                <input className='form__input'
                  type="text"
                  id="input-password"
                  placeholder={constans.placeholderPassword}
                  // onChange={onChange}
                  value={value}
                  {...register('password')}
                />
              </InputWrapper>
              <InputLabel className="form-label">{errors.password ? <ErrMessage>{errors.password.message}</ErrMessage> : constans.labelPassword }</InputLabel>
            </FormWrapper>
          )}
          name="password"
          rules={{ required: true }}
        />

        <Button type="submit">Log in</Button>
      </Form>

      <Image src={mainPicture} />
    </Body>
  );
};

type StylesProps = {
  errorState?: boolean;
}

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

  .form__input{
    ${(p) => {
    if (p.errorState) {
      return css`
        border: 2px solid red;
      `;
    } else {
      return css`
        border: none;
      `;
    }}}
  
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
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

const ErrMessage = styled.p`
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

export default Login;
