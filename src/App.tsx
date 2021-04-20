import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { getCurrentUser, logOut } from "./services/login-service";

const App: React.FC = () => {
  const [login, setLogin] = useState(getCurrentUser());

  const onLogin = (userName: string) => {
    setLogin(userName);
  };

  const onLogout = () => {
    logOut();
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
