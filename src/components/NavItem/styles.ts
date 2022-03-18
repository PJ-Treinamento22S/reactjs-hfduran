import React, { useContext } from "react";
import styled from "styled-components";

interface SProps {
  active: boolean;
}

export const NavItemBody = styled.li`
  font-size: 24px;
  margin-top: 8px;
`;

export const NavItemImg = styled.img`
  margin-right: 16px;
  height: 24px;
  width: 24px;
`;

export const NavItemSpan = styled.span<SProps>`
  background-color: ${(props) => (props.active ? "#284B63" : "inherit")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
`;
