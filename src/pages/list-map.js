import React, { Component, useEffect } from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import PaginationTwo from "../component/Pagination-two";
import BackgroudImage from "../assets/images/hotel/banner.jpg";

import properties from "../config/grid-data";
import Switcher from "../component/Switcher";
import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
import Footer from "../component/Footer";
import PropertyTwo from "../component/Property-two";
import { useState } from "react";
import {
  habitacionesDisponibles,
  obtenerReservacionPorUsuario,
} from "../services/reservacion.service";
import PropertyTree from "../component/Property-tree";
import { obtenerUsuario } from "../services/auth.service";

const ListMap = () => {
  const [rooms, setRooms] = useState([]);
  const usuario = obtenerUsuario();

  useEffect(() => {
    const getRooms = async (id) => {
      const data = await obtenerReservacionPorUsuario(id);
      if (data?.status === 200) {
        setRooms(data?.data?.data);
      }
    };
    getRooms(usuario?.id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar navClass="navbar-white" />

      <section className="relative">
        <div className="container-fluid">
          <section
            className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${BackgroudImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container">
              <div className="grid grid-cols-1 text-center mt-10 ">
                <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                  Mi historial de reservaciones
                </h3>
              </div>
            </div>
          </section>
          <div class="relative">
            <div class="shape overflow-hidden z-1 text-white dark:text-slate-900">
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
          <div className="grid ">
            <div>
              <section className="relative lg:py-24 py-16" id="sectionRooms">
                <PropertyTree rooms={rooms} hideTitle={true} />
              </section>

              <Footer />
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </React.Fragment>
  );
};

export default ListMap;
