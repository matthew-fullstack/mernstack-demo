import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { history } from "..";
import agent from "../app/api/agent";
import TextInput from "../app/common/form/TextInput";
import { loginFormValues } from "../app/models/loginFormValues";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = (values: loginFormValues) => {
    setLoading(true);
    agent.User.login(values)
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="mx-auto" style={{ width: "400px" }}>
      <h1 className="mt-5">Login</h1>
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
  );
};
