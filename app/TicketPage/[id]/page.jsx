import React from "react";

const TicketPage = ({params}) => {

  console.log(params);
  return <div>TicketPage {params.id}</div>;
};

export default TicketPage;
