/** Libraries */
import { styled } from "@mui/material/styles";

/** Material UI - Custom components */
export const LoginCard = styled("div")(({ theme }) => ({
  width: "80%",
  height: "95%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

export const FieldsContainer = styled("form")(({ theme }) => ({
  width: "70%",
  maxWidth: "400px",
  height: "auto",
  marginTop: "15vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
  [theme.breakpoints.up(2400)]: {
    gap: "70px",
    maxWidth: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const TitleContainer = styled("div")(() => ({
  width: "100%",
  height: "5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginButtonContainer = styled("div")(() => ({
  width: "100%",
  height: "5vh",
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginButton = styled("button")(({ theme }) => ({
  width: "100%",
  padding: "10px",
  color: "#fff",
  fontSize: "14px",
  backgroundColor: "#000",
  borderRadius: "10px",
  cursor: "pointer",
  border: "none",
  ":hover": {
    boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
    border: "none",
    transition: "all 0.5s ease",
  },
  [theme.breakpoints.up(2400)]: {
    marginTop: "-2.5vh",
  },
}));
