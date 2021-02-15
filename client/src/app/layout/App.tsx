import React, { Fragment, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardPage } from "../../features/dashboard/DashboardPage";
import { LoginPage } from "../../features/LoginPage";
import { SignUpPage } from "../../features/SignUpPage";
import { BrowserRouter as Router, useParams as setParams } from 'react-router-dom'
import { history } from "../..";
import { NavBar } from "../../features/NavBar";

export const App = () => {

  useEffect(() => {
    const { pathname } = history.location;
    if (window.localStorage.getItem('jwt') &&
      (pathname === '/login' || pathname === '/signUp')) {
      history.push('/dashboard')
    }
    console.log(history);
  }, [])

  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />

        <Route render={() => {
          return (
            <div className="container">
              <NavBar />
              <DashboardPage />
            </div>
          )
        }} />

      </Switch>
    </Fragment>
  );
};
