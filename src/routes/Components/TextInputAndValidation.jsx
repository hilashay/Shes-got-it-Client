import React from "react";
import TextInput from "./TextInput";
import ErrorValidation from "./ErrorValidation";

const TextInputAndValidation = ({ labelText, fieldName, onChange, shouldShowError }) => {
  return (
    <>
      <TextInput label={labelText} onChange={onChange} />
      {shouldShowError ? (
        <ErrorValidation field={fieldName} />
      ) : (
        <span class="required">*Required</span>
      )}
    </>
  );
};

export default TextInputAndValidation;
