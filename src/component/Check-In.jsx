import React from "react";
import { buscarReservaciones } from "../services/reservacion.service";
import { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { setDateReservations } from "../utils/extends";

const CheckIn = ({ setRooms }) => {
  const [reservationData, setReservationData] = useState({
    checkInDate: new Date(),
    checkOutDate: (() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    })(),
    guests: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await buscarReservaciones(reservationData?.guests);
    if (data?.status === 200) {
      setRooms(data?.data?.data);
      setDateReservations(
        reservationData?.checkInDate,
        reservationData?.checkOutDate
      );
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
    <>
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
        <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
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
                      onChange={(date) => handleDateChange(date, "checkInDate")}
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
                    className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded cursor-pointer"
                    value="Buscar Habitaciones"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
CheckIn.propTypes = {
  setRooms: PropTypes.func,
};
export default CheckIn;
