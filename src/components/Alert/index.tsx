import React, { Children } from "react";
import * as S from "./styles";

const Alert: React.FC = ({ children }) => {
  return <S.Alert>{children}</S.Alert>;
};

export default Alert;
