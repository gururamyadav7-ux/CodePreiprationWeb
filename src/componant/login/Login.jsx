
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData,
      );

      alert("Login successful!");
      // Form Reset
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error logging in user:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full border border-gray-300 lg:w-1/2 lg:h-4/5 rounded-xl gardiant flex flex-col justify-center items-center gap-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col lg:px-20 px-3 gap-4"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <div>
            <span className="text-xl text-black">Username</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border bg-white border-gray-300 w-full rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>
          <div>
            <span className="text-xl text-black">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border bg-white border-gray-300 w-full rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <span className="text-xl text-black">Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border bg-white border-gray-300 w-full   rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              New account created?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-bold text-[1rem] hover:underline"
              >
                Register
              </Link>
            </p>
            <Link
              to="/forgot-password"
              className="text-gray-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
