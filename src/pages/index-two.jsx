import React, { useEffect, useState } from "react";
import { Link as Link2 } from "react-router-dom";

import BackgroudImage from "../assets/images/hotel/banner.jpg";

import Navbar from "../component/Navbar";
import ClientTwo from "../component/Client-two";
import PropertyTwo from "../component/Property-two";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  buscarReservaciones,
  habitacionesDisponibles,
} from "../services/reservacion.service";
import CheckIn from "../component/Check-In";
import { setDateReservations } from "../utils/extends";

const IndexTwo = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const data = await habitacionesDisponibles();
      if (data?.status === 200) {
        setRooms(data?.data?.data.sort(() => Math.random() - 0.5).slice(0, 6));
        setDateReservations();
      }
    };
    getRooms();
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar navClass="navbar-white" />
      {/* Hero Start  */}

      <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
        <div
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
        ></div>
        <div className="absolute inset-0 bg-black/70 z-2"></div>
        <div className="container z-3">
          <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
              <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                Explora el destino perfecto <br /> para hospedarte
              </h1>
              <p className="text-white/70 text-xl max-w-xl mx-auto">
                Suma momentos inolvidables a tu viaje mientras te envolvemos en
                un ambiente de confortable y hospitalidad
              </p>
            </div>

            <CheckIn setRooms={setRooms} />
          </div>
        </div>
      </section>

      {/* Hero End */}

      <section className="relative md:pb-24 pb-16" id="sectionRooms">
        {rooms.length > 0 && <PropertyTwo rooms={rooms.slice(0, 6)} />}

        <About />

        <Feature />

        <ClientTwo />

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
              Conéctate con nosotros: ¡Estamos aquí para atender todas tus
              consultas y necesidades!
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Estamos a tu disposición para brindarte la mejor atención. Ponte
              en contacto con nuestro equipo amable y profesional para resolver
              tus consultas, realizar reservas o recibir asistencia
              personalizada. Tu satisfacción es nuestra prioridad, y estamos
              listos para ayudarte en todo momento.
            </p>

            <div className="mt-6">
              <Link2
                to="/contact"
                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
              >
                <i className="uil uil-phone align-middle me-2"></i> Contactanos
              </Link2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
      {/* <!-- End --> */}
    </React.Fragment>
  );
  // }
};

export default IndexTwo;
