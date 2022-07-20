import { useState, useEffect } from "react";

const useComments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  // console.log(data);
  return data;
};

export default useComments;
