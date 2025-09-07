import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeleteButton = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="icon text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteButton;
