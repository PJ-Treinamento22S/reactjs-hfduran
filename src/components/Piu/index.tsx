import React from "react";
import * as S from "./styles";
import AvatarImg from "../../images/avatar.jpg";
import LikeImg from "../../images/heart.svg";

const Piu: React.FC = () => {
  return (
    <>
      <S.PiuBody>
        <S.PiuImg src={AvatarImg}></S.PiuImg>
        <S.PiuInfo>
          <S.PiuName>
            Henrique <S.PiuUser>@patuska</S.PiuUser>
          </S.PiuName>
          <S.PiuText>oieeeee</S.PiuText>
          <S.PiuActionsMenu>
            <S.PiuAction>
              <S.PiuActionImg />
            </S.PiuAction>
            <S.PiuAction>
              <S.PiuActionImg src={LikeImg} />3
            </S.PiuAction>
          </S.PiuActionsMenu>
        </S.PiuInfo>
        <S.PiuDate>14/02/2022</S.PiuDate>
      </S.PiuBody>
    </>
  );
};

export default Piu;
