import React, { useState } from "react";
import * as S from "./styles";
import AvatarImg from "../../images/avatar.jpg";
import LikeImg from "../../images/heart.svg";
import api from "../../config/api";

interface PiuProps {
  img: string;
  txt: string;
  name: string;
  user: string;
  likes: number;
  id: string;
}

const Piu: React.FC<PiuProps> = ({ img, txt, name, user, likes, id }) => {
  const [liked, setLiked] = useState(false);
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
              <S.PiuActionImg active={false} />
            </S.PiuAction>
            <S.PiuAction
              onClick={() => {
                setLiked(!liked);
                api.post("/pius/like", { piu_id: id });
              }}
            >
              <S.PiuActionImg src={LikeImg} active={liked} />
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
