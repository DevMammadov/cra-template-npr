import mainApi from "api/main.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { mainActions } from "./action";

export function* mainSaga() {
  yield takeEvery(mainActions.getText, bindAsyncActions(mainActions.getTextAsync)(mainApi.getText));
}
