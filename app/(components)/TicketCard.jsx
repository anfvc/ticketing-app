import React from "react";
import DeleteButton from "./DeleteButton";
import PriorityDisplay from "./Priority";
import { ProgressDisplay } from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ticket}) => {

  console.log(ticket);
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteButton />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description. Please work on this ticket.
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 justify-between items-center">
        <div className="flex flex-col">
          <p className="text-xs">31.08.2023 - 10:43 AM</p>
          <ProgressDisplay />
        </div>
        <div>
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
