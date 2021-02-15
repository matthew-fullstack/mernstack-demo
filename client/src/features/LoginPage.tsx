import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { history } from "..";
import agent from "../app/api/agent";
import TextInput from "../app/common/form/TextInput";
import { ILoginFormValues } from "../app/models/loginFormValues";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = (values: ILoginFormValues) => {
    setLoading(true);
    agent.User.login(values)
      .then((data) => {
        console.log(data);
        window.localStorage.setItem('jwt', data.token);
        history.push('/dashboard')
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div className="row mt-md-5">
        <div className="col-md-4 offset-md-4">
          <h1>Login</h1>
          <FinalForm
            onSubmit={handleLogin}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  component={TextInput}
                  name="email"
                  type="email"
                  label="Email"
                />
                <Field
                  component={TextInput}
                  name="password"
                  inputType="password"
                  label="Password"
                />
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary mr-2"
                >
                  Login
            </button>
                <button
                  disabled={loading}
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    history.push("/signUp");
                  }}
                >
                  Register
            </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
