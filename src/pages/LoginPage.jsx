import React from "react";
import logo_tecsup from "../assets/login/tecsup_logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="h-screen w-screen  bg-slate-800 flex items-center justify-center ">
      <div className="bg-white grid grid-cols-2  rounded-xl ">
        <div className="flex items-center flex-col justify-center pb-10 pt-5 px-20">
          <img src={logo_tecsup} className=" w-[330px]" alt="logo_tecsup" />

          <div className="flex flex-col gap-1 mt-16">
            <p className="font-bold ">Ingrese su correo</p>
            <input
              type="email"
              placeholder="admin@tecsup.edu.pe"
              className="border border-gray-dark rounded-md  w-[452px] h-[34px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <p className="font-bold">Ingrese su contraseña</p>
            <div className="border border-gray-dark rounded-md  w-[452px] h-[34px] px-3 flex">
              <input
                placeholder="Ingrese su contraseña"
                className="w-[400px] h-[30px] mt-[1px]  shadow-none bg-none border-none focus:outline-none focus:ring-0"
                required
              />
              <div className="my-auto ml-[9px] cursor-pointer"></div>
            </div>
            <div>
              <Link to="/dashboard-page">
                <a className="flex py-2 text-center bg-[#18A8D6] flex-row justify-center items-center rounded-md mt-10">
                  INICAR SESION
                </a>
              </Link>
            </div>
            <div>
              <a className=" px-20 py-2 text-center bg-[#3369e8] rounded-md font-bold flex flex-row justify-center items-center mt-5 ">
                Ingresa con tu correo de Tecsup
              </a>
            </div>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center mt-[15px] text-[0.875em]  hover:text-blue-300 hover:underline underline-offset-1"
            >
              ¿Olvidó su contraseña?
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#70BBDB] md:rounded-r-xl  ">
          parte derecha
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
