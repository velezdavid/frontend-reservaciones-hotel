import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

// endpoint para buscar habitaciones en la seccion principal
// http://localhost:1337/api/habitaciones?filters[estado][$in][0]=Disponible&filters[capacidad_personas][$gte]=1
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
