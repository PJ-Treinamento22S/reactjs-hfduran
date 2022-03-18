import React from "react";
import styled from "styled-components";

export const ProfileWidgetBody = styled.div`
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`;

export const ProfileWidgetImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const ProfileWidgetName = styled.strong`
  display: flex;
  flex-direction: column;
`;

export const ProfileWidgetUser = styled.span`
  margin-top: 4px;
  font-weight: normal;
  color: #6d6d6d;
`;

export const ProfileWidgetMore = styled.img`
  height: 16px;
  width: 15px;
`;
