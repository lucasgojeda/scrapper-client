/** Libraries */
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

/** Material UI - Custom elements */
const AuthBgContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  minHeight: "650px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e6e8ea",
}));

const AuthWrapperContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "90%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const AuthFormContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "95%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const AuthTitleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "5vh",
  paddingLeft: "2.5vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.up(2400)]: {
    "& .MuiTypography-root": {
      fontSize: "24px",
    },
  },
  [theme.breakpoints.down(1200)]: {
    paddingLeft: "5vw",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10vw",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  height: "95%",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 1,
  overflow: "hidden",
  border: "none",
  paddingRight: "15px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "20% 10%",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  const renderAuthTitle = () => (
    <AuthTitleContainer>
      <Typography variant="subtitle1">LOGIN</Typography>
    </AuthTitleContainer>
  );

  const renderImageContainer = () => (
    <ImageContainer>
      <Image src="https://www.microsoft.com/en-us/research/uploads/prod/2018/08/01_MSR_SIGCOMM_Data_Network_1400x788.png" />
    </ImageContainer>
  );

  return (
    <AuthBgContainer>
      <AuthWrapperContainer>
        <AuthFormContainer>
          {renderAuthTitle()}
          {children}
        </AuthFormContainer>
        {renderImageContainer()}
      </AuthWrapperContainer>
    </AuthBgContainer>
  );
};

export default AuthLayout;
