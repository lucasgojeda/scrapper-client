/** Components */
import { AppLoader } from "../../components";

// eslint-disable-next-line react/prop-types
export const UiProvider = ({ children }) => {
  return (
    <div>
      <AppLoader />
      {children}
    </div>
  );
};
