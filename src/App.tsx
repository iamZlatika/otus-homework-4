import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  const [login, setLogin] = useState(localStorage.getItem("Login"));

  const onLogin = (userName: string) => {
    setLogin(userName);
  };

  const onLogout = () => {
    localStorage.removeItem("Login");
    onLogout();
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" render={() => <LoginPage onLogin={onLogin} />} />
          <Route exact path="/" render={() => <MainPage login={login} onLogout={onLogout} />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
