import { handleActions } from "redux-actions";

import * as types from "../constants/actionTypes";

const DEFAULT_ACTION = {
  helloWorld: true
};

const actionsHandlers = {
  [types.HELLO_WORLD]: (state, { payload }) => ({
    ...state,
    helloWorld: payload.helloWorld
  })
};

export default handleActions(actionsHandlers, DEFAULT_ACTION);
