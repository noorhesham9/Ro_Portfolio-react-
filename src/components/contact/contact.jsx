import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import { Button, Stack, Snackbar, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Form, Formik, Field, ErrorMessage } from "formik";
import "./contact.css";
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
    message: Yup.string().required("required"),
  });
  return (
    <>
      <Typography className="SendMain">Send me a message!</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          console.log(errors.email || errors.fullName || errors.subject);
          return (
            <Form className="FForm">
              <Field
                className="name field"
                name="fullName"
                id="fullName"
                as={TextField}
                required
                error={errors.fullName && touched.fullName}
                label="Full Name"
              ></Field>
              <ErrorMessage
                component={"span"}
                className="errMSg"
                name="fullName"
              />

              <Field
                className="email field"
                name="email"
                id="email"
                error={errors.email && touched.email}
                as={TextField}
                required
                label="Email"
              ></Field>
              <ErrorMessage
                component={"span"}
                className="errMSg"
                name="email"
              />
              <Field
                className="subject field"
                name="subject"
                id="subject"
                as={TextField}
                error={errors.subject && touched.subject}
                required
                label="Subject"
              ></Field>
              <ErrorMessage
                component={"span"}
                className="errMSg"
                name="subject"
              />
              <Typography className="messageTell">
                tell me about your project!
              </Typography>
              <Field
                className="message field"
                name="message"
                id="message"
                as={TextField}
                multiline={true}
                minRows={4}
                error={errors.message && touched.message}
                required
              ></Field>
              <ErrorMessage
                component={"span"}
                className="errMSg"
                name="message"
              />
              <button
                className="dowload"
                type="submit"
                disabled={
                  //   false
                  state.submitting ||
                  (touched.email && errors.email) ||
                  (touched.fullName && errors.fullName) ||
                  (touched.subject && errors.subject)
                }
              >
                <a disabled>submit</a>
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Contact;
