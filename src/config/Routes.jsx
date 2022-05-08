import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/details/Detail";
import DetailCretdit from '../pages/credit/DetailCredit';

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route exact path="/person/:id" component={DetailCretdit} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
