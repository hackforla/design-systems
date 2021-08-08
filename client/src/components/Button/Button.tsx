import React, { FC } from 'react';
import styled from 'styled-components';

// TODO: discussion:
// 1. variant dictionary for colors
// 2. colors from theme.ts
// 3. switch statment for two types of button variants
// 4. research on best practice for variants for styled-components and Typescript
// TODO: dependency: current figma design has conflicts hover pressed & focused
// TODO: ask ui people for design tokens for colors, etc... for naming convenience

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

// TODO: 1. styling secondary, text color, border color, background color
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
