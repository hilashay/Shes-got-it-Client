import React from "react";
import "../../Reviews.css";
import { formatKey } from "../../utils";

export const EntriesCopy = (props) => {
  return props.entries.map((entry) => (
    <div>
      {formatKey(entry[0])}: {entry[1]}
      <br></br>
      <br></br>
    </div>
  ));
};

export const AlwaysAndNeverWearEntries = (props) => {
  return props.alwaysAndNeverWearEntries.map((entry) => (
    <div key={entry}>{formatKey(entry[1])}</div>
  ));
};
