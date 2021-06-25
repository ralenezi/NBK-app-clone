import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home/";
import ItemUpdate from "../components/wishlist/itemUpdate";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route component={ItemUpdate} path="/items/:itemID/update/" />
    </Switch>
  );
};

export default Routes;
