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

const IndexTwo = ({ activeTabIndex = 0, navClass = "navbar-white" }) => {
  const [rooms, setRooms] = useState([]);
  const [reservationData, setReservationData] = useState({
    checkInDate: new Date(),
    checkOutDate: (() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    })(),
    guests: 1,
  });

  useEffect(() => {
    const getRooms = async () => {
      const data = await habitacionesDisponibles();
      if (data?.status === 200) {
        setRooms(data?.data?.data);
      }
    };
    getRooms();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await buscarReservaciones(reservationData?.guests);
    if (data?.status === 200) {
      setRooms(data?.data?.data);
      const section = document.getElementById("sectionRooms");
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDateChange = (date, field) => {
    setReservationData((prevState) => ({
      ...prevState,
      [field]: date,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };

  return (
    <React.Fragment>
      <Navbar navClass={navClass} />
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

            <ul
              className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 mt-10 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800"
              id="myTab"
              data-tabs-toggle="#StarterContent"
              role="tablist"
            >
              <li role="presentation" className="inline-block">
                <button
                  onClick={() => {}}
                  className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out hover:text-green-600 `}
                  id="buy-home-tab"
                  data-tabs-target="#buy-home"
                  type="button"
                  role="tab"
                  aria-controls="buy-home"
                  aria-selected="true"
                >
                  Check-In
                </button>
              </li>
            </ul>

            <div
              id="StarterContent"
              className="p-6 bg-white dark:bg-slate-900 md:rounded-xl rounded-none shadow-md dark:shadow-gray-700"
            >
              {activeTabIndex === 0 && (
                <div
                  id="buy-home"
                  role="tabpanel"
                  aria-labelledby="buy-home-tab"
                >
                  <form action="#">
                    <div className="registration-form text-dark text-start">
                      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6">
                        <div>
                          <label className="form-label text-slate-900 dark:text-white font-medium">
                            Entrada : <span className="text-red-600">*</span>
                          </label>
                          <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                            <i className="uil uil-calendar-alt icons"></i>
                            <DatePicker
                              name="checkInDate"
                              selected={reservationData?.checkInDate}
                              onChange={(date) =>
                                handleDateChange(date, "checkInDate")
                              }
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              dateFormat="dd/MM/yyyy"
                              minDate={new Date()}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label text-slate-900 dark:text-white font-medium">
                            Salida : <span className="text-red-600">*</span>
                          </label>
                          <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                            <i className="uil uil-calendar-alt icons"></i>
                            <DatePicker
                              name="checkOutDate"
                              selected={reservationData?.checkOutDate}
                              onChange={(date) =>
                                handleDateChange(date, "checkOutDate")
                              }
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              dateFormat="dd/MM/yyyy"
                              minDate={reservationData?.checkInDate}
                              required
                            />
                          </div>
                        </div>

                        <div className="flex flex-col ">
                          <label
                            htmlFor="buy-min-price"
                            className="form-label text-slate-900 dark:text-white font-medium"
                          >
                            Huéspedes : <span className="text-red-600">*</span>
                          </label>
                          <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                            <i className="uil uil-bed icons"></i>
                            <select
                              className="form-select flex-1 bg-gray-50 dark:bg-slate-800"
                              data-trigger
                              name="guests"
                              id="choices-min-price-buy"
                              aria-label="Default select example"
                              value={reservationData.guests}
                              onChange={handleInputChange}
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>

                        <div className="lg:mt-6">
                          <input
                            type="submit"
                            id="search-buy"
                            name="search"
                            className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded"
                            value="Buscar Habitaciones"
                            onClick={handleSubmit}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero End */}

      <section className="relative md:pb-24 pb-16" id="sectionRooms">
        {rooms.length > 0 && <PropertyTwo rooms={rooms} />}

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
