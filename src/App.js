import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required."),
      last_name: Yup.string().required("Last name is required."),
      email: Yup.string()
        .email("Please provide a valid email address")
        .required("Email is required."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="">Sign up!!</h1>
        <div className="form_input_container">
          <label htmlFor="first_name">First Name</label>
          <input
            className={`form_input ${
              formik.touched.first_name &&
              formik.errors.first_name &&
              "error-input"
            }`}
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <p className="error-text">{formik.errors.first_name}</p>
          )}
        </div>
        <div className="form_input_container">
          <label htmlFor="first_name">Last Name</label>
          <input
            className={`form_input ${
              formik.touched.last_name &&
              formik.errors.last_name &&
              "error-input"
            }`}
            id="last_name"
            type="text"
            placeholder="Enter your last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.last_name}
            </p>
          )}
        </div>
        <div className="form_input_container">
          <label htmlFor="email">Email Address</label>
          <input
            className={`form_input ${
              formik.touched.email && formik.errors.email && "error-input"
            }`}
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email_name}
          />
          {formik.touched.email && formik.errors.email && (
            <p class="error-text">{formik.errors.email}</p>
          )}
        </div>
        <div className="form_btn_container">
          <button className="btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <p>&copy;2023 All rights reserved.</p>
    </div>
  );
};

export default App;
