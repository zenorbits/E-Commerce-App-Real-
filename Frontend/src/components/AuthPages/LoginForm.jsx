import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/features/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserLoginMutation } from "../../redux/api/userAuthApiSlice";

const Loginform = () => {

  const [loginMutation, { isLoading, error, data }] = useUserLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state)=>state.userAuth.role);

  const loginUser = async () => {
    const { email, password } = formData;

    try {
      const response = await loginMutation({ email, password }).unwrap();

      // ✅ Update Redux state
      dispatch(
        userLogin({
          email: response.email,
          token: response.token,
          role:response.user.role
        })
      );

      toast.success("Login successful!");
      console.log("Login successful:", response);

      // ✅ Redirect after success

      if(response.user.role === 'admin'){
         setTimeout(() => navigate("/admin/dashboard"), 2000);
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error?.data?.message || "Login failed");;
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
    loginUser();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-8 tracking-wide">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-300 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
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
            autoComplete="off"
            className="w-full px-4 py-2 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
        >
          {isLoading?'Logging in...':'Login'}
        </button>

        {/* Extra */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Register
          </a>
        </p>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Loginform;