import React from "react";
import styled from "styled-components";

export const PiuBody = styled.li`
  display: flex;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid #696868;
`;

export const PiuImg = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const PiuInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PiuName = styled.strong`
  font-size: 16px;
`;

export const PiuUser = styled.span`
  font-weight: normal;
  color: #6d6d6d;
`;

export const PiuText = styled.p`
  overflow-wrap: break-word;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const PiuActionsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const PiuAction = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

export const PiuActionImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 6px;
`;

export const PiuActionTxt = styled.span``;

export const PiuDate = styled.span`
  color: #6d6d6d;
  font-size: 14px;
`;
