/** Libraries */
// import { useDispatch, useSelector } from "react-redux";

/** API */
import scrapperApi from "../api/scrapperApi";

/** Store */

/** Redux toolkit - Slices */
// import {
//   authCheckingFinish,
//   authLogin,
//   authLogout,
// } from "../store/slices/auth.slice";

// import {
//   uiCloseProgressBackdrop,
//   uiOpenProgressBackdrop,
// } from "../store/slices/ui.slice";

export const useAuthStore = () => {
  //   const { checking, _id, name, username, email } = useSelector(
  //     (state) => state.auth
  //   );

  //   const dispatch = useDispatch();

  const startLogin = async (email, password) => {
    try {
      //   dispatch(uiOpenProgressBackdrop());

      const {
        data,
        // data: { token, user },
        status,
      } = await scrapperApi.post("auth/login", { email, password });
      console.log({ status, data });
      if (status === 200) {
        // localStorage.setItem("token", token);
        // localStorage.setItem(
        //   "token-init-date",
        //   new Date().getTime().toString()
        // );
        // dispatch(authLogin(user));
        // dispatch(uiCloseProgressBackdrop());
      } else {
        // dispatch(uiCloseProgressBackdrop());
      }
    } catch (error) {
      //   dispatch(uiCloseProgressBackdrop());
      return console.log(error);
    }
  };

  const startRegister = async (name, email, password) => {
    try {
      console.log(name, email, password);
      // dispatch(uiOpenProgressBackdrop());

      // const { data } = await scrapperApi.post("users", {
      //     name,
      //     email,
      //     password,
      // });

      // console.log(data);

      // const { token, user, msg, errors } = data;

      // if (msg === "OK") {
      //     localStorage.setItem("token", token);
      //     localStorage.setItem("token-init-date", new Date().getTime().toString());

      //     // dispatch(
      //     //     authLogin({
      //     //         _id: user._id,
      //     //         name: user.name,
      //     //         email: user.email,
      //     //     })
      //     // );

      //     dispatch(uiCloseProgressBackdrop());
      // } else {
      //     errors !== undefined && console.log(errors);
      //     msg !== undefined && console.log(msg);
      //     dispatch(uiCloseProgressBackdrop());
      // }
    } catch (error) {
      //   dispatch(uiCloseProgressBackdrop());
      console.log(error);
    }
  };

  const startChecking = async () => {
    // if (!localStorage.getItem("token")) return dispatch(authCheckingFinish());

    try {
      const {
        data: { token, msg },
        // data: { user, token, msg },
        status,
      } = await scrapperApi.get("auth/renew");

      if (status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem(
          "token-init-date",
          new Date().getTime().toString()
        );

        // dispatch(authLogin(user));
      } else {
        if (msg === "invalid token.") {
          const removeToken = new Promise((resolve) => {
            resolve(() => {
              localStorage.removeItem("token-init-date");
              localStorage.removeItem("token");
            });
          });

          removeToken.then(() => {
            // dispatch(authCheckingFinish());
          });
        } else {
          //   dispatch(authCheckingFinish());
        }
      }
    } catch (error) {
      //   dispatch(authCheckingFinish());
      console.log(error);
    }
  };

  const startLogout = () => {
    // dispatch(uiOpenProgressBackdrop());

    localStorage.removeItem("token-init-date");
    localStorage.removeItem("token");

    // dispatch(authLogout());

    // dispatch(uiCloseProgressBackdrop());
  };

  return {
    //* Propiedades
    // checking,
    // _id,
    // name,
    // username,
    // email,

    //* Métodos
    startLogin,
    startRegister,
    startChecking,
    startLogout,
  };
};
