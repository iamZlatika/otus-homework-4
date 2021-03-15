import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "@emotion/styled";
import Game from "./Game";
import Button from "./components/Button";
import FieldSize from "./components/FieldSize";
import FieldDencity from "./components/FieldDencity";
import Login from "./components/Login";

const SizeControlForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const AppTitle = styled.h1`
  text-align: center;
  color: #276678;
`;
const AppGreeting = styled.h2`
  text-align: center;
`;
const ControllBar = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const App: React.FC = () => {
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
  const [dencity, setDencity] = useState(20);
  const [field, setField] = useState({ height, width });
  const [isActive, setActive] = useState(false);
  const [updateInterval, setUpdateInterval] = useState(500);
  const [login, setLogin] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setField({ height, width });
  };

  const handleLogin = (userName: string) => {
    localStorage.setItem("Login", userName);
    setLogin(userName);
  };

  useEffect(() => {
    setLogin(localStorage.getItem("Login"));
  }, [login]);

  return login ? (
    <>
      <AppTitle>Game of Life</AppTitle>
      <AppGreeting>Hello, {login}</AppGreeting>
      <SizeControlForm onSubmit={handleSubmit}>
        <FieldSize id="height" label="Height" value={height} onUpdate={setHeight} />
        <FieldSize id="width" label="Width" value={width} onUpdate={setWidth} />
        <Button type="submit">Apply</Button>
        <FieldDencity label="Dencity" value={dencity} id="dencity" onUpdate={setDencity} />
      </SizeControlForm>
      <Game {...field} dencity={dencity} isActive={isActive} updateInterval={updateInterval} />
      <ControllBar>
        <Button onClick={() => setUpdateInterval(updateInterval * 1.3)}>Slower</Button>
        {isActive && <Button onClick={() => setActive(false)}>Pause</Button>}
        {!isActive && <Button onClick={() => setActive(true)}>Play</Button>}
        <Button onClick={() => setUpdateInterval(updateInterval * 0.7)}>Faster</Button>
        <Button onClick={() => setDencity(0)}>Clear</Button>
      </ControllBar>
    </>
  ) : (
    <Login onStart={handleLogin} />
  );
};

export default App;
