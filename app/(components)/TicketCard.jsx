import React from "react";
import DeleteButton from "./DeleteButton";
import PriorityDisplay from "./Priority";
import { ProgressDisplay } from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  console.log(ticket);
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteButton />
        </div>
      </div>
      <h4 className="mb-2">
        {ticket.title[0].toUpperCase() + ticket.title.slice(1)} {/* Capitalize first letter of the ticket title */}
      </h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap border border-page p-2 text-xs">{ticket.description[0].toUpperCase() + ticket.description.slice(1)}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-xs">{ticket.createdAt}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div>
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
