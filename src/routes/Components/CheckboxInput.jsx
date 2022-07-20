import React from "react";

const CheckboxInput = (props) => {
  const { value, type, onChange, label } = props;
  return (
    <div>
      <input type="checkbox" value={value} name={type} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default CheckboxInput;
