import React, { FC } from 'react';
import styled from 'styled-components';

// TODO: 1. create dictionary for colors, size.
// TODO: 2. add styles for different states.

const COLORS = {
  primary: '#3366FF',
  secondary: 'secondary',
};

const StyledButton = styled.button`
  color: 'white';
  background-color: ${(props: ButtonProps) => COLORS[props.color]};
`;

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: FC<ButtonProps> = ({
  onClick,
  disabled = false,
  color = 'primary',
  children,
}) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
