import React from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { history } from "..";
import TextInput from "../app/common/form/TextInput";

export const SignUpPage = () => {
  return (
    <div className="mx-auto" style={{ width: "400px" }}>
      <h1 className="mt-5">Sign Up</h1>
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
              type="password"
              label="Password"
            />
            <Field
              component={TextInput}
              name="confirmPassword"
              type="password"
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
  );
};
