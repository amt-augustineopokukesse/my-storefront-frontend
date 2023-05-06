import axios from "axios";
import { NewUser } from "../../Redux/Authentication/initialState";

let API_BASE_URL:string;

/**User SignUp */

export const createAccount = async (userData:NewUser) => {
    try {
      const response = await axios.post(API_BASE_URL, userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };