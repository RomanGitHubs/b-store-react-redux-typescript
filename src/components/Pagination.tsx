import styled from 'styled-components';
import pagination from '../assets/pagination.png';

type Props = {};

const Pagination:React.FC<Props> = (props) => {
  return (
    <Body src={pagination}>

    </Body>
  );
};

export default Pagination;

const Body = styled.img`
  display: flex;
  margin: 0 auto;
  margin-bottom: 92px;
  width: 268px;
  height: 24px;
`;
