import React from "react";
import Login from "components/Login";
import { useHistory } from "react-router-dom";

interface LoginPageProps {
  onLogin: (userName: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const history = useHistory();

  const handleLogin = (userName: string) => {
    localStorage.setItem("Login", userName);
    onLogin(userName);
    history.push("/");
  };

  return <Login onStart={handleLogin} />;
};

export default LoginPage;
