import React from "react";
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<string, HTMLElement> {}

const TextInput: React.FC<IProps> = ({
  input,
  label,
  inline,
  width,
  type,
  inputType,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        {...input}
        type={inputType}
        className="form-control"
        placeholder={placeholder}
      />
      {touched && !!error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
