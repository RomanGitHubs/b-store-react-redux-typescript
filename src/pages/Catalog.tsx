import React from 'react';
import styled from 'styled-components';

type Props = {};

const Catalog: React.FC<Props> = (props) => {
  return (
    <Body>
      <div className='payload'>asd</div>
    </Body>
  );
};

export default Catalog;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px calc(calc(calc(1%) - 9px) * 15) 80px;

  .payload {
    display: flex;
    
  }
`;


