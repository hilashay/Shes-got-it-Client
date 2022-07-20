import React from "react";

const TextInput = (props) => {
  return (
    <div className="input-group">
      <label className="label-input">{props.label}</label>
      <input type="text" onChange={props.onChange} />
    </div>
  );
};

export default TextInput;
