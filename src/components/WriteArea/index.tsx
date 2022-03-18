import React from "react";
import * as S from "./styles";

import ProfilePic from "../../images/avatar.jpg";

const WriteArea: React.FC = () => {
  return (
    <>
      <S.WABody>
        <S.WAInputAndImg>
          <S.WAImage src={ProfilePic}></S.WAImage>
          <S.WAInput placeholder="No que você está pensando?"></S.WAInput>
        </S.WAInputAndImg>
        <S.WASubmit>
          <S.WASubmitCounter>0/140</S.WASubmitCounter>
          <S.WASubmitButton>Piar!</S.WASubmitButton>
        </S.WASubmit>
      </S.WABody>
    </>
  );
};

export default WriteArea;
