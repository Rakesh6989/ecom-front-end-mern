"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../validations/registerSchema";
import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  Loader2,
  LogIn,
} from "lucide-react";

export default function RegisterForm() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Submitted:", values);
    alert("Form submitted successfully!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="flex items-center pt-20 justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6">
      <div className="bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 sm:p-10 w-full max-w-md md:max-w-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Create an Account
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Join our developer community today
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-700 placeholder-gray-400"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Role
                </label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  <Field
                    as="select"
                    name="role"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select your role</option>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="role"
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
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" /> Register
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
