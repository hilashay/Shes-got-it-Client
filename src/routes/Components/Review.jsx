import React from "react";
import { useState } from "react";

const Review = ({ name, photoUrl, comment, onClick }) => {
  // const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    // setIsActive(isActive ? false : true);
    onClick();
  };

  return (
    <div onClick={handleClick} className="review">
      <div className="userName">{name}</div>
      <div>
        <img className="photos" src={photoUrl} alt="hila" />
      </div>
      <div className="text-review">{comment}</div>
    </div>
  );
};

export default Review;
