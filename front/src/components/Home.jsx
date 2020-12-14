import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeSelect from "./ThemeSelect";

import {
  Header,
  NavBar,
  BottomContainer,
  LastContainer,
  CreationContainer,
} from "../styles/containers";
import { Button, Title } from "../styles/elements";

const Home = () => {
  const [valueInputTitle, setValueInputTitle] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputTheme, setValueInputTheme] = useState("gaming");

  const handleInput = (event) => {
    setValueInputTitle(event.target.value);
  };
  const handleArea = (event) => {
    setValueInputArea(event.target.value);
  };
  const handleSelect = (event) => {
    setValueInputTheme(event.target.value);
  };

  return (
    <>
      <Header>
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>Profil emplacement</p>
        </div>
      </Header>
      <BottomContainer>
        <NavBar>Hello</NavBar>
        <LastContainer>
          <Title>Create your Event</Title>
          <CreationContainer>
            <h4>Give a title to your event</h4>
            <input value={valueInputTitle} type="text" onChange={handleInput} />
            <h4>Give a theme to your event</h4>
            <ThemeSelect handleSelect={handleSelect} />
            <h4>Give a description to your event </h4>
            <textarea
              value={valueInputArea}
              type="texte"
              onChange={handleArea}
            />
            <Link
              to={{
                pathname: "/ChooseInfo",
                state: {
                  title: valueInputTitle,
                  description: valueInputArea,
                  theme: valueInputTheme,
                },
              }}
            >
              <Button alt="Next">NEXT</Button>
            </Link>
          </CreationContainer>
        </LastContainer>
      </BottomContainer>
    </>
  );
};

export default Home;
