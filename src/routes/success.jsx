import React from "react";
import { Link, useParams } from "react-router-dom";
import { EntriesCopy, AlwaysAndNeverWearEntries } from "./Components/EntriesCopy";
import Header from "./Components/Header";
import { useSelector, useDispatch } from "react-redux";

const Success = (props) => {
  const detailsRedux = useSelector((state) => state.details.value);
  console.log("detailsRedux", detailsRedux);

  // let { id } = useParams();
  // console.log("id: ", id);
  const { details, alwaysWearSelect, neverWearSelect } = props;
  // const details = props.details;
  // const alwaysWearSelect = props.alwaysWearSelect;
  // const neverWearSelect = props.neverWearSelect;
  // const entries = Object.entries(details);
  const entries = Object.entries(detailsRedux);
  const alwaysEntries = Object.entries(alwaysWearSelect);
  const neverWearEntries = Object.entries(neverWearSelect);

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Perfect! Ive got all i need!</h2>
        <div class="success-cunteiner">
          <EntriesCopy entries={entries} />
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
