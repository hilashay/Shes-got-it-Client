import React from "react";
import styled from "styled-components";

const CheckboxInput = (props) => {
  const { value, type, onChange, label } = props;
  return (
    <CheckboxContainer>
      <input type="checkbox" value={value} name={type} onChange={onChange} />
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};

export default CheckboxInput;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Label = styled.label`
  font-size: medium;
`;
