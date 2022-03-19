import React, { useContext } from "react";
import styled from "styled-components";

interface InputProps {
  NChar: number;
}

export const WABody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  border-bottom: 2px solid #696868;
  padding: 8px;
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

export const WAInputAndImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WAImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 24px;
`;

export const WAInput = styled.textarea<InputProps>`
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  background-color: #353535;
  color: ${(props) => (props.NChar > 140 ? "red" : "white")};
  border: 0;
  font-size: 18px;
  width: 100%;
  outline: 0;
  resize: none;
`;

export const WASubmit = styled.div`
  display: flex;
  align-items: center;
`;

export const WASubmitCounter = styled.span`
  margin: 0px 16px;
  color: #6d6d6d;
`;

export const WASubmitButton = styled.button`
  color: white;
  background-color: #009fa9;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 24px;
  border: 0;
  border-radius: 50px;
`;
