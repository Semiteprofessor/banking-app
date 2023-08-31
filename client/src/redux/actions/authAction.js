/** @format */

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionTypes from "./types";
import { CLEAR_ERRORS } from "./types";
import { returnErrors } from "./errorAction";

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: actionTypes.REG_LOADING });

  const data = JSON.stringify(newUser);
  console.log(data);

  await axios({
    method: "POST",
    url: `${actionTypes.API_URI}/api/v1/auth/register`,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const { token } = response.data;
      AsyncStorage.setItem("token", token);
      dispatch({ type: actionTypes.CLEAR_ERRORS });
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.REGISTER_FAIL, payload: error.message });
      // dispatch(
      //   returnErrors(
      //     error.response.data.msg,
      //     error.response.data.status,
      //     actionTypes.REGISTER_FAIL
      //   )
      // );
    });
};

//** Amazon Load User */
export const loadUser = () => async (dispatch) => {};
