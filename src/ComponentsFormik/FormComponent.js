import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./FormComponent.module.css"
import clsx from "clsx";

function FormComponent() {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          phoneNumber: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
          } else if (isNaN(values.phoneNumber)) {
            errors.phoneNumber = "Use only digites";
          } else if (values.phoneNumber.length !== 12) {
            errors.phoneNumber = "Must be 12 digites";
          } 
          return errors;
        }}
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
              <ErrorMessage className={clsx(style.errorText)} name="firstName" component="div" />
            </div>
            <div>
              <Field type="email" name="email" />
              <ErrorMessage className={clsx(style.errorText)} name="email" component="div" />
            </div>
            <div>
              <Field type="phone" name="phoneNumber" />
              <ErrorMessage className={clsx(style.errorText)} name="phoneNumber" component="div" />
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
