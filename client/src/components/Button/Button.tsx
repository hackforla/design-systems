import React, { FC } from 'react';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  variant,
  children,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
