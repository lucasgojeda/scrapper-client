/** Libraries */
import { TextField } from "@mui/material";

import { useFormik } from "formik";

/** Custom hooks */
import { useAuthStore } from "../../hooks";

/** Layouts */
import AuthLayout from "../../layouts/AuthLayout";

/** Utils */
import { YupLoginValidations } from "../../utils";

/** Material UI - Custom components */
import {
  LoginCard,
  FieldsContainer,
  LoginButtonContainer,
  LoginButton,
} from "./Styled";

export const LoginPage = () => {
  const { startLogin } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "ojedalucasgabriel2@gmail.com",
      password: "Password123!",
    },

    validationSchema: YupLoginValidations,
    onSubmit: async ({ email, password }, { resetForm }) => {
      startLogin(email, password);
      resetForm();
    },
  });

  const FIELDS = [
    {
      label: "Email",
      name: "email",
      value: formik.values.email,
      onChange: formik.handleChange,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: formik.values.password,
      onChange: formik.handleChange,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
  ];

  const renderForm = () => (
    <FieldsContainer onSubmit={formik.handleSubmit}>
      {FIELDS.map((field) => (
        <TextField key={field.name} fullWidth variant="standard" {...field} />
      ))}
      <LoginButtonContainer>
        <LoginButton type="submit">Sign in</LoginButton>
      </LoginButtonContainer>
    </FieldsContainer>
  );

  return (
    <AuthLayout>
      <LoginCard>{renderForm()}</LoginCard>
    </AuthLayout>
  );
};
