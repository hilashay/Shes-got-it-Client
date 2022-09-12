import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useCount = () => {
  const count = useSelector((state) => state.counter.value);

  return count;
};

export default useCount;
