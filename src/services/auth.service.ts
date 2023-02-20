import axios from "axios";
import { loginDTO, userDTO } from "../DTOs/userDTO";

export const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(data: loginDTO) {
    return axios.post(API_URL + "signin", data).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data: userDTO) {
    return axios.post(API_URL + "signup", {
      ...data,
    });
  }
}

export default new AuthService();
