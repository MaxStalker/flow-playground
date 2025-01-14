import React from "react";
import { Button as ThemedButton } from "theme-ui";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { CSSProperties } from "styled-components";

interface StyledButtonProps {
  style?: CSSProperties;
  className?: string;
  onClick?: any;
  variant: string;
}

const StyledButton: React.FC<StyledButtonProps> = styled(ThemedButton)`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icon {
    margin-left: 0.5rem;
  }

  .loading {
    animation: rotating 0.5s linear infinite;
  }

  display: flex;
  align-items: center;
`;

interface ButtonProps {
  children?: any;
  onClick?: any;
  className?: string;
  style?: CSSProperties;
  Icon?: any;
  isLoading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
}

const noop = (): void => {};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style,
  className,
  Icon,
  isLoading,
  isActive,
  disabled
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <StyledButton
        style={style}
        className={className}
        onClick={disabled ? noop : onClick}
        variant={isActive && !disabled ? "buttons.primary" : "buttons.disabled"}
      >
        {children}
        {isLoading ? (
          <FaSpinner className="icon loading" />
        ) : Icon ? (
          <Icon className="icon" />
        ) : null}
      </StyledButton>
    </motion.div>
  );
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  className: "",
  Icon: null,
  isLoading: false,
  isActive: true
};

export default Button;
