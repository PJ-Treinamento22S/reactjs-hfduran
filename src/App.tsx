import React from "react";
import { GlobalStyle } from "./styles";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import Piu from "./components/Piu";
import Alert from "./components/Alert";
import WriteArea from "./components/WriteArea";
import NavItem from "./components/NavItem";
import SideBar from "./components/SideBar";

import FeedIcon from "./images/feed.svg";
import ExploreIcon from "./images/explore.svg";
import FavoritesIcon from "./images/favorites.svg";
import FriendsIcon from "./images/friends.svg";
import ProfileIcon from "./images/profile.svg";

function App() {
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
          <Alert></Alert>
          <WriteArea></WriteArea>
          <ul>
            <Piu></Piu>
          </ul>
        </Feed>
      </div>
    </div>
  );
}

export default App;
