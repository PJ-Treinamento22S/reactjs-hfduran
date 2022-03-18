import React, { createContext, useContext, useState } from "react";
import * as S from "./styles";

interface PropsInterface {
  active: boolean;
  img: string;
}

const NavItem: React.FC<PropsInterface> = ({ active, img, children }) => {
  return (
    <S.NavItemBody>
      <S.NavItemSpan active={active}>
        <S.NavItemImg src={img} />
        {children}
      </S.NavItemSpan>
    </S.NavItemBody>
  );
};

export default NavItem;
