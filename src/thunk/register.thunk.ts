import { loginDTO, userDTO } from "../DTOs/userDTO";
import { ThunkAction } from "redux-thunk";
import RootState from "../redux/store";
import { AnyAction } from "redux";
import {
  loginFailed_action,
  loginSuccess_action,
} from "../redux/actions/login.action";
import {
  registerFailed_action,
  registerSuccess_action,
} from "../redux/actions/register.action";

export const thunkRegister =
  (data: userDTO): ThunkAction<void, typeof RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const user = await exampleAPI(data);
      dispatch(registerSuccess_action({ user }));
    } catch (e) {
      dispatch(registerFailed_action());
    }
  };

function exampleAPI(data: any) {
  console.log(data);
  return Promise.resolve({ firstName: "Dima" });
}
