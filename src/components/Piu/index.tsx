import React from "react";
import * as S from "./styles";
import AvatarImg from "../../images/avatar.jpg";
import LikeImg from "../../images/heart.svg";

interface PiuProps {
  img: string;
  txt: string;
  name: string;
  user: string;
  likes: number;
}

const Piu: React.FC<PiuProps> = ({ img, txt, name, user, likes }) => {
  return (
    <>
      <S.PiuBody>
        <S.PiuImg src={img}></S.PiuImg>
        <S.PiuInfo>
          <S.PiuName>
            {name} <S.PiuUser>@{user}</S.PiuUser>
          </S.PiuName>
          <S.PiuText>{txt}</S.PiuText>
          <S.PiuActionsMenu>
            <S.PiuAction>
              <S.PiuActionImg />
            </S.PiuAction>
            <S.PiuAction>
              <S.PiuActionImg src={LikeImg} />
              {likes}
            </S.PiuAction>
          </S.PiuActionsMenu>
        </S.PiuInfo>
        <S.PiuDate>14/02/2022</S.PiuDate>
      </S.PiuBody>
    </>
  );
};

export default Piu;
