"use client";
import React from "react";
import styled from "styled-components";

type Props = {
  typeButton: string;
};

const StyledButton = styled.button<Props>`
  background-color: ${(props) =>
    props.typeButton === "primary" ? "#1A5632" : ""};

  color: ${(props) => (props.typeButton === "primary" ? "white" : "")};
`;

StyledButton.defaultProps = {
  typeButton: "primary",
};

type PropsButton = {
  typeButton: "primary" | "secondary" | "third";
  children: React.ReactNode;
  className?: string | null;
};

export default function Button({
  typeButton,
  children,
  className,
}: PropsButton) {
  return (
    <StyledButton
      typeButton={typeButton}
      className={`py-3 px-8 rounded-full ${className}`}
    >
      {children}
    </StyledButton>
  );
}
