/** Libraries */
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

/** Custom hooks */
import { useUiStore } from "../../hooks";

// eslint-disable-next-line react/prop-types
export const AppLoader = () => {
  const { progressBackdrop } = useUiStore();

  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={progressBackdrop}
    >
      <CircularProgress color="inherit" size="80px" sx={{ display: "block" }} />
    </Backdrop>
  );
};
