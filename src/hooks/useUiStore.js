/** Libraries */
import { useSelector } from "react-redux";

export const useUiStore = () => {
  const { progressBackdrop } = useSelector((state) => state.ui);

  // const dispatch = useDispatch();

  return {
    //* Propiedades
    progressBackdrop,

    //* Métodos
    // startLogin,
  };
};
