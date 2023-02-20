import { HANDLE_SEARCH } from "../../actions/types";

export function handleSearch_action(data: any) {
  return {
    type: HANDLE_SEARCH,
    payload: data,
  };
}
