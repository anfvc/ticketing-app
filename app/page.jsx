import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  // This function is outside the component because it doesn't need to be redefined on every render + it's a helper function that can be reused.
  try {
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    }); //? cache: "no-store" - Next.js fetches the resource from the remote server on every request,

    return response.json();
  } catch (error) {
    console.log("Failed to get tickets.", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  console.log(tickets);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  // //? Set will remove the duplicates, and ... will spread the values into an array
  // console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="w-full grid lg:grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      key={_index}
                      id={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
