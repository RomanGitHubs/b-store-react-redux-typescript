import styled from 'styled-components';

type Props = {};

const Catalog:React.FC<Props> = (props) => {
  return (
    <Body>
      <Header>
        <Title>Catalog</Title>
        <Filter />
        <Filter />
        <Filter />
      </Header>
    </Body>
  );
};

export default Catalog;

const Body = styled.div`

`;

const Header = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 110px;
  margin-bottom: 83px;
  align-items: flex-end;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 0;
`;

const Filter = styled.div`
  display: flex;
  width: 196px;
  height: 48px;
  background: #F0F4EF;
  border-radius: 16px;
`;
