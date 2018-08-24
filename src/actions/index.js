import axios from "axios";
import { createAction } from "redux-actions";

import * as types from "../constants/actionTypes";

export const helloWorld = createAction(types.HELLO_WORLD);
