import React from "react";
import TextInput from "./TextInput";
import ErrorValidation from "./ErrorValidation";
import styled from "styled-components";

const TextInputAndValidation = ({ labelText, fieldName, onChange, shouldShowError }) => {
  return (
    <Container>
      <TextInput label={labelText} onChange={onChange} />
      {shouldShowError ? (
        <ErrorValidation field={fieldName} />
      ) : (
        <span class="required">*Required</span>
      )}
    </Container>
  );
};

export default TextInputAndValidation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
