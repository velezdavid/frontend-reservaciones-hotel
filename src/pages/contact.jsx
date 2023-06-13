import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import ContactImage from "../assets/images/svg/contact.svg";
import Switcher from "../component/Switcher";
import { Hexagon } from "react-feather";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {/* <!-- Google Map --> */}
      <div className="container-fluid relative mt-20">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="contact-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3125523509962!2d-80.75972653044438!3d-0.9669027590248498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902be11b44b2eb97%3A0xe816506df4c0ae19!2sMare%20S%26M%20Hostal!5e0!3m2!1ses!2sec!4v1686259362468!5m2!1ses!2sec"
              style={{ border: "0" }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Google Map --> */}

      {/* <!-- Start Section--> */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={ContactImage} alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:me-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    ¡Ponte en contacto!
                  </h3>

                  <form method="post" name="myForm" id="myForm">
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="name" className="font-medium">
                          Tu nombre:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-input mt-2"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="email" className="font-medium">
                          Tu correo electrónico:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-input mt-2"
                          placeholder="Tu correo electrónico"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label htmlFor="subject" className="font-medium">
                          Tu pregunta:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-input mt-2"
                          placeholder="Tu pregunta"
                        />
                      </div>

                      <div className="mb-5">
                        <label htmlFor="comments" className="font-medium">
                          Tu comentario:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-input mt-2 textarea"
                          placeholder="Tu comentario"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-phone"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Telefono</h5>
                <p className="text-slate-400 mt-3">
                  Comunicate con nosotros mediante nuestros numeros
                </p>

                <div className="mt-5">
                  <a
                    href="tel:+593962596059"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    +593962596059
                  </a>
                </div>
                <div className="mt-2  ">
                  <a
                    href="tel:+593962596059"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    +593962596059
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-envelope"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Correo</h5>
                <p className="text-slate-400 mt-3">
                  tambien puedes enviarnos un mensaje a nuestro correo
                  electrónico
                </p>

                <div className="mt-5">
                  <a
                    href="mailto:contact@example.com"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-map-marker"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Ubicación</h5>
                <p className="text-slate-400 mt-3">
                  Los Gavilanes
                  <br /> Manta 130804, Ecuador
                </p>

                <div className="mt-5">
                  <a
                    href="https://goo.gl/maps/ZtUR238ZxTfB75ir7"
                    target="_blank"
                    rel="noreferrer"
                    className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section--> */}

      <Footer />
      <Switcher />
    </React.Fragment>
  );
};

export default Contact;
