import React, { useState } from "react";
import { createPortal } from "react-dom";

const ThemeSelect = () => {
  const [theme, setTheme] = useState("");
  const onChoose = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <select>
        <option value="gaming">Gaming</option>
        <option value="cooking">Cooking</option>
        <option value="programming">Programming</option>
      </select>
    </div>
  );
};

export default ThemeSelect;
