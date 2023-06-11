import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Switcher from "../component/Switcher";
import PropertyTwo from "../component/Property-two";
import { useEffect } from "react";
import { habitacionesDisponiblesPorCategoria } from "../services/reservacion.service";
import { useState } from "react";
import BackgroudImage from "../assets/images/hotel/banner.jpg";

const Grid = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const data = await habitacionesDisponiblesPorCategoria("Simple");
      if (data?.status === 200) {
        setRooms(data?.data?.data);
      }
    };
    getRooms();
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectElement = document.querySelector("#choices-catagory-rent");
    const selectedValue = encodeURIComponent(selectElement.value);
    const data = await habitacionesDisponiblesPorCategoria(selectedValue);
    if (data?.status === 200) {
      setRooms(data?.data?.data);
    }
  };

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
        <div className="grid grid-cols-1 lg:w-1/2 lg:m-auto">
          <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
            <div className="registration-form text-dark text-start">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="buy-properties"
                    className="form-label text-slate-900 dark:text-white font-medium"
                  >
                    Selecciona categoria:
                  </label>
                  <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2 ">
                    <i className="uil uil-estate icons"></i>
                    <select
                      className="form-select flex-1 bg-gray-50 dark:bg-slate-800"
                      data-trigger
                      name="choices-catagory"
                      id="choices-catagory-rent"
                      aria-label="Default select example"
                    >
                      <option value="Simple" defaultValue>
                        Simple
                      </option>
                      <option value="Doble">Doble</option>
                      <option value="Triple">Triple</option>
                      <option value="Familiar">Familiar</option>
                      <option value="Familiar + Plus">Familiar + Plus</option>
                    </select>
                  </div>
                </div>

                <div className="lg:mt-8">
                  <input
                    type="submit"
                    id="search-rent"
                    name="search"
                    onClick={handleSubmit}
                    className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded cursor-pointer"
                    value="Buscar"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section className="relative lg:py-24 py-16">
        <PropertyTwo rooms={rooms} hideTitle={true} />
      </section>
      {/* <!-- End --> */}
      <Footer />
      <Switcher />
    </React.Fragment>
  );
};

export default Grid;
