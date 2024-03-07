import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { MdToday } from "react-icons/md";

export const navbarData = [
  {
    icono: <RxDashboard size={25} />,
    texto: "Dashboard",
    URL: "/dashboard-page",
  },
  {
    icono: <MdToday size={25} />,
    texto: "Hoy",
    URL: "/today-page",
  },
  {
    icono: <FaUsers size={25} />,
    texto: "Usuarios",
    URL: "/users-page",
  },
  {
    icono: <GrHistory size={25} />,
    texto: "Historial",
    URL: "/reservation-history",
  },
];
