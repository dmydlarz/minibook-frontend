import { ThunkAction } from "redux-thunk";
import RootState from "../redux/store";
import { AnyAction } from "redux";
import { handleSearch_action } from "../redux/actions/search.action";
import { ISearch } from "../interfaces/ISearch";
import photo from "../assets/autumn.jpg";

export const thunkSearch =
  (data: string): ThunkAction<void, typeof RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const result = await exampleAPI(data);
      dispatch(handleSearch_action(result));
    } catch (e) {}
  };

function exampleAPI(data: any) {
  const exampleResult: ISearch[] = [
    {
      photo,
      title: "[USER/GROUP/COMMENT/PHOTO]",
      summary: "Truncated results of descriptions...",
    },
    {
      photo,
      title: "[USER/GROUP/COMMENT/PHOTO]",
      summary: "Truncated results of descriptions...",
    },
    {
      photo,
      title: "[USER/GROUP/COMMENT/PHOTO]",
      summary: "Truncated results of descriptions...",
    },
  ];
  return Promise.resolve(exampleResult);
}
