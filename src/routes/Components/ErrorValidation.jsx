import React from "react";
import Required from "./UI/Required";

let errorMessage = "";

const ErrorValidation = (props) => {
  if (props.field.length === 0) {
    errorMessage = <span class="requirederror">*Required</span>;
    return errorMessage;
  }
  if (props.field.length === 1) {
    errorMessage = <span class="requirederror">*Required at least two charcters</span>;
    return errorMessage;
  } else {
    return (errorMessage = <Required>*Required</Required>);
  }
};

export default ErrorValidation;
