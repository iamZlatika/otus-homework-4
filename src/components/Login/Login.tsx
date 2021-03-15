import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../Button";

const LoginWrapper = styled.form`
  margin: 0 auto;
  position: fixed;
  top: 250px;
  left: 430px;
  width: 400px;
  height: 200px;
  border: solid #276678;
  color: 276678;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  input {
    width: 50px;
    margin: 0 20px;
  }
`;

interface LoginProps {
  onStart: (userName: string) => void;
}

const Login: React.FC<LoginProps> = ({ onStart }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onStart(userName);
  };

  return (
    <>
      <LoginWrapper onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name:</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <Button>Start</Button>
      </LoginWrapper>
    </>
  );
};

export default Login;
