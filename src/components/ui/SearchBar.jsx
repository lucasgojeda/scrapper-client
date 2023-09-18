/** Libraries */
import { useState } from "react";

import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/** Custom hooks */
import { useReportStore } from "../../hooks";
import { useFormik } from "formik";
import { YupSearchValidations } from "../../utils";

/** Material UI - Custom elements */
const SearchBarContainer = styled("form")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  gap: "5px",
}));

const StyledInputBase = styled(InputBase)(({ theme, isActive }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create("width"),
  width: isActive ? "70%" : "60%",
  boxShadow: isActive ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  "&:hover": {
    width: "70%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.up("md")]: {
    width: isActive ? "32.5%" : "30%",
    "&:hover": {
      width: "32.5%",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  },
}));

export const SearchBar = () => {
  const { startCreatingReport } = useReportStore();

  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    },

    validationSchema: YupSearchValidations,
    onSubmit: async ({ name }, { resetForm }) => {
      console.log(name);
      startCreatingReport(name);
      resetForm();
    },
  });

  const handleOnClick = () => {
    setIsActive(true);
  };

  const handleOnBlur = () => {
    setIsActive(false);
  };

  return (
    <SearchBarContainer onSubmit={formik.handleSubmit}>
      <StyledInputBase
        onClick={handleOnClick}
        onBlur={handleOnBlur}
        isActive={isActive}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        name="name"
        label="Search"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <SearchIcon sx={{ cursor: "pointer" }} onClick={formik.handleSubmit} />
    </SearchBarContainer>
  );
};
