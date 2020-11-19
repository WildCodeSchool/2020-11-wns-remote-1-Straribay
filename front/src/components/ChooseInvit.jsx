import React, { useState } from "react";
import { Link } from "react-router-dom";

import Result from "./Result";

import { Header, NavBar, BottomContainer, LastContainer, CreationContainer } from '../styles/containers';
import { Button, Title } from "../styles/elements";

let userSuggestions = ["Cloé", "Baptiste", "Maxime", "Marie"];

const ChooseInvit = (props) => {
  const { event, hour, date, info } = props.location.state;
  event.date = date;
  event.hour = hour;
  event.info = info;

  const [value, setValue] = useState("");
  const [attending, setAttending] = useState("Friends");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  let valueInsensibleCase = new RegExp(value, "i");

  const handleAttend = (e) => {
    setAttending(e.target.value);
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
            <div>
              <label>Who can attend :</label>
              <select onChange={handleAttend}>
                <option value="Friends">Friends</option>
                <option value="Promo">Promo</option>
                <option value="All">All</option>
              </select>
            </div>
            <div>
              <label>Invite someone :</label>
              <input
                type="email"
                id="test"
                name="invit"
                value={value}
                onChange={handleChange}
                list="users"
              />
            </div>
            <Result
              valueInsensibleCase={valueInsensibleCase}
              userSuggestions={userSuggestions}
              value={value}
            />
            <Link
              to={{
                pathname: "/Details",
                state: {
                  attending: attending,
                  userSelected: value,
                  event: event,
                },
              }}
            >
              <Button>Next</Button>
            </Link>
          </CreationContainer>
        </LastContainer>
      </BottomContainer>
    </>
  );
};

export default ChooseInvit;
