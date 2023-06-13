import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const iniciarSesion = async (user) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/local`, user);
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const registrar = async (user) => {
  user.username = user.cedula;
  user.role = "2";
  user.confirmed = true;
  try {
    const response = await axios.post(`${BASE_API_URL}/users`, user);
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const persitirUsario = ({ user, jwt = "jwt" }) => {
  user.jwt = jwt;
  localStorage.setItem("usuario", JSON.stringify(user));
};

export const obtenerUsuario = () => {
  return JSON.parse(localStorage.getItem("usuario"));
};

export const cerrarSesion = () => {
  localStorage.removeItem("usuario");
  window.location.href = "/"; // Reemplaza con la URL de la ventana a la que deseas redirigir
};
