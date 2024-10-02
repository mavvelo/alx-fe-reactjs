// formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  // Add more validation rules as needed
});

function FormikForm() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // Handle form submission (e.g., send data to the server)
          console.log('Form submitted:', values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            {/* Add more fields here */}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;