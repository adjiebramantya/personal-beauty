"use client";
import React from "react";
import styled from "styled-components";

type Props = {
  typebutton: string;
};

const StyledButton = styled.button<Props>`
  /* PRIMARY */
  background-color: ${(props) =>
    props.typebutton === "primary" ? "#1A5632" : ""};

  color: ${(props) => (props.typebutton === "primary" ? "white" : "")};

  /* SECONDARY */
  background-color: ${(props) =>
    props.typebutton === "secondary" ? "white" : ""};

  border: ${(props) =>
    props.typebutton === "secondary" ? "2px solid #1A5632" : ""};

  color: ${(props) => (props.typebutton === "secondary" ? "#1A5632" : "")};
`;

StyledButton.defaultProps = {
  typebutton: "primary",
};

type PropsButton = {
  typebutton: "primary" | "secondary" | "third";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  typebutton,
  children,
  className,
}: PropsButton) {
  return (
    <StyledButton typebutton={typebutton} className={`${className}`}>
      {children}
    </StyledButton>
  );
}
