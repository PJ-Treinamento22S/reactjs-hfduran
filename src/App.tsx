import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import Piu from "./components/Piu";
import Alert from "./components/Alert";
import WriteArea from "./components/WriteArea";
import NavItem from "./components/NavItem";
import SideBar from "./components/SideBar";

import Avatar from "./images/avatar.jpg";
import FeedIcon from "./images/feed.svg";
import ExploreIcon from "./images/explore.svg";
import FavoritesIcon from "./images/favorites.svg";
import FriendsIcon from "./images/friends.svg";
import ProfileIcon from "./images/profile.svg";
import api from "./config/api";
export interface PiuI {
  created_at: "";
  id: "";
  likes: [];
  text: "";
  updated_at: "";
  user: {
    about: "";
    email: "";
    favorites: [];
    followers: [];
    following: [];
    id: "";
    first_name: "";
    last_name: "";
    photo: "";
    username: "";
  };
}

function App() {
  const [PiuList, setPiuList] = useState<PiuI[]>([]);

  // useEffect(() => {
  //   api.get("pius").then((response) => {
  //     setPiuList(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await api.get("pius");
        setPiuList(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  });

  return (
    <div className="App">
      <GlobalStyle />
      <div className="content">
        <SideBar>
          <Menu>
            <NavItem active={true} img={FeedIcon}>
              Feed
            </NavItem>
            <NavItem active={false} img={ExploreIcon}>
              Explorar
            </NavItem>
            <NavItem active={false} img={FavoritesIcon}>
              Favoritos
            </NavItem>
            <NavItem active={false} img={FriendsIcon}>
              Amigos
            </NavItem>
            <NavItem active={false} img={ProfileIcon}>
              Perfil
            </NavItem>
          </Menu>
        </SideBar>
        <Feed>
          <WriteArea pius={PiuList} setPius={setPiuList}></WriteArea>
          <ul>
            {PiuList?.map((PiuList) => (
              <Piu
                key={PiuList.id}
                id={PiuList.id}
                txt={PiuList.text}
                name={PiuList.user.first_name}
                user={PiuList.user.username}
                img={PiuList.user.photo}
                likes={PiuList.likes.length}
                date={PiuList.created_at}
              ></Piu>
            ))}
          </ul>
        </Feed>
      </div>
    </div>
  );
}

export default App;
