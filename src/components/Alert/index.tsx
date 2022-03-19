import React, { Children } from "react";
import * as S from "./styles";

interface AProps {
  hidden: boolean;
}

const Alert: React.FC<AProps> = ({ children, hidden }) => {
  return <S.Alert hidden={hidden}>{children}</S.Alert>;
};

export default Alert;
