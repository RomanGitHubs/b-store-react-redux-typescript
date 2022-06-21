import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bannerBooks from '../assets/banner-books.png';
import bannerGirl from '../assets/banner-girl.png';

type Props = {};

const Banner:React.FC<Props> = (props) => {
  return (
    <Body>
      <Books />
      <Content>
        <TextArea>
          <Title>Build your library with us</Title>
          <Text>Buy two books and<br/>get one for free</Text>
          <Links to='/catalog'>Choose a book</Links>
        </TextArea>
        <img src={bannerGirl} />
      </Content>

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

const Books = styled.div`
  background-image: url(${bannerBooks});
  background-size:cover;
  position: absolute;
  z-index: 2;
  border-radius: 16px;

  height: 265.72px;
  width: 542px;
  left: 0px;
  top: 135px;
`;

const Content = styled.div`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 1080px;
  z-index: 3;
  margin: 0 auto;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 0;
  margin-bottom: 10px;
  z-index: 3;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #344966;
  margin: 0;
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

export default Banner;
