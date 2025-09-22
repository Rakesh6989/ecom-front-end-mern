import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TinyModal from "../Components/TinyModal";
function SignUp() {
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    email: "",
    pass: "",
    cnfpass: "",
  });
  const [btnval, setbtnval] = useState({
    admin: false,
    customer: true,
    btnText: "Customer",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleOk = () => {
    if (btnval.admin) {
      setbtnval((prev) => ({
        ...prev,
        btnText: "Admin",
      }));
    }
    if (btnval.customer) {
      setbtnval((prev) => ({
        ...prev,
        btnText: "Customer",
      }));
    }

    setIsModalOpen(false);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, pass, cnfpass } = formdata;
    if (!name || !phone || !email || !pass || !cnfpass) {
      alert("Please Input All fields");
      return;
    }
    if (pass !== cnfpass) {
      alert("Password didn't match");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Form Submitted Successfully", data);
      } else console.log("Something Went Wrong");
    } catch (c) {
      console.log("API Connection Failed", c);
    }
  };

  return (
    <div className=" bg-blue-200 pb-15">
      <div className="max-w-2xl w-full mx-auto ">
        <p className="text-center py-6 font-bold text-3xl text-blue-900">
          Manage Your Profile
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 font-semibold text-lg">
          <span>Login / Sign Up as</span>
          <button
            className="w-full sm:w-auto mx-0 sm:mx-2 cursor-pointer text-lg bg-green-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-green-700 transition"
            onClose={() => {
              setbtnval(() => ({
                admin: false,
                customer: true,
                // btnText: "Customer",
              }));
              // setIsModalOpen(false);
            }}
          >
            Customer
          </button>
          <span className="hidden sm:block">or</span>

          <button
            className="w-full sm:w-auto mx-0 sm:mx-2 cursor-pointer text-lg bg-blue-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => {
              setbtnval({
                admin: true,
                customer: false,
              });
              setIsModalOpen(true);
            }}
          >
            Admin
          </button>
        </div>

        <div className="bg-blue-100  shadow-xl p-7 rounded-xl my-8">
          <h2 className="text-2xl text-center font-bold text-gray-600 mb-6">
            Sign Up as a{" "}
            <span className="bg-yellow-300 px-2 rounded-xl">
              {btnval.btnText == "Admin"
                ? "Admin"
                : btnval.btnText == "Customer"
                ? "Customer"
                : ""}
            </span>
          </h2>

          <form className="py-4  " onSubmit={handlesubmit}>
            <div className="my-2 relative">
              <label>Enter your Name</label>
              <input
                type="text"
                placeholder=" Name"
                className="border w-full pl-10 p-2 mt-2 rounded"
                name="name"
                value={formdata.name}
                onChange={handlechange}
                // required={true}
              />
              <Person2Icon className="absolute top-10 left-2   text-gray-500" />
            </div>

            <div className="my-2 relative">
              <label>
                <label>Enter your Phone Number</label>
                <PhoneInput
                  country={"in"}
                  value={formdata.phone}
                  onChange={(value) =>
                    setformdata((prev) => ({ ...prev, phone: value }))
                  }
                  inputStyle={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  buttonStyle={{
                    border: "none",
                  }}
                  containerStyle={{ marginBottom: "1rem" }}
                />
              </label>
            </div>
            <div className="my-2 relative">
              <label>Enter your Email</label>
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="border w-full p-2 pl-10 mt-2  rounded"
                value={formdata.email}
                onChange={handlechange}
                // required={true}
              />
              <EmailIcon className="absolute top-10 left-2   text-gray-500" />
            </div>

            <div className="my-2 relative">
              <lable>Enter Your Password</lable>
              <input
                type="password"
                placeholder="Password"
                name="pass"
                value={formdata.pass}
                onChange={handlechange}
                className="border w-full p-2 pl-10 mt-2 rounded"
                // required={true}
              />
              <LockOpenIcon className="absolute top-10 left-2   text-gray-500" />
            </div>

            <div className="my-2 relative">
              <lable>Re-Enter Your Password</lable>

              <input
                type="password"
                placeholder="Confirm Password"
                name="cnfpass"
                value={formdata.cnfpass}
                onChange={handlechange}
                // required={true}
                className="border w-full p-2 mt-2 pl-10 rounded"
              />
              <LockOpenIcon className="absolute top-10 left-2   text-gray-500" />
            </div>

            <button className="w-full text-lg font-semibold mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg  transition shadow-md">
              Sign Up
            </button>
            <p className="text-center mt-4 text-gray-600 text-sm">
              Already have an Account ?
              <Link to="/profile">
                <span className="text-blue-600 font-bold ml-3 cursor-pointer hover:underline">
                  Log in
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>

      <TinyModal
        isOpen={isModalOpen}
        message="As an Admin, you can manage products (add, update, delete). Changes will be reflected live after owner verification"
        onOk={handleOk}
        onClose={() => {
          setbtnval((prev) => ({
            ...prev,
            btnText: "Customer",
          }));
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

export default SignUp;
