/** Libraries */
import { useDispatch, useSelector } from "react-redux";

/** API */
import scrapperApi from "../api/scrapperApi";

/** Store */

/** Redux toolkit - Slices */
import { authCheckingFinish, authLogin, authLogout } from "../store/slices";

import {
  uiCloseProgressBackdrop,
  uiOpenProgressBackdrop,
} from "../store/slices";

export const useAuthStore = () => {
  const { checking, _id, name, username, email } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const startLogin = async (email, password) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      const {
        data: { token, user },
        status,
      } = await scrapperApi.post("auth/login", { email, password });

      if (status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem(
          "token-init-date",
          new Date().getTime().toString()
        );
        dispatch(authLogin(user));
        dispatch(uiCloseProgressBackdrop());
      } else {
        dispatch(uiCloseProgressBackdrop());
      }
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      return console.log(error);
    }
  };

  const startChecking = async () => {
    if (!localStorage.getItem("token")) return dispatch(authCheckingFinish());

    try {
      const {
        data: { user, token, msg },
        status,
      } = await scrapperApi.get("auth/renew");

      if (status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem(
          "token-init-date",
          new Date().getTime().toString()
        );

        dispatch(authLogin(user));
      } else {
        if (msg === "invalid token.") {
          const removeToken = new Promise((resolve) => {
            resolve(() => {
              localStorage.removeItem("token-init-date");
              localStorage.removeItem("token");
            });
          });

          removeToken.then(() => {
            dispatch(authCheckingFinish());
          });
        } else {
          dispatch(authCheckingFinish());
        }
      }
    } catch (error) {
      dispatch(authCheckingFinish());
      console.log(error);
    }
  };

  const startLogout = () => {
    dispatch(uiOpenProgressBackdrop());

    localStorage.removeItem("token-init-date");
    localStorage.removeItem("token");

    dispatch(authLogout());

    dispatch(uiCloseProgressBackdrop());
  };

  return {
    //* Propiedades
    checking,
    _id,
    name,
    username,
    email,

    //* Métodos
    startLogin,
    startChecking,
    startLogout,
  };
};
