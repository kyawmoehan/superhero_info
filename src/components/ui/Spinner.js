import React from "react";
import Loading from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Loading}
      alt="Loading"
      style={{ width: "80px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
