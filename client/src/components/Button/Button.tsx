import React, { FC } from 'react';
import styled from 'styled-components';

// TODO: 1. create dictionary for colors, size - done.
// TODO: 2. add styles for different states.
// TODO: stretch goal: pressed & focused, dependency: current figma design has conflicts
// TODO: ask ui people for design tokens

const VARIANTS = {
  // theme? object for primary && secondary
  primary: {
    color: '#2196F3',
    backgroundColor: '#3366FF',
    borderColor: '#3366FF',
    hoverBackgroundColor: '#',
    // pressedBackgroundColor: '#',
    // focusedBackgroundColor: '#',
    disabledBackgroundColor: '#D6E0FF',
  },
  secondary: {
    color: '#2196F3',
    backgroundColor: '#FFFFFF',
    borderColor: '#003EDF',
    hoverBackgroundColor: '#DFE8FF',
    // pressedBackgroundColor: '#',
    // focusedBackgroundColor: '#',
    disabledBackgroundColor: '',
  },
};

const SIZES = {
  sm: {
    fontSize: '16px',
    padding: '.75em 2.05em',
  },
  md: {
    fontSize: '20px',
    padding: '.85em 2.5em',
  },
  lg: {
    fontSize: '24px',
    padding: '.85em 2.5em',
  },
};

// TODO: styling
const StyledButton = styled.button<Omit<ButtonProps, 'onClick' | 'children'>>`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => SIZES[props.size || 'sm'].fontSize};
  margin: 20px;
  color: #ffffff;
  background-color: ${(props) =>
    VARIANTS[props.variant || 'primary'].backgroundColor};
  border: 2px solid
    ${(props) => VARIANTS[props.variant || 'primary'].borderColor};
  border-radius: 100px;
  padding: ${(props) => SIZES[props.size || 'sm'].padding};

  &:disabled {
    background-color: ${(props) =>
      VARIANTS[props.variant || 'primary'].disabledBackgroundColor};
    border: none;
  }
`;

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  children,
  size,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
