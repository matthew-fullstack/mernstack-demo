import React from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { history } from "..";
import TextInput from "../app/common/form/TextInput";

export const SignUpPage = () => {
  return (
    <div className="container">
      <div className="row mt-md-5">
        <div className="col-md-4 offset-md-4">
          <h1>Sign Up</h1>
          <FinalForm
            onSubmit={(values) => console.log(values)}
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
                <Field
                  component={TextInput}
                  name="confirmPassword"
                  inputType="password"
                  label="Confirm Password"
                />
                <button type="submit" className="btn btn-primary mr-2">
                  Register
            </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Cancel
            </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
