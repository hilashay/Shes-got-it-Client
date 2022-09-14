import CheckboxInput from "./CheckboxInput";

const NeverWearInputContainer = ({ onChange }) => {
  return (
    <div>
      <CheckboxInput value="skinny" type="skinny" label="Skinny" onChange={onChange} />
      <CheckboxInput value="tight" type="tight" label="Tight" onChange={onChange} />
      <CheckboxInput value="loose" type="loose" label="Loose" onChange={onChange} />
      <CheckboxInput value="slim" type="slim" label="Slim" onChange={onChange} />
      <CheckboxInput value="color" type="color" label="Some Color" onChange={onChange} />
      <CheckboxInput value="other" type="other" label="Other " onChange={onChange} />
    </div>
  );
};

export default NeverWearInputContainer;
