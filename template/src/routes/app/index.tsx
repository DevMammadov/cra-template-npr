import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { MainRouter } from "./main/main.router";

export const AppRouter = () => (
  <Switch>
    <Route component={MainRouter} />
  </Switch>
);
