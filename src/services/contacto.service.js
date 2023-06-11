import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const suscripcionOfertas = async (correo) => {
  const data = {
    data: {
      correo,
    },
  };
  try {
    const response = await axios.post(`${BASE_API_URL}/suscripciones`, data);
    return response || {};
  } catch (error) {
    return error.response.data.error;
  }
};
