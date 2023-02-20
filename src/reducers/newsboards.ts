import { GET_NEWSBOARD } from "../actions/types";
import { INews } from "../interfaces/INews";

const initialState: { news: INews[] } = { news: [] };

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWSBOARD:
      return { news: payload };

    default:
      return state;
  }
}
