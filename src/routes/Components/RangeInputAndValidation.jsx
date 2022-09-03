import React from "react";
import ErrorValidation from "./ErrorValidation";
import Required from "./UI/Required";
import Container from "./UI/InputAndValidationContainer";
import styled from "styled-components";

const RangeInputAndValidation = ({
  step,
  id,
  name,
  onChange,
  max,
  fieldName,
  shouldShowError,
  details,
}) => {
  return (
    <Container>
      <label className="label-input" for={fieldName}>
        {fieldName}
      </label>
      <RangeContainer>
        <input type="range" step={step} id={id} name={name} onChange={onChange} min={0} max={max} />
        <DisplayRange>{details.budget}</DisplayRange>
      </RangeContainer>
      {shouldShowError ? <ErrorValidation field={fieldName} /> : <Required>*Required</Required>}
    </Container>
  );
};

export default RangeInputAndValidation;

const DisplayRange = styled.div`
  font-style: italic;
  font-size: smaller;
  font-size: small;
  align-self: flex-end;
  line-height: 0px;
  margin-bottom: 10px;
`;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
