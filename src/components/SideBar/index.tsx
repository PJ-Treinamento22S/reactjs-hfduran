import React from "react";
import * as S from "./styles";
import ProfileWidget from "../ProfileWidget";

const SideBar: React.FC = ({ children }) => {
  return (
    <S.SideBarBody>
      {children}
      <S.SideBarButton>Piar!</S.SideBarButton>
      <ProfileWidget></ProfileWidget>
    </S.SideBarBody>
  );
};

export default SideBar;
