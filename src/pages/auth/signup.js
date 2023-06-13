import React, { Component, useState } from "react";
import { Link, Link as Link2 } from "react-router-dom";
import Icon from "../../assets/images/logo-icon-64.png";
import BackgroudImage from "../../assets/images/hotel/banner.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  alertBasic,
  generateRandomCode,
  validarCedula,
} from "../../utils/extends";
import { persitirUsario, registrar } from "../../services/auth.service";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    cedula: "",
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cedula, nombre, telefono, email, password } = formValues;
    if (cedula && nombre && telefono && email && password) {
      const cedulaValida = validarCedula(cedula);
      if (cedulaValida.valido) {
        const data = await registrar(formValues);
        if (data?.status === 201) {
          const user = { user: data.data };
          persitirUsario(user);
          window.location.href = "/";
        } else {
          const params = {
            title: "Datos no validos",
            text: data.message,
            icon: "error",
          };
          alertBasic(params);
        }
      } else {
        const params = {
          title: "Dato incorrecto",
          text: cedulaValida.mensaje,
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
              <Link2 to="/">
                <img src={Icon} className="mx-auto" alt="" />
              </Link2>
              <h5 className="my-4 text-xl font-semibold text-center">
                Registro
              </h5>
              <div className="h-96 overflow-y-auto">
                <form className="ltr:text-left rtl:text-right">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2 col-span-2">
                      <label className="font-semibold" htmlFor="Cedula">
                        Cédula:
                      </label>
                      <input
                        id="Cedula"
                        type="number"
                        className="form-input mt-2"
                        placeholder="Cédula"
                        value={formValues.cedula}
                        onChange={handleInputChange}
                        name="cedula"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="font-semibold" htmlFor="RegisterName">
                        Nombre completo:
                      </label>
                      <input
                        id="RegisterName"
                        type="text"
                        className="form-input mt-2"
                        placeholder="Manuel Lucas"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="font-semibold" htmlFor="Telefono">
                        Teléfono:
                      </label>
                      <input
                        id="Telefono"
                        type="number"
                        className="form-input mt-2"
                        placeholder="0932894487"
                        value={formValues.telefono}
                        onChange={handleInputChange}
                        name="telefono"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="font-semibold" htmlFor="LoginEmail">
                        Correo:
                      </label>
                      <input
                        id="LoginEmail"
                        type="email"
                        className="form-input mt-2"
                        placeholder="name@gmail.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                        name="email"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="font-semibold" htmlFor="LoginPassword">
                        Contraseña:
                      </label>
                      <input
                        id="LoginPassword"
                        type="password"
                        className="form-input mt-2"
                        placeholder="********"
                        value={formValues.password}
                        onChange={handleInputChange}
                        name="password"
                      />
                    </div>

                    <div className="col-span-2 mb-2">
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox text-green-600 rounded w-4 h-4 me-2 border border-inherit"
                          type="checkbox"
                          value=""
                          id="AcceptT&C"
                        />
                        <label
                          className="form-check-label text-slate-400"
                          htmlFor="AcceptT&C"
                        >
                          Acepto{" "}
                          <Link to="/terms" className="text-green-600">
                            Términos y Condiciones
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="col-span-2 mb-2">
                      <Link
                        to="#"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                        onClick={handleSubmit}
                      >
                        Registrarse
                      </Link>
                    </div>

                    <div className="col-span-2 text-center">
                      <span className="text-slate-400 me-2">
                        ¿Ya tienes una cuenta?{" "}
                      </span>{" "}
                      <Link2
                        to="/auth-login"
                        className="text-black dark:text-white font-bold"
                      >
                        Iniciar sesión
                      </Link2>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
