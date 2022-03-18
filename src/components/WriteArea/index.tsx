import React, { useState } from "react";
import * as S from "./styles";

import ProfilePic from "../../images/avatar.jpg";

const WriteArea: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <S.WABody>
        <S.WAInputAndImg>
          <S.WAImage src={ProfilePic}></S.WAImage>
          <S.WAInput
            placeholder="No que você está pensando?"
            onChange={(e) => setCounter(e.target.value.length)}
          ></S.WAInput>
        </S.WAInputAndImg>
        <S.WASubmit>
          <S.WASubmitCounter>{counter}/140</S.WASubmitCounter>
          <S.WASubmitButton>Piar!</S.WASubmitButton>
        </S.WASubmit>
      </S.WABody>
    </>
  );
};

export default WriteArea;
