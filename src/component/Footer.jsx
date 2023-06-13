import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import LogoLight from "../assets/images/logo-light.png";
import {
  MapPin,
  Mail,
  Phone,
  Dribbble,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "react-feather";
import { suscripcionOfertas } from "../services/contacto.service";
import { alertBasic } from "../utils/extends";

const Footer = () => {
  const [correo, setCorreo] = useState("");

  const handleInputChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (correo) {
      const data = await suscripcionOfertas(correo);
      if (data?.status === 200) {
        const params = {
          title: "Gracias por su registro",
          text: "Su correo ha sido registrado",
        };
        alertBasic(params);
        setCorreo("");
      } else {
        if (data.message === "This attribute must be unique") {
          const params = {
            title: "Registro existente",
            text: "Este correo ya se encuentra registrado",
            icon: "info",
          };
          alertBasic(params);
        }
      }
    } else {
      const params = {
        title: "Campo vacio",
        text: "Ingrese un correo para registrar",
        icon: "info",
      };
      alertBasic(params);
    }
  };

  return (
    <React.Fragment>
      <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative w-full">
                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="ltr:md:text-left rtl:md:text-right text-center z-1">
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                        Ofertas exclusivas por correo
                      </h3>
                      <p className="text-slate-400 max-w-xl mx-auto">
                        Regístrate para ofertas exclusivas y promociones
                        especiales por correo
                      </p>
                    </div>

                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input
                          required
                          type="email"
                          id="subcribe"
                          name="correo"
                          value={correo}
                          onChange={handleInputChange}
                          className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                          placeholder="Ingresa tu correo :"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        />
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-full"
                        >
                          Recibir ofertas
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -top-5 -start-5">
                    <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link2 to="#" className="text-[22px] focus:outline-none">
                      <img src={LogoLight} alt="" />
                    </Link2>
                    <p className="mt-6 text-gray-300">
                      Elegancia, confort y hospitalidad en nuestro hotel para
                      una experiencia inolvidable.
                    </p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Compañia
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link2
                          to="/index-two"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Inicio
                        </Link2>
                      </li>
                      <li>
                        <Link2
                          to="/grid"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{" "}
                          Habitaciones
                        </Link2>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Enlaces útiles
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link2
                          to="/terms"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{" "}
                          Términos y Servicios
                        </Link2>
                      </li>
                      <li className="mt-[10px]">
                        <Link2
                          to="/privacy"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{" "}
                          Política de Privacidad
                        </Link2>
                      </li>

                      <li className="mt-[10px]">
                        <Link2
                          to="/contact"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{" "}
                          Contactos
                        </Link2>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Detalles de contacto
                    </h5>
                    <div className="flex mt-6">
                      <MapPin className="w-5 h-5 text-green-600 me-3"></MapPin>
                      <div className="">
                        <h6 className="text-gray-300 mb-2">
                          Los Gavilanes
                          <br /> Manta 130804, <br /> Ecuador
                        </h6>
                        <a
                          href="https://goo.gl/maps/ZtUR238ZxTfB75ir7"
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox"
                        >
                          Ver en Google maps
                        </a>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <Mail className="w-5 h-5 text-green-600 me-3"></Mail>
                      <div className="">
                        <a
                          href="mailto:contact@example.com"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <Phone className="w-5 h-5 text-green-600 me-3 m-auto"></Phone>
                      <div className="">
                        <p className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">
                          +593962596059 +593984632260
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="ltr:md:text-left rtl:md:text-right text-center">
                <p className="mb-0 text-gray-300">
                  ©{" "}
                  <script
                    type="text/javascript"
                    id="www-widgetapi-script"
                    src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"
                  ></script>
                  <script
                    id="iframe_api"
                    src="https://www.youtube.com/iframe_api"
                  ></script>
                  {new Date().getFullYear()}{" "}
                  <Link2 to="/" className="text-reset">
                    Mare S&M Hostal Todos los derechos reservados
                  </Link2>
                  .
                </p>
              </div>

              <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                <li className="inline ms-1">
                  <Link2
                    to="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Dribbble className="h-4 w-4"></Dribbble>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.behance.net/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i className="uil uil-behance align-baseline"></i>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Linkedin className="h-4 w-4"></Linkedin>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Facebook className="h-4 w-4"></Facebook>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Instagram className="h-4 w-4"></Instagram>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://twitter.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Twitter className="h-4 w-4"></Twitter>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="mailto:support@shreethemes.in"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Mail className="h-4 w-4"></Mail>
                  </Link2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
