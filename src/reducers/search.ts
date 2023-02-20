import { SET_MESSAGE, CLEAR_MESSAGE, HANDLE_SEARCH } from "../actions/types";
import { ISearch } from "../interfaces/ISearch";

const initialState: { search: ISearch[] } = { search: [] };

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case HANDLE_SEARCH:
      return { search: payload };

    // case CLEAR_SEARCH:
    //   return { message: "" };

    default:
      return state;
  }
}
