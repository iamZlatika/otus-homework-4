import React from "react";
import Login from "components/Login";
import { useHistory } from "react-router-dom";
import { logIn } from "../services/login-service";

interface LoginPageProps {
  onLogin: (userName: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const history = useHistory();

  const handleLogin = (userName: string) => {
    logIn(userName);
    onLogin(userName);
    history.push("/");
  };

  return <Login onStart={handleLogin} />;
};

export default LoginPage;
