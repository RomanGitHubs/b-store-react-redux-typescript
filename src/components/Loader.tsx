import styled from 'styled-components';

const LoaderMy = () => (
  <Div>
      Loading...
  </Div>
);

export default LoaderMy;

const Div = styled.div`
  display:flex;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 24px;
  justify-content: center;
  margin-top: 400px;
`;
