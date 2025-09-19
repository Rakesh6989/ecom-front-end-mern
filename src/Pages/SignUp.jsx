import { useState } from "react";

function SignUp() {
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    email: "",
    pass: "",
    cnfpass: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
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

//   console.log("formdata", formdata);
  return (
    <>
      <div className="max-w-2xl w-full mx-auto">
        <p className="text-xl font-semibold ">Registration Form</p>

        <form className="py-4" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder=" Name"
            className="border w-full p-2 rounded"
            name="name"
            value={formdata.name}
            onChange={handlechange}
            // required={true}
          />

          <input
            type="tel"
            placeholder=" Phone Number"
            name="phone"
            className="border w-full p-2 my-3 rounded"
            value={formdata.phone}
            onChange={handlechange}
            // required={true}
          />

          <input
            type="email"
            placeholder=" Email"
            name="email"
            className="border w-full p-2  rounded"
            value={formdata.email}
            onChange={handlechange}
            // required={true}
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={formdata.pass}
            onChange={handlechange}
            className="border w-full p-2 my-3 rounded"
            // required={true}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="cnfpass"
            value={formdata.cnfpass}
            onChange={handlechange}
            // required={true}
            className="border w-full p-2 rounded"
          />
          <button
            type="submit"
            className="border py-1 rounded text-blue-500 cursor-pointer mt-3 px-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
