import { ThunkAction } from "redux-thunk";
import RootState from "../redux/store";
import { AnyAction } from "redux";
import { getNewsBoard_action } from "../redux/actions/newsboard.action";

export const thunkNewsBoard =
  (): ThunkAction<void, typeof RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const newsboard = await exampleAPI();
      dispatch(getNewsBoard_action(newsboard));
    } catch (e) {}
  };

function exampleAPI() {
  return Promise.resolve(exampleResult);
}
const exampleResult = [
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: 3,
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: 7,
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: 9,
  },
];
