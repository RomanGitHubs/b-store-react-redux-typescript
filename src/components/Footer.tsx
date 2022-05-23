import React from 'react';
import styled from 'styled-components';
import logo  from '../assets/logo-footer.svg';
import map  from '../assets/map.svg';

type Props = {

}


const Footer: React.FC<Props> = (props) => {
  return (
    <FooterWrapper>
        <Foot>
        <FooterColumn>
            <Logo alt='' src={logo}/>
            <Paragraph>tranthuy.nute@gmail.com</Paragraph>
            <Paragraph>(480) 555-0103</Paragraph>
        </FooterColumn>
        <FooterColumn>
            <Link href="#">Home Page</Link>
            <Link href="#">Catalog</Link>
            <Link href="#">My Account</Link>
            <Link href="#">Cart</Link>
        </FooterColumn>
        <FooterColumn>
            <Paragraph>6391 Elgin St. Celina, Delaware 10299</Paragraph>
            <Map>
                <img alt='' src={map}/>
            </Map>
        </FooterColumn>
        </Foot>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer `
  background-color: #0D1821;
`

const Foot = styled.div `
display: flex;
padding: 73px calc(calc(calc(1%) - 9px) * 15);
justify-content: space-between;
`
const FooterColumn = styled.div `
  display: flex;
  flex-direction: column;
`
const Logo = styled.img `
  width: 89px;
  height: 46px;
  margin-bottom: 40px;
`

const Paragraph = styled.p `
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
  margin: 0 0 5px;
`

const Map = styled.div `
  width: 413px;
  height: 160px;
`
const Link = styled.a `
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
  margin: 0;
  margin-bottom: 5px;
  text-decoration: none;
`