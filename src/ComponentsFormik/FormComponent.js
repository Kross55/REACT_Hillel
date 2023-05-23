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
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  return (
    <div>
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
            <div>
              <Field type="text" name="firstName" />
              <ErrorMessage
                className={clsx(style.errorText)}
                name="firstName"
                component="div"
              />
            </div>
            <div>
              <Field type="email" name="email" />
              <ErrorMessage
                className={clsx(style.errorText)}
                name="email"
                component="div"
              />
            </div>
            <div>
              <Field type="phone" name="phoneNumber" />
              <ErrorMessage
                className={clsx(style.errorText)}
                name="phoneNumber"
                component="div"
              />
            </div>
            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
