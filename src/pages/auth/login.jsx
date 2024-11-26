import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/craveio.png";
import face from "../../assets/face.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import MainContext from "../../context/context";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleLogin} from "@react-oauth/google"


const GOOGLE_CLIENT_ID = "819399806132-u1mlq18p3gosbg71b3nrkh83i7bnnfg9.apps.googleusercontent.com";

const SignInPage = () => {
  const navigate = useNavigate();
  const { setAuthTokens, setUser } = useContext(MainContext);

  // Formik for email/password login
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post("http://127.0.0.1:8000/user/access/", {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    },
  });

  // Google login success handler
  const handleGoogleLogin = async (response) => {
    const token = response.credential; // The token provided by Google
    console.log(response)
    if (!token){
      console.error('No token Found!')
      return;

    }
    try {
      const res = await axios.post("http://127.0.0.1:8000/user/google/auth/", {
        token,
      });

      // Handle response based on whether it's a new user or returning user
      if (res.data.is_new_user) {
        alert("Welcome! You have successfully signed up.");
      } else {
        alert("Welcome back! You have successfully signed in.");
      }

      // Save tokens to local storage
      localStorage.setItem("authTokens", JSON.stringify(res.data));

      setAuthTokens(res.data);
      setUser(jwtDecode(res.data.access));
      navigate("/home");
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  // Google login failure handler
  const handleGoogleFailure = (response) => {
    console.error("Google login failed:", response);
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Left Section (Sign-In Form) */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-20">
        {/* Logo */}
        <div className="h-20 w-40 mb-10 bg-transparent">
          <img src={logo} alt="craveio" />
        </div>
        <h2 className="text-4xl font-bold text-orange-600 mb-3">Sign In</h2>
        <p className="text-gray-600 text-sm mb-6">Sign in to stay connected.</p>
        <form className="space-y-6 w-3/4" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="rememberMe"
                className="mr-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.rememberMe}
              />
              Remember me?
            </label>
            <a href="#" className="text-orange-500">
              Forgot Password
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition text-sm"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Sign in
          </button>
        </form>

        <div className="mt-8 w-3/4">
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleFailure}
            cookiePolicy={"single_host_origin"}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition bg-white"
          />
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to={'/signup'} className="text-orange-500">
            Click here to sign up.
          </Link>
        </p>
      </div>

      <div className="w-1/2 relative flex items-center justify-center">
        <img
          src={face}
          alt="Food Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignInPage;
