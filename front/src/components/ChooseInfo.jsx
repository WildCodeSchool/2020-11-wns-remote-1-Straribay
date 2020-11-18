import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eventList } from "./EventList";

import { Button } from '../styles/elements';

const ChooseInfo = (props) => {
  const { title, description, theme } = props.location.state;

  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleInfo = (event) => {
    setInfo(event.target.value);
  }

  const handleDate = (event) => {
    setDate(event.target.value);
  }

  const handleHour = (event) => {
    setHour(event.target.value);
  }
  const addNewEvent = () => {
    eventList.push({id: eventList.length +1, title: title, description: description, theme: theme, date: date, hour: hour, info: info});
    console.log(eventList);
  }

  return (
    <>
      <input value={date} onChange={handleDate} type="date" min={new Date()} max="01-01-2030" />
      <input value={hour} onChange={handleHour} type="time" />
      <textarea value={info} onChange={handleInfo} />
      <Button onClick={addNewEvent}>next</Button>
      {/* <Link to="/events">
      </Link> */}
    </>
  );
};

export default ChooseInfo;
