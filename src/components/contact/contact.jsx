import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import { Button, Stack, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Form, Formik } from "formik";

function Contact() {
  const [state, handleSubmit] = useForm("xdoqzqoy");
  console.log(state.errors);
  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
    console.log("successfully");
  }
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = {
    fullName: Yup.string().required("Required !"),
    email: Yup.string().email("invalid email format"),
    subject: Yup.string().required("Required !"),
    message: Yup.string(),
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return <Form></Form>;
        }}
      </Formik>
      <label htmlFor="name">Fullname</label>
      <input id="name" name="fullName" type="text" />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="subject">subject</label>
      <input id="subject" type="text" name="subject" />
      <textarea id="message" name="message" />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </>
  );
}

export default Contact;
