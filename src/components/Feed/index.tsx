import React from "react";
import * as S from "./styles";

const Feed: React.FC = ({ children }) => {
  return (
    <S.FeedBody>
      <S.FeedTitle>Feed</S.FeedTitle>
      {children}
    </S.FeedBody>
  );
};

export default Feed;
