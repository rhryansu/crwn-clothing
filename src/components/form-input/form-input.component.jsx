import React from "react";
import { DebounceInput } from "react-debounce-input";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <DebounceInput {...otherProps} />
    </div>
  );
};

export default FormInput;
