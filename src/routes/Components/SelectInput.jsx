import React, { useEffect } from "react";
import styled from "styled-components";

const SelectInput = (props) => {
  return (
    <SelectInputContainer
      style={{
        display: "flex",
        margin: 10,
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <label className="label-input">{props.label}</label>
      <Select onChange={props.onChange}>
        {props.sizes.map((size, index) => (
          <option key={size} value={props.sizes[index]}>
            {size}
          </option>
        ))}
      </Select>
    </SelectInputContainer>
  );
};

export default SelectInput;

const SelectInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  border: solid 1px;
  border-radius: 4px;
  background-color: #f1f1f1;
`;
