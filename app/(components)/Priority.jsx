import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeart } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = ({ priority }) => {
  console.log(priority);
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faHeart}
        className={`${priority > 0 }`}
      />
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
    </div>
  );
};

export default PriorityDisplay;
