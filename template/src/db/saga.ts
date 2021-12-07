import { all } from "redux-saga/effects";
//import your every saga here
import { mainSaga } from "views/main/db/saga";

export default function* rootSaga() {
  yield all([
    // add your saga here as exampleSaga()
    mainSaga(),
  ]);
}
