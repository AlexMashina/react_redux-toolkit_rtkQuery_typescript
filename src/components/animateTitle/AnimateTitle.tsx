import React, { FC } from "react";
import styled from "styled-components";

interface AnimateTitleProps {
  chars: string;
  children: string;
}

const AnimTtile = styled.h4<AnimateTitleProps>`
  width: ${(props) => props.chars};
  font-size: 28px;
  font-family: monospace;
  color: #330066;
  margin-bottom: 20px;
  border-right: 2px solid #ffcc00;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  animation: flashing-border step-end 0.75s infinite,
    printed-word steps(${(props) => parseInt(props.chars)}) 3s infinite;

  @keyframes flashing-border {
    0% {
      border-color: $orange;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: $orange;
    }
  }

  @keyframes printed-word {
    from {
      width: 0;
    }
  }
`;

export const AnimateTitle: FC<AnimateTitleProps> = ({ chars, children }) => {
  return <AnimTtile chars={chars}>{children}</AnimTtile>;
};
