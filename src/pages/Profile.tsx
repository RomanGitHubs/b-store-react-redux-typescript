import React, { useState } from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import FormUserField from '../components/FormUserField';
import userIco from '../assets/user-ico.svg';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import profileIco from '../assets/profile-ico.svg';
import btnPhoto from '../assets/button-photo.svg';
import { photoUser, updateUser } from '../API/users';

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
  // const navigate = useNavigate();

  const user = useAppSelector((state) => state.userSlice.user);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email,
      password: '',
      newPassword: '',
      newPasswordReplay: '',
    },
  });

  const [updatable, setUpdatable] = useState(true);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          setUpdatable(!updatable);
          // navigate('/profile');
        } else {
          console.log('Not submite');
        }
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  };
  const [file, setFile] = React.useState(new Blob());

  const handleUpload = async (event: any) => {
    try {
      const uploadFile = event.target.files[0];
      console.log(event.target);
      console.log(event.target.files);

      setFile(uploadFile);
      console.log(setFile(uploadFile));

      const toDataURL = (uploadFile: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(uploadFile);
      });

      toDataURL(uploadFile)
        .then(dataUrl => {
          console.log('RESULT:', dataUrl);
        })



      const dataUrl = await toDataURL(uploadFile);
      console.log('PAYLOAD:', dataUrl);

      const response = await photoUser({ file: dataUrl as string });
      console.log(response);

      setFile(uploadFile);

      console.log(file);

      photoUser(uploadFile);

      console.log('Photo send', uploadFile);
      console.log('uploadFile', dataUrl);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Body>

      <PhotoWrapper>
        <Photo src={ file ? URL.createObjectURL(file) : profileIco} />
        <PhotoBtn type='file' onChange={handleUpload}/>
      </PhotoWrapper>

      <Wrapper>
        <Information onSubmit={handleSubmit(onSubmit)}>
          <PersonalInformation>

            <FormHeader>
              <FormTitle>Personal information</FormTitle>
              <ChangeInformation onClick={handleChange}>
                Change information</ChangeInformation>
            </FormHeader>

            <Controller control={control}
              render={({ field: { onChange, value } }) => (
                <FormUserField
                  label="Your name"
                  placeholder="Enter your name"
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
                  label="Your email"
                  value={value}
                  placeholder="Enter your name"
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
                  label={!updatable ? 'Enter your password to confirm' : 'Old password'}
                  placeholder="************"
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
                        <FormIco src={hideIco}/>
                        <Input
                          type="text"
                          id="input-email"
                          placeholder="New password"
                          onChange={onChange}
                          value={value}
                          disabled={updatable}
                        />
                      </InputWrapper>
                      <InputLabel className="form-label">Enter your password</InputLabel>
                    </FormWrapper>
                  )}
                  name="newPassword"
                  rules={{ required: false }}
                />

                <Controller control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormWrapper>
                      <InputWrapper>
                        <FormIco src={hideIco}/>
                        <Input
                          type="text"
                          id="input-password"
                          placeholder="Password replay"
                          onChange={onChange}
                          value={value}
                          disabled={updatable}
                        />
                      </InputWrapper>
                      <InputLabel className="form-label">Repeat your password without errors</InputLabel>
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

const PhotoWrapper = styled.form`
  display: flex;
  border-radius: 16px;
  position: relative;
  background: #F0F4EF;
  width: 305px;
  height:305px;
`;

const Photo = styled.img`
  width: 305px;
  height: 305px;
`;

const PhotoBtn = styled.input`
  position: absolute;
  top: 237px;
  left: 237px;
  background-image: url(${btnPhoto});
  background-size: cover;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 24px;
  padding: 50px 0 0 0;
  box-sizing: border-box;
  cursor: pointer;
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
