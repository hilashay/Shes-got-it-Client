import React from "react";
import TextInput from "./TextInput";
import ErrorValidation from "./ErrorValidation";
import Required from "./UI/Required";
import Container from "./UI/InputAndValidationContainer";

const TextInputAndValidation = ({ labelText, fieldName, onChange, shouldShowError }) => {
  return (
    <Container>
      <TextInput label={labelText} onChange={onChange} />
      {shouldShowError ? <ErrorValidation field={fieldName} /> : <Required>*Required</Required>}
    </Container>
  );
};

export default TextInputAndValidation;
