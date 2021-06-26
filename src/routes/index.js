import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home/";
import Manjam from "../components/Manjam/";
import ItemUpdate from "../components/wishlist/itemUpdate";
import ChooseAccount from "../components/Manjam/ChooseAccount";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Manjam} path="/manjam" />
      <Route exact component={Home} path="/favorites" />
      <Route exact component={Home} path="/nearby" />
      <Route component={ItemUpdate} path="/items/:itemID/update/" />
      <Route
        exact
        component={ChooseAccount}
        path="/wishlist/:id/settings/switch-account"
      />
    </Switch>
  );
};

export default Routes;
