import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const crearReservacion = async (reservacion) => {
  const data = {
    data: reservacion,
  };
  try {
    const response = await axios.post(`${BASE_API_URL}/reservaciones`, data);
    return response || {};
  } catch (error) {
    console.log(error);
  }
};
export const buscarReservaciones = async (guests) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/habitaciones/?filters[estado][$in][0]=Disponible&filters[capacidad_personas][$gte]=${guests}&populate=*`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const habitacionesDisponibles = async () => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/habitaciones/?filters[estado][$in][0]=Disponible&populate=*`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const habitacionesDisponiblesPorCategoria = async (categoria) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/habitaciones/?filters[categoria][$in][0]=${categoria}&filters[estado][$in][0]=Disponible&pagination[limit]=100&populate=*`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const detalleHabitacion = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/habitaciones/${id}?populate=*`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const obtenerReservacionPorUsuario = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/reservaciones?pagination[limit]=100&populate[0]=habitacion.fotos&filters[usuario][id][$eq][0]=2&populate[1]=usuario`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};
