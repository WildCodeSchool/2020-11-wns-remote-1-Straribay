import React, { useState } from "react";
import { Link } from "react-router-dom";

let userSuggestions = ["Cloé", "Baptiste", "Maxime", "Marie"];
const ChooseInvit = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <label>Bidule</label>
      <input
        type="text"
        id="test"
        name="invit"
        value={value}
        onChange={handleChange}
      />
      <div>
        <ul>
          {userSuggestions
            .filter((userSuggestion) => {
              userSuggestion.includes(value);
            })
            .map((userSuggestion) => {
              return <li>{userSuggestion}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default ChooseInvit;
