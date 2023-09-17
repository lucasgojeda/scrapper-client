/** Libraries */
import * as Yup from "yup";

/** AUTH */
export const YupLoginValidations = Yup.object({
  email: Yup.string()
    .min(6, "Email should have at least 6 characters.")
    .required("Field required"),
  password: Yup.string()
    .min(8, "Password should have at least 6 characters.")
    .required("Field required"),
});
