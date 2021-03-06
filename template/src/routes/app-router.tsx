import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() => import("views").then((module) => ({ default: module.Main })));

export const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
