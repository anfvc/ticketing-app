import React from "react";

const StatusDisplay = ({ status }) => {
  return (
    <p className="text-xs">Status:{" "}
      <span className="inline-block rounded-full px-2 py-1 text-xs font-bold text-gray-900 bg-green-200">
        {status[0].toUpperCase() + status.slice(1)}
      </span>
    </p>
  );
};

export default StatusDisplay;
