import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "../pages/routes";
import HomePage from "../pages/HomePage/HomePage";
const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
