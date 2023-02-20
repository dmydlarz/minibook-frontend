import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../../actions/types";

export function registerSuccess_action(data: any) {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
}

export function registerFailed_action() {
  return {
    type: REGISTER_FAIL,
  };
}
