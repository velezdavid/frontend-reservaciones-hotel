import React, { Component } from "react";
import { Hexagon } from "react-feather";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Servicios
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Aprovecha nuestros servicios excepcionales para una experiencia
              inolvidable y placentera.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-bath"></i>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Agua caliente</h5>
                <p className="text-slate-400 mt-3">
                  Sumérgete en una agradable ducha con agua caliente para
                  revitalizar tus sentidos y relajarte por completo.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-snowflake"></i>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-xl font-medium">Aire acondicionado</h5>
                <p className="text-slate-400 mt-3">
                  Mantén una temperatura fresca y confortable en todo momento
                  para un descanso óptimo.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-trees"></i>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Áreas verdes</h5>
                <p className="text-slate-400 mt-3">
                  Explora nuestros hermosos espacios naturales, ideales para
                  meditar y disfrutar de la naturaleza.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-wifi"></i>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Wifi</h5>
                <p className="text-slate-400 mt-3">
                  Mantente conectado en todo momento con nuestro servicio de
                  wifi gratuito y de alta velocidad.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-restaurant"></i>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Restaurante</h5>
                <p className="text-slate-400 mt-3">
                  Deléitate con una amplia variedad de platos deliciosos en
                  nuestro acogedor restaurante, donde la gastronomía es un arte.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-bed-double"></i>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Comodidad</h5>
                <p className="text-slate-400 mt-3">
                  Tu comodidad es nuestra prioridad, con habitaciones equipadas
                  y servicios que harán que te sientas como en casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
