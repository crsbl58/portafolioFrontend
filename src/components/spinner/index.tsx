import React from "react";

const Spinner = ({ stateSpiner }: any) => {
  switch (stateSpiner) {
    case true:
      return (
        <div className="divContainerSpinner00">
          <div className="divSpinner00 animationCountTiming"></div>
        </div>
      );

    case false:
      return <React.Fragment></React.Fragment>;

    default:
      break;
  }
};

export default Spinner;
