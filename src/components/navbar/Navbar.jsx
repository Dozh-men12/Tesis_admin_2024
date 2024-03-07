import React from "react";
import { Link, Outlet } from "react-router-dom";
import tecsup_logo from "../../assets/login/tecsup_logo.png";
import ButtonNavbar from "./components/ButtonNavbar";
import { navbarData } from "./constants";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

function Navbar() {
  return (
    <>
      <header className="bg-white w-screen mb-5 shadow-md px-5">
        <nav className="p-1 items-center justify-between flex   ">
          <div>
            <img src={tecsup_logo} alt="logo_tecsup " className="h-14" />
          </div>
          <ul className="flex flex-row gap-3">
            {navbarData.map((button, index) => (
              <li key={index}>
                <Link to={button.URL}>
                  <ButtonNavbar icon={button.icono} texto={button.texto} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex my-auto gap-6 text-black  cursor-pointer">
            <div className="my-auto bg-slate-300 p-[9px]  items-center rounded-full">
              <MdOutlineWbSunny className="" size={22} />
            </div>
            <div className="my-auto bg-slate-300 p-[9px] flex  justify-center items-center rounded-full">
              <IoNotificationsOutline className="" size={24} />
            </div>
            <div className="my-auto">
              <FaUserCircle className="" size={45} />
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
