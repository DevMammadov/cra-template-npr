import { handleActions } from "redux-actions";
import { getTextAsync } from "./action";

export interface IMainState {
  loading: boolean;
  text: string;
}

const initialState: IMainState = {
  loading: false,
  text: "",
};

export default handleActions(
  {
    [getTextAsync.started]: (state) => ({ ...state, loading: true }),
    [getTextAsync.failed]: (state) => ({ ...state, loading: false }),
    [getTextAsync.success]: (state, action: any) => ({
      ...state,
      text: action.payload,
      loading: false,
    }),
  },
  initialState
);
