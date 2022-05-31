import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import userPhoto from '../assets/user-photo.svg';
import FormUserField from '../components/FormUserField';
import userIco from '../assets/user-ico.svg';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import btnPhoto from '../assets/button-photo.svg';
import InputForm from '../components/InputForm';
import { getUser, updateUser } from '../API/users';
import { User } from '../store/models/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { putUser } from '../store/redusers/user';

type Props = {};

type Data = {
  name?: string,
  email?: string,
  password?: string,
  newPassword?: string,
  newPasswordReplay?: string,
};

const Profile: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const state = {
    mailIco,
    hideIco,
    placeholderEmail: 'New password',
    placeholderPassword: 'Password replay',
    labelEmail: 'Enter your password',
    labelPassword: 'Repeat your password without errors',
  };

  const user = useAppSelector((state) => state.userSlice.user);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
      newPassword: '',
      newPasswordReplay: '',
    },
  });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = useAppSelector((state) => state.userSlice.user);
  //     } catch (e: any) {
  //       console.error('Error >>> ', e.response.data.message);
  //     }
  //   })();
  // }, []);

  console.log(user);

  const [updatable, setUpdatable] = useState(true);

  const handleChange = (e: any) => {
    e.preventDefault();
    setUpdatable(!updatable);
  };

  const onSubmit = (data: Data) => {
    (async () => {
      try {
        if (data.newPassword === data.newPasswordReplay && data.password) {
          const { newPasswordReplay, ...rest } = data;
          console.log('Submite', rest);
          const response: any = await updateUser(rest);
          dispatch(putUser(response.data));
          console.log('RESPONSE', response);
          // navigate('/');
        } else {
          console.log('Not submite');
        }
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  };
  

  return (
    <Body>
      <PhotoWrapper>
        <Photo src={userPhoto} />
        <PhotoBtn />
      </PhotoWrapper>

      <Wrapper>
        <Information onSubmit={handleSubmit(onSubmit)}>
          <PersonalInformation>

            <FormHeader>
              <FormTitle>Personal information</FormTitle>
              <ChangeInformation onClick={(e) => handleChange(e)}>
                Change information</ChangeInformation>
            </FormHeader>

            <Controller control={control}
              render={({ field: { onChange, value } }) => (
                <FormUserField
                  label={'Your name'}
                  placeholder={'Enter your name'}
                  value={value}
                  src={userIco}
                  onChange={onChange}
                  disabled={updatable}
                />
              )}
              name="name"
              rules={{ required: false }}
            />
            <Controller control={control}
              render={({ field: { onChange, value } }) => (
                <FormUserField
                  label={'Your email'}
                  value={value}
                  placeholder={'Enter your name'}
                  src={mailIco}
                  onChange={onChange}
                  disabled={updatable}
                />
              )}
              name="email"
              rules={{ required: true }}
            />
          </PersonalInformation>

          <PasswordInformation>
            <FormHeader>
              <FormTitle>Password information</FormTitle>
              {/* <ChangeInformation >Change information</ChangeInformation> */}
            </FormHeader>

            <Controller control={control}
              render={({ field: { onChange, value } }) => (
                <FormUserField
                  label={'Your password'}
                  placeholder={'************'}
                  src={hideIco}
                  onChange={onChange}
                  disabled={updatable}
                  value={value}
                />
              )}
              name="password"
              rules={{ required: false }}
            />
            {updatable ? null : (
              <>
                <Controller control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormWrapper>
                      <InputWrapper>
                        <FormIco src={state.hideIco}/>
                        <Input
                          type="text"
                          id="input-email"
                          placeholder={state.placeholderEmail}
                          onChange={onChange}
                          value={value}
                          disabled={updatable}
                        />
                      </InputWrapper>
                      <InputLabel className="form-label">{state.labelEmail}</InputLabel>
                    </FormWrapper>
                  )}
                  name="newPassword"
                  rules={{ required: false }}
                />

                <Controller control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormWrapper>
                      <InputWrapper>
                        <FormIco src={state.hideIco}/>
                        <Input
                          type="text"
                          id="input-password"
                          placeholder={state.placeholderPassword}
                          onChange={onChange}
                          value={value}
                          disabled={updatable}
                        />
                      </InputWrapper>
                      <InputLabel className="form-label">{state.labelPassword}</InputLabel>
                    </FormWrapper>
                  )}
                  name="newPasswordReplay"
                  rules={{ required: false }}
                />
                <Confirm>Confirm</Confirm>
              </>)}
          </PasswordInformation>
        </Information >
      </Wrapper>

      <EmptyBlock>
      </EmptyBlock>

    </Body>
  );
};

export default Profile;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px calc((1.3% - 9px) * 8) 110px ;
`;

const PhotoWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  position: relative;
`;

const Photo = styled.img`
  max-width: 305px;
  max-height:305px;
`;

const PhotoBtn = styled.button`
  position: absolute;
  top: 237px;
  left: 237px;
  background-image: url(${btnPhoto});
  background-size: cover;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 24px;
`;

const Wrapper = styled.div`
  display:flex;
  justify-content: end;
  width: 650px;

`;

const Information = styled.form`
  display: flex;
  flex-direction: column;
  width: 522px;
  justify-content: end;

`;

const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
`;

const FormTitle = styled.div`
  display: flex;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
`;

const ChangeInformation = styled.button`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  text-decoration-line: underline;
  color: #8D9F4F;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Accept = styled.button`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  text-decoration-line: underline;
  color: #8D9F4F;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const PasswordInformation = styled.div`
  display: flex;
  width: 522px;
  flex-direction: column;
  margin-top: 40px;
`;

const EmptyBlock = styled.div`
  display: flex;
  width: 305px;
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
  color: #344966;
;
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

const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
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

  margin-top: 80px;
`;
