import React from "react";
import { Link, Link as Link2 } from "react-router-dom";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import { useEffect } from "react";
import { detalleHabitacion } from "../services/reservacion.service";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";

const PropertyDetail = ({ params }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [habitacion, setHabitacion] = useState({});
  const [urlsImagenes, setUrlsImagenes] = useState([]);

  useEffect(() => {
    const getDetail = async (id) => {
      const data = await detalleHabitacion(id);

      if (data?.status === 200) {
        const { attributes } = data?.data?.data;
        setHabitacion(attributes);
        const url = attributes?.fotos?.data.map(
          (item) => `${BASE_URL}${item.attributes.url}`
        );
        setUrlsImagenes(url);
      }
    };
    window.scrollTo(0, 0);

    getDetail(params.id);
  }, []);

  const abrirImagen = (isOpenMenuValue, photoIndexValue) => {
    setIsOpenMenu(isOpenMenuValue);
    setPhotoIndex(photoIndexValue);
  };
  console.log(habitacion);
  return (
    <React.Fragment>
      <Navbar />
      {/* <!-- Hero Start --> */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={urlsImagenes[0]}
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link2
                    to="#"
                    onClick={() => abrirImagen(true, 0)}
                    className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <i className="uil uil-camera"></i>
                  </Link2>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className=" w-full h-full object-cover"
                      src={urlsImagenes[1]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => abrirImagen(true, 0)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </Link2>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className=" w-full h-full object-cover"
                      src={urlsImagenes[2]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => abrirImagen(true, 0)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={urlsImagenes[3]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => abrirImagen(true, 0)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </Link2>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={urlsImagenes[4]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => abrirImagen(true, 0)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h4 className="text-2xl font-medium">{habitacion?.titulo}</h4>

              <ul className="py-4 flex gap-4 items-center list-none">
                <li className="flex items-center lg:me-4 me-2">
                  <i className="uil uil-compress-arrows lg:text-2xl text-xl me-2 text-green-600"></i>
                  <span className="">
                    {habitacion?.capacidad_personas} Máx. pers
                  </span>
                </li>

                <li className="flex items-center lg:me-4 me-2">
                  <i className="uil uil-bed-double lg:text-2xl text-xl me-2 text-green-600"></i>
                  <span className="">{habitacion?.camas} Camas</span>
                </li>

                <li className="flex items-center">
                  <i className="uil uil-bath lg:text-2xl text-xl me-2 text-green-600"></i>
                  <span className="">{habitacion?.banos} Baños</span>
                </li>
              </ul>
              <ul className="pb-4  flex items-center list-none">
                <div className="grid  grid-cols-3 lg:grid-cols-6">
                  {habitacion.tv && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-tv-retro lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">tv</span>
                    </li>
                  )}
                  {habitacion.aire_acondicionado && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-snowflake lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">A/A</span>
                    </li>
                  )}
                  {habitacion.wifi && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-wifi lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">wifi</span>
                    </li>
                  )}
                  {habitacion.lavanderia && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-water lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">lavanderia</span>
                    </li>
                  )}
                  {habitacion.agua_caliente && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-tear lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">A.C</span>
                    </li>
                  )}
                  {habitacion.minibar && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-glass-martini-alt lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">minibar</span>
                    </li>
                  )}
                  {habitacion.estacionamiento && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-car-sideview lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">Park</span>
                    </li>
                  )}
                  {habitacion.areas_verdes && (
                    <li className="flex items-center lg:me-4 me-2">
                      <i className="uil uil-trees lg:text-2xl text-xl me-2 text-green-600"></i>
                      <span className="">A. verdes</span>
                    </li>
                  )}{" "}
                </div>
              </ul>
              <div
                className="text-justify text-slate-400"
                dangerouslySetInnerHTML={{ __html: habitacion?.detalle }}
              ></div>

              <div className="w-full leading-[0] border-0 mt-6">
                <iframe
                  title="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3125523509962!2d-80.75972653044438!3d-0.9669027590248498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902be11b44b2eb97%3A0xe816506df4c0ae19!2sMare%20S%26M%20Hostal!5e0!3m2!1ses!2sec!4v1686259362468!5m2!1ses!2sec"
                  style={{ border: "0" }}
                  className="w-full h-[500px]"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-2xl font-medium">Informacion:</h5>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">
                        Habitacion {habitacion?.categoria}
                      </span>

                      <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                        Disponible
                      </span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Tiempo</span>
                        <span className="font-medium text-sm">1 Dia</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">
                          Precio por dia
                        </span>
                        <span className="font-medium text-sm">
                          $ {habitacion?.precio}
                        </span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Check in</span>
                        <span className="font-medium text-sm">14:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">
                          Check out
                        </span>
                        <span className="font-medium text-sm">11:00 AM</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex">
                    <div className="p-1 w-full">
                      <Link
                        to="#"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        Reservar ahora
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                    Consulta tus dudas
                  </h3>

                  <div className="mt-6">
                    <Link2
                      to="/contact"
                      className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                    >
                      <i className="uil uil-phone align-middle me-2"></i>{" "}
                      Contactanos
                    </Link2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpenMenu && (
        <Lightbox
          mainSrc={urlsImagenes[photoIndex]}
          nextSrc={urlsImagenes[(photoIndex + 1) % urlsImagenes.length]}
          prevSrc={
            urlsImagenes[
              (photoIndex + urlsImagenes.length - 1) % urlsImagenes.length
            ]
          }
          onCloseRequest={() => setIsOpenMenu(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + urlsImagenes.length - 1) % urlsImagenes.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % urlsImagenes.length)
          }
        />
      )}

      <Footer />
      <Switcher />
    </React.Fragment>
  );
};

export default withRouter(PropertyDetail);
