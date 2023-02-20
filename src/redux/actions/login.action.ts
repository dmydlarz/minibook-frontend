import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../../actions/types";

export function loginSuccess_action(data: any) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFailed_action() {
  return {
    type: LOGIN_FAIL,
  };
}
export function logout_action() {
  localStorage.removeItem("user");
  return {
    type: LOGOUT,
  };
}
