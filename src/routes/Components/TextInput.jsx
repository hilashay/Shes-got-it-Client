import React from "react";
import styled from "styled-components";

const TextInput = (props) => {
  return (
    <Container>
      <label className="label-input">{props.label}</label>
      <input type="text" onChange={props.onChange} />
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 200px;
`;
