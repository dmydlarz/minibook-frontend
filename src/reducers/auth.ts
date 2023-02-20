import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
import { IUser } from "../interfaces/IUser";

const user: IUser = JSON.parse(`${localStorage.getItem("user")}`);

const initialState: { isLoggedIn: boolean; user: IUser } = user
  ? { isLoggedIn: true, user }
  : {
      isLoggedIn: false,
      user: {
        firstName: null,
        displayName: null,
        lastName: null,
        email: null,
        birthday: null,
        number: null,
        country: null,
        location: null,
        gender: null,
      },
    };

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
