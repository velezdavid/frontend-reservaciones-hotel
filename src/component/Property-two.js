import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import properties from "./Properties/data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "tiny-slider/dist/tiny-slider.css";
import { Link2 } from "react-feather";
import { BASE_URL } from "../utils/constants";

const settings = {
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    992: {
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

const PropertyTwo = ({ rooms }) => {
  return (
    <React.Fragment>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Habitaciones disponible
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Explora nuestra increíble lista de habitaciones diseñadas para
            brindarte un confort excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8 relative">
          <div className="tiny-home-slide-three">
            <TinySlider settings={settings}>
              {rooms?.map((item, index) => {
                const { attributes } = item;
                const { fotos } = attributes;

                return (
                  <div className="tiny-slide" key={index}>
                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
                      <div className="relative">
                        <img
                          className="w-full h-40"
                          src={`${BASE_URL}${fotos.data[0].attributes.formats.thumbnail.url}`}
                          alt=""
                        />

                        <div className="absolute top-4 end-4">
                          <Link
                            to="#"
                            className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                          >
                            <i className="mdi mdi-heart mdi-18px"></i>
                          </Link>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="pb-6 flex items-center justify-between">
                          <Link
                            to={`/property-detail/${item.id}`}
                            className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                          >
                            {attributes.titulo}
                          </Link>
                          <span className="text-right text-gray-500 text-sm">
                            {attributes.categoria}
                          </span>
                        </div>

                        <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none flex-wrap h-48">
                          <div className="flex items-center mb-4 w-full justify-center gap-3">
                            <li className="flex items-center">
                              <i className="uil uil-compress-arrows text-xl me-2 text-green-600"></i>
                              <span className="text-xs">{`${attributes.capacidad_personas} máx. pers.`}</span>
                            </li>
                            <li className="flex items-center">
                              <i className="uil uil-bed-double text-xl me-2 text-green-600"></i>
                              <span className="text-xs">{`${attributes.camas} camas`}</span>
                            </li>
                            <li className="flex items-center ">
                              <i className="uil uil-bath text-xl me-2 text-green-600"></i>
                              <span className="text-xs">{`${attributes.banos} baños`}</span>
                            </li>
                          </div>
                          <div className="flex items-center mb-4 w-full justify-center gap-3">
                            {attributes.tv && (
                              <li className="flex items-center">
                                <i className="uil uil-tv-retro text-xl me-2 text-green-600"></i>
                                <span className="text-xs">tv</span>
                              </li>
                            )}
                            {attributes.aire_acondicionado && (
                              <li className="flex items-center">
                                <i className="uil uil-snowflake text-xl me-2 text-green-600"></i>
                                <span className="text-xs">A/A</span>
                              </li>
                            )}

                            {attributes.wifi && (
                              <li className="flex items-center">
                                <i className="uil uil-wifi text-xl me-2 text-green-600"></i>
                                <span className="text-xs">wifi</span>
                              </li>
                            )}
                            {attributes.lavanderia && (
                              <li className="flex items-center">
                                <i className="uil uil-water text-xl me-2 text-green-600"></i>
                                <span className="text-xs">lavanderia</span>
                              </li>
                            )}
                          </div>
                          <div className="flex items-center mb-4 w-full justify-center gap-3">
                            {attributes.agua_caliente && (
                              <li className="flex items-center">
                                <i className="uil uil-tear text-xl me-2 text-green-600"></i>
                                <span className="text-xs">A.C</span>
                              </li>
                            )}
                            {attributes.minibar && (
                              <li className="flex items-center">
                                <i className="uil uil-glass-martini-alt text-xl me-2 text-green-600"></i>
                                <span className="text-xs">minibar</span>
                              </li>
                            )}
                            {attributes.estacionamiento && (
                              <li className="flex items-center">
                                <i className="uil uil-car-sideview text-xl me-2 text-green-600"></i>
                                <span className="text-xs">Park</span>
                              </li>
                            )}

                            {attributes.areas_verdes && (
                              <li className="flex items-center">
                                <i className="uil uil-trees text-xl me-2 text-green-600"></i>
                                <span className="text-xs">A. verdes</span>
                              </li>
                            )}
                          </div>
                        </ul>

                        <ul className="pt-6 flex justify-between items-center list-none">
                          <li>
                            <span className="text-slate-400">Precio</span>
                            <p className="text-lg font-medium">
                              ${attributes.precio}
                            </p>
                          </li>

                          <div className="mt-4">
                            <Link
                              to={`/property-detail/${item.id}`}
                              className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3 "
                            >
                              Reservar
                            </Link>
                          </div>
                        </ul>
                      </div>
                    </div>
                    {/* end property content */}
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
PropertyTwo.propTypes = {
  rooms: PropTypes.array,
};

export default PropertyTwo;
