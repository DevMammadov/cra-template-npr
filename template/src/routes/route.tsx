import React, { Suspense, FC } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "views/layout";

export interface IRoutes {
  history: any;
}

const Routes: FC<IRoutes> = ({ history }) => {
  return (
    <Router history={history}>
      <Suspense fallback={<>loading...</>}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
