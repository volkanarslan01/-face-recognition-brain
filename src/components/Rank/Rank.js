import React from "react";
const Rank = ({ name, rank }) => {
  return (
    <div>
      <div className="dark f3">{`${name}, your current rank is...`}</div>
      <div className="dark f3">{`${rank}`}</div>
    </div>
  );
};

export default Rank;
