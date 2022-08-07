import CheckboxInput from "./CheckboxInput";

const NeverWearInputContainer = ({ neverWearChangeHandler }) => {
  return (
    <div>
      <CheckboxInput
        value="skinny"
        type="skinny"
        label="Skinny"
        onChange={neverWearChangeHandler}
      />
      <CheckboxInput value="tight" type="tight" label="Tight" onChange={neverWearChangeHandler} />
      <CheckboxInput value="loose" type="loose" label="Loose" onChange={neverWearChangeHandler} />
      <CheckboxInput value="slim" type="slim" label="Slim" onChange={neverWearChangeHandler} />
      <CheckboxInput
        value="color"
        type="color"
        label="Some Color"
        onChange={neverWearChangeHandler}
      />
      <CheckboxInput value="other" type="other" label="Other " onChange={neverWearChangeHandler} />
    </div>
  );
};

export default NeverWearInputContainer;
