import React from "react";
import * as S from "./styles";
import SearchBar from "../SearchBar";
import LogoImg from "../../images/logo.svg";

const Menu: React.FC = ({ children }) => {
  return (
    <S.MenuBody>
      <S.MenuLogo src={LogoImg} />
      <nav>
        <S.MenuNav>{children}</S.MenuNav>
      </nav>
      <SearchBar />
    </S.MenuBody>
  );
};

export default Menu;
