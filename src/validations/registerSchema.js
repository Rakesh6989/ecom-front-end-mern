// Import Yup
import * as Yup from "yup";

// Create and export the schema
export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters long")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),

  role: Yup.string()
    .oneOf(["customer", "admin"], "Invalid role selected")
    .required("Role is required"),
});
