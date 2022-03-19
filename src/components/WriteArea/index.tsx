import React, { useState, createContext } from "react";
import * as S from "./styles";
import { PiuI } from "../../App";
import ProfilePic from "../../images/avatar.jpg";
import { text } from "node:stream/consumers";
import api from "../../config/api";
import Alert from "../Alert";

interface WAProps {
  charCount?: number;
  textInput?: string;
  pius?: PiuI[];
  setPius?: React.Dispatch<React.SetStateAction<PiuI[]>>;
}

const WriteArea: React.FC<WAProps> = ({ charCount, pius, setPius }) => {
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
