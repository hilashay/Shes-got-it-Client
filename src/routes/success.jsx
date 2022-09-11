import React from "react";
import { Link, useParams } from "react-router-dom";
import { Entries, AlwaysAndNeverWearEntries } from "./Components/Entries";
import Header from "./Components/Header";
import { useSelector, useDispatch } from "react-redux";

const Success = (props) => {
  const name = useSelector((state) => state.name.value);
  console.log("name", name);

  // let { id } = useParams();
  // console.log("id: ", id);
  const { details, alwaysWearSelect, neverWearSelect } = props;
  // const details = props.details;
  // const alwaysWearSelect = props.alwaysWearSelect;
  // const neverWearSelect = props.neverWearSelect;
  const entries = Object.entries(details);
  const alwaysEntries = Object.entries(alwaysWearSelect);
  const neverWearEntries = Object.entries(neverWearSelect);

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Perfect! Ive got all i need!</h2>
        name: {name}
        <div class="success-cunteiner">
          <Entries entries={entries} />
          Never wear: <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={neverWearEntries} />
          <br />
          Always wear:
          <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={alwaysEntries} />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Success;
