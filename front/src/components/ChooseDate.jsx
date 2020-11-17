import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChooseInfo = () => {
  const [description, setDescription] = useState("");
  const handleChangeArea = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
      <input type="date" min="01-01-2000" max="01-01-2030" />
      <input type="time" />
      <textarea value={description} onChange={handleChangeArea} />
      <Link to="/event/:id">
        <button>next</button>
      </Link>
    </>
  );
};

export default ChooseInfo;
