import React from "react";
import ErrorValidation from "./ErrorValidation";

const RangeInputAndValidation = ({ step, id, name, onChange, max, fieldName, shouldShowError }) => {
  return (
    <>
      <label for={fieldName}>{fieldName}</label>
      <input type="range" step={step} id={id} name={name} onChange={onChange} min={0} max={max} />
      {shouldShowError ? (
        <ErrorValidation field={fieldName} />
      ) : (
        <span class="required">*Required</span>
      )}
    </>
  );
};

export default RangeInputAndValidation;
