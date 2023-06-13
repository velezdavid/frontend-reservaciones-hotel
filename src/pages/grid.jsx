import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Switcher from "../component/Switcher";
import PropertyTwo from "../component/Property-two";
import { useEffect } from "react";
import {
  habitacionesDisponibles,
  habitacionesDisponiblesPorCategoria,
} from "../services/reservacion.service";
import { useState } from "react";
import BackgroudImage from "../assets/images/hotel/banner.jpg";
import CheckIn from "../component/Check-In";
import { setDateReservations } from "../utils/extends";

const Grid = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const data = await habitacionesDisponibles();
      if (data?.status === 200) {
        setRooms(data?.data?.data);
        setDateReservations();
      }
    };
    getRooms();
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar navClass="navbar-white" />
      <section
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BackgroudImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Nuestras habitaciones
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container relative -mt-16 z-1">
        <div className="grid grid-cols-1">
          <CheckIn setRooms={setRooms} />
        </div>
      </div>

      <section className="relative lg:py-24 py-16" id="sectionRooms">
        <PropertyTwo rooms={rooms} />
      </section>
      {/* <!-- End --> */}
      <Footer />
      <Switcher />
    </React.Fragment>
  );
};

export default Grid;
