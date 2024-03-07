import React from "react";
import DashboardCards from "./components/DashboardCards";
import { dashboardCardsData } from "./constants";

function DashboardPage() {
  return (
    <main className="grid grid-cols-3 grid-rows-2 items-center gap-10 mx-20">
      {dashboardCardsData.map((card, index) => (
        <DashboardCards
          key={index}
          number={card.number}
          description={card.description}
          icon={card.icono}
        />
      ))}
    </main>
  );
}

export default DashboardPage;
