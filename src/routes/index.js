import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home/";
import Manjam from "../components/Manjam/";
import Settings from "../components/wishlist/settings";
import AddItems from "../components/AddItems";
import ItemUpdate from "../components/wishlist/itemUpdate";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />

      <Route exact component={Manjam} path="/manjam" />
      <Route exact component={Home} path="/favorites" />
      <Route exact component={Home} path="/nearby" />
      <Route exact component={AddItems} path="/add-item" />
      <Route component={ItemUpdate} path="/items/:itemID/update/" />
      <Route component={Settings} path="/wishlist/:wishListID/settings/" />
    </Switch>
  );
};

export default Routes;
