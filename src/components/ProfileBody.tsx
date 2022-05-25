import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import userPhoto from '../assets/user-photo.svg';
import FormUserField from './FormUserField';
import userIco from '../assets/user-ico.svg';
import mailIco from '../assets/mail-ico.svg';
import hideIco from '../assets/hide-ico.svg';
import btnPhoto from '../assets/button-photo.svg';
import InputForm from './InputForm';
import { getUser, User } from '../API/users';

type Props = {

};

const LoginBody: React.FC<Props> = (props) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    (async () => {
      try {
        await new Promise(r => {
          setTimeout(() => r(1), 2000);
        });
        const user = await getUser();
        setUser(user.data);
      } catch (e: any) {
        console.log('er>', e);
      }
    })();
  }, []);
  return (
    <Body>
      <PhotoWrapper>
        <Photo src={userPhoto} />
        <PhotoBtn />
      </PhotoWrapper>

      <Wrapper>
        <Information>
          <PersonalInformation>

            <FormHeader>
              <FormTitle>Personal information</FormTitle>
              <ChangeInformation >Change information</ChangeInformation>
            </FormHeader>

            <FormUserField label={'Your name'} placeholder={'Guy Hawkins'} src={userIco}  onChange={() => {}}
              value={user ? user.name : ''}/>
            <FormUserField
              label={'Your email'}
              placeholder="kenzi.lawson@example.com"
              src={mailIco}
              onChange={() => {}}
              value={user ? user.email : undefined}
            />

          </PersonalInformation>

          <PasswordInformation>
            <FormHeader>
              <FormTitle>Personal information</FormTitle>
              <ChangeInformation >Change information</ChangeInformation>
            </FormHeader>

            <FormUserField label={'Your password'} placeholder={'************'} src={hideIco}  onChange={() => {}}
              value=""/>

            <InputForm placeholder={'New password'} label={'Enter your password'} src={hideIco} />
            <InputForm placeholder={'Password replay'} label={'Repeat your password without errors'} src={hideIco} />

          </PasswordInformation>
        </Information >
      </Wrapper>

      <EmptyBlock>
      </EmptyBlock>

    </Body>
  );
};

export default LoginBody;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px calc(calc(calc(1%) - 9px) * 15)  110px calc(calc(calc(1%) - 9px) * 15);
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

const Information = styled.div`
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
