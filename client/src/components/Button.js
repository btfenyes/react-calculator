import React from 'react';
import styled from 'styled-components';
import { bgColor, boxShadowColorOne, boxShadowColorTwo } from '../styles';

const StyledButton = styled.button`
  ${bgColor};
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  margin: 1rem;
  border: none;
  border-radius: 50%;
  box-shadow:  20px 20px 60px ${boxShadowColorOne}, -20px -20px 60px ${boxShadowColorTwo};
  color: lightgray;
  cursor: pointer;
`;

const Button = ({ children, style, onClick, value }) => {
  return (
    <StyledButton value={value} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
