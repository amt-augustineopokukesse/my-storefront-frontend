import axios from "axios";
import { NewUser } from "../../Redux/Authentication/authInitialStates";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**User SignUp */

export const createAccount = async (userData:NewUser) => {
    try {
      const response = await axios.post(API_BASE_URL, userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };