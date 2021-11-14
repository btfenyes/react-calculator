import React from 'react';
import styled from 'styled-components';
import { bgColor } from '../styles';

const StyledButton = styled.button`
  ${bgColor};
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  margin: 1rem;
  border: none;
  border-radius: 50%;
  box-shadow:  20px 20px 60px #8a9ea4, -20px -20px 60px #d4f2fa;
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
