import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
