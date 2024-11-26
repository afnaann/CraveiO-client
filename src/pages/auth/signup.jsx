import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/craveio.png";
import face from "../../assets/face.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      terms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
    }),
    onSubmit: async (values) => {
      console.log(values)
      try{
        const response = await axios.post('http://127.0.0.1:8000/user/signup/',{
          name: values.fullName,
          email : values.email,
          password : values.password,
          confirmPassword : values.confirmPassword
        })
        navigate('/signin')
      }
      catch(err){
        console.log(err)
      }

    },
  });

  return (
    <div className="h-screen flex bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="hidden lg:w-1/2 lg:block relative flex items-center justify-center">
        <img
          src={face}
          alt="Food Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-5 lg:px-20">
        <div className="h-20 w-40 mb-10 bg-transparent">
          <img src={logo} alt="craveio" />
        </div>
        <h2 className="text-4xl font-bold  text-orange-600 mb-3">Sign Up</h2>
        <p className="text-gray-600 text-sm mb-6">Create an account to get started.</p>
        <form className="space-y-6 w-full lg:w-3/4" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-3  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
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
              className="w-full px-4 py-3  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3  rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="terms"
                className="mr-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
              />
              Agree to Terms & Conditions
            </label>
            {formik.touched.terms && formik.errors.terms && (
              <div className="text-red-500 text-sm">{formik.errors.terms}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition text-sm"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Sign Up
          </button>
        </form>

        {/* Google Sign-in */}
        <div className="mt-8 w-full lg:w-3/4">
          <button
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition bg-white"
          >
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
              alt="Google Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-700 text-sm">Sign up with Google</span>
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={'/signin'} className="text-orange-500">
            Click here to sign in.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
