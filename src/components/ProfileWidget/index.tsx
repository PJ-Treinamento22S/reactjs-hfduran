import React from "react";
import * as S from "./styles";
import ProfilePic from "../../images/avatar.jpg";
import More from "../../images/more.svg";

const ProfileWidget: React.FC = () => {
  return (
    <S.ProfileWidgetBody>
      <S.ProfileWidgetImg src={ProfilePic} />
      <S.ProfileWidgetName>
        Henrique Duran
        <S.ProfileWidgetUser>@patuska</S.ProfileWidgetUser>
      </S.ProfileWidgetName>
      <S.ProfileWidgetMore src={More} />
    </S.ProfileWidgetBody>
  );
};

export default ProfileWidget;
