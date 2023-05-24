import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./FormComponent.module.css";
import clsx from "clsx";
import * as Yup from "yup";

function FormComponent() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{12}$/, "Phone number must be 12 digits")
      .required("Phone is required"),
    password: Yup.string()
      .min(5, "must be at least 5 characters long")
      .required("Password is required"),
  });

  const initialValues = {
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  return (
    <div className={clsx(style.container)}>
      <i style={{"--clr": "#00ff0a"}}></i>
      <i style={{"--clr": "#ff0057"}}></i>
      <i style={{"--clr": "#fffd44"}}></i>
      <div className={clsx(style.login)}>
        <h2 style={{"margin": "1px", "padding": "5px"}}>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={clsx(style.input__box)}>
                <Field 
                type="text" 
                name="firstName" 
                placeholder="firstName" 
                />
                <ErrorMessage
                  className={clsx(style.errorText)}
                  name="firstName"
                  component="div"
                />
              </div>
              <div className={clsx(style.input__box)}>
                <Field 
                type="email" 
                name="email" 
                placeholder="abc@mail"
                />
                <ErrorMessage
                  className={clsx(style.errorText)}
                  name="email"
                  component="div"
                />
              </div>
              <div className={clsx(style.input__box)}>
                <Field 
                type="phone" 
                name="phoneNumber"
                placeholder="123123123123" 
                />
                <ErrorMessage
                  className={clsx(style.errorText)}
                  name="phoneNumber"
                  component="div"
                />
              </div>
              <div className={clsx(style.input__box)}>
                <Field 
                type="password" 
                name="password"
                placeholder="Password" 
                />
                <ErrorMessage
                  className={clsx(style.errorText)}
                  name="password"
                  component="div"
                />
              </div>
              <div className={clsx(style.input__box)}>
                <button type="submit" disabled={isSubmitting}>
                  Sing in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponent;
