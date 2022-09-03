import React from "react";
import TextInput from "./TextInput";
import ErrorValidation from "./ErrorValidation";
import Required from "./UI/Required";
import styled from "styled-components";

const TextInputAndValidation = ({ labelText, fieldName, onChange, shouldShowError }) => {
  return (
    <TextInputContainer>
      <TextInput label={labelText} onChange={onChange} />
      {shouldShowError ? <ErrorValidation field={fieldName} /> : <Required>*Required</Required>}
    </TextInputContainer>
  );
};

export default TextInputAndValidation;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 220px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
