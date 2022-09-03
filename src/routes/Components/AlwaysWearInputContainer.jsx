import CheckboxInput from "./CheckboxInput";

const AlwaysWearInputContainer = ({ alwaysWearChangeHandler }) => {
  return (
    <div>
      <CheckboxInput
        value="skinny"
        type="skinny"
        label="Skinny"
        onChange={alwaysWearChangeHandler}
      />
      <CheckboxInput value="tight" type="tight" label="Tight" onChange={alwaysWearChangeHandler} />
      <CheckboxInput value="loose" type="loose" label="Loose" onChange={alwaysWearChangeHandler} />
      <CheckboxInput value="slim" type="slim" label="Slim" onChange={alwaysWearChangeHandler} />
      <CheckboxInput
        value="color"
        type="color"
        label="Some Color"
        onChange={alwaysWearChangeHandler}
      />
      <CheckboxInput value="other" type="other" label="Other " onChange={alwaysWearChangeHandler} />
    </div>
  );
};

export default AlwaysWearInputContainer;
