import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home/";
import Manjam from "../components/Manjam/";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Manjam} path="/manjam" />
      <Route exact component={Home} path="/favorites" />
      <Route exact component={Home} path="/nearby" />
    </Switch>
  );
};

export default Routes;
