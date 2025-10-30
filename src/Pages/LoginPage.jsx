import { loginSchema } from "../validations/loginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail, Lock, LogIn, Loader2, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Toast from "../Components/Toast";
export default function LoginForm() {
  const navigate = useNavigate();
  const [toastdata, settoastdata] = useState({
    showtoast: null,
    message: "",
    type: "",
    duration: "",
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("data", values);
      const res = await axios.post("http://localhost:5000/login", values);
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log("res.data.user", res.data.user);
      settoastdata((prev) => ({
        ...prev,
        showtoast: true,
        message: "Login Successfull!",
        type: "success",
      }));
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Errors are", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";
      settoastdata((prev) => ({
        ...prev,
        showtoast: true,
        message: errorMessage,
        type: "error",
      }));
    } finally {
      setSubmitting(false);
      //   resetForm();
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 pt-20">
      <div className="bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 sm:p-10 w-full max-w-md md:max-w-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">
            Login to your LapTopiya account
          </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-700 placeholder-gray-400"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  <Field
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-700 placeholder-gray-400"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Logging in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" /> Login
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/sign-up")}
                  className="text-blue-600 hover:text-blue-800  pl-1 font-medium cursor-pointer"
                >
                  Sign up
                </span>
              </p>
              <p
                className="text-blue-600 text-center text-sm hover:text-blue-800 font-medium cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>
            </Form>
          )}
        </Formik>
      </div>

      {toastdata.showtoast && (
        <Toast
          message={toastdata.message}
          type={toastdata.type}
          duration={4000}
          onClose={() => {
            settoastdata((prev) => ({
              ...prev,
              showtoast: false,
            }));
          }}
        />
      )}
    </div>
  );
}
