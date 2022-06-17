import { Link } from 'react-router-dom';
import styled from 'styled-components';
import castle from '../assets/castle2.png';
import witch from '../assets/witch.svg';

type Props = {};

const AuthBanner:React.FC<Props> = (props) => {
  return (
    <Body>
      <Wrapper>
        <Castle src={castle}/>
        <Content>
          <Image src ={witch}/>
          <TextArea>
            <Title>Authorize now</Title>
            <Text>
              Authorize now and discover the fabulous<br/>world of books
            </Text>
            <Links to='/login'>Log In / Sign Up</Links>
          </TextArea>
        </Content>
      </Wrapper>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display:flex;
  margin: 0 auto;
  align-items:center;
  justify-content: space-between;
  width: 1080px;
`;

const Castle = styled.img`
  max-width: 521px;
  max-height: 462px;
  padding-bottom: 62px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const Image = styled.img`
  display: flex;
  position: absolute; 
  top: -62px;
  right: 0px;
  z-index: 2;

`;

const TextArea = styled.div`
  z-index: 3;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
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
  z-index: 3;
  margin-top: 50px;
`;

export default AuthBanner;
