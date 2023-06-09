import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const opiniones = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/opiniones`);
    return response || {};
  } catch (error) {
    console.log(error);
  }
};
