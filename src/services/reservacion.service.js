import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

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
