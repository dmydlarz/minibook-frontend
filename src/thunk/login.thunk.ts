import { loginDTO } from "../DTOs/userDTO";
import { ThunkAction } from "redux-thunk";
import RootState from "../redux/store";
import { AnyAction } from "redux";
import {
  loginFailed_action,
  loginSuccess_action,
} from "../redux/actions/login.action";

export const thunkLogin =
  (data: loginDTO): ThunkAction<void, typeof RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const user = await exampleAPI(data);
      dispatch(loginSuccess_action({ user }));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      dispatch(loginFailed_action());
    }
  };

function exampleAPI(data: any) {
  console.log(data);
  return Promise.resolve({
    firstName: "John",
    lastName: "Dickerson",
    displayName: "JDickerson",
    email: "John010Dickerson@gmail.com",
    location: "Detroit, Michigan",
    gender: "Male",
    number: "+1 (555) 555-5555",
    country: "United States of America",
    birthday: "Nov 08, 2021",
  });
}
