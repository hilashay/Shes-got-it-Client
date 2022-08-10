import React from "react";
import styled from "styled-components";

const TextInput = (props) => {
  return (
    <TextInputContainer>
      <label className="label-input">{props.label}</label>
      <input type="text" onChange={props.onChange} />
    </TextInputContainer>
  );
};

export default TextInput;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 220px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
