import React, { Component, useEffect, useState } from "react";
import TinySlider from "tiny-slider-react";

import "tiny-slider/dist/tiny-slider.css";

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";
import avatar4 from "../assets/images/client/04.jpg";
import { opiniones } from "../services/opinion.service";
const estrellas = {
  uno: "1",
  dos: "2",
  tres: "3",
  cuatro: "4",
  cinco: "5",
};
const settings = {
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 12,
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

const ClientTwo = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getOpiniones = async () => {
      const data = await opiniones();
      if (data?.status === 200) {
        setClients(data?.data?.data);
      }
    };
    getOpiniones();
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            ¿Qué dicen nuestros clientes?
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Descubre las opiniones de nuestros clientes satisfechos y conoce su
            experiencia en nuestro hotel.
          </p>
        </div>

        <div className="flex justify-center relative mt-8">
          <div className="relative w-full">
            <div className="tiny-three-item">
              <TinySlider settings={settings}>
                {clients.map((el, index) => (
                  <div className="tiny-slide" key={index}>
                    <div className="text-center mx-3">
                      <p className="text-lg text-slate-400 italic">
                        {" "}
                        "{el.attributes.opinion} "{" "}
                      </p>

                      <div className="text-center mt-5">
                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                          {Array.from(
                            { length: estrellas[el.attributes.calificacion] },
                            (_, index) => (
                              <li className="inline ms-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                            )
                          )}
                        </ul>
                        {/* 
                          <img
                            src={el.profile}
                            className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                            alt=""
                          /> */}
                        <h6 className="mt-2 fw-semibold">
                          {el.attributes.nombre}
                        </h6>
                        {/* <span className="text-slate-400 text-sm">
                            {el.designation}
                          </span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientTwo;
