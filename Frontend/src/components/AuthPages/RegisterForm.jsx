import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/features/auth/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserRegisterMutation } from "../../redux/api/userAuthApiSlice";

const RegisterForm = () => {

  const [registerMutation,{isLoading,error,data}] = useUserRegisterMutation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async () => {
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await registerMutation({username,email,password}).unwrap();
      dispatch(
        userRegister({
          username: response.username,
          email: response.email,
          token: response.token,
        })
      );

      toast.success("Registration successful!");
      console.log("Registration successful:", response);

      setTimeout(() => navigate("/login"), 2000); // redirect after toast
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-8 tracking-wide">
          Create Account
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-300 font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button
        disabled={isLoading}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
        >
          {isLoading?'Registering..':'Register'}
        </button>

        {/* Extra */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterForm;