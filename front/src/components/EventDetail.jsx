import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/elements";
import eventList from "./Data";

const Details = (props) => {
  const { attending, userSelected, event } = props.location.state;
  const { title, description, theme, date, hour, info } = event;
  event.id = eventList.length +1;

  const addNewEvent = () => {
    eventList.push(event);
  };
  return (
    <>
      <h1>{title}</h1>
      <h1>{theme}</h1>
      <h1>{description}</h1>
      <h1>{date}</h1>
      <h1>{hour}</h1>
      <h1>{info}</h1>
      <h1>Only {attending} can attend</h1>
      <h1>You've invited {userSelected}</h1>
      <Link
        to={{
          pathname: "./events",
          state: {
            eventlist: eventList,
          },
        }}
      >
      <Button onClick={addNewEvent}>Add this event ?</Button>
      </Link>
    </>
  );
};

export default Details;
