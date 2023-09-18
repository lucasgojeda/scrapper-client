/** Libraries */
import { styled } from "@mui/material/styles";

import LogoutIcon from "@mui/icons-material/Logout";

/** Components */
import { CardReport, SearchBar } from "../../components";

/** Custom hooks */
import { useAuthStore, useReportStore } from "../../hooks";
import { useEffect } from "react";

/** Material UI - Custom components */
const HomeContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#e6e8ea",
  fontFamily: "monospace",
  [theme.breakpoints.down("sm")]: {
    // width: "95%",
  },
}));

const NavbarContainer = styled("div")(() => ({
  width: "100%",
  height: "7.5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "none",
}));

const StyledButton = styled("button")(() => ({
  color: "rgba(86,88,105)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "none",
  border: "none",
  cursor: "pointer",
  gap: "2.5px",
  fontFamily: "monospace",
  paddingRight: "15px",
  "& .MuiSvgIcon-root": {
    fontSize: "14px",
  },
  ":hover": {
    textDecoration: "underline",
  },
}));

const ContentContainer = styled("div")(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
}));

const SearchBarContainer = styled("div")(() => ({
  width: "100%",
  height: "10vh",
  minHeight: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ReportsTitle = styled("h2")(() => ({
  width: "95%",
  height: "5vh",
  minHeight: "40px",
  borderTop: "1px solid rgba(86,88,105, 0.15)",
  paddingTop: "10px",
  color: "rgba(86,88,105)",
  fontFamily: "monospace",
}));

const ReportsContainer = styled("div")(({ theme }) => ({
  width: "75%",
  height: "82.5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  [theme.breakpoints.down(1200)]: {
    width: "95%",
  },
}));

const CardsContainer = styled("div")(({ theme }) => ({
  width: "75%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  [theme.breakpoints.down(1200)]: {
    width: "95%",
  },
}));

const NoReportsContainer = styled("div")(({ theme }) => ({
  width: "75%",
  height: "82.5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  [theme.breakpoints.down(1200)]: {
    width: "95%",
  },
}));

const NoReportsTitle = styled("h2")(() => ({
  fontFamily: "monospace",
}));

export const HomePage = () => {
  const { startLogout } = useAuthStore();
  const { startLoadingReports, reports } = useReportStore();

  useEffect(() => {
    startLoadingReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNavbar = () => (
    <NavbarContainer>
      <StyledButton onClick={startLogout}>
        Logout
        <LogoutIcon />
      </StyledButton>
    </NavbarContainer>
  );

  const renderSearchBar = () => (
    <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer>
  );

  const renderReports = () => (
    <ReportsContainer>
      <ReportsTitle>Reports</ReportsTitle>
      {reports.length !== 0 ? (
        <CardsContainer>
          {reports.map((item) => (
            <CardReport
              key={item._id}
              name={item.name}
              url={item.url}
              date={item.date}
              productsQuantity={item.productsQuantity}
            />
          ))}
        </CardsContainer>
      ) : (
        <NoReportsContainer>
          <NoReportsTitle>There are no reports yet</NoReportsTitle>
        </NoReportsContainer>
      )}
    </ReportsContainer>
  );

  return (
    <HomeContainer>
      {renderNavbar()}
      <ContentContainer>
        {renderSearchBar()}
        {renderReports()}
      </ContentContainer>
    </HomeContainer>
  );
};
