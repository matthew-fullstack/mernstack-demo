import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoginPage } from "../../features/LoginPage";
import { SignUpPage } from "../../features/SignUpPage";

export const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
      </Switch>
    </Fragment>
  );
};
