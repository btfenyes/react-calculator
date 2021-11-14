import React from 'react';
import styled from 'styled-components';

import Calculator from './components/Calculator';
import { bgColor } from './styles';

const Div = styled.div`
  ${bgColor}
  height: 100%;
  display: flex;
  flex-direction: 'column';
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Div className="App">
      <Calculator />
    </Div>
  );
}

export default App;
