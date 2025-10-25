import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string().min(6, "Password Must be atleast 6 Characters").required("Password is required")
});
