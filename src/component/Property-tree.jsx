import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { BASE_URL } from "../utils/constants";
import { obtenerCadenaParaQR } from "../utils/extends";

const PropertyTree = ({ hideTitle = false, rooms }) => {
  return (
    <React.Fragment>
      <div className="container lg:mt-24 mt-16">
        {!hideTitle && (
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Habitaciones disponible
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Explora nuestra increíble lista de habitaciones diseñadas para
              brindarte un confort excepcional.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 mt-8 relative">
          {/* <div className="tiny-home-slide-three"> */}
          {/* <TinySlider settings={settings}> */}
          {rooms?.map((item, index) => {
            const { attributes } = item;
            const { attributes: data } = attributes.habitacion.data;
            const { fotos } = data;
            // console.log(data);
            const qrCodeValue = obtenerCadenaParaQR({
              objeto: attributes,
              habitacionData: data,
            });
            const qrCodeImageUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${qrCodeValue}&chs=300x300`;
            return (
              <div
                className="group lg:flex rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3"
                key={index}
              >
                {/* <div className="group flex rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3"> */}
                <div className="relative w-full lg:w-64">
                  <img
                    className="w-full h-full"
                    src={`${BASE_URL}${fotos?.data?.[0]?.attributes?.formats?.thumbnail?.url}`}
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

                <div className="flex-1 p-6">
                  <div className="pb-2 flex items-center justify-between">
                    <h1 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">
                      {data.titulo}
                    </h1>
                    <span className="text-right text-gray-500 text-sm">
                      {data.categoria}
                    </span>
                  </div>
                  <div className=" flex items-center justify-between">
                    <h1 className="text-sm hover:text-green-600 font-medium ease-in-out duration-500">
                      <strong>CheckIn: </strong> {attributes.entrada} -{" "}
                      <strong>CheckOut: </strong>
                      {attributes.salida}
                    </h1>
                  </div>

                  <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none flex-wrap h-48">
                    <div className="flex items-center mb-4 w-full justify-center gap-3">
                      <li className="flex items-center">
                        <i className="uil uil-compress-arrows text-xl me-2 text-green-600"></i>
                        <span className="text-xs">{`${data.capacidad_personas} máx. pers.`}</span>
                      </li>
                      <li className="flex items-center">
                        <i className="uil uil-bed-double text-xl me-2 text-green-600"></i>
                        <span className="text-xs">{`${data.camas} camas`}</span>
                      </li>
                      <li className="flex items-center ">
                        <i className="uil uil-bath text-xl me-2 text-green-600"></i>
                        <span className="text-xs">{`${data.banos} baños`}</span>
                      </li>
                    </div>
                    <div className="flex items-center mb-4 w-full justify-center gap-3">
                      {data.tv && (
                        <li className="flex items-center">
                          <i className="uil uil-tv-retro text-xl me-2 text-green-600"></i>
                          <span className="text-xs">tv</span>
                        </li>
                      )}
                      {data.aire_acondicionado && (
                        <li className="flex items-center">
                          <i className="uil uil-snowflake text-xl me-2 text-green-600"></i>
                          <span className="text-xs">A/A</span>
                        </li>
                      )}

                      {data.wifi && (
                        <li className="flex items-center">
                          <i className="uil uil-wifi text-xl me-2 text-green-600"></i>
                          <span className="text-xs">wifi</span>
                        </li>
                      )}
                      {data.lavanderia && (
                        <li className="flex items-center">
                          <i className="uil uil-water text-xl me-2 text-green-600"></i>
                          <span className="text-xs">lavanderia</span>
                        </li>
                      )}
                    </div>
                    <div className="flex items-center mb-4 w-full justify-center gap-3">
                      {data.agua_caliente && (
                        <li className="flex items-center">
                          <i className="uil uil-tear text-xl me-2 text-green-600"></i>
                          <span className="text-xs">A.C</span>
                        </li>
                      )}
                      {data.minibar && (
                        <li className="flex items-center">
                          <i className="uil uil-glass-martini-alt text-xl me-2 text-green-600"></i>
                          <span className="text-xs">minibar</span>
                        </li>
                      )}
                      {data.estacionamiento && (
                        <li className="flex items-center">
                          <i className="uil uil-car-sideview text-xl me-2 text-green-600"></i>
                          <span className="text-xs">Park</span>
                        </li>
                      )}

                      {data.areas_verdes && (
                        <li className="flex items-center">
                          <i className="uil uil-trees text-xl me-2 text-green-600"></i>
                          <span className="text-xs">A. verdes</span>
                        </li>
                      )}
                    </div>
                  </ul>
                </div>
                <div className="relative">
                  <img className="w-full" src={qrCodeImageUrl} alt="" />
                </div>
                {/* </div> */}
                {/* end property content */}
              </div>
            );
          })}
          {/* </TinySlider> */}
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
PropertyTree.propTypes = {
  rooms: PropTypes.array,
  hideTitle: PropTypes.bool,
};

export default PropertyTree;
