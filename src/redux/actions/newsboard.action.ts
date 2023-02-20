import { GET_NEWSBOARD } from "../../actions/types";
import { INews } from "../../interfaces/INews";

export function getNewsBoard_action(data: INews[]) {
  return {
    type: GET_NEWSBOARD,
    payload: data,
  };
}
