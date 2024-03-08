import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import { Button, Stack, Snackbar, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Form, Formik, Field, ErrorMessage } from "formik";

function Contact() {
  const [state, handleSubmit] = useForm("xdoqzqoy");
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
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required !"),
    email: Yup.string()
      .email("invalid email format")
      .required("required email"),
    subject: Yup.string().required("Required !"),
    message: Yup.string(),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          console.log(errors);
          return (
            <Form>
              <Field
                name="fullName"
                id="fullName"
                as={TextField}
                required
                error={errors.fullName && touched.fullName}
                label="Full Name"
              ></Field>
              <Field
                name="email"
                id="email"
                error={errors.email && touched.email}
                as={TextField}
                required
                label="Email"
              ></Field>
              <Field
                name="subject"
                id="subject"
                as={TextField}
                error={errors.subject && touched.subject}
                required
                label="Subject"
              ></Field>
              <Field
                name="message"
                id="message"
                as={TextField}
                error={errors.message && touched.message}
                required
                label="Message"
              ></Field>
              <button
                type="submit"
                disabled={
                  state.submitting ||
                  errors.email ||
                  errors.fullName ||
                  errors.subject
                }
              >
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Contact;
