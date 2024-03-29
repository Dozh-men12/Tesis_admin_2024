import React from "react";

function DashboardCards({ number, icon, description }) {
  return (
    <div className=" rounded-xl font-second bg-white border-2 border-sky-200 flex flex-row  h-screen max-h-[119px] max-w-[286px] gap-3">
      <div className="flex flex-col gap-4 sm:gap-1">
        <div className="mx-7 mt-4">
          <h1>
            <u className="text-3xl  text-[#04103B] ">{number}</u>
          </h1>
        </div>
        <div className="mx-4">
          <p className="text-md text-[#797D8C]">{description}</p>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center">{icon}</div>
    </div>
  );
}

export default DashboardCards;
