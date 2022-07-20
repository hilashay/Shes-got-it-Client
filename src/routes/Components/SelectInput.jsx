import React, { useEffect } from "react";

const SelectInput = (props) => {
  // "idan";

  return (
    <div
      style={{
        display: "flex",
        margin: 10,
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <label className="label-input">{props.label}</label>
      <select className="option" onChange={props.onChange}>
        {props.sizes.map((size, index) => (
          <option key={size} value={props.sizes[index]}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
