import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSelect from "./ThemeSelect";

const Home = () => {
  const [valueInputTitle, setValueInputTitle] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputTheme, setValueInputTheme] = useState("");

  const handleInput = (event) => {
    setValueInputTitle(event.target.value);
  };
  const handleArea = (event) => {
    setValueInputArea(event.target.value);
  };
  const handleSelect = (event) => {
    setValueInputTheme(event.target.value)
  };

  return (
    <div>
      <h4>Give a title to your event</h4>
      <input value={valueInputTitle} type="text" onChange={handleInput} />
      <h4>Give a theme to your event</h4>
      <ThemeSelect handleSelect={handleSelect}/>
      <h4>Give a description to your event </h4>
      <textarea value={valueInputArea} type="texte" onChange={handleArea} />


      <Link to={{pathname: "/ChooseInfo",
        state: {
          title: valueInputTitle,
          description: valueInputArea,
          theme: valueInputTheme
        }
    }}>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Home;
