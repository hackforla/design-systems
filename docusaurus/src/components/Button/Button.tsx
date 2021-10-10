import React, { FC } from "react";
import styled from "styled-components";

// TODO: discussion:
// 1. variant dictionary for colors
// 2. colors from theme.ts
// 3. switch statment for two types of button variants
// 4. research on best practice for variants for styled-components and Typescript

const VARIANTS = {
  // use object for primary && secondary
  primary: {
    textColor: "#FFFFFF",
    backgroundColor: "#003EDF",
    hoverBackgroundColor: "#00278C",
    activeBackgroundColor: "#011D66",
    focusedBorderColor: "#E5E5E5",
    focusedBackgroundColor: "#00278C",
    disabledTextColor: "#FFFFFF",
    disabledBackgroundColor: "#BEC5D1",
  },
  secondary: {
    textColor: "#003EDF",
    backgroundColor: "#FFFFFF",
    borderColor: "#003EDF",
    hoverBackgroundColor: "#DFE8FF",
    activeBackgroundColor: "#D1DCFA",
    focusedBackgroundColor: "#DFE8FF",
    focusedBorderColor: "#E5E5E5",
    disabledTextColor: "#BEC5D1",
    disabledBackgroundColor: "#FFFFFF",
  },
};

const SIZES = {
  sm: "16px",
  md: "20px",
  lg: "24px",
};

const StyledButton = styled.button<Omit<ButtonProps, "onClick" | "children">>`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => SIZES[props.size || "sm"]};
  margin: 20px;
  color: ${(props) => VARIANTS[props.variant || "primary"].textColor};
  background-color: ${(props) =>
    VARIANTS[props.variant || "primary"].backgroundColor};
  border: 2px solid
    ${(props) =>
      props.variant === "primary"
        ? VARIANTS["primary"].backgroundColor
        : VARIANTS["secondary"].textColor};
  border-radius: 100px;
  padding: 0.85em 2.5em;
  :focus {
    outline: none;
    border-radius: 100px;
    background-color: ${(props) =>
      VARIANTS[props.variant || "primary"].focusedBackgroundColor};
    border: 2px solid
      ${(props) =>
        props.variant === "primary"
          ? VARIANTS["primary"].focusedBorderColor
          : VARIANTS["secondary"].textColor};
  }
  :focus-visible {
    border-radius: 100px;
    border: 0.5px solid
      ${(props) =>
        props.variant === "primary"
          ? VARIANTS["primary"].focusedBackgroundColor
          : VARIANTS["secondary"].textColor};
  }
  :active,
  :visited {
    background-color: ${(props) =>
      VARIANTS[props.variant || "primary"].activeBackgroundColor};
    border: 2px solid
      ${(props) =>
        props.variant === "primary"
          ? VARIANTS["primary"].activeBackgroundColor
          : VARIANTS["secondary"].textColor};
  }

  :hover {
    background-color: ${(props) =>
      VARIANTS[props.variant || "primary"].hoverBackgroundColor};
    border: 2px solid
      ${(props) =>
        props.variant === "primary"
          ? VARIANTS["primary"].hoverBackgroundColor
          : VARIANTS["secondary"].textColor};
  }
  :disabled {
    color: ${(props) => VARIANTS[props.variant || "primary"].disabledTextColor};
    background-color: ${(props) =>
      VARIANTS[props.variant || "primary"].disabledBackgroundColor};
    border: 2px solid
      ${(props) =>
        props.variant === "primary"
          ? VARIANTS["primary"].disabledBackgroundColor
          : VARIANTS["secondary"].disabledTextColor};
  }
`;

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
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
