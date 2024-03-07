import React from "react";

function ButtonNavbar({ icon, texto }) {
  return (
    <button className="flex flex-col py-1 w-[150px] rounded-lg hover:bg-[#F0F0F0] items-center">
      {icon}
      <span className="text-sm">{texto}</span>
    </button>
  );
}

export default ButtonNavbar;
