import React, { useState } from "react";
import * as S from "./styles";
import ProfilePic from "../../images/avatar.jpg";
import api from "../../config/api";
import Alert from "../Alert";

const WriteArea: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [hide, setHide] = useState(true);

  function piuPost() {
    if (counter <= 140 && counter != 0) {
      api.post("/pius", { text: text });
      setText("");
      setHide(true);
    }
  }

  return (
    <>
      <Alert hidden={hide}>Não pode mensagens com mais de 140 caracteres</Alert>
      <S.WABody>
        <S.WAInputAndImg>
          <S.WAImage src={ProfilePic}></S.WAImage>
          <S.WAInput
            NChar={counter}
            placeholder="No que você está pensando?"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setCounter(e.target.value.length);
              setHide(counter < 140);
            }}
          ></S.WAInput>
        </S.WAInputAndImg>
        <S.WASubmit>
          <S.WASubmitCounter>{counter}/140</S.WASubmitCounter>
          <S.WASubmitButton onClick={piuPost}>Piar!</S.WASubmitButton>
        </S.WASubmit>
      </S.WABody>
    </>
  );
};

export default WriteArea;
