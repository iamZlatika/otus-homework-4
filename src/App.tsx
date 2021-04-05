import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "@emotion/styled";
import Game from "./Game";
import Button from "components/Button";
import FieldSize from "components/FieldSize";
import FieldDencity from "components/FieldDencity";
import Login from "components/Login";
import { generateField, createEmptyField } from "services/game-service";

const SizeControlForm = styled.form`
  display: flex;
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
  align-items: center;
  justify-content: space-around;
`;
const LoginBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const App: React.FC = () => {
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
  const [dencity, setDencity] = useState(20);
  const [field, setField] = useState({ height, width });
  const [isActive, setActive] = useState(false);
  const [updateInterval, setUpdateInterval] = useState(500);
  const [login, setLogin] = useState("");
  const [initialField, setInitialField] = useState(generateField(height, width, dencity));

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

  const handleLogout = () => {
    localStorage.removeItem("Login");
    setLogin("");
  };

  const updateDencity = (dencity: number) => {
    setDencity(dencity);
    setInitialField(generateField(field.height, field.width, dencity));
  };

  const clearField = () => {
    setInitialField(createEmptyField(height, width));
  };

  const reset = () => {
    setHeight(20);
    setWidth(20);
    setField({ height: 20, width: 20 });
    setDencity(20);
    setInitialField(generateField(20, 20, 20));
    setActive(false);
  };

  return login ? (
    <>
      <AppTitle>Game of Life</AppTitle>
      <LoginBar>
        <AppGreeting>Hello, {login}</AppGreeting>
        <Button onClick={handleLogout}>Log out</Button>
      </LoginBar>
      <SizeControlForm onSubmit={handleSubmit}>
        <FieldSize id="height" label="Height" value={height} onUpdate={setHeight} />
        <FieldSize id="width" label="Width" value={width} onUpdate={setWidth} />
        <Button type="submit">Resize</Button>
        <FieldDencity label="Dencity" value={dencity} id="dencity" onUpdate={updateDencity} />
      </SizeControlForm>
      <Game {...field} initialField={initialField} isActive={isActive} updateInterval={updateInterval} />
      <ControllBar>
        <Button onClick={() => setUpdateInterval(updateInterval * 1.3)}>Slower</Button>
        {isActive ? (
          <Button onClick={() => setActive(false)}>Pause</Button>
        ) : (
          <Button onClick={() => setActive(true)}>Play</Button>
        )}
        <Button onClick={() => setUpdateInterval(updateInterval * 0.7)}>Faster</Button>
        <Button onClick={() => clearField()}>Clear</Button>
        <Button onClick={() => reset()}>Restart</Button>
      </ControllBar>
    </>
  ) : (
    <Login onStart={handleLogin} />
  );
};

export default App;
