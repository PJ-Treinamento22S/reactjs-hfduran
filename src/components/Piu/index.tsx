import React, { useState } from "react";
import * as S from "./styles";
import LikeImg from "../../images/heart.svg";
import GarbageImg from "../../images/garbage.svg";
import api from "../../config/api";

interface PiuProps {
  img: string;
  txt: string;
  name: string;
  user: string;
  likes: number;
  id: string;
  date: string;
}

function formatDate(date: string) {
  date = date.slice(0, 10);
  let dateVector = date.split("-");
  dateVector = dateVector.reverse();
  dateVector[2] = dateVector[2].slice(2, 4);
  date = dateVector.join("/");
  return date;
}

const Piu: React.FC<PiuProps> = ({ img, txt, name, user, likes, id, date }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <S.PiuBody>
        <S.PiuImg src={img} alt="profile"></S.PiuImg>
        <S.PiuInfo>
          <S.PiuName>
            {name} <S.PiuUser>@{user}</S.PiuUser>
          </S.PiuName>
          <S.PiuText>{txt}</S.PiuText>
          <S.PiuActionsMenu>
            <S.PiuAction>
              <S.PiuActionImg
                active={false}
                src={GarbageImg}
                onClick={async () => {
                  if (user === "xX_felipinho_Xx")
                    await api.delete("/pius", { data: { piu_id: id } });
                }}
              />
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
        <S.PiuDate>{formatDate(date)}</S.PiuDate>
      </S.PiuBody>
    </>
  );
};

export default Piu;
