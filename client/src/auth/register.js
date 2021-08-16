import React, { Component } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import  axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confrimpassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().strict().trim().required("This field is required"),
      email: yup
        .string()
        .email("Enter valid email address")
        .strict()
        .trim()
        .required("This field is required"),
      password: yup.string().strict().trim().required("This field is required"),
      confrimpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Must be same")
        .required("This field is required"),
    }),
    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:5000/api/register", data)
        .then((res) => {
          props.history.push("/login");
          toast.success("Successfully registerd");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  return (
    <>
      <div className="container mt4">
        <div className="jumbotron">
          <h4>Register</h4>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                className="form-control"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                className="form-control"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                className="form-control"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="confrimpassword"
                className="form-control"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.confrimpassword}
              />
              {formik.errors.confrimpassword ? (
                <div className="text-danger">
                  {formik.errors.confrimpassword}
                </div>
              ) : null}
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <a
                href="login"
                // onClick={() => {
                //   window.location.href = "login";
                // }}
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
