import React from "react";
import styled from "styled-components";

export const SideBarBody = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border-right: 1px solid #696868;
  padding: 16px 24px 16px 0px;
`;

export const SideBarButton = styled.button`
  background-color: #009fa9;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 160px;
  height: 48px;
  border: 0;
  border-radius: 50px;
  align-self: center;
`;
