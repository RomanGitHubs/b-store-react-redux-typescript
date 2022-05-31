import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo-footer.svg';
import map from '../assets/map.svg';

type Props = {};

const Footer: React.FC<Props> = (props) => {
  return (
    <FooterWrapper>
      <Foot>
        <FooterColumn>
          <Logo to={'/'}/>
          <Paragraph>tranthuy.nute@gmail.com</Paragraph>
          <Paragraph>(480) 555-0103</Paragraph>
        </FooterColumn>
        <FooterColumnLink>
          <Links to="/">Home Page</Links>
          <Links to="/catalog">Catalog</Links>
          <Links to="/profile">My Account</Links>
          <Links to="/cart">Cart</Links>
        </FooterColumnLink>
        <FooterColumn>
          <Paragraph>6391 Elgin St. Celina, Delaware 10299</Paragraph>
          <Map src={map} />
        </FooterColumn>
      </Foot>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #0D1821;
  margin-top: auto;
`;

const Foot = styled.div`
display: flex;
padding: 73px calc((1.3% - 9px) * 8);
justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterColumnLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  margin: 0 20px;
`;

const Logo = styled(Link)`
  width: 89px;
  height: 46px;
  margin-bottom: 40px;
  background-image: url(${logo})
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
  margin: 0 0 5px;
`;

const Map = styled.img`
  display: flex;
  max-width: 413px;
  max-height: 160px;
  width: 100%;
  height: 100%;
`;

const Links = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
  margin: 0;
  margin-bottom: 5px;
  text-decoration: none;
  width: 120px;
`;
