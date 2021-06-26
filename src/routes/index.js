import React from "react";
import { Route, Switch } from "react-router";
import AddItems from "../components/AddItems";
// Components
import Home from "../components/Home/";
import Manjam from "../components/Manjam/";
import ChooseAccount from "../components/Manjam/ChooseAccount";
import ItemUpdate from "../components/wishlist/itemUpdate";
import ItemsList from "../components/wishlist/itemUpdate/ItemsList";
import Settings from "../components/wishlist/settings";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />

      <Route component={ItemsList} path="/manjam/:manjamID/" />
      <Route exact component={Manjam} path="/manjam" />
      <Route exact component={Home} path="/favorites" />
      <Route exact component={Home} path="/nearby" />
      <Route exact component={AddItems} path="/add-item/:wishlistId" />
      <Route component={ItemUpdate} path="/items/:itemID/update/" />
      <Route
        exact
        component={ChooseAccount}
        path="/wishlist/:id/settings/switch-account"
      />
      <Route component={Settings} path="/wishlist/:wishlistID/settings/" />
    </Switch>
  );
};

export default Routes;
