import React, { Component } from "react";
import { Link, Link as Link2 } from "react-router-dom";

import Icon from "../../assets/images/logo-icon-64.png";
import BackgroudImage from "../../assets/images/hotel/banner.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { iniciarSesion, persitirUsario } from "../../services/auth.service";
import { useState } from "react";
import { alertBasic } from "../../utils/extends";

const Login = () => {
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.identifier && user.password) {
      const data = await iniciarSesion(user);
      if (data?.status === 200) {
        persitirUsario(data.data);

        window.location.href = "/"; // Reemplaza con la URL de la ventana a la que deseas redirigir
      } else {
        const params = {
          title: "Datos no validos",
          text: "Los datos que ha ingresado no son validos",
          icon: "error",
        };
        alertBasic(params);
      }
    } else {
      const params = {
        title: "Campo vacio",
        text: "Ingrese un correo y una contraseña valida",
        icon: "info",
      };
      alertBasic(params);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };
  return (
    <React.Fragment>
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
        ></div>

        <div className="container z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <Link2 to="/index">
                <img src={Icon} className="mx-auto" alt="" />
              </Link2>
              <h5 className="my-6 text-xl font-semibold text-center">
                Iniciar Sesión
              </h5>
              <form className="ltr:text-left rtl:text-right">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginEmail">
                      Correo:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3"
                      placeholder="micorreo@gmail.com"
                      name="identifier"
                      onChange={handleInputChange}
                      value={user?.identifier}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginPassword">
                      Contraseña:
                    </label>
                    <input
                      id="LoginPassword"
                      type="password"
                      className="form-input mt-3"
                      placeholder="******"
                      name="password"
                      onChange={handleInputChange}
                      value={user?.password}
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="inline-flex items-center">
                      <input
                        className="form-checkbox text-green-600 rounded w-4 h-4 me-2 border border-inherit"
                        type="checkbox"
                        value=""
                        id="RememberMe"
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="RememberMe"
                      >
                        Recuerdame
                      </label>
                    </div>

                    <p className="text-slate-400 mb-0">
                      <Link2
                        to="/auth-reset-password"
                        className="text-slate-400"
                      >
                        ¿Olvido su contraseña?
                      </Link2>
                    </p>
                  </div>

                  <div className="mb-4">
                    <Link
                      to="#"
                      className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      onClick={handleSubmit}
                    >
                      iniciar Sesión
                    </Link>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      ¿Aun no tienes cuenta?
                    </span>{" "}
                    <Link2
                      to="/auth-signup"
                      className="text-black dark:text-white font-bold"
                    >
                      Registrate
                    </Link2>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
