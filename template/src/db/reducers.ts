import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import main, { IMainState } from "views/main/db/reducer";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    main,
  });

export interface IAppState {
  router: RouterState;
  main: IMainState;
}
