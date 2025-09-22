import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
function Profile() {
  const [showpass, setshowpass] = useState(false);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [btnval, setbtnval] = useState({
    admin: false,
    customer: true,
  });
  const handlechange = (e) => {
    let { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(btnval.admin);
  return (
    <div className=" flex flex-col items-center bg-blue-200 px-4">
      <p className="text-center py-6 font-bold text-3xl text-blue-900">
        Manage Your Profile
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 font-semibold text-lg">
        <span>Login / Sign Up as</span>
        <button
          className="w-full sm:w-auto mx-0 sm:mx-2 cursor-pointer text-lg bg-blue-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() =>
            setbtnval({
              admin: true,
              customer: false,
            })
          }
        >
          Admin
        </button>
        <span className="hidden sm:block">or</span>
        <button
          className="w-full sm:w-auto mx-0 sm:mx-2 cursor-pointer text-lg bg-green-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-green-700 transition"
          onClick={() =>
            setbtnval({
              admin: false,
              customer: true,
            })
          }
        >
          Customer
        </button>
      </div>

      <div className="w-full max-w-2xl bg-blue-100 p-8 rounded-2xl shadow-2xl mt-6">
        <h2 className="text-2xl text-center font-bold text-gray-600 mb-6">
          Login as a{" "}
          <span className="bg-yellow-300 px-2 rounded-xl">
            {btnval.admin ? "Admin" : btnval.customer ? "Customer" : ""}
          </span>
        </h2>

        <form>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Enter Your Email
            </label>
            <input
              type="text"
              placeholder="Enter email address"
              value={formdata.email}
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 w-full p-3 rounded-lg outline-none transition"
              name="email"
              onChange={handlechange}
            />
          </div>

          <div className="mb-5 relative">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Enter Your Password
            </label>
            <input
              type={showpass ? "text" : "password"}
              placeholder="Enter password"
              value={formdata.password}
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 w-full p-3 rounded-lg outline-none transition"
              name="password"
              onChange={handlechange}
            />
            <div
              className="absolute top-10 right-4 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setshowpass(!showpass)}
            >
              {showpass ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          </div>

          <button className="w-full text-lg font-semibold mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg  transition shadow-md">
            Login
          </button>

          <p className="text-center mt-4 text-gray-600 text-sm">
            Don't have an Account ?
            <Link to="/profile/sign-up">
              <span className="text-blue-600 font-bold ml-3 cursor-pointer hover:underline">
                Sign up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Profile;
