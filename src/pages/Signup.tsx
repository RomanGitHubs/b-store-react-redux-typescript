import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainPicture from '../assets/reg-chel.jpg';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import { registerUser } from '../API/users';
import { putUser } from '../store/redusers/user';
import { useAppDispatch } from '../store/hooks';

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

const Signup: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      replay: '',
    },
  });

  const onSubmit = (data: Data) => {
    (async () => {
      try {
        if (data.password !== data.replay) return;
        const { replay, ...rest } = data;
        const response: any = await registerUser(rest);
        dispatch(putUser(response.data));
        console.log('RESPONSE', response);
        navigate('/');
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  };

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Sign Up</FormTitle>

        <Controller control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper>
              <InputWrapper>
                <FormIco src={state.mailIco}/>
                <Input
                  type="text"
                  id="input-email"
                  placeholder={state.placeholderEmail}
                  onChange={(value) => onChange(value)}
                  value={value}
                />
              </InputWrapper>
              <InputLabel className="form-label">{state.labelEmail}</InputLabel>
            </FormWrapper>
          )}
          name="email"
          rules={{ required: true }}
        />

        <Controller control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper>
              <InputWrapper>
                <FormIco src={state.hideIco}/>
                <Input
                  type="text"
                  id="input-email"
                  placeholder={state.placeholderPassword}
                  onChange={(value) => onChange(value)}
                  value={value}
                />
              </InputWrapper>
              <InputLabel className="form-label">{state.labelPassword}</InputLabel>
            </FormWrapper>
          )}
          name="password"
          rules={{ required: true }}
        />

        <Controller control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper>
              <InputWrapper>
                <FormIco src={state.hideIco}/>
                <Input
                  type="text"
                  id="input-email"
                  placeholder={state.placeholderPassword}
                  onChange={(value) => onChange(value)}
                  value={value}
                />
              </InputWrapper>
              <InputLabel className="form-label">{state.labelReplay}</InputLabel>
            </FormWrapper>
          )}
          name="replay"
          rules={{ required: true }}
        />

        <Button type="submit">Sing Up</Button>

      </Form>
      <Image src={mainPicture}/>
    </Body>
  );
};

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

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  // width: 413px;
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
